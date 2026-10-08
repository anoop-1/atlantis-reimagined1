import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "corrosion-tracking",
  "moduleName": "Corrosion Tracking",
  "citySlug": "port-harcourt",
  "cityName": "Port Harcourt",
  "country": "Nigeria",
  "title": "Corrosion Tracking in Port Harcourt",
  "desc": "Pre-configured for NNPCL Port Harcourt Refining Company (PHRC), Shell SPDC and aligned with NUPRC upstream, NMDPRA downstream. Demo: info@atlantisndt.com.",
  "intro": "Corrosion is the dominant degradation mechanism for ~85% of refinery and petrochemical equipment. Quantifying corrosion rates, projecting remaining life, screening damage mechanisms, and using all of this to set code-based inspection intervals is the heart of any modern integrity program.\n\nFor inspection teams operating in Port Harcourt, Nigeria, the corrosion tracking module is configured against local realities: Niger Delta upstream / refining capital. NNPCL PHRC. Shell SPDC onshore. NLNG Bonny adjacent. Pre-built templates support operator-specific quality clauses from NNPCL Port Harcourt Refining Company (PHRC), Shell SPDC, Eni AGIP, TotalEnergies E&P Nigeria onshore, and regulatory frameworks under NUPRC upstream, NMDPRA downstream, NAPIMS are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Port Harcourt inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-TML thickness history, with the short-term and long-term corrosion rates the inspector calculates stored alongside",
    "Wall-thickness trend per TML against the t-min and retirement thickness the inspector sets",
    "Damage mechanism records per API 571, as assigned by the integrity engineer",
    "Tailored for Port Harcourt workflow — pre-configured operator templates for NNPCL Port Harcourt Refining Company (PHRC), Shell SPDC, Eni AGIP",
    "Regulatory alignment with NUPRC upstream, NMDPRA downstream, NAPIMS — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Port Harcourt inspection contractor serving NNPCL Port Harcourt Refining Company (PHRC) and Shell SPDC deploys corrosion tracking as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Port Harcourt EPC quality team standardizes corrosion tracking across 4 simultaneous project sites in the Nigeria market. Daily reports, audit packages, and customer-format reports flow to Eni AGIP portals automatically.",
    "A growing Port Harcourt-based service provider integrates corrosion tracking with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by TotalEnergies E&P Nigeria onshore — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Port Harcourt inspection company uses corrosion tracking to pass NUPRC upstream and NMDPRA downstream audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Corrosion Tracking tracked in spreadsheets — always 2 months behind Port Harcourt operator-portal requirements",
    "NUPRC upstream audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from NNPCL Port Harcourt Refining Company (PHRC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell SPDC, Eni AGIP, TotalEnergies E&P Nigeria onshore require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the corrosion tracking module configured for Port Harcourt operators?",
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
      "Can corrosion rates be computed automatically from UT thickness data?",
      "No. Atlantis ERP stores each UT thickness reading against its TML with the instrument, calibration record and technician, shows the thickness trend, and flags outlier readings for inspector review. The short-term and long-term corrosion rates under API 570 / API 653 are calculated by the inspector and can be recorded against the TML."
    ]
  ],
  "lat": 4.8156,
  "lng": 7.0498
};
export default function ErpMC_corrosion_tracking_port_harcourt() { return <ErpModuleCityPage {...data} />; }
