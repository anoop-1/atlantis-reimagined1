import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "industrySlug": "aerospace-quality-control",
  "industryName": "Aerospace Quality Control",
  "title": "Calibration Management for Aerospace Quality Control",
  "desc": "Calibration Management for Aerospace Quality Control — purpose-configured module from Atlantis NDT ERP. AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor aerospace quality control, the calibration management module is configured around the codes, regulators, and operator-specific requirements you face every day: AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M, DGCA CAR Section 2 / Series E. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation, Embraer — regional jet so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for aerospace quality control — pre-configured templates, terminology, and reports",
    "Integrates with Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person aerospace quality control runs calibration management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational aerospace quality control deploys calibration management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing aerospace quality control integrates calibration management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven aerospace quality control uses calibration management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does calibration management work specifically for aerospace quality control?",
      "Yes. The module is configured for aerospace quality control workflow with pre-built templates aligned to AS9100D / AS9120 / AS9110 (MRO), NAS-410 Rev 5, FAA 14 CFR Part 145 / 21, EASA Part 145 / Part-M. Operator-specific quality clauses for Boeing — commercial / defense, Airbus — commercial / defense, Bombardier — business aviation are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing aerospace quality control tools?",
      "Standard integration via REST API with major aerospace quality control systems. Atlantis NDT ERP can run as the system of record for calibration management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small aerospace quality control to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person aerospace quality control pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_calibration_management_for_aerospace_quality_control() { return <ErpModuleIndustryPage {...data} />; }
