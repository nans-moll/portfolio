import { useEffect } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { Pill } from "./ui";

// Rend un bloc de contenu d'article : paragraphe, titre, liste, code ou tableau.
function Block({ t, theme, b }) {
  if (b.type === "h") {
    return (
      <h4 className="mt-3 text-base font-bold" style={{ color: t.text }}>
        {b.text}
      </h4>
    );
  }
  if (b.type === "ul") {
    return (
      <ul className="flex list-disc flex-col gap-2 pl-5">
        {b.items.map((it, i) => (
          <li key={i} className="text-sm leading-relaxed" style={{ color: t.muted }}>
            {it}
          </li>
        ))}
      </ul>
    );
  }
  if (b.type === "code") {
    return (
      <pre
        className="overflow-x-auto rounded-lg p-4 text-xs leading-relaxed"
        style={{
          backgroundColor: theme === "dark" ? "#05070e" : "#f3f4f6",
          border: `1px solid ${t.border}`,
          color: theme === "dark" ? "#c7f0ff" : "#0f172a",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        }}
      >
        <code>{b.code}</code>
      </pre>
    );
  }
  if (b.type === "table") {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs" style={{ color: t.muted }}>
          <thead>
            <tr>
              {b.head.map((h, i) => (
                <th
                  key={i}
                  className="border-b px-2 py-1.5 font-semibold"
                  style={{ borderColor: t.border, color: t.text }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="border-b px-2 py-1.5" style={{ borderColor: t.border }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (b.type === "vlans") {
    const conn = (
      <div
        style={{
          width: 2,
          height: 16,
          margin: "6px 0",
          background: `repeating-linear-gradient(${t.accent2} 0 4px, transparent 4px 8px)`,
        }}
      />
    );
    return (
      <div className="flex flex-col items-center">
        <div
          className="rounded-lg px-4 py-2 text-xs font-semibold"
          style={{ border: `1px solid ${t.border}`, backgroundColor: t.pill, color: t.text }}
        >
          Internet
        </div>
        {conn}
        <div
          className="rounded-lg px-4 py-2 text-center"
          style={{ border: `1px solid ${t.border}`, backgroundColor: t.pill }}
        >
          <p className="text-xs font-semibold" style={{ color: t.text }}>
            OPNsense · pare-feu
          </p>
          <p style={{ color: t.faint, fontSize: 10 }}>politique par défaut : deny</p>
        </div>
        {conn}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {b.items.map((v, i) => (
            <div
              key={i}
              className="rounded-xl p-3"
              style={{ border: `1px solid ${t.border}`, backgroundColor: t.card }}
            >
              <p className="text-xs font-bold" style={{ color: t.accent }}>
                {v.id}
              </p>
              <p style={{ color: t.faint, fontSize: 11, marginBottom: 8 }}>{v.role}</p>
              <ul className="flex flex-col gap-1">
                {v.services.map((s, j) => (
                  <li key={j} style={{ color: t.muted, fontSize: 11, lineHeight: 1.35 }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // paragraphe par défaut
  return (
    <p className="text-sm leading-relaxed" style={{ color: t.muted }}>
      {b.text}
    </p>
  );
}

// Fenêtre de détail d'un projet / article : contenu riche (post.body) ou,
// à défaut, la démarche courte (post.how). Plus stack et lien code.
export default function ProjectModal({ t, theme, post, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const blocks = post.body || (post.how || []).map((text) => ({ type: "p", text }));

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      style={{ backgroundColor: "rgba(2,4,12,0.72)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-y-auto rounded-t-2xl sm:rounded-2xl"
        style={{
          maxHeight: "88vh",
          backgroundColor: theme === "dark" ? "#0b1020" : "#ffffff",
          border: `1px solid ${t.border}`,
          boxShadow: theme === "dark" ? "0 0 40px rgba(34,211,238,0.15)" : "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div className="p-6 sm:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ backgroundColor: t.pill, color: t.accent, border: `1px solid ${t.border}` }}
            >
              {post.tag}
            </span>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="rounded-md p-1.5 transition-colors"
              style={{ color: t.muted, border: `1px solid ${t.border}` }}
            >
              <X size={18} />
            </button>
          </div>

          <h3 className="text-xl font-bold leading-snug sm:text-2xl" style={{ color: t.text }}>
            {post.title}
          </h3>
          <p className="mt-2 text-xs" style={{ color: t.faint }}>
            {post.date} · {post.read} de lecture
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {!post.body && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: t.faint }}>
                Comment je l'ai fait
              </p>
            )}
            {blocks.map((b, i) => (
              <Block key={i} t={t} theme={theme} b={b} />
            ))}
          </div>

          {post.stack && post.stack.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: t.faint }}>
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {post.stack.map((s) => (
                  <Pill key={s} t={t}>
                    {s}
                  </Pill>
                ))}
              </div>
            </div>
          )}

          {post.repo && (
            <a
              href={post.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: t.btnBg, color: t.btnText, boxShadow: t.glowBtn }}
            >
              <Github size={16} /> Voir le code <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
