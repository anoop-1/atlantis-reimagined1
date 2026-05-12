import ErpIndustryCityPage, { ErpIndustryCityProps } from '@/components/ErpIndustryCityPage';
const data: ErpIndustryCityProps = {
  "industrySlug": "metrology-laboratories",
  "industryName": "Metrology Laboratories",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "countryName": "UAE",
  "isoCountry": "AE",
  "lat": 25.2048,
  "lng": 55.2708,
  "title": "Metrology Laboratories ERP Software in Dubai",
  "desc": "Purpose-built ERP for metrology laboratories based in Dubai, UAE. Pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, operator flow-down for ADNOC Distribution and ENOC Group, and ADQCC /  MOIAT compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Metrology Laboratories operating in Dubai face a specific combination of local market structure, regulator framework, and operator-specific quality requirements that generic ERP systems cannot model. Dubai sits at the heart of the regional commercial and logistics hub for GCC oil and gas, hosting regional HQs for IOCs, EPCs, and inspection multinationals. The dominant industrial cluster — a Jebel Ali free zone industrial hub connected to ADNOC Distribution, ENOC, DUBAL, and northern emirate fabricators — sets the rhythm: winter project peak (Oct–Apr) with major shutdowns scheduled before Ramadan. For metrology laboratories based here, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ.",
  "introPara2": "Metrology laboratories here manage multi-discipline uncertainty budgets, proficiency testing, customer-asset chain-of-custody, and ISO 17025 accreditation-audit readiness across dimensional, electrical, pressure, mass, and thermal disciplines. Atlantis NDT ERP is configured for the metrology laboratories business as it actually operates in Dubai: pre-loaded with ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII compliance templates; mapped to operator-specific flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water); and aligned with the regulators that audit your work — ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. The result: a metrology laboratories ERP that knows the Dubai market, not a generic accounting system bolted to a spreadsheet of inspection records.",
  "features": [
    "the lower Gulf and northern emirates-aware metrology laboratories workflow with pre-loaded ADQCC inspection schemes and ADNOC ACS-01 (vendor) compliance templates",
    "Operator-specific quality flow-down clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium pre-mapped",
    "Personnel qualification matrix supporting ADQCC and  MOIAT requirements",
    "Audit-ready evidence-pack generation for metrology laboratories statutory inspections",
    "Mobile field-data capture (offline capable) for Dubai project sites",
    "Multi-language reporting with UAE-required document formats",
    "Dubai customer dispatch SLA tracking with local courier and customs-clearance handling",
    "Discipline-specific uncertainty templates aligned to ADQCC accreditation scope"
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
    "A multi-discipline metrology lab in Dubai accredited to ISO 17025 manages uncertainty budgets across dimensional, electrical, pressure, mass, and thermal disciplines on one platform.",
    "A Dubai metrology lab supports ADNOC Distribution and ENOC Group customer-specific decision rules (k=2, k=3, customer-defined) with consistent application across all certificates.",
    "An Dubai metrology business runs proficiency-testing programs (z-score / En-number) and tracks corrective action when results are unsatisfactory — feeding the management review.",
    "A growing Dubai calibration / metrology service expands into a new discipline by enabling the relevant module rather than buying separate software — pay-only-for-used model."
  ],
  "faqs": [
    [
      "Is Atlantis NDT ERP configured for metrology laboratories operating in Dubai?",
      "Yes. The platform is pre-loaded with the codes and operator flow-downs that metrology laboratories in Dubai actually work with: ADQCC inspection schemes, ADNOC ACS-01 (vendor), ASME Section V / VIII, API 510 / 570 / 653, plus operator-specific quality clauses from ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Configuration is done — your team is productive on day one, not after six months of customisation."
    ],
    [
      "Which Dubai regulators and authorities does the system align with?",
      "The compliance dashboard maps to ADQCC, MOIAT, ADM, UAE FANR (radiation), Dubai Civil Defence, DEWA HSE. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For metrology laboratories, that means Dubai inspection businesses serve both downstream and northern-emirate fabrication while staffing project mobilisations into KSA, Oman, and Iraq from Dubai HQ."
    ],
    [
      "Can metrology laboratories in Dubai integrate with operator-specific portals such as ENOC?",
      "Yes. The system supports vendor-portal flow with major UAE operators including ADNOC Distribution, ENOC Group, DUBAL / Emirates Global Aluminium, DEWA (Dubai Electricity & Water). Operator-specific quality clauses are imported as controlled documents; internal procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs (ENOC approved-vendor systems for example), bi-directional sync keeps customer and internal records aligned."
    ],
    [
      "Does it support uncertainty budgets across all disciplines?",
      "Yes. Uncertainty templates exist for dimensional (gauge blocks, CMM, micrometers), electrical (DMM, calibrator, oscilloscope), pressure (digital indicator, deadweight tester, hydraulic / pneumatic), mass (analytical balance, weights), thermal (RTD, thermocouple, IR thermometer), force (load cell, force standard), flow (gas / liquid flow rig), and optical (luminance meter, photometer). Custom uncertainty models can be authored."
    ],
    [
      "Can decision rules be customer-specific (e.g., k=2, k=3, or customer-defined)?",
      "Yes. Decision rules per ISO 17025 §7.8.6 and ILAC G8 are configured per customer / customer-asset-class. Customers can specify simple acceptance (no guard band), shared-risk, guarded acceptance / rejection at chosen probability of false accept / reject, or customer-specific risk-of-false-accept value."
    ]
  ]
} as ErpIndustryCityProps;
export default function ErpIndCity_metrology_laboratories_dubai() { return <ErpIndustryCityPage {...data} />; }
