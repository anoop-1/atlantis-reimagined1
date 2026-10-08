import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "asset-management",
  "industrySlug": "pipeline-integrity-services",
  "citySlug": "edmonton",
  "moduleName": "Asset Integrity & Equipment Register",
  "industryName": "Pipeline Integrity & ILI Services",
  "cityName": "Edmonton",
  "countryName": "Canada",
  "isoCountry": "CA",
  "lat": 53.5461,
  "lng": -113.4938,
  "title": "Asset Integrity & Equipment Register Software for Pipeline Integrity & ILI Services in Edmonton",
  "desc": "Asset Integrity & Equipment Register ERP module for pipeline integrity service providers in Edmonton, Canada. Demo: info@atlantisndt.com.",
  "introPara1": "Pipeline Integrity & ILI Services operating in Edmonton, Canada face a specific combination of local market structure, regulator framework, and operator quality flow-down that generic ERP systems cannot model — and that combination shapes how asset integrity register actually has to work on the ground. Edmonton sits at the heart of Canada's largest single-site refining and upgrading cluster. The dominant industrial cluster — Alberta Industrial Heartland — Strathcona, Scotford, NWR Sturgeon refineries plus Inter Pipeline / Pembina petrochemicals — sets the rhythm: Industrial Heartland turnarounds in -30°C cold and Fort McMurray oil sands rotations.",
  "introPara2": "For a pipeline integrity service provider supporting 800+ km of operator network in Edmonton, asset integrity register is not a back-office activity — it is the operational spine that determines audit outcomes, contract eligibility, and project margin. a missed API 1163 vendor-qualification deliverable invalidates the ILI run that paid for the campaign. For pipeline integrity & ili services based in Edmonton, that means a single live system of record that knows the market, not a generic accounting tool bolted to a spreadsheet of inspection records.",
  "introPara3": "Configured for Edmonton — with a procedure-library module able to hold whichever operator-specific flow-down clauses you need, such as those from Imperial Oil Strathcona, Suncor Edmonton refinery, Shell Scotford, NWR Sturgeon Refinery, once uploaded — compliance templates against ABSA AB-506 / AB-512, CSA Z662, CSA B51, AER Directive 056 / 077, and the audit frameworks that ABSA, AER, CER actually use. Field-data capture is offline-capable for Edmonton project sites, multi-language reporting supports Canada-required document formats, and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person Edmonton pipeline integrity service provider and a 200-person multinational both run on the same configuration baseline.",
  "features": [
    "Drawing / P&ID / isometric attachment per equipment with markup overlay",
    "Edmonton operator-specific flow-down pre-loaded for Imperial Oil Strathcona, Suncor Edmonton refinery, Shell Scotford",
    "Edmonton regulator compliance dashboard for ABSA, AER, CER",
    "Pipeline integrity service provider-specific report templates and acceptance criteria for pipeline integrity & ili services workflows",
    "Bilingual (English + Canada-relevant local language) document handling for Edmonton authority submission"
  ],
  "operators": [
    "Imperial Oil Strathcona",
    "Suncor Edmonton refinery",
    "Shell Scotford",
    "NWR Sturgeon Refinery",
    "Inter Pipeline HPC",
    "Pembina Pipeline",
    "Dow Fort Saskatchewan",
    "Nutrien Redwater"
  ],
  "regulators": [
    "ABSA",
    "AER",
    "CER",
    "CSA Group",
    "Transport Canada",
    "Alberta OHS",
    "ABSA AB-506 / AB-512",
    "CSA Z662"
  ],
  "painPoints": [
    "Asset integrity register for pipeline integrity service providers in Edmonton tracked in spreadsheets — always behind operator-portal updates from Imperial Oil Strathcona and Suncor Edmonton refinery",
    "ABSA audit preparation for asset integrity register workflows takes 80+ hours per cycle and finds gaps too late to remediate",
    "Operator flow-down from Imperial Oil Strathcona updates monthly — internal asset integrity register procedures lag by weeks, putting pipeline integrity & ili services contracts at risk",
    "Customer-format asset integrity register reports for Imperial Oil Strathcona, Suncor Edmonton refinery, Shell Scotford require manual reformatting on every submission — margin-eating rework"
  ],
  "useCases": [
    "Example: a pipeline integrity service provider in Edmonton working for clients such as Imperial Oil Strathcona and Suncor Edmonton refinery runs Asset Integrity & Equipment Register in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: a pipeline integrity service provider in Edmonton keeps client-specific quality requirements from Shell Scotford as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: a pipeline integrity service provider in Edmonton with crews on several Canada project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later.",
    "Example: a pipeline integrity service provider in Edmonton preparing for ABSA or client audits pulls technician certifications, procedures and calibration certificates from one system instead of from shared drives."
  ],
  "faqs": [
    [
      "Is Asset Integrity & Equipment Register configured for pipeline integrity & ili services operating in Edmonton?",
      "Yes. The asset integrity & equipment register module is pre-loaded with the codes and operator flow-downs that pipeline integrity & ili services in Edmonton work with daily: ABSA AB-506 / AB-512, CSA Z662, CSA B51, AER Directive 056 / 077. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from Imperial Oil Strathcona, Suncor Edmonton refinery, Shell Scotford, NWR Sturgeon Refinery — once your team uploads them. Configuration is done — your pipeline integrity service provider team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Edmonton regulators does the asset integrity register workflow align with?",
      "The compliance dashboard maps to ABSA, AER, CER, CSA Group, Transport Canada, Alberta OHS. Statutory inspection due-date reminders, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For pipeline integrity service providers, that means Industrial Heartland turnarounds in -30°C cold and Fort McMurray oil sands rotations."
    ],
    [
      "Can pipeline integrity service providers in Edmonton integrate with operator-specific portals such as Imperial Oil Strathcona?",
      "The document-control module is built to hold and version-control the operator-specific requirements your team works under — for major Canada operators such as Imperial Oil Strathcona, Suncor Edmonton refinery, Shell Scotford, NWR Sturgeon Refinery — as controlled documents; internal asset integrity register procedures that implement those clauses are cross-referenced, and revision changes flag affected internal documents for review automatically. We don't claim a live system integration with any specific operator's vendor portal — check with your client for their current submission process."
    ],
    [
      "What languages and currencies does the Edmonton deployment support?",
      "English is primary across the platform; Canada-relevant languages (Arabic in the Gulf, Bahasa Indonesia, Hindi / Marathi / Telugu in India, Mandarin in China and Singapore, Portuguese / Spanish in the Americas, French in West Africa and Canada) are supported for customer-facing documents and field-app translations. Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN, BRL, MXN, KWD, OMR — full multi-currency with VAT / GST as applicable for Canada."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_asset_management_pipeline_integrity_services_edmonton() { return <ErpTripleCrossPage {...data} />; }
