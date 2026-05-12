import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "certification-tracking",
  "moduleName": "Certification & Personnel Qualification",
  "industrySlug": "welding-fabrication-shops",
  "industryName": "Welding & Fabrication Shops",
  "title": "Certification & Personnel Qualification for Welding & Fabrication Shops",
  "desc": "Certification & Personnel Qualification for Welding & Fabrication Shops — purpose-configured module from Atlantis NDT ERP. AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1. Demo: info@atlantisndt.com.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator.\n\nFor welding & fabrication shops, the certification & personnel qualification module is configured around the codes, regulators, and operator-specific requirements you face every day: AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3, API 1104. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea, McDermott — offshore so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Tailored for welding & fabrication shops — pre-configured templates, terminology, and reports",
    "Integrates with Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person welding & fabrication shop runs certification & personnel qualification as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational welding & fabrication shops deploys certification & personnel qualification across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing welding & fabrication shop integrates certification & personnel qualification with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven welding & fabrication shops uses certification & personnel qualification to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "AWS D1.1 / D1.5 / D1.6 / D14",
    "ASME Section IX",
    "ASME Section VIII Division 1",
    "ASME B31.1 / B31.3",
    "API 1104",
    "EN ISO 15614 / 9606 / 14732",
    "AS/NZS 3992",
    "ASME 'U' / 'S' / 'PP' / 'R' / 'NR' stamps"
  ],
  "industryOperators": [
    "Bechtel — civil / structural",
    "Fluor — EPC",
    "TechnipFMC — subsea",
    "McDermott — offshore",
    "Saipem — offshore / pipeline",
    "MMR Group — power generation",
    "Wood / Worley — refinery",
    "AECOM — defense / civil"
  ],
  "industryPain": [
    "WPS / PQR library in shared drive — outdated revisions used in field",
    "Welder continuity logged on paper — qualification expires mid-job, work rejected",
    "Weld map maintained in CAD — not linked to inspection or NDE results",
    "ASME 'U' stamp joint-review evidence assembled manually before each audit — 80 hours of work"
  ],
  "faqs": [
    [
      "Does certification & personnel qualification work specifically for welding & fabrication shops?",
      "Yes. The module is configured for welding & fabrication shops workflow with pre-built templates aligned to AWS D1.1 / D1.5 / D1.6 / D14, ASME Section IX, ASME Section VIII Division 1, ASME B31.1 / B31.3. Operator-specific quality clauses for Bechtel — civil / structural, Fluor — EPC, TechnipFMC — subsea are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing welding & fabrication shops tools?",
      "Standard integration via REST API with major welding & fabrication shops systems. Atlantis NDT ERP can run as the system of record for certification & personnel qualification while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small welding & fabrication shops to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person welding & fabrication shop pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Does it work with both SNT-TC-1A and ISO 9712 schemes simultaneously?",
      "Yes. Many inspection companies operate in markets requiring both — for example, a UAE company serving ADNOC (which accepts ASNT SNT-TC-1A) and operating in the EU (which requires ISO 9712). The system stores both qualification chains per technician with separate expiry, scope, and renewal workflows. Audit reports can be generated against either scheme or both."
    ],
    [
      "Can it match technician qualifications to job requirements automatically?",
      "Yes. When a project manager creates a job they specify required qualifications (e.g., 'UT Level II per SNT-TC-1A, valid BOSIET, ADNOC ACS-01 approved, English C1'). The system returns a ranked list of available technicians who match all criteria. Optional shadow-mode warns the project manager if any non-matching technicians are assigned."
    ]
  ]
};
export default function ErpCross_certification_tracking_for_welding_fabrication_shops() { return <ErpModuleIndustryPage {...data} />; }
