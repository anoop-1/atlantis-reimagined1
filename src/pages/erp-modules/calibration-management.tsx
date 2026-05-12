import ErpModulePage from '@/components/ErpModulePage';
const data = {
  "slug": "calibration-management",
  "name": "Calibration Management",
  "title": "Calibration Management Software — ISO 17025 / ANSI Z540 Compliant",
  "h1": "Calibration Management Module",
  "desc": "Manage calibration intervals, certificates, traceability chains, and uncertainty budgets for measurement equipment. ISO/IEC 17025:2017 + ANSI/NCSL Z540 compliant. Built for calibration laboratories AND inspection companies running in-house calibration programs.",
  "intro": "Every gauge, meter, probe, and instrument used to make a measurement-of-record must be calibrated against traceable standards on a defined interval. For a calibration laboratory under ISO/IEC 17025 accreditation this is the entire business. For an inspection company it is a critical compliance function: an audit finding of 'instrument used past calibration due date' can void thousands of inspection reports retroactively. The calibration management module is the system of record for both.",
  "features": [
    "Per-asset calibration interval per ISO 17025 §6.4.7 with manufacturer-recommended overrides",
    "Reference-standard traceability chain: NIST / NPL / PTB / NIM / NMIA-traceable to your customer's instrument",
    "Uncertainty budget builder per JCGM 100:2008 (GUM) with Type A + Type B contributions",
    "ISO 17025 §7.8 compliant calibration certificate generation with measurement results table, environmental conditions, uncertainty, decision rule",
    "Customer asset register with separate ownership flag (in-house vs. customer-owned vs. loaner)",
    "Calibration order workflow: receipt → environmental conditioning → calibration → review → dispatch",
    "Out-of-tolerance handling per ISO 17025 §7.10: customer notification, retroactive measurement risk, recall workflow",
    "Method validation register per ISO 17025 §7.2.2 with revalidation triggers",
    "Inter-laboratory comparison and proficiency testing program tracker",
    "Environmental condition logging (temperature, humidity, pressure) with stability tolerances per method",
    "Decision rule library: ILAC G8, ASME B89.7.3.1, customer-specific risk-of-false-accept",
    "Mass, dimensional, pressure, electrical, thermal, force, flow, optical disciplines — single platform"
  ],
  "useCases": [
    "ISO 17025-accredited calibration laboratory with 5,000+ customer instruments under management",
    "Aerospace MRO managing dimensional, pressure, and electrical calibration for AS9100 quality system",
    "Pharmaceutical / biotech facility requiring 21 CFR Part 11 electronic-signature on every cal record",
    "Inspection company running in-house calibration of UT thickness gauges, pressure test gauges, holiday detectors",
    "Manufacturing quality department managing CMM and gauge calibration on production line"
  ],
  "industries": [
    "Calibration laboratories",
    "Metrology labs",
    "Aerospace & defense",
    "Pharmaceutical & biotech",
    "Power generation",
    "Oil & gas inspection"
  ],
  "integrations": [
    "Mitutoyo MeasurLink",
    "Fluke MET/CAL",
    "Beamex CMX",
    "ISO 17025 quality management systems",
    "ERP integration to SAP, Oracle, NetSuite",
    "LIMS systems (LabWare, STARLIMS, LabVantage)"
  ],
  "faqs": [
    [
      "Is the platform ISO/IEC 17025:2017 accredited or audited?",
      "The platform is designed to be compliant with ISO/IEC 17025:2017 documentation requirements, but accreditation is granted to the laboratory, not the software. Atlantis NDT supports laboratories through ANAB, A2LA, UKAS, DAkkS, and NABL accreditation cycles with audit-ready document packages, change control records, and personnel competency files."
    ],
    [
      "Does it handle uncertainty budgets per the GUM (JCGM 100:2008)?",
      "Yes. The uncertainty builder supports Type A (statistical, from repeated measurements) and Type B (other, from calibration certificates and manufacturer specifications) contributions. Combined standard uncertainty and expanded uncertainty (k=2 typical) are calculated automatically. Sensitivity coefficients can be entered for non-trivial measurement models."
    ],
    [
      "Can it manage multi-discipline calibration — dimensional, electrical, pressure, mass?",
      "Yes. Method templates are provided for ~80 calibration disciplines including dimensional (gauge blocks, micrometers, CMMs), electrical (DMMs, oscilloscopes, calibrators), pressure (digital indicators, dead-weight testers, deadweight gauges), mass (analytical balances), thermal (RTDs, thermocouples, thermistors), and flow (gas meters, liquid flow rigs). Custom method templates can be added."
    ],
    [
      "How does it handle out-of-tolerance findings per ISO 17025 §7.10?",
      "When a measurement falls outside the assigned tolerance the system flags the certificate for review, records the as-found / as-left values, calculates the customer-impact window (instruments measured by this gauge since the last successful calibration), and generates a customer notification with retroactive measurement-risk statement. Recall and re-calibration workflow is automatic."
    ],
    [
      "Does it support 21 CFR Part 11 for pharmaceutical / biotech customers?",
      "Yes. Electronic-signature workflow, audit trail (who-did-what-when), data integrity attributes (ALCOA+), and validated electronic record retention are supported. The platform IQ/OQ/PQ validation package is available for customers operating under FDA, EMA, or ANVISA jurisdiction."
    ]
  ]
};
export default function ErpModule_calibration_management() { return <ErpModulePage {...data} />; }
