import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "audit-management",
  "moduleName": "Audit & Compliance Management",
  "industrySlug": "marine-survey-companies",
  "industryName": "Marine Survey & Offshore Inspection",
  "title": "Audit & Compliance Management for Marine Survey & Offshore Inspection",
  "desc": "Audit & Compliance Management for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  "intro": "An inspection company faces audits from three directions: internal (your own QMS), external (client and regulator), and accreditation (ISO 17025, AS9100, ISO 9001). Failing any audit can mean lost contracts, suspended accreditations, regulatory penalties, and damaged reputation.\n\nFor marine survey & offshore inspection, the audit & compliance management module is configured around the codes, regulators, and operator-specific requirements you face every day: IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM), IMCA C-002 (diving inspection). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations, Equinor — Norwegian shelf so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Multi-standard audit checklist library: ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, ISO 14001:2015, AS9100D, IATF 16949, API Q1/Q2, OSHA PSM, ISA-95",
    "Annual audit schedule with risk-weighted frequency per area / process / supplier",
    "Audit plan generator with scope, criteria, auditor assignment, opening / closing meeting agendas",
    "Mobile audit execution: evidence capture (photo, document, witness statement), real-time finding entry",
    "Finding classification: major NCR, minor NCR, observation, opportunity-for-improvement (OFI)",
    "Root cause analysis (RCA) workflow: 5-Why, fishbone, fault tree, FMEA — with corrective action linkage",
    "Tailored for marine survey & offshore inspection — pre-configured templates, terminology, and reports",
    "Integrates with Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person marine survey & offshore inspection runs audit & compliance management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational marine survey & offshore inspection deploys audit & compliance management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing marine survey & offshore inspection integrates audit & compliance management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven marine survey & offshore inspection uses audit & compliance management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does audit & compliance management work specifically for marine survey & offshore inspection?",
      "Yes. The module is configured for marine survey & offshore inspection workflow with pre-built templates aligned to IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM). Operator-specific quality clauses for Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing marine survey & offshore inspection tools?",
      "Standard integration via REST API with major marine survey & offshore inspection systems. Atlantis NDT ERP can run as the system of record for audit & compliance management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small marine survey & offshore inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person marine survey & offshore inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Does it support multi-standard audits — ISO 9001 + ISO 17025 + ISO 45001 — in one walk-through?",
      "Yes. Integrated management system (IMS) audits are supported: a single audit can map findings to multiple standard clauses simultaneously. The checklist library lets you compose an audit from clauses across standards. Findings are tagged with all applicable clauses for proper containment and reporting."
    ],
    [
      "How is corrective action effectiveness verified after closure?",
      "Each corrective action has a follow-up review scheduled 60–180 days after closure (configurable per finding type). The reviewer assesses whether the same issue has recurred, samples performance data, and signs off effectiveness. Failed effectiveness reviews automatically reopen the finding for further root cause analysis."
    ]
  ]
};
export default function ErpCross_audit_management_for_marine_survey_companies() { return <ErpModuleIndustryPage {...data} />; }
