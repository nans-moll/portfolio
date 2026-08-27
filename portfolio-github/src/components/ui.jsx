// Petites briques d'UI réutilisées dans les sections.

export function Section({ id, children, max = "max-w-5xl" }) {
  return (
    <section id={id} style={{ scrollMarginTop: 80 }} className={`mx-auto ${max} px-5 py-20`}>
      {children}
    </section>
  );
}

export function Pill({ t, children }) {
  return (
    <span
      className="rounded-full px-3 py-1.5 text-sm"
      style={{ backgroundColor: t.pill, color: t.muted, border: `1px solid ${t.border}` }}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ t, children }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: t.accent }}>
      {children}
    </p>
  );
}

export function SectionHeading({ t, children }) {
  return (
    <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: t.text }}>
      {children}
    </h2>
  );
}

export function Timeline({ t, items, Icon }) {
  return (
    <div className="flex flex-col">
      {items.map((e, i) => (
        <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
          {i !== items.length - 1 && (
            <span className="absolute top-9 h-full w-px" style={{ left: 17, backgroundColor: t.border }} />
          )}
          <div
            className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: t.pill, border: `1px solid ${t.border}`, color: t.accent }}
          >
            <Icon size={16} />
          </div>
          <div className="pt-1">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.faint }}>
              {e.period}
            </p>
            <p className="mt-1 text-base font-bold" style={{ color: t.text }}>
              {e.title}
            </p>
            <p className="text-sm" style={{ color: t.accent }}>
              {e.place}
            </p>
            {e.text && (
              <p className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
                {e.text}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function InfoCard({ t, title, Icon, children }) {
  return (
    <div className="rounded-2xl p-5" style={{ backgroundColor: t.card, border: `1px solid ${t.border}` }}>
      <div className="mb-4 flex items-center gap-2">
        <Icon size={16} style={{ color: t.accent }} />
        <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: t.text }}>
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
}
