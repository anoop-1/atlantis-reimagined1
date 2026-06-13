import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "cmms",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "riyadh",
  "moduleName": "CMMS (Maintenance Management)",
  "industryName": "NDT Inspection Companies",
  "cityName": "Riyadh",
  "countryName": "Saudi Arabia",
  "isoCountry": "SA",
  "lat": 24.7136,
  "lng": 46.6753,
  "title": "CMMS (Maintenance Management) Software for NDT Inspection Companies in Riyadh",
  "desc": "CMMS ERP module for NDT inspection companies in Riyadh, Saudi Arabia. Aligned to Aramco SAEP-1112 / ASNT / ISO 9712, with Aramco APQS/VQIP portal evidence and NRRC radiography source licensing. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies operating from Riyadh maintain NDT equipment fleets dispatched across Kingdom-wide projects — Aramco facilities in the Eastern Province (Dammam, Abqaiq, Jubail), Western Province (Yanbu, Rabigh), Vision 2030 mega-projects (NEOM, Red Sea, SPARK, Qiddiya). Equipment includes UT thickness gauges, PAUT scanners, AUT systems, industrial radiography source pits (Ir-192, Co-60, Se-75) requiring NRRC licensing, and field NDE consumables.",
  "introPara2": "Riyadh NDT contractors operate across multi-region mobilization (Eastern Province, Western Province, NEOM in Tabuk, SPARK in Riyadh itself). CMMS for Riyadh NDT contractors is the operational spine that tracks equipment calibration, NRRC source licensing, consumables, and the cross-region mobilization paperwork that historically eats days of pre-deployment time at Aramco APQS / VQIP qualification.",
  "introPara3": "Configured for Riyadh, the module pre-loads Aramco SAEP-1112 maintenance requirements, SACS-002 cybersecurity-aligned data residency, NRRC e-licensing integration, bilingual Arabic/English documentation, Vision 2030 mega-project workflow templates, and the audit frameworks that Aramco, SASO, NRRC, Saudi Accreditation Center (SAC) actually use.",
  "features": [
    "CMMS configured for Riyadh's Kingdom-wide multi-region inspection-services market",
    "Aramco SAEP-1112 / SAEP-1119 maintenance requirement integration",
    "Aramco APQS / VQIP vendor-portal evidence-pack export",
    "SACS-002 cybersecurity-aligned data residency",
    "NRRC e-licensing integration (Ir-192, Co-60, Se-75 source pits)",
    "Calibration interval scheduling per ISO 17025 / ISO 10012",
    "Multi-region mobilization roster automation (Eastern, Western, NEOM, SPARK)",
    "Vision 2030 mega-project workflow templates",
    "Bilingual Arabic / English PDF report generation",
    "Multi-currency invoicing in SAR and USD",
    "Mobile app for KSA-based technicians (offline capable)",
    "Knowledge-base articles tuned to Aramco SAEP / NACE MR0175 sour-service / NRRC interpretation"
  ],
  "operators": ["Saudi Aramco (corporate HQ functions)", "SABIC", "Ma'aden", "NEOM", "Red Sea Global", "Qiddiya Investment Company", "Diriyah Gate Development Authority", "King Salman Energy Park (SPARK)"],
  "regulators": ["Saudi Aramco Technical Standards (SAEP-1112, SAEP-1119, SACS-002)", "SASO", "NRRC", "Saudi Accreditation Center (SAC)", "Ministry of Energy", "GAMEP", "Saudi Council of Engineers", "Royal Commission for Riyadh City (RCRC)"],
  "painPoints": [
    "CMMS for Riyadh NDT companies tracked in spreadsheets — always behind Aramco APQS/VQIP and SAEP-1112 updates",
    "NRRC e-licensing for radiography sources done manually — costly cross-region mobilization delays",
    "Multi-region mobilization paperwork (Eastern, Western, NEOM, SPARK) eats days per move",
    "Customer-format equipment-maintenance records require manual Arabic/English bilingual reformatting"
  ],
  "useCases": [
    "A mid-size Riyadh NDT inspection company deploys CMMS against Aramco corporate-procurement contracts. Within 90 days the team reports 60–80% admin reduction and clears the next Aramco APQS surveillance with zero findings.",
    "A Riyadh NDT contractor uses CMMS to track NRRC radiography source licensing across Kingdom-wide mobilization — eliminated the recurring 'expired source-license at on-site arrival' incident that previously cost contracts.",
    "A growing Riyadh NDT inspection company consolidates CMMS across NEOM, SPARK, Red Sea Project and traditional Aramco / SABIC / Ma'aden projects. Multi-region equipment-maintenance turnaround drops from 5 days to 24 hours.",
    "An audit-driven Riyadh NDT inspection company uses CMMS to pass Aramco SAEP-1112, SACS-002, NRRC and SAC ISO 17020 audits with zero findings."
  ],
  "faqs": [
    ["Is CMMS configured for NDT inspection companies operating in Riyadh?", "Yes. The CMMS module is pre-loaded with codes and operator flow-downs that Riyadh NDT inspection companies work with daily: Aramco SAEP-1112, SAEP-1119, SACS-002, API 510/570/653, ASME B31.3, plus operator-specific quality clauses from Aramco, SABIC, Ma'aden, NEOM, SPARK."],
    ["Which Saudi regulators does CMMS align with?", "The compliance dashboard maps to SASO, NRRC, Saudi Accreditation Center (SAC), Ministry of Energy, GAMEP. Aramco's internal regulatory pillars (SAEP-1112, SAEP-1119, SACS-002) are also encoded as primary frameworks."],
    ["Can Riyadh NDT inspection companies integrate CMMS with Aramco APQS/VQIP?", "Yes. The platform supports direct evidence-pack export to Aramco APQS and VQIP. Aramco specification revisions automatically flag affected equipment-maintenance procedures."],
    ["What does CMMS cost for an NDT inspection company in Riyadh?", "CMMS is bundled inside the standard affordable, accessible (contact us; approximately SAR 67,500) Atlantis NDT ERP subscription. Invoicing is supported in SAR or USD with daily FX update."],
    ["Does CMMS support NRRC radiography source licensing?", "Yes. NRRC (Nuclear and Radiological Regulatory Commission) e-licensing integration, source-pit licensing, ALARA dose record management, radiographer-card tracking, and source-leak-test certificates are all integrated."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_cmms_ndt_inspection_companies_riyadh() { return <ErpTripleCrossPage {...data} />; }
