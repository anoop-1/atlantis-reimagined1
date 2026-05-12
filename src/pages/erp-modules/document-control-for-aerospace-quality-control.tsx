import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "document-control",
  "moduleName": "Document Control & QMS",
  "industrySlug": "aerospace-quality-control",
  "industryName": "Aerospace Quality Control",
  "title": "Document Control & QMS for Aerospace Quality Control",
  "desc": "Document Control & QMS for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails.\n\nFor aerospace quality control, the document control & qms module is configured around the codes, regulators, and operator-specific requirements you face every day: AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M, DGCA CAR Section 2 / Series E. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation, Embraer — regional jet so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "Tailored for aerospace quality control — pre-configured templates, terminology, and reports",
    "Integrates with Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person aerospace quality control runs document control & qms as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational aerospace quality control deploys document control & qms across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing aerospace quality control integrates document control & qms with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven aerospace quality control uses document control & qms to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does document control & qms work specifically for aerospace quality control?",
      "Yes. The module is configured for aerospace quality control workflow with pre-built templates aligned to AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M. Operator-specific quality clauses for Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing aerospace quality control tools?",
      "Standard integration via REST API with major aerospace quality control systems. Atlantis NDT ERP can run as the system of record for document control & qms while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small aerospace quality control to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person aerospace quality control pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_document_control_for_aerospace_quality_control() { return <ErpModuleIndustryPage {...data} />; }
