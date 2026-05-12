import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "certification-tracking",
  "moduleName": "Certification & Personnel Qualification",
  "industrySlug": "industrial-coatings-inspection",
  "industryName": "Industrial Coatings Inspection",
  "title": "Certification & Personnel Qualification for Industrial Coatings Inspection",
  "desc": "Certification & Personnel Qualification for Industrial Coatings Inspection — purpose-configured module from Atlantis NDT ERP. NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep). Demo: info@atlantisndt.com.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator.\n\nFor industrial coatings inspection, the certification & personnel qualification module is configured around the codes, regulators, and operator-specific requirements you face every day: NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection), ISO 8501 (visual cleanliness). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr), PPG (paint mfr) so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Tailored for industrial coatings inspection — pre-configured templates, terminology, and reports",
    "Integrates with Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person industrial coatings inspection runs certification & personnel qualification as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational industrial coatings inspection deploys certification & personnel qualification across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing industrial coatings inspection integrates certification & personnel qualification with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven industrial coatings inspection uses certification & personnel qualification to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "NACE / AMPP CIP Level I / II / III",
    "SSPC PA 2 (DFT measurement)",
    "SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep)",
    "ISO 12944 (corrosion protection)",
    "ISO 8501 (visual cleanliness)",
    "ISO 8502 (surface contamination)",
    "ISO 19840 (DFT measurement)",
    "ASTM D4541 (pull-off adhesion)"
  ],
  "industryOperators": [
    "Hempel (paint mfr)",
    "Jotun (paint mfr)",
    "AkzoNobel International (paint mfr)",
    "PPG (paint mfr)",
    "Sherwin-Williams Protective & Marine (paint mfr)",
    "Shell coatings spec",
    "BP coatings spec",
    "ADNOC coatings spec"
  ],
  "industryPain": [
    "DFT readings on paper, re-entered into Excel — transcription errors",
    "Hold-point notification to client / engineer informal — clients miss critical holds",
    "Inspector qualifications expire mid-project — NACE Level II cert lapses, work rejected",
    "Coating-system data sheets scattered across project email — wrong system applied"
  ],
  "faqs": [
    [
      "Does certification & personnel qualification work specifically for industrial coatings inspection?",
      "Yes. The module is configured for industrial coatings inspection workflow with pre-built templates aligned to NACE / AMPP CIP Level I / II / III, SSPC PA 2 (DFT measurement), SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep), ISO 12944 (corrosion protection). Operator-specific quality clauses for Hempel (paint mfr), Jotun (paint mfr), AkzoNobel International (paint mfr) are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing industrial coatings inspection tools?",
      "Standard integration via REST API with major industrial coatings inspection systems. Atlantis NDT ERP can run as the system of record for certification & personnel qualification while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small industrial coatings inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person industrial coatings inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_certification_tracking_for_industrial_coatings_inspection() { return <ErpModuleIndustryPage {...data} />; }
