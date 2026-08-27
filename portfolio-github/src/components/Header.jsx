import { useState } from "react";
import { Moon, Sun, Github, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { ME, SECTIONS } from "../data/content";

export default function Header({ t, theme, toggleTheme, active }) {
  const [hover, setHover] = useState(null);
  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md"
      style={{
        backgroundColor: theme === "dark" ? "rgba(8,8,16,0.72)" : "rgba(247,247,248,0.72)",
        borderBottom: `1px solid ${t.border}`,
        boxShadow: theme === "dark" ? "0 1px 16px rgba(34,211,238,0.07)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#accueil" className="flex items-center gap-2.5">
          <Logo t={t} size={24} />
          <span className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: t.text }}>
            {ME.name}
          </span>
        </a>

        <nav className="flex items-center gap-0.5">
          {SECTIONS.filter(([k]) => k !== "accueil").map(([key, label]) => {
            const isActive = active === key;
            const show = isActive || hover === key;
            return (
              <a
                key={key}
                href={`#${key}`}
                onMouseEnter={() => setHover(key)}
                onMouseLeave={() => setHover(null)}
                className="relative hidden px-3 py-2 text-sm transition-colors sm:inline-block"
                style={{ color: isActive ? t.accent : show ? t.text : t.muted }}
              >
                {label}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 4,
                    height: 2,
                    borderRadius: 2,
                    background: t.accent,
                    transform: `scaleX(${show ? 1 : 0})`,
                    transformOrigin: "left",
                    transition: "transform .25s ease",
                    boxShadow: show && theme === "dark" ? `0 0 8px ${t.accent}` : "none",
                  }}
                />
              </a>
            );
          })}

          <a
            href={ME.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="ml-1 rounded-md p-2 transition-colors"
            style={{ color: t.muted, border: `1px solid ${t.border}` }}
          >
            <Github size={16} />
          </a>
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 transition-colors"
            style={{ color: t.muted, border: `1px solid ${t.border}` }}
          >
            <Linkedin size={16} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="ml-1 rounded-md p-2 transition-colors"
            style={{ color: t.muted, border: `1px solid ${t.border}` }}
          >
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
