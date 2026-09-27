import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "ndt-inspection-companies",
  "industryName": "NDT Inspection Companies",
  "title": "Quality Management & NCR for NDT Inspection Companies",
  "desc": "Quality Management & NCR for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor ndt inspection companies, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3, AWS QC1. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS, Shell — DEP so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for ndt inspection companies — pre-configured templates, terminology, and reports",
    "Integrates with Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person ndt inspection company runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational ndt inspection companies deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing ndt inspection company integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven ndt inspection companies uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ASNT SNT-TC-1A / CP-189 / ACCP",
    "ISO 9712:2021",
    "PCN GEN",
    "CSWIP 3.1 / 3.2 / 3.3",
    "AWS QC1",
    "NAS-410 Rev 5",
    "API ICP — 510 / 570 / 580 / 653",
    "ASME Section V"
  ],
  "industryOperators": [
    "Saudi Aramco — SAEP-1142",
    "ADNOC — ACS-01",
    "QatarEnergy — NFPS",
    "Shell — DEP",
    "BP — ETP / GIS",
    "ExxonMobil — GP",
    "Chevron — CC-CHV",
    "TotalEnergies — TGS / GS-PVV"
  ],
  "industryPain": [
    "Spreadsheets tracking 50+ technician certifications across multiple schemes — always 2 months behind reality",
    "Manual API 510 / 570 / 653 inspection interval tracking — frequent missed due dates",
    "Word / Excel report templates per client — hours wasted on formatting",
    "No corrosion-rate trending — engineers re-calculate from scratch each inspection"
  ],
  "faqs": [
    [
      "Does quality management & ncr work specifically for ndt inspection companies?",
      "Yes. The module is configured for ndt inspection companies workflow with pre-built templates aligned to ASNT SNT-TC-1A / CP-189 / ACCP, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3. Operator-specific quality clauses for Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing ndt inspection companies tools?",
      "Standard integration via REST API with major ndt inspection companies systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small ndt inspection companies to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person ndt inspection company pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_quality_management_for_ndt_inspection_companies() { return <ErpModuleIndustryPage {...data} />; }
