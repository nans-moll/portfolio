import { useMemo } from "react";
import { mulberry32 } from "../lib/prng";

// Génère un skyline (immeubles + fenêtres + enseignes + contours néon),
// une seule fois grâce à une graine fixe.
function buildCity() {
  const r = mulberry32(20260827);
  const BASE = 430;
  const shades = ["#0a1020", "#0b1428", "#0c1730", "#09101f"];
  const neon = ["#22d3ee", "#22d3ee", "#e879f9", "#a78bfa", "#67e8f9", "#f0abfc", "#fcd34d"];
  const neonEdge = ["#22d3ee", "#e879f9", "#a78bfa", "#38bdf8", "#c026d3"];
  const buildings = [];
  let x = -20;
  while (x < 1460) {
    const w = 26 + Math.floor(r() * 68);
    const h = 90 + Math.floor(r() * 250);
    const top = BASE - h;
    const shade = shades[Math.floor(r() * shades.length)];

    const wins = [];
    const cols = Math.max(1, Math.floor((w - 10) / 13));
    const rows = Math.max(1, Math.floor((h - 16) / 15));
    for (let c = 0; c < cols; c++) {
      for (let rr = 0; rr < rows; rr++) {
        if (r() < 0.3) {
          wins.push({
            x: x + 7 + c * 13,
            y: top + 9 + rr * 15,
            c: neon[Math.floor(r() * neon.length)],
          });
        }
      }
    }

    let sign = null;
    if (r() < 0.22 && h > 150) {
      sign = {
        x: x + 6,
        y: top + 16 + Math.floor(r() * 40),
        w: w - 12,
        c: r() < 0.5 ? "#22d3ee" : "#e879f9",
      };
    }

    const neonTop = r() < 0.6 ? neonEdge[Math.floor(r() * neonEdge.length)] : null;
    let band = null;
    if (r() < 0.32 && BASE - top > 70) {
      band = {
        y: top + 24 + Math.floor(r() * (BASE - top - 44)),
        c: neonEdge[Math.floor(r() * neonEdge.length)],
      };
    }

    buildings.push({ x, w, top, shade, wins, sign, neonTop, band, BASE });
    x += w + 2 + Math.floor(r() * 8);
  }

  const streaks = buildings
    .filter((b) => b.sign)
    .map((b) => ({ x: b.x + b.w / 2, c: b.sign.c }));
  return { buildings, streaks, BASE };
}

export default function Cityscape() {
  const { buildings, streaks, BASE } = useMemo(buildCity, []);
  return (
    <svg width="100%" height="100%" viewBox="0 0 1440 460" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cityGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e879f9" stopOpacity="0" />
          <stop offset="0.6" stopColor="#7c3aed" stopOpacity="0.12" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0.18" />
        </linearGradient>
        <filter id="neonBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <filter id="streakBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* halo d'horizon */}
      <rect x="0" y="0" width="1440" height="460" fill="url(#cityGlow)" />

      {/* immeubles */}
      {buildings.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.top} width={b.w} height={b.BASE - b.top} fill={b.shade} />
          {b.wins.map((w, j) => (
            <rect key={j} x={w.x} y={w.y} width="4" height="7" fill={w.c} opacity="0.85" />
          ))}
          {b.neonTop && (
            <g>
              <rect x={b.x - 2} y={b.top - 2} width={b.w + 4} height="5" fill={b.neonTop} opacity="0.45" filter="url(#neonBlur)" />
              <rect x={b.x} y={b.top - 1} width={b.w} height="2.5" fill={b.neonTop} />
            </g>
          )}
          {b.band && (
            <g>
              <rect x={b.x - 1} y={b.band.y - 1} width={b.w + 2} height="4" fill={b.band.c} opacity="0.4" filter="url(#neonBlur)" />
              <rect x={b.x} y={b.band.y} width={b.w} height="2" fill={b.band.c} />
            </g>
          )}
          {b.sign && (
            <g>
              <rect x={b.sign.x} y={b.sign.y} width={b.sign.w} height="6" fill={b.sign.c} opacity="0.5" filter="url(#neonBlur)" />
              <rect x={b.sign.x} y={b.sign.y} width={b.sign.w} height="6" rx="2" fill={b.sign.c} />
            </g>
          )}
        </g>
      ))}

      {/* sol + reflets mouillés */}
      <rect x="0" y={BASE} width="1440" height={460 - BASE} fill="#05070e" opacity="0.65" />
      {streaks.map((s, i) => (
        <rect key={i} x={s.x - 3} y={BASE} width="6" height="34" fill={s.c} opacity="0.14" filter="url(#streakBlur)" />
      ))}
    </svg>
  );
}
