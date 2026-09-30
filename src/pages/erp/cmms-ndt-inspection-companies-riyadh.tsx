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
    "Example: an NDT inspection company in Riyadh working for clients such as Saudi Aramco (corporate HQ functions) and SABIC runs CMMS (Maintenance Management) in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: an NDT inspection company in Riyadh keeps client-specific quality requirements from Ma'aden as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: an NDT inspection company in Riyadh with crews on several Saudi Arabia project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later.",
    "Example: an NDT inspection company in Riyadh preparing for Saudi Aramco Technical Standards (SAEP-1112, SAEP-1119, SACS-002) or client audits pulls technician certifications, procedures and calibration certificates from one system instead of from shared drives."
  ],
  "faqs": [
    ["Is CMMS configured for NDT inspection companies operating in Riyadh?", "Yes. The CMMS module is pre-loaded with codes and operator flow-downs that Riyadh NDT inspection companies work with daily: Aramco SAEP-1112, SAEP-1119, SACS-002, API 510/570/653, ASME B31.3. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from Aramco, SABIC, Ma'aden, NEOM, SPARK — once your team uploads them."],
    ["Which Saudi regulators does CMMS align with?", "The compliance dashboard maps to SASO, NRRC, Saudi Accreditation Center (SAC), Ministry of Energy, GAMEP. Aramco's internal regulatory pillars (SAEP-1112, SAEP-1119, SACS-002) are also encoded as primary frameworks."],
    ["Can Riyadh NDT inspection companies integrate CMMS with Aramco APQS/VQIP?", "Yes. The platform supports direct evidence-pack export to Aramco APQS and VQIP. Aramco specification revisions automatically flag affected equipment-maintenance procedures."],
    ["What does CMMS cost for an NDT inspection company in Riyadh?", "CMMS is bundled inside the standard affordable, accessible Atlantis NDT ERP subscription. Invoicing is supported in SAR or USD with daily FX update."],
    ["Does CMMS support NRRC radiography source licensing?", "Yes. NRRC (Nuclear and Radiological Regulatory Commission) e-licensing integration, source-pit licensing, ALARA dose record management, radiographer-card tracking, and source-leak-test certificates are all integrated."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_cmms_ndt_inspection_companies_riyadh() { return <ErpTripleCrossPage {...data} />; }
