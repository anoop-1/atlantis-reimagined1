import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "citySlug": "hyderabad",
  "cityName": "Hyderabad",
  "country": "India",
  "title": "Project Management & Turnaround Support in Hyderabad",
  "desc": "Project Management & Turnaround Support ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor inspection teams operating in Hyderabad, India, the project management & turnaround support module is configured against local realities: South India industrial hub. BHEL heavy engineering. ISRO suppliers. Pharma + aerospace manufacturing. Pre-built templates support operator-specific quality clauses from BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense, and regulatory frameworks under PESO, BARC nuclear, DGCA aerospace are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Hyderabad inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for Hyderabad workflow — pre-configured operator templates for BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers",
    "Regulatory alignment with PESO, BARC nuclear, DGCA aerospace — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Hyderabad inspection contractor serving BHEL boilers/turbines and HPCL Visakh refinery (adjacent) deploys project management & turnaround support as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Hyderabad EPC quality team standardizes project management & turnaround support across 4 simultaneous project sites in the India market. Daily reports, audit packages, and customer-format reports flow to ISRO satellite suppliers portals automatically.",
    "A growing Hyderabad-based service provider integrates project management & turnaround support with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by BDL defense — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Hyderabad inspection company uses project management & turnaround support to pass PESO and BARC nuclear audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BHEL boilers/turbines",
    "HPCL Visakh refinery (adjacent)",
    "ISRO satellite suppliers",
    "BDL defense",
    "ECIL",
    "Dr Reddy's Labs",
    "Bharat Forge"
  ],
  "cityRegulators": [
    "PESO",
    "BARC nuclear",
    "DGCA aerospace",
    "AERB radiation safety",
    "Telangana Pollution Control Board"
  ],
  "cityPain": [
    "Project Management & Turnaround Support tracked in spreadsheets — always 2 months behind Hyderabad operator-portal requirements",
    "PESO audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BHEL boilers/turbines updates monthly — internal procedures lag by weeks",
    "Customer-format reports for HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the project management & turnaround support module configured for Hyderabad operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense, ECIL. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with PESO and other India regulators?",
      "Yes. PESO, BARC nuclear, DGCA aerospace, AERB radiation safety requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Hyderabad?",
      "Platform supports English (primary), and where relevant for India: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 17.385,
  "lng": 78.4867
};
export default function ErpMC_project_management_hyderabad() { return <ErpModuleCityPage {...data} />; }
