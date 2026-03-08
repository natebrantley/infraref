import { useState } from "react";
import { TagBadge } from "./TagBadge.jsx";

export function ReferenceItem({ item, onOpenDetail }) {
  const [open, setOpen] = useState(false);
  const hasDetailPage = item.detailSlug && onOpenDetail;
  const hasExternalLink = item.url && item.url !== "#";
  return (
    <div
      className="reference-item"
      onClick={() => setOpen(!open)}
      style={{
        borderLeft: "2px solid #2a2a2a", paddingLeft: "12px", marginBottom: "8px",
        cursor: "pointer", transition: "border-color 0.15s"
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "#f97316"}
      onMouseLeave={e => e.currentTarget.style.borderColor = open ? "#f97316" : "#2a2a2a"}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <TagBadge tag={item.tag} />
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "14px", color: "#e2e8f0", fontWeight: 500 }}>
          {item.label}
        </span>
      </div>
      {open && (
        <div style={{ marginTop: "6px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#94a3b8", lineHeight: 1.6 }}>
          {item.note}
          {hasDetailPage ? (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onOpenDetail(item.detailSlug); }}
              style={{ marginLeft: "12px", color: "#f97316", fontSize: "11px", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit" }}
            >→ Open Resource ↗</button>
          ) : hasExternalLink ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ marginLeft: "12px", color: "#f97316", fontSize: "11px", textDecoration: "none" }}
            >→ Open Resource ↗</a>
          ) : (
            <span style={{ marginLeft: "12px", color: "#64748b", fontSize: "11px" }}>→ Link TBD</span>
          )}
        </div>
      )}
    </div>
  );
}
