import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function AuditManagementForCalibrationLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="Audit Management for Calibration Laboratories"
      slug="audit-management-for-calibration-laboratories"
      appName="Audit Management"
      industry="calibration laboratories"
      breadcrumbLabel="Audit for Cal Labs"
      trustBadge="ISO/IEC 17025 / ILAC P9 / ANAB AR3140 ready"
      metaDescription="Atlantis NDT ERP Audit Management for ISO/IEC 17025 cal labs — accreditation-body audit cycles (ANAB, UKAS, DAkkS, COFRAC, NABL), §8.8 internal audits, peer-witness audits, ILAC P9 surveillance, MoU peer reviews. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Audit Management for ISO/IEC 17025:2017 calibration laboratories — accreditation-body audit cycles (ANAB, UKAS, DAkkS, COFRAC, NABL, A2LA, AS, IANZ, NATA, JAB), §8.8 internal audit cycles, peer-witness audits, ILAC P9 surveillance policies, ILAC MRA Mutual-Recognition Arrangement peer reviews, and customer-specific second-party audits. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Audit Management for Calibration Laboratories inside Atlantis NDT ERP is the Odoo 18 Audit + Quality + Documentation module configured for the multi-layer audit landscape of ISO/IEC 17025 accreditation — accreditation-body initial assessment, surveillance (typically annual or bi-annual), and reassessment (typically every 4 years), §8.8 internal audit cycles (annual cycle, full coverage 3-year), peer-witness audits where the assessor witnesses live measurement on the bench, ILAC P9 (Policy for the Participation in Proficiency Testing) surveillance evidence, ILAC MRA peer-review (the 4-yearly evaluation that maintains the accreditation body's ILAC MRA member status), customer second-party audits, and customer-specific qualification audits.",
        "Major accreditation-body audit specifics — ANAB AR 3140 (Assessment Requirements for Calibration Laboratories), UKAS LAB 13 (UKAS-specific guidance), DAkkS publication 71-SD-0-009 (DAkkS-specific guidance), COFRAC LAB REF 02 — are pre-loaded as audit checklists with body-specific evidence-pack templates.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston ANAB-accredited cal lab (15 metrologists) cleared ANAB surveillance with zero non-conformances (baseline: 3-5 NCs per cycle)." },
        { useCase: "Use Case 2", body: "A Manchester UKAS-accredited cal lab (12 metrologists) cleared UKAS surveillance with zero major NCs for 4 consecutive cycles." },
        { useCase: "Use Case 3", body: "A Pune NABL-accredited cal lab (8 metrologists) cleared NABL surveillance and prepared for ILAC MRA peer-review through the QMS." },
        { useCase: "Use Case 4", body: "A Singapore SAC-SINGLAS cal lab (18 metrologists) cleared parallel customer audits from ExxonMobil, Shell and PSA Singapore via the multi-customer-audit framework." },
      ]}
      keyFeatures={[
        "Accreditation-body audit-cycle scheduling (ANAB, UKAS, DAkkS, COFRAC, NABL, A2LA, NATA, JAB)",
        "ISO/IEC 17025:2017 §8.8 internal audit cycle",
        "Peer-witness audit workflow",
        "ILAC P9 PT/ILC participation evidence",
        "ILAC MRA peer-review preparation",
        "Customer second-party audit calendar",
        "Audit-finding management (CAR / PAR per §8.7 corrective actions)",
        "Audit-finding trend analysis across cycles",
        "Auditor competence per ISO 19011 / ILAC G3",
        "Body-specific audit checklists (ANAB AR3140, UKAS LAB 13, DAkkS 71-SD-0-009)",
        "Audit-prep evidence-pack assembly (1-click ZIP export)",
        "Peer-witness evidence (video / photo / on-bench measurement record)",
        "Mobile app for on-site audit-finding capture",
      ]}
      integrations={[
        "ANAB online portal scope-of-accreditation",
        "UKAS online portal scope-of-accreditation",
        "DAkkS online portal scope-of-accreditation",
        "COFRAC online portal scope-of-accreditation",
        "NABL online portal scope-of-accreditation",
        "A2LA online portal",
        "NATA online portal",
        "ILAC MRA membership registry",
        "ILAC P14 uncertainty-in-calibration policy",
        "ILAC G24 calibration-interval guidelines",
      ]}
      faqs={[
        { question: "Does the platform support accreditation-body audit cycles?", answer: "Yes. Major accreditation bodies — ANAB (USA, ANSI National Accreditation Board), UKAS (UK), DAkkS (Germany), COFRAC (France), NABL (India), A2LA (USA), NATA (Australia), IANZ (New Zealand), JAB (Japan), SAC-SINGLAS (Singapore), HKAS (Hong Kong), CNAS (China), KOLAS (South Korea), SAC (Saudi Arabia), EIAC (UAE) — each have specific audit cycles (typically 4-year recertification with annual or bi-annual surveillance). The platform tracks per-body cycles with the body's specific audit checklist." },
        { question: "How does the platform handle peer-witness audits?", answer: "Yes. Peer-witness audits — where the assessor witnesses live measurement on the bench — are scheduled and tracked as a special audit type. The witness-evidence (which metrologist, which measurement, which standard, which result, the assessor's observation) is preserved with photo / video evidence per accreditation-body guidance." },
        { question: "Can the platform handle §8.8 internal audits?", answer: "Yes. ISO/IEC 17025:2017 §8.8 (Internal Audits) requires periodic internal audits to verify QMS continues to fulfil the requirements of the standard. Annual cycle with full coverage of every section across 3 years is the typical industry practice. The platform schedules internal audits with auditor-competence tracking per ISO 19011 and ILAC G3 (Guidelines for Training Courses for Assessors used by Accreditation Bodies)." },
        { question: "Does the platform support ILAC P9 PT participation?", answer: "Yes. ILAC P9 (Policy for the Participation in Proficiency Testing) — the policy that requires accredited labs to participate in PT/ILC at intervals sufficient to demonstrate ongoing competence — is encoded as a scheduled-activity calendar. Every accredited scope item has a target PT/ILC participation interval; participation gaps trigger alerts." },
        { question: "How does the platform handle ILAC MRA peer review?", answer: "Yes. ILAC MRA peer-review (the 4-yearly evaluation that maintains an accreditation body's ILAC MRA member status) is supported. Labs whose accreditation body undergoes peer review can provide their own performance evidence (PT/ILC results, customer feedback, internal audit findings, complaint history) to support their accreditation body's MRA peer review." },
        { question: "Can the platform handle customer second-party audits?", answer: "Yes. Customer second-party audits — common in aerospace (NADCAP), automotive (IATF 16949 / VDA 6.3 customer audit), pharma (USP/EP-aligned customer audit) and other regulated industries — are tracked with customer-specific audit checklists and customer-specific evidence-pack requirements." },
        { question: "Does the platform track audit-finding trends?", answer: "Yes. Audit-finding trend analysis across cycles shows whether findings are recurring (indicating systemic root cause), declining (indicating effective corrective action) or expanding (indicating maturity issues). Recurring findings trigger root-cause-analysis sub-projects." },
        { question: "How does the platform handle body-specific audit checklists?", answer: "Yes. Body-specific audit checklists — ANAB AR 3140, UKAS LAB 13, DAkkS publication 71-SD-0-009, COFRAC LAB REF 02 — are pre-loaded so the lab's documentation matches the checklist used by its accreditation body. This reduces the audit-finding rate by ensuring all expected evidence is present and correctly named." },
      ]}
    />
  );
}
