import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "accounting",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "delhi",
  "moduleName": "Accounting & Finance",
  "industryName": "NDT Inspection Companies",
  "cityName": "Delhi",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 28.6139,
  "lng": 77.209,
  "title": "Accounting & Finance Software for NDT Inspection Companies in Delhi",
  "desc": "Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Delhi-NCR operate under Indian financial-reporting regulations and serve a mix of government-owned PSU (Public Sector Undertaking) customers — IOCL, GAIL, ONGC, EIL, BHEL, NTPC — each with specific government-PSU invoicing requirements, bid-and-tender financial bonds, performance bank guarantees, and statutory return obligations.",
  "introPara2": "Delhi NDT contractors manage multi-customer invoicing with government-PSU invoicing formats, GST e-invoice with IRN, TDS calculation per Section 194C / 194J / 194Q (with PSU-specific 2% TDS rates), GSTR statutory returns, EIL contractor-portal evidence-pack export, and bilingual Hindi / English statutory documentation.",
  "introPara3": "Configured for Delhi, the module pre-loads government-PSU invoicing requirements from IOCL, GAIL, EIL, BHEL, NTPC, ITR Forms 3CD / 3CB / 6 statutory return automation, Companies Act 2013 compliance, government-tender financial-bond tracking, and the audit frameworks that the Income Tax Department, GSTN, Comptroller and Auditor General of India (CAG) actually use.",
  "features": [
    "Government-PSU invoicing formats (IOCL, GAIL, EIL, BHEL, NTPC, ONGC)",
    "GSTR-1 / GSTR-3B / GSTR-9 statutory return automation",
    "TDS calculation per Section 194C / 194J / 194Q with Form 26Q reporting",
    "PSU-specific 2% TDS rate handling",
    "Government-tender financial-bond tracking (EMD, performance BG, retention)",
    "Companies Act 2013 statutory audit + MCA filings",
    "Ind AS compliance",
    "Bilingual Hindi / English invoice formatting",
    "Multi-currency invoicing in INR and USD with daily FX update",
    "EIL contractor-portal evidence-pack export"
  ],
  "operators": ["IOCL Mathura Refinery", "IOCL Panipat Refinery", "GAIL India (Vijaipur)", "ONGC Delhi HQ", "Engineers India Limited (EIL)", "BHEL Haridwar", "NTPC Dadri / Badarpur", "Bharat Heavy Electricals (NCR base)"],
  "regulators": ["Income Tax Department (Delhi office)", "GST Network (GSTN)", "Ministry of Corporate Affairs (MCA)", "Comptroller and Auditor General of India (CAG)", "Delhi Commercial Taxes Department", "RBI", "SEBI", "PESO"],
  "painPoints": [
    "Government-tender financial-bond tracking (EMD, performance BG, retention) done in Excel",
    "TDS calculation per Section 194C / 194J done manually — 2% PSU TDS rate often missed",
    "Bilingual Hindi / English documentation for government authorities done by hand"
  ],
  "useCases": [
    "Example: an NDT inspection company in Delhi working for clients such as IOCL Mathura Refinery and IOCL Panipat Refinery runs Accounting & Finance in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: an NDT inspection company in Delhi keeps client-specific quality requirements from GAIL India (Vijaipur) as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: an NDT inspection company in Delhi with crews on several India project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later."
  ],
  "faqs": [
    ["Is Accounting configured for NDT inspection companies operating in Delhi-NCR?", "Yes. The Accounting module is pre-loaded with government-PSU invoicing formats (IOCL, GAIL, EIL, BHEL, NTPC, ONGC), GST e-invoice generation, TDS calculation, Companies Act 2013 compliance, and government-tender financial-bond tracking."],
    ["Which Delhi financial regulators does Accounting align with?", "The compliance dashboard maps to the Income Tax Department (Delhi office), GST Network (GSTN), Ministry of Corporate Affairs (MCA), Comptroller and Auditor General of India (CAG, for PSU work)."],
    ["Can Delhi NDT inspection companies integrate Accounting with EIL contractor portal?", "Yes. The platform supports vendor-portal flow with IOCL, GAIL, ONGC, Engineers India Limited (EIL), BHEL Haridwar, NTPC. EIL contractor-portal evidence-pack export is automated."],
    ["What does Accounting cost for an NDT inspection company in Delhi?", "Accounting is bundled inside the standard Atlantis NDT ERP subscription — affordable, accessible and fully customizable, quote on request. Invoicing is supported in INR or USD with daily FX update."],
    ["Does Accounting handle government-tender financial bonds?", "Yes. EMD (Earnest Money Deposit), performance bank guarantee (BG), retention money — common in government-PSU tenders — are tracked with lifecycle management, validity-period alerts, and bank-side reconciliation."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_accounting_ndt_inspection_companies_delhi() { return <ErpTripleCrossPage {...data} />; }
