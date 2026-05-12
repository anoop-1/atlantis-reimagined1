import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "industrySlug": "oilfield-services",
  "industryName": "Oilfield Services & Wellsite Inspection",
  "title": "Calibration Management for Oilfield Services & Wellsite Inspection",
  "desc": "Calibration Management for Oilfield Services & Wellsite Inspection — purpose-configured module from Atlantis NDT ERP. API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment). Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor oilfield services & wellsite inspection, the calibration management module is configured around the codes, regulators, and operator-specific requirements you face every day: API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control), API RP 53 (BOP). Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from ExxonMobil — upstream, Chevron — upstream, Shell — upstream, BP — upstream so your team is productive on day one — not after six months of configuration.",
  "industryFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for oilfield services & wellsite inspection — pre-configured templates, terminology, and reports",
    "Integrates with ExxonMobil — upstream, Chevron — upstream, Shell — upstream vendor-portal flow-down requirements"
  ],
  "industryUseCases": [
    "A 25-person oilfield services & wellsite inspection runs calibration management as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.",
    "A multinational oilfield services & wellsite inspection deploys calibration management across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.",
    "A growing oilfield services & wellsite inspection integrates calibration management with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "An audit-driven oilfield services & wellsite inspection uses calibration management to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "industryCodes": [
    "API Spec 4F (drilling derricks)",
    "API Spec 6A (wellhead)",
    "API Spec 16A (drill-through equipment)",
    "API Spec 16D (BOP control)",
    "API RP 53 (BOP)",
    "API RP 5A5 (OCTG inspection)",
    "API RP 5C5 / 5C6 / 5C7 (casing / tubing)",
    "ISO 13501 / 13628 (subsea)"
  ],
  "industryOperators": [
    "ExxonMobil — upstream",
    "Chevron — upstream",
    "Shell — upstream",
    "BP — upstream",
    "ConocoPhillips — upstream",
    "Saudi Aramco upstream",
    "ADNOC Onshore",
    "PEMEX upstream"
  ],
  "industryPain": [
    "Field-ticket capture on paper — billing disputes, days lost in invoicing",
    "Rig / BOP test scheduling on Excel — compliance findings from regulator",
    "Casing / tubing inspection records scattered — no aggregated wellbore data",
    "OCTG inventory (drill collars, casing, tubing) — no real-time location tracking"
  ],
  "faqs": [
    [
      "Does calibration management work specifically for oilfield services & wellsite inspection?",
      "Yes. The module is configured for oilfield services & wellsite inspection workflow with pre-built templates aligned to API Spec 4F (drilling derricks), API Spec 6A (wellhead), API Spec 16A (drill-through equipment), API Spec 16D (BOP control). Operator-specific quality clauses for ExxonMobil — upstream, Chevron — upstream, Shell — upstream are pre-loaded so the system is productive on day one without months of custom configuration."
    ],
    [
      "How does the system integrate with our existing oilfield services & wellsite inspection tools?",
      "Standard integration via REST API with major oilfield services & wellsite inspection systems. Atlantis NDT ERP can run as the system of record for calibration management while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned."
    ],
    [
      "Can it scale from a small oilfield services & wellsite inspection to a global multinational?",
      "Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person oilfield services & wellsite inspection pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use."
    ],
    [
      "Is the platform ISO/IEC 17025:2017 accredited or audited?",
      "The platform is designed to be compliant with ISO/IEC 17025:2017 documentation requirements, but accreditation is granted to the laboratory, not the software. Atlantis NDT supports laboratories through ANAB, A2LA, UKAS, DAkkS, and NABL accreditation cycles with audit-ready document packages, change control records, and personnel competency files."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. The uncertainty builder supports Type A (statistical, from repeated measurements) and Type B (other, from calibration certificates and manufacturer specifications) contributions. Combined standard uncertainty and expanded uncertainty (k=2 typical) are calculated automatically. Sensitivity coefficients can be entered for non-trivial measurement models."
    ]
  ]
};
export default function ErpCross_calibration_management_for_oilfield_services() { return <ErpModuleIndustryPage {...data} />; }
