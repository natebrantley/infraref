import { TagBadge } from "./TagBadge.jsx";
import { PROJECT_DETAILS } from "../data/projectDetails.js";

const TAG_COLORS = {
  OR: "#4ade80",
  WA: "#60a5fa",
  FED: "#f97316",
  "OR/WA": "#c084fc",
};

function PartyCard({ party }) {
  const stateColor = TAG_COLORS[party.state] || "#94a3b8";
  return (
    <div
      style={{
        background: "#0f1117",
        border: "1px solid #1e2433",
        borderRadius: "4px",
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "6px" }}>
        <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", color: "#f1f5f9", fontWeight: 600 }}>
          {party.name}
        </div>
        {party.state && (
          <span
            style={{
              fontSize: "9px",
              fontFamily: "'JetBrains Mono', monospace",
              color: stateColor,
              border: `1px solid ${stateColor}33`,
              padding: "1px 5px",
              borderRadius: "2px",
            }}
          >
            {party.state}
          </span>
        )}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748b" }}>{party.role}</div>
      {party.phone && (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#475569" }}>{party.phone}</div>
      )}
      {party.email && (
        <a
          href={`mailto:${party.email}`}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#f97316", textDecoration: "none" }}
        >
          {party.email}
        </a>
      )}
      {party.note && (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
          {party.note}
        </div>
      )}
    </div>
  );
}

export function ProjectDetailView({ slug, onBack }) {
  const project = PROJECT_DETAILS[slug];
  if (!project) {
    return (
      <div>
        <button onClick={onBack} style={{ marginBottom: "16px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", padding: "6px 12px", background: "#1e2433", border: "1px solid #2a2a2a", color: "#94a3b8", borderRadius: "3px", cursor: "pointer" }}>
          ← Back
        </button>
        <div style={{ color: "#94a3b8" }}>Project not found.</div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            padding: "6px 12px",
            background: "#1e2433",
            border: "1px solid #2a2a2a",
            color: "#94a3b8",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          ← Back to module
        </button>
      </div>

      <div style={{ borderBottom: "1px solid #1e2433", paddingBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
          <TagBadge tag={project.tag} />
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", color: "#f1f5f9", letterSpacing: "0.06em" }}>
            {project.label}
          </h1>
        </div>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>
          {project.note}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "12px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              color: "#f97316",
              textDecoration: "none",
              border: "1px solid #f97316",
              padding: "8px 14px",
              borderRadius: "3px",
            }}
          >
            Open official site ↗
          </a>
        )}
      </div>

      <div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "#60a5fa",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ width: "20px", height: "1px", background: "#60a5fa", display: "inline-block" }} />
          Related parties — quick reference
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px" }}>
          {project.relatedParties.map((party, i) => (
            <PartyCard key={i} party={party} />
          ))}
        </div>
      </div>
    </div>
  );
}
