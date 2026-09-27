import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "welding-fabrication-shops",
  "industryName": "Welding & Fabrication Shops",
  "title": "Asset Integrity & Equipment Register for Welding & Fabrication Shops",
  "desc": "Asset Integrity & Equipment Register for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea, McDermott — offshore so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Tailored for welding & fabrication shops — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person welding & fabrication shop runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational welding & fabrication shops deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "An audit-driven welding & fabrication shops uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AWS D1.1 / D1.5 / D1.6 / D14",
    "ASME Section IX",
    "ASME Section VIII Division 1",
    "ASME B31.1 / B31.3",
    "API 1104",
    "EN ISO 15614 / 9606 / 14732",
    "AS/NZS 3992",
    "ASME 'U' / 'S' / 'PP' / 'R' / 'NR' stamps"
  ],
  "industryOperators": [
    "Bechtel — civil / structural",
    "Fluor — EPC",
    "TechnipFMC — subsea",
    "McDermott — offshore",
    "Saipem — offshore / pipeline",
    "MMR Group — power generation",
    "Wood / Worley — refinery",
    "AECOM — defense / civil"
  ],
  "industryPain": [
    "WPS / PQR library in shared drive — outdated revisions used in field",
    "Welder continuity logged on paper — qualification expires mid-job, work rejected",
    "Weld map maintained in CAD — not linked to inspection or NDE results",
    "ASME 'U' stamp joint-review evidence assembled manually before each audit — 80 hours of work"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for welding & fabrication shops?",
      "Yes. The module is configured for welding & fabrication shops workflow with pre-built templates aligned to AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3. Operator-specific quality clauses for Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing welding & fabrication shops tools?",
    ],
    [
      "Can it scale from a small welding & fabrication shops to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person welding & fabrication shop pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ],
    [
    ]
  ]
};
export default function ErpCross_asset_management_for_welding_fabrication_shops() { return <ErpModuleIndustryPage {...data} />; }
