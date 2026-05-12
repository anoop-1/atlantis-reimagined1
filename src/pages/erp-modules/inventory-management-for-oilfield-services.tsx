import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "industrySlug": "oilfield-services",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "title": "Inventory Management for Oilfield Services & Wellsite Inspection",
  "desc": "Inventory Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor oilfield services & wellsite inspection, the inventory management module is configured around the codes, regulators, and operator-specific requirements you face every day: API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control), API RP 53 (BOP). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from ExxonMobil — upstream, Chevron — upstream, Shell — upstream, BP — upstream so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for oilfield services & wellsite inspection — pre-configured templates, terminology, and reports",
    "Integrates with ExxonMobil — upstream, Chevron — upstream, Shell — upstream vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person oilfield services & wellsite inspection runs inventory management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational oilfield services & wellsite inspection deploys inventory management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing oilfield services & wellsite inspection integrates inventory management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven oilfield services & wellsite inspection uses inventory management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API Spec 4F (drilling derricks)",
    "API Spec 6A (wellhead)",
    "API Spec 16A (drill-through equipment)",
    "API Spec 16D (BOP control)",
    "API RP 53 (BOP)",
    "API RP 5A5 (OCTG inspection)",
    "API RP 5C5 / 5C6 / 5C7 (casing / tubing)",
    "ISO 13501 / 13628 (subsea)"
  ],
  "industryOperators": [
    "ExxonMobil — upstream",
    "Chevron — upstream",
    "Shell — upstream",
    "BP — upstream",
    "ConocoPhillips — upstream",
    "Saudi Aramco upstream",
    "ADNOC Onshore",
    "PEMEX upstream"
  ],
  "industryPain": [
    "Field-ticket capture on paper — billing disputes, days lost in invoicing",
    "Rig / BOP test scheduling on Excel — compliance findings from regulator",
    "Casing / tubing inspection records scattered — no aggregated wellbore data",
    "OCTG inventory (drill collars, casing, tubing) — no real-time location tracking"
  ],
  "faqs": [
    [
      "Does inventory management work specifically for oilfield services & wellsite inspection?",
      "Yes. The module is configured for oilfield services & wellsite inspection workflow with pre-built templates aligned to API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control). Operator-specific quality clauses for ExxonMobil — upstream, Chevron — upstream, Shell — upstream are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing oilfield services & wellsite inspection tools?",
      "Standard integration via REST API with major oilfield services & wellsite inspection systems. Atlantis NDT ERP can run as the system of record for inventory management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small oilfield services & wellsite inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person oilfield services & wellsite inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_inventory_management_for_oilfield_services() { return <ErpModuleIndustryPage {...data} />; }
