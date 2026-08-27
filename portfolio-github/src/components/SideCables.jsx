// Faisceau de câbles vertical façon cyberpunk : conduits, colliers,
// boîtiers de jonction et connecteurs néon. `shift` décale le faisceau
// verticalement (parallaxe au scroll). Dessiné pour le bord gauche ;
// le bord droit est mis en miroir par le conteneur (scaleX(-1)).
export default function SideCables({ t, shift = 0 }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 150 800" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform={`translate(0 ${shift})`}>
        <g strokeLinecap="round" fill="none">
          <path d="M22 -240 C 12 -80, 30 60, 20 220 C 12 360, 30 500, 22 660 C 14 820, 28 940, 22 1040" stroke={t.border} strokeWidth="4" />
          <path d="M40 -240 C 48 -80, 32 80, 42 240 C 50 400, 34 560, 44 720 C 50 880, 38 980, 44 1040" stroke={t.faint} strokeWidth="2.5" />
          <path d="M10 -240 C 4 -60, 16 120, 8 300 C 2 480, 14 640, 8 820 C 4 960, 12 1000, 10 1040" stroke={t.border} strokeWidth="2" />
          <path d="M56 -240 C 66 -60, 42 120, 56 300 C 64 480, 50 640, 58 820 C 64 960, 52 1000, 56 1040" stroke={t.accent} strokeWidth="2.5" style={{ filter: t.glowLogo }} opacity="0.9" />
        </g>
        <g stroke={t.faint} strokeWidth="5" strokeLinecap="round">
          <line x1="6" y1="128" x2="36" y2="128" />
          <line x1="30" y1="470" x2="60" y2="470" />
          <line x1="4" y1="820" x2="26" y2="820" />
        </g>
        <rect x="14" y="248" width="24" height="32" rx="4" fill={t.pill} stroke={t.border} />
        <circle cx="26" cy="260" r="3" fill={t.accent} style={{ filter: t.glowLogo }} />
        <circle cx="26" cy="270" r="2" fill={t.faint} />
        <path d="M38 264 H 92 C 106 264, 110 274, 110 288" stroke={t.accent2} strokeWidth="2" fill="none" opacity="0.75" />
        <rect x="102" y="282" width="15" height="12" rx="3" fill={t.pill} stroke={t.border} />
        <circle cx="109.5" cy="288" r="2.5" fill={t.accent2} />
        <rect x="40" y="560" width="20" height="26" rx="4" fill={t.pill} stroke={t.border} />
        <circle cx="50" cy="572" r="2.5" fill={t.accent} style={{ filter: t.glowLogo }} />
        <circle cx="57" cy="118" r="2.5" fill={t.accent} style={{ filter: t.glowLogo }} />
        <circle cx="52" cy="640" r="2.5" fill={t.accent2} />
        <circle cx="46" cy="900" r="2.5" fill={t.accent} style={{ filter: t.glowLogo }} />
      </g>
    </svg>
  );
}
