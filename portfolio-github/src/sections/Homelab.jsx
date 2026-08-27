import { Users, MessageCircle, Shield, Inbox, Bot, Search, Film, Tv, Captions, Download, Lock, Folder, Play, Boxes, LayoutDashboard, Bell, ChevronDown } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "../components/ui";
import { HOMELAB_INTRO, HOMELAB_STACK } from "../data/content";

const ICONS = {
  Users, MessageCircle, Shield, Inbox, Bot, Search, Film, Tv,
  Captions, Download, Lock, Folder, Play, Boxes, LayoutDashboard, Bell,
};

function DiagramNode({ t, node }) {
  const Icon = ICONS[node.icon] || Boxes;
  return (
    <div className="flex w-24 flex-col items-center text-center">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{
          backgroundColor: t.pill,
          border: `1px solid ${t.border}`,
          color: t.accent,
          boxShadow: t.glowBtn !== "none" ? "0 0 14px rgba(34,211,238,0.18)" : "none",
        }}
      >
        <Icon size={20} />
      </div>
      <p className="mt-2 text-xs font-bold leading-tight" style={{ color: t.text }}>
        {node.name}
      </p>
      {node.sub && (
        <p style={{ color: t.faint, fontSize: 10, marginTop: 2 }}>{node.sub}</p>
      )}
    </div>
  );
}

function Layer({ t, layer }) {
  return (
    <div
      className="rounded-2xl p-4 sm:p-5"
      style={{ backgroundColor: t.card, border: `1px solid ${t.border}` }}
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 9,
            background: t.accent2,
            boxShadow: `0 0 8px ${t.accent2}`,
          }}
        />
        <span
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: t.faint }}
        >
          {layer.label}
        </span>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-6">
        {layer.nodes.map((n, i) => (
          <DiagramNode key={i} t={t} node={n} />
        ))}
      </div>
    </div>
  );
}

function Connector({ t }) {
  return (
    <div className="flex flex-col items-center" style={{ padding: "6px 0" }}>
      <span
        style={{
          width: 2,
          height: 22,
          background: `repeating-linear-gradient(${t.accent2} 0 4px, transparent 4px 8px)`,
        }}
      />
      <ChevronDown size={14} style={{ color: t.accent2, marginTop: -2 }} />
    </div>
  );
}

export default function Homelab({ t }) {
  return (
    <Section id="homelab">
      <Eyebrow t={t}>Mon infrastructure</Eyebrow>
      <SectionHeading t={t}>Mon Homelab</SectionHeading>
      <p className="max-w-3xl text-base leading-relaxed" style={{ color: t.muted }}>
        {HOMELAB_INTRO}
      </p>

      <div
        className="mt-8 rounded-2xl p-5 sm:p-8"
        style={{
          border: `1px solid ${t.border}`,
          backgroundImage: `radial-gradient(60% 40% at 50% 0%, rgba(232,121,249,0.07), transparent 60%)`,
          backgroundColor: t.pill,
        }}
      >
        <div className="mx-auto flex max-w-2xl flex-col">
          {HOMELAB_STACK.map((layer, i) => (
            <div key={i}>
              {i > 0 && <Connector t={t} />}
              <Layer t={t} layer={layer} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
