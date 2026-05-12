import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "country": "UAE",
  "title": "Inventory Management in Dubai",
  "desc": "Inventory Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor inspection teams operating in Dubai, UAE, the inventory management module is configured against local realities: Regional HQ city for GCC oil & gas. EPC contractors, inspection service multinationals. Pre-built templates support operator-specific quality clauses from ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, and regulatory frameworks under ADQCC, MOIAT, Dubai Municipality are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Dubai inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for Dubai workflow — pre-configured operator templates for ADNOC Distribution, ENOC, DUBAL aluminum",
    "Regulatory alignment with ADQCC, MOIAT, Dubai Municipality — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Dubai inspection contractor serving ADNOC Distribution and ENOC deploys inventory management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Dubai EPC quality team standardizes inventory management across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to DUBAL aluminum portals automatically.",
    "A growing Dubai-based service provider integrates inventory management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by DEWA power — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Dubai inspection company uses inventory management to pass ADQCC and MOIAT audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ADNOC Distribution",
    "ENOC",
    "DUBAL aluminum",
    "DEWA power",
    "Dragon Oil",
    "Wood UAE",
    "Petrofac Dubai",
    "Sharjah National Oil Co"
  ],
  "cityRegulators": [
    "ADQCC",
    "MOIAT",
    "Dubai Municipality",
    "DCAS",
    "Dubai Civil Defence"
  ],
  "cityPain": [
    "Inventory Management tracked in spreadsheets — always 2 months behind Dubai operator-portal requirements",
    "ADQCC audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ADNOC Distribution updates monthly — internal procedures lag by weeks",
    "Customer-format reports for ENOC, DUBAL aluminum, DEWA power require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inventory management module configured for Dubai operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, Dragon Oil. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ADQCC and other UAE regulators?",
      "Yes. ADQCC, MOIAT, Dubai Municipality, DCAS requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Dubai?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 25.276987,
  "lng": 55.296249
};
export default function ErpMC_inventory_management_dubai() { return <ErpModuleCityPage {...data} />; }
