import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "yanbu",
  "cityName": "Yanbu",
  "country": "Saudi Arabia",
  "title": "Inspection Scheduling & Interval Management in Yanbu",
  "desc": "Inspection Scheduling & Interval Management ERP module for inspection companies in Yanbu, Saudi Arabia. Pre-configured for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery and aligned with Royal Commission Yanbu (RCJY), HRSD labor. Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Yanbu, Saudi Arabia, the inspection scheduling & interval management module is configured against local realities: KSA western refining/petrochem hub. East-West pipeline terminus. Gateway to NEOM and Red Sea megaprojects. Pre-built templates support operator-specific quality clauses from YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC), and regulatory frameworks under Royal Commission Yanbu (RCJY), HRSD labor, SASO standards are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Yanbu inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel intervals: external 5-yr, internal half-remaining-life capped at 10-yr, or per RBI",
    "API 570 piping intervals by class: Class 1 (5/10), Class 2 (10/20), Class 3 (10/20+), or per RBI",
    "API 653 tank intervals: external monthly visual + 5-yr formal, internal 10-yr or per RBI",
    "ASME B31.3 process piping inspection intervals with severe cyclic service adjustments",
    "Risk-based inspection (RBI) per API 581 — import RBI assessment, use computed inspection plan",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Yanbu workflow — pre-configured operator templates for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil)",
    "Regulatory alignment with Royal Commission Yanbu (RCJY), HRSD labor, SASO standards — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Yanbu inspection contractor serving YASREF (Aramco / Sinopec) and Aramco Yanbu Refinery deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Yanbu EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Yanpet (SABIC / ExxonMobil) portals automatically.",
    "A growing Yanbu-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by Yansab (SABIC) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Yanbu inspection company uses inspection scheduling & interval management to pass Royal Commission Yanbu (RCJY) and HRSD labor audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "YASREF (Aramco / Sinopec)",
    "Aramco Yanbu Refinery",
    "Yanpet (SABIC / ExxonMobil)",
    "Yansab (SABIC)",
    "Petro Rabigh (Aramco / Sumitomo)",
    "RC Yanbu PMT",
    "Saudi Electricity Yanbu",
    "Yanbu Cement"
  ],
  "cityRegulators": [
    "Royal Commission Yanbu (RCJY)",
    "HRSD labor",
    "SASO standards",
    "Aramco SAEP-1142",
    "Saudi Ports Authority"
  ],
  "cityPain": [
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Yanbu operator-portal requirements",
    "Royal Commission Yanbu (RCJY) audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from YASREF (Aramco / Sinopec) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Yanbu operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for YASREF (Aramco / Sinopec), Aramco Yanbu Refinery, Yanpet (SABIC / ExxonMobil), Yansab (SABIC), Petro Rabigh (Aramco / Sumitomo). Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with Royal Commission Yanbu (RCJY) and other Saudi Arabia regulators?",
      "Yes. Royal Commission Yanbu (RCJY), HRSD labor, SASO standards, Aramco SAEP-1142 requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Yanbu?",
      "Platform supports English (primary), and where relevant for Saudi Arabia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "How does the scheduler handle deferrals or extensions to inspection due dates?",
      "The deferral workflow requires engineering justification — corrosion-rate analysis, RBI re-assessment, or operating-conditions change — and a sign-off from a qualified inspector (API 510/570/653 certified) and the integrity manager. Deferrals are audit-logged with full chain of approval and the new due date is automatically set. Regulatory limits (e.g., NB-23 §3.3.1 maximum extension) are enforced."
    ],
    [
      "Does it integrate with our existing CMMS (Maximo, SAP PM, AspenTech)?",
      "Yes. Bi-directional integration with the major CMMS / EAM platforms. Inspection scheduling can be the master and push work orders into the CMMS, or the CMMS can be master and Atlantis ERP acts as the inspection-specific layer with code-aware scheduling logic. Asset hierarchies, equipment classes, and functional locations sync."
    ]
  ],
  "lat": 24.089,
  "lng": 38.0618
};
export default function ErpMC_inspection_scheduling_yanbu() { return <ErpModuleCityPage {...data} />; }
