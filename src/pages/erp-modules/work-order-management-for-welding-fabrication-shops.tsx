import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "industrySlug": "welding-fabrication-shops",
  "industryName": "Welding & Fabrication Shops",
  "title": "Work Order & Job Management for Welding & Fabrication Shops",
  "desc": "Work Order & Job Management for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor welding & fabrication shops, the work order & job management module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3, API 1104. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea, McDermott — offshore so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for welding & fabrication shops — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person welding & fabrication shop runs work order & job management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational welding & fabrication shops deploys work order & job management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing welding & fabrication shop integrates work order & job management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven welding & fabrication shops uses work order & job management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does work order & job management work specifically for welding & fabrication shops?",
      "Yes. The module is configured for welding & fabrication shops workflow with pre-built templates aligned to AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3. Operator-specific quality clauses for Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing welding & fabrication shops tools?",
      "Standard integration via REST API with major welding & fabrication shops systems. Atlantis NDT ERP can run as the system of record for work order & job management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small welding & fabrication shops to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person welding & fabrication shop pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How does the system handle scope creep and variation orders mid-job?",
      "When a technician encounters out-of-scope work in the field they create a variation request from the mobile app — describing scope, estimated hours, and rate. The project manager reviews and forwards to the customer; the customer e-signs in the portal; only then is the work logged as billable. This eliminates the after-the-fact 'we forgot to charge for this' loss."
    ],
    [
      "Can the field app work offline at remote / offshore worksites?",
      "Yes. Field data entry, photo capture, signature collection, and supervisor sign-off all work offline. The app caches up to 30 days of work-order data locally. When connectivity is restored data syncs automatically with conflict detection and resolution. Suitable for offshore platforms, desert sites, remote pipelines, marine vessels."
    ]
  ]
};
export default function ErpCross_work_order_management_for_welding_fabrication_shops() { return <ErpModuleIndustryPage {...data} />; }
