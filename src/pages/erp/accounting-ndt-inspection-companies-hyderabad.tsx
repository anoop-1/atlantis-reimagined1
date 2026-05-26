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
    "GST e-invoice generation (IRN with QR code) integrated with GSTN",
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
    "A mid-size Hyderabad NDT inspection company deploys Accounting against BHEL and HPCL Visakh contracts. Automated GST e-invoice generation, eliminated 6 GSTR-1 reconciliation findings per quarter.",
    "A Hyderabad NDT contractor uses Accounting to handle multi-customer invoicing — BHEL government-format, HPCL purchase-order matching, BDL defence-format simultaneously without manual reformatting.",
    "A growing Hyderabad NDT inspection company consolidates Accounting across multi-customer projects. Companies Act 2013 statutory audit prep cut from 18 days to 3.",
    "An audit-driven Hyderabad NDT inspection company uses Accounting to pass Income Tax assessment with zero findings — Form 3CD / 3CB / 6 assemble in 30 seconds."
  ],
  "faqs": [
    ["Is Accounting configured for NDT inspection companies operating in Hyderabad?", "Yes. The Accounting module is pre-loaded with GST e-invoice generation, TDS Section 194C/194J calculation, Companies Act 2013 statutory audit + MCA filings, Ind AS compliance, and operator-specific invoicing for BHEL, HPCL Visakh, BDL, HAL, ECIL."],
    ["Which Hyderabad financial regulators does Accounting align with?", "The compliance dashboard maps to the Income Tax Department (Hyderabad office), GST Network (GSTN), Ministry of Corporate Affairs (MCA), Telangana Commercial Taxes Department, RBI."],
    ["Can Hyderabad NDT inspection companies integrate Accounting with operator-specific portals?", "Yes. The platform supports vendor-portal flow with BHEL Ramachandrapuram, HPCL Visakh, BDL, HAL Hyderabad, ECIL. Operator-specific invoicing formats are pre-loaded as templates."],
    ["What does Accounting cost for an NDT inspection company in Hyderabad?", "Accounting is bundled inside the standard regionally priced (contact us; approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing is supported in INR or USD with daily FX update."],
    ["Does Accounting support GST e-invoice generation?", "Yes. GST e-invoice generation with IRN (Invoice Reference Number) and QR code is integrated with the GSTN portal. e-Way bill generation for inter-state movement is automated. GSTR-1 / GSTR-3B / GSTR-9 statutory returns assemble in 30 seconds."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_accounting_ndt_inspection_companies_hyderabad() { return <ErpTripleCrossPage {...data} />; }
