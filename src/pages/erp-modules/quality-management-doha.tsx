import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "citySlug": "doha",
  "cityName": "Doha",
  "country": "Qatar",
  "title": "Quality Management & NCR in Doha",
  "desc": "Quality Management & NCR ERP module for inspection companies in Doha, Qatar. Pre-configured for QatarEnergy, RasGas and aligned with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor inspection teams operating in Doha, Qatar, the quality management & ncr module is configured against local realities: QatarEnergy LNG capital. North Field expansion. Cryogenic LNG infrastructure. Pre-built templates support operator-specific quality clauses from QatarEnergy, RasGas, Qatargas (now QatarEnergy LNG), Industries Qatar (IQ), and regulatory frameworks under QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology), Ministry of Energy Affairs are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Doha inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for Doha workflow — pre-configured operator templates for QatarEnergy, RasGas, Qatargas (now QatarEnergy LNG)",
    "Regulatory alignment with QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology), Ministry of Energy Affairs — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Doha inspection contractor serving QatarEnergy and RasGas deploys quality management & ncr as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Doha EPC quality team standardizes quality management & ncr across 4 simultaneous project sites in the Qatar market. Daily reports, audit packages, and customer-format reports flow to Qatargas (now QatarEnergy LNG) portals automatically.",
    "A growing Doha-based service provider integrates quality management & ncr with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Industries Qatar (IQ) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Doha inspection company uses quality management & ncr to pass QCDD (Qatar Civil Defence) and QGOSM (Qatar General Org Standards & Metrology) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "QatarEnergy",
    "RasGas",
    "Qatargas (now QatarEnergy LNG)",
    "Industries Qatar (IQ)",
    "QChem",
    "Ras Laffan Industrial City"
  ],
  "cityRegulators": [
    "QCDD (Qatar Civil Defence)",
    "QGOSM (Qatar General Org Standards & Metrology)",
    "Ministry of Energy Affairs"
  ],
  "cityPain": [
    "Quality Management & NCR tracked in spreadsheets — always 2 months behind Doha operator-portal requirements",
    "QCDD (Qatar Civil Defence) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from QatarEnergy updates monthly — internal procedures lag by weeks",
    "Customer-format reports for RasGas, Qatargas (now QatarEnergy LNG), Industries Qatar (IQ) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the quality management & ncr module configured for Doha operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for QatarEnergy, RasGas, Qatargas (now QatarEnergy LNG), Industries Qatar (IQ), QChem. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with QCDD (Qatar Civil Defence) and other Qatar regulators?",
      "Yes. QCDD (Qatar Civil Defence), QGOSM (Qatar General Org Standards & Metrology), Ministry of Energy Affairs requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Doha?",
      "Platform supports English (primary), and where relevant for Qatar: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 25.2854,
  "lng": 51.531
};
export default function ErpMC_quality_management_doha() { return <ErpModuleCityPage {...data} />; }
