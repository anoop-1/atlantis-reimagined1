import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "audit-management",
  "moduleName": "Audit & Compliance Management",
  "citySlug": "mumbai",
  "cityName": "Mumbai",
  "country": "India",
  "title": "Audit & Compliance Management in Mumbai",
  "desc": "Audit & Compliance Management ERP module for inspection companies in Mumbai, India. Pre-configured for BPCL Mahul refinery, HPCL Mumbai refinery and aligned with PESO, OISD. Demo: info@atlantisndt.com.",
  "intro": "An inspection company faces audits from three directions: internal (your own QMS), external (client and regulator), and accreditation (ISO 17025, AS9100, ISO 9001). Failing any audit can mean lost contracts, suspended accreditations, regulatory penalties, and damaged reputation.\n\nFor inspection teams operating in Mumbai, India, the audit & compliance management module is configured against local realities: India's western corridor. Trombay/Mahul refineries. ONGC offshore Western Region. Reliance Hazira pipeline. Pre-built templates support operator-specific quality clauses from BPCL Mahul refinery, HPCL Mumbai refinery, ONGC Western Offshore, Reliance Hazira/Patalganga, and regulatory frameworks under PESO, OISD, DGMS mining are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Mumbai inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Multi-standard audit checklist library: ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, ISO 14001:2015, AS9100D, IATF 16949, API Q1/Q2, OSHA PSM, ISA-95",
    "Annual audit schedule with risk-weighted frequency per area / process / supplier",
    "Audit plan generator with scope, criteria, auditor assignment, opening / closing meeting agendas",
    "Mobile audit execution: evidence capture (photo, document, witness statement), real-time finding entry",
    "Finding classification: major NCR, minor NCR, observation, opportunity-for-improvement (OFI)",
    "Root cause analysis (RCA) workflow: 5-Why, fishbone, fault tree, FMEA — with corrective action linkage",
    "Tailored for Mumbai workflow — pre-configured operator templates for BPCL Mahul refinery, HPCL Mumbai refinery, ONGC Western Offshore",
    "Regulatory alignment with PESO, OISD, DGMS mining — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Mumbai inspection contractor serving BPCL Mahul refinery and HPCL Mumbai refinery deploys audit & compliance management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Mumbai EPC quality team standardizes audit & compliance management across 4 simultaneous project sites in the India market. Daily reports, audit packages, and customer-format reports flow to ONGC Western Offshore portals automatically.",
    "A growing Mumbai-based service provider integrates audit & compliance management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Reliance Hazira/Patalganga — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Mumbai inspection company uses audit & compliance management to pass PESO and OISD audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BPCL Mahul refinery",
    "HPCL Mumbai refinery",
    "ONGC Western Offshore",
    "Reliance Hazira/Patalganga",
    "Indian Oil Mumbai",
    "L&T Hydrocarbon",
    "Tata Power"
  ],
  "cityRegulators": [
    "PESO",
    "OISD",
    "DGMS mining",
    "DGFASLI",
    "Maharashtra Pollution Control Board"
  ],
  "cityPain": [
    "Audit & Compliance Management tracked in spreadsheets — always 2 months behind Mumbai operator-portal requirements",
    "PESO audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BPCL Mahul refinery updates monthly — internal procedures lag by weeks",
    "Customer-format reports for HPCL Mumbai refinery, ONGC Western Offshore, Reliance Hazira/Patalganga require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the audit & compliance management module configured for Mumbai operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BPCL Mahul refinery, HPCL Mumbai refinery, ONGC Western Offshore, Reliance Hazira/Patalganga, Indian Oil Mumbai. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with PESO and other India regulators?",
      "Yes. PESO, OISD, DGMS mining, DGFASLI requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Mumbai?",
      "Platform supports English (primary), and where relevant for India: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Does it support multi-standard audits — ISO 9001 + ISO 17025 + ISO 45001 — in one walk-through?",
      "Yes. Integrated management system (IMS) audits are supported: a single audit can map findings to multiple standard clauses simultaneously. The checklist library lets you compose an audit from clauses across standards. Findings are tagged with all applicable clauses for proper containment and reporting."
    ],
    [
      "How is corrective action effectiveness verified after closure?",
      "Each corrective action has a follow-up review scheduled 60–180 days after closure (configurable per finding type). The reviewer assesses whether the same issue has recurred, samples performance data, and signs off effectiveness. Failed effectiveness reviews automatically reopen the finding for further root cause analysis."
    ]
  ],
  "lat": 19.076,
  "lng": 72.8777
};
export default function ErpMC_audit_management_mumbai() { return <ErpModuleCityPage {...data} />; }
