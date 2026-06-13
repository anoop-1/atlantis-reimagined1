import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "accounting",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "chennai",
  "moduleName": "Accounting & Finance",
  "industryName": "NDT Inspection Companies",
  "cityName": "Chennai",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 13.0827,
  "lng": 80.2707,
  "title": "Accounting & Finance Software for NDT Inspection Companies in Chennai",
  "desc": "Accounting ERP module for NDT inspection companies in Chennai — GST / TDS / Ind AS / Companies Act compliance, automotive OEM invoicing integration, bilingual Tamil / English. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Chennai operate under Indian financial-reporting regulations alongside automotive OEM (Hyundai, BMW, Renault-Nissan, Daimler) supplier-invoicing requirements, CPCL Manali refinery purchase-order matching, BARC Kalpakkam government-defence invoicing, and Tamil Nadu state-specific compliance.",
  "introPara2": "Chennai NDT contractors manage multi-customer invoicing with automotive-OEM PPAP (Production Part Approval Process) financial-package generation, GST e-invoice with IRN, TDS calculation per Section 194C / 194J, GSTR statutory returns, and bilingual Tamil / English statutory documentation. Atlantis NDT ERP Accounting is purpose-configured for the Chennai multi-sector market.",
  "introPara3": "Configured for Chennai, the module pre-loads operator-specific invoicing requirements from CPCL Manali, Hyundai, BMW, BARC Kalpakkam, ITR Forms 3CD / 3CB / 6 statutory return automation, Companies Act 2013 compliance, and the audit frameworks that the Income Tax Department, GSTN, Tamil Nadu Commercial Taxes actually use.",
  "features": [
    "Accounting configured for Chennai's auto / refining / nuclear / aerospace invoicing market",
    "GST e-invoice generation (IRN with QR code) integrated with GSTN",
    "GSTR-1 / GSTR-3B / GSTR-9 statutory return automation",
    "TDS calculation per Section 194C / 194J / 194Q with Form 26Q reporting",
    "Companies Act 2013 statutory audit + MCA filings (AOC-4, MGT-7)",
    "Ind AS compliance",
    "Automotive OEM PPAP financial-package generation",
    "Operator-specific invoicing for CPCL Manali, Hyundai, BMW, Renault-Nissan, Daimler, BARC Kalpakkam",
    "Bilingual Tamil / English invoice formatting",
    "Multi-currency invoicing in INR and USD with daily FX update",
    "TDS Form 16 / 16A generation for vendors",
    "Mobile app for India-based finance staff"
  ],
  "operators": ["CPCL Manali refinery", "ONGC eastern offshore", "Hyundai Sriperumbudur", "BMW Chennai", "Renault-Nissan", "Daimler India CV", "BARC Kalpakkam", "Royal Enfield Chennai"],
  "regulators": ["Income Tax Department (Chennai office)", "GST Network (GSTN)", "Ministry of Corporate Affairs (MCA)", "Tamil Nadu Commercial Taxes Department", "RBI", "SEBI", "Tamil Nadu Pollution Control Board (TNPCB)", "AERB"],
  "painPoints": [
    "Accounting for Chennai NDT companies done in Tally with manual GST e-invoice generation",
    "Automotive OEM PPAP financial packages built manually for each Hyundai / BMW / Renault-Nissan / Daimler submission",
    "TDS calculation per Section 194C / 194J done manually",
    "Bilingual Tamil / English documentation for state authorities done by hand"
  ],
  "useCases": [
    "A mid-size Chennai NDT inspection company deploys Accounting against CPCL Manali and Hyundai Sriperumbudur contracts. Automated GST e-invoice generation, eliminated 6 GSTR-1 reconciliation findings per quarter.",
    "A Chennai NDT contractor uses Accounting to handle multi-OEM invoicing — Hyundai PPAP-format, BMW supplier-format, BARC government-format simultaneously without manual reformatting.",
    "A growing Chennai NDT inspection company consolidates Accounting across automotive, refining, nuclear projects. Companies Act 2013 statutory audit prep cut from 18 days to 3.",
    "An audit-driven Chennai NDT inspection company uses Accounting to pass Income Tax assessment with zero findings."
  ],
  "faqs": [
    ["Is Accounting configured for NDT inspection companies operating in Chennai?", "Yes. The Accounting module is pre-loaded with GST e-invoice generation, TDS calculation, Companies Act 2013 compliance, Ind AS, and operator-specific invoicing for CPCL Manali, automotive OEMs (Hyundai, BMW, Renault-Nissan, Daimler), and BARC Kalpakkam."],
    ["Which Chennai financial regulators does Accounting align with?", "The compliance dashboard maps to the Income Tax Department (Chennai office), GST Network (GSTN), Ministry of Corporate Affairs (MCA), Tamil Nadu Commercial Taxes Department, RBI, SEBI."],
    ["Can Chennai NDT inspection companies integrate Accounting with automotive OEM portals?", "Yes. The platform supports vendor-portal flow with Hyundai, BMW India, Renault-Nissan, Daimler India. Automotive-OEM PPAP financial-package templates are pre-loaded."],
    ["What does Accounting cost for an NDT inspection company in Chennai?", "Accounting is bundled inside the standard affordable, accessible (contact us; approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing is supported in INR or USD with daily FX update."],
    ["Does Accounting support automotive OEM PPAP financial packages?", "Yes. PPAP (Production Part Approval Process) financial-package generation — required by every automotive OEM supplier — is automated for Hyundai, BMW, Renault-Nissan, Daimler, and standard automotive-industry PPAP Level 3 / Level 5 submissions."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_accounting_ndt_inspection_companies_chennai() { return <ErpTripleCrossPage {...data} />; }
