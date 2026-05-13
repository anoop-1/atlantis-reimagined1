import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "certification-tracking",
  "moduleName": "Certification & Personnel Qualification",
  "citySlug": "rio-de-janeiro",
  "cityName": "Rio de Janeiro",
  "country": "Brazil",
  "title": "Certification & Personnel Qualification in Rio de Janeiro",
  "desc": "Certification & Personnel Qualification ERP module for inspection companies in Rio de Janeiro, Brazil. Pre-configured for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil and aligned with ANP, Ibama. Demo: info@atlantisndt.com.",
  "intro": "An NDT, welding, or inspection service company lives or dies by the currency of its technicians' certifications. A single expired ASNT Level II certificate on the wrong job can cost the contract, fail an audit, and damage the relationship with a major operator.\n\nFor inspection teams operating in Rio de Janeiro, Brazil, the certification & personnel qualification module is configured against local realities: Petrobras upstream offshore capital. Campos / Santos pre-salt FPSOs. REDUC refinery. Acu port. Pre-built templates support operator-specific quality clauses from Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra), and regulatory frameworks under ANP, Ibama, Marinha do Brasil are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Rio de Janeiro inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-person credential register with scan + OCR of physical certificates",
    "Multi-scheme support: ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, PCN, CSWIP, AWS CWI / SCWI / CAWI, AWS CWE / CWS, NACE CIP, BGAS-CSWIP, API 510 / 570 / 653 / 580, NACE / AMPP corrosion, NAS-410, ASNT Level III",
    "Expiry-alert engine: dashboard + email + SMS at 180 / 90 / 60 / 30 / 7 day windows",
    "Vision acuity testing tracker (Jaeger near vision + color discrimination) per ASNT requirements",
    "Annual proficiency / retraining tracking with score and instructor signature",
    "Method-specific scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) per technician",
    "Tailored for Rio de Janeiro workflow — pre-configured operator templates for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil",
    "Regulatory alignment with ANP, Ibama, Marinha do Brasil — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Rio de Janeiro inspection contractor serving Petrobras (Campos / Santos basins, HQ) and TotalEnergies E&P Brazil deploys certification & personnel qualification as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Rio de Janeiro EPC quality team standardizes certification & personnel qualification across 4 simultaneous project sites in the Brazil market. Daily reports, audit packages, and customer-format reports flow to Equinor Brazil portals automatically.",
    "A growing Rio de Janeiro-based service provider integrates certification & personnel qualification with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Shell Brazil (Mero, Libra) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Rio de Janeiro inspection company uses certification & personnel qualification to pass ANP and Ibama audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petrobras (Campos / Santos basins, HQ)",
    "TotalEnergies E&P Brazil",
    "Equinor Brazil",
    "Shell Brazil (Mero, Libra)",
    "PetroRio",
    "Modec do Brasil FPSO",
    "SBM Offshore Brazil",
    "REDUC refinery"
  ],
  "cityRegulators": [
    "ANP",
    "Ibama",
    "Marinha do Brasil",
    "CNEN radiation",
    "INMETRO",
    "NR-13 / NR-37"
  ],
  "cityPain": [
    "Certification & Personnel Qualification tracked in spreadsheets — always 2 months behind Rio de Janeiro operator-portal requirements",
    "ANP audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petrobras (Campos / Santos basins, HQ) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the certification & personnel qualification module configured for Rio de Janeiro operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petrobras (Campos / Santos basins, HQ), TotalEnergies E&P Brazil, Equinor Brazil, Shell Brazil (Mero, Libra), PetroRio. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ANP and other Brazil regulators?",
      "Yes. ANP, Ibama, Marinha do Brasil, CNEN radiation requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Rio de Janeiro?",
      "Platform supports English (primary), and where relevant for Brazil: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": -22.9068,
  "lng": -43.1729
};
export default function ErpMC_certification_tracking_rio_de_janeiro() { return <ErpModuleCityPage {...data} />; }
