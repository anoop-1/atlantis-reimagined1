import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "citySlug": "singapore",
  "cityName": "Singapore",
  "country": "Singapore",
  "title": "Project Management & Turnaround Support in Singapore",
  "desc": "Project Management & Turnaround Support ERP module for inspection companies in Singapore, Singapore. Pre-configured for ExxonMobil Jurong refinery, Shell Bukom and aligned with MOM (Ministry of Manpower), NEA environment. Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor inspection teams operating in Singapore, Singapore, the project management & turnaround support module is configured against local realities: Jurong Island petrochem hub. FPSO conversion (Keppel, Sembcorp). MOM CERT compliance. Pre-built templates support operator-specific quality clauses from ExxonMobil Jurong refinery, Shell Bukom, Vopak storage, Sembcorp Marine FPSO, and regulatory frameworks under MOM (Ministry of Manpower), NEA environment, MPA marine are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Singapore inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for Singapore workflow — pre-configured operator templates for ExxonMobil Jurong refinery, Shell Bukom, Vopak storage",
    "Regulatory alignment with MOM (Ministry of Manpower), NEA environment, MPA marine — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Singapore inspection contractor serving ExxonMobil Jurong refinery and Shell Bukom deploys project management & turnaround support as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Singapore EPC quality team standardizes project management & turnaround support across 4 simultaneous project sites in the Singapore market. Daily reports, audit packages, and customer-format reports flow to Vopak storage portals automatically.",
    "A growing Singapore-based service provider integrates project management & turnaround support with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sembcorp Marine FPSO — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Singapore inspection company uses project management & turnaround support to pass MOM (Ministry of Manpower) and NEA environment audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ExxonMobil Jurong refinery",
    "Shell Bukom",
    "Vopak storage",
    "Sembcorp Marine FPSO",
    "Keppel FPSO yards",
    "MODEC Singapore HQ",
    "BASF Jurong",
    "Lanxess Jurong"
  ],
  "cityRegulators": [
    "MOM (Ministry of Manpower)",
    "NEA environment",
    "MPA marine",
    "EDB Singapore",
    "BCA Building Authority"
  ],
  "cityPain": [
    "Project Management & Turnaround Support tracked in spreadsheets — always 2 months behind Singapore operator-portal requirements",
    "MOM (Ministry of Manpower) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ExxonMobil Jurong refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell Bukom, Vopak storage, Sembcorp Marine FPSO require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the project management & turnaround support module configured for Singapore operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ExxonMobil Jurong refinery, Shell Bukom, Vopak storage, Sembcorp Marine FPSO, Keppel FPSO yards. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with MOM (Ministry of Manpower) and other Singapore regulators?",
      "Yes. MOM (Ministry of Manpower), NEA environment, MPA marine, EDB Singapore requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Singapore?",
      "Platform supports English (primary), and where relevant for Singapore: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 1.3521,
  "lng": 103.8198
};
export default function ErpMC_project_management_singapore() { return <ErpModuleCityPage {...data} />; }
