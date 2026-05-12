import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "industrySlug": "calibration-laboratories",
  "industryName": "Calibration Laboratories",
  "title": "Inventory Management for Calibration Laboratories",
  "desc": "Inventory Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor calibration laboratories, the inventory management module is configured around the codes, regulators, and operator-specific requirements you face every day: ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003, ILAC P14 (uncertainty), JCGM 100:2008 (GUM). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier), NIST (national standards — US) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for calibration laboratories — pre-configured templates, terminology, and reports",
    "Integrates with Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person calibration laboratory runs inventory management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational calibration laboratories deploys inventory management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing calibration laboratory integrates inventory management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven calibration laboratories uses inventory management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ISO/IEC 17025:2017",
    "ANSI/NCSL Z540.1 / Z540.3",
    "ISO 10012:2003",
    "ILAC P14 (uncertainty)",
    "JCGM 100:2008 (GUM)",
    "JCGM 200:2012 (VIM)",
    "EA-4/02 (uncertainty)",
    "ASTM E2935 (decision rules)"
  ],
  "industryOperators": [
    "Mitutoyo (instrument supplier)",
    "Fluke Calibration (instrument supplier)",
    "Beamex (instrument supplier)",
    "NIST (national standards — US)",
    "NPL (national standards — UK)",
    "PTB (national standards — DE)",
    "BIPM (international)",
    "Major aerospace primes (Boeing, Airbus, RTX)"
  ],
  "industryPain": [
    "Excel-based uncertainty budgets — error-prone, no version control, audit nightmare",
    "Word / PDF certificate generation — slow, no validation, inconsistent format",
    "Customer-asset tracking in disparate folders — instruments lost on-site, repeat customer enquiries",
    "Manual ISO 17025 §7.10 out-of-tolerance handling — customer-impact analysis missed"
  ],
  "faqs": [
    [
      "Does inventory management work specifically for calibration laboratories?",
      "Yes. The module is configured for calibration laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003, ILAC P14 (uncertainty). Operator-specific quality clauses for Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing calibration laboratories tools?",
      "Standard integration via REST API with major calibration laboratories systems. Atlantis NDT ERP can run as the system of record for inventory management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small calibration laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person calibration laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_inventory_management_for_calibration_laboratories() { return <ErpModuleIndustryPage {...data} />; }
