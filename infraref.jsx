import { useState } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;600&family=Libre+Franklin:wght@300;400;500;600&display=swap');
`;

// ── DATA ─────────────────────────────────────────────────────────────────────

const MODULES = [
  { id: "highway",     icon: "🛣️",  label: "Highway & Roadway" },
  { id: "bridges",     icon: "🌉",  label: "Bridges & Structures" },
  { id: "transit",     icon: "🚇",  label: "Transit & Rail" },
  { id: "aviation",    icon: "✈️",  label: "Aviation" },
  { id: "power",       icon: "⚡",  label: "Power & Energy" },
  { id: "water",       icon: "💧",  label: "Water & Wastewater" },
  { id: "env",         icon: "🌿",  label: "Environmental & Permitting" },
  { id: "funding",     icon: "💰",  label: "Cost & Funding" },
  { id: "megaproject", icon: "🏗️",  label: "Megaproject Management" },
  { id: "directory",   icon: "🔗",  label: "Firm & Contact Directory" },
];

const CONTENT = {
  highway: {
    title: "Highway & Roadway",
    subtitle: "ODOT & WSDOT Design Standards Reference",
    sections: [
      {
        heading: "Primary Design Manuals",
        items: [
          { label: "ODOT Highway Design Manual (HDM)", tag: "OR", url: "#", note: "Chapter 3: Geometric Design, Chapter 8: Intersections" },
          { label: "WSDOT Design Manual M 22-01", tag: "WA", url: "#", note: "Current: July 2024 — Chapters 440, 910, 1100" },
          { label: "AASHTO Green Book (7th Ed.)", tag: "FED", url: "#", note: "A Policy on Geometric Design of Highways and Streets" },
          { label: "MUTCD 11th Edition", tag: "FED", url: "#", note: "Manual on Uniform Traffic Control Devices — adopted OR/WA" },
        ]
      },
      {
        heading: "Key Standards Quick Reference",
        items: [
          { label: "Superelevation — ODOT Standard Plates SP-100 to SP-130", tag: "OR", url: "#", note: "Max 8% rural, 6% urban" },
          { label: "Stopping Sight Distance — AASHTO Table 3-1", tag: "FED", url: "#", note: "Design speed 25–80 mph lookup" },
          { label: "Lane Width Standards — WSDOT Ch. 440", tag: "WA", url: "#", note: "11 ft rural arterial, 12 ft freeway" },
          { label: "Clear Zone / Shy Line — ODOT Table 4-1", tag: "OR", url: "#", note: "Foreslope, design speed, ADT matrix" },
        ]
      },
      {
        heading: "Pavement Design",
        items: [
          { label: "ODOT Pavement Design Guide", tag: "OR", url: "#", note: "AASHTOWare Pavement ME, ESAL calculation" },
          { label: "WSDOT Pavement Guide Volume 1 & 2", tag: "WA", url: "#", note: "Flexible & rigid pavement design procedures" },
          { label: "FHWA Long-Term Pavement Performance (LTPP)", tag: "FED", url: "#", note: "IRI benchmarks, distress catalog" },
        ]
      }
    ],
    contacts: [
      { name: "ODOT Technical Services Branch", role: "Highway Design Standards", phone: "503-986-3000", state: "OR" },
      { name: "WSDOT Urban Planning Office", role: "Design Manual Interpretations", phone: "360-705-7985", state: "WA" },
      { name: "Sarah Nguyen, PE", role: "WSP Portland — Highway Design Lead", phone: "503-224-3860", state: "OR", firm: "WSP" },
    ],
    solicitations: [
      { title: "ODOT Region 2 On-Call Highway Design", agency: "ODOT", closes: "Apr 15, 2026", value: "$4.2M" },
      { title: "WSDOT SR-99 Corridor Study", agency: "WSDOT", closes: "May 3, 2026", value: "$1.8M" },
    ]
  },
  bridges: {
    title: "Bridges & Structures",
    subtitle: "AASHTO LRFD, ODOT & WSDOT Bridge Standards",
    sections: [
      {
        heading: "Design Standards",
        items: [
          { label: "AASHTO LRFD Bridge Design Specifications (9th Ed.)", tag: "FED", url: "#", note: "HL-93 live load, Strength I–V limit states" },
          { label: "ODOT Bridge Design & Drafting Manual", tag: "OR", url: "#", note: "Chapter 1–20, seismic design per AASHTO Guide Spec" },
          { label: "WSDOT Bridge Design Manual LRFD M 23-50", tag: "WA", url: "#", note: "Current: 2023 — Seismic Zone D requirements" },
          { label: "FHWA Tunnel Design Reference Manual", tag: "FED", url: "#", note: "Cut-and-cover, bored tunnel guidance" },
        ]
      },
      {
        heading: "Inspection & Load Rating",
        items: [
          { label: "NBIS — National Bridge Inspection Standards", tag: "FED", url: "#", note: "24-month routine cycle, fracture critical elements" },
          { label: "AASHTO MBE — Manual for Bridge Evaluation", tag: "FED", url: "#", note: "ASR, Legal Load, Permit Load rating methods" },
          { label: "ODOT Bridge Inspection Unit", tag: "OR", url: "#", note: "Element-level CoRe coding, Pontis/BrM database" },
        ]
      },
      {
        heading: "Seismic & Scour",
        items: [
          { label: "AASHTO Guide Spec for Seismic Bridge Design", tag: "FED", url: "#", note: "SDC A–D, OR/WA SDC C/D high-seismic zones" },
          { label: "HEC-18 Evaluating Scour at Bridges", tag: "FED", url: "#", note: "Contraction, local, total scour calculation" },
          { label: "ODOT Scour Evaluation Manual", tag: "OR", url: "#", note: "Willamette, Columbia, Rogue basin guidance" },
        ]
      }
    ],
    contacts: [
      { name: "ODOT Bridge Engineering Section", role: "Design Review & Standards", phone: "503-986-3344", state: "OR" },
      { name: "WSDOT Bridge & Structures Office", role: "Design Guidance", phone: "360-705-7282", state: "WA" },
      { name: "Marcus Reid, PE, SE", role: "HDR Seattle — Bridge Structural Lead", phone: "206-204-4000", state: "WA", firm: "HDR" },
    ],
    solicitations: [
      { title: "ODOT Statewide Bridge Inspection On-Call", agency: "ODOT", closes: "Mar 28, 2026", value: "$6.5M" },
      { title: "WSDOT SR-520 Bridge Replacement Design", agency: "WSDOT", closes: "Jun 10, 2026", value: "$12M" },
    ]
  },
  transit: {
    title: "Transit & Rail",
    subtitle: "TriMet, Sound Transit, FTA — Pacific Northwest",
    sections: [
      {
        heading: "Agency Standards & Programs",
        items: [
          { label: "FTA Capital Investment Grant (CIG) Program Guide", tag: "FED", url: "#", note: "New Starts (>$400M), Small Starts (<$400M), Core Capacity" },
          { label: "TriMet Design Criteria Manual", tag: "OR", url: "#", note: "Light rail, BRT, bus facility standards — Portland metro" },
          { label: "Sound Transit System Design Criteria", tag: "WA", url: "#", note: "Link LRT, Sounder commuter rail, BRT standards" },
          { label: "AREMA Manual for Railway Engineering", tag: "FED", url: "#", note: "Chapter 16: Rail-Highway Grade Crossings" },
        ]
      },
      {
        heading: "Planning & NEPA",
        items: [
          { label: "FTA PEL / Environmental Review Process", tag: "FED", url: "#", note: "Planning & Environment Linkages — OR/WA NEPA guide" },
          { label: "STOPS — Simplified Trips-on-Project Software", tag: "FED", url: "#", note: "FTA-approved ridership forecasting tool" },
          { label: "TriMet SW Corridor — Project Development Docs", tag: "OR", url: "#", note: "Reference EA, alternatives analysis, FTA correspondence" },
        ]
      }
    ],
    contacts: [
      { name: "TriMet Capital Projects Division", role: "Project Development & Design", phone: "503-962-7525", state: "OR" },
      { name: "Sound Transit Capital Division", role: "Design & Engineering", phone: "206-398-5000", state: "WA" },
      { name: "FTA Region 10 — Seattle Office", role: "CIG Program & NEPA Review", phone: "206-220-7954", state: "WA", firm: "FTA" },
      { name: "Priya Mehta, AICP", role: "Jacobs — Transit Planning Lead, Portland", phone: "503-255-5400", state: "OR", firm: "Jacobs" },
    ],
    solicitations: [
      { title: "TriMet Powell-Division BRT Design Services", agency: "TriMet", closes: "Apr 22, 2026", value: "$3.1M" },
      { title: "Sound Transit Lynnwood Link Extension CM", agency: "Sound Transit", closes: "May 15, 2026", value: "$28M" },
    ]
  },
  power: {
    title: "Power & Energy Infrastructure",
    subtitle: "BPA, PacifiCorp, PGE, Puget Sound Energy — Pacific NW Grid",
    sections: [
      {
        heading: "Transmission & Grid Standards",
        items: [
          { label: "NESC — National Electrical Safety Code (2023)", tag: "FED", url: "#", note: "Grade B/C construction, clearance tables, loading districts" },
          { label: "ASCE 74 — Guidelines for Electrical Transmission Line Structural Loading", tag: "FED", url: "#", note: "Wind, ice, combined load cases for lattice & monopole" },
          { label: "BPA Transmission Design Standards", tag: "OR/WA", url: "#", note: "Bonneville Power Administration — ROW, tower standards" },
          { label: "NERC Reliability Standards (TPL-001-5)", tag: "FED", url: "#", note: "Transmission planning: N-0, N-1, N-1-1 contingency" },
        ]
      },
      {
        heading: "Renewables & Interconnection",
        items: [
          { label: "FERC Order 2023 — Interconnection Queue Reform", tag: "FED", url: "#", note: "Cluster study process, 5-year queue timelines" },
          { label: "BPA Generator Interconnection Procedures", tag: "OR/WA", url: "#", note: "Pacific NW ISO — study deposit, milestone schedule" },
          { label: "Oregon Renewable Energy Siting — EFSC Process", tag: "OR", url: "#", note: "Energy Facility Siting Council — >35MW projects" },
          { label: "Washington Clean Energy Transformation Act", tag: "WA", url: "#", note: "GHG-free electricity by 2045 — utility compliance roadmap" },
        ]
      }
    ],
    contacts: [
      { name: "BPA Transmission Services", role: "Interconnection & ROW", phone: "503-230-3000", state: "OR/WA" },
      { name: "Oregon PUC — Energy Division", role: "Utility Siting & Rate Cases", phone: "503-378-6611", state: "OR" },
      { name: "Washington UTC", role: "Utility Regulation & Siting", phone: "360-664-1160", state: "WA" },
      { name: "David Chen, PE", role: "WSP Energy — Transmission Lead, Portland", phone: "503-224-3860", state: "OR", firm: "WSP" },
    ],
    solicitations: [
      { title: "BPA Columbia River Transmission Corridor EIS", agency: "BPA", closes: "May 30, 2026", value: "$8.4M" },
      { title: "PGE Grid Hardening Engineering Services", agency: "PGE", closes: "Apr 8, 2026", value: "$2.2M" },
    ]
  },
  env: {
    title: "Environmental & Permitting",
    subtitle: "NEPA, Section 404/401, ESA — Oregon & Washington",
    sections: [
      {
        heading: "Federal Environmental Review",
        items: [
          { label: "NEPA Process — CE / EA / EIS Decision Tree", tag: "FED", url: "#", note: "Categorical Exclusions list per agency (FHWA, FTA, FAA)" },
          { label: "Section 404 — USACE Nationwide Permits (2021)", tag: "FED", url: "#", note: "NWP 14 (linear transport), NWP 12 (utilities) key for OR/WA" },
          { label: "Section 401 — OR DSL / WA Ecology Water Quality Cert", tag: "OR/WA", url: "#", note: "60-day clock, standard conditions, mitigation triggers" },
          { label: "ESA Section 7 — USFWS & NMFS Consultation", tag: "FED", url: "#", note: "Informal / formal consultation, BiOp, RPMs for Pacific salmon" },
        ]
      },
      {
        heading: "State Permitting — Oregon",
        items: [
          { label: "Oregon DSL Removal-Fill Permit", tag: "OR", url: "#", note: "Threshold: 50 cy material — standard vs. individual permit" },
          { label: "Oregon DEQ Section 401 Certification", tag: "OR", url: "#", note: "Standard conditions for transportation projects" },
          { label: "ODOT Environmental Review Process (ERP)", tag: "OR", url: "#", note: "Combined NEPA/state review — PEL to ROD" },
        ]
      },
      {
        heading: "State Permitting — Washington",
        items: [
          { label: "WSDOT Environmental Manual M 31-11", tag: "WA", url: "#", note: "Hydraulic Project Approval (HPA), SMP, SEPA compliance" },
          { label: "WA Ecology Shoreline Master Program (SMP)", tag: "WA", url: "#", note: "Substantial Development Permit — 200 ft shoreline buffer" },
          { label: "SEPA — WA State Environmental Policy Act", tag: "WA", url: "#", note: "Checklist, DNS, EIS triggers — WAC 197-11" },
        ]
      }
    ],
    contacts: [
      { name: "USACE Portland District — Regulatory", role: "Section 404 Permitting", phone: "503-808-4370", state: "OR" },
      { name: "USACE Seattle District — Regulatory", role: "Section 404 Permitting", phone: "206-764-3495", state: "WA" },
      { name: "NMFS — Northwest Regional Office", role: "ESA Section 7 (Salmon)", phone: "206-526-6150", state: "OR/WA" },
      { name: "EPA Region 10 — Portland", role: "Section 401/404 Oversight", phone: "503-326-3250", state: "OR/WA" },
    ],
    solicitations: [
      { title: "ODOT Statewide Environmental On-Call", agency: "ODOT", closes: "Mar 31, 2026", value: "$5.0M" },
      { title: "WSDOT ESA Section 7 Consultation Support", agency: "WSDOT", closes: "Apr 18, 2026", value: "$1.4M" },
    ]
  },
  funding: {
    title: "Cost & Funding",
    subtitle: "Federal Programs, IIJA/BIL, ODOT/WSDOT Grant Matrix",
    sections: [
      {
        heading: "Federal Funding Programs (IIJA/BIL)",
        items: [
          { label: "RAISE Grants — Rebuilding American Infrastructure", tag: "FED", url: "#", note: "$1.5B/yr — multimodal, rural/urban eligible, 60-day app cycle" },
          { label: "NHFP — National Highway Freight Program", tag: "FED", url: "#", note: "Formula funds to OR/WA — freight network improvements" },
          { label: "CMAQ — Congestion Mitigation & Air Quality", tag: "FED", url: "#", note: "Portland, Seattle nonattainment areas eligible — FY2026 apport." },
          { label: "Carbon Reduction Program (CRP)", tag: "FED", url: "#", note: "New IIJA program — EV charging, congestion pricing, transit" },
          { label: "PROTECT — Promoting Resilient Operations", tag: "FED", url: "#", note: "Climate resilience — formula + discretionary, OR/WA allocations" },
        ]
      },
      {
        heading: "State Funding — Oregon",
        items: [
          { label: "ODOT STIP — Statewide Transportation Improvement Program", tag: "OR", url: "#", note: "2024–2027 STIP — project list, funding sources by region" },
          { label: "ConnectOregon Program", tag: "OR", url: "#", note: "Multimodal — aviation, marine, rail, transit — biennial cycle" },
          { label: "Oregon Lottery Bond — Transportation", tag: "OR", url: "#", note: "HB 2017 Keep Oregon Moving — $5.3B package status" },
        ]
      },
      {
        heading: "Cost Benchmarks — Pacific NW",
        items: [
          { label: "ENR Seattle Construction Cost Index", tag: "WA", url: "#", note: "Q1 2026: 14,220 — labor & materials composite" },
          { label: "ODOT Cost Estimating Guide", tag: "OR", url: "#", note: "Unit bid prices by region — updated annually" },
          { label: "AACE Estimate Class Matrix", tag: "FED", url: "#", note: "Class 5 (–50/+100%) → Class 1 (–5/+15%) accuracy ranges" },
        ]
      }
    ],
    contacts: [
      { name: "ODOT Finance & Budget Section", role: "STIP, Federal Aid Programs", phone: "503-986-4194", state: "OR" },
      { name: "WSDOT Transportation Finance Office", role: "Federal Programs, Grants", phone: "360-705-7842", state: "WA" },
      { name: "FHWA Oregon Division Office", role: "Federal-Aid Highway Program", phone: "503-587-4730", state: "OR" },
    ],
    solicitations: []
  },
  directory: {
    title: "Firm & Contact Directory",
    subtitle: "Oregon & Washington — Prequalified Consultants & Agencies",
    sections: [],
    contacts: [],
    solicitations: [],
    isDirectory: true
  },
  aviation: {
    title: "Aviation",
    subtitle: "FAA Northwest Mountain Region, ODOT Rail & Public Transit, WSDOT Aviation",
    sections: [
      {
        heading: "FAA Design Standards",
        items: [
          { label: "FAA AC 150/5300-13B — Airport Design", tag: "FED", url: "#", note: "Runway/taxiway geometry, OFA, RSA, OEZ dimensions by ADG" },
          { label: "FAA AC 150/5370-10 — Standards for Specifying Construction", tag: "FED", url: "#", note: "P-401, P-501, P-602 pavement specs — OR/WA airports" },
          { label: "FAA AC 150/5320-6G — Airport Pavement Design", tag: "FED", url: "#", note: "Flexible & rigid pavement design — FAARFIELD software" },
        ]
      },
      {
        heading: "Oregon & Washington Airport Programs",
        items: [
          { label: "AIP — Airport Improvement Program", tag: "FED", url: "#", note: "90% federal / 10% local — entitlement vs. discretionary" },
          { label: "ODOT Aeronautics Division — Oregon Airport Programs", tag: "OR", url: "#", note: "State Block Grant, Oregon airport directory — 97 public airports" },
          { label: "WSDOT Aviation Division", tag: "WA", url: "#", note: "WA Aviation System Plan, PNWER coordination" },
        ]
      }
    ],
    contacts: [
      { name: "FAA Northwest Mountain Region — ANM-600", role: "Airport Engineering, AIP", phone: "425-227-2600", state: "OR/WA" },
      { name: "ODOT Aeronautics Division", role: "State Aviation Programs", phone: "503-378-4434", state: "OR" },
      { name: "Port of Portland — Aviation", role: "PDX Capital Programs", phone: "503-460-4040", state: "OR" },
    ],
    solicitations: [
      { title: "PDX Concourse E Expansion — Engineering", agency: "Port of Portland", closes: "Jun 1, 2026", value: "$9.2M" },
    ]
  },
  water: {
    title: "Water & Wastewater",
    subtitle: "Oregon DEQ, WA Ecology, EPA Region 10 Standards",
    sections: [
      {
        heading: "Design Standards & References",
        items: [
          { label: "Recommended Standards for Water Works (10 States)", tag: "FED", url: "#", note: "Great Lakes—Upper Mississippi guidance adopted in OR/WA" },
          { label: "Oregon DEQ Drinking Water Program Design Guidelines", tag: "OR", url: "#", note: "Treatment, distribution, storage — engineering report format" },
          { label: "WA DOH Water System Design Manual", tag: "WA", url: "#", note: "Chapter 4: Source, Chapter 6: Treatment, Chapter 9: Distribution" },
          { label: "NPDES General Permit — OR/WA Construction Stormwater", tag: "OR/WA", url: "#", note: "1-acre disturbance threshold, SWPPP requirements" },
        ]
      },
      {
        heading: "Hydraulics & Infrastructure",
        items: [
          { label: "ASCE 7 / AWWA Standards — Pipe Design", tag: "FED", url: "#", note: "AWWA C900, C905 PVC; C151 DIP; HDPE AWWA C906" },
          { label: "FEMA P-93 — Federal Guidelines for Dam Safety", tag: "FED", url: "#", note: "Hazard classification, EAP, inspection frequencies" },
          { label: "HEC-RAS 6.x — River Analysis System", tag: "FED", url: "#", note: "1D/2D steady/unsteady flow — FEMA FIRM map revision" },
        ]
      }
    ],
    contacts: [
      { name: "Oregon DEQ — Water Quality Division", role: "NPDES, 401 Certification", phone: "503-229-5324", state: "OR" },
      { name: "WA Ecology — Water Quality Program", role: "NPDES, Permits", phone: "360-407-6401", state: "WA" },
      { name: "EPA Region 10 — Water Division", role: "Drinking Water, Clean Water Act", phone: "206-553-1200", state: "OR/WA" },
    ],
    solicitations: [
      { title: "City of Portland CSO Program — Engineering", agency: "Portland BES", closes: "Apr 28, 2026", value: "$7.1M" },
    ]
  },
  megaproject: {
    title: "Megaproject Management",
    subtitle: "Program Delivery, Risk, CMAR/DB — Pacific NW Major Projects",
    sections: [
      {
        heading: "Delivery Method Reference",
        items: [
          { label: "ODOT Alternative Delivery Guide — CMAR & DB", tag: "OR", url: "#", note: "ORS 279C.335 authority, procurement checklist, RFP templates" },
          { label: "WSDOT Design-Build Manual M 3119", tag: "WA", url: "#", note: "ATCs, One-on-One Meetings, stipend policy" },
          { label: "FHWA Every Day Counts — ADE Program", tag: "FED", url: "#", note: "P3, CMGC, bundling guidance — federal authorization" },
        ]
      },
      {
        heading: "Risk & Cost Control",
        items: [
          { label: "AACE RP 40R-08 — Contingency Estimation", tag: "FED", url: "#", note: "Expected Value, Monte Carlo, risk register integration" },
          { label: "WSDOT Cost Risk Assessment Methodology", tag: "WA", url: "#", note: "CRA process, risk-adjusted estimate, S-curve output" },
          { label: "ODOT QA/QC Manual — Major Projects", tag: "OR", url: "#", note: "Design QC, construction quality assurance framework" },
        ]
      },
      {
        heading: "Active Pacific NW Megaprojects",
        items: [
          { label: "Interstate Bridge Replacement (IBR) Program", tag: "OR/WA", url: "#", note: "I-5 Columbia River Bridge — LPA: Light Rail + new spans, ~$7.5B" },
          { label: "Sound Transit ST3 — Link Light Rail Expansion", tag: "WA", url: "#", note: "$54B program — Tacoma Dome, Everett, Issaquah corridors" },
          { label: "Portland Harbor Superfund — Remedy Design", tag: "OR", url: "#", note: "EPA ROD 2017 — dredge/cap/MNR, remedy contractor procurement" },
          { label: "WSDOT SR-99 Tunnel — Lessons Learned", tag: "WA", url: "#", note: "TBM delivery, risk allocation, DB contract structure reference" },
        ]
      }
    ],
    contacts: [
      { name: "IBR Program Office", role: "Interstate Bridge Replacement", phone: "360-737-2726", state: "OR/WA" },
      { name: "ODOT Major Projects Branch", role: "CMAR, DB, Program Delivery", phone: "503-986-3020", state: "OR" },
      { name: "WSDOT Mega Projects Division", role: "SR-99, Ramps, Major Projects", phone: "206-440-4490", state: "WA" },
      { name: "Tom Vasquez, PMP, PE", role: "AECOM — Program Management Lead, Seattle", phone: "206-438-2700", state: "WA", firm: "AECOM" },
    ],
    solicitations: [
      { title: "IBR Program — Owner's Engineer Services", agency: "IBR Program Office", closes: "Jul 14, 2026", value: "$45M" },
      { title: "ODOT Newberg-Dundee Bypass — Final Design DB", agency: "ODOT", closes: "Aug 1, 2026", value: "$22M" },
    ]
  }
};

const DIRECTORY_FIRMS = [
  { name: "WSP USA", type: "Prime", disciplines: ["Highway","Bridges","Transit","Power","Environmental"], states: ["OR","WA"], city: "Portland / Seattle", prequalOR: true, prequalWA: true, dbe: false, phone: "503-224-3860" },
  { name: "HDR Engineering", type: "Prime", disciplines: ["Water","Bridges","Aviation","Environmental","Transit"], states: ["OR","WA"], city: "Portland / Bellevue", prequalOR: true, prequalWA: true, dbe: false, phone: "503-423-7300" },
  { name: "AECOM", type: "Prime", disciplines: ["Highway","Megaproject","Environmental","Bridges","Power"], states: ["OR","WA"], city: "Portland / Seattle", prequalOR: true, prequalWA: true, dbe: false, phone: "503-224-3860" },
  { name: "Jacobs Engineering", type: "Prime", disciplines: ["Transit","Highway","Water","Aviation"], states: ["OR","WA"], city: "Portland / Seattle", prequalOR: true, prequalWA: true, dbe: false, phone: "503-255-5400" },
  { name: "Parametrix", type: "Prime/Sub", disciplines: ["Environmental","Highway","Transit","Water"], states: ["OR","WA"], city: "Portland / Sumner WA", prequalOR: true, prequalWA: true, dbe: false, phone: "503-233-0700" },
  { name: "Kittelson & Associates", type: "Sub", disciplines: ["Highway","Transit","Aviation"], states: ["OR","WA"], city: "Portland", prequalOR: true, prequalWA: false, dbe: false, phone: "503-228-5230" },
  { name: "GRI — Geotechnical Resources", type: "Sub", disciplines: ["Geotechnical"], states: ["OR","WA"], city: "Portland", prequalOR: true, prequalWA: false, dbe: false, phone: "503-641-3478" },
  { name: "David Evans & Associates (DEA)", type: "Prime/Sub", disciplines: ["Highway","Bridges","Survey","Environmental"], states: ["OR","WA"], city: "Portland / Vancouver", prequalOR: true, prequalWA: true, dbe: false, phone: "503-223-6663" },
  { name: "KPFF Consulting Engineers", type: "Sub", disciplines: ["Bridges","Structures","Water"], states: ["OR","WA"], city: "Portland / Seattle", prequalOR: true, prequalWA: true, dbe: false, phone: "503-227-3251" },
  { name: "Perteet Inc.", type: "Prime/Sub", disciplines: ["Highway","Transit","Environmental"], states: ["WA"], city: "Everett WA", prequalOR: false, prequalWA: true, dbe: true, phone: "425-252-7700" },
  { name: "KBA — KimberlyHorn", type: "Sub", disciplines: ["Traffic","Highway","Transit"], states: ["OR","WA"], city: "Portland", prequalOR: true, prequalWA: false, dbe: false, phone: "503-546-5783" },
  { name: "Aspect Consulting", type: "Sub", disciplines: ["Environmental","Geotechnical","Water"], states: ["OR","WA"], city: "Seattle", prequalOR: false, prequalWA: true, dbe: false, phone: "206-325-7230" },
];

// ── COMPONENTS ───────────────────────────────────────────────────────────────

function TagBadge({ tag }) {
  const colors = {
    OR: "background:#1a3a2a;color:#4ade80;border:1px solid #166534",
    WA: "background:#1a2a3a;color:#60a5fa;border:1px solid #1e40af",
    FED: "background:#2a1a1a;color:#f97316;border:1px solid #7c2d12",
    "OR/WA": "background:#1a1a3a;color:#c084fc;border:1px solid #581c87",
  };
  return (
    <span style={{
      fontSize: "9px", fontFamily: "'JetBrains Mono', monospace",
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

function ReferenceItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div
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
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", color: "#e2e8f0", fontWeight: 500 }}>
          {item.label}
        </span>
      </div>
      {open && (
        <div style={{ marginTop: "6px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#94a3b8", lineHeight: 1.6 }}>
          {item.note}
          <span style={{ marginLeft: "12px", color: "#f97316", fontSize: "10px" }}>→ Open Resource ↗</span>
        </div>
      )}
    </div>
  );
}

function ContactCard({ contact }) {
  const stateColor = contact.state === "OR" ? "#4ade80" : contact.state === "WA" ? "#60a5fa" : "#c084fc";
  return (
    <div style={{
      background: "#0f1117", border: "1px solid #1e2433", borderRadius: "4px",
      padding: "12px 14px", display: "flex", flexDirection: "column", gap: "4px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", color: "#f1f5f9", fontWeight: 600 }}>{contact.name}</div>
        <span style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", color: stateColor, border: `1px solid ${stateColor}33`, padding: "1px 5px", borderRadius: "2px" }}>{contact.state}</span>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748b" }}>{contact.role}</div>
      {contact.firm && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#f97316" }}>{contact.firm}</div>}
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#475569", marginTop: "2px" }}>{contact.phone}</div>
    </div>
  );
}

function SolicitationRow({ sol }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr auto auto", gap: "12px", alignItems: "center",
      padding: "10px 12px", background: "#0a0c10", border: "1px solid #1e2433",
      borderRadius: "3px", marginBottom: "6px"
    }}>
      <div>
        <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "12px", color: "#e2e8f0", fontWeight: 500 }}>{sol.title}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#64748b", marginTop: "2px" }}>{sol.agency}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#94a3b8" }}>Closes</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#fbbf24" }}>{sol.closes}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#94a3b8" }}>Est. Value</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#4ade80" }}>{sol.value}</div>
      </div>
    </div>
  );
}

function DirectoryView() {
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
      fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", padding: "4px 10px",
      border: `1px solid ${active ? "#f97316" : "#2a2a2a"}`,
      background: active ? "#f9731611" : "transparent",
      color: active ? "#f97316" : "#64748b", borderRadius: "2px", cursor: "pointer"
    }}>{label}</button>
  );

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px", alignItems: "center" }}>
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search firms or disciplines..."
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
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

      <div style={{ display: "grid", gap: "6px" }}>
        {filtered.map(firm => (
          <div key={firm.name} style={{
            background: "#0f1117", border: "1px solid #1e2433", borderRadius: "4px",
            padding: "12px 16px", display: "grid", gridTemplateColumns: "1fr auto", gap: "8px"
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "14px", color: "#f1f5f9", fontWeight: 600 }}>{firm.name}</span>
                {firm.dbe && <span style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", background: "#422006", color: "#fb923c", border: "1px solid #7c2d12", padding: "1px 5px", borderRadius: "2px" }}>DBE</span>}
                <span style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", color: "#64748b" }}>{firm.type}</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#64748b", marginTop: "4px" }}>{firm.city}</div>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "6px" }}>
                {firm.disciplines.map(d => (
                  <span key={d} style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", background: "#0a0c10", color: "#94a3b8", border: "1px solid #2a2a2a", padding: "1px 5px", borderRadius: "2px" }}>{d}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
              <div style={{ display: "flex", gap: "4px" }}>
                {firm.prequalOR && <span style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", color: "#4ade80", border: "1px solid #166534", padding: "1px 5px", borderRadius: "2px" }}>ODOT ✓</span>}
                {firm.prequalWA && <span style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", color: "#60a5fa", border: "1px solid #1e40af", padding: "1px 5px", borderRadius: "2px" }}>WSDOT ✓</span>}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#475569" }}>{firm.phone}</div>
              <div style={{ display: "flex", gap: "4px" }}>
                {firm.states.map(s => <span key={s} style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", color: s==="OR"?"#4ade80":"#60a5fa" }}>{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#475569", textAlign: "center", padding: "40px" }}>
          No firms match current filters
        </div>
      )}
    </div>
  );
}

function AIPanel({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "InfraRef AI — technical reference for Oregon & Washington infrastructure consulting.\n\nAsk specific, exact questions: code section values, permit thresholds, load combinations, clearance requirements, funding eligibility criteria, contingency methods, or process timelines. I cite sources by manual name, edition, section, and table number.\n\nExample: \"What is the NESC Rule 232 minimum vertical clearance for a 115kV line crossing a state highway in Oregon?\"" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          system: `You are InfraRef AI — a senior-level technical reference assistant for licensed engineers, planners, and project managers at transportation and infrastructure consulting firms operating in Oregon and Washington state. Your users are professionals at firms like WSP, AECOM, HDR, Jacobs, David Evans & Associates, Parametrix, and agency staff at ODOT, WSDOT, TriMet, Sound Transit, BPA, USACE, and FHWA. They ask precise, technical questions and expect precise, technically authoritative answers with specific code sections, table numbers, formula references, and agency procedures.

