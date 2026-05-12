import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "citySlug": "doha",
  "cityName": "Doha",
  "country": "Qatar",
  "title": "Project Management & Turnaround Support in Doha",
  "desc": "Project Management & Turnaround Support ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor inspection teams operating in Doha, Qatar, the project management & turnaround support module is configured against local realities: QatarEnergy LNG capital. North Field expansion. Cryogenic LNG infrastructure. Pre-built templates support operator-specific quality clauses from QatarEnergy, RasGas, Qatargas (now QatarEnergy LNG), Industries Qatar (IQ), and regulatory frameworks under QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology), Ministry of Energy Affairs are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Doha inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for Doha workflow — pre-configured operator templates for QatarEnergy, RasGas, Qatargas (now QatarEnergy LNG)",
    "Regulatory alignment with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology), Ministry of Energy Affairs — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Doha inspection contractor serving QatarEnergy and RasGas deploys project management & turnaround support as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Doha EPC quality team standardizes project management & turnaround support across 4 simultaneous project sites in the Qatar market. Daily reports, audit packages, and customer-format reports flow to Qatargas (now QatarEnergy LNG) portals automatically.",
    "A growing Doha-based service provider integrates project management & turnaround support with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Industries Qatar (IQ) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Doha inspection company uses project management & turnaround support to pass QCDD (Qatar Civil Defence) and QGOSM (Qatar General Org Standards & Metrology) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "QatarEnergy",
    "RasGas",
    "Qatargas (now QatarEnergy LNG)",
    "Industries Qatar (IQ)",
    "QChem",
    "Ras Laffan Industrial City"
  ],
  "cityRegulators": [
    "QCDD (Qatar Civil Defence)",
    "QGOSM (Qatar General Org Standards & Metrology)",
    "Ministry of Energy Affairs"
  ],
  "cityPain": [
    "Project Management & Turnaround Support tracked in spreadsheets — always 2 months behind Doha operator-portal requirements",
    "QCDD (Qatar Civil Defence) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from QatarEnergy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for RasGas, Qatargas (now QatarEnergy LNG), Industries Qatar (IQ) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the project management & turnaround support module configured for Doha operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for QatarEnergy, RasGas, Qatargas (now QatarEnergy LNG), Industries Qatar (IQ), QChem. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with QCDD (Qatar Civil Defence) and other Qatar regulators?",
      "Yes. QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology), Ministry of Energy Affairs requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Doha?",
      "Platform supports English (primary), and where relevant for Qatar: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 25.2854,
  "lng": 51.531
};
export default function ErpMC_project_management_doha() { return <ErpModuleCityPage {...data} />; }
