import { useState, useEffect, useMemo } from "react";
import { MODULES, CONTENT } from "./data/index.js";
import {
  ReferenceItem,
  ContactCard,
  SolicitationRow,
  DirectoryView,
  CalendarView,
  ProjectDetailView,
  NewsFeed,
} from "./components/index.js";

const DEFAULT_MODULE = MODULES[0]?.id ?? "highway";

function matchStateFilter(stateFilter, tag) {
  if (stateFilter === "ALL") return true;
  if (tag === "OR/WA") return stateFilter === "OR" || stateFilter === "WA";
  return tag === stateFilter;
}

function matchSolicitationState(stateFilter, agency) {
  if (stateFilter === "ALL") return true;
  const a = (agency || "").toUpperCase();
  if (stateFilter === "OR") return a.includes("ODOT") || a.includes("TRIMET");
  if (stateFilter === "WA") return a.includes("WSDOT") || a.includes("SOUND TRANSIT");
  return true;
}

function getInitialFromHash() {
  if (typeof window === "undefined") return { module: DEFAULT_MODULE, slug: null };
  const hash = window.location.hash.slice(1) || "";
  const [mod, slug] = hash.split("/");
  return {
    module: CONTENT[mod] ? mod : DEFAULT_MODULE,
    slug: slug || null,
  };
}

