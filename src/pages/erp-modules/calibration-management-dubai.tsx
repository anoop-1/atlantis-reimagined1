import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "citySlug": "dubai",
  "cityName": "Dubai",
  "country": "UAE",
  "title": "Calibration Management in Dubai",
  "desc": "Calibration Management ERP module for inspection companies in Dubai, UAE. Pre-configured for ADNOC Distribution, ENOC and aligned with ADQCC, MOIAT. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor inspection teams operating in Dubai, UAE, the calibration management module is configured against local realities: Regional HQ city for GCC oil & gas. EPC contractors, inspection service multinationals. Pre-built templates support operator-specific quality clauses from ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, and regulatory frameworks under ADQCC, MOIAT, Dubai Municipality are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Dubai inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for Dubai workflow — pre-configured operator templates for ADNOC Distribution, ENOC, DUBAL aluminum",
    "Regulatory alignment with ADQCC, MOIAT, Dubai Municipality — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Dubai inspection contractor serving ADNOC Distribution and ENOC deploys calibration management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Dubai EPC quality team standardizes calibration management across 4 simultaneous project sites in the UAE market. Daily reports, audit packages, and customer-format reports flow to DUBAL aluminum portals automatically.",
    "A growing Dubai-based service provider integrates calibration management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by DEWA power — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Dubai inspection company uses calibration management to pass ADQCC and MOIAT audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "ADNOC Distribution",
    "ENOC",
    "DUBAL aluminum",
    "DEWA power",
    "Dragon Oil",
    "Wood UAE",
    "Petrofac Dubai",
    "Sharjah National Oil Co"
  ],
  "cityRegulators": [
    "ADQCC",
    "MOIAT",
    "Dubai Municipality",
    "DCAS",
    "Dubai Civil Defence"
  ],
  "cityPain": [
    "Calibration Management tracked in spreadsheets — always 2 months behind Dubai operator-portal requirements",
    "ADQCC audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from ADNOC Distribution updates monthly — internal procedures lag by weeks",
    "Customer-format reports for ENOC, DUBAL aluminum, DEWA power require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the calibration management module configured for Dubai operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for ADNOC Distribution, ENOC, DUBAL aluminum, DEWA power, Dragon Oil. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ADQCC and other UAE regulators?",
      "Yes. ADQCC, MOIAT, Dubai Municipality, DCAS requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Dubai?",
      "Platform supports English (primary), and where relevant for UAE: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Is the platform ISO/IEC 17025:2017 accredited or audited?",
      "The platform is designed to be compliant with ISO/IEC 17025:2017 documentation requirements, but accreditation is granted to the laboratory, not the software. Atlantis NDT supports laboratories through ANAB, A2LA, UKAS, DAkkS, and NABL accreditation cycles with audit-ready document packages, change control records, and personnel competency files."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. The uncertainty builder supports Type A (statistical, from repeated measurements) and Type B (other, from calibration certificates and manufacturer specifications) contributions. Combined standard uncertainty and expanded uncertainty (k=2 typical) are calculated automatically. Sensitivity coefficients can be entered for non-trivial measurement models."
    ]
  ],
  "lat": 25.276987,
  "lng": 55.296249
};
export default function ErpMC_calibration_management_dubai() { return <ErpModuleCityPage {...data} />; }
