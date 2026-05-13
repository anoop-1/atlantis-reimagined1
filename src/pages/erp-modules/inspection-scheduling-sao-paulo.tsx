import ErpModuleCityPage from '@/components/ErpModuleCityPage';
const data = {
  "moduleSlug": "inspection-scheduling",
  "moduleName": "Inspection Scheduling & Interval Management",
  "citySlug": "sao-paulo",
  "cityName": "Sao Paulo",
  "country": "Brazil",
  "title": "Inspection Scheduling & Interval Management in Sao Paulo",
  "desc": "Inspection Scheduling & Interval Management ERP module for inspection companies in Sao Paulo, Brazil. Pre-configured for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel) and aligned with ANP, Ibama environment. Demo: info@atlantisndt.com.",
  "intro": "Owner-operators and inspection contractors share one nightmare: discovering that an inspection due date has slipped past — and that nobody noticed. The consequences range from operational risk to regulatory finding to incident liability.\n\nFor inspection teams operating in Sao Paulo, Brazil, the inspection scheduling & interval management module is configured against local realities: Brazil industrial powerhouse. Petrobras Replan / Revap refineries. EMBRAER aerospace. Cubatao steel. Pre-built templates support operator-specific quality clauses from Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos), and regulatory frameworks under ANP, Ibama environment, CNEN radiation are reflected in the workflow defaults. Atlantis NDT ERP is delivered as multi-tenant SaaS with regional data residency — a 5-person Sao Paulo inspection contractor and a 200-person multinational both run on the same platform.",
  "cityFeatures": [
    "API 510 pressure vessel intervals: external 5-yr, internal half-remaining-life capped at 10-yr, or per RBI",
    "API 570 piping intervals by class: Class 1 (5/10), Class 2 (10/20), Class 3 (10/20+), or per RBI",
    "API 653 tank intervals: external monthly visual + 5-yr formal, internal 10-yr or per RBI",
    "ASME B31.3 process piping inspection intervals with severe cyclic service adjustments",
    "Risk-based inspection (RBI) per API 581 — import RBI assessment, use computed inspection plan",
    "Inspection due forecast: 30 / 60 / 90 / 180 / 365 day windows with criticality ranking",
    "Tailored for Sao Paulo workflow — pre-configured operator templates for Petrobras (Replan Paulinia, Revap, Cubatao RPBC), USIMINAS (Cubatao steel), CSN (Volta Redonda)",
    "Regulatory alignment with ANP, Ibama environment, CNEN radiation — audit-ready evidence packages"
  ],
  "cityUseCases": [
    "A mid-size Sao Paulo inspection contractor serving Petrobras (Replan Paulinia, Revap, Cubatao RPBC) and USIMINAS (Cubatao steel) deploys inspection scheduling & interval management as a standalone module — replacing spreadsheets and disconnected SaaS — and reports 60-80% admin-time reduction within 90 days.",
    "A Sao Paulo EPC quality team standardizes inspection scheduling & interval management across 4 simultaneous project sites in the Brazil market. Daily reports, audit packages, and customer-format reports flow to CSN (Volta Redonda) portals automatically.",
    "A growing Sao Paulo-based service provider integrates inspection scheduling & interval management with accounting (QuickBooks / Xero / Tally for India / Sage / Reliance ERP) and the CMMS used by EMBRAER (Sao Jose dos Campos) — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.",
    "A regulator-audit-driven Sao Paulo inspection company uses inspection scheduling & interval management to pass ANP and Ibama environment audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep."
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
    "Inspection Scheduling & Interval Management tracked in spreadsheets — always 2 months behind Sao Paulo operator-portal requirements",
    "ANP audit preparation takes 80+ hours per cycle — finds gaps too late to remediate",
    "Operator-portal flow-down from Petrobras (Replan Paulinia, Revap, Cubatao RPBC) updates monthly — internal procedures lag by weeks",
    "Customer-format reports for USIMINAS (Cubatao steel), CSN (Volta Redonda), EMBRAER (Sao Jose dos Campos) require manual reformatting per submission"
  ],
  "faqs": [
    [
      "Is the inspection scheduling & interval management module configured for Sao Paulo operators?",
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
      "How does the scheduler handle deferrals or extensions to inspection due dates?",
      "The deferral workflow requires engineering justification — corrosion-rate analysis, RBI re-assessment, or operating-conditions change — and a sign-off from a qualified inspector (API 510/570/653 certified) and the integrity manager. Deferrals are audit-logged with full chain of approval and the new due date is automatically set. Regulatory limits (e.g., NB-23 §3.3.1 maximum extension) are enforced."
    ],
    [
      "Does it integrate with our existing CMMS (Maximo, SAP PM, AspenTech)?",
      "Yes. Bi-directional integration with the major CMMS / EAM platforms. Inspection scheduling can be the master and push work orders into the CMMS, or the CMMS can be master and Atlantis ERP acts as the inspection-specific layer with code-aware scheduling logic. Asset hierarchies, equipment classes, and functional locations sync."
    ]
  ],
  "lat": -23.5505,
  "lng": -46.6333
};
export default function ErpMC_inspection_scheduling_sao_paulo() { return <ErpModuleCityPage {...data} />; }
