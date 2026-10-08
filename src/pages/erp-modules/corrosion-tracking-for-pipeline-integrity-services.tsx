import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "industrySlug": "pipeline-integrity-services",
  "industryName": "Pipeline Integrity & ILI Services",
  "title": "Corrosion Tracking for Pipeline Integrity & ILI Services",
  "desc": "API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline). Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor pipeline integrity & ili services, the corrosion tracking module is configured around the codes, regulators, and operator-specific requirements you face every day: API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding), DOT PHMSA 49 CFR 192 / 195. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products, Energy Transfer — gathering / transmission so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for pipeline integrity & ili services — pre-configured templates, terminology, and reports",
    "Integrates with Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person pipeline integrity & ili service runs corrosion tracking as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational pipeline integrity & ili services deploys corrosion tracking across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing pipeline integrity & ili service integrates corrosion tracking with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven pipeline integrity & ili services uses corrosion tracking to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API 1163 (ILI qualification)",
    "API 1160 (pipeline IMP)",
    "ASME B31.4 / B31.8 / B31.8S (pipeline)",
    "API 1104 (welding)",
    "DOT PHMSA 49 CFR 192 / 195",
    "CSA Z662 (Canadian pipeline)",
    "EN ISO 15589-1 (CP)",
    "NACE SP0102 (ILI)"
  ],
  "industryOperators": [
    "Enbridge — North American pipelines",
    "TC Energy / TransCanada",
    "Kinder Morgan — products",
    "Energy Transfer — gathering / transmission",
    "Williams — gas transmission",
    "Shell Midstream",
    "DCP Midstream",
    "Plains All American"
  ],
  "industryPain": [
    "ILI vendor data delivered as proprietary formats — months to integrate with GIS / asset register",
    "API 1163 vendor qualification audit prep — 80+ hours of evidence assembly",
    "Dig verification data captured on paper in field — re-entered into spreadsheets",
    "API 1160 IMP threat assessment in Excel — versioning chaos, audit findings"
  ],
  "faqs": [
    [
      "Does corrosion tracking work specifically for pipeline integrity & ili services?",
      "Yes. The module is configured for pipeline integrity & ili services workflow with pre-built templates aligned to API 1163 (ILI qualification), API 1160 (pipeline IMP), ASME B31.4 / B31.8 / B31.8S (pipeline), API 1104 (welding). Operator-specific quality clauses for Enbridge — North American pipelines, TC Energy / TransCanada, Kinder Morgan — products are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing pipeline integrity & ili services tools?",
      "Standard integration via REST API with major pipeline integrity & ili services systems. Atlantis NDT ERP can run as the system of record for corrosion tracking while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small pipeline integrity & ili services to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person pipeline integrity & ili service pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ]
};
export default function ErpCross_corrosion_tracking_for_pipeline_integrity_services() { return <ErpModuleIndustryPage {...data} />; }
