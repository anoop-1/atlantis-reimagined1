import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "citySlug": "bangkok",
  "cityName": "Bangkok",
  "country": "Thailand",
  "title": "Calibration Management in Bangkok",
  "desc": "Calibration Management ERP module for inspection companies in Bangkok, Thailand. Pre-configured for PTT Public Company, Thai Oil (TOP, Sriracha refinery) and aligned with DOEB Department of Energy Business, DIW Department of Industrial Works. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor inspection teams operating in Bangkok, Thailand, the calibration management module is configured against local realities: PTT Group corporate base. EEC corridor: Map Ta Phut, Rayong refining & petrochemicals. Pre-built templates support operator-specific quality clauses from PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut), and regulatory frameworks under DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Bangkok inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for Bangkok workflow — pre-configured operator templates for PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals",
    "Regulatory alignment with DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Bangkok inspection contractor serving PTT Public Company and Thai Oil (TOP, Sriracha refinery) deploys calibration management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Bangkok EPC quality team standardizes calibration management across 4 simultaneous project sites in the Thailand market. Daily reports, audit packages, and customer-format reports flow to IRPC Rayong refining + petrochemicals portals automatically.",
    "A growing Bangkok-based service provider integrates calibration management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by PTT Global Chemical (Map Ta Phut) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Bangkok inspection company uses calibration management to pass DOEB Department of Energy Business and DIW Department of Industrial Works audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "PTT Public Company",
    "Thai Oil (TOP, Sriracha refinery)",
    "IRPC Rayong refining + petrochemicals",
    "PTT Global Chemical (Map Ta Phut)",
    "Bangchak Corporation",
    "Star Petroleum Refining",
    "SCG Chemicals",
    "PTTEP"
  ],
  "cityRegulators": [
    "DOEB Department of Energy Business",
    "DIW Department of Industrial Works",
    "TISI Thai Industrial Standards",
    "OAP Office of Atoms for Peace",
    "Ministry of Labour"
  ],
  "cityPain": [
    "Calibration Management tracked in spreadsheets — always 2 months behind Bangkok operator-portal requirements",
    "DOEB Department of Energy Business audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from PTT Public Company updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the calibration management module configured for Bangkok operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for PTT Public Company, Thai Oil (TOP, Sriracha refinery), IRPC Rayong refining + petrochemicals, PTT Global Chemical (Map Ta Phut), Bangchak Corporation. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with DOEB Department of Energy Business and other Thailand regulators?",
      "Yes. DOEB Department of Energy Business, DIW Department of Industrial Works, TISI Thai Industrial Standards, OAP Office of Atoms for Peace requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Bangkok?",
      "Platform supports English (primary), and where relevant for Thailand: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 13.7563,
  "lng": 100.5018
};
export default function ErpMC_calibration_management_bangkok() { return <ErpModuleCityPage {...data} />; }
