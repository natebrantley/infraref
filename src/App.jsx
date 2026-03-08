import { useState } from "react";
import { MODULES, CONTENT } from "./data/index.js";
import {
  ReferenceItem,
  ContactCard,
  SolicitationRow,
  DirectoryView,
  CalendarView,
  ProjectDetailView,
  AIPanel,
} from "./components/index.js";

export default function InfraRef() {
  const [activeModule, setActiveModule] = useState("highway");
  const [showAI, setShowAI] = useState(true);
  const [stateFilter, setStateFilter] = useState("ALL");
  const [selectedDetailSlug, setSelectedDetailSlug] = useState(null);

  const module = CONTENT[activeModule];

  return (
    <div style={{ display: "flex", height: "100vh", background: "#080a0e", overflow: "hidden", fontFamily: "'Libre Franklin', sans-serif" }}>
      {/* LEFT NAV */}
      <div style={{ width: "220px", minWidth: "220px", background: "#04050a", borderRight: "1px solid #1e2433", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid #1e2433" }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", color: "#f97316", letterSpacing: "0.12em", lineHeight: 1 }}>INFRAREF</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#334155", marginTop: "4px", letterSpacing: "0.1em" }}>OREGON · WASHINGTON</div>
          <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
            {["ALL","OR","WA"].map(s => (
              <button
                key={s}
                onClick={() => setStateFilter(s)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 8px",
                  border: `1px solid ${stateFilter === s ? "#f97316" : "#1e2433"}`,
                  background: stateFilter === s ? "#f9731611" : "transparent",
                  color: stateFilter === s ? "#f97316" : "#475569", borderRadius: "2px", cursor: "pointer"
                }}
              >{s}</button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
          {MODULES.map(m => (
            <div
              key={m.id}
              className="module-item"
              onClick={() => setActiveModule(m.id)}
              style={{
                padding: "9px 16px", cursor: "pointer", transition: "background 0.1s",
                borderLeft: `2px solid ${activeModule === m.id ? "#f97316" : "transparent"}`,
                background: activeModule === m.id ? "#0f1117" : "transparent",
                display: "flex", alignItems: "center", gap: "10px"
              }}
            >
              <span style={{ fontSize: "14px" }}>{m.icon}</span>
              <span style={{
                fontFamily: "'Libre Franklin', sans-serif", fontSize: "12px", fontWeight: activeModule === m.id ? 600 : 400,
                color: activeModule === m.id ? "#f1f5f9" : "#64748b"
              }}>{m.label}</span>
            </div>
          ))}
        </div>

        <div style={{ padding: "12px 16px", borderTop: "1px solid #1e2433" }}>
          <button
            onClick={() => setShowAI(!showAI)}
            style={{
              width: "100%", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
              padding: "8px", border: `1px solid ${showAI ? "#f97316" : "#2a2a2a"}`,
              background: showAI ? "#f9731611" : "transparent",
              color: showAI ? "#f97316" : "#475569", borderRadius: "3px", cursor: "pointer"
            }}
          >{showAI ? "▶ AI Assistant ON" : "▷ AI Assistant OFF"}</button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px", animation: "fadeIn 0.2s ease" }}>
        {selectedDetailSlug ? (
          <ProjectDetailView slug={selectedDetailSlug} onBack={() => setSelectedDetailSlug(null)} />
        ) : (
          <>
            <div style={{ marginBottom: "24px", borderBottom: "1px solid #1e2433", paddingBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px", color: "#f1f5f9", letterSpacing: "0.08em" }}>{module.title}</h1>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#475569" }}>{module.subtitle}</span>
          </div>
            </div>

        {module.isDirectory ? (
          <DirectoryView />
        ) : module.isCalendar ? (
          <CalendarView />
        ) : (
          <div style={{ display: "grid", gap: "28px" }}>
            {module.sections.map((sec, si) => (
              <div key={si}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#f97316", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "20px", height: "1px", background: "#f97316", display: "inline-block" }} />
                  {sec.heading}
                </div>
                <div style={{ display: "grid", gap: "6px" }}>
                  {sec.items.map((item, ii) => (
                    <ReferenceItem
                      key={ii}
                      item={item}
                      onOpenDetail={item.detailSlug ? (slug) => setSelectedDetailSlug(slug) : undefined}
                    />
                  ))}
                </div>
              </div>
            ))}

            {module.contacts?.length > 0 && (
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#60a5fa", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "20px", height: "1px", background: "#60a5fa", display: "inline-block" }} />
                  Key Contacts & Resources
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
                  {module.contacts.map((c, ci) => <ContactCard key={ci} contact={c} />)}
                </div>
              </div>
            )}

            {module.solicitations?.length > 0 && (
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#4ade80", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "20px", height: "1px", background: "#4ade80", display: "inline-block" }} />
                  Active Solicitations
                </div>
                {module.solicitations.map((s, si) => <SolicitationRow key={si} sol={s} />)}
              </div>
            )}
          </div>
        )}
          </>
        )}
      </div>

      {showAI && <AIPanel onClose={() => setShowAI(false)} />}
    </div>
  );
}
