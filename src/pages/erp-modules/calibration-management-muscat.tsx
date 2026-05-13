import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "citySlug": "muscat",
  "cityName": "Muscat",
  "country": "Oman",
  "title": "Calibration Management in Muscat",
  "desc": "Calibration Management ERP module for inspection companies in Muscat, Oman. Pre-configured for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat) and aligned with MEM Ministry of Energy and Minerals, Ministry of Labour. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor inspection teams operating in Muscat, Oman, the calibration management module is configured against local realities: Oman corporate base. PDO upstream + OQ refining/petrochem at Sohar + Duqm SEZ megaproject. Pre-built templates support operator-specific quality clauses from Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat), and regulatory frameworks under MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Muscat inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for Muscat workflow — pre-configured operator templates for Petroleum Development Oman (PDO), OQ Refineries (Sohar, Muscat), OQ Petrochemicals",
    "Regulatory alignment with MEM Ministry of Energy and Minerals, Ministry of Labour, OPAZ (free zones) — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Muscat inspection contractor serving Petroleum Development Oman (PDO) and OQ Refineries (Sohar, Muscat) deploys calibration management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Muscat EPC quality team standardizes calibration management across 4 simultaneous project sites in the Oman market. Daily reports, audit packages, and customer-format reports flow to OQ Petrochemicals portals automatically.",
    "A growing Muscat-based service provider integrates calibration management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Oman LNG (Qalhat) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Muscat inspection company uses calibration management to pass MEM Ministry of Energy and Minerals and Ministry of Labour audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Calibration Management tracked in spreadsheets — always 2 months behind Muscat operator-portal requirements",
    "MEM Ministry of Energy and Minerals audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petroleum Development Oman (PDO) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for OQ Refineries (Sohar, Muscat), OQ Petrochemicals, Oman LNG (Qalhat) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the calibration management module configured for Muscat operators?",
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
      "Is the platform ISO/IEC 17025:2017 accredited or audited?",
      "The platform is designed to be compliant with ISO/IEC 17025:2017 documentation requirements, but accreditation is granted to the laboratory, not the software. Atlantis NDT supports laboratories through ANAB, A2LA, UKAS, DAkkS, and NABL accreditation cycles with audit-ready document packages, change control records, and personnel competency files."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. The uncertainty builder supports Type A (statistical, from repeated measurements) and Type B (other, from calibration certificates and manufacturer specifications) contributions. Combined standard uncertainty and expanded uncertainty (k=2 typical) are calculated automatically. Sensitivity coefficients can be entered for non-trivial measurement models."
    ]
  ],
  "lat": 23.5859,
  "lng": 58.4059
};
export default function ErpMC_calibration_management_muscat() { return <ErpModuleCityPage {...data} />; }
