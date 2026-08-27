import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "../components/ui";
import { ME } from "../data/content";

export default function Contact({ t }) {
  return (
    <Section id="contact">
      <Eyebrow t={t}>Parlons-en</Eyebrow>
      <SectionHeading t={t}>Me contacter</SectionHeading>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <p className="text-base leading-relaxed" style={{ color: t.muted }}>
            Une opportunité d'alternance, une question ou juste envie d'échanger sur l'infra ? Contacte-moi :
          </p>
          <a
            href={`mailto:${ME.email}`}
            className="inline-flex items-center gap-2 text-base font-medium"
            style={{ color: t.accent }}
          >
            <Mail size={17} /> {ME.email}
          </a>
          <div className="inline-flex items-center gap-2 text-sm" style={{ color: t.muted }}>
            <Phone size={16} /> {ME.phone}
          </div>
          <div className="inline-flex items-center gap-2 text-sm" style={{ color: t.muted }}>
            <MapPin size={16} /> {ME.location}
          </div>
          <a
            href={ME.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: t.accent }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: t.accent }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="flex items-start sm:justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: t.btnBg, color: t.btnText, boxShadow: t.glowBtn }}
          >
            <Download size={16} /> Télécharger mon CV
          </a>
        </div>
      </div>
    </Section>
  );
}
