import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "crm",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "delhi",
  "moduleName": "Customer Relationship Management (CRM)",
  "industryName": "NDT Inspection Companies",
  "cityName": "Delhi",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 28.6139,
  "lng": 77.209,
  "title": "Customer Relationship Management (CRM) Software for NDT Inspection Companies in Delhi",
  "desc": "Aligned to ASNT / ISO 9712 / ISNT, with operator flow-down for IOCL Mathura, IOCL Panipat, EIL, BHEL Haridwar and PESO / OISD / AERB compliance support. Demo: info@atlantisndt.com.",
  "introPara1": "Indian Oil Corporation (IOCL), GAIL India, ONGC, Engineers India Limited (EIL) and the Ministry of Petroleum and Natural Gas are headquartered here. Major refineries served from Delhi: IOCL Mathura (160,000 bpd) and IOCL Panipat (300,000 bpd, IOCL's largest petrochemical complex).",
  "introPara2": "For a mid-size Delhi NDT contractor, CRM is the operational spine that determines audit outcomes, contract eligibility, and project margin.",
  "introPara3": "Configured for Delhi, the module pre-loads operator flow-down from IOCL, GAIL India, EIL, ONGC, BHEL, compliance templates against API 510/570/653, IBR / IS 2825, OISD-141 / OISD-129, AERB SC/IR-1, and the audit frameworks that PESO, OISD, AERB, BIS, the Central Pollution Control Board (CPCB) actually use. Bilingual Hindi / English document handling supports state-level documentation.",
  "features": [
    "Multi-method scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA)",
    "ASNT / ISO 9712 / ISNT parallel certification cross-mapping",
    "EIL contractor-portal evidence-pack export",
    "Operator-specific templates for IOCL Mathura, IOCL Panipat, EIL, GAIL, BHEL, ONGC",
    "PESO Form XVI/XIV statutory submission automation",
    "Delhi regulator compliance dashboard (PESO, OISD, AERB, BIS, CPCB)",
    "Bilingual Hindi / English document handling for state-level documentation",
    "Multi-currency invoicing in INR and USD with daily FX update",
    "Mobile app for India-based technicians (iOS + Android, offline capable)",
  ],
  "operators": [
    "IOCL Mathura Refinery",
    "IOCL Panipat Refinery and Petrochemical Complex",
    "GAIL India (Vijaipur, Pata)",
    "ONGC (Delhi HQ, KG-DWN supplier ecosystem)",
    "Engineers India Limited (EIL)",
    "BHEL Haridwar / Hardwar (power equipment)",
    "NTPC Dadri / Badarpur",
  ],
  "regulators": [
    "PESO (Petroleum and Explosives Safety Organisation)",
    "OISD (Oil Industry Safety Directorate)",
    "AERB (Atomic Energy Regulatory Board)",
    "BIS (Bureau of Indian Standards)",
    "Central Pollution Control Board (CPCB)",
    "Delhi Pollution Control Committee (DPCC)",
    "IBR (Indian Boiler Regulations)",
    "Ministry of Petroleum and Natural Gas"
  ],
  "painPoints": [
    "PESO Form XVI/XIV statutory submission preparation takes 40+ hours per cycle",
    "Operator flow-down from IOCL Mathura and Panipat updates monthly — internal CRM procedures lag by weeks",
    "EIL contractor-portal evidence-pack reformatting eats project margin on every submission"
  ],
  "useCases": [
    "Example: an NDT inspection company in Delhi working for clients such as IOCL Mathura Refinery and IOCL Panipat Refinery and Petrochemical Complex runs Customer Relationship Management (CRM) in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: an NDT inspection company in Delhi keeps client-specific quality requirements from GAIL India (Vijaipur, Pata) as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: an NDT inspection company in Delhi with crews on several India project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later."
  ],
  "faqs": [
    [
    ],
    [
      "Which Delhi regulators does CRM align with?",
      "The compliance dashboard maps to PESO, OISD, AERB, BIS, Central Pollution Control Board (CPCB), Delhi Pollution Control Committee (DPCC). Statutory inspection due-date reminders, document-format generation, and audit-ready evidence-pack assembly are built around these authorities."
    ],
    [
      "Can Delhi NDT inspection companies integrate CRM with operator-specific portals like IOCL / EIL?",
      "Yes. The platform supports vendor-portal flow with IOCL Mathura, IOCL Panipat, GAIL Vijaipur, ONGC, Engineers India Limited (EIL), and BHEL. Operator-specific quality clauses are imported as controlled documents; internal CRM procedures are cross-referenced; revision changes flag affected documents for review."
    ],
    [
      "What does CRM cost for an NDT inspection company in Delhi?",
      "CRM is bundled inside the standard Atlantis NDT ERP subscription — affordable, accessible and fully customizable, quote on request — there is no per-module licence fee. Invoicing is supported in INR or USD with daily FX update."
    ],
    [
      "Does CRM support PESO Form XVI / XIV statutory submission?",
      "Yes. PESO Form XVI and Form XIV — the statutory pressure-vessel inspection forms required under the Petroleum Act 1934 and Indian Boiler Regulations 1950 — are auto-generated from CRM opportunity / project records. Submission can be done electronically via the PESO online portal."
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_crm_ndt_inspection_companies_delhi() { return <ErpTripleCrossPage {...data} />; }
