import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "pipeline-integrity-services",
  "name": "Pipeline Integrity & ILI Services",
  "title": "ERP for Pipeline Integrity & ILI Inspection Companies",
  "h1": "ERP for Pipeline Integrity & ILI Service Companies",
  "desc": "In-line inspection (ILI) tool deployments, MFL / UT / EMAT / caliper data management, API 1163 inspection plans, API 1160 IMP support, DOT PHMSA reporting, threat-assessment per ASME B31.8S, and dig verification workflows.",
  "intro": "Pipeline integrity is a globally regulated, data-intensive discipline. An ILI vendor running a smart pig through 800 km of refined-products pipeline generates terabytes of MFL / UT / EMAT / caliper data, hundreds of anomaly call-outs, dozens of dig verifications, and a regulatory deliverable to DOT PHMSA / Canada Energy Regulator / EU pipeline authority. The pipeline-integrity ERP is built for this end-to-end workflow.",
  "modules": [
    "asset-management",
    "corrosion-tracking",
    "work-order-management",
    "inspection-scheduling",
    "document-control",
    "quality-management",
    "audit-management",
    "project-management"
  ],
  "regs": [
    "API 1163 (ILI qualification)",
    "API 1160 (pipeline IMP)",
    "ASME B31.4 / B31.8 / B31.8S (pipeline)",
    "API 1104 (welding)",
    "DOT PHMSA 49 CFR 192 / 195",
    "CSA Z662 (Canadian pipeline)",
    "EN ISO 15589-1 (CP)",
    "NACE SP0102 (ILI)",
    "NACE SP0204 (SCC)",
    "NACE SP0775 (corrosion)"
  ],
  "operators": [
    "Enbridge — North American pipelines",
    "TC Energy / TransCanada",
    "Kinder Morgan — products",
    "Energy Transfer — gathering / transmission",
    "Williams — gas transmission",
    "Shell Midstream",
    "DCP Midstream",
    "Plains All American",
    "Saudi Aramco pipelines",
    "ADNOC Onshore"
  ],
  "pain": [
    "ILI vendor data delivered as proprietary formats — months to integrate with GIS / asset register",
    "API 1163 vendor qualification audit prep — 80+ hours of evidence assembly",
    "Dig verification data captured on paper in field — re-entered into spreadsheets",
    "API 1160 IMP threat assessment in Excel — versioning chaos, audit findings",
    "DOT PHMSA reporting deadlines missed — civil penalties"
  ],
  "faqs": [
    [
      "Does it import ILI vendor data (Rosen / NDT Global / Baker Hughes / TDW)?",
      "Yes. Standard imports for Rosen, NDT Global, Baker Hughes (Process & Pipeline Services), T.D. Williamson, Quest Integrity, and Onstream pipeline data formats. Anomaly records (location, depth, length, width, type) align to the pipeline asset register. ILI vs. dig-verification comparison is automated for API 1163 vendor qualification."
    ],
    [
      "Can it support API 1163 ILI vendor qualification?",
      "Yes. The system maintains the ILI vendor qualification record: tool spec, performance specification, prior-run history, dig-verification results, comparison statistics (POD, POI, sizing accuracy). The qualification report is generated in the API 1163 Appendix B format expected by operator integrity engineering teams."
    ],
    [
      "How is dig verification data captured?",
      "Dig verification uses a field-app workflow: locate anomaly per ILI report, expose pipe, measure depth / length per NACE SP0102, photograph, and upload. Comparison vs. ILI prediction is automatic. Statistical accumulation across multiple digs feeds the API 1163 ILI vendor qualification."
    ],
    [
      "Does it support API 1160 / ASME B31.8S threat assessment?",
      "Yes. The 9-threat / 22-threat models per ASME B31.8S are supported with threat-screening, susceptibility, and risk-ranking per pipeline segment. Annual review and assessment-frequency triggers (max 5-yr for B31.8 transmission) are enforced. The IMP report is auto-assembled per API 1160 framework."
    ],
    [
      "How does DOT PHMSA reporting integrate?",
      "Annual reports (DOT Form 7100.2.1 hazardous liquid, 7100.2.1 gas), incident reports, and integrity-management performance metrics are pre-populated from the underlying asset, inspection, and corrosion data. Submission to PHMSA Portal is supported via XML upload. Reporting deadlines are tracked with automated reminders."
    ]
  ]
};
export default function ErpIndustry_pipeline_integrity_services() { return <ErpIndustryPage {...data} />; }
