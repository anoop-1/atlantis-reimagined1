import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "crm",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "chennai",
  "moduleName": "Customer Relationship Management (CRM)",
  "industryName": "NDT Inspection Companies",
  "cityName": "Chennai",
  "countryName": "India",
  "isoCountry": "IN",
  "lat": 13.0827,
  "lng": 80.2707,
  "title": "Customer Relationship Management (CRM) Software for NDT Inspection Companies in Chennai",
  "desc": "CRM ERP module for NDT inspection companies in Chennai, Tamil Nadu. Aligned to ASNT / ISO 9712 / ISNT, with operator flow-down for CPCL Manali, ONGC, automotive OEMs and Kalpakkam nuclear supply chain. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Chennai serve South India's automotive manufacturing belt, CPCL Manali refinery (230,000 bpd, IOCL subsidiary), the Kamarajar Port heavy-industrial zone, the Kalpakkam nuclear complex (FBTR, MAPS, PFBR), and growing aerospace operations. Major automotive plants — Hyundai Sriperumbudur, BMW Chennai, Renault-Nissan, Daimler India Commercial Vehicles, Royal Enfield — generate substantial NDT inspection workload alongside the refining and nuclear segments.",
  "introPara2": "Chennai inspection contractors run parallel ISNT, ASNT and DGCA / BARC qualification streams across automotive, refining, nuclear and aerospace customers. For a mid-size Chennai NDT contractor, CRM is the operational spine that determines audit outcomes, contract eligibility, and project margin. Atlantis NDT ERP's CRM is purpose-configured for the codes, operators and regulators that matter in Chennai.",
  "introPara3": "Bilingual Tamil / English document handling is built-in.",
  "features": [
    "CRM configured for Chennai's multi-sector inspection market (auto, refining, nuclear, aerospace, port)",
    "Multi-method scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA)",
    "ASNT / ISO 9712 / ISNT parallel certification cross-mapping",
    "Nuclear-grade BARC / AERB qualification tracking for Kalpakkam supplier work",
    "Automotive customer Q/A integration (Hyundai, BMW, Renault-Nissan, Daimler India)",
    "Operator-specific templates for CPCL Manali, ONGC, BARC Kalpakkam, automotive OEMs",
    "Chennai regulator compliance dashboard (PESO, BARC, AERB, DGCA, TNPCB)",
    "Field-data capture offline-capable for Chennai / Sriperumbudur / Kalpakkam sites",
    "Bilingual Tamil / English document handling for Tamil Nadu authorities",
    "Multi-currency invoicing in INR and USD with daily FX update",
    "Mobile app for India-based technicians (iOS + Android, offline capable)",
    "Knowledge-base articles tuned to IBR / OISD / AWS D1.1 (automotive) interpretation in Chennai"
  ],
  "operators": [
    "CPCL Manali refinery (IOCL subsidiary)",
    "ONGC eastern offshore operations",
    "Hyundai Sriperumbudur",
    "BMW Chennai",
    "Renault-Nissan Alliance Chennai",
    "Daimler India Commercial Vehicles",
    "Kalpakkam nuclear complex (FBTR, MAPS, PFBR)",
    "Royal Enfield Chennai"
  ],
  "regulators": [
    "PESO",
    "BARC",
    "AERB",
    "DGCA",
    "Tamil Nadu Pollution Control Board (TNPCB)",
    "ISNT",
    "IBR",
    "CSWIP / PCN (for international supplier work)"
  ],
  "painPoints": [
    "CRM for Chennai NDT inspection companies tracked in spreadsheets — always behind CPCL Manali and automotive OEM portal updates",
    "BARC Kalpakkam audit preparation for CRM workflows takes 80+ hours per cycle",
    "Operator flow-down from CPCL Manali, Hyundai and BARC updates monthly — internal procedures lag by weeks",
    "Automotive Q/A format reports for Hyundai, BMW, Renault-Nissan require manual reformatting on every submission"
  ],
  "useCases": [
    "Example: an NDT inspection company in Chennai working for clients such as CPCL Manali refinery (IOCL subsidiary) and ONGC eastern offshore operations runs Customer Relationship Management (CRM) in the same system as its technician certifications, procedures and job records, so information is entered once and used across the business.",
    "Example: an inspection contractor in Chennai keeps client-specific quality requirements from Hyundai Sriperumbudur as controlled procedures, and runs each revision through review and approval before crews work to it.",
    "Example: an NDT inspection company in Chennai with crews on several India project sites captures inspection data in the offline field app, which stores drafts and photos without signal and syncs them later.",
    "Example: an NDT inspection company in Chennai preparing for PESO or client audits pulls technician certifications, procedures and calibration certificates from one system instead of from shared drives."
  ],
  "faqs": [
    [
      "Is CRM configured for NDT inspection companies operating in Chennai?",
      "Yes. The CRM module is pre-loaded with codes and operator flow-downs that Chennai NDT inspection companies work with daily: API 510/570/653, IBR, IS 2825, AERB SC/IR-1, DGCA CAR Section 2. The procedure-library module also holds whichever operator-specific quality clauses your contracts require — such as those from CPCL Manali, ONGC, Hyundai, BMW, BARC Kalpakkam — once your team uploads them. The module is aligned to ASNT / ISO 9712 / ISNT simultaneously."
    ],
    [
      "Which Chennai regulators does CRM align with?",
      "The compliance dashboard maps to PESO, BARC, AERB, DGCA, Tamil Nadu Pollution Control Board (TNPCB). The AERB Chennai office specifically covers Kalpakkam nuclear inspection authorizations. Multi-sector compliance — auto, refining, nuclear, aerospace — is reflected in the CRM templates."
    ],
    [
      "Can Chennai NDT inspection companies integrate CRM with automotive OEM portals?",
      "Yes. The platform supports vendor-portal flow with Hyundai, BMW India, Renault-Nissan, Daimler India and the major automotive supplier-Q/A systems. Operator-specific quality clauses are imported as controlled documents; internal CRM procedures are cross-referenced; revision changes flag affected documents for review."
    ],
    [
      "What does CRM cost for an NDT inspection company in Chennai?",
      "CRM is bundled inside the standard Atlantis NDT ERP subscription — affordable, accessible and fully customizable, quote on request — there is no per-module licence fee. Invoicing is supported in INR or USD with daily FX update."
    ],
    [
      "Does CRM support nuclear-grade BARC / AERB qualifications for Kalpakkam supplier work?",
      "Yes. Nuclear-grade qualifications per BARC / AERB SC/IR-1 — required for Kalpakkam FBTR, MAPS and PFBR supplier work — are tracked alongside generic ISNT and ASNT certifications. The platform supports parallel nuclear / non-nuclear qualification chains per technician."
    ]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_crm_ndt_inspection_companies_chennai() { return <ErpTripleCrossPage {...data} />; }
