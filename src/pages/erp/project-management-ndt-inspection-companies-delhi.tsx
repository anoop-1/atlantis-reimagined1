import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "project-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "delhi",
  "moduleName": "Project Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Delhi",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 28.6139,
  "lng": 77.209,
  "title": "Project Management Software for NDT Inspection Companies in Delhi",
  "desc": "Project Management ERP for NDT inspection companies in Delhi-NCR — refining / midstream / EPC project workflows, IOCL / EIL contractor-portal integration, multi-state mobilization. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Delhi-NCR run multi-PSU projects simultaneously — IOCL Mathura refinery turnarounds, IOCL Panipat petrochemical commissioning, GAIL Vijaipur gas-pipeline integrity, EIL-led EPC projects nationwide, BHEL Haridwar power-equipment manufacturing, and NCR power-generation belt. Multi-state mobilization (UP, Haryana, Uttarakhand, NCR, plus EIL EPC sites nationwide) is a defining characteristic.",
  "introPara2": "Delhi NDT contractors manage parallel project pipelines across IOCL turnaround scheduling, EIL EPC project gate management, BHEL manufacturing supplier project workflow, NTPC power-plant inspection, and multi-state mobilization paperwork. Project management for Delhi NDT contractors is the operational spine that orchestrates multi-PSU deliverables and inter-state crew logistics.",
  "introPara3": "Configured for Delhi, the module pre-loads operator-specific project gates from IOCL, GAIL, EIL, BHEL, NTPC, ONGC, compliance templates against API 510/570/653, IBR / IS 2825, OISD-141/129, AERB SC/IR-1, BIS pressure-vessel codes, bilingual Hindi / English documentation, and the audit frameworks that PESO, OISD, AERB, BIS, CPCB, DPCC actually use.",
  "features": [
    "Project management configured for Delhi-NCR's refining / midstream / EPC / power-equipment market",
    "IOCL Mathura / Panipat refinery turnaround project scheduling",
    "EIL EPC project gate management with contractor-portal evidence",
    "BHEL Haridwar power-equipment manufacturing supplier workflow",
    "Multi-state mobilization roster automation (UP, Haryana, Uttarakhand, NCR, all-India for EIL)",
    "ASNT / ISO 9712 / ISNT personnel-currency-driven assignment",
    "PESO Form XVI / XIV statutory submission per project",
    "Operator-specific project gates for IOCL, GAIL, EIL, BHEL, NTPC, ONGC",
    "Delhi regulator compliance dashboard (PESO, OISD, AERB, BIS, CPCB, DPCC)",
    "Bilingual Hindi / English document handling",
    "Multi-currency invoicing in INR and USD",
    "Mobile app for India-based technicians (offline capable)"
  ],
  "operators": ["IOCL Mathura Refinery", "IOCL Panipat Refinery", "GAIL India (Vijaipur)", "ONGC Delhi HQ", "Engineers India Limited (EIL)", "BHEL Haridwar", "NTPC Dadri / Badarpur", "Bharat Heavy Electricals (NCR base)"],
  "regulators": ["PESO", "OISD", "AERB", "BIS", "Central Pollution Control Board (CPCB)", "Delhi Pollution Control Committee (DPCC)", "IBR", "Ministry of Petroleum and Natural Gas"],
  "painPoints": [
    "Project Management for Delhi-NCR NDT companies tracked in spreadsheets — multi-PSU project gates managed in separate Excel files",
    "Multi-state mobilization paperwork (UP, Haryana, Uttarakhand, all-India for EIL) eats days of pre-deployment time",
    "EIL contractor-portal evidence-pack reformatting eats project margin",
    "Audit-prep takes 80+ hours per cycle for multi-PSU customer audits"
  ],
  "useCases": [
    "A mid-size Delhi NDT inspection company deploys Project Management against IOCL Mathura and Panipat refinery contracts. Multi-PSU pipeline visibility improves win-rate by 18%.",
    "A Delhi NDT contractor integrates Project Management with EIL contractor-portal flow-down for EPC projects nationwide. Specification revisions automatically flag affected project deliverables.",
    "A growing Delhi-NCR NDT inspection company consolidates Project Management across IOCL, GAIL, EIL, BHEL, NTPC projects. Audit-prep cut from 80 hours to 8.",
    "An audit-driven Delhi NDT inspection company uses Project Management to pass PESO, OISD, AERB cycle audits with zero findings."
  ],
  "faqs": [
    ["Is Project Management configured for NDT inspection companies operating in Delhi-NCR?", "Yes. The Project Management module is pre-loaded with IOCL refinery turnaround scheduling, EIL EPC project gate management, BHEL manufacturing supplier workflow, multi-state mobilization automation, and cross-code templates."],
    ["Which Delhi regulators does Project Management align with?", "The compliance dashboard maps to PESO, OISD, AERB, BIS, Central Pollution Control Board (CPCB), Delhi Pollution Control Committee (DPCC)."],
    ["Can Delhi NDT inspection companies integrate Project Management with EIL contractor portal?", "Yes. The platform supports vendor-portal flow with IOCL, GAIL, ONGC, Engineers India Limited (EIL), BHEL Haridwar, NTPC. EIL EPC project deliverables are auto-formatted."],
    ["What does Project Management cost for an NDT inspection company in Delhi?", "Project Management is bundled inside the standard Atlantis NDT ERP subscription — affordable, accessible and fully customizable, quote on request. Invoicing in INR or USD."],
    ["Does Project Management support multi-state mobilization automation?", "Yes. Multi-state mobilization (UP, Haryana, Uttarakhand, NCR, all-India for EIL) is automated with state-specific GST handling, e-way bill generation, inter-state crew-rotation paperwork, and consumable chain-of-custody across state borders."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_project_management_ndt_inspection_companies_delhi() { return <ErpTripleCrossPage {...data} />; }
