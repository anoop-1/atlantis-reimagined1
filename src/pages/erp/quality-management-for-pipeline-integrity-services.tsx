import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function QualityManagementForPipelineIntegrityServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="Quality Management for Pipeline Integrity Services"
      slug="quality-management-for-pipeline-integrity-services"
      appName="Quality Management"
      industry="pipeline integrity services"
      breadcrumbLabel="QMS for Pipeline Integrity"
      trustBadge="API 1173 / ISO 9001 / API Q1 ready"
      metaDescription="Atlantis NDT ERP Quality Management for pipeline integrity firms — API 1173 Pipeline SMS, ISO 9001:2015 QMS, API Q1 Spec quality systems, PHMSA / CER auditable workflows, ILI verification dig records. Flat regional pricing."
      heroBody="Atlantis NDT ERP Quality Management for pipeline integrity service providers — API 1173 Pipeline SMS structural framework, ISO 9001:2015 quality management system, API Q1 / Q2 quality specifications, PHMSA 49 CFR 192 / 195 auditable workflows, CER Condition 9 documentation, and ILI verification-dig records. Part of the all-apps-included subscription."
      whatItIs={[
        "Quality Management for Pipeline Integrity Services inside Atlantis NDT ERP is the Odoo 18 Quality + Documentation + Audit module configured for the regulatory-driven quality reality of pipeline integrity — API 1173 (Pipeline Safety Management System, increasingly required by PHMSA and operators), ISO 9001:2015 management-system architecture, API Q1 (manufacturing) / Q2 (service) quality specifications, PHMSA 49 CFR 192 (gas pipeline) and 49 CFR 195 (hazardous liquid pipeline) Integrity Management Plans, CER (Canadian Energy Regulator) Condition 9 documentation, and API 1160 / 1163 / 1170 / 1175 / 1177 / 1178 / 1182 industry standards.",
        "Every nonconformance, corrective action, preventive action, customer complaint, internal audit finding and management-review minute flows through the structured QMS — with API 1173 SMS leadership, employee involvement, hazard identification, hazard prevention/control, training, evaluation/improvement, and incident reporting maturity tracked separately. ILI verification-dig records — where the in-line-inspection tool's anomaly call is verified by in-the-ditch NDT — flow as a special quality-record type with statistical analysis of POI/POD by tool / by anomaly-class / by pipe age.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston pipeline integrity firm (75 staff) consolidated 14 client-specific QMS documents into one ISO 9001:2015 + API 1173 SMS framework — cleared API Q1 audit with zero findings (baseline: 3 findings)." },
        { useCase: "Use Case 2", body: "A Calgary CER-regulated contractor (40 staff) cleared a Condition 9 audit on a 1,500-km pipeline with zero major non-conformances after consolidating documentation in the QMS." },
        { useCase: "Use Case 3", body: "A Mumbai pipeline integrity contractor (35 staff) cleared OISD-141 (asset integrity) and OISD-129 (pressure-equipment inspection) audits with zero findings." },
        { useCase: "Use Case 4", body: "A Sao Paulo pipeline contractor (28 staff) supporting Transpetro tracks ILI verification-dig POI/POD statistics by tool — improved tool-selection decisions and won 3 additional ILI verification scopes worth USD 4.2M." },
      ]}
      keyFeatures={[
        "API 1173 Pipeline SMS framework",
        "ISO 9001:2015 management-system architecture",
        "API Q1 / Q2 quality specification compliance",
        "PHMSA 49 CFR 192 / 195 IMP documentation",
        "CER Condition 9 documentation",
        "ILI verification-dig statistical analysis (POI/POD by tool, anomaly class, pipe age)",
        "Nonconformance / CAR / PAR workflow",
        "Internal audit calendar and execution",
        "Management-review minute capture with action tracking",
        "Customer-complaint workflow with root-cause analysis",
        "API 1160 / 1163 / 1170 / 1175 / 1177 / 1178 / 1182 standards compliance",
        "Operator-specific QMS overlay (Enbridge, Kinder Morgan, TC Energy, Pembina, Williams)",
        "Mobile app for shop-floor / field nonconformance capture",
      ]}
      integrations={[
        "Rosen NIMS verification-dig data ingest",
        "NDT Global verification-dig data exchange",
        "T.D. Williamson verification-dig data integration",
        "GE PII PipeView verification-dig data",
        "PHMSA NPMS pipeline-data integration",
        "PHMSA Pipeline Safety Reporting submission portal",
        "CER Online Application System submission",
        "API 1163 conformity-assessment evidence pack export",
        "API Q1 / Q2 / API 1173 audit-pack export",
        "Operator-specific quality portals (Enbridge SAP Ariba, Kinder Morgan)",
      ]}
      faqs={[
        { question: "Does the QMS implement API 1173 Pipeline SMS?", answer: "Yes. API 1173 Pipeline SMS — the safety-management framework increasingly required by PHMSA and pipeline operators for both pipeline owner/operators and their contractors — is structurally implemented. The 10 SMS elements (Leadership and Management Commitment, Stakeholder Engagement, Risk Management, Operational Controls, Incident Investigation/Evaluation/Lessons Learned, Safety Assurance, Management Review and Continuous Improvement, Emergency Preparedness and Response, Competence/Awareness/Training, Documentation and Records Management) are pre-loaded as document folders and audit checklists." },
        { question: "How does the QMS handle ILI verification-dig records?", answer: "ILI verification-dig records — where the in-line-inspection tool's anomaly call is verified by in-the-ditch NDT — are a special quality record. Each verification dig captures the ILI-called anomaly type, depth, length, orientation; the in-the-ditch NDT (UT/MFL/PAUT) measured anomaly type, depth, length, orientation; and the POI (Probability of Identification) / POD (Probability of Detection) statistics roll up by tool / by anomaly class / by pipe age. This data is invaluable for ILI tool selection and customer reporting." },
        { question: "Can the QMS produce PHMSA-compliant IMP documentation?", answer: "Yes. PHMSA 49 CFR 192.917 (gas pipeline IMP) and 49 CFR 195.452 (hazardous liquid pipeline IMP) require structured Integrity Management Plans covering identification of HCAs, baseline assessment, continual assessment, additional preventive and mitigative measures, performance metrics, record keeping, management of change, and quality assurance. The QMS produces audit-ready PHMSA IMP documentation packs in under 5 minutes." },
        { question: "Does the QMS support CER Condition 9 documentation?", answer: "Yes. CER (Canadian Energy Regulator) Condition 9 — applicable to federally-regulated pipelines — requires structured quality-management documentation including manuals, procedures, work instructions, training records and audit reports. The QMS produces Condition 9 audit-ready documentation packs for CER (and provincial-regulator equivalents — Alberta Energy Regulator, British Columbia OGC, Saskatchewan ERA)." },
        { question: "How does the QMS handle API Q1 / Q2 specifications?", answer: "Yes. API Q1 (Specification for Quality Management System Requirements for Manufacturing Organizations for the Petroleum and Natural Gas Industry) and API Q2 (Quality Management System Requirements for Service Supply Organizations) — both used by pipeline integrity contractors — are encoded as structured requirements with element-by-element evidence accumulation. The system tracks API Q1/Q2 audit-cycle (3-year initial, annual surveillance, 3-year recertification) and produces audit-ready evidence packs." },
        { question: "Can the QMS handle operator-specific QMS overlays?", answer: "Yes. Major pipeline operators publish operator-specific QMS requirements that contractors must comply with — Enbridge Liquids Pipelines Operations Procedures, Kinder Morgan Vendor QMS, TC Energy Operating Practices, Pembina Operating Procedures, Williams Operating Practices. The QMS supports parallel client-overlay frameworks so a contractor working for multiple operators can demonstrate compliance with each operator's specific QMS expectations without maintaining separate document libraries." },
        { question: "Does the QMS support API 1182 RNG / hydrogen pipeline?", answer: "Yes. API 1182 (Recommended Practice for Pipeline Public Awareness Programs) and the emerging hydrogen-pipeline standards (API 1180, ASME B31.12 H2 pipeline, ASME PCC-2 chapter 5 H2-service integrity) are loaded as separate quality frameworks. The growing RNG (Renewable Natural Gas) and hydrogen-blend pipeline market segments are tracked with separate quality-record streams." },
        { question: "How does the QMS handle nonconformance workflow?", answer: "Nonconformance / Corrective Action Request (CAR) / Preventive Action Request (PAR) workflow is structurally implemented per ISO 9001:2015 §10.2 (Nonconformity and Corrective Action). Every NC carries containment, root-cause analysis (5-Why, Ishikawa fishbone, fault tree), corrective action, verification of effectiveness, and trend analysis. The system flags recurring NCs that may indicate systemic root cause." },
      ]}
    />
  );
}
