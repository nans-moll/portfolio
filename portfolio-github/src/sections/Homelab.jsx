import { Users, MessageCircle, Shield, Inbox, Bot, Search, Film, Tv, Captions, Download, Lock, Folder, Play, Boxes, LayoutDashboard, Bell, ChevronDown } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "../components/ui";
import { HOMELAB_INTRO, HOMELAB_STACK, HOMELAB_FLOW, HOMELAB_NOTES, HOMELAB_SERVICES, HOMELAB_STORAGE, HOMELAB_VIGILANCE } from "../data/content";

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

function Table({ t, head, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm" style={{ color: t.muted }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                className="border-b px-2 py-2 font-semibold"
                style={{ borderColor: t.border, color: t.text }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td
                  key={j}
                  className="border-b px-2 py-2 align-top"
                  style={{ borderColor: t.border, color: j === 0 ? t.text : t.muted }}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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

      {/* Cycle d'une demande + points clés */}
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-bold uppercase tracking-wider" style={{ color: t.muted }}>
            Le cycle d'une demande
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            {HOMELAB_FLOW.map((s, i) => (
              <li key={i} className="text-sm leading-relaxed" style={{ color: t.muted }}>
                {s}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold uppercase tracking-wider" style={{ color: t.muted }}>
            Points clés
          </h3>
          <div className="flex flex-col gap-3">
            {HOMELAB_NOTES.map((n, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{ backgroundColor: t.card, border: `1px solid ${t.border}` }}
              >
                <p className="text-sm font-bold" style={{ color: t.text }}>
                  {n.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: t.muted }}>
                  {n.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Détail des services par couche */}
      <div className="mt-14">
        <h3 className="mb-6 text-lg font-bold uppercase tracking-wider" style={{ color: t.muted }}>
          Détail des services
        </h3>
        <div className="flex flex-col gap-8">
          {HOMELAB_SERVICES.map((grp) => (
            <div key={grp.layer}>
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: t.accent }}
              >
                {grp.layer}
              </p>
              <Table t={t} head={["Service", "Port", "Rôle"]} rows={grp.rows} />
            </div>
          ))}
        </div>
      </div>

      {/* Stockage */}
      <div className="mt-14">
        <h3 className="mb-6 text-lg font-bold uppercase tracking-wider" style={{ color: t.muted }}>
          Stockage
        </h3>
        <Table t={t} head={HOMELAB_STORAGE.head} rows={HOMELAB_STORAGE.rows} />
      </div>

      {/* Points de vigilance */}
      <div className="mt-14">
        <h3 className="mb-4 text-lg font-bold uppercase tracking-wider" style={{ color: t.muted }}>
          Points de vigilance
        </h3>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {HOMELAB_VIGILANCE.map((v, i) => (
            <li key={i} className="text-sm leading-relaxed" style={{ color: t.muted }}>
              {v}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
