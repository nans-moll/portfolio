import { GraduationCap, Briefcase } from "lucide-react";
import { Section, Eyebrow, SectionHeading, Timeline } from "../components/ui";
import { FORMATIONS, EXPERIENCES } from "../data/content";

export default function Parcours({ t }) {
  return (
    <Section id="parcours">
      <Eyebrow t={t}>Mon parcours</Eyebrow>
      <SectionHeading t={t}>Formations & expériences</SectionHeading>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 text-lg font-bold uppercase tracking-wider" style={{ color: t.muted }}>
            Formations
          </h3>
          <Timeline t={t} items={FORMATIONS} Icon={GraduationCap} />
        </div>
        <div>
          <h3 className="mb-8 text-lg font-bold uppercase tracking-wider" style={{ color: t.muted }}>
            Expériences
          </h3>
          <Timeline t={t} items={EXPERIENCES} Icon={Briefcase} />
        </div>
      </div>
    </Section>
  );
}
