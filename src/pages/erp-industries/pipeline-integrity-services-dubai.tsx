import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "pipeline-integrity-services",
  "industryName": "Pipeline Integrity & ILI Services",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Pipeline Integrity & ILI Services ERP Software in Dubai",
  "desc": "Purpose-built ERP for pipeline integrity & ili services based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Pipeline Integrity & ILI Services operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For pipeline integrity & ili services based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Pipeline integrity service providers here aggregate ILI vendor data (MFL, UT, EMAT, caliper), dig verification campaigns, and API 1163 / 1160 statutory submissions across long-haul networks. Atlantis NDT ERP is configured for the pipeline integrity & ili services business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a pipeline integrity & ili services ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware pipeline integrity & ili services workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for pipeline integrity & ili services statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai regulator submission formats pre-built for ADQCC and  MOIAT",
    "Long-haul pipeline ILI campaign manager for ADNOC Distribution and ENOC Group network coverage"
  ],
  "operators": [
    "ADNOC Distribution",
    "ENOC Group",
    "DUBAL / Emirates Global Aluminium",
    "DEWA (Dubai Electricity & Water)",
    "Dragon Oil",
    "Emirates Steel",
    "Borouge marketing arm",
    "Dubai Petroleum"
  ],
  "regulators": [
    "ADQCC inspection schemes",
    "ADNOC ACS-01 (vendor)",
    "ASME Section V / VIII",
    "API 510 / 570 / 653",
    "ISO 9712 (NDT certification)",
    "IMO MARPOL (Jebel Ali port)",
    "UAE FANR ionising-radiation regulations",
    "ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE"
  ],
  "useCases": [
    "An ILI vendor servicing ADNOC Distribution runs 800 km of liquids pipeline annually with API 1163 vendor-qualification packs assembled automatically from dig-verification data.",
    "A pipeline integrity firm in Dubai runs API 1160 IMP threat assessment per ENOC Group network segment — replacing Excel workbooks that previously generated audit findings.",
    "A dig-verification crew in Dubai captures field measurements per NACE SP0102 on mobile devices and statistically compares vs. ILI prediction in real time.",
    "A regional ILI services company in Dubai submits ADQCC statutory pipeline reports automatically from underlying inspection data — eliminating manual reporting deadlines as a risk source."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for pipeline integrity & ili services operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that pipeline integrity & ili services in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For pipeline integrity & ili services, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can pipeline integrity & ili services in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it import ILI vendor data (Rosen / NDT Global / Baker Hughes / TDW)?",
      "Yes. Standard imports for Rosen, NDT Global, Baker Hughes (Process & Pipeline Services), T.D. Williamson, Quest Integrity, and Onstream pipeline data formats. Anomaly records (location, depth, length, width, type) align to the pipeline asset register. ILI vs. dig-verification comparison is automated for API 1163 vendor qualification."
    ],
    [
      "Can it support API 1163 ILI vendor qualification?",
      "Yes. The system maintains the ILI vendor qualification record: tool spec, performance specification, prior-run history, dig-verification results, comparison statistics (POD, POI, sizing accuracy). The qualification report is generated in the API 1163 Appendix B format expected by operator integrity engineering teams."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_pipeline_integrity_services_dubai() { return <ErpIndustryCityPage {...data} />; }
