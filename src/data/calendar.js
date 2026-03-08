/**
 * News, legislation, and key calendar dates for OR/WA infrastructure.
 * date: YYYY-MM-DD for sorting; display can be formatted.
 * type: hearing | comment | legislation | rulemaking | news
 */
export const CALENDAR_EVENTS = [
  // Comment periods & rulemaking
  { date: "2026-03-15", type: "comment", tag: "FED", title: "FHWA proposed rule: Design standards for federally funded projects", agency: "FHWA", description: "Comment period on proposed updates to design criteria.", url: "#" },
  { date: "2026-03-28", type: "comment", tag: "OR", title: "ODOT Highway Design Manual (HDM) draft chapter revisions", agency: "ODOT", description: "Public comment on draft Chapter 4 cross-section updates.", url: "#" },
  { date: "2026-04-05", type: "comment", tag: "WA", title: "WSDOT Design Manual M 22-01 — proposed amendments", agency: "WSDOT", description: "Comment on proposed revisions to Ch. 440 and 910.", url: "#" },
  { date: "2026-04-18", type: "comment", tag: "FED", title: "EPA Region 10: Draft NPDES construction general permit (OR/WA)", agency: "EPA", description: "Comment on draft permit for construction stormwater.", url: "#" },
  { date: "2026-05-01", type: "rulemaking", tag: "OR", title: "Oregon DSL removal-fill rules — rulemaking hearing", agency: "DSL", description: "Hearing on proposed rule changes for removal-fill permits.", url: "#" },
  // Hearings & meetings
  { date: "2026-03-20", type: "hearing", tag: "OR", title: "Oregon Transportation Commission (OTC) — regular meeting", agency: "ODOT", description: "Agenda: STIP amendments, project approvals.", url: "#" },
  { date: "2026-03-25", type: "hearing", tag: "WA", title: "Washington Transportation Commission — public meeting", agency: "WSDOT", description: "Revenue forecast, program updates.", url: "#" },
  { date: "2026-04-10", type: "hearing", tag: "OR/WA", title: "IBR Program — Community Advisory Group meeting", agency: "IBR", description: "Interstate Bridge Replacement program update.", url: "#" },
  { date: "2026-04-22", type: "hearing", tag: "FED", title: "FTA CIG program — quarterly New Starts/Small Starts update", agency: "FTA", description: "Webinar on CIG pipeline and policy updates.", url: "#" },
  { date: "2026-05-12", type: "hearing", tag: "OR", title: "Oregon EFSC — Energy Facility Siting Council", agency: "EFSC", description: "Agenda: renewable/transmission facility applications.", url: "#" },
  // Legislation
  { date: "2026-03-31", type: "legislation", tag: "OR", title: "Oregon Legislature — committee deadline (policy bills)", agency: "Oregon Legislature", description: "Deadline for policy committees to move bills.", url: "#" },
  { date: "2026-04-15", type: "legislation", tag: "WA", title: "Washington Legislature — floor cutoff", agency: "WA Legislature", description: "Last day to pass bills from opposite house.", url: "#" },
  { date: "2026-05-30", type: "legislation", tag: "OR", title: "Oregon sine die (target)", agency: "Oregon Legislature", description: "Target adjournment for 2026 session.", url: "#" },
  { date: "2026-06-30", type: "legislation", tag: "FED", title: "Federal FY2026 continuing resolution / appropriations", agency: "Congress", description: "Transportation appropriations timeline.", url: "#" },
  // News / milestones
  { date: "2026-03-18", type: "news", tag: "WA", title: "Sound Transit Lynnwood Link — revenue service target", agency: "Sound Transit", description: "Planned opening for Lynnwood Link extension.", url: "#" },
  { date: "2026-04-01", type: "news", tag: "FED", title: "IIJA/BIL program updates — FY2026 allocations", agency: "FHWA/FTA", description: "Expected release of annual program guidance.", url: "#" },
  { date: "2026-04-25", type: "news", tag: "OR", title: "ODOT 2027–2030 STIP draft release", agency: "ODOT", description: "Draft Statewide Transportation Improvement Program.", url: "#" },
  { date: "2026-05-15", type: "news", tag: "WA", title: "WSDOT 2027–2034 biennial budget request", agency: "WSDOT", description: "Draft agency request for next biennium.", url: "#" },
];

export const CALENDAR_EVENT_TYPES = [
  { id: "all", label: "All" },
  { id: "hearing", label: "Hearings" },
  { id: "comment", label: "Comment periods" },
  { id: "legislation", label: "Legislation" },
  { id: "rulemaking", label: "Rulemaking" },
  { id: "news", label: "News & milestones" },
];
