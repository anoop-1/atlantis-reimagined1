import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "environmental-testing-labs",
  "industryName": "Environmental Testing Laboratories",
  "title": "Quality Management & NCR for Environmental Testing Laboratories",
  "desc": "Quality Management & NCR for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor environmental testing laboratories, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series), ASTM water / soil methods, EN ISO water-method series. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from SGS — global testing, Eurofins — environmental, ALS Limited — environmental, Bureau Veritas — environmental so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for environmental testing laboratories — pre-configured templates, terminology, and reports",
    "Integrates with SGS — global testing, Eurofins — environmental, ALS Limited — environmental vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person environmental testing laboratory runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational environmental testing laboratories deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing environmental testing laboratory integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven environmental testing laboratories uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ISO/IEC 17025:2017",
    "NELAP / TNI standard (US)",
    "US EPA methods (SW-846, 600 series, 500 series)",
    "ASTM water / soil methods",
    "EN ISO water-method series",
    "BS / EN environmental methods",
    "UK Environment Agency MCERTS",
    "Australian NATA + ISO 17025"
  ],
  "industryOperators": [
    "SGS — global testing",
    "Eurofins — environmental",
    "ALS Limited — environmental",
    "Bureau Veritas — environmental",
    "Intertek — environmental",
    "TestAmerica / Eurofins TestAmerica",
    "Pace Analytical",
    "GBA Forschungsinstitut"
  ],
  "industryPain": [
    "Sample chain-of-custody on paper — regulator findings",
    "Lab data integration from instruments (GC, GC-MS, ICP, IC) — manual transcription errors",
    "EPA / EA reporting formats — manual reformatting per submission",
    "ISO 17025 method validation records scattered — accreditation findings"
  ],
  "faqs": [
    [
      "Does quality management & ncr work specifically for environmental testing laboratories?",
      "Yes. The module is configured for environmental testing laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series), ASTM water / soil methods. Operator-specific quality clauses for SGS — global testing, Eurofins — environmental, ALS Limited — environmental are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing environmental testing laboratories tools?",
      "Standard integration via REST API with major environmental testing laboratories systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small environmental testing laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person environmental testing laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_quality_management_for_environmental_testing_labs() { return <ErpModuleIndustryPage {...data} />; }
