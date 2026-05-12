import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "geotechnical-engineering",
  "industryName": "Geotechnical Engineering Firms",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Geotechnical Engineering Firms ERP Software in Dubai",
  "desc": "Purpose-built ERP for geotechnical engineering firms based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Geotechnical Engineering Firms operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For geotechnical engineering firms based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Geotechnical engineering firms here run site-investigation campaigns, borehole logs, CPT data acquisition, laboratory test workflow, and AGS-format reporting for civil and infrastructure projects. Atlantis NDT ERP is configured for the geotechnical engineering firms business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a geotechnical engineering firms ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware geotechnical engineering firms workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for geotechnical engineering firms statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai site-investigation campaign coordinator with local driller and lab subcontract management",
    "Regulator-format geotechnical report templates aligned to ADQCC and  MOIAT requirements"
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
    "A site-investigation campaign in Dubai for ADNOC Distribution produces AGS 4.1 borehole logs and CPT plots integrated with lab test results — client deliverable assembled in 1 week, not 6.",
    "A geotechnical consultancy in Dubai runs ENOC Group mega-project ground-investigation campaign with drill-rig schedule, lab subcontractor coordination, and field engineer assignment on one platform.",
    "A Dubai geotechnical firm produces design-parameter recommendation reports for DUBAL / Emirates Global Aluminium infrastructure programs with full traceability from borehole log to laboratory test certificate.",
    "An Dubai-based geotechnical / environmental services company runs CPT + lab test + report-assembly on a single project — eliminating cross-platform data transcription errors."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for geotechnical engineering firms operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that geotechnical engineering firms in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For geotechnical engineering firms, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can geotechnical engineering firms in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it support AGS data format for UK / EU geotechnical projects?",
      "Yes. AGS (Association of Geotechnical and Geoenvironmental Specialists) data format export is native — AGS 3.1, AGS 4, AGS 4.1 are supported. Project data (borehole, CPT, lab tests) exports in AGS-compliant format for client deliverable. Import from drillers / lab providers in AGS format is also supported."
    ],
    [
      "How are borehole logs and CPT data managed?",
      "Borehole logs per ASTM / EN ISO 14688 are authored in the platform with strata description, sample recovery, SPT / N-value, groundwater observations, and Atterberg / shear-strength results. CPT raw data from vendor PSPs (Geomil, Pagani, Hogentogler) imports automatically with tip resistance, sleeve friction, pore pressure, and friction ratio plotted vs. depth."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_geotechnical_engineering_dubai() { return <ErpIndustryCityPage {...data} />; }
