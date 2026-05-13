import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "citySlug": "port-harcourt",
  "cityName": "Port Harcourt",
  "country": "Nigeria",
  "title": "Calibration Management in Port Harcourt",
  "desc": "Calibration Management ERP module for inspection companies in Port Harcourt, Nigeria. Pre-configured for NNPCL Port Harcourt Refining Company (PHRC), Shell SPDC and aligned with NUPRC upstream, NMDPRA downstream. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor inspection teams operating in Port Harcourt, Nigeria, the calibration management module is configured against local realities: Niger Delta upstream / refining capital. NNPCL PHRC. Shell SPDC onshore. NLNG Bonny adjacent. Pre-built templates support operator-specific quality clauses from NNPCL Port Harcourt Refining Company (PHRC), Shell SPDC, Eni AGIP, TotalEnergies E&P Nigeria onshore, and regulatory frameworks under NUPRC upstream, NMDPRA downstream, NAPIMS are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Port Harcourt inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for Port Harcourt workflow — pre-configured operator templates for NNPCL Port Harcourt Refining Company (PHRC), Shell SPDC, Eni AGIP",
    "Regulatory alignment with NUPRC upstream, NMDPRA downstream, NAPIMS — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Port Harcourt inspection contractor serving NNPCL Port Harcourt Refining Company (PHRC) and Shell SPDC deploys calibration management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Port Harcourt EPC quality team standardizes calibration management across 4 simultaneous project sites in the Nigeria market. Daily reports, audit packages, and customer-format reports flow to Eni AGIP portals automatically.",
    "A growing Port Harcourt-based service provider integrates calibration management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by TotalEnergies E&P Nigeria onshore — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Port Harcourt inspection company uses calibration management to pass NUPRC upstream and NMDPRA downstream audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "NNPCL Port Harcourt Refining Company (PHRC)",
    "Shell SPDC",
    "Eni AGIP",
    "TotalEnergies E&P Nigeria onshore",
    "Indigenous E&Ps (Seplat, Aiteo, Heritage)",
    "NLNG Bonny Island",
    "Eleme Petrochemical (Indorama)",
    "Notore Chemical"
  ],
  "cityRegulators": [
    "NUPRC upstream",
    "NMDPRA downstream",
    "NAPIMS",
    "NIMASA",
    "NCDMB Nigerian Content",
    "Rivers State Environment"
  ],
  "cityPain": [
    "Calibration Management tracked in spreadsheets — always 2 months behind Port Harcourt operator-portal requirements",
    "NUPRC upstream audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from NNPCL Port Harcourt Refining Company (PHRC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell SPDC, Eni AGIP, TotalEnergies E&P Nigeria onshore require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the calibration management module configured for Port Harcourt operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for NNPCL Port Harcourt Refining Company (PHRC), Shell SPDC, Eni AGIP, TotalEnergies E&P Nigeria onshore, Indigenous E&Ps (Seplat, Aiteo, Heritage). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with NUPRC upstream and other Nigeria regulators?",
      "Yes. NUPRC upstream, NMDPRA downstream, NAPIMS, NIMASA requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Port Harcourt?",
      "Platform supports English (primary), and where relevant for Nigeria: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 4.8156,
  "lng": 7.0498
};
export default function ErpMC_calibration_management_port_harcourt() { return <ErpModuleCityPage {...data} />; }