export default function InfraRef() {
  const [activeModule, setActiveModule] = useState(() => getInitialFromHash().module);
  const [selectedDetailSlug, setSelectedDetailSlug] = useState(() => getInitialFromHash().slug);
  const [stateFilter, setStateFilter] = useState("ALL");
  const [navOpen, setNavOpen] = useState(false);

  const module = CONTENT[activeModule] ?? CONTENT[DEFAULT_MODULE];
  const closeNav = () => setNavOpen(false);

  useEffect(() => {
    const hash = selectedDetailSlug
      ? `${activeModule}/${selectedDetailSlug}`
      : activeModule;
    const target = hash ? `#${hash}` : "#";
    if (window.location.hash !== target) window.history.replaceState(null, "", target);
  }, [activeModule, selectedDetailSlug]);

  useEffect(() => {
    const onHashChange = () => {
      const { module: mod, slug } = getInitialFromHash();
      setActiveModule(mod);
      setSelectedDetailSlug(slug);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeNav();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectModule = (id) => {
    setActiveModule(id);
    setSelectedDetailSlug(null);
    closeNav();
  };

  const filteredSections = useMemo(() => {
    if (!module?.sections) return [];
    return module.sections
      .map((sec) => ({
        ...sec,
        items: (sec.items || []).filter((item) => matchStateFilter(stateFilter, item.tag)),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [module, stateFilter]);

  const filteredContacts = useMemo(() => {
    if (!module?.contacts) return [];
    return module.contacts.filter((c) => matchStateFilter(stateFilter, c.state));
  }, [module, stateFilter]);

  const filteredSolicitations = useMemo(() => {
    if (!module?.solicitations) return [];
    return module.solicitations.filter((s) => matchSolicitationState(stateFilter, s.agency));
  }, [module, stateFilter]);

  return (
    <div className="app-layout" style={{ background: "#080a0e", fontFamily: "'Libre Franklin', sans-serif" }}>
      <button type="button" className="nav-toggle" onClick={() => setNavOpen(true)} aria-label="Open menu">☰</button>
      <div className={`nav-overlay ${navOpen ? "nav-open" : ""}`} onClick={closeNav} aria-hidden="true" />
      {/* LEFT NAV */}
      <nav className={`app-nav ${navOpen ? "nav-open" : ""}`} aria-label="Main">
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid #1e2433" }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "30px", color: "#f97316", letterSpacing: "0.12em", lineHeight: 1 }}>INFRAREF</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#334155", marginTop: "4px", letterSpacing: "0.1em" }}>OREGON · WASHINGTON</div>
          <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
            {["ALL","OR","WA"].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setStateFilter(s)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", padding: "2px 8px",
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
              role="button"
              tabIndex={0}
              onClick={() => selectModule(m.id)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectModule(m.id); } }}
              aria-current={activeModule === m.id ? "page" : undefined}
              style={{
                padding: "9px 16px", cursor: "pointer", transition: "background 0.1s",
                borderLeft: `2px solid ${activeModule === m.id ? "#f97316" : "transparent"}`,
                background: activeModule === m.id ? "#0f1117" : "transparent",
                display: "flex", alignItems: "center", gap: "10px"
              }}
            >
              <span style={{ fontSize: "14px" }}>{m.icon}</span>
              <span style={{
                fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", fontWeight: activeModule === m.id ? 600 : 400,
                color: activeModule === m.id ? "#f1f5f9" : "#64748b"
              }}>{m.label}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="app-main">
        <div className="app-mobile-top-bar">
          <div className="app-brand-mobile" aria-hidden="true">
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "30px", color: "#f97316", letterSpacing: "0.12em", lineHeight: 1 }}>INFRAREF</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#334155", marginTop: "4px", letterSpacing: "0.1em" }}>OREGON · WASHINGTON</div>
          </div>
          <span className="nav-toggle-spacer" aria-hidden="true" />
        </div>
        {selectedDetailSlug ? (
          <ProjectDetailView slug={selectedDetailSlug} onBack={() => setSelectedDetailSlug(null)} />
        ) : (
          <>
            <div className="app-header" style={{ marginBottom: "24px", borderBottom: "1px solid #1e2433", paddingBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", flex: 1 }}>
                <h1 className="app-title" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "38px", color: "#f1f5f9", letterSpacing: "0.08em" }}>{module.title}</h1>
                <span className="app-subtitle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#475569" }}>{module.subtitle}</span>
              </div>
            </div>

        {module.isDirectory ? (
          <DirectoryView />
        ) : module.isCalendar ? (
          <CalendarView />
        ) : (
          <div className="app-content-grid">
            {filteredContacts.length > 0 && (
              <section className="contacts-section" aria-label="Key contacts and resources">
                <h2 className="contacts-section-heading">
                  <span className="contacts-section-heading-accent" aria-hidden="true" />
                  Key Contacts & Resources
                </h2>
                <div className="contact-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
                  {filteredContacts.map((c, ci) => <ContactCard key={ci} contact={c} />)}
                </div>
              </section>
            )}

            <NewsFeed stateFilter={stateFilter} />

            {filteredSolicitations.length > 0 && (
              <section className="solicitations-section" aria-label="Active solicitations">
                <h2 className="solicitations-section-heading">
                  <span className="solicitations-section-heading-accent" aria-hidden="true" />
                  Active Solicitations
                </h2>
                <div className="solicitations-list">
                  {filteredSolicitations.map((s, si) => <SolicitationRow key={si} sol={s} />)}
                </div>
              </section>
            )}

            {filteredSections.map((sec, si) =>
              sec.heading === "Active Legislation Schedule" ? (
                <section key={si} className="legislation-schedule-section" aria-label="Active legislation schedule">
                  <h2 className="legislation-schedule-section-heading">
                    <span className="legislation-schedule-section-heading-accent" aria-hidden="true" />
                    {sec.heading}
                  </h2>
                  <div className="legislation-schedule-list reference-list">
                    {sec.items.map((item, ii) => (
                      <ReferenceItem
                        key={ii}
                        item={item}
                        onOpenDetail={item.detailSlug ? (slug) => setSelectedDetailSlug(slug) : undefined}
                      />
                    ))}
                  </div>
                </section>
              ) : (
                <div key={si} className="content-section">
                  <h2 className="content-section-heading">
                    <span className="content-section-heading-accent" aria-hidden="true" />
                    {sec.heading}
                  </h2>
                  <div style={{ display: "grid", gap: "6px" }} className="reference-list">
                    {sec.items.map((item, ii) => (
                      <ReferenceItem
                        key={ii}
                        item={item}
                        onOpenDetail={item.detailSlug ? (slug) => setSelectedDetailSlug(slug) : undefined}
                      />
                    ))}
                  </div>
                </div>
              )
            )}

          </div>
        )}
          </>
        )}
      </main>
    </div>
  );
}
