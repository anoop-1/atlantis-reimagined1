import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "welding-fabrication-shops",
  "name": "Welding & Fabrication Shops",
  "title": "ERP for Welding & Fabrication Shops (AWS, ASME, EN ISO)",
  "h1": "ERP for Welding & Fabrication Shops",
  "desc": "WPS / PQR / WPQ library, welder qualification tracking, ASME 'U' / 'S' / 'PP' stamp compliance, AWS D1.1 / D1.5 / D14 work order management, weld map traceability, NDE coordination, and customer-specific quality flow-down.",
  "intro": "A welding fabrication shop runs on certified procedures and qualified welders. AWS D1.1 structural steel, ASME Section IX boiler & pressure vessel code, EN ISO 15614 European pipeline welding, API 1104 pipeline construction — each governs how welding is done, how welders are qualified, and how each weld is documented. Add ASME 'U' stamp, 'S' stamp, 'PP' stamp, 'R' stamp — the joint review and quality system are formal contracts. The welding fabrication ERP is the operational system that keeps the shop compliant and profitable.",
  "modules": [
    "certification-tracking",
    "work-order-management",
    "document-control",
    "quality-management",
    "audit-management",
    "asset-management",
    "inventory-management",
    "project-management"
  ],
  "regs": [
    "AWS D1.1 / D1.5 / D1.6 / D14",
    "ASME Section IX",
    "ASME Section VIII Division 1",
    "ASME B31.1 / B31.3",
    "API 1104",
    "EN ISO 15614 / 9606 / 14732",
    "AS/NZS 3992",
    "ASME 'U' / 'S' / 'PP' / 'R' / 'NR' stamps",
    "ISO 3834-2 / ISO 9001"
  ],
  "operators": [
    "Bechtel — civil / structural",
    "Fluor — EPC",
    "TechnipFMC — subsea",
    "McDermott — offshore",
    "Saipem — offshore / pipeline",
    "MMR Group — power generation",
    "Wood / Worley — refinery",
    "AECOM — defense / civil",
    "Black & Veatch — power / water"
  ],
  "pain": [
    "WPS / PQR library in shared drive — outdated revisions used in field",
    "Welder continuity logged on paper — qualification expires mid-job, work rejected",
    "Weld map maintained in CAD — not linked to inspection or NDE results",
    "ASME 'U' stamp joint-review evidence assembled manually before each audit — 80 hours of work",
    "Customer quality clauses flow-down is informal — internal procedures lag customer revisions"
  ],
  "faqs": [
    [
      "How are WPS / PQR / WPQ records managed?",
      "The welding-procedure library stores each WPS with linked PQR(s) and supports change-control workflow. WPS revisions are linked to applicable joint design, base materials, filler metals, position, and qualification ranges per ASME Section IX QW-200. Welder qualification (WPQ) is tracked per ASME QW-300 with continuity log (3-month rolling) and renewal triggers."
    ],
    [
      "Does it support ASME 'U' / 'S' / 'PP' joint review preparation?",
      "Yes. The joint-review evidence package builder assembles WPS, PQR, WPQ continuity, calibration certificates, material certs, NDE records, hydrotest records, and personnel qualifications for each pressure-retaining item. The package is presented in the ASME-required structure with reviewer cross-reference. Typical preparation time drops from 80 hours to under 4 hours per pressure vessel."
    ],
    [
      "Can welder continuity be tracked across multiple shops / sites?",
      "Yes. A welder's continuity log is maintained centrally regardless of which fabrication facility they are working at. ASME Section IX QW-322 requires that a welder demonstrate use of the qualified process within 6 months; the system tracks every weld performed by the welder and flags continuity-loss risk 60 days in advance."
    ],
    [
      "How is weld-map linked to NDE / inspection / hydrotest records?",
      "Each weld in the weld map carries a unique weld ID. NDE results (RT, UT, MT, PT), PWHT records, hydrotest records, and final acceptance are linked to the weld ID. A weld card can be retrieved for any weld showing the full life cycle from procedure qualification to final acceptance — supporting the ASME, AWS, and customer-specific traceability requirements."
    ],
    [
      "Does it manage customer-specific quality clauses (Boeing D-590, AITM, ADNOC ACS-01)?",
      "Yes. Customer-specific quality requirements are imported as controlled documents with revision tracking. Internal procedures that flow-down a specific customer clause are cross-referenced; when the customer revises the clause, all affected internal procedures are flagged for review per ISO 9001 / AS9100D §4.4 flow-down requirements."
    ]
  ]
};
export default function ErpIndustry_welding_fabrication_shops() { return <ErpIndustryPage {...data} />; }
