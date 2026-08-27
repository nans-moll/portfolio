import { Award, Languages, Sparkles, Heart } from "lucide-react";
import { Section, Eyebrow, SectionHeading, InfoCard, Pill } from "../components/ui";
import { ME, CERTIFS, LANGUES, SOFT_SKILLS, INTERESTS } from "../data/content";

export default function About({ t }) {
  return (
    <Section id="apropos">
      <Eyebrow t={t}>Qui je suis</Eyebrow>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeading t={t}>À propos de moi</SectionHeading>
          <p className="text-base leading-relaxed" style={{ color: t.muted }}>
            {ME.bio}
          </p>
        </div>
        {/* Photo — remplace public/moi.jpg par ta vraie image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={`${import.meta.env.BASE_URL}moi.jpg`}
            alt={ME.name}
            className="aspect-square w-full max-w-xs rounded-2xl object-cover"
            style={{ border: `1px solid ${t.border}` }}
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InfoCard t={t} title="Certifications" Icon={Award}>
          {CERTIFS.map((c, i) => (
            <div key={i}>
              <p className="text-sm font-semibold" style={{ color: t.text }}>
                {c.title}
              </p>
              <p className="text-sm" style={{ color: t.accent }}>
                {c.org} · {c.status}
              </p>
            </div>
          ))}
        </InfoCard>

        <InfoCard t={t} title="Langues" Icon={Languages}>
          <ul className="flex flex-col gap-1.5">
            {LANGUES.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between text-sm">
                <span style={{ color: t.text }}>{l.name}</span>
                {l.level && <span style={{ color: t.faint }}>{l.level}</span>}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard t={t} title="Soft skills" Icon={Sparkles}>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((s) => (
              <Pill key={s} t={t}>
                {s}
              </Pill>
            ))}
          </div>
        </InfoCard>

        <InfoCard t={t} title="Centres d'intérêt" Icon={Heart}>
          <ul className="flex flex-col gap-2.5">
            {INTERESTS.map((it) => (
              <li key={it.label}>
                <p className="text-sm font-medium" style={{ color: t.text }}>
                  {it.label}
                </p>
                <p className="text-sm" style={{ color: t.muted }}>
                  {it.desc}
                </p>
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </Section>
  );
}