YOU MUST:
- Cite specific document names, edition/version, chapter, section, table, or equation numbers whenever answering a standards question
- State numerical values exactly (dimensions, thresholds, ratios, factors, voltages, clearances, flow rates, etc.)
- Distinguish between Oregon-specific and Washington-specific requirements when they differ
- Flag when a value is a minimum vs. maximum vs. typical vs. recommended
- Note when a standard has been recently updated and what changed
- If a question has both a federal baseline and a state deviation, give both
- If you are not certain of an exact value, say so clearly and direct the user to the authoritative source — never fabricate specific numbers
- Format responses with clear structure: use short labeled sections when answering multi-part questions

TRANSPORTATION — HIGHWAY & ROADWAY:
You know AASHTO Green Book 7th Ed. (geometric design), MUTCD 11th Ed. (signs, signals, markings), HCM 7th Ed. (LOS, v/c ratios), AASHTO Roadside Design Guide 4th Ed. (clear zones, barrier warrants), NCHRP 350 / MASH (crash testing), ITE Trip Generation 11th Ed., AASHTO Flexible/Rigid Pavement Design guides, AASHTOWare Pavement ME. For Oregon: ODOT Highway Design Manual (HDM) current edition — Chapter 3 (alignment), Chapter 4 (cross-section), Chapter 8 (intersections); ODOT Standard Drawings; ODOT Geotechnical Design Manual; ODOT Hydraulics Manual; Oregon Standard Specifications for Construction (2021). For Washington: WSDOT Design Manual M 22-01; WSDOT Standard Plans; WSDOT Geotechnical Design Manual M 46-03; WSDOT Hydraulics Manual M 23-03; WSDOT Standard Specifications for Road, Bridge, and Municipal Construction (2024 GSP).

