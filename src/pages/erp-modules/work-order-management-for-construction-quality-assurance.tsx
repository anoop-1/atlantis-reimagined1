import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "industrySlug": "construction-quality-assurance",
  "industryName": "Construction Quality Assurance",
  "title": "Work Order & Job Management for Construction Quality Assurance",
  "desc": "Work Order & Job Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor construction quality assurance, the work order & job management module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder), ASTM E329 / E1155 (concrete floor flatness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — EPC, Fluor — EPC, Jacobs — engineering, WSP — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for construction quality assurance — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — EPC, Fluor — EPC, Jacobs — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person construction quality assurance runs work order & job management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational construction quality assurance deploys work order & job management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing construction quality assurance integrates work order & job management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven construction quality assurance uses work order & job management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AWS D1.1 / D1.5 (welding)",
    "ACI 318 / 301 (concrete)",
    "ASTM D698 / D1557 (soil compaction)",
    "ASTM C39 / C31 (concrete cylinder)",
    "ASTM E329 / E1155 (concrete floor flatness)",
    "AS 3600 (concrete — Australia)",
    "EN 1090 (steel — EU)",
    "ISO 17636 (RT for welds)"
  ],
  "industryOperators": [
    "Bechtel — EPC",
    "Fluor — EPC",
    "Jacobs — engineering",
    "WSP — engineering",
    "AECOM — civil / defense",
    "Skanska — construction",
    "Lendlease — construction",
    "VINCI — construction"
  ],
  "industryPain": [
    "ITP execution tracked on paper — mid-project audit findings of missed hold points",
    "Concrete cylinder break data in lab notebooks — month-end reconciliation chaos",
    "FAT / SAT execution scattered across email — handover punch list missed",
    "Multi-discipline NCRs tracked separately — root cause patterns invisible"
  ],
  "faqs": [
    [
      "Does work order & job management work specifically for construction quality assurance?",
      "Yes. The module is configured for construction quality assurance workflow with pre-built templates aligned to AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder). Operator-specific quality clauses for Bechtel — EPC, Fluor — EPC, Jacobs — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing construction quality assurance tools?",
      "Standard integration via REST API with major construction quality assurance systems. Atlantis NDT ERP can run as the system of record for work order & job management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small construction quality assurance to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person construction quality assurance pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_work_order_management_for_construction_quality_assurance() { return <ErpModuleIndustryPage {...data} />; }
