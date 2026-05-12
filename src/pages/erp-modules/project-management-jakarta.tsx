import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "citySlug": "jakarta",
  "cityName": "Jakarta",
  "country": "Indonesia",
  "title": "Project Management & Turnaround Support in Jakarta",
  "desc": "Project Management & Turnaround Support ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor inspection teams operating in Jakarta, Indonesia, the project management & turnaround support module is configured against local realities: Pertamina HQ. Indonesian state energy. LNG Bontang/Tangguh. Petrochemical Tuban/Cilegon. Pre-built templates support operator-specific quality clauses from Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia, Bontang LNG, Tangguh LNG, and regulatory frameworks under SKK Migas, K3 Migas (HSE), BKPM investment board are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Jakarta inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for Jakarta workflow — pre-configured operator templates for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia, Bontang LNG",
    "Regulatory alignment with SKK Migas, K3 Migas (HSE), BKPM investment board — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Jakarta inspection contractor serving Pertamina (Cilacap, Balikpapan, Dumai refineries) and Pupuk Indonesia deploys project management & turnaround support as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Jakarta EPC quality team standardizes project management & turnaround support across 4 simultaneous project sites in the Indonesia market. Daily reports, audit packages, and customer-format reports flow to Bontang LNG portals automatically.",
    "A growing Jakarta-based service provider integrates project management & turnaround support with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Tangguh LNG — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Jakarta inspection company uses project management & turnaround support to pass SKK Migas and K3 Migas (HSE) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Pertamina (Cilacap, Balikpapan, Dumai refineries)",
    "Pupuk Indonesia",
    "Bontang LNG",
    "Tangguh LNG",
    "Krakatau Steel",
    "Petrokimia Gresik",
    "Tripatra EPC"
  ],
  "cityRegulators": [
    "SKK Migas",
    "K3 Migas (HSE)",
    "BKPM investment board",
    "BPOM (drug/food regulator for QC labs)"
  ],
  "cityPain": [
    "Project Management & Turnaround Support tracked in spreadsheets — always 2 months behind Jakarta operator-portal requirements",
    "SKK Migas audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Pertamina (Cilacap, Balikpapan, Dumai refineries) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Pupuk Indonesia, Bontang LNG, Tangguh LNG require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the project management & turnaround support module configured for Jakarta operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia, Bontang LNG, Tangguh LNG, Krakatau Steel. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with SKK Migas and other Indonesia regulators?",
      "Yes. SKK Migas, K3 Migas (HSE), BKPM investment board, BPOM (drug/food regulator for QC labs) requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Jakarta?",
      "Platform supports English (primary), and where relevant for Indonesia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": -6.2088,
  "lng": 106.8456
};
export default function ErpMC_project_management_jakarta() { return <ErpModuleCityPage {...data} />; }
