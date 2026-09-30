import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "accounting",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "hyderabad",
  "moduleName": "Accounting & Finance",
  "industryName": "NDT Inspection Companies",
  "cityName": "Hyderabad",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 17.385,
  "lng": 78.4867,
  "title": "Accounting & Finance Software for NDT Inspection Companies in Hyderabad",
  "desc": "Accounting ERP module for NDT inspection companies in Hyderabad — GST / TDS / Ind AS / Companies Act compliance, BHEL / HPCL Visakh / BDL invoicing integration, bilingual Telugu / English. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Hyderabad operate under Indian financial-reporting regulations — Companies Act 2013, Ind AS (Indian Accounting Standards converged with IFRS), GST (Goods and Services Tax under the GST Acts 2017), TDS (Tax Deducted at Source under Income Tax Act 1961), professional tax (Telangana state-level), and operator-specific invoicing requirements from BHEL, HPCL Visakh, BDL, HAL, ECIL, Dr Reddy's.",
  "introPara2": "Hyderabad NDT contractors manage multi-customer invoicing with GST e-invoice generation, TDS calculation per Section 194C / 194J, GSTR-1 / GSTR-3B / GSTR-9 statutory returns, operator-specific invoicing formats (BHEL purchase-order matching, HPCL invoice formatting, BDL government-format invoicing), and bilingual Telugu / English statutory documentation. Atlantis NDT ERP Accounting is purpose-configured for the multi-customer Hyderabad market.",
  "introPara3": "Configured for Hyderabad, the module pre-loads operator-specific invoicing requirements from BHEL Ramachandrapuram, HPCL Visakh, BDL, HAL, ECIL, ITR Forms 3CD / 3CB / 6 statutory return automation, Companies Act 2013 compliance (statutory audits, MCA filings), and the audit frameworks that the Income Tax Department, GST Network (GSTN), and Telangana state authorities actually use.",
  "features": [
    "Accounting configured for Hyderabad's multi-customer NDT inspection-services market",
    "GSTR-1 / GSTR-3B / GSTR-9 statutory return automation",
    "TDS calculation per Section 194C / 194J / 194Q with Form 26Q reporting",
    "Companies Act 2013 statutory audit + MCA filings (AOC-4, MGT-7)",
    "Ind AS compliance (converged with IFRS, mandatory for listed and large companies)",
    "Operator-specific invoicing for BHEL, HPCL Visakh, BDL, HAL, ECIL, Dr Reddy's",
    "Bilingual Telugu / English / Hindi invoice formatting",
    "Multi-currency invoicing in INR and USD with daily FX update",
    "TDS Form 16 / 16A generation for vendors",
    "ITR Forms 3CD / 3CB / 6 statutory return automation",
    "Mobile app for India-based finance staff (offline capable)"
  ],
  "operators": ["BHEL Ramachandrapuram", "HPCL Visakh refinery", "Bharat Dynamics Ltd (BDL)", "HAL Hyderabad", "Electronics Corporation of India (ECIL)", "ISRO supplier ecosystem", "DRDO suppliers (DRDL)", "Dr Reddy's / Aurobindo / Divi's Laboratories"],
  "regulators": ["Income Tax Department (Hyderabad office)", "GST Network (GSTN)", "Ministry of Corporate Affairs (MCA)", "Telangana Commercial Taxes Department", "RBI (Reserve Bank of India)", "SEBI (for listed)", "TRAI", "CDSCO"],
  "painPoints": [
    "Accounting for Hyderabad NDT companies done in Tally with manual GST e-invoice generation — costly errors and audit findings",
    "Operator-specific invoicing (BHEL, HPCL, BDL, HAL) maintained in separate Excel templates",
    "TDS calculation per Section 194C / 194J done manually — compliance findings repeat each cycle",
    "Bilingual Telugu / English documentation for state authorities done by hand"
  ],
  "useCases": [
    "Example: an NDT inspection company in Hyderabad working for clients such as BHEL Ramachandrapuram and HPCL Visakh refinery runs Accounting & Finance in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: an NDT inspection company in Hyderabad keeps client-specific quality requirements from Bharat Dynamics Ltd (BDL) as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: an NDT inspection company in Hyderabad with crews on several India project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later.",
    "Example: an NDT inspection company in Hyderabad preparing for Income Tax Department (Hyderabad office) or client audits pulls technician certifications, procedures and calibration certificates from one system instead of from shared drives."
  ],
  "faqs": [
    ["Is Accounting configured for NDT inspection companies operating in Hyderabad?", "Yes. The Accounting module is pre-loaded with GST e-invoice generation, TDS Section 194C/194J calculation, Companies Act 2013 statutory audit + MCA filings, Ind AS compliance, and operator-specific invoicing for BHEL, HPCL Visakh, BDL, HAL, ECIL."],
    ["Which Hyderabad financial regulators does Accounting align with?", "The compliance dashboard maps to the Income Tax Department (Hyderabad office), GST Network (GSTN), Ministry of Corporate Affairs (MCA), Telangana Commercial Taxes Department, RBI."],
    ["Can Hyderabad NDT inspection companies integrate Accounting with operator-specific portals?", "Yes. The platform supports vendor-portal flow with BHEL Ramachandrapuram, HPCL Visakh, BDL, HAL Hyderabad, ECIL. Operator-specific invoicing formats are pre-loaded as templates."],
    ["What does Accounting cost for an NDT inspection company in Hyderabad?", "Accounting is bundled inside the standard Atlantis NDT ERP subscription — affordable, accessible and fully customizable, quote on request. Invoicing is supported in INR or USD with daily FX update."],
    ["Does Accounting support GST e-invoice generation?", "Yes. GSTR-1 / GSTR-3B / GSTR-9 statutory returns assemble in 30 seconds."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_accounting_ndt_inspection_companies_hyderabad() { return <ErpTripleCrossPage {...data} />; }
