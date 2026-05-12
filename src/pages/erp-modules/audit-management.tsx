import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "audit-management",
  "name": "Audit & Compliance Management",
  "title": "Audit Management Software for Inspection & Service Companies",
  "h1": "Audit & Compliance Management Module",
  "desc": "Plan, execute, document, and close out internal audits, client audits, regulatory audits, and accreditation audits. ISO 9001, ISO 17025, ISO 45001, AS9100, ISO 14001, and client-specific audit schemes — single platform.",
  "intro": "An inspection company faces audits from three directions: internal (your own QMS), external (client and regulator), and accreditation (ISO 17025, AS9100, ISO 9001). Failing any audit can mean lost contracts, suspended accreditations, regulatory penalties, and damaged reputation. The audit management module is the central nervous system for audit planning, execution, finding management, and closeout.",
  "features": [
    "Multi-standard audit checklist library: ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, ISO 14001:2015, AS9100D, IATF 16949, API Q1/Q2, OSHA PSM, ISA-95",
    "Annual audit schedule with risk-weighted frequency per area / process / supplier",
    "Audit plan generator with scope, criteria, auditor assignment, opening / closing meeting agendas",
    "Mobile audit execution: evidence capture (photo, document, witness statement), real-time finding entry",
    "Finding classification: major NCR, minor NCR, observation, opportunity-for-improvement (OFI)",
    "Root cause analysis (RCA) workflow: 5-Why, fishbone, fault tree, FMEA — with corrective action linkage",
    "CAPA (corrective and preventive action) lifecycle: containment → root cause → corrective action → preventive action → effectiveness review",
    "Supplier / sub-contractor audit module with approved-supplier register",
    "Regulatory finding tracker (OSHA, EPA, state authority, federal authority) with response deadlines",
    "Client audit response: standard responses, evidence packages, customer-specific quality clauses",
    "Audit history dashboard: finding trends, repeat findings, area / process risk scoring",
    "Document control integration: all audited documents and revisions cross-linked"
  ],
  "useCases": [
    "ISO 17025 calibration lab maintaining accreditation across A2LA, UKAS, and DAkkS schemes",
    "AS9100D-certified aerospace NDT shop responding to Boeing, Airbus, and Pratt & Whitney audits",
    "Inspection contractor on Saudi Aramco, ADNOC, Shell, and Petronas approved-vendor lists",
    "Pipeline integrity company subject to annual DOT PHMSA inspection authority audit",
    "Welding fabrication shop with ASME 'U' / 'S' / 'PP' stamp requiring annual joint review"
  ],
  "industries": [
    "NDT inspection",
    "Calibration laboratories",
    "Welding & fabrication",
    "Aerospace QA",
    "Pipeline integrity",
    "Industrial coatings"
  ],
  "integrations": [
    "SharePoint",
    "ETQ Reliance",
    "MasterControl",
    "iManage",
    "BSI eQMS",
    "EtQ Verse"
  ],
  "faqs": [
    [
      "Does it support multi-standard audits — ISO 9001 + ISO 17025 + ISO 45001 — in one walk-through?",
      "Yes. Integrated management system (IMS) audits are supported: a single audit can map findings to multiple standard clauses simultaneously. The checklist library lets you compose an audit from clauses across standards. Findings are tagged with all applicable clauses for proper containment and reporting."
    ],
    [
      "How is corrective action effectiveness verified after closure?",
      "Each corrective action has a follow-up review scheduled 60–180 days after closure (configurable per finding type). The reviewer assesses whether the same issue has recurred, samples performance data, and signs off effectiveness. Failed effectiveness reviews automatically reopen the finding for further root cause analysis."
    ],
    [
      "Can it generate evidence packages for client / regulator audits?",
      "Yes. The evidence package builder lets you select the scope (date range, audit type, asset / area, finding type) and assembles a PDF / ZIP with all relevant records: certificates, calibration records, inspection reports, personnel qualifications, training records, document revisions, and CAPA closures. Customer-specific filtering ensures clients see only their own data."
    ],
    [
      "How are repeat findings tracked and escalated?",
      "Each finding carries a category tag (e.g., 'inadequate personnel qualification', 'calibration program weakness'). When the same category appears in a subsequent audit the system flags it as a repeat finding and automatically escalates the corrective action to a higher review level with senior management notification. Repeat-finding trends are visible on the management review dashboard."
    ],
    [
      "Does it satisfy ISO 19011 internal audit competency requirements?",
      "ISO 19011:2018 requires auditors to demonstrate competence in audit principles, the management system being audited, and audit methods. The system tracks each auditor's competency profile, training history, audit experience hours, and peer review observations. Auditor qualification approval workflow ensures only qualified personnel are assigned to audits."
    ]
  ]
};
export default function ErpModule_audit_management() { return <ErpModulePage {...data} />; }
