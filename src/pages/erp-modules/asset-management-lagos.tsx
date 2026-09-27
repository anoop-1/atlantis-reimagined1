import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "asset-management",
  "moduleName": "Asset Integrity & Equipment Register",
  "citySlug": "lagos",
  "cityName": "Lagos",
  "country": "Nigeria",
  "title": "Asset Integrity & Equipment Register in Lagos",
  "desc": "Asset Integrity & Equipment Register ERP module for inspection companies in Lagos, Nigeria. Pre-configured for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC and aligned with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream). Demo: info@atlantisndt.com.",
  "intro": "Inspection programs need an authoritative asset register. NNPCL refineries. Shell SPDC onshore. Deepwater offshore. Pre-built templates support operator-specific quality clauses from NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC, Chevron Nigeria, TotalEnergies E&P Nigeria, and regulatory frameworks under NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream), NAPIMS are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Lagos inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Tailored for Lagos workflow — pre-configured operator templates for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC, Chevron Nigeria",
    "Regulatory alignment with NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream), NAPIMS — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Lagos inspection contractor serving NNPCL refineries (Port Harcourt, Warri, Kaduna) and Shell SPDC deploys asset integrity & equipment register as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Lagos EPC quality team standardizes asset integrity & equipment register across 4 simultaneous project sites in the Nigeria market. Daily reports, audit packages, and customer-format reports flow to Chevron Nigeria portals automatically.",
    "A growing Lagos-based service provider integrates asset integrity & equipment register with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by TotalEnergies E&P Nigeria — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Lagos inspection company uses asset integrity & equipment register to pass NUPRC (Nigerian Upstream Petroleum Regulatory) and NMDPRA (downstream) audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "NNPCL refineries (Port Harcourt, Warri, Kaduna)",
    "Shell SPDC",
    "Chevron Nigeria",
    "TotalEnergies E&P Nigeria",
    "ExxonMobil Nigeria",
    "NLNG Bonny",
    "Dangote Refinery"
  ],
  "cityRegulators": [
    "NUPRC (Nigerian Upstream Petroleum Regulatory)",
    "NMDPRA (downstream)",
    "NAPIMS",
    "NIMASA",
    "Federal Ministry of Environment"
  ],
  "cityPain": [
    "Asset Integrity & Equipment Register tracked in spreadsheets — always 2 months behind Lagos operator-portal requirements",
    "NUPRC (Nigerian Upstream Petroleum Regulatory) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from NNPCL refineries (Port Harcourt, Warri, Kaduna) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Shell SPDC, Chevron Nigeria, TotalEnergies E&P Nigeria require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the asset integrity & equipment register module configured for Lagos operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for NNPCL refineries (Port Harcourt, Warri, Kaduna), Shell SPDC, Chevron Nigeria, TotalEnergies E&P Nigeria, ExxonMobil Nigeria. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with NUPRC (Nigerian Upstream Petroleum Regulatory) and other Nigeria regulators?",
      "Yes. NUPRC (Nigerian Upstream Petroleum Regulatory), NMDPRA (downstream), NAPIMS, NIMASA requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Lagos?",
      "Platform supports English (primary), and where relevant for Nigeria: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "Can it import asset hierarchies from existing CMMS / APM systems?",
    ],
    [
    ]
  ],
  "lat": 6.5244,
  "lng": 3.3792
};
export default function ErpMC_asset_management_lagos() { return <ErpModuleCityPage {...data} />; }
