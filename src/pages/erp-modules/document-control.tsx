import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "document-control",
  "name": "Document Control & QMS",
  "title": "Document Control Software — ISO 9001 / ISO 17025 / AS9100 QMS",
  "h1": "Document Control & QMS Module",
  "desc": "Controlled-document lifecycle, revision history, distribution control, training acknowledgment, retention schedule, and obsolete-document withdrawal. Built for QMS compliance under ISO 9001, ISO 17025, AS9100, IATF 16949, and API Q1/Q2.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails. Atlantis NDT ERP's document control module is purpose-built for controlled documents — not a generic SharePoint folder dressed up with permissions.",
  "features": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "External / customer document import with controlled mark-up and cross-reference",
    "Document search with full-text indexing across PDF, Word, Excel, and image attachments",
    "Procedure deviation request workflow with engineering justification + approval chain",
    "Document review scheduling per document classification (annual, biennial, on-change)",
    "Audit-trail per document: every view, download, edit, approval — tamper-evident log",
    "Multi-language document handling (Arabic, Chinese, Spanish, Portuguese, French, German)"
  ],
  "useCases": [
    "ISO 17025 lab maintaining 350 controlled methods, procedures, and work instructions",
    "Aerospace NDT shop under AS9100D managing customer-specific process specifications",
    "Pharmaceutical / biotech facility requiring 21 CFR Part 11 electronic-record compliance",
    "Inspection contractor maintaining client-specific written practices for ASNT SNT-TC-1A",
    "Welding fabrication shop with ASME WPS / PQR library + customer-specific code variations"
  ],
  "industries": [
    "NDT inspection",
    "Calibration laboratories",
    "Aerospace QA",
    "Pharmaceutical / biotech",
    "Welding & fabrication",
    "Industrial coatings"
  ],
  "integrations": [
    "SharePoint Online",
    "Microsoft 365",
    "iManage",
    "MasterControl",
    "ETQ",
    "DocuSign / Adobe Sign"
  ],
  "faqs": [
    [
      "How is revision control handled — can people accidentally use an obsolete document?",
      "Each document has only one current revision visible by default. Obsolete revisions are retained in the audit history but marked clearly with an obsolete watermark. Users cannot download or print obsolete revisions without explicit override (logged). The system enforces 'current revision only' on all distribution and training workflows."
    ],
    [
      "Does it support 21 CFR Part 11 electronic signatures for FDA / EMA regulated industries?",
      "Yes. Optional 21 CFR Part 11 mode enforces user authentication for every electronic signature event, captures meaning-of-signature, prevents repudiation, and produces a tamper-evident audit trail with secure time-stamping. The validation package includes IQ / OQ / PQ documentation for FDA, EMA, and ANVISA inspection."
    ],
    [
      "How does training acknowledgment work for new document revisions?",
      "When a controlled document is approved at a new revision, the distribution list is automatically generated based on document classification and assigned roles. Each person on the list receives an in-app + email notification with a read-and-acknowledge button. Training compliance is tracked at the role level (e.g., 'all UT Level II inspectors have read Procedure ABC-123 Rev 4')."
    ],
    [
      "Can we control customer-specific specifications and reference documents?",
      "Yes. Customer-supplied specifications (Boeing D-590, Airbus AITM, ADNOC ACS, Saudi Aramco SAEP, Shell DEP) can be imported as controlled external documents. Cross-references from your internal procedures to specific customer-spec sections are maintained — when the customer spec is updated, all internal procedures that reference it are flagged for review."
    ],
    [
      "What about retention schedules and document destruction?",
      "Each document classification has a retention schedule (e.g., 'inspection reports — 7 years post-project closeout', 'calibration certificates — 5 years from issue', 'controlled procedures — current revision plus 5 years'). When retention expires the document is auto-archived to a tamper-evident long-term store; destruction requires sign-off by the QMS manager with reason logged."
    ]
  ]
};
export default function ErpModule_document_control() { return <ErpModulePage {...data} />; }
