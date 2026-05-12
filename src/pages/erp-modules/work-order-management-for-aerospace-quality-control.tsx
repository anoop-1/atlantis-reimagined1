import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "industrySlug": "aerospace-quality-control",
  "industryName": "Aerospace Quality Control",
  "title": "Work Order & Job Management for Aerospace Quality Control",
  "desc": "Work Order & Job Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor aerospace quality control, the work order & job management module is configured around the codes, regulators, and operator-specific requirements you face every day: AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M, DGCA CAR Section 2 / Series E. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation, Embraer — regional jet so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for aerospace quality control — pre-configured templates, terminology, and reports",
    "Integrates with Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person aerospace quality control runs work order & job management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational aerospace quality control deploys work order & job management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing aerospace quality control integrates work order & job management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven aerospace quality control uses work order & job management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AS9100D / AS9120 / AS9110 (MRO)",
    "NAS-410 Rev 5",
    "FAA 14 CFR Part 145 / 21",
    "EASA Part 145 / Part-M",
    "DGCA CAR Section 2 / Series E",
    "DOD MIL-STD-410 / NAS-410",
    "ASTM E1417 / E1444 / E1742 / E2375 (aerospace NDT)",
    "ISO 9712 — annex on aerospace"
  ],
  "industryOperators": [
    "Boeing — commercial / defense",
    "Airbus — commercial / defense",
    "Bombardier — business aviation",
    "Embraer — regional jet",
    "Pratt & Whitney — engine OEM",
    "GE Aerospace — engine OEM",
    "Rolls-Royce — engine OEM",
    "Safran — engine / components"
  ],
  "industryPain": [
    "NAS-410 qualification matrix in Excel — version drift across departments",
    "Customer-specific quality clauses (Boeing D-590, AITM, ASQR-01) flow-down is informal — audit findings",
    "Work-order traceability per FAA 14 CFR Part 145 — manual paper trails",
    "FOD prevention program not integrated with work-order — incident risk"
  ],
  "faqs": [
    [
      "Does work order & job management work specifically for aerospace quality control?",
      "Yes. The module is configured for aerospace quality control workflow with pre-built templates aligned to AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M. Operator-specific quality clauses for Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing aerospace quality control tools?",
      "Standard integration via REST API with major aerospace quality control systems. Atlantis NDT ERP can run as the system of record for work order & job management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small aerospace quality control to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person aerospace quality control pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_work_order_management_for_aerospace_quality_control() { return <ErpModuleIndustryPage {...data} />; }
