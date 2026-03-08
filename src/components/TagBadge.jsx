export function TagBadge({ tag }) {
  const colors = {
    OR: "background:#1a3a2a;color:#4ade80;border:1px solid #166534",
    WA: "background:#1a2a3a;color:#60a5fa;border:1px solid #1e40af",
    FED: "background:#2a1a1a;color:#f97316;border:1px solid #7c2d12",
    "OR/WA": "background:#1a1a3a;color:#c084fc;border:1px solid #581c87",
  };
  return (
    <span style={{
      fontSize: "10px", fontFamily: "'JetBrains Mono', monospace",
      fontWeight: 600, padding: "2px 6px", borderRadius: "2px",
      letterSpacing: "0.08em", ...Object.fromEntries(
        (colors[tag] || colors.FED).split(";").filter(Boolean).map(s => {
          const [k, v] = s.split(":");
          const camel = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
          return [camel, v?.trim()];
        })
      )
    }}>{tag}</span>
  );
}
