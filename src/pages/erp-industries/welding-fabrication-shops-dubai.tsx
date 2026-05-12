import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "welding-fabrication-shops",
  "industryName": "Welding & Fabrication Shops",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Welding & Fabrication Shops ERP Software in Dubai",
  "desc": "Purpose-built ERP for welding & fabrication shops based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Welding & Fabrication Shops operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For welding & fabrication shops based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Welding and fabrication shops here manage WPS / PQR / WPQ libraries, ASME and AWS stamp compliance, and customer flow-down clauses that change with every project award. Atlantis NDT ERP is configured for the welding & fabrication shops business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a welding & fabrication shops ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware welding & fabrication shops workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for welding & fabrication shops statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai customer flow-down library pre-loaded with ADNOC Distribution and ENOC Group weld-procedure requirements",
    "Stamp-compliance dashboard aligned to ADQCC and  MOIAT authorised-inspector frameworks"
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
    "A pressure-vessel fab shop in Dubai prepares an ASME 'U' joint review for ADNOC Distribution in under 4 hours — historically an 80-hour evidence-assembly exercise.",
    "A structural-steel fabricator in Dubai maintains live welder continuity across 120 AWS-qualified welders, preventing mid-job qualification lapses that previously caused weld rejections.",
    "A pipeline fab yard in Dubai flows ENOC Group customer clauses (revision-controlled) into internal procedures automatically — zero outdated WPS revisions reaching the field.",
    "A small Dubai fab shop wins DUBAL / Emirates Global Aluminium approved-vendor status using audit-ready evidence packs assembled by the system rather than the quality manager."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for welding & fabrication shops operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that welding & fabrication shops in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For welding & fabrication shops, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can welding & fabrication shops in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "How are WPS / PQR / WPQ records managed?",
      "The welding-procedure library stores each WPS with linked PQR(s) and supports change-control workflow. WPS revisions are linked to applicable joint design, base materials, filler metals, position, and qualification ranges per ASME Section IX QW-200. Welder qualification (WPQ) is tracked per ASME QW-300 with continuity log (3-month rolling) and renewal triggers."
    ],
    [
      "Does it support ASME 'U' / 'S' / 'PP' joint review preparation?",
      "Yes. The joint-review evidence package builder assembles WPS, PQR, WPQ continuity, calibration certificates, material certs, NDE records, hydrotest records, and personnel qualifications for each pressure-retaining item. The package is presented in the ASME-required structure with reviewer cross-reference. Typical preparation time drops from 80 hours to under 4 hours per pressure vessel."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_welding_fabrication_shops_dubai() { return <ErpIndustryCityPage {...data} />; }
