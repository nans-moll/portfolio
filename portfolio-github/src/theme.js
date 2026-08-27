// =====================================================================
// THÈMES — palette cyberpunk (sombre) + repli clair.
// Chaque thème porte aussi ses calques de fond (bgImage / bgSize).
// =====================================================================

export const THEMES = {
  dark: {
    bg: "#080810",
    card: "rgba(18,22,34,0.72)",
    cardHover: "rgba(24,30,46,0.85)",
    border: "#213043",
    text: "#e6f1ff",
    muted: "#8ea3c4",
    faint: "#5c7291",
    pill: "rgba(15,22,34,0.7)",
    accent: "#22d3ee",
    accent2: "#e879f9",
    btnBg: "#22d3ee",
    btnText: "#04141a",
    glowBtn: "0 0 22px rgba(34,211,238,0.4)",
    glowLogo: "drop-shadow(0 0 8px rgba(34,211,238,0.7))",
    bgImage: [
      "radial-gradient(70% 50% at 50% -10%, rgba(34,211,238,0.16), transparent 60%)",
      "radial-gradient(55% 45% at 88% 8%, rgba(232,121,249,0.12), transparent 60%)",
      "radial-gradient(60% 60% at 10% 100%, rgba(232,121,249,0.08), transparent 60%)",
      "linear-gradient(rgba(34,211,238,0.055) 1px, transparent 1px)",
      "linear-gradient(90deg, rgba(34,211,238,0.055) 1px, transparent 1px)",
    ].join(", "),
    bgSize: "auto, auto, auto, 44px 44px, 44px 44px",
  },
  light: {
    bg: "#f7f7f8",
    card: "#ffffff",
    cardHover: "#ffffff",
    border: "#e6e6e6",
    text: "#181818",
    muted: "#565656",
    faint: "#8a8a8a",
    pill: "#f0f0f0",
    accent: "#2563eb",
    accent2: "#7c3aed",
    btnBg: "#181818",
    btnText: "#ffffff",
    glowBtn: "none",
    glowLogo: "none",
    bgImage: [
      "radial-gradient(60% 45% at 50% 0%, rgba(0,0,0,0.05), transparent 70%)",
      "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
    ].join(", "),
    bgSize: "auto, 22px 22px",
  },
};
