import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "citySlug": "london",
  "cityName": "London",
  "country": "UK",
  "title": "Calibration Management in London",
  "desc": "Calibration Management ERP module for inspection companies in London, UK. Pre-configured for BP HQ, Shell HQ and aligned with HSE, ONR (Office Nuclear Regulation). Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor inspection teams operating in London, UK, the calibration management module is configured against local realities: HQ city for IOCs. Diverse client base — UKCS, nuclear, aerospace, manufacturing. BINDT, TWI based. Pre-built templates support operator-specific quality clauses from BP HQ, Shell HQ, TotalEnergies UK, EDF Energy nuclear, and regulatory frameworks under HSE, ONR (Office Nuclear Regulation), BINDT are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person London inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for London workflow — pre-configured operator templates for BP HQ, Shell HQ, TotalEnergies UK",
    "Regulatory alignment with HSE, ONR (Office Nuclear Regulation), BINDT — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size London inspection contractor serving BP HQ and Shell HQ deploys calibration management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A London EPC quality team standardizes calibration management across 4 simultaneous project sites in the UK market. Daily reports, audit packages, and customer-format reports flow to TotalEnergies UK portals automatically.",
    "A growing London-based service provider integrates calibration management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by EDF Energy nuclear — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven London inspection company uses calibration management to pass HSE and ONR (Office Nuclear Regulation) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "BP HQ",
    "Shell HQ",
    "TotalEnergies UK",
    "EDF Energy nuclear",
    "National Grid",
    "Rolls-Royce",
    "BAE Systems"
  ],
  "cityRegulators": [
    "HSE",
    "ONR (Office Nuclear Regulation)",
    "BINDT",
    "EASA via UK CAA",
    "Environment Agency"
  ],
  "cityPain": [
    "Calibration Management tracked in spreadsheets — always 2 months behind London operator-portal requirements",
    "HSE audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from BP HQ updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell HQ, TotalEnergies UK, EDF Energy nuclear require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the calibration management module configured for London operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for BP HQ, Shell HQ, TotalEnergies UK, EDF Energy nuclear, National Grid. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HSE and other UK regulators?",
      "Yes. HSE, ONR (Office Nuclear Regulation), BINDT, EASA via UK CAA requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for London?",
      "Platform supports English (primary), and where relevant for UK: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 51.5074,
  "lng": -0.1278
};
export default function ErpMC_calibration_management_london() { return <ErpModuleCityPage {...data} />; }
