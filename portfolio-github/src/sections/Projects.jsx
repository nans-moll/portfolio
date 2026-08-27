import { Section, Eyebrow, SectionHeading } from "../components/ui";
import ProjectCards from "../components/ProjectCards";

export default function Projects({ t, theme }) {
  return (
    <Section id="projets">
      <Eyebrow t={t}>Ce que je construis</Eyebrow>
      <SectionHeading t={t}>Projets & articles</SectionHeading>
      <ProjectCards t={t} theme={theme} />
    </Section>
  );
}
