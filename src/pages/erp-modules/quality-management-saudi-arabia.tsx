import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "quality-management",
  "moduleName": "Quality Management & NCR",
  "citySlug": "saudi-arabia",
  "cityName": "Saudi Arabia",
  "country": "Saudi Arabia",
  "title": "Quality Management & NCR in Saudi Arabia",
  "desc": "Quality Management & NCR ERP module for inspection companies in Saudi Arabia, Saudi Arabia. Pre-configured for Saudi Aramco upstream/downstream, SABIC petrochemicals and aligned with HRSD, GAMI. Demo: info@atlantisndt.com.",
  "intro": "Every accredited inspection company runs a quality management system. Whether it's ISO 9001, ISO 17025, AS9100, IATF 16949, or all of the above, the QMS needs to be functional — not just paper.\n\nFor inspection teams operating in Saudi Arabia, Saudi Arabia, the quality management & ncr module is configured against local realities: World's largest integrated oil & gas. SAEP-1112 / SAEP-1142. Vision 2030 mega-projects. Pre-built templates support operator-specific quality clauses from Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining, SADAF, and regulatory frameworks under HRSD, GAMI, SASO are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Saudi Arabia inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Nonconformance report (NCR) workflow: identification → containment → investigation → disposition → closure",
    "Root cause analysis tools: 5-Why, fishbone (Ishikawa), fault tree, FMEA",
    "CAPA lifecycle: corrective action → preventive action → effectiveness review",
    "Customer complaint intake and tracking with response-time SLA",
    "Supplier quality scorecard: on-time delivery, defect rate, audit performance, recall history",
    "Internal audit + external audit + accreditation audit integration (links to Audit Management module)",
    "Tailored for Saudi Arabia workflow — pre-configured operator templates for Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining",
    "Regulatory alignment with HRSD, GAMI, SASO — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Saudi Arabia inspection contractor serving Saudi Aramco upstream/downstream and SABIC petrochemicals deploys quality management & ncr as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Saudi Arabia EPC quality team standardizes quality management & ncr across 4 simultaneous project sites in the Saudi Arabia market. Daily reports, audit packages, and customer-format reports flow to Ma'aden mining portals automatically.",
    "A growing Saudi Arabia-based service provider integrates quality management & ncr with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by SADAF — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Saudi Arabia inspection company uses quality management & ncr to pass HRSD and GAMI audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Saudi Aramco upstream/downstream",
    "SABIC petrochemicals",
    "Ma'aden mining",
    "SADAF",
    "KEMYA",
    "Yanpet",
    "PetroRabigh",
    "YASREF"
  ],
  "cityRegulators": [
    "HRSD",
    "GAMI",
    "SASO",
    "Aramco SAEP",
    "MODON",
    "RCJY (Royal Commission Jubail/Yanbu)"
  ],
  "cityPain": [
    "Quality Management & NCR tracked in spreadsheets — always 2 months behind Saudi Arabia operator-portal requirements",
    "HRSD audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Saudi Aramco upstream/downstream updates monthly — internal procedures lag by weeks",
    "Customer-format reports for SABIC petrochemicals, Ma'aden mining, SADAF require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the quality management & ncr module configured for Saudi Arabia operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Saudi Aramco upstream/downstream, SABIC petrochemicals, Ma'aden mining, SADAF, KEMYA. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with HRSD and other Saudi Arabia regulators?",
      "Yes. HRSD, GAMI, SASO, Aramco SAEP requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Saudi Arabia?",
      "Platform supports English (primary), and where relevant for Saudi Arabia: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
    ],
    [
      "How is the NCR → CAPA workflow structured?",
      "An NCR is opened on discovery (audit finding, customer complaint, internal observation, recurring issue). The workflow forces containment first (stop the bleeding), then investigation (root cause), then corrective action (fix this occurrence), then preventive action (stop it happening elsewhere). Effectiveness review 60–180 days later verifies the fix held. Each stage has a responsible owner, target date, and approval signature."
    ],
    [
      "Does it support AS9100D customer-specific quality clauses?",
      "Yes. AS9100D §4.4 requires that customer-specific quality clauses (e.g., Boeing D6-82479, Airbus PSPs, Pratt & Whitney ASQR-01) are flow-down to internal processes. The system maintains a customer-clause register with cross-reference to internal procedures, training records, and audit evidence."
    ]
  ],
  "lat": 24.7136,
  "lng": 46.6753
};
export default function ErpMC_quality_management_saudi_arabia() { return <ErpModuleCityPage {...data} />; }
