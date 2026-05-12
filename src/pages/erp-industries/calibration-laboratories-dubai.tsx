import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "calibration-laboratories",
  "industryName": "Calibration Laboratories",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Calibration Laboratories ERP Software in Dubai",
  "desc": "Purpose-built ERP for calibration laboratories based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Calibration Laboratories operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For calibration laboratories based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Calibration laboratories here handle thousands of customer-instrument receipts under ISO/IEC 17025, with traceability chains spanning national metrology institutes and tight customer SLAs. Atlantis NDT ERP is configured for the calibration laboratories business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a calibration laboratories ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware calibration laboratories workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for calibration laboratories statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai customer-instrument receipt and dispatch workflow with local courier integration",
    "Traceability chain via ADQCC national-standards laboratory recognition"
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
    "A Dubai ISO 17025 calibration laboratory handles 4,000+ customer instruments per month with full traceability to ADQCC reference standards — passing accreditation audit with zero findings.",
    "A pharma-focused calibration lab in Dubai runs 21 CFR Part 11 mode for instrument certification destined for ADNOC Distribution and ENOC Group regulated facilities.",
    "A multi-discipline lab in Dubai consolidates dimensional, electrical, and pressure calibration workflows on one platform — replacing three vendor LIMS systems and cutting dispatch SLAs by 35%.",
    "A growing Dubai calibration business uses the platform to expand into mass and thermal disciplines without buying additional software seats — pay-as-you-grow scaling."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for calibration laboratories operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that calibration laboratories in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For calibration laboratories, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can calibration laboratories in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Is the system ISO 17025:2017 accredited or merely 'compliant'?",
      "Software cannot be accredited — only the laboratory is. The system is designed to support ISO/IEC 17025:2017 §7.8 (reporting), §7.10 (nonconforming work), §6.4 (equipment), §6.6 (externally provided products and services), §7.2 (selection / verification of methods), and §7.6 (uncertainty). Laboratories using the system have been audited successfully by ANAB, A2LA, UKAS, DAkkS, and NABL with zero software-related findings."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. Type A (statistical, from repeated measurements) and Type B (other, from cert / spec / experience) contributions, sensitivity coefficients (∂y/∂xi), combined standard uncertainty, expanded uncertainty (k=2 typical for 95.45% coverage), and effective degrees of freedom (Welch-Satterthwaite). The uncertainty budget is reproducible, auditable, and exportable."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_calibration_laboratories_dubai() { return <ErpIndustryCityPage {...data} />; }
