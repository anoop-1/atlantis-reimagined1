import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "document-control",
  "moduleName": "Document Control & QMS",
  "industrySlug": "industrial-coatings-inspection",
  "industryName": "Industrial Coatings Inspection",
  "title": "Document Control & QMS for Industrial Coatings Inspection",
  "desc": "Document Control & QMS for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails.\n\nFor industrial coatings inspection, the document control & qms module is configured around the codes, regulators, and operator-specific requirements you face every day: NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection), ISO 8501 (visual cleanliness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr), PPG (paint mfr) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "Tailored for industrial coatings inspection — pre-configured templates, terminology, and reports",
    "Integrates with Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person industrial coatings inspection runs document control & qms as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational industrial coatings inspection deploys document control & qms across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing industrial coatings inspection integrates document control & qms with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven industrial coatings inspection uses document control & qms to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does document control & qms work specifically for industrial coatings inspection?",
      "Yes. The module is configured for industrial coatings inspection workflow with pre-built templates aligned to NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection). Operator-specific quality clauses for Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing industrial coatings inspection tools?",
      "Standard integration via REST API with major industrial coatings inspection systems. Atlantis NDT ERP can run as the system of record for document control & qms while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small industrial coatings inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person industrial coatings inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_document_control_for_industrial_coatings_inspection() { return <ErpModuleIndustryPage {...data} />; }
