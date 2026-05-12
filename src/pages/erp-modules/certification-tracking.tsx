import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "certification-tracking",
  "name": "Certification & Personnel Qualification",
  "title": "NDT Certification & Personnel Qualification Tracking Software",
  "h1": "Certification & Personnel Qualification Module",
  "desc": "Track every ASNT, ISO 9712, PCN, CSWIP, AWS CWI, NACE, BGAS, API ICP, ASNT Level III, and client-specific qualification across your workforce. Automated 90/60/30-day expiry alerts. Audit-ready compliance dashboard.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator. Most companies manage this in a spreadsheet that nobody updates. Atlantis NDT ERP's personnel qualification module is the single source of truth for every technician credential — automatically tracked, monitored, and surfaced before it lapses.",
  "features": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Client-specific written practice + qualification scheme mapping (e.g., Saudi Aramco SAEP-1142, ADNOC ACS-01, Shell DEP, BP ETP, Petronas PTS)",
    "Continuing education credit (CEC) and PDU tracking for ASNT, AWS, NACE renewals",
    "Background-check, drug-test, OSHA / HAZWOPER, H2S Alive, BOSIET / HUET / FOET / TBOSIET expiry tracking",
    "Per-job qualification matching: 'Find me 3 UT Level IIs available next week who hold valid CSWIP 3.1 and BOSIET'",
    "Audit-ready PDF compliance package: any client, any auditor, any date — in 30 seconds",
    "Multi-language certificate handling (Arabic, Mandarin, Spanish, Portuguese, French)"
  ],
  "useCases": [
    "Inspection company on the Aramco approved-vendor list managing 60 SAEP-1142 qualified technicians",
    "Aerospace NDT shop tracking NAS-410 qualifications + customer specifications (Boeing, Airbus, Bombardier)",
    "Welding contractor maintaining 150 AWS CWIs across 12 states with state-specific licensing",
    "Marine survey firm tracking IIMS, IMCA, CSWIP 3.1U / 3.2U underwater inspector qualifications",
    "Pipeline integrity company managing API 1169, API 653, NACE CIP, and client-specific RBI team certifications"
  ],
  "industries": [
    "NDT inspection",
    "Welding & fabrication",
    "Aerospace QA",
    "Marine survey",
    "Pipeline integrity",
    "Coatings inspection"
  ],
  "integrations": [
    "Workday HCM",
    "BambooHR",
    "SAP SuccessFactors",
    "ADP Workforce",
    "SharePoint document libraries",
    "DocuSign / Adobe Sign for certificate signature"
  ],
  "faqs": [
    [
      "Does it work with both SNT-TC-1A and ISO 9712 schemes simultaneously?",
      "Yes. Many inspection companies operate in markets requiring both — for example, a UAE company serving ADNOC (which accepts ASNT SNT-TC-1A) and operating in the EU (which requires ISO 9712). The system stores both qualification chains per technician with separate expiry, scope, and renewal workflows. Audit reports can be generated against either scheme or both."
    ],
    [
      "Can it match technician qualifications to job requirements automatically?",
      "Yes. When a project manager creates a job they specify required qualifications (e.g., 'UT Level II per SNT-TC-1A, valid BOSIET, ADNOC ACS-01 approved, English C1'). The system returns a ranked list of available technicians who match all criteria. Optional shadow-mode warns the project manager if any non-matching technicians are assigned."
    ],
    [
      "How are vision acuity and color discrimination test results tracked?",
      "Vision tests are required annually under SNT-TC-1A §8.4. The system stores Jaeger near-vision results (J1, J2, etc.), Ishihara color discrimination scores, and any corrective lens prescription on file. Tests expire 12 months after issue and 90-day reminders trigger automatically. Test result PDFs are attached to each technician profile for audit retrieval."
    ],
    [
      "Can clients verify technician qualifications through a secure portal?",
      "Yes. The client portal provides read-only verification — a client auditor can verify that 'Technician X holds valid UT Level II per SNT-TC-1A as of 2026-05-08' without seeing your full workforce. Access can be granted by job, project, or contract. All verification queries are logged for your records."
    ],
    [
      "How does it handle radiographer dosimetry and radiation badge records?",
      "Quarterly dosimetry results from your TLD/OSL badge service (Mirion, Landauer, etc.) are imported via CSV or API. The system tracks cumulative dose against the regulatory limit (50 mSv/year ICRP, 20 mSv/year EU, lower limits per region), flags any badge with elevated reading for investigation, and generates monthly and annual dose reports for regulatory submission."
    ]
  ]
};
export default function ErpModule_certification_tracking() { return <ErpModulePage {...data} />; }
