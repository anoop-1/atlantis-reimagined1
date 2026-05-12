import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "certification-tracking",
  "moduleName": "Certification & Personnel Qualification",
  "industrySlug": "environmental-testing-labs",
  "industryName": "Environmental Testing Laboratories",
  "title": "Certification & Personnel Qualification for Environmental Testing Laboratories",
  "desc": "Certification & Personnel Qualification for Environmental Testing Laboratories — purpose-configured module from Atlantis NDT ERP. ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series). Demo: info@atlantisndt.com.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator.\n\nFor environmental testing laboratories, the certification & personnel qualification module is configured around the codes, regulators, and operator-specific requirements you face every day: ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series), ASTM water / soil methods, EN ISO water-method series. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from SGS — global testing, Eurofins — environmental, ALS Limited — environmental, Bureau Veritas — environmental so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Tailored for environmental testing laboratories — pre-configured templates, terminology, and reports",
    "Integrates with SGS — global testing, Eurofins — environmental, ALS Limited — environmental vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person environmental testing laboratory runs certification & personnel qualification as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational environmental testing laboratories deploys certification & personnel qualification across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing environmental testing laboratory integrates certification & personnel qualification with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven environmental testing laboratories uses certification & personnel qualification to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "ISO/IEC 17025:2017",
    "NELAP / TNI standard (US)",
    "US EPA methods (SW-846, 600 series, 500 series)",
    "ASTM water / soil methods",
    "EN ISO water-method series",
    "BS / EN environmental methods",
    "UK Environment Agency MCERTS",
    "Australian NATA + ISO 17025"
  ],
  "industryOperators": [
    "SGS — global testing",
    "Eurofins — environmental",
    "ALS Limited — environmental",
    "Bureau Veritas — environmental",
    "Intertek — environmental",
    "TestAmerica / Eurofins TestAmerica",
    "Pace Analytical",
    "GBA Forschungsinstitut"
  ],
  "industryPain": [
    "Sample chain-of-custody on paper — regulator findings",
    "Lab data integration from instruments (GC, GC-MS, ICP, IC) — manual transcription errors",
    "EPA / EA reporting formats — manual reformatting per submission",
    "ISO 17025 method validation records scattered — accreditation findings"
  ],
  "faqs": [
    [
      "Does certification & personnel qualification work specifically for environmental testing laboratories?",
      "Yes. The module is configured for environmental testing laboratories workflow with pre-built templates aligned to ISO/IEC 17025:2017, NELAP / TNI standard (US), US EPA methods (SW-846, 600 series, 500 series), ASTM water / soil methods. Operator-specific quality clauses for SGS — global testing, Eurofins — environmental, ALS Limited — environmental are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing environmental testing laboratories tools?",
      "Standard integration via REST API with major environmental testing laboratories systems. Atlantis NDT ERP can run as the system of record for certification & personnel qualification while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small environmental testing laboratories to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person environmental testing laboratory pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_certification_tracking_for_environmental_testing_labs() { return <ErpModuleIndustryPage {...data} />; }
