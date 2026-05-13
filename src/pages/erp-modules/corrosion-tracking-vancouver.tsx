import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking & RBI",
  "citySlug": "vancouver",
  "cityName": "Vancouver",
  "country": "Canada",
  "title": "Corrosion Tracking & RBI in Vancouver",
  "desc": "Corrosion Tracking & RBI ERP module for inspection companies in Vancouver, Canada. Pre-configured for Trans Mountain (TMX pipeline), Parkland Burnaby refinery and aligned with Technical Safety BC (TSBC), BC Energy Regulator (BCER). Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to drive risk-based inspection (RBI) plans is the heart of any modern integrity program.\n\nFor inspection teams operating in Vancouver, Canada, the corrosion tracking & rbi module is configured against local realities: BC Pacific gateway. TMX pipeline + Westridge terminal, Parkland Burnaby refinery, LNG Canada Kitimat upstream. Pre-built templates support operator-specific quality clauses from Trans Mountain (TMX pipeline), Parkland Burnaby refinery, LNG Canada (Shell-led JV), Coastal GasLink (TC Energy), and regulatory frameworks under Technical Safety BC (TSBC), BC Energy Regulator (BCER), Transport Canada are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Vancouver inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML corrosion rate calculation (short-term and long-term) per API methodology",
    "Wall-thickness projection with t-min, t-required, retirement-date forecasting",
    "Damage mechanism screening per API 571 with susceptibility scoring",
    "Risk-based inspection (RBI) per API 581: POF (damage factor) + COF (financial / safety / environmental)",
    "RBI risk-matrix dashboard (5x5 typical) with equipment ranking by risk score",
    "Inspection effectiveness scoring per API 581 Annex 2.C (highly effective / fairly effective / poorly effective)",
    "Tailored for Vancouver workflow — pre-configured operator templates for Trans Mountain (TMX pipeline), Parkland Burnaby refinery, LNG Canada (Shell-led JV)",
    "Regulatory alignment with Technical Safety BC (TSBC), BC Energy Regulator (BCER), Transport Canada — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Vancouver inspection contractor serving Trans Mountain (TMX pipeline) and Parkland Burnaby refinery deploys corrosion tracking & rbi as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Vancouver EPC quality team standardizes corrosion tracking & rbi across 4 simultaneous project sites in the Canada market. Daily reports, audit packages, and customer-format reports flow to LNG Canada (Shell-led JV) portals automatically.",
    "A growing Vancouver-based service provider integrates corrosion tracking & rbi with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Coastal GasLink (TC Energy) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Vancouver inspection company uses corrosion tracking & rbi to pass Technical Safety BC (TSBC) and BC Energy Regulator (BCER) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Trans Mountain (TMX pipeline)",
    "Parkland Burnaby refinery",
    "LNG Canada (Shell-led JV)",
    "Coastal GasLink (TC Energy)",
    "Seaspan Shipyards",
    "BC Ferries",
    "Teck Resources",
    "Methanex"
  ],
  "cityRegulators": [
    "Technical Safety BC (TSBC)",
    "BC Energy Regulator (BCER)",
    "Transport Canada",
    "CER Canada Energy Regulator",
    "WorkSafeBC"
  ],
  "cityPain": [
    "Corrosion Tracking & RBI tracked in spreadsheets — always 2 months behind Vancouver operator-portal requirements",
    "Technical Safety BC (TSBC) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Trans Mountain (TMX pipeline) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Parkland Burnaby refinery, LNG Canada (Shell-led JV), Coastal GasLink (TC Energy) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking & rbi module configured for Vancouver operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Trans Mountain (TMX pipeline), Parkland Burnaby refinery, LNG Canada (Shell-led JV), Coastal GasLink (TC Energy), Seaspan Shipyards. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with Technical Safety BC (TSBC) and other Canada regulators?",
      "Yes. Technical Safety BC (TSBC), BC Energy Regulator (BCER), Transport Canada, CER Canada Energy Regulator requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Vancouver?",
      "Platform supports English (primary), and where relevant for Canada: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Does it implement the full API 581 RBI methodology?",
      "Yes. Both Part 2 (qualitative) and Part 3 (quantitative) workflows are supported. The damage-factor calculation engine implements all DMs in API 581 Annex 2 — thinning, SCC, HTHA, brittle fracture, external corrosion, mechanical fatigue, etc. The COF engine implements both financial-consequence (modified Part 5) and safety / environmental consequence models. Risk = POF × COF per Part 3 §5."
    ],
    [
      "Can corrosion rates be computed automatically from UT thickness data?",
      "Yes. When UT thickness readings are entered against a TML the system recomputes short-term corrosion rate (most recent inspection vs. previous) and long-term corrosion rate (most recent vs. baseline). Both rates are stored and the larger absolute value is used for projection per API 570 §7.1.1 / API 653 §6.4. Outlier readings are auto-flagged for inspector review."
    ]
  ],
  "lat": 49.2827,
  "lng": -123.1207
};
export default function ErpMC_corrosion_tracking_vancouver() { return <ErpModuleCityPage {...data} />; }
