import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "audit-management",
  "moduleName": "Audit & Compliance Management",
  "industrySlug": "construction-quality-assurance",
  "industryName": "Construction Quality Assurance",
  "title": "Audit & Compliance Management for Construction Quality Assurance",
  "desc": "Audit & Compliance Management for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  "intro": "An inspection company faces audits from three directions: internal (your own QMS), external (client and regulator), and accreditation (ISO 17025, AS9100, ISO 9001). Failing any audit can mean lost contracts, suspended accreditations, regulatory penalties, and damaged reputation.\n\nFor construction quality assurance, the audit & compliance management module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder), ASTM E329 / E1155 (concrete floor flatness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — EPC, Fluor — EPC, Jacobs — engineering, WSP — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Multi-standard audit checklist library: ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, ISO 14001:2015, AS9100D, IATF 16949, API Q1/Q2, OSHA PSM, ISA-95",
    "Annual audit schedule with risk-weighted frequency per area / process / supplier",
    "Audit plan generator with scope, criteria, auditor assignment, opening / closing meeting agendas",
    "Mobile audit execution: evidence capture (photo, document, witness statement), real-time finding entry",
    "Finding classification: major NCR, minor NCR, observation, opportunity-for-improvement (OFI)",
    "Root cause analysis (RCA) workflow: 5-Why, fishbone, fault tree, FMEA — with corrective action linkage",
    "Tailored for construction quality assurance — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — EPC, Fluor — EPC, Jacobs — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person construction quality assurance runs audit & compliance management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational construction quality assurance deploys audit & compliance management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing construction quality assurance integrates audit & compliance management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven construction quality assurance uses audit & compliance management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AWS D1.1 / D1.5 (welding)",
    "ACI 318 / 301 (concrete)",
    "ASTM D698 / D1557 (soil compaction)",
    "ASTM C39 / C31 (concrete cylinder)",
    "ASTM E329 / E1155 (concrete floor flatness)",
    "AS 3600 (concrete — Australia)",
    "EN 1090 (steel — EU)",
    "ISO 17636 (RT for welds)"
  ],
  "industryOperators": [
    "Bechtel — EPC",
    "Fluor — EPC",
    "Jacobs — engineering",
    "WSP — engineering",
    "AECOM — civil / defense",
    "Skanska — construction",
    "Lendlease — construction",
    "VINCI — construction"
  ],
  "industryPain": [
    "ITP execution tracked on paper — mid-project audit findings of missed hold points",
    "Concrete cylinder break data in lab notebooks — month-end reconciliation chaos",
    "FAT / SAT execution scattered across email — handover punch list missed",
    "Multi-discipline NCRs tracked separately — root cause patterns invisible"
  ],
  "faqs": [
    [
      "Does audit & compliance management work specifically for construction quality assurance?",
      "Yes. The module is configured for construction quality assurance workflow with pre-built templates aligned to AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder). Operator-specific quality clauses for Bechtel — EPC, Fluor — EPC, Jacobs — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing construction quality assurance tools?",
      "Standard integration via REST API with major construction quality assurance systems. Atlantis NDT ERP can run as the system of record for audit & compliance management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small construction quality assurance to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person construction quality assurance pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_audit_management_for_construction_quality_assurance() { return <ErpModuleIndustryPage {...data} />; }
