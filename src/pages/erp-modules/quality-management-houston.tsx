import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "citySlug": "houston",
  "cityName": "Houston",
  "country": "USA",
  "title": "Quality Management & NCR in Houston",
  "desc": "Quality Management & NCR ERP module for inspection companies in Houston, USA. Pre-configured for ExxonMobil Baytown refinery, Marathon Galveston Bay and aligned with OSHA Region 6 PSM, TCEQ air permits. Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor inspection teams operating in Houston, USA, the quality management & ncr module is configured against local realities: Energy capital of the world. 4,600+ oil & gas firms. Continuous turnaround demand. Pre-built templates support operator-specific quality clauses from ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston, and regulatory frameworks under OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Houston inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for Houston workflow — pre-configured operator templates for ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview",
    "Regulatory alignment with OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Houston inspection contractor serving ExxonMobil Baytown refinery and Marathon Galveston Bay deploys quality management & ncr as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Houston EPC quality team standardizes quality management & ncr across 4 simultaneous project sites in the USA market. Daily reports, audit packages, and customer-format reports flow to LyondellBasell Channelview portals automatically.",
    "A growing Houston-based service provider integrates quality management & ncr with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Valero Houston — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Houston inspection company uses quality management & ncr to pass OSHA Region 6 PSM and TCEQ air permits audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ExxonMobil Baytown refinery",
    "Marathon Galveston Bay",
    "LyondellBasell Channelview",
    "Valero Houston",
    "Phillips 66 Sweeny",
    "Shell Deer Park",
    "Pemex Deer Park",
    "INEOS Battleground"
  ],
  "cityRegulators": [
    "OSHA Region 6 PSM",
    "TCEQ air permits",
    "USCG District 8 marine",
    "Texas Railroad Commission",
    "EPA Region 6",
    "DOT PHMSA pipeline"
  ],
  "cityPain": [
    "Quality Management & NCR tracked in spreadsheets — always 2 months behind Houston operator-portal requirements",
    "OSHA Region 6 PSM audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ExxonMobil Baytown refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the quality management & ncr module configured for Houston operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ExxonMobil Baytown refinery, Marathon Galveston Bay, LyondellBasell Channelview, Valero Houston, Phillips 66 Sweeny. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with OSHA Region 6 PSM and other USA regulators?",
      "Yes. OSHA Region 6 PSM, TCEQ air permits, USCG District 8 marine, Texas Railroad Commission requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Houston?",
      "Platform supports English (primary), and where relevant for USA: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 29.7604,
  "lng": -95.3698
};
export default function ErpMC_quality_management_houston() { return <ErpModuleCityPage {...data} />; }
