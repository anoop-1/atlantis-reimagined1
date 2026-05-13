import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "certification-tracking",
  "moduleName": "Certification & Personnel Qualification",
  "citySlug": "sharjah",
  "cityName": "Sharjah",
  "country": "UAE",
  "title": "Certification & Personnel Qualification in Sharjah",
  "desc": "Certification & Personnel Qualification ERP module for inspection companies in Sharjah, UAE. Pre-configured for Sharjah National Oil Corporation (SNOC), Crescent Petroleum and aligned with Sharjah Economic Development, Hamriyah Free Zone Authority (HFZA). Demo: info@atlantisndt.com.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator.\n\nFor inspection teams operating in Sharjah, UAE, the certification & personnel qualification module is configured against local realities: Northern emirate industrial / fabrication hub. Hamriyah Free Zone, SAIF Zone, SNOC gas processing. Pre-built templates support operator-specific quality clauses from Sharjah National Oil Corporation (SNOC), Crescent Petroleum, BUTINAH Marine, Sharjah Cement, and regulatory frameworks under Sharjah Economic Development, Hamriyah Free Zone Authority (HFZA), Sharjah Civil Defence are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Sharjah inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Tailored for Sharjah workflow — pre-configured operator templates for Sharjah National Oil Corporation (SNOC), Crescent Petroleum, BUTINAH Marine",
    "Regulatory alignment with Sharjah Economic Development, Hamriyah Free Zone Authority (HFZA), Sharjah Civil Defence — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Sharjah inspection contractor serving Sharjah National Oil Corporation (SNOC) and Crescent Petroleum deploys certification & personnel qualification as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Sharjah EPC quality team standardizes certification & personnel qualification across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to BUTINAH Marine portals automatically.",
    "A growing Sharjah-based service provider integrates certification & personnel qualification with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Sharjah Cement — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Sharjah inspection company uses certification & personnel qualification to pass Sharjah Economic Development and Hamriyah Free Zone Authority (HFZA) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Sharjah National Oil Corporation (SNOC)",
    "Crescent Petroleum",
    "BUTINAH Marine",
    "Sharjah Cement",
    "Sharjah Aluminium (SHARC)",
    "Hamriyah Free Zone tenants",
    "Air Arabia MRO",
    "Etihad Rail Sharjah"
  ],
  "cityRegulators": [
    "Sharjah Economic Development",
    "Hamriyah Free Zone Authority (HFZA)",
    "Sharjah Civil Defence",
    "MOIAT",
    "UAE FANR radiation"
  ],
  "cityPain": [
    "Certification & Personnel Qualification tracked in spreadsheets — always 2 months behind Sharjah operator-portal requirements",
    "Sharjah Economic Development audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Sharjah National Oil Corporation (SNOC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Crescent Petroleum, BUTINAH Marine, Sharjah Cement require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the certification & personnel qualification module configured for Sharjah operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Sharjah National Oil Corporation (SNOC), Crescent Petroleum, BUTINAH Marine, Sharjah Cement, Sharjah Aluminium (SHARC). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with Sharjah Economic Development and other UAE regulators?",
      "Yes. Sharjah Economic Development, Hamriyah Free Zone Authority (HFZA), Sharjah Civil Defence, MOIAT requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Sharjah?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Does it work with both SNT-TC-1A and ISO 9712 schemes simultaneously?",
      "Yes. Many inspection companies operate in markets requiring both — for example, a UAE company serving ADNOC (which accepts ASNT SNT-TC-1A) and operating in the EU (which requires ISO 9712). The system stores both qualification chains per technician with separate expiry, scope, and renewal workflows. Audit reports can be generated against either scheme or both."
    ],
    [
      "Can it match technician qualifications to job requirements automatically?",
      "Yes. When a project manager creates a job they specify required qualifications (e.g., 'UT Level II per SNT-TC-1A, valid BOSIET, ADNOC ACS-01 approved, English C1'). The system returns a ranked list of available technicians who match all criteria. Optional shadow-mode warns the project manager if any non-matching technicians are assigned."
    ]
  ],
  "lat": 25.3463,
  "lng": 55.4209
};
export default function ErpMC_certification_tracking_sharjah() { return <ErpModuleCityPage {...data} />; }
