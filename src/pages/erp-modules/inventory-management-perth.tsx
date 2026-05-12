import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "citySlug": "perth",
  "cityName": "Perth",
  "country": "Australia",
  "title": "Inventory Management in Perth",
  "desc": "Inventory Management ERP module for inspection companies in Perth, Australia. Pre-configured for Woodside Energy, Chevron Australia (Gorgon, Wheatstone) and aligned with WorkSafe WA, NOPSEMA offshore. Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor inspection teams operating in Perth, Australia, the inventory management module is configured against local realities: Western Australia LNG and iron ore gateway. Pilbara FIFO support. Carnarvon Basin offshore. Pre-built templates support operator-specific quality clauses from Woodside Energy, Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys, Santos GLNG, and regulatory frameworks under WorkSafe WA, NOPSEMA offshore, DMIRS mines & safety are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Perth inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for Perth workflow — pre-configured operator templates for Woodside Energy, Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys",
    "Regulatory alignment with WorkSafe WA, NOPSEMA offshore, DMIRS mines & safety — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Perth inspection contractor serving Woodside Energy and Chevron Australia (Gorgon, Wheatstone) deploys inventory management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Perth EPC quality team standardizes inventory management across 4 simultaneous project sites in the Australia market. Daily reports, audit packages, and customer-format reports flow to INPEX Ichthys portals automatically.",
    "A growing Perth-based service provider integrates inventory management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Santos GLNG — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Perth inspection company uses inventory management to pass WorkSafe WA and NOPSEMA offshore audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Woodside Energy",
    "Chevron Australia (Gorgon, Wheatstone)",
    "INPEX Ichthys",
    "Santos GLNG",
    "BHP iron ore",
    "Rio Tinto Pilbara",
    "FMG mining"
  ],
  "cityRegulators": [
    "WorkSafe WA",
    "NOPSEMA offshore",
    "DMIRS mines & safety",
    "Australian Petroleum Safety Authority"
  ],
  "cityPain": [
    "Inventory Management tracked in spreadsheets — always 2 months behind Perth operator-portal requirements",
    "WorkSafe WA audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Woodside Energy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys, Santos GLNG require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inventory management module configured for Perth operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Woodside Energy, Chevron Australia (Gorgon, Wheatstone), INPEX Ichthys, Santos GLNG, BHP iron ore. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with WorkSafe WA and other Australia regulators?",
      "Yes. WorkSafe WA, NOPSEMA offshore, DMIRS mines & safety, Australian Petroleum Safety Authority requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Perth?",
      "Platform supports English (primary), and where relevant for Australia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "How does the system track NDT probe usage and life cycles?",
      "Each probe gets a barcode/QR tag. When a technician scans a probe on check-out the system logs technician, project, asset under test, and start time. On check-in it logs end time + auto-increments scan hours. PAUT wedges and PA probes have manufacturer-recommended life (typically 1,000–3,000 hours); when a probe approaches its limit the system flags it for inspection and the supervisor receives a dashboard alert."
    ],
    [
      "Can it manage radioactive sources for industrial radiography?",
      "Yes — the radioactive source module is built for IAEA TS-R-1 and US NRC 10 CFR 71 compliance. It tracks Ir-192 / Se-75 / Co-60 source serial numbers, current activity (auto-decayed from last measurement), expiry, shipment documentation, daily survey records, and technician dose exposure. Source-handling permits and route plans are stored against the asset with audit-ready PDF export."
    ]
  ],
  "lat": -31.9505,
  "lng": 115.8605
};
export default function ErpMC_inventory_management_perth() { return <ErpModuleCityPage {...data} />; }
