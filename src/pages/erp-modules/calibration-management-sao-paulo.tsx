import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "calibration-management",
  "moduleName": "Calibration Management",
  "citySlug": "sao-paulo",
  "cityName": "Sao Paulo",
  "country": "Brazil",
  "title": "Calibration Management in Sao Paulo",
  "desc": "Calibration Management ERP module for inspection companies in Sao Paulo, Brazil. Pre-configured for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel) and aligned with ANP, Ibama environment. Demo: info@atlantisndt.com.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business.\n\nFor inspection teams operating in Sao Paulo, Brazil, the calibration management module is configured against local realities: Brazil industrial powerhouse. Petrobras Replan / Revap refineries. EMBRAER aerospace. Cubatao steel. Pre-built templates support operator-specific quality clauses from Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos), and regulatory frameworks under ANP, Ibama environment, CNEN radiation are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Sao Paulo inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Tailored for Sao Paulo workflow — pre-configured operator templates for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda)",
    "Regulatory alignment with ANP, Ibama environment, CNEN radiation — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Sao Paulo inspection contractor serving Petrobras (Replan Paulinia, Revap, Cubatao RPBC) and USIMINAS (Cubatao steel) deploys calibration management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Sao Paulo EPC quality team standardizes calibration management across 4 simultaneous project sites in the Brazil market. Daily reports, audit packages, and customer-format reports flow to CSN (Volta Redonda) portals automatically.",
    "A growing Sao Paulo-based service provider integrates calibration management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by EMBRAER (Sao Jose dos Campos) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Sao Paulo inspection company uses calibration management to pass ANP and Ibama environment audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
  ],
  "cityOperators": [
    "Petrobras (Replan Paulinia, Revap, Cubatao RPBC)",
    "USIMINAS (Cubatao steel)",
    "CSN (Volta Redonda)",
    "EMBRAER (Sao Jose dos Campos)",
    "Braskem petrochemicals",
    "Vale mining HQ",
    "Cosan / Raizen",
    "Volkswagen do Brasil"
  ],
  "cityRegulators": [
    "ANP",
    "Ibama environment",
    "CNEN radiation",
    "INMETRO accreditation",
    "Ministerio do Trabalho (NR-13)"
  ],
  "cityPain": [
    "Calibration Management tracked in spreadsheets — always 2 months behind Sao Paulo operator-portal requirements",
    "ANP audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petrobras (Replan Paulinia, Revap, Cubatao RPBC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the calibration management module configured for Sao Paulo operators?",
      "Yes. Pre-loaded operator-specific quality clauses, qualification schemes, and report formats for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos), Braskem petrochemicals. Atlantis NDT updates the operator-template library on a quarterly cadence so flow-down stays current with operator specification revisions."
    ],
    [
      "Does it comply with ANP and other Brazil regulators?",
      "Yes. ANP, Ibama environment, CNEN radiation, INMETRO accreditation requirements drive the audit-readiness defaults. Annual + ad-hoc inspections generate audit-package PDFs with full chain-of-custody, personnel qualification matrix, calibration records, and procedure revision history pre-assembled."
    ],
    [
      "What languages and currencies are supported for Sao Paulo?",
      "Platform supports English (primary), and where relevant for Brazil: Arabic (Gulf), Bahasa Indonesia, Hindi/Marathi/Telugu (India), Mandarin (China/SG), Spanish/Portuguese (Americas), French (West Africa/Canada). Invoicing supports USD, EUR, GBP, AED, SAR, INR, SGD, AUD, CAD, IDR, MYR, QAR, NGN — full multi-currency with VAT/GST as applicable."
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
  "lat": -23.5505,
  "lng": -46.6333
};
export default function ErpMC_calibration_management_sao_paulo() { return <ErpModuleCityPage {...data} />; }
