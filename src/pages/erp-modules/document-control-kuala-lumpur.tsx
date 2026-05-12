import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "document-control",
  "moduleName": "Document Control & QMS",
  "citySlug": "kuala-lumpur",
  "cityName": "Kuala Lumpur",
  "country": "Malaysia",
  "title": "Document Control & QMS in Kuala Lumpur",
  "desc": "Document Control & QMS ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  "intro": "An inspection company's quality management system runs on documents: procedures, work instructions, calibration methods, inspection reports, certificates, training records, customer specifications. Lose control of those documents and the QMS audit fails.\n\nFor inspection teams operating in Kuala Lumpur, Malaysia, the document control & qms module is configured against local realities: PETRONAS HQ city. ASEAN energy gateway. Petronas Technical Standards (PTS) compliance. Pre-built templates support operator-specific quality clauses from PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG), Sime Darby, and regulatory frameworks under DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Kuala Lumpur inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Controlled-document register with unique ID, title, owner, classification, retention schedule",
    "Revision-controlled storage: every change creates a new revision with redline + author + reason",
    "Author / reviewer / approver workflow with e-signature per 21 CFR Part 11 (optional)",
    "Distribution list per document: who must read, who must train, who must acknowledge",
    "Training acknowledgment tracking with read-and-understood signature per revision",
    "Obsolete-document withdrawal with watermark + read-only flag (no silent deletion)",
    "Tailored for Kuala Lumpur workflow — pre-configured operator templates for PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG)",
    "Regulatory alignment with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Kuala Lumpur inspection contractor serving PETRONAS upstream/downstream and PCSB deploys document control & qms as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Kuala Lumpur EPC quality team standardizes document control & qms across 4 simultaneous project sites in the Malaysia market. Daily reports, audit packages, and customer-format reports flow to Petronas Chemicals (PCG) portals automatically.",
    "A growing Kuala Lumpur-based service provider integrates document control & qms with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sime Darby — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Kuala Lumpur inspection company uses document control & qms to pass DOSH (Department of Occupational Safety & Health) and Suruhanjaya Tenaga (Energy Commission) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "PETRONAS upstream/downstream",
    "PCSB",
    "Petronas Chemicals (PCG)",
    "Sime Darby",
    "MISC",
    "Tenaga Nasional Berhad",
    "MLNG Bintulu"
  ],
  "cityRegulators": [
    "DOSH (Department of Occupational Safety & Health)",
    "Suruhanjaya Tenaga (Energy Commission)",
    "NIOSH Malaysia",
    "SIRIM QAS"
  ],
  "cityPain": [
    "Document Control & QMS tracked in spreadsheets — always 2 months behind Kuala Lumpur operator-portal requirements",
    "DOSH (Department of Occupational Safety & Health) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PETRONAS upstream/downstream updates monthly — internal procedures lag by weeks",
    "Customer-format reports for PCSB, Petronas Chemicals (PCG), Sime Darby require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the document control & qms module configured for Kuala Lumpur operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG), Sime Darby, MISC. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with DOSH (Department of Occupational Safety & Health) and other Malaysia regulators?",
      "Yes. DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia, SIRIM QAS requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Kuala Lumpur?",
      "Platform supports English (primary), and where relevant for Malaysia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 3.139,
  "lng": 101.6869
};
export default function ErpMC_document_control_kuala_lumpur() { return <ErpModuleCityPage {...data} />; }
