import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "industrySlug": "calibration-laboratories",
  "industryName": "Calibration Laboratories",
  "title": "Quality Management & NCR for Calibration Laboratories",
  "desc": "Quality Management & NCR for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor calibration laboratories, the quality management & ncr module is configured around the codes, regulators, and operator-specific requirements you face every day: ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003, ILAC P14 (uncertainty), JCGM 100:2008 (GUM). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier), NIST (national standards — US) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for calibration laboratories — pre-configured templates, terminology, and reports",
    "Integrates with Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person calibration laboratory runs quality management & ncr as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational calibration laboratories deploys quality management & ncr across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing calibration laboratory integrates quality management & ncr with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven calibration laboratories uses quality management & ncr to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ISO/IEC 17025:2017",
    "ANSI/NCSL Z540.1 / Z540.3",
    "ISO 10012:2003",
    "ILAC P14 (uncertainty)",
    "JCGM 100:2008 (GUM)",
    "JCGM 200:2012 (VIM)",
    "EA-4/02 (uncertainty)",
    "ASTM E2935 (decision rules)"
  ],
  "industryOperators": [
    "Mitutoyo (instrument supplier)",
    "Fluke Calibration (instrument supplier)",
    "Beamex (instrument supplier)",
    "NIST (national standards — US)",
    "NPL (national standards — UK)",
    "PTB (national standards — DE)",
    "BIPM (international)",
    "Major aerospace primes (Boeing, Airbus, RTX)"
  ],
  "industryPain": [
    "Excel-based uncertainty budgets — error-prone, no version control, audit nightmare",
    "Word / PDF certificate generation — slow, no validation, inconsistent format",
    "Customer-asset tracking in disparate folders — instruments lost on-site, repeat customer enquiries",
    "Manual ISO 17025 §7.10 out-of-tolerance handling — customer-impact analysis missed"
  ],
  "faqs": [
    [
      "Does quality management & ncr work specifically for calibration laboratories?",
      "Yes. The module is configured for calibration laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003, ILAC P14 (uncertainty). Operator-specific quality clauses for Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing calibration laboratories tools?",
      "Standard integration via REST API with major calibration laboratories systems. Atlantis NDT ERP can run as the system of record for quality management & ncr while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small calibration laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person calibration laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_quality_management_for_calibration_laboratories() { return <ErpModuleIndustryPage {...data} />; }
