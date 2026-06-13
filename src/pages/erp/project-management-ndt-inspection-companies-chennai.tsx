import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "project-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "chennai",
  "moduleName": "Project Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Chennai",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 13.0827,
  "lng": 80.2707,
  "title": "Project Management Software for NDT Inspection Companies in Chennai",
  "desc": "Project Management ERP for NDT inspection companies in Chennai — auto / refining / nuclear / aerospace project workflows, automotive PPAP, BARC Kalpakkam supplier audits, CPCL Manali turnarounds. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Chennai run multi-sector projects simultaneously — automotive supplier qualification (Hyundai, BMW, Renault-Nissan, Daimler), CPCL Manali refinery turnarounds (230,000 bpd), Kalpakkam nuclear supplier work (FBTR, MAPS, PFBR), Kamarajar Port heavy industrial, and aerospace component inspection. Each customer segment has distinct project gates and audit cycles.",
  "introPara2": "Chennai NDT contractors manage parallel project pipelines across automotive PPAP (Production Part Approval Process), refinery turnaround scheduling, nuclear-grade BARC supplier audits, port-authority structural inspection, and aerospace customer audits. Project management for Chennai NDT contractors is the operational spine that orchestrates multi-sector deliverables.",
  "introPara3": "Configured for Chennai, the module pre-loads operator-specific project gates from CPCL Manali, automotive OEMs (Hyundai, BMW, Renault-Nissan, Daimler), BARC Kalpakkam, compliance templates against API 510/570/653, automotive Q/A, BARC nuclear-grade qualification, NAS 410 Rev 5 (aerospace), bilingual Tamil / English documentation, and the audit frameworks that PESO, BARC, AERB, DGCA and TNPCB actually use.",
  "features": [
    "Project management configured for Chennai's auto / refining / nuclear / aerospace market",
    "Automotive supplier PPAP project workflow (Hyundai, BMW, Renault-Nissan, Daimler)",
    "CPCL Manali refinery turnaround project scheduling",
    "Nuclear-grade BARC Kalpakkam supplier audit project workflow",
    "Multi-sector personnel-currency-driven assignment (ISNT / ASNT / NAS 410 Rev 5)",
    "Customer-specific audit-cycle integration",
    "Audit-ready PDF compliance package for any client / auditor in 30 seconds",
    "Field-data capture offline-capable for Chennai / Sriperumbudur / Kalpakkam sites",
    "Bilingual Tamil / English document handling",
    "Multi-currency invoicing in INR and USD",
    "Mobile app for India-based technicians (offline capable)",
    "Knowledge-base articles tuned to PPAP / OISD / BARC interpretation in Chennai"
  ],
  "operators": ["CPCL Manali refinery", "ONGC eastern offshore", "Hyundai Sriperumbudur", "BMW Chennai", "Renault-Nissan", "Daimler India CV", "BARC Kalpakkam", "Royal Enfield Chennai"],
  "regulators": ["PESO", "BARC", "AERB", "DGCA", "Tamil Nadu Pollution Control Board (TNPCB)", "ISNT", "IBR", "CSWIP / PCN"],
  "painPoints": [
    "Project Management for Chennai NDT companies tracked in spreadsheets — multi-sector project gates managed in separate Excel files",
    "Automotive PPAP audit cycles (Hyundai, BMW, Renault-Nissan, Daimler) tracked in 6 different Excel sheets",
    "Cross-sector personnel-currency-driven assignment done manually",
    "Customer-format project deliverables require manual reformatting per submission"
  ],
  "useCases": [
    "A mid-size Chennai NDT inspection company deploys Project Management against CPCL Manali and Hyundai Sriperumbudur contracts. Multi-sector pipeline visibility improves win-rate by 18%.",
    "A Chennai NDT contractor runs parallel automotive PPAP, refinery turnaround and BARC Kalpakkam nuclear projects with personnel-currency-driven assignment — eliminated 7 'wrong qualification on sensitive scope' incidents per year.",
    "A growing Chennai NDT inspection company consolidates Project Management across automotive, refining, nuclear projects. Audit-prep cut from 80 hours to 8.",
    "An audit-driven Chennai NDT inspection company uses Project Management to pass PESO, AERB, BARC, DGCA, automotive-OEM cycle audits with zero findings."
  ],
  "faqs": [
    ["Is Project Management configured for NDT inspection companies operating in Chennai?", "Yes. The Project Management module is pre-loaded with automotive PPAP project workflow, CPCL Manali refinery turnaround scheduling, BARC Kalpakkam nuclear-grade supplier audit workflow, and cross-code templates (API 510/570/653, automotive Q/A, BARC nuclear, NAS 410 Rev 5 aerospace)."],
    ["Which Chennai regulators does Project Management align with?", "The compliance dashboard maps to PESO, BARC, AERB, DGCA, Tamil Nadu Pollution Control Board (TNPCB). The AERB Chennai office specifically covers Kalpakkam nuclear inspection authorizations."],
    ["Can Chennai NDT inspection companies integrate Project Management with automotive OEM portals?", "Yes. The platform supports vendor-portal flow with Hyundai, BMW India, Renault-Nissan, Daimler India. Automotive-OEM PPAP project deliverables are auto-formatted."],
    ["What does Project Management cost for an NDT inspection company in Chennai?", "Project Management is bundled inside the standard affordable, accessible (contact us; approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing in INR or USD."],
    ["Does Project Management handle BARC nuclear-grade Kalpakkam supplier project gates?", "Yes. BARC nuclear-grade Kalpakkam (FBTR, MAPS, PFBR) supplier audit project workflow is loaded with nuclear-grade personnel qualification gates, ALARA dose project tracking, and AERB-specific deliverable formats."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_project_management_ndt_inspection_companies_chennai() { return <ErpTripleCrossPage {...data} />; }
