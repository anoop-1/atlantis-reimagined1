import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "calibration-laboratories",
  "name": "Calibration Laboratories",
  "title": "ERP & LIMS Software for Calibration Laboratories (ISO 17025)",
  "h1": "ERP for ISO/IEC 17025 Calibration Laboratories",
  "desc": "End-to-end calibration laboratory management: customer instrument receipt, environmental conditioning, calibration execution, uncertainty budgeting, ISO 17025 §7.8 compliant certificate generation, customer dispatch, and accreditation audit support.",
  "intro": "A calibration laboratory is a high-throughput, high-precision, audit-intensive business. Hundreds of customer instruments arrive each week. Each must be received, conditioned, calibrated by a competent technician on traceable standards, documented per ISO/IEC 17025:2017 §7.8, certified, and dispatched on a tight SLA. The accreditation body (A2LA, UKAS, DAkkS, NABL, ANAB, NATA) audits annually. Atlantis ERP's calibration-lab configuration is built for ISO 17025 from day one.",
  "modules": [
    "calibration-management",
    "work-order-management",
    "certification-tracking",
    "audit-management",
    "document-control",
    "quality-management",
    "inventory-management",
    "asset-management"
  ],
  "regs": [
    "ISO/IEC 17025:2017",
    "ANSI/NCSL Z540.1 / Z540.3",
    "ISO 10012:2003",
    "ILAC P14 (uncertainty)",
    "JCGM 100:2008 (GUM)",
    "JCGM 200:2012 (VIM)",
    "EA-4/02 (uncertainty)",
    "ASTM E2935 (decision rules)",
    "ANAB / A2LA / UKAS / DAkkS / NABL accreditation"
  ],
  "operators": [
    "Mitutoyo (instrument supplier)",
    "Fluke Calibration (instrument supplier)",
    "Beamex (instrument supplier)",
    "NIST (national standards — US)",
    "NPL (national standards — UK)",
    "PTB (national standards — DE)",
    "BIPM (international)",
    "Major aerospace primes (Boeing, Airbus, RTX)",
    "Pharmaceutical OEMs (Pfizer, GSK, J&J, Novartis)"
  ],
  "pain": [
    "Excel-based uncertainty budgets — error-prone, no version control, audit nightmare",
    "Word / PDF certificate generation — slow, no validation, inconsistent format",
    "Customer-asset tracking in disparate folders — instruments lost on-site, repeat customer enquiries",
    "Manual ISO 17025 §7.10 out-of-tolerance handling — customer-impact analysis missed",
    "No reliable proficiency-testing / interlab-comparison tracker — accreditation finding"
  ],
  "faqs": [
    [
      "Is the system ISO 17025:2017 accredited or merely 'compliant'?",
      "Software cannot be accredited — only the laboratory is. The system is designed to support ISO/IEC 17025:2017 §7.8 (reporting), §7.10 (nonconforming work), §6.4 (equipment), §6.6 (externally provided products and services), §7.2 (selection / verification of methods), and §7.6 (uncertainty). Laboratories using the system have been audited successfully by ANAB, A2LA, UKAS, DAkkS, and NABL with zero software-related findings."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. Type A (statistical, from repeated measurements) and Type B (other, from cert / spec / experience) contributions, sensitivity coefficients (∂y/∂xi), combined standard uncertainty, expanded uncertainty (k=2 typical for 95.45% coverage), and effective degrees of freedom (Welch-Satterthwaite). The uncertainty budget is reproducible, auditable, and exportable."
    ],
    [
      "Can the laboratory operate multi-discipline — dimensional, pressure, mass, electrical, thermal — on one platform?",
      "Yes. Method templates exist for ~80 calibration disciplines and custom templates can be added. Cross-discipline reporting is unified — a customer dispatch can contain instruments calibrated by 3 different disciplines on a single certificate package, with discipline-specific uncertainty and traceability chain."
    ],
    [
      "How is the ISO 17025 §7.10 out-of-tolerance workflow handled?",
      "When an as-found measurement falls outside tolerance the system flags the certificate, records as-found / as-left values, identifies the affected customer instruments and their use history, and generates a customer notification with retroactive-measurement-risk statement. The customer can request recall and re-calibration of any instruments measured by the suspect gauge during the at-risk period."
    ],
    [
      "Does it support 21 CFR Part 11 for pharmaceutical / biotech customer instruments?",
      "Yes. Optional 21 CFR Part 11 mode enforces electronic-signature with meaning-of-signature, complete audit trail, and tamper-evident time-stamping. The IQ / OQ / PQ validation package is available for FDA / EMA / ANVISA-regulated customers requiring vendor-validated electronic record systems."
    ]
  ]
};
export default function ErpIndustry_calibration_laboratories() { return <ErpIndustryPage {...data} />; }
