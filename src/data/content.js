export const CONTENT = {
  highway: {
    title: "Highway & Roadway",
    subtitle: "ODOT & WSDOT Design Standards Reference",
    sections: [
      {
        heading: "Active Legislation Schedule",
        items: [
          { label: "News & Legislation Calendar", tag: "OR/WA", url: "#", note: "Full schedule: hearings, comment periods, legislation, rulemaking — use Calendar module to filter by type." },
          { label: "Oregon Legislature — policy committee deadline Mar 31, sine die target May 30", tag: "OR", url: "#", note: "2026 session key dates." },
          { label: "Washington Legislature — floor cutoff Apr 15", tag: "WA", url: "#", note: "Last day to pass bills from opposite house." },
          { label: "Federal FY2026 appropriations / continuing resolution", tag: "FED", url: "#", note: "Transportation appropriations timeline." },
        ]
      },
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
        heading: "Active Legislation Schedule",
        items: [
          { label: "News & Legislation Calendar", tag: "OR/WA", url: "#", note: "Hearings, comment periods, legislation — use Calendar module for full schedule." },
        ]
      },
      {
        heading: "Design Standards",
        items: [
          { label: "AASHTO LRFD Bridge Design Specifications (9th Ed.)", tag: "FED", url: "#", note: "HL-93 live load, Strength I—V limit states" },
          { label: "ODOT Bridge Design & Drafting Manual", tag: "OR", url: "#", note: "Chapter 1—20, seismic design per AASHTO Guide Spec" },
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
          { label: "AASHTO Guide Spec for Seismic Bridge Design", tag: "FED", url: "#", note: "SDC A—D, OR/WA SDC C/D high-seismic zones" },
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
        heading: "Active Legislation Schedule",
        items: [
          { label: "News & Legislation Calendar", tag: "OR/WA", url: "#", note: "FTA CIG, hearings, legislation — use Calendar module for full schedule." },
        ]
      },
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
          { label: "ODOT STIP — Statewide Transportation Improvement Program", tag: "OR", url: "#", note: "2024—2027 STIP — project list, funding sources by region" },
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
  calendar: {
    title: "News & Legislation Calendar",
    subtitle: "Hearings, comment periods, legislation & rulemaking — OR, WA, Federal",
    sections: [],
    contacts: [],
    solicitations: [],
    isCalendar: true
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
          { label: "ODOT Alternative Delivery Guide — CMAR & DB", tag: "OR", url: "#", note: "ORS 279C.335 authority, procurement checklist, RFP templates, best-value selection" },
          { label: "WSDOT Design-Build Manual M 3119", tag: "WA", url: "#", note: "ATCs, One-on-One Meetings, stipend policy ($500K typical), early contractor involvement" },
          { label: "FHWA Every Day Counts — ADE Program", tag: "FED", url: "#", note: "P3, CMGC, bundling guidance — federal authorization and toolkit" },
          { label: "FHWA P3 Toolkit & Model Contracts", tag: "FED", url: "#", note: "Availability payment vs. revenue risk; standard contract language" },
        ]
      },
      {
        heading: "Risk & Cost Control",
        items: [
          { label: "AACE RP 40R-08 — Contingency Estimation", tag: "FED", url: "#", note: "Expected Value, Monte Carlo, risk register integration; P50/P70/P80 confidence" },
          { label: "WSDOT Cost Risk Assessment Methodology", tag: "WA", url: "#", note: "CRA process, risk-adjusted estimate, S-curve output; required for major projects" },
          { label: "ODOT QA/QC Manual — Major Projects", tag: "OR", url: "#", note: "Design QC, construction quality assurance framework, independent review" },
          { label: "AACE Estimate Class Matrix (Class 5 → Class 1)", tag: "FED", url: "#", note: "Accuracy ranges from screening (–50/+100%) to check estimate (–10/+15%)" },
        ]
      },
      {
        heading: "Program Controls & EVM",
        items: [
          { label: "ANSI EIA-748 — Earned Value Management", tag: "FED", url: "#", note: "BAC, BCWS, BCWP, ACWP; SPI, CPI; EAC = BAC/CPI; 32 guidelines" },
          { label: "PMI PMBOK — Schedule & Integration", tag: "FED", url: "#", note: "CPM, resource-loaded schedule, OBS/WBS integration, baseline control" },
          { label: "ODOT Major Project Oversight — Reporting", tag: "OR", url: "#", note: "Monthly/quarterly reporting, cost and schedule variance thresholds" },
        ]
      },
      {
        heading: "Active Pacific NW Megaprojects",
        items: [
          { label: "Interstate Bridge Replacement (IBR) Program", tag: "OR/WA", url: "#", note: "I-5 Columbia River Bridge — LPA: Light Rail + new spans, ~$5.5–7.5B; FTA CIG New Starts; ODOT/WSDOT co-leads" },
          { label: "Sound Transit ST3 — Link Light Rail Expansion", tag: "WA", url: "#", note: "$54B program — Lynnwood, Federal Way, Tacoma Dome, Everett, Issaquah; West Seattle/Ballard scope under revision" },
          { label: "Portland Harbor Superfund — Remedy Design", tag: "OR", url: "#", note: "EPA ROD 2017 — dredge/cap/MNR, lower Willamette RM 1.9–11.8; remedy contractor procurement" },
          { label: "WSDOT SR-99 Bored Tunnel — Lessons Learned", tag: "WA", url: "#", note: "Completed 2019; TBM delivery, risk allocation, DB contract structure — key reference" },
          { label: "I-5 Rose Quarter Improvement Project", tag: "OR", url: "https://www.i5rosequarter.org/", detailSlug: "i5-rose-quarter", note: "ODOT — caps, highway cover; NEPA/design in progress; CMGC delivery" },
          { label: "Columbia River Crossing (Historical)", tag: "OR/WA", url: "#", note: "Prior IBR iteration — DEIS, funding; superseded by current IBR Program" },
        ]
      }
    ],
    contacts: [
      { name: "IBR Program Office", role: "Interstate Bridge Replacement", phone: "360-737-2726", state: "OR/WA" },
      { name: "ODOT Major Projects Branch", role: "CMAR, DB, Program Delivery", phone: "503-986-3020", state: "OR" },
      { name: "WSDOT Mega Projects Division", role: "SR-99, Ramps, Major Projects", phone: "206-440-4490", state: "WA" },
      { name: "FTA Office of Major Capital Projects", role: "CIG New Starts / Megaprojects", phone: "202-366-4043", state: "FED", firm: "FTA" },
      { name: "Tom Vasquez, PMP, PE", role: "AECOM — Program Management Lead, Seattle", phone: "206-438-2700", state: "WA", firm: "AECOM" },
    ],
    solicitations: [
      { title: "IBR Program — Owner's Engineer Services", agency: "IBR Program Office", closes: "Jul 14, 2026", value: "$45M" },
      { title: "ODOT Newberg-Dundee Bypass — Final Design DB", agency: "ODOT", closes: "Aug 1, 2026", value: "$22M" },
    ]
  }
};
