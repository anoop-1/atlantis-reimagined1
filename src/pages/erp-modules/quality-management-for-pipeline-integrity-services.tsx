import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "pipeline-integrity-services",
  "industryName": "Pipeline Integrity & ILI Services",
  "title": "Quality Management & NCR for Pipeline Integrity & ILI Services",
  "desc": "Quality Management & NCR for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor pipeline integrity & ili services, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding), DOT PHMSA 49 CFR 192 / 195. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products, Energy Transfer — gathering / transmission so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for pipeline integrity & ili services — pre-configured templates, terminology, and reports",
    "Integrates with Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person pipeline integrity & ili service runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational pipeline integrity & ili services deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing pipeline integrity & ili service integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven pipeline integrity & ili services uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API 1163 (ILI qualification)",
    "API 1160 (pipeline IMP)",
    "ASME B31.4 / B31.8 / B31.8S (pipeline)",
    "API 1104 (welding)",
    "DOT PHMSA 49 CFR 192 / 195",
    "CSA Z662 (Canadian pipeline)",
    "EN ISO 15589-1 (CP)",
    "NACE SP0102 (ILI)"
  ],
  "industryOperators": [
    "Enbridge — North American pipelines",
    "TC Energy / TransCanada",
    "Kinder Morgan — products",
    "Energy Transfer — gathering / transmission",
    "Williams — gas transmission",
    "Shell Midstream",
    "DCP Midstream",
    "Plains All American"
  ],
  "industryPain": [
    "ILI vendor data delivered as proprietary formats — months to integrate with GIS / asset register",
    "API 1163 vendor qualification audit prep — 80+ hours of evidence assembly",
    "Dig verification data captured on paper in field — re-entered into spreadsheets",
    "API 1160 IMP threat assessment in Excel — versioning chaos, audit findings"
  ],
  "faqs": [
    [
      "Does quality management & ncr work specifically for pipeline integrity & ili services?",
      "Yes. The module is configured for pipeline integrity & ili services workflow with pre-built templates aligned to API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding). Operator-specific quality clauses for Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing pipeline integrity & ili services tools?",
      "Standard integration via REST API with major pipeline integrity & ili services systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small pipeline integrity & ili services to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person pipeline integrity & ili service pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How is the NCR → CAPA workflow structured?",
      "An NCR is opened on discovery (audit finding, customer complaint, internal observation, recurring issue). The workflow forces containment first (stop the bleeding), then investigation (root cause), then corrective action (fix this occurrence), then preventive action (stop it happening elsewhere). Effectiveness review 60–180 days later verifies the fix held. Each stage has a responsible owner, target date, and approval signature."
    ],
    [
      "Does it support AS9100D customer-specific quality clauses?",
      "Yes. AS9100D §4.4 requires that customer-specific quality clauses (e.g., Boeing D6-82479, Airbus PSPs, Pratt & Whitney ASQR-01) are flow-down to internal processes. The system maintains a customer-clause register with cross-reference to internal procedures, training records, and audit evidence."
    ]
  ]
};
export default function ErpCross_quality_management_for_pipeline_integrity_services() { return <ErpModuleIndustryPage {...data} />; }
