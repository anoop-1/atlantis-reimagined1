import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "metrology-laboratories",
  "name": "Metrology Laboratories",
  "title": "ERP for Metrology Laboratories — Dimensional, Electrical, Pressure, Thermal",
  "h1": "ERP for Metrology Laboratories",
  "desc": "ISO/IEC 17025 metrology lab operations, multi-discipline calibration (dimensional, electrical, pressure, mass, thermal, force, flow, optical), uncertainty budgeting per GUM, customer-asset traceability, and accreditation-audit readiness.",
  "intro": "Metrology laboratories provide measurement traceability to industry — from a Boeing fuselage CMM verification to a pharma analytical balance calibration to a refinery pressure-gauge cross-check. Each discipline (dimensional, electrical, pressure, mass, thermal, force, flow, optical) has its own reference standards, methods, uncertainty model, and accreditation scope.",
  "modules": [
    "calibration-management",
    "work-order-management",
    "certification-tracking",
    "document-control",
    "audit-management",
    "quality-management",
    "inventory-management",
    "asset-management"
  ],
  "regs": [
    "ISO/IEC 17025:2017",
    "ISO 10012:2003 (measurement management)",
    "ANSI/NCSL Z540.1 / Z540.3",
    "ILAC P14 (uncertainty)",
    "JCGM 100:2008 (GUM)",
    "ASME B89.7.3.1 (decision rules)",
    "ASTM E2935 (proficiency testing)",
    "OIML R 76 (mass)",
    "OIML R 111 (weights)"
  ],
  "operators": [
    "Mitutoyo (instrument OEM)",
    "Fluke Calibration (instrument OEM)",
    "Beamex (instrument OEM)",
    "Heise (pressure)",
    "WIKA (pressure)",
    "Mettler-Toledo (mass)",
    "Sartorius (mass)",
    "Keysight Technologies (electrical)",
    "Tektronix (oscilloscopes)",
    "Rohde & Schwarz (RF)"
  ],
  "pain": [
    "Multi-discipline measurement uncertainty in spreadsheets — error-prone, inconsistent",
    "Customer-asset receipt / dispatch — instruments lost in lab, repeat customer calls",
    "Manual cert numbering and re-issue management — audit findings",
    "Proficiency testing / interlab-comparison records scattered — accreditation finding",
    "Customer-specific decision rules (k=2, k=3, customer-defined risk) applied inconsistently"
  ],
  "faqs": [
    [
      "Does it support uncertainty budgets across all disciplines?",
      "Yes. Uncertainty templates exist for dimensional (gauge blocks, CMM, micrometers), electrical (DMM, calibrator, oscilloscope), pressure (digital indicator, deadweight tester, hydraulic / pneumatic), mass (analytical balance, weights), thermal (RTD, thermocouple, IR thermometer), force (load cell, force standard), flow (gas / liquid flow rig), and optical (luminance meter, photometer). Custom uncertainty models can be authored."
    ],
    [
      "Can decision rules be customer-specific (e.g., k=2, k=3, or customer-defined)?",
      "Yes. Decision rules per ISO 17025 §7.8.6 and ILAC G8 are configured per customer / customer-asset-class. Customers can specify simple acceptance (no guard band), shared-risk, guarded acceptance / rejection at chosen probability of false accept / reject, or customer-specific risk-of-false-accept value."
    ],
    [
      "How are customer-supplied reference standards managed separately from in-house standards?",
      "Customer-owned vs. in-house ownership flag on each asset. Customer-owned standards are tracked with customer ID, instrument ID, expected dispatch date, and customer-specific certificate format. In-house standards are tracked with internal asset register, traceability chain, and proficiency-testing program."
    ],
    [
      "Does it support proficiency testing and interlab-comparison records?",
      "Yes. PT enrollment per discipline, PT result tracking (z-score / En-number per ISO 13528), and corrective action when PT is unsatisfactory. The PT register feeds the management review per ISO 17025 §8.9. Interlab-comparison programs (NCSLI, EUROMET) are tracked similarly."
    ],
    [
      "Can certificates be electronically signed and delivered to customers?",
      "Yes. Certificates are e-signed by the technical-signatory (per ISO 17025 §5.6) and delivered to the customer via the customer portal or email. The certificate format complies with ISO 17025 §7.8 — measurement results, uncertainty, method reference, environmental conditions, decision rule, traceability statement. Customers can retrieve historical certs from the portal."
    ]
  ]
};
export default function ErpIndustry_metrology_laboratories() { return <ErpIndustryPage {...data} />; }
