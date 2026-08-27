import { useMemo } from "react";

// Grille en perspective (synthwave) : lignes quasi verticales qui s'écartent
// vers le haut, et rangées qui se resserrent vers l'horizon.
function buildGrid() {
  const VPy = 1500; // point de fuite sous l'écran => lignes quasi verticales
  const HX = 720;
  const H = 600;
  const rows = [];
  const N = 17;
  for (let i = 1; i < N; i++) rows.push(Math.round(H * (1 - Math.pow(i / N, 1.7))));
  const verts = [];
  const M = 15;
  const step = 70;
  for (let k = -M; k <= M; k++) {
    const x600 = HX + k * step;
    const x0 = HX + (x600 - HX) * (VPy / (VPy - H));
    verts.push({ x0, x600 });
  }
  return { rows, verts };
}

export default function SynthGrid() {
  const { rows, verts } = useMemo(buildGrid, []);
  return (
    <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="hGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <g stroke="#7b6cff" strokeWidth="1" opacity="0.4">
        {rows.map((y, i) => (
          <line key={`r${i}`} x1="0" y1={y} x2="1440" y2={y} />
        ))}
        {verts.map((v, i) => (
          <line key={`v${i}`} x1={v.x0} y1="0" x2={v.x600} y2="600" />
        ))}
      </g>
      {/* horizon lumineux */}
      <rect x="0" y="556" width="1440" height="6" fill="#a5b4fc" opacity="0.5" filter="url(#hGlow)" />
      <rect x="0" y="594" width="1440" height="10" fill="#22d3ee" opacity="0.4" filter="url(#hGlow)" />
    </svg>
  );
}
