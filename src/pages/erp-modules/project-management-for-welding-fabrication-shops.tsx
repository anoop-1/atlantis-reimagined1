import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "industrySlug": "welding-fabrication-shops",
  "industryName": "Welding & Fabrication Shops",
  "title": "Project Management & Turnaround Support for Welding & Fabrication Shops",
  "desc": "Project Management & Turnaround Support for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor welding & fabrication shops, the project management & turnaround support module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3, API 1104. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea, McDermott — offshore so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for welding & fabrication shops — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person welding & fabrication shop runs project management & turnaround support as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational welding & fabrication shops deploys project management & turnaround support across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing welding & fabrication shop integrates project management & turnaround support with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven welding & fabrication shops uses project management & turnaround support to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AWS D1.1 / D1.5 / D1.6 / D14",
    "ASME Section IX",
    "ASME Section VIII Division 1",
    "ASME B31.1 / B31.3",
    "API 1104",
    "EN ISO 15614 / 9606 / 14732",
    "AS/NZS 3992",
    "ASME 'U' / 'S' / 'PP' / 'R' / 'NR' stamps"
  ],
  "industryOperators": [
    "Bechtel — civil / structural",
    "Fluor — EPC",
    "TechnipFMC — subsea",
    "McDermott — offshore",
    "Saipem — offshore / pipeline",
    "MMR Group — power generation",
    "Wood / Worley — refinery",
    "AECOM — defense / civil"
  ],
  "industryPain": [
    "WPS / PQR library in shared drive — outdated revisions used in field",
    "Welder continuity logged on paper — qualification expires mid-job, work rejected",
    "Weld map maintained in CAD — not linked to inspection or NDE results",
    "ASME 'U' stamp joint-review evidence assembled manually before each audit — 80 hours of work"
  ],
  "faqs": [
    [
      "Does project management & turnaround support work specifically for welding & fabrication shops?",
      "Yes. The module is configured for welding & fabrication shops workflow with pre-built templates aligned to AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3. Operator-specific quality clauses for Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing welding & fabrication shops tools?",
      "Standard integration via REST API with major welding & fabrication shops systems. Atlantis NDT ERP can run as the system of record for project management & turnaround support while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small welding & fabrication shops to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person welding & fabrication shop pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How does the system handle hold points and notification of customer / engineer?",
      "Hold points are defined per work order with hold type (W = witness, H = hold, R = review). When the work approaches a hold point the field app prompts the technician to issue a notification 24–48 hours in advance per the project's notification matrix. The customer / engineer confirms attendance; if waived, the witness/hold is automatically released with rationale logged."
    ],
    [
      "Can it integrate with Primavera P6 or Microsoft Project for schedule?",
      "Yes. The project schedule can be authored in Primavera P6 or MS Project and imported via XML / XER. Inspection activities are mapped to schedule activities; progress flows back from inspection completion data to the schedule. Bi-directional integration keeps the inspection plan and the project schedule aligned at all times."
    ]
  ]
};
export default function ErpCross_project_management_for_welding_fabrication_shops() { return <ErpModuleIndustryPage {...data} />; }