TRANSPORTATION — BRIDGES & STRUCTURES:
AASHTO LRFD Bridge Design Specifications 9th Ed. — load combinations (Strength I–V, Service I–IV, Extreme Event I–II, Fatigue I–II), resistance factors by component, HL-93 live load (design truck + lane, tandem + lane), dynamic load allowance (IM = 33% for strength, 15% fatigue). AASHTO Guide Spec for Seismic Bridge Design 2nd Ed. — SDC A/B/C/D, demand-capacity ratio, implicit vs. explicit design. AASHTO MBE 3rd Ed. for load rating — ASR method, legal loads (Type 3, 3S2, 3-3), permit loads. FHWA Tunnel Design Reference Manual. NBIS — 24-month routine inspection cycle, fracture-critical member (FCM) annual, underwater 60-month. For Oregon: ODOT Bridge Design & Drafting Manual, ODOT seismic zone maps, ODOT standard bridge drawings. For Washington: WSDOT Bridge Design Manual LRFD M 23-50 (2023), WSDOT BDM Chapter 4 (loads), Chapter 7 (substructure), Chapter 9 (bearings). Scour: HEC-18 5th Ed. — contraction scour (live bed vs. clear water), local scour at piers/abutments, total scour envelope. HEC-20 for stream stability. HEC-23 for countermeasures.

