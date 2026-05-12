import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "industrySlug": "calibration-laboratories",
  "industryName": "Calibration Laboratories",
  "title": "Calibration Management for Calibration Laboratories",
  "desc": "Calibration Management for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor calibration laboratories, the calibration management module is configured around the codes, regulators, and operator-specific requirements you face every day: ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003, ILAC P14 (uncertainty), JCGM 100:2008 (GUM). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier), NIST (national standards — US) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for calibration laboratories — pre-configured templates, terminology, and reports",
    "Integrates with Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person calibration laboratory runs calibration management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational calibration laboratories deploys calibration management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing calibration laboratory integrates calibration management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven calibration laboratories uses calibration management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does calibration management work specifically for calibration laboratories?",
      "Yes. The module is configured for calibration laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003, ILAC P14 (uncertainty). Operator-specific quality clauses for Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing calibration laboratories tools?",
      "Standard integration via REST API with major calibration laboratories systems. Atlantis NDT ERP can run as the system of record for calibration management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small calibration laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person calibration laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Is the platform ISO/IEC 17025:2017 accredited or audited?",
      "The platform is designed to be compliant with ISO/IEC 17025:2017 documentation requirements, but accreditation is granted to the laboratory, not the software. Atlantis NDT supports laboratories through ANAB, A2LA, UKAS, DAkkS, and NABL accreditation cycles with audit-ready document packages, change control records, and personnel competency files."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. The uncertainty builder supports Type A (statistical, from repeated measurements) and Type B (other, from calibration certificates and manufacturer specifications) contributions. Combined standard uncertainty and expanded uncertainty (k=2 typical) are calculated automatically. Sensitivity coefficients can be entered for non-trivial measurement models."
    ]
  ]
};
export default function ErpCross_calibration_management_for_calibration_laboratories() { return <ErpModuleIndustryPage {...data} />; }
