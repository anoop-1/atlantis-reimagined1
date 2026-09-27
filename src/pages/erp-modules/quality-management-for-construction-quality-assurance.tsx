import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "construction-quality-assurance",
  "industryName": "Construction Quality Assurance",
  "title": "Quality Management & NCR for Construction Quality Assurance",
  "desc": "Quality Management & NCR for Construction Quality Assurance — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor construction quality assurance, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder), ASTM E329 / E1155 (concrete floor flatness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — EPC, Fluor — EPC, Jacobs — engineering, WSP — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for construction quality assurance — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — EPC, Fluor — EPC, Jacobs — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person construction quality assurance runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational construction quality assurance deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing construction quality assurance integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven construction quality assurance uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does quality management & ncr work specifically for construction quality assurance?",
      "Yes. The module is configured for construction quality assurance workflow with pre-built templates aligned to AWS D1.1 / D1.5 (welding), ACI 318 / 301 (concrete), ASTM D698 / D1557 (soil compaction), ASTM C39 / C31 (concrete cylinder). Operator-specific quality clauses for Bechtel — EPC, Fluor — EPC, Jacobs — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing construction quality assurance tools?",
      "Standard integration via REST API with major construction quality assurance systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small construction quality assurance to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person construction quality assurance pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How is the NCR → CAPA workflow structured?",
      "An NCR is opened on discovery (audit finding, customer complaint, internal observation, recurring issue). The workflow forces containment first (stop the bleeding), then investigation (root cause), then corrective action (fix this occurrence), then preventive action (stop it happening elsewhere). Effectiveness review 60–180 days later verifies the fix held. Each stage has a responsible owner, target date, and approval signature."
    ],
    [
      "Does it support AS9100D customer-specific quality clauses?",
      "Yes. AS9100D §4.4 requires that customer-specific quality clauses (e.g., Boeing D6-82479, Airbus PSPs, Pratt & Whitney ASQR-01) are flow-down to internal processes. The system maintains a customer-clause register with cross-reference to internal procedures, training records, and audit evidence."
    ]
  ]
};
export default function ErpCross_quality_management_for_construction_quality_assurance() { return <ErpModuleIndustryPage {...data} />; }