TRANSPORTATION — TRANSIT & RAIL:
FTA Capital Investment Grant program — New Starts (total cost >$400M or federal share >$100M), Small Starts (total cost <$400M, federal share <$100M), Core Capacity. FTA Standard Cost Categories (SCC) for cost estimation. STOPS model for ridership forecasting. AREMA Manual for Railway Engineering — Chapter 8 (structures), Chapter 16 (grade crossings), Chapter 9 (signals). FRA track safety standards (49 CFR Part 213) — Class 1–6 track geometry tolerances. APTA standards for light rail. For Oregon: TriMet Design Criteria Manual; TriMet SSMP. For Washington: Sound Transit System Design Criteria; Sound Transit IFC standards; Sounder commuter rail (BNSF trackage rights). WSDOT Rail: High Speed Ground Transportation Plan.

TRANSPORTATION — AVIATION:
FAA Advisory Circulars — AC 150/5300-13B (airport design: runway/taxiway geometry, OFA, RSA, OEZ, OFA by ADG I–VI), AC 150/5320-6G (pavement design, FAARFIELD software, PCN/ACN method), AC 150/5370-10H (construction specs: P-401 HMA, P-501 PCC, P-602 aggregate base, Item L-108 conduit), AC 150/5345 series (airfield lighting equipment), AC 150/5325-4B (runway length analysis). FAA Order 8260 (instrument procedures), FAA Part 77 (obstruction standards — horizontal surface 150 ft elevation, conical surface, approach/transitional). AIP grant: 90/10 federal/local split, PFC funding, entitlement vs. discretionary. For Oregon: ODOT Aeronautics Division — 97 public-use airports, Oregon Aviation System Plan. For Washington: WSDOT Aviation System Plan; King County International (BFI), Port of Seattle (SEA), Paine Field (PAE).

