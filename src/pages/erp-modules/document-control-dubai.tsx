import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "document-control",
  "moduleName": "Document Control & QMS",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "country": "UAE",
  "title": "Document Control & QMS in Dubai",
  "desc": "Document Control & QMS ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails.\n\nFor inspection teams operating in Dubai, UAE, the document control & qms module is configured against local realities: Regional HQ city for GCC oil & gas. EPC contractors, inspection service multinationals. Pre-built templates support operator-specific quality clauses from ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, and regulatory frameworks under ADQCC, MOIAT, Dubai Municipality are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Dubai inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "Tailored for Dubai workflow — pre-configured operator templates for ADNOC Distribution, ENOC, DUBAL aluminum",
    "Regulatory alignment with ADQCC, MOIAT, Dubai Municipality — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Dubai inspection contractor serving ADNOC Distribution and ENOC deploys document control & qms as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Dubai EPC quality team standardizes document control & qms across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to DUBAL aluminum portals automatically.",
    "A growing Dubai-based service provider integrates document control & qms with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by DEWA power — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Dubai inspection company uses document control & qms to pass ADQCC and MOIAT audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ADNOC Distribution",
    "ENOC",
    "DUBAL aluminum",
    "DEWA power",
    "Dragon Oil",
    "Wood UAE",
    "Petrofac Dubai",
    "Sharjah National Oil Co"
  ],
  "cityRegulators": [
    "ADQCC",
    "MOIAT",
    "Dubai Municipality",
    "DCAS",
    "Dubai Civil Defence"
  ],
  "cityPain": [
    "Document Control & QMS tracked in spreadsheets — always 2 months behind Dubai operator-portal requirements",
    "ADQCC audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ADNOC Distribution updates monthly — internal procedures lag by weeks",
    "Customer-format reports for ENOC, DUBAL aluminum, DEWA power require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the document control & qms module configured for Dubai operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, Dragon Oil. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ADQCC and other UAE regulators?",
      "Yes. ADQCC, MOIAT, Dubai Municipality, DCAS requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Dubai?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "How is revision control handled — can people accidentally use an obsolete document?",
      "Each document has only one current revision visible by default. Obsolete revisions are retained in the audit history but marked clearly with an obsolete watermark. Users cannot download or print obsolete revisions without explicit override (logged). The system enforces 'current revision only' on all distribution and training workflows."
    ],
    [
      "Does it support 21 CFR Part 11 electronic signatures for FDA / EMA regulated industries?",
      "Yes. Optional 21 CFR Part 11 mode enforces user authentication for every electronic signature event, captures meaning-of-signature, prevents repudiation, and produces a tamper-evident audit trail with secure time-stamping. The validation package includes IQ / OQ / PQ documentation for FDA, EMA, and ANVISA inspection."
    ]
  ],
  "lat": 25.276987,
  "lng": 55.296249
};
export default function ErpMC_document_control_dubai() { return <ErpModuleCityPage {...data} />; }
