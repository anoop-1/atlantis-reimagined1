import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "citySlug": "houston",
  "cityName": "Houston",
  "country": "USA",
  "title": "Inventory Management in Houston",
  "desc": "Inventory Management ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor inspection teams operating in Houston, USA, the inventory management module is configured against local realities: Energy capital of the world. 4,600+ oil & gas firms. Continuous turnaround demand. Pre-built templates support operator-specific quality clauses from ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston, and regulatory frameworks under OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Houston inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for Houston workflow — pre-configured operator templates for ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview",
    "Regulatory alignment with OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Houston inspection contractor serving ExxonMobil Baytown refinery and Marathon Galveston Bay deploys inventory management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Houston EPC quality team standardizes inventory management across 4 simultaneous project sites in the USA market. Daily reports, audit packages, and customer-format reports flow to LyondellBasell Channelview portals automatically.",
    "A growing Houston-based service provider integrates inventory management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Valero Houston — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Houston inspection company uses inventory management to pass OSHA Region 6 PSM and TCEQ air permits audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ExxonMobil Baytown refinery",
    "Marathon Galveston Bay",
    "LyondellBasell Channelview",
    "Valero Houston",
    "Phillips 66 Sweeny",
    "Shell Deer Park",
    "Pemex Deer Park",
    "INEOS Battleground"
  ],
  "cityRegulators": [
    "OSHA Region 6 PSM",
    "TCEQ air permits",
    "USCG District 8 marine",
    "Texas Railroad Commission",
    "EPA Region 6",
    "DOT PHMSA pipeline"
  ],
  "cityPain": [
    "Inventory Management tracked in spreadsheets — always 2 months behind Houston operator-portal requirements",
    "OSHA Region 6 PSM audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ExxonMobil Baytown refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inventory management module configured for Houston operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston, Phillips 66 Sweeny. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with OSHA Region 6 PSM and other USA regulators?",
      "Yes. OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine, Texas Railroad Commission requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Houston?",
      "Platform supports English (primary), and where relevant for USA: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 29.7604,
  "lng": -95.3698
};
export default function ErpMC_inventory_management_houston() { return <ErpModuleCityPage {...data} />; }