POWER & ENERGY INFRASTRUCTURE:
NESC (2023 National Electrical Safety Code) — Grade B construction (supply lines), Grade C (communication), clearance tables (Table 232, 234), loading districts (heavy/medium/light ice + wind), Rule 250 (supply conductor clearances over roads: 18 ft min for <750V, 22 ft for 750V–22kV at crossings), Rule 235 (vertical clearance to ground). ASCE 74 (Guidelines for Electrical Transmission Line Structural Loading) — 50-year MRI wind, extreme ice with concurrent wind, high-intensity wind (HIW). ASCE 7-22 load combinations for substation structures. IEEE standards: IEEE C2 (NESC), IEEE 80 (grounding), IEEE 693 (seismic for substations), IEEE 1110 (generator connection), IEEE C37 series (switching equipment). NERC reliability standards: TPL-001-5 (transmission planning — P0 through P7 contingencies), FAC-001/002 (facility ratings), MOD-032 (data for planning models). FERC Order 2023 (interconnection reform — cluster study, readiness deposits, 5-year queue windows). For Pacific NW: BPA Transmission Design Standards; BPA Open Access Transmission Tariff (OATT); NW Power Pool (NWPP) balancing authority area; WECC regional reliability standards; Oregon EFSC jurisdiction (>35MW generation facilities); Oregon PUC (OAR Chapter 860); Washington UTC (WAC Chapter 480); Puget Sound Energy, Pacific Power, PGE, Seattle City Light service territories and interconnection procedures. Substation design: ANSI/IEEE C57 series (transformers), IEC 61850 (protection and control communications), SEL relay coordination. Underground transmission: XLPE cable ampacity (IEC 60287), thermal resistivity soil testing, cable pulling tension limits. Renewable energy: IEC 61400 (wind turbines), IEC 61724 (PV monitoring), BESS: UL 9540, NFPA 855 (fire code — 600 kWh per room limits, 12 ft separation). Oregon Community Solar program rules (OAR 860-083); Washington Clean Energy Transformation Act (CETA) — GHG-free by 2045, natural gas prohibition timeline.

