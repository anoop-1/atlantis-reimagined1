import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "certification-tracking",
  "moduleName": "Certification & Personnel Qualification",
  "citySlug": "muscat",
  "cityName": "Muscat",
  "country": "Oman",
  "title": "Certification & Personnel Qualification in Muscat",
  "desc": "Certification & Personnel Qualification ERP module for inspection companies in Muscat, Oman. Pre-configured for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat) and aligned with MEM Ministry of Energy and Minerals, Ministry of Labour. Demo: info@atlantisndt.com.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator.\n\nFor inspection teams operating in Muscat, Oman, the certification & personnel qualification module is configured against local realities: Oman corporate base. PDO upstream + OQ refining/petrochem at Sohar + Duqm SEZ megaproject. Pre-built templates support operator-specific quality clauses from Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat), and regulatory frameworks under MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Muscat inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Tailored for Muscat workflow — pre-configured operator templates for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals",
    "Regulatory alignment with MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Muscat inspection contractor serving Petroleum Development Oman (PDO) and OQ Refineries (Sohar, Muscat) deploys certification & personnel qualification as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Muscat EPC quality team standardizes certification & personnel qualification across 4 simultaneous project sites in the Oman market. Daily reports, audit packages, and customer-format reports flow to OQ Petrochemicals portals automatically.",
    "A growing Muscat-based service provider integrates certification & personnel qualification with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Oman LNG (Qalhat) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Muscat inspection company uses certification & personnel qualification to pass MEM Ministry of Energy and Minerals and Ministry of Labour audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petroleum Development Oman (PDO)",
    "OQ Refineries (Sohar, Muscat)",
    "OQ Petrochemicals",
    "Oman LNG (Qalhat)",
    "Duqm Refinery (OQ / Kuwait JV)",
    "Sohar Aluminium",
    "Vale Oman (Sohar pellet)",
    "Oman Cement"
  ],
  "cityRegulators": [
    "MEM Ministry of Energy and Minerals",
    "Ministry of Labour",
    "OPAZ (free zones)",
    "DGSM Omani Standards",
    "Ministry of Environment"
  ],
  "cityPain": [
    "Certification & Personnel Qualification tracked in spreadsheets — always 2 months behind Muscat operator-portal requirements",
    "MEM Ministry of Energy and Minerals audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petroleum Development Oman (PDO) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the certification & personnel qualification module configured for Muscat operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat), Duqm Refinery (OQ / Kuwait JV). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with MEM Ministry of Energy and Minerals and other Oman regulators?",
      "Yes. MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones), DGSM Omani Standards requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Muscat?",
      "Platform supports English (primary), and where relevant for Oman: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 23.5859,
  "lng": 58.4059
};
export default function ErpMC_certification_tracking_muscat() { return <ErpModuleCityPage {...data} />; }
