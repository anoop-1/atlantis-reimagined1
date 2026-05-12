import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "citySlug": "london",
  "cityName": "London",
  "country": "UK",
  "title": "Project Management & Turnaround Support in London",
  "desc": "Project Management & Turnaround Support ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor inspection teams operating in London, UK, the project management & turnaround support module is configured against local realities: HQ city for IOCs. Diverse client base — UKCS, nuclear, aerospace, manufacturing. BINDT, TWI based. Pre-built templates support operator-specific quality clauses from BP HQ, Shell HQ, TotalEnergies UK, EDF Energy nuclear, and regulatory frameworks under HSE, ONR (Office Nuclear Regulation), BINDT are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person London inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for London workflow — pre-configured operator templates for BP HQ, Shell HQ, TotalEnergies UK",
    "Regulatory alignment with HSE, ONR (Office Nuclear Regulation), BINDT — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size London inspection contractor serving BP HQ and Shell HQ deploys project management & turnaround support as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A London EPC quality team standardizes project management & turnaround support across 4 simultaneous project sites in the UK market. Daily reports, audit packages, and customer-format reports flow to TotalEnergies UK portals automatically.",
    "A growing London-based service provider integrates project management & turnaround support with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by EDF Energy nuclear — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven London inspection company uses project management & turnaround support to pass HSE and ONR (Office Nuclear Regulation) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BP HQ",
    "Shell HQ",
    "TotalEnergies UK",
    "EDF Energy nuclear",
    "National Grid",
    "Rolls-Royce",
    "BAE Systems"
  ],
  "cityRegulators": [
    "HSE",
    "ONR (Office Nuclear Regulation)",
    "BINDT",
    "EASA via UK CAA",
    "Environment Agency"
  ],
  "cityPain": [
    "Project Management & Turnaround Support tracked in spreadsheets — always 2 months behind London operator-portal requirements",
    "HSE audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BP HQ updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell HQ, TotalEnergies UK, EDF Energy nuclear require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the project management & turnaround support module configured for London operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BP HQ, Shell HQ, TotalEnergies UK, EDF Energy nuclear, National Grid. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HSE and other UK regulators?",
      "Yes. HSE, ONR (Office Nuclear Regulation), BINDT, EASA via UK CAA requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for London?",
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
  "lat": 51.5074,
  "lng": -0.1278
};
export default function ErpMC_project_management_london() { return <ErpModuleCityPage {...data} />; }
