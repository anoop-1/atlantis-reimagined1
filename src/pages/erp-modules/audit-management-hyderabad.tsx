import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "audit-management",
  "moduleName": "Audit & Compliance Management",
  "citySlug": "hyderabad",
  "cityName": "Hyderabad",
  "country": "India",
  "title": "Audit & Compliance Management in Hyderabad",
  "desc": "Audit & Compliance Management ERP module for inspection companies in Hyderabad, India. Pre-configured for BHEL boilers/turbines, HPCL Visakh refinery (adjacent) and aligned with PESO, BARC nuclear. Demo: info@atlantisndt.com.",
  "intro": "An inspection company faces audits from three directions: internal (your own QMS), external (client and regulator), and accreditation (ISO 17025, AS9100, ISO 9001). Failing any audit can mean lost contracts, suspended accreditations, regulatory penalties, and damaged reputation.\n\nFor inspection teams operating in Hyderabad, India, the audit & compliance management module is configured against local realities: South India industrial hub. BHEL heavy engineering. ISRO suppliers. Pharma + aerospace manufacturing. Pre-built templates support operator-specific quality clauses from BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense, and regulatory frameworks under PESO, BARC nuclear, DGCA aerospace are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Hyderabad inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Multi-standard audit checklist library: ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, ISO 14001:2015, AS9100D, IATF 16949, API Q1/Q2, OSHA PSM, ISA-95",
    "Annual audit schedule with risk-weighted frequency per area / process / supplier",
    "Audit plan generator with scope, criteria, auditor assignment, opening / closing meeting agendas",
    "Mobile audit execution: evidence capture (photo, document, witness statement), real-time finding entry",
    "Finding classification: major NCR, minor NCR, observation, opportunity-for-improvement (OFI)",
    "Root cause analysis (RCA) workflow: 5-Why, fishbone, fault tree, FMEA — with corrective action linkage",
    "Tailored for Hyderabad workflow — pre-configured operator templates for BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers",
    "Regulatory alignment with PESO, BARC nuclear, DGCA aerospace — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Hyderabad inspection contractor serving BHEL boilers/turbines and HPCL Visakh refinery (adjacent) deploys audit & compliance management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Hyderabad EPC quality team standardizes audit & compliance management across 4 simultaneous project sites in the India market. Daily reports, audit packages, and customer-format reports flow to ISRO satellite suppliers portals automatically.",
    "A growing Hyderabad-based service provider integrates audit & compliance management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by BDL defense — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Hyderabad inspection company uses audit & compliance management to pass PESO and BARC nuclear audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BHEL boilers/turbines",
    "HPCL Visakh refinery (adjacent)",
    "ISRO satellite suppliers",
    "BDL defense",
    "ECIL",
    "Dr Reddy's Labs",
    "Bharat Forge"
  ],
  "cityRegulators": [
    "PESO",
    "BARC nuclear",
    "DGCA aerospace",
    "AERB radiation safety",
    "Telangana Pollution Control Board"
  ],
  "cityPain": [
    "Audit & Compliance Management tracked in spreadsheets — always 2 months behind Hyderabad operator-portal requirements",
    "PESO audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BHEL boilers/turbines updates monthly — internal procedures lag by weeks",
    "Customer-format reports for HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the audit & compliance management module configured for Hyderabad operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BHEL boilers/turbines, HPCL Visakh refinery (adjacent), ISRO satellite suppliers, BDL defense, ECIL. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with PESO and other India regulators?",
      "Yes. PESO, BARC nuclear, DGCA aerospace, AERB radiation safety requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Hyderabad?",
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
  "lat": 17.385,
  "lng": 78.4867
};
export default function ErpMC_audit_management_hyderabad() { return <ErpModuleCityPage {...data} />; }
