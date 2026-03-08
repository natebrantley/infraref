/**
 * In-app project detail pages: slug -> { label, tag, note, url, relatedParties }.
 * relatedParties: { name, role, phone, state, email?, firm? } for quick reference.
 */
export const PROJECT_DETAILS = {
  "i5-rose-quarter": {
    label: "I-5 Rose Quarter Improvement Project",
    tag: "OR",
    note: "ODOT — caps, highway cover; NEPA/design in progress; CMGC delivery. 1.8-mile I-5 in Portland; safety and congestion; reconnection of historic Albina.",
    url: "https://www.i5rosequarter.org/",
    relatedParties: [
      { name: "I-5 Rose Quarter Project Team", role: "Project inquiries, newsletter", phone: "503-470-3127", state: "OR", email: "i5RoseQuarter@odot.oregon.gov" },
      { name: "ODOT Major Projects Branch", role: "CMAR, program delivery", phone: "503-986-3020", state: "OR" },
      { name: "ODOT Region 1 — Portland", role: "Regional delivery, coordination", phone: "503-731-4128", state: "OR" },
      { name: "ODOT Noise Hotline", role: "Construction noise complaints", phone: "503-276-7808", state: "OR" },
      { name: "City of Portland — PBOT", role: "Local streets, right-of-way", phone: "503-823-5185", state: "OR" },
      { name: "Historic Albina Advisory Board", role: "Community oversight", state: "OR", note: "Via project team / i5rosequarter.org" },
      { name: "Community Oversight Advisory Committee", role: "Workforce & community accountability", state: "OR", note: "Via project team / i5rosequarter.org" },
      { name: "ODOT Civil Rights / ADA", role: "Accessibility, translation, civil rights", phone: "503-731-4128", state: "OR", note: "Oregon Relay 7-1-1" },
    ],
  },
};
