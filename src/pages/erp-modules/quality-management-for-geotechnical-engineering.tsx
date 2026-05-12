import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "geotechnical-engineering",
  "industryName": "Geotechnical Engineering Firms",
  "title": "Quality Management & NCR for Geotechnical Engineering Firms",
  "desc": "Quality Management & NCR for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor geotechnical engineering firms, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture), ASTM D4318 (Atterberg limits), ASTM D2435 (consolidation). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Arup — engineering, Mott MacDonald — engineering, WSP — engineering, Atkins — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for geotechnical engineering firms — pre-configured templates, terminology, and reports",
    "Integrates with Arup — engineering, Mott MacDonald — engineering, WSP — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person geotechnical engineering firm runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational geotechnical engineering firms deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing geotechnical engineering firm integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven geotechnical engineering firms uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ASTM D420 series (soil sampling)",
    "ASTM D2487 (USCS classification)",
    "ASTM D2216 (moisture)",
    "ASTM D4318 (Atterberg limits)",
    "ASTM D2435 (consolidation)",
    "ASTM D3080 (direct shear)",
    "EN ISO 14688 / 14689 (soil / rock classification)",
    "EN ISO 22282 (geotechnical investigation)"
  ],
  "industryOperators": [
    "Arup — engineering",
    "Mott MacDonald — engineering",
    "WSP — engineering",
    "Atkins — engineering",
    "AECOM — civil",
    "Fugro — geotechnical",
    "Geosyntec — geotechnical",
    "Stantec — engineering"
  ],
  "industryPain": [
    "Borehole logs in Word / Excel — re-typed multiple times across project",
    "CPT raw data files in vendor formats — manual conversion to AGS format",
    "Lab test results in paper notebooks — re-entered into project database",
    "Site investigation campaign coordination across drillers, lab, engineers — informal"
  ],
  "faqs": [
    [
      "Does quality management & ncr work specifically for geotechnical engineering firms?",
      "Yes. The module is configured for geotechnical engineering firms workflow with pre-built templates aligned to ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture), ASTM D4318 (Atterberg limits). Operator-specific quality clauses for Arup — engineering, Mott MacDonald — engineering, WSP — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing geotechnical engineering firms tools?",
      "Standard integration via REST API with major geotechnical engineering firms systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small geotechnical engineering firms to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person geotechnical engineering firm pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_quality_management_for_geotechnical_engineering() { return <ErpModuleIndustryPage {...data} />; }
