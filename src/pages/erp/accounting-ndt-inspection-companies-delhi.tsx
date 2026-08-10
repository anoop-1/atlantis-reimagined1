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
  "desc": "Accounting ERP module for NDT inspection companies in Delhi-NCR — GST / TDS / Ind AS / Companies Act compliance, IOCL / EIL government-PSU invoicing, bilingual Hindi / English. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Delhi-NCR operate under Indian financial-reporting regulations and serve a mix of government-owned PSU (Public Sector Undertaking) customers — IOCL, GAIL, ONGC, EIL, BHEL, NTPC — each with specific government-PSU invoicing requirements, bid-and-tender financial bonds, performance bank guarantees, and statutory return obligations.",
  "introPara2": "Delhi NDT contractors manage multi-customer invoicing with government-PSU invoicing formats, GST e-invoice with IRN, TDS calculation per Section 194C / 194J / 194Q (with PSU-specific 2% TDS rates), GSTR statutory returns, EIL contractor-portal evidence-pack export, and bilingual Hindi / English statutory documentation. Atlantis NDT ERP Accounting is purpose-configured for the multi-PSU Delhi-NCR market.",
  "introPara3": "Configured for Delhi, the module pre-loads government-PSU invoicing requirements from IOCL, GAIL, EIL, BHEL, NTPC, ITR Forms 3CD / 3CB / 6 statutory return automation, Companies Act 2013 compliance, government-tender financial-bond tracking, and the audit frameworks that the Income Tax Department, GSTN, Comptroller and Auditor General of India (CAG) actually use.",
  "features": [
    "Accounting configured for Delhi-NCR's PSU / EPC / power-equipment invoicing market",
    "GST e-invoice generation (IRN with QR code) integrated with GSTN",
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
    "Accounting for Delhi-NCR NDT companies done in Tally with manual government-PSU invoicing formats",
    "Government-tender financial-bond tracking (EMD, performance BG, retention) done in Excel",
    "TDS calculation per Section 194C / 194J done manually — 2% PSU TDS rate often missed",
    "Bilingual Hindi / English documentation for government authorities done by hand"
  ],
  "useCases": [
    "A mid-size Delhi NDT inspection company deploys Accounting against IOCL Mathura and Panipat refinery contracts. Automated government-PSU invoicing, eliminated 8 invoice-rejection cycles per quarter.",
    "A Delhi NDT contractor uses Accounting to handle multi-PSU invoicing — IOCL, GAIL, EIL, BHEL, NTPC government-PSU formats simultaneously without manual reformatting.",
    "A growing Delhi-NCR NDT inspection company consolidates Accounting across multi-PSU and EPC projects. Government-tender financial-bond tracking automated with EMD / BG / retention reconciliation.",
    "An audit-driven Delhi NDT inspection company uses Accounting to pass Income Tax assessment and CAG audit (for PSU work) with zero findings."
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
