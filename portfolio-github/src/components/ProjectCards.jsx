import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { POSTS } from "../data/content";
import ProjectModal from "./ProjectModal";

// Grille responsive de cartes projet (1 col mobile, 2 col desktop),
// cliquables pour ouvrir le détail.
export default function ProjectCards({ t, theme }) {
  const [hover, setHover] = useState(null);
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {POSTS.map((p, i) => (
          <article
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => setOpen(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(i);
              }
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl outline-none transition-transform"
            style={{
              backgroundColor: hover === i ? t.cardHover : t.card,
              border: `1px solid ${hover === i ? t.accent : t.border}`,
              transform: hover === i ? "translateY(-3px)" : "none",
              boxShadow: hover === i && t.glowBtn !== "none" ? "0 0 24px rgba(34,211,238,0.1)" : "none",
            }}
          >
            <div
              className="relative flex h-32 items-center justify-center sm:h-36"
              style={{
                background: `linear-gradient(135deg, ${t.accent}22, ${t.pill})`,
                borderBottom: `1px solid ${t.border}`,
              }}
            >
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{ backgroundColor: t.bg, color: t.accent, border: `1px solid ${t.border}` }}
              >
                {p.tag}
              </span>
              <ArrowUpRight
                size={18}
                className="absolute right-3 top-3 transition-transform"
                style={{
                  color: hover === i ? t.accent : t.faint,
                  transform: hover === i ? "translate(2px,-2px)" : "none",
                }}
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold leading-snug sm:text-lg" style={{ color: t.text }}>
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: t.muted }}>
                {p.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs" style={{ color: t.faint }}>
                  {p.date} · {p.read}
                </span>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                  style={{ color: hover === i ? t.accent : t.muted }}
                >
                  Voir le détail <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {open !== null && (
        <ProjectModal t={t} theme={theme} post={POSTS[open]} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
