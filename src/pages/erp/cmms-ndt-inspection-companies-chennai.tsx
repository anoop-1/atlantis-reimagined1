import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "cmms",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "chennai",
  "moduleName": "CMMS (Maintenance Management)",
  "industryName": "NDT Inspection Companies",
  "cityName": "Chennai",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 13.0827,
  "lng": 80.2707,
  "title": "CMMS (Maintenance Management) Software for NDT Inspection Companies in Chennai",
  "desc": "CMMS ERP module for NDT inspection companies in Chennai, Tamil Nadu. Aligned to ASNT / ISO 9712 / ISNT, with operator flow-down for CPCL Manali, ONGC, automotive OEMs and Kalpakkam nuclear supply chain. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Chennai operate across South India's automotive manufacturing belt, CPCL Manali refinery, Kamarajar Port heavy industrial zone, and the Kalpakkam nuclear complex. NDT equipment fleets work across automotive supplier qualification (Hyundai, BMW, Renault-Nissan, Daimler), refinery turnaround (CPCL Manali at 230,000 bpd), nuclear-grade supplier work for BARC Kalpakkam, and aerospace component inspection.",
  "introPara2": "Chennai NDT contractors maintain field-NDT equipment across multi-sector deployments — UT thickness gauges, PAUT scanners, RT source pits with AERB SC/IR-1 licensing, MT magnetic-particle benches for automotive supplier work, PT lines, and ECT instruments. CMMS for Chennai NDT contractors is the operational spine that tracks equipment calibration, consumables, radiography source licensing, and automotive customer Q/A audit cycles.",
  "introPara3": "Configured for Chennai, the module pre-loads operator-specific maintenance requirements from CPCL Manali, ONGC, Hyundai, BMW, BARC Kalpakkam, compliance templates against API 510/570/653, IBR / IS 2825, AERB SC/IR-1, AWS D1.1 (for automotive structural work), and the audit frameworks that PESO, BARC, AERB, DGCA and TNPCB actually use.",
  "features": [
    "CMMS configured for Chennai's auto / refining / nuclear / aerospace inspection market",
    "NDT equipment fleet register with automotive Q/A compliance",
    "AERB SC/IR-1 radiography source licensing and ALARA dose tracking",
    "Nuclear-grade calibration intervals for Kalpakkam supplier work",
    "Calibration interval scheduling per ISO 17025 / ISO 10012",
    "ASNT / ISO 9712 / ISNT parallel certification cross-mapping",
    "Operator-specific maintenance for CPCL, Hyundai, BMW, BARC Kalpakkam, ONGC",
    "Chennai regulator compliance dashboard (PESO, BARC, AERB, DGCA, TNPCB)",
    "Bilingual Tamil / English document handling",
    "Multi-currency invoicing in INR and USD",
    "Mobile app for India-based technicians (offline capable)",
    "Knowledge-base articles tuned to automotive Q/A, OISD-141 and BARC nuclear inspection interpretation"
  ],
  "operators": ["CPCL Manali refinery", "ONGC eastern offshore", "Hyundai Sriperumbudur", "BMW Chennai", "Renault-Nissan", "Daimler India CV", "BARC Kalpakkam", "Royal Enfield Chennai"],
  "regulators": ["PESO", "BARC", "AERB", "DGCA", "Tamil Nadu Pollution Control Board (TNPCB)", "ISNT", "IBR", "CSWIP / PCN"],
  "painPoints": [
    "CMMS for Chennai NDT companies tracked in spreadsheets — behind CPCL Manali and automotive OEM updates",
    "AERB radiography licensing for Kalpakkam supplier work done manually — costly audit findings",
    "Automotive Q/A audit cycles (Hyundai, BMW, Renault-Nissan, Daimler) tracked in 6 different Excel sheets",
    "Customer-format maintenance records require manual reformatting on every submission"
  ],
  "useCases": [
    "A Chennai NDT inspection company deploys CMMS against CPCL Manali and Hyundai contracts. Within 90 days the team reports 60–80% admin reduction and zero PESO audit findings.",
    "A Chennai NDT contractor uses CMMS to track AERB licensing for Kalpakkam supplier work and BARC dose records — eliminated the recurring 'expired radiographer-card' finding.",
    "A growing Chennai NDT inspection company consolidates CMMS across automotive, refining and nuclear projects. Multi-sector equipment-maintenance turnaround drops from 5 days to 24 hours.",
    "An audit-driven Chennai NDT inspection company uses CMMS to pass PESO, AERB, BARC, DGCA cycle audits with zero findings."
  ],
  "faqs": [
    ["Is CMMS configured for NDT inspection companies operating in Chennai?", "Yes. The CMMS module is pre-loaded with codes and operator flow-downs that Chennai NDT inspection companies work with daily: API 510/570/653, IBR, IS 2825, AERB SC/IR-1, automotive Q/A frameworks (Hyundai, BMW, Renault-Nissan, Daimler), plus operator-specific quality clauses from CPCL Manali, ONGC, BARC Kalpakkam."],
    ["Which Chennai regulators does CMMS align with?", "The compliance dashboard maps to PESO, BARC, AERB, DGCA, Tamil Nadu Pollution Control Board (TNPCB). The AERB Chennai office specifically covers Kalpakkam nuclear inspection authorizations."],
    ["Can Chennai NDT inspection companies integrate CMMS with automotive OEM portals?", "Yes. The platform supports vendor-portal flow with Hyundai, BMW India, Renault-Nissan, Daimler India and the major automotive supplier-Q/A systems."],
    ["What does CMMS cost for an NDT inspection company in Chennai?", "CMMS is bundled inside the standard $18,000 / year (approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing is supported in INR or USD with daily FX update."],
    ["Does CMMS support nuclear-grade BARC / AERB calibration intervals for Kalpakkam supplier work?", "Yes. Nuclear-grade calibration intervals per BARC / AERB SC/IR-1 are tracked alongside generic ISO 17025 / ISO 10012 intervals for non-nuclear work."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_cmms_ndt_inspection_companies_chennai() { return <ErpTripleCrossPage {...data} />; }
