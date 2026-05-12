import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "citySlug": "abu-dhabi",
  "cityName": "Abu Dhabi",
  "country": "UAE",
  "title": "Project Management & Turnaround Support in Abu Dhabi",
  "desc": "Project Management & Turnaround Support ERP module for inspection companies in Abu Dhabi, UAE. Pre-configured for ADNOC Onshore, ADNOC LNG and aligned with ADNOC HSE, ADQCC. Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor inspection teams operating in Abu Dhabi, UAE, the project management & turnaround support module is configured against local realities: ADNOC controls 94% of UAE reserves. Ruwais industrial complex. Sour gas processing. Pre-built templates support operator-specific quality clauses from ADNOC Onshore, ADNOC LNG, Borouge polyethylene, Fertil ammonia/urea, and regulatory frameworks under ADNOC HSE, ADQCC, Federal NCEMA are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Abu Dhabi inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for Abu Dhabi workflow — pre-configured operator templates for ADNOC Onshore, ADNOC LNG, Borouge polyethylene",
    "Regulatory alignment with ADNOC HSE, ADQCC, Federal NCEMA — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Abu Dhabi inspection contractor serving ADNOC Onshore and ADNOC LNG deploys project management & turnaround support as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Abu Dhabi EPC quality team standardizes project management & turnaround support across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to Borouge polyethylene portals automatically.",
    "A growing Abu Dhabi-based service provider integrates project management & turnaround support with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Fertil ammonia/urea — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Abu Dhabi inspection company uses project management & turnaround support to pass ADNOC HSE and ADQCC audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ADNOC Onshore",
    "ADNOC LNG",
    "Borouge polyethylene",
    "Fertil ammonia/urea",
    "TAQA power & water",
    "ADNOC Refining Ruwais",
    "ZADCO offshore",
    "ADMA-OPCO"
  ],
  "cityRegulators": [
    "ADNOC HSE",
    "ADQCC",
    "Federal NCEMA",
    "EAD environment"
  ],
  "cityPain": [
    "Project Management & Turnaround Support tracked in spreadsheets — always 2 months behind Abu Dhabi operator-portal requirements",
    "ADNOC HSE audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ADNOC Onshore updates monthly — internal procedures lag by weeks",
    "Customer-format reports for ADNOC LNG, Borouge polyethylene, Fertil ammonia/urea require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the project management & turnaround support module configured for Abu Dhabi operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ADNOC Onshore, ADNOC LNG, Borouge polyethylene, Fertil ammonia/urea, TAQA power & water. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ADNOC HSE and other UAE regulators?",
      "Yes. ADNOC HSE, ADQCC, Federal NCEMA, EAD environment requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Abu Dhabi?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 24.453884,
  "lng": 54.3773438
};
export default function ErpMC_project_management_abu_dhabi() { return <ErpModuleCityPage {...data} />; }
