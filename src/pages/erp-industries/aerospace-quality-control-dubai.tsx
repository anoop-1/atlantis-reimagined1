import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "aerospace-quality-control",
  "industryName": "Aerospace Quality Control",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Aerospace Quality Control ERP Software in Dubai",
  "desc": "Purpose-built ERP for aerospace quality control based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Aerospace Quality Control operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For aerospace quality control based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Aerospace QC and MRO firms here track NAS-410 personnel qualification, AS9100D quality systems, and customer-specific specifications (Boeing, Airbus, OEM) with zero tolerance for documentation gaps. Atlantis NDT ERP is configured for the aerospace quality control business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a aerospace quality control ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware aerospace quality control workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for aerospace quality control statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai aerospace customer specification library — pre-loaded clauses from local primes and tier-1s",
    "Regulatory work-pack assembly for ADQCC and  MOIAT certification authorities"
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
    "A NAS-410 NDT shop in Dubai manages 35 ADNOC Distribution-approved aerospace NDT technicians with method-and-customer-specific qualification matrices — including periodic vision and proficiency tests.",
    "An MRO facility in Dubai runs AS9100D + FAA/EASA Part 145 + customer ENOC Group flow-down clauses on a single platform — IMS audits unify across all schemes.",
    "A composite-component inspection shop in Dubai integrates phased-array UT and shearography results with DUBAL / Emirates Global Aluminium customer specification compliance evidence per part number.",
    "A defence aerospace supplier in Dubai maintains AS9100D quality records and customer-specific FOD prevention compliance per AS9146 — daily dashboard visible across production areas."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for aerospace quality control operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that aerospace quality control in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For aerospace quality control, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can aerospace quality control in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it support NAS-410 personnel qualification?",
      "Yes. NAS-410 Rev 5 personnel qualification is native — training hours, experience, vision, examination, practical demonstration, periodic requalification are all tracked. The qualification matrix supports method, technique, and customer-specific qualifications (e.g., Boeing FPI Level II per D-590)."
    ],
    [
      "How are Boeing / Airbus / OEM customer quality clauses managed?",
      "Customer-specific quality flow-down per AS9100D §4.4. Boeing D6-82479, Airbus AITM, Bombardier ASTM, Embraer NE, Pratt & Whitney ASQR-01, GE S-1000 are imported as controlled customer documents. Internal procedures that implement customer requirements are cross-referenced; revision changes flag affected internal documents for review."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_aerospace_quality_control_dubai() { return <ErpIndustryCityPage {...data} />; }
