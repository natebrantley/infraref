export function ContactCard({ contact }) {
  if (!contact) return null;
  const stateColor = contact.state === "OR" ? "#4ade80" : contact.state === "WA" ? "#60a5fa" : "#c084fc";
  return (
    <div
      className="contact-card"
      style={{
      background: "#0f1117", border: "1px solid #1e2433", borderRadius: "4px",
      padding: "12px 14px", display: "flex", flexDirection: "column", gap: "4px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "14px", color: "#f1f5f9", fontWeight: 600 }}>{contact.name}</div>
        <span style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", color: stateColor, border: `1px solid ${stateColor}33`, padding: "1px 5px", borderRadius: "2px" }}>{contact.state}</span>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#64748b" }}>{contact.role}</div>
      {contact.firm && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#f97316" }}>{contact.firm}</div>}
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#475569", marginTop: "2px" }}>{contact.phone}</div>
    </div>
  );
}
