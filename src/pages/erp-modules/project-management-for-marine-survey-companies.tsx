import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "industrySlug": "marine-survey-companies",
  "industryName": "Marine Survey & Offshore Inspection",
  "title": "Project Management & Turnaround Support for Marine Survey & Offshore Inspection",
  "desc": "Project Management & Turnaround Support for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor marine survey & offshore inspection, the project management & turnaround support module is configured around the codes, regulators, and operator-specific requirements you face every day: IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM), IMCA C-002 (diving inspection). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations, Equinor — Norwegian shelf so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for marine survey & offshore inspection — pre-configured templates, terminology, and reports",
    "Integrates with Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person marine survey & offshore inspection runs project management & turnaround support as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational marine survey & offshore inspection deploys project management & turnaround support across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing marine survey & offshore inspection integrates project management & turnaround support with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven marine survey & offshore inspection uses project management & turnaround support to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "IMO MARPOL / SOLAS / STCW",
    "IACS UR / common rules",
    "DNV / ABS / LR / BV / ClassNK / RINA / KR class rules",
    "IMCA D-018 IRM (offshore IRM)",
    "IMCA C-002 (diving inspection)",
    "API RP 2A (offshore platforms)",
    "API RP 17B (subsea)",
    "ISO 19901-9 (offshore reliability)"
  ],
  "industryOperators": [
    "Shell — upstream / marine",
    "BP — marine",
    "TotalEnergies — FPSO operations",
    "Equinor — Norwegian shelf",
    "MODEC — FPSO operator",
    "SBM Offshore — FPSO",
    "Yinson — FPSO",
    "Bumi Armada — FPSO"
  ],
  "industryPain": [
    "IACS class-society reporting in Word / Excel — manual reformatting per society",
    "ROV inspection footage management — terabytes of video without indexing",
    "IMCA D-018 inspection-record format compliance — paper records in field",
    "FPSO surveyor team rotation — qualifications expire mid-tour"
  ],
  "faqs": [
    [
      "Does project management & turnaround support work specifically for marine survey & offshore inspection?",
      "Yes. The module is configured for marine survey & offshore inspection workflow with pre-built templates aligned to IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM). Operator-specific quality clauses for Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing marine survey & offshore inspection tools?",
      "Standard integration via REST API with major marine survey & offshore inspection systems. Atlantis NDT ERP can run as the system of record for project management & turnaround support while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small marine survey & offshore inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person marine survey & offshore inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_project_management_for_marine_survey_companies() { return <ErpModuleIndustryPage {...data} />; }
