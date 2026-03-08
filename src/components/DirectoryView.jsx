import { useState } from "react";
import { DIRECTORY_FIRMS } from "../data/index.js";

export function DirectoryView() {
  const [stateFilter, setStateFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [dbeFilter, setDbeFilter] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = DIRECTORY_FIRMS.filter(f => {
    if (stateFilter !== "ALL" && !f.states.includes(stateFilter)) return false;
    if (typeFilter !== "ALL" && !f.type.includes(typeFilter)) return false;
    if (dbeFilter && !f.dbe) return false;
    if (search && !f.name.toLowerCase().includes(search.toLowerCase()) && !f.disciplines.join(" ").toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const btn = (active, label, onClick) => (
    <button onClick={onClick} style={{
      fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", padding: "4px 10px",
      border: `1px solid ${active ? "#f97316" : "#2a2a2a"}`,
      background: active ? "#f9731611" : "transparent",
      color: active ? "#f97316" : "#64748b", borderRadius: "2px", cursor: "pointer"
    }}>{label}</button>
  );

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px", alignItems: "center" }}>
        <input
          className="directory-search"
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search firms or disciplines..."
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
            background: "#0f1117", border: "1px solid #2a2a2a", color: "#e2e8f0",
            padding: "5px 10px", borderRadius: "3px", width: "220px", outline: "none"
          }}
        />
        <div style={{ display: "flex", gap: "4px" }}>
          {["ALL","OR","WA"].map(s => btn(stateFilter===s, s, () => setStateFilter(s)))}
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          {["ALL","Prime","Sub"].map(t => btn(typeFilter===t, t, () => setTypeFilter(t)))}
        </div>
        {btn(dbeFilter, "DBE/SBE Only", () => setDbeFilter(!dbeFilter))}
      </div>

      <div className="directory-firm-grid" style={{ display: "grid", gap: "6px" }}>
        {filtered.map(firm => (
          <div key={firm.name} className="directory-firm-card" style={{
            background: "#0f1117", border: "1px solid #1e2433", borderRadius: "4px",
            padding: "12px 16px", display: "grid", gridTemplateColumns: "1fr auto", gap: "8px"
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "15px", color: "#f1f5f9", fontWeight: 600 }}>{firm.name}</span>
                {firm.dbe && <span style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", background: "#422006", color: "#fb923c", border: "1px solid #7c2d12", padding: "1px 5px", borderRadius: "2px" }}>DBE</span>}
                <span style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", color: "#64748b" }}>{firm.type}</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748b", marginTop: "4px" }}>{firm.city}</div>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "6px" }}>
                {firm.disciplines.map(d => (
                  <span key={d} style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", background: "#0a0c10", color: "#94a3b8", border: "1px solid #2a2a2a", padding: "1px 5px", borderRadius: "2px" }}>{d}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
              <div style={{ display: "flex", gap: "4px" }}>
                {firm.prequalOR && <span style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", color: "#4ade80", border: "1px solid #166534", padding: "1px 5px", borderRadius: "2px" }}>ODOT ✓</span>}
                {firm.prequalWA && <span style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", color: "#60a5fa", border: "1px solid #1e40af", padding: "1px 5px", borderRadius: "2px" }}>WSDOT ✓</span>}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#475569" }}>{firm.phone}</div>
              <div style={{ display: "flex", gap: "4px" }}>
                {firm.states.map(s => <span key={s} style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", color: s==="OR"?"#4ade80":"#60a5fa" }}>{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#475569", textAlign: "center", padding: "40px" }}>
          No firms match current filters
        </div>
      )}
    </div>
  );
}
