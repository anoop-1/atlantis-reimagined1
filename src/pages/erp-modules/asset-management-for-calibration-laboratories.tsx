import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "calibration-laboratories",
  "industryName": "Calibration Laboratories",
  "title": "Asset Integrity & Equipment Register for Calibration Laboratories",
  "desc": "Asset Integrity & Equipment Register for Calibration Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier), NIST (national standards — US) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Tailored for calibration laboratories — pre-configured templates, terminology, and reports",
    "Integrates with Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person calibration laboratory runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational calibration laboratories deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "An audit-driven calibration laboratories uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does asset integrity & equipment register work specifically for calibration laboratories?",
      "Yes. The module is configured for calibration laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, ANSI/NCSL Z540.1 / Z540.3, ISO 10012:2003, ILAC P14 (uncertainty). Operator-specific quality clauses for Mitutoyo (instrument supplier), Fluke Calibration (instrument supplier), Beamex (instrument supplier) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing calibration laboratories tools?",
    ],
    [
      "Can it scale from a small calibration laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person calibration laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ],
    [
    ]
  ]
};
export default function ErpCross_asset_management_for_calibration_laboratories() { return <ErpModuleIndustryPage {...data} />; }
