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
  "desc": "CMMS ERP module for NDT inspection companies in Delhi-NCR. Aligned to ASNT / ISO 9712 / ISNT, with operator flow-down for IOCL Mathura/Panipat, EIL, BHEL Haridwar and PESO / OISD / AERB compliance. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Delhi-NCR maintain field-NDT equipment fleets across IOCL Mathura (160,000 bpd), IOCL Panipat (300,000 bpd petrochemical complex), GAIL Vijaipur, BHEL Haridwar (3-hour drive), EIL-led EPC projects nationwide, and the NCR power-generation belt. Equipment ranges from UT thickness gauges and PAUT scanners to industrial radiography source pits (Ir-192, Co-60) requiring AERB SC/IR-1 licensing.",
  "introPara2": "Delhi NDT contractors operate across multi-state mobilization (UP for IOCL Mathura, Haryana for IOCL Panipat, Uttarakhand for BHEL Haridwar, nationwide for EIL EPC projects). CMMS for Delhi NDT contractors is the operational spine that tracks equipment calibration, source licensing, consumables, and the inter-state-mobilization paperwork that historically eats days of pre-deployment time.",
  "introPara3": "Configured for Delhi, the module pre-loads operator-specific maintenance requirements from IOCL, GAIL, EIL, BHEL, NTPC, compliance templates against API 510/570/653, IBR / IS 2825, OISD-141 / OISD-129, AERB SC/IR-1, BIS pressure-vessel codes, and the audit frameworks that PESO, OISD, AERB, BIS, CPCB and DPCC actually use.",
  "features": [
    "CMMS configured for Delhi-NCR's refining / midstream / EPC / power-equipment market",
    "NDT equipment fleet register with EIL contractor-portal export",
    "AERB SC/IR-1 radiography source licensing and ALARA dose tracking",
    "Multi-state mobilization roster automation (UP, Haryana, Uttarakhand, NCR)",
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
    "CMMS for Delhi-NCR NDT inspection companies tracked in spreadsheets — behind IOCL and EIL portal updates",
    "PESO Form XVI/XIV statutory submission preparation for inspection equipment takes 40+ hours per cycle",
    "Multi-state mobilization paperwork eats days of pre-deployment time for every project move",
    "EIL contractor-portal evidence-pack reformatting eats project margin"
  ],
  "useCases": [
    "A mid-size Delhi NDT inspection company deploys CMMS against IOCL Mathura and Panipat refinery contracts. Within 90 days the team reports 60–80% admin reduction and zero PESO audit findings.",
    "A Delhi NDT contractor integrates CMMS with EIL contractor-portal flow-down for EPC projects nationwide. Specification revisions automatically flag affected equipment-maintenance procedures.",
    "A growing Delhi-NCR NDT inspection company consolidates CMMS across IOCL, GAIL, EIL, BHEL projects. Multi-operator equipment-maintenance turnaround drops from 5 days to 24 hours.",
    "An audit-driven Delhi NDT inspection company uses CMMS to pass PESO, OISD, AERB cycle audits with zero findings — evidence packages assemble in 30 seconds."
  ],
  "faqs": [
    ["Is CMMS configured for NDT inspection companies operating in Delhi-NCR?", "Yes. The CMMS module is pre-loaded with codes and operator flow-downs that Delhi-NCR NDT inspection companies work with daily: API 510/570/653, IBR, IS 2825, OISD-141, OISD-129, AERB SC/IR-1, plus operator-specific quality clauses from IOCL Mathura, IOCL Panipat, GAIL, EIL, BHEL Haridwar, ONGC."],
    ["Which Delhi regulators does CMMS align with?", "The compliance dashboard maps to PESO, OISD, AERB, BIS, Central Pollution Control Board (CPCB), Delhi Pollution Control Committee (DPCC)."],
    ["Can Delhi NDT inspection companies integrate CMMS with operator-specific portals like IOCL / EIL?", "Yes. The platform supports vendor-portal flow with IOCL Mathura, IOCL Panipat, GAIL Vijaipur, ONGC, Engineers India Limited (EIL), and BHEL Haridwar."],
    ["What does CMMS cost for an NDT inspection company in Delhi?", "CMMS is bundled inside the standard regionally priced (contact us; approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing is supported in INR or USD with daily FX update."],
    ["Does CMMS support PESO Form XVI / XIV statutory submission for inspection equipment?", "Yes. PESO Form XVI and Form XIV — the statutory pressure-vessel inspection forms — are auto-generated from CMMS equipment records. Submission can be done electronically via the PESO online portal."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_cmms_ndt_inspection_companies_delhi() { return <ErpTripleCrossPage {...data} />; }