ENVIRONMENTAL & PERMITTING:
NEPA — CEQ regulations (40 CFR 1500–1508, 2020 revised), CE/EA/EIS thresholds, FHWA categorical exclusions (23 CFR 771.117 — c-list and d-list CEs), FTA CE list (Appendix A to Part 771). Section 404/401: Clean Water Act. USACE nationwide permits (NWP) — NWP 14 (linear transportation, up to 0.5 ac permanent fill, 300 LF in single and separate waters), NWP 12 (utility lines), NWP 3 (maintenance), NWP 27 (stream/wetland restoration). Individual permit process — public notice 30-day, 404(b)(1) guidelines, alternatives analysis. Section 401 — Oregon DSL and DEQ joint review; Washington Ecology 401 certification (30–60 day standard conditions). Section 7 ESA — NMFS jurisdiction over Pacific salmon (Chinook, Coho, Steelhead — all listed in OR/WA); USFWS for terrestrial species; informal consultation for "may affect, not likely to adversely affect"; formal consultation for "may affect, likely to adversely affect" — 135-day BiOp clock. Section 106 NHPA — SHPO consultation, APE determination, consulting parties, PA/MOA. For Oregon: ODOT ERP process; Oregon DSL removal-fill permit (50 cy threshold); Oregon Removal-Fill Law (ORS 196). For Washington: WSDOT Environmental Manual M 31-11; HPA (Hydraulic Project Approval) from WDFW; SMP substantial development permit (200 ft shoreline buffer); SEPA (WAC 197-11) — DNS, MDNS, EIS.

