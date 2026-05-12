import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "industrySlug": "industrial-coatings-inspection",
  "industryName": "Industrial Coatings Inspection",
  "title": "Inventory Management for Industrial Coatings Inspection",
  "desc": "Inventory Management for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor industrial coatings inspection, the inventory management module is configured around the codes, regulators, and operator-specific requirements you face every day: NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection), ISO 8501 (visual cleanliness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr), PPG (paint mfr) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for industrial coatings inspection — pre-configured templates, terminology, and reports",
    "Integrates with Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person industrial coatings inspection runs inventory management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational industrial coatings inspection deploys inventory management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing industrial coatings inspection integrates inventory management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven industrial coatings inspection uses inventory management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "NACE / AMPP CIP Level I / II / III",
    "SSPC PA 2 (DFT measurement)",
    "SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep)",
    "ISO 12944 (corrosion protection)",
    "ISO 8501 (visual cleanliness)",
    "ISO 8502 (surface contamination)",
    "ISO 19840 (DFT measurement)",
    "ASTM D4541 (pull-off adhesion)"
  ],
  "industryOperators": [
    "Hempel (paint mfr)",
    "Jotun (paint mfr)",
    "AkzoNobel International (paint mfr)",
    "PPG (paint mfr)",
    "Sherwin-Williams Protective & Marine (paint mfr)",
    "Shell coatings spec",
    "BP coatings spec",
    "ADNOC coatings spec"
  ],
  "industryPain": [
    "DFT readings on paper, re-entered into Excel — transcription errors",
    "Hold-point notification to client / engineer informal — clients miss critical holds",
    "Inspector qualifications expire mid-project — NACE Level II cert lapses, work rejected",
    "Coating-system data sheets scattered across project email — wrong system applied"
  ],
  "faqs": [
    [
      "Does inventory management work specifically for industrial coatings inspection?",
      "Yes. The module is configured for industrial coatings inspection workflow with pre-built templates aligned to NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection). Operator-specific quality clauses for Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing industrial coatings inspection tools?",
      "Standard integration via REST API with major industrial coatings inspection systems. Atlantis NDT ERP can run as the system of record for inventory management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small industrial coatings inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person industrial coatings inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How does the system track NDT probe usage and life cycles?",
      "Each probe gets a barcode/QR tag. When a technician scans a probe on check-out the system logs technician, project, asset under test, and start time. On check-in it logs end time + auto-increments scan hours. PAUT wedges and PA probes have manufacturer-recommended life (typically 1,000–3,000 hours); when a probe approaches its limit the system flags it for inspection and the supervisor receives a dashboard alert."
    ],
    [
      "Can it manage radioactive sources for industrial radiography?",
      "Yes — the radioactive source module is built for IAEA TS-R-1 and US NRC 10 CFR 71 compliance. It tracks Ir-192 / Se-75 / Co-60 source serial numbers, current activity (auto-decayed from last measurement), expiry, shipment documentation, daily survey records, and technician dose exposure. Source-handling permits and route plans are stored against the asset with audit-ready PDF export."
    ]
  ]
};
export default function ErpCross_inventory_management_for_industrial_coatings_inspection() { return <ErpModuleIndustryPage {...data} />; }
