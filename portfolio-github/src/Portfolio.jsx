import { useState } from "react";
import { THEMES } from "./theme";
import { SECTION_IDS, ME } from "./data/content";
import { useActiveSection, useScrollProgress, usePrefersReducedMotion } from "./hooks";

import Header from "./components/Header";
import Background from "./components/Background";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Parcours from "./sections/Parcours";
import Homelab from "./sections/Homelab";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const t = THEMES[theme];

  const active = useActiveSection(SECTION_IDS);
  const prog = useScrollProgress();
  const reduce = usePrefersReducedMotion();

  // Parallaxe des câbles (désactivée si animations réduites).
  const on = reduce ? 0 : 1;
  const leftShift = -prog * 180 * on; // faisceau gauche monte
  const rightShift = prog * 150 * on; // faisceau droit descend

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: t.bg,
        color: t.text,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        backgroundImage: t.bgImage,
        backgroundSize: t.bgSize,
        backgroundAttachment: "fixed",
      }}
    >
      <Background theme={theme} t={t} leftShift={leftShift} rightShift={rightShift} />

      <Header
        t={t}
        theme={theme}
        toggleTheme={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
        active={active}
      />

      <main className="relative z-10">
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Parcours t={t} />
        <Homelab t={t} />
        <Projects t={t} theme={theme} />
        <Contact t={t} />
      </main>

      <footer
        className="relative z-10 mx-auto max-w-5xl px-5 py-10 text-center text-xs"
        style={{ color: t.faint, borderTop: `1px solid ${t.border}` }}
      >
        © {new Date().getFullYear()} {ME.name} — Portfolio
      </footer>
    </div>
  );
}