COST & FUNDING:
AACE International estimate class definitions — Class 5 (–50%/+100%, concept screening), Class 4 (–30%/+50%, study/screening), Class 3 (–20%/+30%, budget authorization), Class 2 (–15%/+20%, control estimate), Class 1 (–10%/+15%, check estimate). Risk-based contingency (AACE RP 40R-08): Monte Carlo P70/P80/P90 confidence levels. WSDOT Cost Risk Assessment (CRA) methodology. Escalation: ENR CCI (Seattle Q1 2026: ~14,220; Portland ~13,940); PPI for materials. Federal programs under IIJA/BIL (2021): NHPP ($36B/yr), STP ($7.3B/yr), HSIP ($3B/yr), CMAQ ($2.4B/yr), TAP ($1.1B/yr), RAISE discretionary ($1.5B/yr), Carbon Reduction Program ($6.4B total), PROTECT ($8.7B total), BRIC, MEGA (>$500M projects, $5B over 5 years), INFRA grants. For Oregon: ODOT STIP (2024–2027); ConnectOregon (biennial, multimodal); OTC allocations by region. For Washington: WSDOT STIP; TIB (Transportation Improvement Board) for local agencies; PSRC federal fund programming (Puget Sound region). FTA formula programs: Section 5307 (urbanized area), 5309 (CIG), 5310 (seniors/disabilities), 5311 (rural), 5337 (SGR), 5339 (buses/facilities).

MEGAPROJECT & PROGRAM DELIVERY:
Alternative delivery: Design-Build (DB) — ODOT authority under ORS 279C.335, WSDOT DB Manual M 3119 (ATCs, one-on-one meetings, $500K stipend standard); CMAR — ODOT CMAR guide, GMP development, contingency and risk sharing; P3 — FHWA P3 toolkit, revenue risk vs. availability payment models. Active Pacific NW megaprojects: Interstate Bridge Replacement (IBR) — I-5 Columbia River crossing, LPA selected (light rail + new vehicular spans), estimated cost $5.5–7.5B, FTA CIG New Starts process active, ODOT/WSDOT co-leads, FHWA and FTA federal leads; Sound Transit ST3 ($54B, 2016 authorization) — East Link (Bellevue/Redmond), Lynnwood Link, Federal Way Link, Tacoma Dome extension, West Seattle/Ballard (scope under revision); Portland Harbor Superfund (EPA ROD 2017) — dredge/cap/monitored natural recovery, lower Willamette River RM 1.9–11.8, PRP allocation underway; WSDOT SR-99 Bored Tunnel (completed 2019, reference for risk allocation and TBM lessons). Program controls: EVM (ANSI EIA-748) — BAC, BCWS, BCWP, ACWP, SPI, CPI, EAC = BAC/CPI. Schedule: CPM, resource-loaded schedule, OBS/WBS integration.

