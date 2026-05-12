import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "industrySlug": "environmental-testing-labs",
  "industryName": "Environmental Testing Laboratories",
  "title": "Inventory Management for Environmental Testing Laboratories",
  "desc": "Inventory Management for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor environmental testing laboratories, the inventory management module is configured around the codes, regulators, and operator-specific requirements you face every day: ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series), ASTM water / soil methods, EN ISO water-method series. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from SGS — global testing, Eurofins — environmental, ALS Limited — environmental, Bureau Veritas — environmental so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for environmental testing laboratories — pre-configured templates, terminology, and reports",
    "Integrates with SGS — global testing, Eurofins — environmental, ALS Limited — environmental vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person environmental testing laboratory runs inventory management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational environmental testing laboratories deploys inventory management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing environmental testing laboratory integrates inventory management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven environmental testing laboratories uses inventory management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ISO/IEC 17025:2017",
    "NELAP / TNI standard (US)",
    "US EPA methods (SW-846, 600 series, 500 series)",
    "ASTM water / soil methods",
    "EN ISO water-method series",
    "BS / EN environmental methods",
    "UK Environment Agency MCERTS",
    "Australian NATA + ISO 17025"
  ],
  "industryOperators": [
    "SGS — global testing",
    "Eurofins — environmental",
    "ALS Limited — environmental",
    "Bureau Veritas — environmental",
    "Intertek — environmental",
    "TestAmerica / Eurofins TestAmerica",
    "Pace Analytical",
    "GBA Forschungsinstitut"
  ],
  "industryPain": [
    "Sample chain-of-custody on paper — regulator findings",
    "Lab data integration from instruments (GC, GC-MS, ICP, IC) — manual transcription errors",
    "EPA / EA reporting formats — manual reformatting per submission",
    "ISO 17025 method validation records scattered — accreditation findings"
  ],
  "faqs": [
    [
      "Does inventory management work specifically for environmental testing laboratories?",
      "Yes. The module is configured for environmental testing laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series), ASTM water / soil methods. Operator-specific quality clauses for SGS — global testing, Eurofins — environmental, ALS Limited — environmental are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing environmental testing laboratories tools?",
      "Standard integration via REST API with major environmental testing laboratories systems. Atlantis NDT ERP can run as the system of record for inventory management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small environmental testing laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person environmental testing laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_inventory_management_for_environmental_testing_labs() { return <ErpModuleIndustryPage {...data} />; }
