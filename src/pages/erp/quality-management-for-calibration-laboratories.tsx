import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function QualityManagementForCalibrationLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="Quality Management for Calibration Laboratories"
      slug="quality-management-for-calibration-laboratories"
      appName="Quality Management"
      industry="calibration laboratories"
      breadcrumbLabel="QMS for Cal Labs"
      trustBadge="ISO/IEC 17025 / ISO 10012 / ILAC ready"
      metaDescription="Atlantis NDT ERP QMS for ISO/IEC 17025 calibration laboratories — §4 to §8 structural compliance, ISO 10012 measurement-management system, ILAC G8 conformity-statement framework, PT/ILC participation records. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Quality Management for ISO/IEC 17025:2017 calibration laboratories — section-by-section structural compliance (§4 General / §5 Structural / §6 Resource / §7 Process / §8 Management System Options A & B), ISO 10012 measurement-management-system records, ILAC G8 conformity-statement framework, JCGM 100 (GUM) uncertainty evaluation evidence, and PT/ILC participation records. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Quality Management for Calibration Laboratories inside Atlantis NDT ERP is the Odoo 18 Quality + Documentation + Audit module pre-loaded with the structural requirements of ISO/IEC 17025:2017 — Section 4 (General requirements: impartiality, confidentiality), Section 5 (Structural requirements: legal identity, scope), Section 6 (Resource requirements: personnel, facilities and environmental conditions, equipment, metrological traceability, externally provided products and services), Section 7 (Process requirements: review of requests-tenders-contracts, selection-verification-validation of methods, sampling, handling of test or calibration items, technical records, evaluation of measurement uncertainty, ensuring the validity of results, reporting of results, complaints, nonconforming work, control of data and information management, decision rule), Section 8 (Management system requirements: documentation, control of management system documents and records, actions to address risks and opportunities, improvement, corrective actions, internal audits, management reviews).",
        "PT (Proficiency Testing) and ILC (Inter-Laboratory Comparison) participation per Section 7.7.2 is structured — every PT/ILC scheme participation is logged with scheme provider (APMP, EURAMET, COOMET, SIM, AFRIMETS), parameter, range, lab z-score result, and follow-up corrective-action workflow per Section 7.10 if outcomes are questionable or unsatisfactory.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston ANAB-accredited cal lab (15 metrologists) cleared ISO/IEC 17025:2017 surveillance with zero non-conformances (baseline: 6 NCs)." },
        { useCase: "Use Case 2", body: "A Manchester UKAS-accredited cal lab (12 metrologists) eliminated a recurring §6.3 environmental-monitoring finding across 4 surveillance cycles." },
        { useCase: "Use Case 3", body: "A Pune NABL-accredited cal lab (8 metrologists) consolidated PT/ILC records and cleared NABL audit with zero §7.7 findings." },
        { useCase: "Use Case 4", body: "A Singapore SAC-SINGLAS cal lab (18 metrologists) tracks ILAC G8 conformity-statement evidence and reduced customer dispute resolution from 5 days to 4 hours." },
      ]}
      keyFeatures={[
        "ISO/IEC 17025:2017 §4 General requirements (impartiality, confidentiality)",
        "ISO/IEC 17025:2017 §5 Structural requirements (legal identity, scope)",
        "ISO/IEC 17025:2017 §6 Resource requirements (personnel, facilities, equipment, traceability)",
        "ISO/IEC 17025:2017 §7 Process requirements (request review, methods, uncertainty, decision rule)",
        "ISO/IEC 17025:2017 §8 Management system (Options A and B)",
        "ISO 10012 measurement-management-system records",
        "ILAC G8 conformity-statement framework with Decision Rule library",
        "PT/ILC scheme participation tracking with z-score history",
        "JCGM 100:2008 (GUM) and EA-4/02 M:2022 uncertainty evaluation",
        "Internal audit calendar (annual cycle, full coverage 3-year)",
        "Management review cycle with action tracking",
        "Nonconforming work workflow per §7.10",
        "Mobile app for floor / bench / on-site nonconformance capture",
      ]}
      integrations={[
        "ANAB scope-of-accreditation directory",
        "UKAS scope-of-accreditation directory",
        "DAkkS scope-of-accreditation directory",
        "COFRAC scope-of-accreditation directory",
        "NABL scope-of-accreditation directory",
        "ILAC MRA membership directory",
        "APMP / EURAMET / COOMET / SIM PT scheme integration",
        "BIPM KCDB Key Comparison Database",
        "EA-4/02 M:2022 uncertainty evaluation reference",
        "ISO 17034 reference-material-producer registry",
      ]}
      faqs={[
        { question: "Does the QMS implement ISO/IEC 17025:2017 structurally?", answer: "Yes. Every section (§4 to §8) of ISO/IEC 17025:2017 is pre-loaded as a structured document folder with example procedures, work instructions, forms, records and audit checklists. The accreditation body's specific guidance (ANAB AR 3142, UKAS LAB 13, DAkkS publication 71-SD-0-009, COFRAC LAB REF 02) is layered on top so the lab's documentation matches the audit checklist used by its accreditation body." },
        { question: "How does the QMS handle Decision Rule under §7.8.6?", answer: "ISO/IEC 17025:2017 §7.8.6 requires the lab to state the Decision Rule used when reporting conformity. The QMS maintains a Decision Rule library per customer per instrument class — simple acceptance (no risk consideration), conditional acceptance (using a guard band), guard band with k=2 (PFA<2.5%), guard band with k=1 (PFA<16%), statistical conformity. The conformity statement on each calibration certificate auto-matches the applicable Decision Rule with ILAC G8 / ISO 14253-1 supplementary guidance." },
        { question: "Can the QMS handle PT / ILC participation tracking?", answer: "Yes. Every PT/ILC scheme participation is logged with scheme provider, scheme identifier, parameter, range, uncertainty target, lab's measurement result, assigned value, lab z-score (|z|<2 satisfactory, 2<|z|<3 questionable, |z|>3 unsatisfactory), and follow-up corrective action where outcomes are questionable or unsatisfactory. §7.7.2 requires ongoing PT/ILC participation across the lab's scope so the QMS forecasts PT/ILC coverage gaps." },
        { question: "Does the QMS support JCGM 100 (GUM) uncertainty evaluation?", answer: "Yes. JCGM 100:2008 (GUM, the Guide to the Expression of Uncertainty in Measurement) and the practical EA-4/02 M:2022 (Evaluation of the Uncertainty of Measurement in Calibration) are reference frameworks. The QMS provides uncertainty-budget templates with Type A (statistical) and Type B (other) input quantity definition, partial-derivative sensitivity coefficients, combined standard uncertainty uc via the law of propagation of uncertainty, and expanded uncertainty U = k * uc with k typically 2 for 95% coverage." },
        { question: "How does the QMS implement §6.3 environmental conditions?", answer: "Yes. ISO/IEC 17025:2017 §6.3 requires environmental conditions to be controlled and monitored when they affect measurement validity. The QMS integrates continuous environmental data-logger feeds (temperature, humidity, atmospheric pressure, vibration, electromagnetic environment) and produces §6.3-compliant audit-ready evidence packs in under 5 minutes." },
        { question: "Can the QMS handle ISO 10012 measurement-management-system records?", answer: "Yes. ISO 10012 (Measurement Management Systems — Requirements for measurement processes and measuring equipment) is structurally implemented — measurement-management policy, measurement-process design, measurement-uncertainty determination, equipment confirmation, measuring-process realization, periodic re-validation, continual improvement." },
        { question: "Does the QMS support ILAC MRA cross-border recognition?", answer: "Yes. ILAC MRA (International Laboratory Accreditation Cooperation Mutual Recognition Arrangement) membership directory is maintained. When the lab's accreditation body changes ILAC MRA member-status, customers requiring ILAC MRA recognition are alerted automatically and the customer-policy filter is updated." },
        { question: "How does the QMS handle nonconforming work per §7.10?", answer: "Yes. §7.10 (Nonconforming Work) workflow — containment, evaluation of significance, determination of acceptability, action to suspend or repeat work, action to recall, action to notify customer — is structured. Every NC carries a root-cause analysis, corrective-action workflow, and verification of effectiveness, with trend analysis to identify systemic root cause." },
      ]}
    />
  );
}