RESPONSE FORMAT RULES:
- For numerical standards questions: lead with the exact value and its source citation
- For process questions: use a brief numbered sequence
- For comparison questions (OR vs. WA, federal vs. state): use a simple two-column structure in text
- Always end with the authoritative source the user should verify against (manual name, section number)
- Maximum ~300 words per response unless the question genuinely requires more detail
- Never hedge with "you should consult an engineer" — the user IS the engineer; give them the technical answer`,
          messages: messages.filter(m => m.role !== "assistant" || messages.indexOf(m) > 0)
            .map(m => ({ role: m.role, content: m.text }))
            .concat([{ role: "user", content: userMsg }])
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Unable to get a response.";
      setMessages(m => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", text: "Connection error. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{
      width: "340px", minWidth: "340px", background: "#080a0e", borderLeft: "1px solid #1e2433",
      display: "flex", flexDirection: "column", height: "100%"
    }}>
      <div style={{ padding: "16px", borderBottom: "1px solid #1e2433", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", color: "#f97316", letterSpacing: "0.1em" }}>INFRAREF AI</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#475569" }}>OR / WA Consulting Assistant</div>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: "18px" }}>✕</button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#334155" }}>{m.role === "user" ? "YOU" : "AI"}</div>
            <div style={{
              maxWidth: "90%", padding: "10px 12px", borderRadius: "3px",
              fontFamily: "'Libre Franklin', sans-serif", fontSize: "12px", lineHeight: 1.6,
              background: m.role === "user" ? "#1a1f2e" : "#0f1117",
              border: `1px solid ${m.role === "user" ? "#2a3a5a" : "#1e2433"}`,
              color: m.role === "user" ? "#93c5fd" : "#cbd5e1"
            }}>
              {m.text.split('\n').map((line, li) => (
                <span key={li}>{line}{li < m.text.split('\n').length - 1 && <br />}</span>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#f97316" }}>
            processing<span style={{ animation: "blink 1s infinite" }}>_</span>
          </div>
        )}
      </div>

      <div style={{ padding: "12px", borderTop: "1px solid #1e2433", display: "flex", gap: "8px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Ask about OR/WA standards..."
          style={{
            flex: 1, background: "#0f1117", border: "1px solid #2a2a2a", color: "#e2e8f0",
            fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
            padding: "8px 10px", borderRadius: "3px", outline: "none"
          }}
        />
        <button
          onClick={send}
          style={{
            background: "#f97316", border: "none", color: "#0a0c10",
            fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 600,
            padding: "0 12px", borderRadius: "3px", cursor: "pointer"
          }}
        >→</button>
      </div>

      <div style={{ padding: "8px 12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {[
          "NWP 14 permanent fill threshold OR",
          "AASHTO LRFD stopping sight distance 60 mph",
          "NESC Rule 232 clearance 115kV over highway",
          "WSDOT CRA P80 contingency process",
          "ODOT HDM superelevation urban arterial max",
          "ESA Section 7 formal consultation BiOp timeline",
          "FTA Small Starts vs New Starts thresholds",
          "HEC-18 local pier scour round-nose pier",
        ].map(q => (
          <button key={q} onClick={() => { setInput(q); }}
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "3px 6px",
              background: "transparent", border: "1px solid #1e2433", color: "#475569",
              borderRadius: "2px", cursor: "pointer", textAlign: "left"
            }}>{q}</button>
        ))}
      </div>
    </div>
  );
}

// ── MAIN APP ─────────────────────────────────────────────────────────────────

export default function InfraRef() {
  const [activeModule, setActiveModule] = useState("highway");
  const [showAI, setShowAI] = useState(true);
  const [stateFilter, setStateFilter] = useState("ALL");

  const module = CONTENT[activeModule];

  return (
    <>
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; margin: 0; padding: 0; scrollbar-width: thin; scrollbar-color: #1e2433 #080a0e; }
        body { background: #080a0e; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .module-item:hover { background: #0f1117 !important; }
      `}</style>

      <div style={{ display: "flex", height: "100vh", background: "#080a0e", overflow: "hidden", fontFamily: "'Libre Franklin', sans-serif" }}>

        {/* LEFT NAV */}
        <div style={{ width: "220px", minWidth: "220px", background: "#04050a", borderRight: "1px solid #1e2433", display: "flex", flexDirection: "column" }}>
          {/* Logo */}
          <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid #1e2433" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", color: "#f97316", letterSpacing: "0.12em", lineHeight: 1 }}>INFRAREF</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#334155", marginTop: "4px", letterSpacing: "0.1em" }}>OREGON · WASHINGTON</div>
            <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
              {["ALL","OR","WA"].map(s => (
                <button key={s} onClick={() => setStateFilter(s)} style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 8px",
                  border: `1px solid ${stateFilter===s ? "#f97316" : "#1e2433"}`,
                  background: stateFilter===s ? "#f9731611" : "transparent",
                  color: stateFilter===s ? "#f97316" : "#475569", borderRadius: "2px", cursor: "pointer"
                }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Nav Items */}
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

          {/* AI Toggle */}
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

          {/* Header */}
          <div style={{ marginBottom: "24px", borderBottom: "1px solid #1e2433", paddingBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px", color: "#f1f5f9", letterSpacing: "0.08em" }}>{module.title}</h1>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#475569" }}>{module.subtitle}</span>
            </div>
          </div>

          {module.isDirectory ? (
            <DirectoryView />
          ) : (
            <div style={{ display: "grid", gap: "28px" }}>

              {/* Reference Sections */}
              {module.sections.map((sec, si) => (
                <div key={si}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#f97316", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "20px", height: "1px", background: "#f97316", display: "inline-block" }} />
                    {sec.heading}
                  </div>
                  <div style={{ display: "grid", gap: "6px" }}>
                    {sec.items.map((item, ii) => <ReferenceItem key={ii} item={item} />)}
                  </div>
                </div>
              ))}

              {/* Contacts */}
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

              {/* Solicitations */}
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
        </div>

        {/* AI PANEL */}
        {showAI && <AIPanel onClose={() => setShowAI(false)} />}
      </div>
    </>
  );
}
