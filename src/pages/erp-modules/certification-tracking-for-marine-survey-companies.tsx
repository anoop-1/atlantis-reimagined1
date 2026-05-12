import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "certification-tracking",
  "moduleName": "Certification & Personnel Qualification",
  "industrySlug": "marine-survey-companies",
  "industryName": "Marine Survey & Offshore Inspection",
  "title": "Certification & Personnel Qualification for Marine Survey & Offshore Inspection",
  "desc": "Certification & Personnel Qualification for Marine Survey & Offshore Inspection — purpose-configured module from Atlantis NDT ERP. IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules. Demo: info@atlantisndt.com.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator.\n\nFor marine survey & offshore inspection, the certification & personnel qualification module is configured around the codes, regulators, and operator-specific requirements you face every day: IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM), IMCA C-002 (diving inspection). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations, Equinor — Norwegian shelf so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Tailored for marine survey & offshore inspection — pre-configured templates, terminology, and reports",
    "Integrates with Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person marine survey & offshore inspection runs certification & personnel qualification as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational marine survey & offshore inspection deploys certification & personnel qualification across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing marine survey & offshore inspection integrates certification & personnel qualification with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven marine survey & offshore inspection uses certification & personnel qualification to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "IMO MARPOL / SOLAS / STCW",
    "IACS UR / common rules",
    "DNV / ABS / LR / BV / ClassNK / RINA / KR class rules",
    "IMCA D-018 IRM (offshore IRM)",
    "IMCA C-002 (diving inspection)",
    "API RP 2A (offshore platforms)",
    "API RP 17B (subsea)",
    "ISO 19901-9 (offshore reliability)"
  ],
  "industryOperators": [
    "Shell — upstream / marine",
    "BP — marine",
    "TotalEnergies — FPSO operations",
    "Equinor — Norwegian shelf",
    "MODEC — FPSO operator",
    "SBM Offshore — FPSO",
    "Yinson — FPSO",
    "Bumi Armada — FPSO"
  ],
  "industryPain": [
    "IACS class-society reporting in Word / Excel — manual reformatting per society",
    "ROV inspection footage management — terabytes of video without indexing",
    "IMCA D-018 inspection-record format compliance — paper records in field",
    "FPSO surveyor team rotation — qualifications expire mid-tour"
  ],
  "faqs": [
    [
      "Does certification & personnel qualification work specifically for marine survey & offshore inspection?",
      "Yes. The module is configured for marine survey & offshore inspection workflow with pre-built templates aligned to IMO MARPOL / SOLAS / STCW, IACS UR / common rules, DNV / ABS / LR / BV / ClassNK / RINA / KR class rules, IMCA D-018 IRM (offshore IRM). Operator-specific quality clauses for Shell — upstream / marine, BP — marine, TotalEnergies — FPSO operations are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing marine survey & offshore inspection tools?",
      "Standard integration via REST API with major marine survey & offshore inspection systems. Atlantis NDT ERP can run as the system of record for certification & personnel qualification while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small marine survey & offshore inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person marine survey & offshore inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
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
export default function ErpCross_certification_tracking_for_marine_survey_companies() { return <ErpModuleIndustryPage {...data} />; }
