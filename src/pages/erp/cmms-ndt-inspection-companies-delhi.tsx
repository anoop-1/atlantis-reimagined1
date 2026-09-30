import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "cmms",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "delhi",
  "moduleName": "CMMS (Maintenance Management)",
  "industryName": "NDT Inspection Companies",
  "cityName": "Delhi",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 28.6139,
  "lng": 77.209,
  "title": "CMMS (Maintenance Management) Software for NDT Inspection Companies in Delhi",
  "desc": "Aligned to ASNT / ISO 9712 / ISNT, with operator flow-down for IOCL Mathura/Panipat, EIL, BHEL Haridwar and PESO / OISD / AERB compliance. Demo: info@atlantisndt.com.",
  "introPara1": "Equipment ranges from UT thickness gauges and PAUT scanners to industrial radiography source pits (Ir-192, Co-60) requiring AERB SC/IR-1 licensing.",
  "introPara2": "Delhi NDT contractors operate across multi-state mobilization (UP for IOCL Mathura, Haryana for IOCL Panipat, Uttarakhand for BHEL Haridwar, nationwide for EIL EPC projects). CMMS for Delhi NDT contractors is the operational spine that tracks equipment calibration, source licensing, consumables, and the inter-state-mobilization paperwork that historically eats days of pre-deployment time.",
  "introPara3": "Configured for Delhi, the module pre-loads operator-specific maintenance requirements from IOCL, GAIL, EIL, BHEL, NTPC, compliance templates against API 510/570/653, IBR / IS 2825, OISD-141 / OISD-129, AERB SC/IR-1, BIS pressure-vessel codes, and the audit frameworks that PESO, OISD, AERB, BIS, CPCB and DPCC actually use.",
  "features": [
    "NDT equipment fleet register with EIL contractor-portal export",
    "AERB SC/IR-1 radiography source licensing and ALARA dose tracking",
    "Calibration interval scheduling per ISO 17025 / ISO 10012",
    "ASNT / ISO 9712 / ISNT parallel certification cross-mapping",
    "PESO Form XVI / XIV statutory submission automation",
    "Operator-specific maintenance for IOCL Mathura, IOCL Panipat, GAIL, EIL, BHEL",
    "Delhi regulator compliance dashboard (PESO, OISD, AERB, BIS, CPCB, DPCC)",
    "Bilingual Hindi / English document handling",
    "Multi-currency invoicing in INR and USD",
    "Mobile app for India-based technicians (offline capable)"
  ],
  "operators": ["IOCL Mathura Refinery", "IOCL Panipat Refinery", "GAIL India (Vijaipur)", "ONGC Delhi HQ", "Engineers India Limited (EIL)", "BHEL Haridwar", "NTPC Dadri / Badarpur", "Bharat Heavy Electricals (NCR base)"],
  "regulators": ["PESO", "OISD", "AERB", "BIS", "Central Pollution Control Board (CPCB)", "Delhi Pollution Control Committee (DPCC)", "IBR", "Ministry of Petroleum and Natural Gas"],
  "painPoints": [
    "PESO Form XVI/XIV statutory submission preparation for inspection equipment takes 40+ hours per cycle",
    "Multi-state mobilization paperwork eats days of pre-deployment time for every project move",
    "EIL contractor-portal evidence-pack reformatting eats project margin"
  ],
  "useCases": [
    "Example: an NDT inspection company in Delhi working for clients such as IOCL Mathura Refinery and IOCL Panipat Refinery runs CMMS (Maintenance Management) in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: an NDT inspection company in Delhi keeps client-specific quality requirements from GAIL India (Vijaipur) as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: an NDT inspection company in Delhi with crews on several India project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later."
  ],
  "faqs": [
    ["Is CMMS configured for NDT inspection companies operating in Delhi-NCR?", "Yes. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from IOCL Mathura, IOCL Panipat, GAIL, EIL, BHEL Haridwar, ONGC — once your team uploads them."],
    ["Which Delhi regulators does CMMS align with?", "The compliance dashboard maps to PESO, OISD, AERB, BIS, Central Pollution Control Board (CPCB), Delhi Pollution Control Committee (DPCC)."],
    ["Can Delhi NDT inspection companies integrate CMMS with operator-specific portals like IOCL / EIL?", "Yes. The platform supports vendor-portal flow with IOCL Mathura, IOCL Panipat, GAIL Vijaipur, ONGC, Engineers India Limited (EIL), and BHEL Haridwar."],
    ["What does CMMS cost for an NDT inspection company in Delhi?", "CMMS is bundled inside the standard Atlantis NDT ERP subscription — affordable, accessible and fully customizable, quote on request. Invoicing is supported in INR or USD with daily FX update."],
    ["Does CMMS support PESO Form XVI / XIV statutory submission for inspection equipment?", "Yes. PESO Form XVI and Form XIV — the statutory pressure-vessel inspection forms — are auto-generated from CMMS equipment records. Submission can be done electronically via the PESO online portal."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_cmms_ndt_inspection_companies_delhi() { return <ErpTripleCrossPage {...data} />; }
