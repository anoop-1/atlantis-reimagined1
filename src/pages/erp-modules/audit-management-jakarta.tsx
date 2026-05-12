import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "audit-management",
  "moduleName": "Audit & Compliance Management",
  "citySlug": "jakarta",
  "cityName": "Jakarta",
  "country": "Indonesia",
  "title": "Audit & Compliance Management in Jakarta",
  "desc": "Audit & Compliance Management ERP module for inspection companies in Jakarta, Indonesia. Pre-configured for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia and aligned with SKK Migas, K3 Migas (HSE). Demo: info@atlantisndt.com.",
  "intro": "An inspection company faces audits from three directions: internal (your own QMS), external (client and regulator), and accreditation (ISO 17025, AS9100, ISO 9001). Failing any audit can mean lost contracts, suspended accreditations, regulatory penalties, and damaged reputation.\n\nFor inspection teams operating in Jakarta, Indonesia, the audit & compliance management module is configured against local realities: Pertamina HQ. Indonesian state energy. LNG Bontang/Tangguh. Petrochemical Tuban/Cilegon. Pre-built templates support operator-specific quality clauses from Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia, Bontang LNG, Tangguh LNG, and regulatory frameworks under SKK Migas, K3 Migas (HSE), BKPM investment board are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Jakarta inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Multi-standard audit checklist library: ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, ISO 14001:2015, AS9100D, IATF 16949, API Q1/Q2, OSHA PSM, ISA-95",
    "Annual audit schedule with risk-weighted frequency per area / process / supplier",
    "Audit plan generator with scope, criteria, auditor assignment, opening / closing meeting agendas",
    "Mobile audit execution: evidence capture (photo, document, witness statement), real-time finding entry",
    "Finding classification: major NCR, minor NCR, observation, opportunity-for-improvement (OFI)",
    "Root cause analysis (RCA) workflow: 5-Why, fishbone, fault tree, FMEA — with corrective action linkage",
    "Tailored for Jakarta workflow — pre-configured operator templates for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia, Bontang LNG",
    "Regulatory alignment with SKK Migas, K3 Migas (HSE), BKPM investment board — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Jakarta inspection contractor serving Pertamina (Cilacap, Balikpapan, Dumai refineries) and Pupuk Indonesia deploys audit & compliance management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Jakarta EPC quality team standardizes audit & compliance management across 4 simultaneous project sites in the Indonesia market. Daily reports, audit packages, and customer-format reports flow to Bontang LNG portals automatically.",
    "A growing Jakarta-based service provider integrates audit & compliance management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Tangguh LNG — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Jakarta inspection company uses audit & compliance management to pass SKK Migas and K3 Migas (HSE) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Pertamina (Cilacap, Balikpapan, Dumai refineries)",
    "Pupuk Indonesia",
    "Bontang LNG",
    "Tangguh LNG",
    "Krakatau Steel",
    "Petrokimia Gresik",
    "Tripatra EPC"
  ],
  "cityRegulators": [
    "SKK Migas",
    "K3 Migas (HSE)",
    "BKPM investment board",
    "BPOM (drug/food regulator for QC labs)"
  ],
  "cityPain": [
    "Audit & Compliance Management tracked in spreadsheets — always 2 months behind Jakarta operator-portal requirements",
    "SKK Migas audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Pertamina (Cilacap, Balikpapan, Dumai refineries) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Pupuk Indonesia, Bontang LNG, Tangguh LNG require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the audit & compliance management module configured for Jakarta operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Pertamina (Cilacap, Balikpapan, Dumai refineries), Pupuk Indonesia, Bontang LNG, Tangguh LNG, Krakatau Steel. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with SKK Migas and other Indonesia regulators?",
      "Yes. SKK Migas, K3 Migas (HSE), BKPM investment board, BPOM (drug/food regulator for QC labs) requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Jakarta?",
      "Platform supports English (primary), and where relevant for Indonesia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": -6.2088,
  "lng": 106.8456
};
export default function ErpMC_audit_management_jakarta() { return <ErpModuleCityPage {...data} />; }
