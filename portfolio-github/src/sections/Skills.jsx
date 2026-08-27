import { Section, Eyebrow, SectionHeading, Pill } from "../components/ui";
import { SKILL_GROUPS } from "../data/content";

export default function Skills({ t }) {
  return (
    <Section id="competences">
      <Eyebrow t={t}>Stack & outils</Eyebrow>
      <SectionHeading t={t}>Compétences</SectionHeading>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        {SKILL_GROUPS.map((g) => (
          <div key={g.label}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: t.faint }}>
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Pill key={s} t={t}>
                  {s}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
