import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "industrySlug": "ndt-inspection-companies",
  "industryName": "NDT Inspection Companies",
  "title": "Corrosion Tracking for NDT Inspection Companies",
  "desc": "ASNT SNT-TC-1A / CP-189 / ASNT 9712 (formerly ACCP), ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor ndt inspection companies, the corrosion tracking module is configured around the codes, regulators, and operator-specific requirements you face every day: ASNT SNT-TC-1A / CP-189 / ASNT 9712, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3, AWS QC1. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS, Shell — DEP so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for ndt inspection companies — pre-configured templates, terminology, and reports",
    "Integrates with Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person ndt inspection company runs corrosion tracking as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational ndt inspection companies deploys corrosion tracking across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing ndt inspection company integrates corrosion tracking with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven ndt inspection companies uses corrosion tracking to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Manual API 510 / 570 / 653 due-date tracking — frequent missed due dates",
    "Word / Excel report templates per client — hours wasted on formatting",
    "Thickness history scattered across spreadsheets — engineers rebuild it before every inspection"
  ],
  "faqs": [
    [
      "Does corrosion tracking work specifically for ndt inspection companies?",
      "Yes. The module is configured for ndt inspection companies workflow with pre-built templates aligned to ASNT SNT-TC-1A / CP-189 / ASNT 9712, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3. Operator-specific quality clauses for Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing ndt inspection companies tools?",
      "Standard integration via REST API with major ndt inspection companies systems. Atlantis NDT ERP can run as the system of record for corrosion tracking while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small ndt inspection companies to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person ndt inspection company pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ]
};
export default function ErpCross_corrosion_tracking_for_ndt_inspection_companies() { return <ErpModuleIndustryPage {...data} />; }
