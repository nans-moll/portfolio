// Glyphe minimaliste : un nœud central relié à trois nœuds — un réseau.
export default function Logo({ t, size = 112 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47" stroke={t.border} strokeWidth="1" />
      <g stroke={t.faint} strokeWidth="1.4" strokeLinecap="round">
        <line x1="50" y1="50" x2="50" y2="22" />
        <line x1="50" y1="50" x2="26" y2="66" />
        <line x1="50" y1="50" x2="74" y2="66" />
      </g>
      <g fill={t.bg} stroke={t.muted} strokeWidth="1.6">
        <circle cx="50" cy="22" r="5" />
        <circle cx="26" cy="66" r="5" />
        <circle cx="74" cy="66" r="5" />
      </g>
      <circle cx="50" cy="50" r="7" fill={t.accent} style={{ filter: t.glowLogo }} />
    </svg>
  );
}
