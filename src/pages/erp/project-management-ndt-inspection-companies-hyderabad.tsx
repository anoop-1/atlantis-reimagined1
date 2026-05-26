import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "project-management",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "hyderabad",
  "moduleName": "Project Management",
  "industryName": "NDT Inspection Companies",
  "cityName": "Hyderabad",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 17.385,
  "lng": 78.4867,
  "title": "Project Management Software for NDT Inspection Companies in Hyderabad",
  "desc": "Project Management ERP for NDT inspection companies in Hyderabad — multi-sector project gates, BHEL / HPCL Visakh / BDL / HAL aerospace project workflows, NAS 410 Rev 5 + ISNT parallel tracking. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Hyderabad run multi-sector projects simultaneously — BHEL heavy electrical inspection, HPCL Visakh refinery turnarounds (350 km east), BDL defence inspection, HAL Hyderabad aerospace inspection, ECIL nuclear inspection, and Genome Valley pharma equipment qualification. Each customer segment has distinct project gates, deliverable formats, and audit cycles.",
  "introPara2": "Hyderabad NDT contractors manage parallel project pipelines with different code-driven inspection cycles, customer Q/A audit calendars, and certification-currency-driven assignment rules. Project management for Hyderabad NDT contractors is the operational spine that orchestrates multi-sector deliverables, ISNT / ASNT / NAS 410 Rev 5 personnel-currency-driven assignment, and audit-ready evidence accumulation.",
  "introPara3": "Configured for Hyderabad, the module pre-loads operator-specific project gates from BHEL, HPCL Visakh, BDL, HAL, ECIL, compliance templates against IBR / IS 2825 / NAS 410 Rev 5 / BARC nuclear-grade qualification, bilingual Telugu / English documentation, and the audit frameworks that PESO, BARC, AERB, DGCA, TSPCB and CDSCO actually use.",
  "features": [
    "Project management configured for Hyderabad's multi-sector inspection-services market",
    "Multi-sector project pipelines (heavy electrical, refining, defence, aerospace, nuclear, pharma)",
    "Operator-specific project gates for BHEL, HPCL Visakh, BDL, HAL, ECIL",
    "NAS 410 Rev 5 + ISNT + ASNT parallel certification cross-mapping",
    "BARC nuclear-grade qualification tracking for ECIL supplier work",
    "Customer-specific audit-cycle integration (BHEL Q/A, HPCL OISD, BDL defence)",
    "Audit-ready PDF compliance package for any client / auditor in 30 seconds",
    "Field-data capture offline-capable for multi-state project sites",
    "Bilingual Telugu / English / Hindi document handling",
    "Multi-currency invoicing in INR and USD",
    "Mobile app for India-based technicians (offline capable)",
    "Knowledge-base articles tuned to multi-sector inspection codes in Hyderabad"
  ],
  "operators": ["BHEL Ramachandrapuram", "HPCL Visakh refinery", "Bharat Dynamics Ltd (BDL)", "HAL Hyderabad", "Electronics Corporation of India (ECIL)", "ISRO supplier ecosystem", "DRDO suppliers (DRDL)", "Dr Reddy's / Aurobindo / Divi's Laboratories"],
  "regulators": ["PESO", "BARC", "AERB", "DGCA", "Telangana State Pollution Control Board (TSPCB)", "CDSCO", "IBR", "ISNT"],
  "painPoints": [
    "Project Management for Hyderabad NDT companies tracked in spreadsheets — multi-sector project gates managed in separate Excel files",
    "Cross-sector personnel-currency-driven assignment done manually — staff utilization gaps",
    "Customer-format project deliverables for BHEL, HPCL, BDL, HAL require manual reformatting",
    "Audit-prep takes 80+ hours per cycle for multi-sector customer audits"
  ],
  "useCases": [
    "A mid-size Hyderabad NDT inspection company deploys Project Management against BHEL Ramachandrapuram and HPCL Visakh contracts. Multi-sector pipeline visibility improves win-rate by 18%.",
    "A Hyderabad NDT contractor runs parallel BDL defence projects and HAL aerospace projects with NAS 410 Rev 5 currency-driven assignment — eliminated 7 'wrong qualification on sensitive scope' incidents per year.",
    "A growing Hyderabad NDT inspection company consolidates Project Management across multi-customer projects. Audit-prep across BHEL, HPCL, BDL, HAL customer audits cut from 80 hours to 8.",
    "An audit-driven Hyderabad NDT inspection company uses Project Management to pass PESO, AERB, BARC, DGCA cycle audits with zero findings."
  ],
  "faqs": [
    ["Is Project Management configured for NDT inspection companies operating in Hyderabad?", "Yes. The Project Management module is pre-loaded with multi-sector project gates for BHEL, HPCL Visakh, BDL, HAL, ECIL, Dr Reddy's, plus the cross-code templates (IBR, IS 2825, NAS 410 Rev 5, BARC nuclear-grade) needed for the Hyderabad market."],
    ["Which Hyderabad regulators does Project Management align with?", "The compliance dashboard maps to PESO, BARC, AERB, DGCA, Telangana State Pollution Control Board (TSPCB), CDSCO. The unusually wide industrial mix in Hyderabad is reflected in cross-sector project templates."],
    ["Can Hyderabad NDT inspection companies integrate Project Management with operator-specific portals?", "Yes. The platform supports vendor-portal flow with BHEL Ramachandrapuram, HPCL Visakh, BDL, HAL Hyderabad, ECIL. Operator-specific project deliverables are auto-formatted."],
    ["What does Project Management cost for an NDT inspection company in Hyderabad?", "Project Management is bundled inside the standard regionally priced (contact us; approximately INR 15 lakh) Atlantis NDT ERP subscription. Invoicing in INR or USD."],
    ["Does Project Management handle NAS 410 Rev 5 personnel-currency-driven assignment?", "Yes. NAS 410 Rev 5 aerospace NDT personnel currency is tracked per technician with vision-test currency, OJT hours, and customer-specific written-practice endorsements. Tasks requiring specific endorsement (HAL written practice, BDL ISRO supplier written practice) are routed only to qualified technicians."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_project_management_ndt_inspection_companies_hyderabad() { return <ErpTripleCrossPage {...data} />; }
