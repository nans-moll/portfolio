import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import Logo from "../components/Logo";
import { Eyebrow } from "../components/ui";
import { ME } from "../data/content";

export default function Hero({ t }) {
  return (
    <section
      id="accueil"
      style={{ scrollMarginTop: 80, minHeight: "calc(100vh - 60px)" }}
      className="mx-auto flex max-w-3xl flex-col items-center justify-center px-5 py-20 text-center"
    >
      <div className="mb-8">
        <Logo t={t} />
      </div>
      <Eyebrow t={t}>{ME.role}</Eyebrow>
      <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl" style={{ color: t.text }}>
        Construire, héberger
        <br />
        et comprendre l'infra.
      </h1>
      <p className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: t.muted }}>
        {ME.bio}
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projets"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: t.btnBg, color: t.btnText, boxShadow: t.glowBtn }}
        >
          Voir mes projets <ArrowRight size={16} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors"
          style={{ border: `1px solid ${t.border}`, color: t.text }}
        >
          <Mail size={16} /> Me contacter
        </a>
      </div>
      <a href="#apropos" aria-label="Descendre" className="mt-16 animate-bounce" style={{ color: t.faint }}>
        <ChevronDown size={26} />
      </a>
    </section>
  );
}
