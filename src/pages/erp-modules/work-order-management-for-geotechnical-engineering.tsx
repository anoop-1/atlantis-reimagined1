import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "work-order-management",
  "moduleName": "Work Order & Job Management",
  "industrySlug": "geotechnical-engineering",
  "industryName": "Geotechnical Engineering Firms",
  "title": "Work Order & Job Management for Geotechnical Engineering Firms",
  "desc": "Work Order & Job Management for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  "intro": "An inspection company is a project-based business. Each job has a unique scope, a unique customer specification, a unique team, a unique timeline, and a unique compliance footprint.\n\nFor geotechnical engineering firms, the work order & job management module is configured around the codes, regulators, and operator-specific requirements you face every day: ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture), ASTM D4318 (Atterberg limits), ASTM D2435 (consolidation). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Arup — engineering, Mott MacDonald — engineering, WSP — engineering, Atkins — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Quote → Work Order → Project hierarchy with parent-child relationships",
    "Customer / contract / project / job / work order / line item — fully drilled-down billing structure",
    "Resource assignment: technicians, equipment, vehicles, sub-contractors, accommodation",
    "Per-line scope capture: method, asset, code, acceptance criteria, sample size, deliverable",
    "Field-app job execution: clock-in, GPS check-in, photo capture, data entry, supervisor sign-off",
    "Time, mileage, expense, per-diem capture with client billable / internal cost flags",
    "Tailored for geotechnical engineering firms — pre-configured templates, terminology, and reports",
    "Integrates with Arup — engineering, Mott MacDonald — engineering, WSP — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person geotechnical engineering firm runs work order & job management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational geotechnical engineering firms deploys work order & job management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing geotechnical engineering firm integrates work order & job management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven geotechnical engineering firms uses work order & job management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ASTM D420 series (soil sampling)",
    "ASTM D2487 (USCS classification)",
    "ASTM D2216 (moisture)",
    "ASTM D4318 (Atterberg limits)",
    "ASTM D2435 (consolidation)",
    "ASTM D3080 (direct shear)",
    "EN ISO 14688 / 14689 (soil / rock classification)",
    "EN ISO 22282 (geotechnical investigation)"
  ],
  "industryOperators": [
    "Arup — engineering",
    "Mott MacDonald — engineering",
    "WSP — engineering",
    "Atkins — engineering",
    "AECOM — civil",
    "Fugro — geotechnical",
    "Geosyntec — geotechnical",
    "Stantec — engineering"
  ],
  "industryPain": [
    "Borehole logs in Word / Excel — re-typed multiple times across project",
    "CPT raw data files in vendor formats — manual conversion to AGS format",
    "Lab test results in paper notebooks — re-entered into project database",
    "Site investigation campaign coordination across drillers, lab, engineers — informal"
  ],
  "faqs": [
    [
      "Does work order & job management work specifically for geotechnical engineering firms?",
      "Yes. The module is configured for geotechnical engineering firms workflow with pre-built templates aligned to ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture), ASTM D4318 (Atterberg limits). Operator-specific quality clauses for Arup — engineering, Mott MacDonald — engineering, WSP — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing geotechnical engineering firms tools?",
      "Standard integration via REST API with major geotechnical engineering firms systems. Atlantis NDT ERP can run as the system of record for work order & job management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small geotechnical engineering firms to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person geotechnical engineering firm pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_work_order_management_for_geotechnical_engineering() { return <ErpModuleIndustryPage {...data} />; }
