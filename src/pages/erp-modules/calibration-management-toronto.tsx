import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "citySlug": "toronto",
  "cityName": "Toronto",
  "country": "Canada",
  "title": "Calibration Management in Toronto",
  "desc": "Calibration Management ERP module for inspection companies in Toronto, Canada. Pre-configured for Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering) and aligned with CNSC Canadian Nuclear Safety Commission, TSSA Ontario. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor inspection teams operating in Toronto, Canada, the calibration management module is configured against local realities: Ontario nuclear + steel + mining corporate hub. Bruce, Darlington, Pickering CANDU stations. Pre-built templates support operator-specific quality clauses from Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton), Stelco (Hamilton), and regulatory frameworks under CNSC Canadian Nuclear Safety Commission, TSSA Ontario, CSA Group are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Toronto inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for Toronto workflow — pre-configured operator templates for Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton)",
    "Regulatory alignment with CNSC Canadian Nuclear Safety Commission, TSSA Ontario, CSA Group — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Toronto inspection contractor serving Bruce Power (8-unit CANDU) and Ontario Power Generation (Darlington, Pickering) deploys calibration management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Toronto EPC quality team standardizes calibration management across 4 simultaneous project sites in the Canada market. Daily reports, audit packages, and customer-format reports flow to ArcelorMittal Dofasco (Hamilton) portals automatically.",
    "A growing Toronto-based service provider integrates calibration management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Stelco (Hamilton) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Toronto inspection company uses calibration management to pass CNSC Canadian Nuclear Safety Commission and TSSA Ontario audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Bruce Power (8-unit CANDU)",
    "Ontario Power Generation (Darlington, Pickering)",
    "ArcelorMittal Dofasco (Hamilton)",
    "Stelco (Hamilton)",
    "Suncor Sarnia refinery",
    "Imperial Oil Sarnia",
    "Nova Chemicals Corunna",
    "Toronto Pearson MRO"
  ],
  "cityRegulators": [
    "CNSC Canadian Nuclear Safety Commission",
    "TSSA Ontario",
    "CSA Group",
    "ESA Ontario",
    "Health Canada radiation"
  ],
  "cityPain": [
    "Calibration Management tracked in spreadsheets — always 2 months behind Toronto operator-portal requirements",
    "CNSC Canadian Nuclear Safety Commission audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Bruce Power (8-unit CANDU) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton), Stelco (Hamilton) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the calibration management module configured for Toronto operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Bruce Power (8-unit CANDU), Ontario Power Generation (Darlington, Pickering), ArcelorMittal Dofasco (Hamilton), Stelco (Hamilton), Suncor Sarnia refinery. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with CNSC Canadian Nuclear Safety Commission and other Canada regulators?",
      "Yes. CNSC Canadian Nuclear Safety Commission, TSSA Ontario, CSA Group, ESA Ontario requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Toronto?",
      "Platform supports English (primary), and where relevant for Canada: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": 43.6532,
  "lng": -79.3832
};
export default function ErpMC_calibration_management_toronto() { return <ErpModuleCityPage {...data} />; }
