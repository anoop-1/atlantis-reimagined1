import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "document-control",
  "moduleName": "Document Control & QMS",
  "industrySlug": "construction-quality-assurance",
  "industryName": "Construction Quality Assurance",
  "title": "Document Control & QMS for Construction Quality Assurance",
  "desc": "Document Control & QMS for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails.\n\nFor construction quality assurance, the document control & qms module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder), ASTM E329 / E1155 (concrete floor flatness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — EPC, Fluor — EPC, Jacobs — engineering, WSP — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "Tailored for construction quality assurance — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — EPC, Fluor — EPC, Jacobs — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person construction quality assurance runs document control & qms as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational construction quality assurance deploys document control & qms across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing construction quality assurance integrates document control & qms with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven construction quality assurance uses document control & qms to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does document control & qms work specifically for construction quality assurance?",
      "Yes. The module is configured for construction quality assurance workflow with pre-built templates aligned to AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder). Operator-specific quality clauses for Bechtel — EPC, Fluor — EPC, Jacobs — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing construction quality assurance tools?",
      "Standard integration via REST API with major construction quality assurance systems. Atlantis NDT ERP can run as the system of record for document control & qms while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small construction quality assurance to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person construction quality assurance pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_document_control_for_construction_quality_assurance() { return <ErpModuleIndustryPage {...data} />; }
