export function SolicitationRow({ sol }) {
  return (
    <article
      className="solicitation-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "12px",
        alignItems: "center",
        padding: "12px 14px",
        background: "#0a0c10",
        border: "1px solid #1e2433",
        borderRadius: "4px",
        marginBottom: 0,
      }}
    >
      <div className="solicitation-row-main">
        <h3 className="solicitation-row-title">{sol.title}</h3>
        <p className="solicitation-row-agency">{sol.agency}</p>
      </div>
      <div className="solicitation-meta" style={{ display: "flex", gap: "16px", flexWrap: "wrap", textAlign: "right" }}>
        <div className="solicitation-meta-item">
          <span className="solicitation-meta-label">Closes</span>
          <span className="solicitation-meta-value solicitation-meta-value--closes">{sol.closes}</span>
        </div>
        <div className="solicitation-meta-item">
          <span className="solicitation-meta-label">Est. Value</span>
          <span className="solicitation-meta-value solicitation-meta-value--value">{sol.value}</span>
        </div>
      </div>
    </article>
  );
}
