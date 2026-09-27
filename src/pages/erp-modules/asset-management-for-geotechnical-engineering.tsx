import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "geotechnical-engineering",
  "industryName": "Geotechnical Engineering Firms",
  "title": "Asset Integrity & Equipment Register for Geotechnical Engineering Firms",
  "desc": "Asset Integrity & Equipment Register for Geotechnical Engineering Firms — purpose-configured module from Atlantis NDT ERP. ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Arup — engineering, Mott MacDonald — engineering, WSP — engineering, Atkins — engineering so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Tailored for geotechnical engineering firms — pre-configured templates, terminology, and reports",
    "Integrates with Arup — engineering, Mott MacDonald — engineering, WSP — engineering vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person geotechnical engineering firm runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational geotechnical engineering firms deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "An audit-driven geotechnical engineering firms uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does asset integrity & equipment register work specifically for geotechnical engineering firms?",
      "Yes. The module is configured for geotechnical engineering firms workflow with pre-built templates aligned to ASTM D420 series (soil sampling), ASTM D2487 (USCS classification), ASTM D2216 (moisture), ASTM D4318 (Atterberg limits). Operator-specific quality clauses for Arup — engineering, Mott MacDonald — engineering, WSP — engineering are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing geotechnical engineering firms tools?",
    ],
    [
      "Can it scale from a small geotechnical engineering firms to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person geotechnical engineering firm pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ],
    [
    ]
  ]
};
export default function ErpCross_asset_management_for_geotechnical_engineering() { return <ErpModuleIndustryPage {...data} />; }
