import { useState, useMemo } from "react";
import { CALENDAR_EVENTS, CALENDAR_EVENT_TYPES } from "../data/calendar.js";

const TAG_COLORS = {
  OR: { bg: "#1a3a2a", color: "#4ade80", border: "#166534" },
  WA: { bg: "#1a2a3a", color: "#60a5fa", border: "#1e40af" },
  FED: { bg: "#2a1a1a", color: "#f97316", border: "#7c2d12" },
  "OR/WA": { bg: "#1a1a3a", color: "#c084fc", border: "#581c87" },
};

const TYPE_LABELS = {
  hearing: "Hearing",
  comment: "Comment",
  legislation: "Legislation",
  rulemaking: "Rulemaking",
  news: "News",
};

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatMonthYear(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function CalendarView() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("ALL");

  const filtered = useMemo(() => {
    return CALENDAR_EVENTS.filter((e) => {
      if (typeFilter !== "all" && e.type !== typeFilter) return false;
      if (stateFilter !== "ALL" && e.tag !== stateFilter) return false;
      return true;
    }).sort((a, b) => a.date.localeCompare(b.date));
  }, [typeFilter, stateFilter]);

  const byMonth = useMemo(() => {
    const map = new Map();
    filtered.forEach((e) => {
      const key = e.date.slice(0, 7);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(e);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  const btn = (active, label, onClick) => (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        padding: "4px 10px",
        border: `1px solid ${active ? "#f97316" : "#2a2a2a"}`,
        background: active ? "#f9731611" : "transparent",
        color: active ? "#f97316" : "#64748b",
        borderRadius: "2px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px", alignItems: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748b", marginRight: "4px" }}>Type:</span>
        {CALENDAR_EVENT_TYPES.map((t) => btn(typeFilter === t.id, t.label, () => setTypeFilter(t.id)))}
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748b", marginLeft: "12px", marginRight: "4px" }}>State:</span>
        {["ALL", "OR", "WA", "FED"].map((s) => btn(stateFilter === s, s, () => setStateFilter(s)))}
      </div>

      {filtered.length === 0 ? (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#475569", textAlign: "center", padding: "40px" }}>
          No events match the current filters.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {byMonth.map(([monthKey, events]) => (
            <div key={monthKey}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#f97316",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "20px", height: "1px", background: "#f97316", display: "inline-block" }} />
                {formatMonthYear(monthKey + "-01")}
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                {events.map((evt, i) => {
                  const tagStyle = TAG_COLORS[evt.tag] || TAG_COLORS.FED;
                  return (
                    <div
                      key={`${evt.date}-${i}`}
                      className="calendar-event-grid"
                      style={{
                        background: "#0f1117",
                        border: "1px solid #1e2433",
                        borderRadius: "4px",
                        padding: "12px 14px",
                        display: "grid",
                        gridTemplateColumns: "80px 1fr",
                        gap: "12px",
                        alignItems: "start",
                      }}
                    >
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#fbbf24" }}>
                        {formatDate(evt.date)}
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                          <span
                            style={{
                              fontSize: "10px",
                              fontFamily: "'JetBrains Mono', monospace",
                              background: tagStyle.bg,
                              color: tagStyle.color,
                              border: `1px solid ${tagStyle.border}`,
                              padding: "2px 6px",
                              borderRadius: "2px",
                            }}
                          >
                            {evt.tag}
                          </span>
                          <span
                            style={{
                              fontSize: "10px",
                              fontFamily: "'JetBrains Mono', monospace",
                              color: "#94a3b8",
                              background: "#0a0c10",
                              border: "1px solid #2a2a2a",
                              padding: "2px 6px",
                              borderRadius: "2px",
                            }}
                          >
                            {TYPE_LABELS[evt.type] || evt.type}
                          </span>
                          {evt.agency && (
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748b" }}>
                              {evt.agency}
                            </span>
                          )}
                        </div>
                        <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "14px", color: "#e2e8f0", fontWeight: 500 }}>
                          {evt.title}
                        </div>
                        {evt.description && (
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#94a3b8", marginTop: "4px", lineHeight: 1.5 }}>
                            {evt.description}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
