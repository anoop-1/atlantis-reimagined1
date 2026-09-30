import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "inventory-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "riyadh",
  "moduleName": "Inventory & Consumables Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Riyadh",
  "countryName": "Saudi Arabia",
  "isoCountry": "SA",
  "lat": 24.7136,
  "lng": 46.6753,
  "title": "Inventory & Consumables Management Software for NDT Inspection Companies in Riyadh",
  "desc": "Inventory ERP module for NDT inspection companies in Riyadh — NDE consumable lifecycle, Aramco SAEP-1107 approved consumables, NRRC radiography source register, multi-region Kingdom-wide mobilization. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Riyadh manage consumable inventories dispatched across Kingdom-wide projects — Aramco SAEP-1107 approved-consumable lists, Vision 2030 mega-projects (NEOM, Red Sea, SPARK, Qiddiya) with project-specific consumable requirements, SABIC and Ma'aden customer AVLs, and the NACE MR0175 sour-service consumable certification required for Eastern Province Aramco facilities.",
  "introPara2": "Riyadh NDT contractors must track consumable lot traceability per ASME Section V Article 6, Aramco SAEP-1107 approved-consumable lists, NRRC radiography source register, NACE MR0175 sour-service certification (typical for opportunity-crude Aramco operations), and SACS-002 cybersecurity-compliant data handling. Atlantis NDT ERP Inventory is purpose-configured for the Kingdom-wide multi-region market.",
  "introPara3": "Configured for Riyadh, the module pre-loads Aramco SAEP-1107 / SAEP-1112 / SAEP-1119 consumable requirements, SABIC AVL flow-down, NRRC e-licensing integration for radiography sources, NACE MR0175 sour-service consumable verification, bilingual Arabic/English documentation, and the audit frameworks that Aramco APQS/VQIP, SASO, NRRC, Saudi Accreditation Center (SAC) actually use.",
  "features": [
    "Inventory configured for Riyadh's Kingdom-wide multi-region consumable market",
    "Aramco SAEP-1107 approved-consumable list integration",
    "Aramco APQS / VQIP vendor-portal consumable-certificate evidence export",
    "SACS-002 cybersecurity-aligned data residency",
    "NRRC e-licensing integration for Ir-192, Co-60, Se-75 source pits",
    "NACE MR0175 sour-service consumable certification",
    "Shelf-life enforcement per ASME Section V Article 6 / ASTM E165 / ASTM E709",
    "Multi-region mobilization roster (Eastern, Western, NEOM, SPARK)",
    "Vendor-managed inventory (VMI) integration with major NDE suppliers",
    "Bilingual Arabic / English consumable documentation",
    "Multi-currency invoicing in SAR and USD with daily FX update",
    "Mobile app for KSA-based technicians (offline capable)"
  ],
  "operators": ["Saudi Aramco (corporate HQ functions, Riyadh)", "SABIC", "Ma'aden", "NEOM", "Red Sea Global", "Qiddiya Investment Company", "Diriyah Gate Development Authority", "King Salman Energy Park (SPARK)"],
  "regulators": ["Saudi Aramco Technical Standards (SAEP-1107, SAEP-1112, SAEP-1119, SACS-002)", "SASO", "NRRC", "Saudi Accreditation Center (SAC)", "Ministry of Energy", "GAMEP", "Saudi Council of Engineers", "Royal Commission for Riyadh City (RCRC)"],
  "painPoints": [
    "Inventory for Riyadh NDT companies tracked in spreadsheets — Aramco SAEP-1107 approved-consumable lists not always reflected",
    "NRRC e-licensing for radiography sources done manually — costly cross-region mobilization delays",
    "Multi-region mobilization paperwork (Eastern, Western, NEOM, SPARK) eats days per move",
    "Customer-format consumable certificates require manual Arabic/English bilingual reformatting"
  ],
  "useCases": [
    "Example: an NDT inspection company in Riyadh working for clients such as Saudi Aramco (corporate HQ functions, Riyadh) and SABIC runs Inventory & Consumables Management in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: an NDT inspection company in Riyadh keeps client-specific quality requirements from Ma'aden as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: an NDT inspection company in Riyadh with crews on several Saudi Arabia project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later.",
    "Example: an NDT inspection company in Riyadh preparing for Saudi Aramco Technical Standards (SAEP-1107, SAEP-1112, SAEP-1119, SACS-002) or client audits pulls technician certifications, procedures and calibration certificates from one system instead of from shared drives."
  ],
  "faqs": [
    ["Is Inventory configured for NDT inspection companies operating in Riyadh?", "Yes. The Inventory module is pre-loaded with Aramco SAEP-1107 approved-consumable lists, SAEP-1112 personnel qualifications linked to consumable use, NACE MR0175 sour-service certification, and NRRC e-licensing integration."],
    ["Which Saudi regulators does Inventory align with?", "The compliance dashboard maps to SASO, NRRC, Saudi Accreditation Center (SAC). Aramco's internal regulatory pillars (SAEP-1107, SAEP-1112, SAEP-1119, SACS-002) are also encoded as primary frameworks."],
    ["Can Riyadh NDT inspection companies integrate Inventory with Aramco APQS/VQIP?", "Yes. The platform supports direct consumable-certificate evidence-pack export to Aramco APQS and VQIP. Aramco SAEP-1107 specification revisions automatically flag affected consumable procurement procedures."],
    ["What does Inventory cost for an NDT inspection company in Riyadh?", "Inventory is bundled inside the standard affordable, accessible Atlantis NDT ERP subscription. Invoicing is supported in SAR or USD with daily FX update."],
    ["Does Inventory support NRRC radiography source licensing?", "Yes. NRRC (Nuclear and Radiological Regulatory Commission) e-licensing integration, source-pit licensing, ALARA dose record management, radiographer-card tracking, and source-leak-test certificates are all integrated."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_inventory_management_ndt_inspection_companies_riyadh() { return <ErpTripleCrossPage {...data} />; }
