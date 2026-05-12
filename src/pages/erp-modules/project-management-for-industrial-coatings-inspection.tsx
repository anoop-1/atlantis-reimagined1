import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "project-management",
  "moduleName": "Project Management & Turnaround Support",
  "industrySlug": "industrial-coatings-inspection",
  "industryName": "Industrial Coatings Inspection",
  "title": "Project Management & Turnaround Support for Industrial Coatings Inspection",
  "desc": "Project Management & Turnaround Support for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  "intro": "Inspection on a major project is project management at industrial scale: 200 inspectors across 5 work fronts, 24-hour operation, holds at 12 critical inspection points, daily delivery of inspection reports to the EPC contractor, and a 90-day window before commissioning. Spreadsheets and email simply cannot manage this.\n\nFor industrial coatings inspection, the project management & turnaround support module is configured around the codes, regulators, and operator-specific requirements you face every day: NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection), ISO 8501 (visual cleanliness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr), PPG (paint mfr) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Project / sub-project hierarchy with parent project for major turnaround campaigns",
    "WBS (work breakdown structure) per project with budget, schedule, resource forecast",
    "Resource leveling across simultaneous work fronts (UT crew, RT crew, PT crew, supervision)",
    "Shift scheduling for 24/7 operations with handover documentation",
    "Hold-point management: customer / regulatory / engineering hold definitions and notification workflow",
    "Daily progress report (DPR) with inspection counts, holds, photo summary, blockers, manpower",
    "Tailored for industrial coatings inspection — pre-configured templates, terminology, and reports",
    "Integrates with Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person industrial coatings inspection runs project management & turnaround support as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational industrial coatings inspection deploys project management & turnaround support across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing industrial coatings inspection integrates project management & turnaround support with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven industrial coatings inspection uses project management & turnaround support to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "NACE / AMPP CIP Level I / II / III",
    "SSPC PA 2 (DFT measurement)",
    "SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep)",
    "ISO 12944 (corrosion protection)",
    "ISO 8501 (visual cleanliness)",
    "ISO 8502 (surface contamination)",
    "ISO 19840 (DFT measurement)",
    "ASTM D4541 (pull-off adhesion)"
  ],
  "industryOperators": [
    "Hempel (paint mfr)",
    "Jotun (paint mfr)",
    "AkzoNobel International (paint mfr)",
    "PPG (paint mfr)",
    "Sherwin-Williams Protective & Marine (paint mfr)",
    "Shell coatings spec",
    "BP coatings spec",
    "ADNOC coatings spec"
  ],
  "industryPain": [
    "DFT readings on paper, re-entered into Excel — transcription errors",
    "Hold-point notification to client / engineer informal — clients miss critical holds",
    "Inspector qualifications expire mid-project — NACE Level II cert lapses, work rejected",
    "Coating-system data sheets scattered across project email — wrong system applied"
  ],
  "faqs": [
    [
      "Does project management & turnaround support work specifically for industrial coatings inspection?",
      "Yes. The module is configured for industrial coatings inspection workflow with pre-built templates aligned to NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection). Operator-specific quality clauses for Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing industrial coatings inspection tools?",
      "Standard integration via REST API with major industrial coatings inspection systems. Atlantis NDT ERP can run as the system of record for project management & turnaround support while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small industrial coatings inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person industrial coatings inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_project_management_for_industrial_coatings_inspection() { return <ErpModuleIndustryPage {...data} />; }
