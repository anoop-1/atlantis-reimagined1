import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "citySlug": "aberdeen",
  "cityName": "Aberdeen",
  "country": "UK",
  "title": "Project Management & Turnaround Support in Aberdeen",
  "desc": "Project Management & Turnaround Support ERP module for inspection companies in Aberdeen, UK. Pre-configured for Harbour Energy, BP North Sea and aligned with HSE OSDR, OEUK (Offshore Energies UK). Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor inspection teams operating in Aberdeen, UK, the project management & turnaround support module is configured against local realities: UK offshore oil & gas capital. 50 years of North Sea ops. Offshore wind growth. Decommissioning hub. Pre-built templates support operator-specific quality clauses from Harbour Energy, BP North Sea, Shell UKCS, TotalEnergies UK, and regulatory frameworks under HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Aberdeen inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for Aberdeen workflow — pre-configured operator templates for Harbour Energy, BP North Sea, Shell UKCS",
    "Regulatory alignment with HSE OSDR, OEUK (Offshore Energies UK), NSTA (former OGA) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Aberdeen inspection contractor serving Harbour Energy and BP North Sea deploys project management & turnaround support as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Aberdeen EPC quality team standardizes project management & turnaround support across 4 simultaneous project sites in the UK market. Daily reports, audit packages, and customer-format reports flow to Shell UKCS portals automatically.",
    "A growing Aberdeen-based service provider integrates project management & turnaround support with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by TotalEnergies UK — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Aberdeen inspection company uses project management & turnaround support to pass HSE OSDR and OEUK (Offshore Energies UK) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Project Management & Turnaround Support tracked in spreadsheets — always 2 months behind Aberdeen operator-portal requirements",
    "HSE OSDR audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Harbour Energy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for BP North Sea, Shell UKCS, TotalEnergies UK require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the project management & turnaround support module configured for Aberdeen operators?",
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
      "How does the system handle hold points and notification of customer / engineer?",
      "Hold points are defined per work order with hold type (W = witness, H = hold, R = review). When the work approaches a hold point the field app prompts the technician to issue a notification 24–48 hours in advance per the project's notification matrix. The customer / engineer confirms attendance; if waived, the witness/hold is automatically released with rationale logged."
    ],
    [
      "Can it integrate with Primavera P6 or Microsoft Project for schedule?",
      "Yes. The project schedule can be authored in Primavera P6 or MS Project and imported via XML / XER. Inspection activities are mapped to schedule activities; progress flows back from inspection completion data to the schedule. Bi-directional integration keeps the inspection plan and the project schedule aligned at all times."
    ]
  ],
  "lat": 57.1497,
  "lng": -2.0943
};
export default function ErpMC_project_management_aberdeen() { return <ErpModuleCityPage {...data} />; }
