import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "industrial-coatings-inspection",
  "industryName": "Industrial Coatings Inspection",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Industrial Coatings Inspection ERP Software in Dubai",
  "desc": "Purpose-built ERP for industrial coatings inspection based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Industrial Coatings Inspection operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For industrial coatings inspection based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Industrial coatings inspection businesses here capture NACE / AMPP DFT readings, hold-point witness records, ISO 12944 coating-system data, and pull-off adhesion test results across multi-month campaigns. Atlantis NDT ERP is configured for the industrial coatings inspection business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a industrial coatings inspection ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware industrial coatings inspection workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for industrial coatings inspection statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai project hold-point manager with ADNOC Distribution and ENOC Group witness-list defaults",
    "Climate-aware coating-application window planner tuned to winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan"
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
    "A coatings inspection firm in Dubai captures DFT readings per SSPC PA 2 on mobile DFT gauges for ADNOC Distribution project — 80/80 rule statistics auto-calculated, remediation work orders raised automatically.",
    "A Dubai coatings inspection team manages ISO 12944 corrosion-protection systems across ENOC Group project hold-point witness records — clients receive 48-hour hold-point notifications automatically.",
    "A multi-project coatings contractor in Dubai consolidates NACE / AMPP CIP inspector qualifications across rotating crews — preventing mid-project expiry that previously rejected work.",
    "An offshore coatings inspection mobilisation in Dubai closes out a DUBAL / Emirates Global Aluminium platform topside campaign with full ASTM D4541 pull-off adhesion statistical evidence in 24 hours."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for industrial coatings inspection operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that industrial coatings inspection in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For industrial coatings inspection, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can industrial coatings inspection in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it manage NACE / AMPP Coating Inspector qualifications?",
      "Yes. NACE / AMPP CIP Level I / II / III qualifications, BGAS-CSWIP coating inspector, ICorr coating inspector, FROSIO coating inspector are tracked with expiry, scope, and renewal workflow. Inspector assignments to jobs are gated against required qualification."
    ],
    [
      "How are DFT (dry-film thickness) campaigns managed?",
      "DFT readings per SSPC PA 2 are captured in the field app on a mobile DFT gauge. The grid pattern, spot-measurements, and 80-80 rule statistics are calculated automatically. Out-of-spec spots trigger remediation work order. Final coating system pull-down per SSPC PA 2 §9 generates the customer-facing DFT report."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_industrial_coatings_inspection_dubai() { return <ErpIndustryCityPage {...data} />; }
