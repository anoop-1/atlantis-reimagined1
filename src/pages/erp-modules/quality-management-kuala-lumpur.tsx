import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "citySlug": "kuala-lumpur",
  "cityName": "Kuala Lumpur",
  "country": "Malaysia",
  "title": "Quality Management & NCR in Kuala Lumpur",
  "desc": "Quality Management & NCR ERP module for inspection companies in Kuala Lumpur, Malaysia. Pre-configured for PETRONAS upstream/downstream, PCSB and aligned with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor inspection teams operating in Kuala Lumpur, Malaysia, the quality management & ncr module is configured against local realities: PETRONAS HQ city. ASEAN energy gateway. Petronas Technical Standards (PTS) compliance. Pre-built templates support operator-specific quality clauses from PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG), Sime Darby, and regulatory frameworks under DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Kuala Lumpur inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for Kuala Lumpur workflow — pre-configured operator templates for PETRONAS upstream/downstream, PCSB, Petronas Chemicals (PCG)",
    "Regulatory alignment with DOSH (Department of Occupational Safety & Health), Suruhanjaya Tenaga (Energy Commission), NIOSH Malaysia — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Kuala Lumpur inspection contractor serving PETRONAS upstream/downstream and PCSB deploys quality management & ncr as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Kuala Lumpur EPC quality team standardizes quality management & ncr across 4 simultaneous project sites in the Malaysia market. Daily reports, audit packages, and customer-format reports flow to Petronas Chemicals (PCG) portals automatically.",
    "A growing Kuala Lumpur-based service provider integrates quality management & ncr with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sime Darby — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Kuala Lumpur inspection company uses quality management & ncr to pass DOSH (Department of Occupational Safety & Health) and Suruhanjaya Tenaga (Energy Commission) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Quality Management & NCR tracked in spreadsheets — always 2 months behind Kuala Lumpur operator-portal requirements",
    "DOSH (Department of Occupational Safety & Health) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PETRONAS upstream/downstream updates monthly — internal procedures lag by weeks",
    "Customer-format reports for PCSB, Petronas Chemicals (PCG), Sime Darby require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the quality management & ncr module configured for Kuala Lumpur operators?",
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
      "How is the NCR → CAPA workflow structured?",
      "An NCR is opened on discovery (audit finding, customer complaint, internal observation, recurring issue). The workflow forces containment first (stop the bleeding), then investigation (root cause), then corrective action (fix this occurrence), then preventive action (stop it happening elsewhere). Effectiveness review 60–180 days later verifies the fix held. Each stage has a responsible owner, target date, and approval signature."
    ],
    [
      "Does it support AS9100D customer-specific quality clauses?",
      "Yes. AS9100D §4.4 requires that customer-specific quality clauses (e.g., Boeing D6-82479, Airbus PSPs, Pratt & Whitney ASQR-01) are flow-down to internal processes. The system maintains a customer-clause register with cross-reference to internal procedures, training records, and audit evidence."
    ]
  ],
  "lat": 3.139,
  "lng": 101.6869
};
export default function ErpMC_quality_management_kuala_lumpur() { return <ErpModuleCityPage {...data} />; }
