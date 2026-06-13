import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "project-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "riyadh",
  "moduleName": "Project Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Riyadh",
  "countryName": "Saudi Arabia",
  "isoCountry": "SA",
  "lat": 24.7136,
  "lng": 46.6753,
  "title": "Project Management Software for NDT Inspection Companies in Riyadh",
  "desc": "Project Management ERP for NDT inspection companies in Riyadh — Aramco SAEP-1112 project gates, Vision 2030 mega-project workflows (NEOM, SPARK, Red Sea), Aramco APQS/VQIP integration. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Riyadh run Kingdom-wide projects across Aramco facilities (Eastern Province, Western Province), Vision 2030 mega-projects (NEOM in Tabuk, Red Sea Global on the Red Sea coast, Qiddiya in Riyadh, Diriyah Gate, King Salman Energy Park SPARK in the central region), and SABIC / Ma'aden petrochemical/mining inspection. Multi-region mobilization (Eastern, Western, Central, Northern) is a defining characteristic.",
  "introPara2": "Riyadh NDT contractors manage parallel project pipelines across Aramco-tier-1 contracts, Vision 2030 mega-project construction and commissioning, SABIC petrochemical turnarounds, Ma'aden mining inspection, and the cross-region mobilization paperwork that historically eats days of pre-deployment time. Project management is the operational spine that orchestrates Kingdom-wide deliverables.",
  "introPara3": "Configured for Riyadh, the module pre-loads Aramco SAEP-1112 project gates, Aramco APQS / VQIP vendor-portal integration, SACS-002 cybersecurity-aligned data residency, Vision 2030 mega-project workflow templates (NEOM, Red Sea, SPARK, Qiddiya, Diriyah), bilingual Arabic / English documentation, and the audit frameworks that Aramco, SASO, NRRC, Saudi Accreditation Center (SAC) actually use.",
  "features": [
    "Project management configured for Riyadh's Kingdom-wide multi-region inspection market",
    "Aramco SAEP-1112 / SAEP-1119 project gates",
    "Aramco APQS / VQIP vendor-portal project deliverable integration",
    "SACS-002 cybersecurity-aligned data residency",
    "Vision 2030 mega-project workflow templates (NEOM, Red Sea, SPARK, Qiddiya, Diriyah)",
    "Multi-region mobilization roster automation (Eastern, Western, NEOM, SPARK)",
    "ASNT / ISO 9712 / Aramco SAEP-1112 personnel-currency-driven assignment",
    "NRRC e-licensing per project (radiography source dispatch)",
    "Bilingual Arabic / English PDF project deliverable generation",
    "Multi-currency invoicing in SAR and USD with daily FX update",
    "Mobile app for KSA-based technicians (offline capable)",
    "Knowledge-base articles tuned to Aramco SAEP / NACE MR0175 / NRRC interpretation"
  ],
  "operators": ["Saudi Aramco (corporate HQ functions, Riyadh)", "SABIC", "Ma'aden", "NEOM", "Red Sea Global", "Qiddiya Investment Company", "Diriyah Gate Development Authority", "King Salman Energy Park (SPARK)"],
  "regulators": ["Saudi Aramco Technical Standards (SAEP-1112, SAEP-1119, SACS-002)", "SASO", "NRRC", "Saudi Accreditation Center (SAC)", "Ministry of Energy", "GAMEP", "Saudi Council of Engineers", "Royal Commission for Riyadh City (RCRC)"],
  "painPoints": [
    "Project Management for Riyadh NDT companies tracked in spreadsheets — always behind Aramco APQS/VQIP and Vision 2030 mega-project updates",
    "Multi-region mobilization paperwork (Eastern, Western, NEOM, SPARK) eats days per move",
    "Aramco SAEP-1112 personnel-currency-driven assignment done manually — staff utilization gaps",
    "Customer-format project deliverables require manual Arabic/English bilingual reformatting"
  ],
  "useCases": [
    "A mid-size Riyadh NDT inspection company deploys Project Management against Aramco corporate-procurement contracts and Vision 2030 mega-project bids. Multi-region pipeline visibility improves win-rate by 18%.",
    "A Riyadh NDT contractor runs parallel NEOM construction, SPARK commissioning and traditional Aramco turnaround projects with Aramco SAEP-1112 currency-driven assignment.",
    "A growing Riyadh NDT inspection company consolidates Project Management across NEOM, SPARK, Red Sea Project and Aramco / SABIC / Ma'aden projects. Multi-region audit-prep cut from 80 hours to 8.",
    "An audit-driven Riyadh NDT inspection company uses Project Management to pass Aramco SAEP-1112, SACS-002, NRRC and SAC ISO 17020 audits with zero findings."
  ],
  "faqs": [
    ["Is Project Management configured for NDT inspection companies operating in Riyadh?", "Yes. The Project Management module is pre-loaded with Aramco SAEP-1112 project gates, Aramco APQS/VQIP integration, SACS-002 cybersecurity-aligned data residency, Vision 2030 mega-project workflow templates, and multi-region mobilization automation."],
    ["Which Saudi regulators does Project Management align with?", "The compliance dashboard maps to SASO, NRRC, Saudi Accreditation Center (SAC), Ministry of Energy, GAMEP. Aramco's internal regulatory pillars (SAEP-1112, SAEP-1119, SACS-002) are also encoded as primary frameworks."],
    ["Can Riyadh NDT inspection companies integrate Project Management with Aramco APQS/VQIP?", "Yes. The platform supports direct project-deliverable evidence-pack export to Aramco APQS and VQIP. Aramco SAEP-1112 specification revisions automatically flag affected project procedures."],
    ["What does Project Management cost for an NDT inspection company in Riyadh?", "Project Management is bundled inside the standard affordable, accessible (contact us; approximately SAR 67,500) Atlantis NDT ERP subscription. Invoicing in SAR or USD. SACS-002 cybersecurity-aligned data residency is included where required."],
    ["Does Project Management support Vision 2030 mega-project workflows?", "Yes. NEOM, Red Sea Project, Qiddiya, Diriyah Gate, King Salman Energy Park (SPARK) each have specific quality / inspection / commissioning frameworks. Project workflow templates are pre-loaded with mega-project-specific scope tracking, contractor-qualification requirements, and bid-cycle awareness."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_project_management_ndt_inspection_companies_riyadh() { return <ErpTripleCrossPage {...data} />; }
