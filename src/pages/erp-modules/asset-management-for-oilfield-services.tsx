import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "oilfield-services",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "title": "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection",
  "desc": "Asset Integrity & Equipment Register for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from ExxonMobil — upstream, Chevron — upstream, Shell — upstream, BP — upstream so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Tailored for oilfield services & wellsite inspection — pre-configured templates, terminology, and reports",
    "Integrates with ExxonMobil — upstream, Chevron — upstream, Shell — upstream vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person oilfield services & wellsite inspection runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational oilfield services & wellsite inspection deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "An audit-driven oilfield services & wellsite inspection uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API Spec 4F (drilling derricks)",
    "API Spec 6A (wellhead)",
    "API Spec 16A (drill-through equipment)",
    "API Spec 16D (BOP control)",
    "API RP 53 (BOP)",
    "API RP 5A5 (OCTG inspection)",
    "API RP 5C5 / 5C6 / 5C7 (casing / tubing)",
    "ISO 13501 / 13628 (subsea)"
  ],
  "industryOperators": [
    "ExxonMobil — upstream",
    "Chevron — upstream",
    "Shell — upstream",
    "BP — upstream",
    "ConocoPhillips — upstream",
    "Saudi Aramco upstream",
    "ADNOC Onshore",
    "PEMEX upstream"
  ],
  "industryPain": [
    "Field-ticket capture on paper — billing disputes, days lost in invoicing",
    "Rig / BOP test scheduling on Excel — compliance findings from regulator",
    "Casing / tubing inspection records scattered — no aggregated wellbore data",
    "OCTG inventory (drill collars, casing, tubing) — no real-time location tracking"
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for oilfield services & wellsite inspection?",
      "Yes. The module is configured for oilfield services & wellsite inspection workflow with pre-built templates aligned to API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control). Operator-specific quality clauses for ExxonMobil — upstream, Chevron — upstream, Shell — upstream are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing oilfield services & wellsite inspection tools?",
    ],
    [
      "Can it scale from a small oilfield services & wellsite inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person oilfield services & wellsite inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ],
    [
    ]
  ]
};
export default function ErpCross_asset_management_for_oilfield_services() { return <ErpModuleIndustryPage {...data} />; }
