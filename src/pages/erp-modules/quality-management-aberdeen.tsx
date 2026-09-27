import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "citySlug": "aberdeen",
  "cityName": "Aberdeen",
  "country": "UK",
  "title": "Quality Management & NCR in Aberdeen",
  "desc": "Quality Management & NCR ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor inspection teams operating in Aberdeen, UK, the quality management & ncr module is configured against local realities: UK offshore oil & gas capital. 50 years of North Sea ops. Offshore wind growth. Decommissioning hub. Pre-built templates support operator-specific quality clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies UK, and regulatory frameworks under HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Aberdeen inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for Aberdeen workflow — pre-configured operator templates for Harbour Energy, BP North Sea, Shell UKCS",
    "Regulatory alignment with HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Aberdeen inspection contractor serving Harbour Energy and BP North Sea deploys quality management & ncr as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Aberdeen EPC quality team standardizes quality management & ncr across 4 simultaneous project sites in the UK market. Daily reports, audit packages, and customer-format reports flow to Shell UKCS portals automatically.",
    "A growing Aberdeen-based service provider integrates quality management & ncr with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by TotalEnergies UK — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Aberdeen inspection company uses quality management & ncr to pass HSE OSDR and OEUK (Offshore Energies UK) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Quality Management & NCR tracked in spreadsheets — always 2 months behind Aberdeen operator-portal requirements",
    "HSE OSDR audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Harbour Energy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for BP North Sea, Shell UKCS, TotalEnergies UK require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the quality management & ncr module configured for Aberdeen operators?",
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
      "How is the NCR → CAPA workflow structured?",
      "An NCR is opened on discovery (audit finding, customer complaint, internal observation, recurring issue). The workflow forces containment first (stop the bleeding), then investigation (root cause), then corrective action (fix this occurrence), then preventive action (stop it happening elsewhere). Effectiveness review 60–180 days later verifies the fix held. Each stage has a responsible owner, target date, and approval signature."
    ],
    [
      "Does it support AS9100D customer-specific quality clauses?",
      "Yes. AS9100D §4.4 requires that customer-specific quality clauses (e.g., Boeing D6-82479, Airbus PSPs, Pratt & Whitney ASQR-01) are flow-down to internal processes. The system maintains a customer-clause register with cross-reference to internal procedures, training records, and audit evidence."
    ]
  ],
  "lat": 57.1497,
  "lng": -2.0943
};
export default function ErpMC_quality_management_aberdeen() { return <ErpModuleCityPage {...data} />; }
