import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "industrySlug": "ndt-inspection-companies",
  "industryName": "NDT Inspection Companies",
  "title": "Inspection Scheduling & Interval Management for NDT Inspection Companies",
  "desc": "ASNT SNT-TC-1A / CP-189 / ASNT 9712 (formerly ACCP), ISO 9712:2021, PCN GEN. Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor ndt inspection companies, the inspection scheduling & interval management module is configured around the codes, regulators, and operator-specific requirements you face every day: ASNT SNT-TC-1A / CP-189 / ASNT 9712, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3, AWS QC1. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS, Shell — DEP so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "API 510 pressure vessel due dates (external, internal, on-stream) entered by the inspector, with reminders before each falls due",
    "API 570 piping due dates by circuit and class, entered by the inspector, with reminders before each falls due",
    "API 653 tank due dates (routine, external, internal) entered by the inspector, with reminders before each falls due",
    "ASME B31.3 process piping due dates, including the severe cyclic service items the inspector flags",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for ndt inspection companies — pre-configured templates, terminology, and reports",
    "Integrates with Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person ndt inspection company runs inspection scheduling & interval management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational ndt inspection companies deploys inspection scheduling & interval management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing ndt inspection company integrates inspection scheduling & interval management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven ndt inspection companies uses inspection scheduling & interval management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
      "Does inspection scheduling & interval management work specifically for ndt inspection companies?",
      "Yes. The module is configured for ndt inspection companies workflow with pre-built templates aligned to ASNT SNT-TC-1A / CP-189 / ASNT 9712, ISO 9712:2021, PCN GEN, CSWIP 3.1 / 3.2 / 3.3. Operator-specific quality clauses for Saudi Aramco — SAEP-1142, ADNOC — ACS-01, QatarEnergy — NFPS are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing ndt inspection companies tools?",
      "Standard integration via REST API with major ndt inspection companies systems. Atlantis NDT ERP can run as the system of record for inspection scheduling & interval management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small ndt inspection companies to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person ndt inspection company pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "How does the scheduler handle deferrals or extensions to inspection due dates?",
      "The deferral workflow requires an engineering justification — a corrosion-rate or remaining-life re-assessment by the inspector, or an operating-conditions change — and a sign-off from a qualified inspector (API 510/570/653 certified) and the integrity manager. Deferrals are audit-logged with the full chain of approval, and the new due date the inspector sets is recorded with reminders. Regulatory limits (e.g., NB-23 maximum extensions) are shown to the approvers to check."
    ],
    [
      "Does it integrate with our existing CMMS (Maximo, SAP PM, AspenTech)?",
      "Yes. Bi-directional integration with the major CMMS / EAM platforms. Inspection scheduling can be the master and push work orders into the CMMS, or the CMMS can be master and Atlantis ERP acts as the inspection-specific layer holding due dates, readings and records. Asset hierarchies, equipment classes, and functional locations sync."
    ]
  ]
};
export default function ErpCross_inspection_scheduling_for_ndt_inspection_companies() { return <ErpModuleIndustryPage {...data} />; }
