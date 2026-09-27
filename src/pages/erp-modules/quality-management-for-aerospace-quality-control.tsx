import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "aerospace-quality-control",
  "industryName": "Aerospace Quality Control",
  "title": "Quality Management & NCR for Aerospace Quality Control",
  "desc": "Quality Management & NCR for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor aerospace quality control, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M, DGCA CAR Section 2 / Series E. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation, Embraer — regional jet so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for aerospace quality control — pre-configured templates, terminology, and reports",
    "Integrates with Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person aerospace quality control runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational aerospace quality control deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing aerospace quality control integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven aerospace quality control uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AS9100D / AS9120 / AS9110 (MRO)",
    "NAS-410 Rev 5",
    "FAA 14 CFR Part 145 / 21",
    "EASA Part 145 / Part-M",
    "DGCA CAR Section 2 / Series E",
    "DOD MIL-STD-410 / NAS-410",
    "ASTM E1417 / E1444 / E1742 / E2375 (aerospace NDT)",
    "ISO 9712 — annex on aerospace"
  ],
  "industryOperators": [
    "Boeing — commercial / defense",
    "Airbus — commercial / defense",
    "Bombardier — business aviation",
    "Embraer — regional jet",
    "Pratt & Whitney — engine OEM",
    "GE Aerospace — engine OEM",
    "Rolls-Royce — engine OEM",
    "Safran — engine / components"
  ],
  "industryPain": [
    "NAS-410 qualification matrix in Excel — version drift across departments",
    "Customer-specific quality clauses (Boeing D-590, AITM, ASQR-01) flow-down is informal — audit findings",
    "Work-order traceability per FAA 14 CFR Part 145 — manual paper trails",
    "FOD prevention program not integrated with work-order — incident risk"
  ],
  "faqs": [
    [
      "Does quality management & ncr work specifically for aerospace quality control?",
      "Yes. The module is configured for aerospace quality control workflow with pre-built templates aligned to AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M. Operator-specific quality clauses for Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing aerospace quality control tools?",
      "Standard integration via REST API with major aerospace quality control systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small aerospace quality control to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person aerospace quality control pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_quality_management_for_aerospace_quality_control() { return <ErpModuleIndustryPage {...data} />; }
