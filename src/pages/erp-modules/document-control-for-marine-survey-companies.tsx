import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "document-control",
  "moduleName": "Document Control & QMS",
  "industrySlug": "marine-survey-companies",
  "industryName": "Marine Survey & Offshore Inspection",
  "title": "Document Control & QMS for Marine Survey & Offshore Inspection",
  "desc": "Document Control & QMS for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails.\n\nFor marine survey & offshore inspection, the document control & qms module is configured around the codes, regulators, and operator-specific requirements you face every day: IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM), IMCA C-002 (diving inspection). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations, Equinor — Norwegian shelf so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "Tailored for marine survey & offshore inspection — pre-configured templates, terminology, and reports",
    "Integrates with Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person marine survey & offshore inspection runs document control & qms as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational marine survey & offshore inspection deploys document control & qms across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing marine survey & offshore inspection integrates document control & qms with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven marine survey & offshore inspection uses document control & qms to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "IMO MARPOL / SOLAS / STCW",
    "IACS UR / common rules",
    "DNV / ABS / LR / BV / ClassNK / RINA / KR class rules",
    "IMCA D-018 IRM (offshore IRM)",
    "IMCA C-002 (diving inspection)",
    "API RP 2A (offshore platforms)",
    "API RP 17B (subsea)",
    "ISO 19901-9 (offshore reliability)"
  ],
  "industryOperators": [
    "Shell — upstream / marine",
    "BP — marine",
    "TotalEnergies — FPSO operations",
    "Equinor — Norwegian shelf",
    "MODEC — FPSO operator",
    "SBM Offshore — FPSO",
    "Yinson — FPSO",
    "Bumi Armada — FPSO"
  ],
  "industryPain": [
    "IACS class-society reporting in Word / Excel — manual reformatting per society",
    "ROV inspection footage management — terabytes of video without indexing",
    "IMCA D-018 inspection-record format compliance — paper records in field",
    "FPSO surveyor team rotation — qualifications expire mid-tour"
  ],
  "faqs": [
    [
      "Does document control & qms work specifically for marine survey & offshore inspection?",
      "Yes. The module is configured for marine survey & offshore inspection workflow with pre-built templates aligned to IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM). Operator-specific quality clauses for Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing marine survey & offshore inspection tools?",
      "Standard integration via REST API with major marine survey & offshore inspection systems. Atlantis NDT ERP can run as the system of record for document control & qms while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small marine survey & offshore inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person marine survey & offshore inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_document_control_for_marine_survey_companies() { return <ErpModuleIndustryPage {...data} />; }
