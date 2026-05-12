import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "document-control",
  "moduleName": "Document Control & QMS",
  "industrySlug": "pipeline-integrity-services",
  "industryName": "Pipeline Integrity & ILI Services",
  "title": "Document Control & QMS for Pipeline Integrity & ILI Services",
  "desc": "Document Control & QMS for Pipeline Integrity & ILI Services — purpose-configured module from Atlantis NDT ERP. API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails.\n\nFor pipeline integrity & ili services, the document control & qms module is configured around the codes, regulators, and operator-specific requirements you face every day: API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding), DOT PHMSA 49 CFR 192 / 195. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products, Energy Transfer — gathering / transmission so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "Tailored for pipeline integrity & ili services — pre-configured templates, terminology, and reports",
    "Integrates with Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person pipeline integrity & ili service runs document control & qms as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational pipeline integrity & ili services deploys document control & qms across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing pipeline integrity & ili service integrates document control & qms with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven pipeline integrity & ili services uses document control & qms to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does document control & qms work specifically for pipeline integrity & ili services?",
      "Yes. The module is configured for pipeline integrity & ili services workflow with pre-built templates aligned to API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding). Operator-specific quality clauses for Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing pipeline integrity & ili services tools?",
      "Standard integration via REST API with major pipeline integrity & ili services systems. Atlantis NDT ERP can run as the system of record for document control & qms while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small pipeline integrity & ili services to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person pipeline integrity & ili service pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How is revision control handled — can people accidentally use an obsolete document?",
      "Each document has only one current revision visible by default. Obsolete revisions are retained in the audit history but marked clearly with an obsolete watermark. Users cannot download or print obsolete revisions without explicit override (logged). The system enforces 'current revision only' on all distribution and training workflows."
    ],
    [
      "Does it support 21 CFR Part 11 electronic signatures for FDA / EMA regulated industries?",
      "Yes. Optional 21 CFR Part 11 mode enforces user authentication for every electronic signature event, captures meaning-of-signature, prevents repudiation, and produces a tamper-evident audit trail with secure time-stamping. The validation package includes IQ / OQ / PQ documentation for FDA, EMA, and ANVISA inspection."
    ]
  ]
};
export default function ErpCross_document_control_for_pipeline_integrity_services() { return <ErpModuleIndustryPage {...data} />; }
