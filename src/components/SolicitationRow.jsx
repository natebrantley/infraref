export function SolicitationRow({ sol }) {
  return (
    <div
      className="solicitation-row"
      style={{
        display: "grid", gridTemplateColumns: "1fr auto auto", gap: "12px", alignItems: "center",
        padding: "10px 12px", background: "#0a0c10", border: "1px solid #1e2433",
        borderRadius: "3px", marginBottom: "6px"
      }}
    >
      <div>
        <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", color: "#e2e8f0", fontWeight: 500 }}>{sol.title}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{sol.agency}</div>
      </div>
      <div className="solicitation-meta" style={{ display: "flex", gap: "12px", flexWrap: "wrap", textAlign: "right" }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#94a3b8" }}>Closes</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#fbbf24" }}>{sol.closes}</div>
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#94a3b8" }}>Est. Value</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#4ade80" }}>{sol.value}</div>
        </div>
      </div>
    </div>
  );
}
