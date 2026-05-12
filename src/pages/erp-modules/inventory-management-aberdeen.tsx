import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inventory-management",
  "moduleName": "Inventory Management",
  "citySlug": "aberdeen",
  "cityName": "Aberdeen",
  "country": "UK",
  "title": "Inventory Management in Aberdeen",
  "desc": "Inventory Management ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  "intro": "Inspection equipment is expensive, mobile, and tightly regulated. A UT thickness gauge, an Olympus OmniScan, a radiography crawler, or a digital pressure calibrator can each cost $10,000–$80,000.\n\nFor inspection teams operating in Aberdeen, UK, the inventory management module is configured against local realities: UK offshore oil & gas capital. 50 years of North Sea ops. Offshore wind growth. Decommissioning hub. Pre-built templates support operator-specific quality clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies UK, and regulatory frameworks under HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Aberdeen inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Asset register with serial numbers, purchase dates, warranty, and depreciation schedule",
    "Barcode / QR code generation and label printing for fast physical tagging",
    "Mobile check-out / check-in with technician + job + project assignment",
    "Geofenced 'asset at site X' status with last-seen GPS coordinate",
    "Calibration certificate attachment per asset with auto-expiry alerts (90/60/30 day)",
    "Consumables tracking: couplant, penetrant, developer, radiography film, magnetic ink",
    "Tailored for Aberdeen workflow — pre-configured operator templates for Harbour Energy, BP North Sea, Shell UKCS",
    "Regulatory alignment with HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Aberdeen inspection contractor serving Harbour Energy and BP North Sea deploys inventory management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Aberdeen EPC quality team standardizes inventory management across 4 simultaneous project sites in the UK market. Daily reports, audit packages, and customer-format reports flow to Shell UKCS portals automatically.",
    "A growing Aberdeen-based service provider integrates inventory management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by TotalEnergies UK — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Aberdeen inspection company uses inventory management to pass HSE OSDR and OEUK (Offshore Energies UK) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Harbour Energy",
    "BP North Sea",
    "Shell UKCS",
    "TotalEnergies UK",
    "NEO Energy",
    "Apache North Sea",
    "Repsol Sinopec UK"
  ],
  "cityRegulators": [
    "HSE OSDR",
    "OEUK (Offshore Energies UK)",
    "NSTA (former OGA)",
    "PSSR 2000 written scheme",
    "LOLER"
  ],
  "cityPain": [
    "Inventory Management tracked in spreadsheets — always 2 months behind Aberdeen operator-portal requirements",
    "HSE OSDR audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Harbour Energy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for BP North Sea, Shell UKCS, TotalEnergies UK require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inventory management module configured for Aberdeen operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies UK, NEO Energy. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HSE OSDR and other UK regulators?",
      "Yes. HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA), PSSR 2000 written scheme requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Aberdeen?",
      "Platform supports English (primary), and where relevant for UK: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 57.1497,
  "lng": -2.0943
};
export default function ErpMC_inventory_management_aberdeen() { return <ErpModuleCityPage {...data} />; }
