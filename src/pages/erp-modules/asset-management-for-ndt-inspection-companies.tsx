import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "industrySlug": "ndt-inspection-companies",
  "industryName": "NDT Inspection Companies",
  "title": "Asset Integrity & Equipment Register for NDT Inspection Companies",
  "desc": "Asset Integrity & Equipment Register for NDT Inspection Companies — purpose-configured module from Atlantis NDT ERP. ASNT SNT-TC-1A / CP-189 / ASNT 9712 (formerly ACCP), ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS, Shell — DEP so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Tailored for ndt inspection companies — pre-configured templates, terminology, and reports",
    "Integrates with Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person ndt inspection company runs asset integrity & equipment register as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational ndt inspection companies deploys asset integrity & equipment register across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "An audit-driven ndt inspection companies uses asset integrity & equipment register to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ASNT SNT-TC-1A / CP-189 / ASNT 9712",
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
    "Word / Excel report templates per client — hours wasted on formatting",
  ],
  "faqs": [
    [
      "Does asset integrity & equipment register work specifically for ndt inspection companies?",
      "Yes. The module is configured for ndt inspection companies workflow with pre-built templates aligned to ASNT SNT-TC-1A / CP-189 / ASNT 9712, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3. Operator-specific quality clauses for Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing ndt inspection companies tools?",
    ],
    [
      "Can it scale from a small ndt inspection companies to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person ndt inspection company pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ],
    [
    ]
  ]
};
export default function ErpCross_asset_management_for_ndt_inspection_companies() { return <ErpModuleIndustryPage {...data} />; }
