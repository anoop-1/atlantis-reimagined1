import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function DocumentControlForCalibrationLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="Document Control for Calibration Laboratories"
      slug="document-control-for-calibration-laboratories"
      appName="Document Control"
      industry="calibration laboratories"
      breadcrumbLabel="Doc Control for Cal Labs"
      trustBadge="ISO/IEC 17025 §8.3 / ISO 10012 ready"
      metaDescription="Atlantis NDT ERP Document Control for ISO/IEC 17025 calibration laboratories — §8.3 control of management system documents, §7.5 technical records, §6.2 personnel records, ISO 10012 measurement procedures. Flat regional pricing."
      heroBody="Atlantis NDT ERP Document Control for ISO/IEC 17025:2017 calibration laboratories — §8.3 control of management system documents (Option A), §7.5 technical records, §6.2 personnel records (competence and authorisation), ISO 10012 measurement procedures, and traceability documents (calibration certificates, primary-standard certificates, NMI traceability). Part of the all-apps-included subscription."
      whatItIs={[
        "Document Control for Calibration Laboratories inside Atlantis NDT ERP is the Odoo 18 Document Management module configured for the rigorous document-control requirements of ISO/IEC 17025:2017 — §8.3 Control of Management System Documents (Option A or Option B), §7.5 Technical Records, §6.2 Personnel (competence, authorisation), §6.4 Equipment (calibration records, maintenance records), §6.5 Metrological Traceability, §6.6 Externally Provided Products and Services, §7.7 Ensuring the Validity of Results (PT/ILC records), §7.10 Nonconforming Work, §8.5 Actions to Address Risks and Opportunities, §8.7 Corrective Actions, §8.8 Internal Audits, §8.9 Management Reviews.",
        "Calibration certificates — the laboratory's primary product — are issued with controlled numbering, immutable post-issuance content, signature integrity per ILAC P14 (Policy for Uncertainty in Calibration) and ILAC G24 (Guidelines for the determination of calibration intervals of measuring instruments). Primary-standard NMI certificates (NIST SRM, NPL, PTB, NIM) are preserved as the apex of the traceability chain.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston ANAB-accredited cal lab (15 metrologists) cleared §8.3 surveillance with zero document-control NCs (baseline: 4 NCs across 4 audits)." },
        { useCase: "Use Case 2", body: "A Manchester UKAS-accredited cal lab (12 metrologists) eliminated a recurring §6.2 personnel-authorisation-evidence gap." },
        { useCase: "Use Case 3", body: "A Pune NABL-accredited cal lab (8 metrologists) consolidated 280 procedures and 9,400 calibration certificates with full revision-history." },
        { useCase: "Use Case 4", body: "A Singapore SAC-SINGLAS cal lab (18 metrologists) tracks ILAC P14 uncertainty-statement evidence and reduced customer dispute resolution from 5 days to 4 hours." },
      ]}
      keyFeatures={[
        "ISO/IEC 17025:2017 §8.3 control of management system documents",
        "ISO/IEC 17025:2017 §7.5 technical records retention",
        "ISO/IEC 17025:2017 §6.2 personnel competence and authorisation records",
        "ISO/IEC 17025:2017 §6.4 equipment calibration and maintenance records",
        "ISO/IEC 17025:2017 §6.5 metrological traceability documents",
        "ISO 10012 measurement-procedure document framework",
        "ILAC P14 uncertainty-in-calibration policy",
        "ILAC G24 calibration-interval determination guidelines",
        "Calibration certificate issuance with controlled numbering",
        "Immutable post-issuance certificate content",
        "Primary-standard NMI certificate preservation (NIST/NPL/PTB/NIM)",
        "Multi-currency / multi-language certificate templates",
        "Mobile app for field-cal certificate access (offline-capable)",
      ]}
      integrations={[
        "Beamex CMX / LOGiCAL document export",
        "Fluke MET/TEAM document export",
        "Druck DPI 620 / 620G document data",
        "Mensor CPC-8000 document export",
        "Indysoft GAGEpack document import",
        "ProCalV5 / Prime Technologies document export",
        "ANAB scope-of-accreditation directory document",
        "UKAS scope-of-accreditation directory document",
        "DAkkS scope-of-accreditation directory document",
        "NABL scope-of-accreditation directory document",
      ]}
      faqs={[
        { question: "Does the platform implement ISO/IEC 17025 §8.3?", answer: "Yes. §8.3 (Control of Management System Documents) Option A requires controlled documents (procedures, work instructions, forms) with author, reviewer, approver, effective date, revision number, distribution control, and obsolete-document withdrawal. Option B labs (operating under ISO 9001 with §8 only for traceability) follow ISO 9001:2015 §7.5 document control. The platform supports both options." },
        { question: "How does the platform handle §7.5 technical records?", answer: "Yes. §7.5 Technical Records require retention of original observations, derived data and sufficient information to establish an audit trail, calibration records, test records, and identification of authorised personnel. Records must be legible, readily retrievable, protected from loss, and retained per the lab's retention policy (typically 5 years minimum for calibration, customer-specific 7-10 years common)." },
        { question: "Does the platform support §6.2 personnel records?", answer: "Yes. §6.2 Personnel requires records of competence (education, training, technical knowledge, experience), authorisation (the lab's formal authorisation of personnel for specific activities), and ongoing monitoring of competence. Personnel files include initial-qualification evidence, continuing-education records, peer-witness records, customer-feedback, and renewal-cycle alerts." },
        { question: "How does the platform handle ILAC P14 uncertainty statements?", answer: "Yes. ILAC P14 (Policy for Uncertainty in Calibration) requires every accredited calibration certificate to state the measurement uncertainty with a stated coverage factor (typically k=2 for ~95% coverage). The platform's certificate templates auto-populate the uncertainty value from the underlying uncertainty-budget calculation and warn if the result-uncertainty falls outside the lab's accredited scope's stated CMC (Calibration and Measurement Capability)." },
        { question: "Can the platform manage controlled certificate issuance?", answer: "Yes. Calibration certificates are issued with controlled numbering (per-year sequential or per-discipline sequential, configurable), immutable post-issuance content (preserved with cryptographic hash for tamper evidence), authorised signatory (printed name + position + signature image + digital signature where required), and customer-distribution-tracking (who has received which revision of which certificate)." },
        { question: "Does the platform support NMI primary-standard certificate preservation?", answer: "Yes. Primary-standard certificates from NMIs (NIST, NPL, PTB, NIM, NMIJ, KRISS, BIPM, VSL, NRC) are preserved as the apex of the traceability chain with their full PDF certificate, the certified value, the expanded uncertainty, the coverage factor k, the artifact identification, and the date of calibration. Every downstream calibration certificate cross-references the relevant NMI certificate." },
        { question: "How does the platform handle multi-language certificate templates?", answer: "Yes. Multi-language certificate templates — English, Spanish, French, German, Italian, Japanese, Chinese, Korean, Arabic, Hindi — are supported with the substantive technical content in the certificate's native language and a customer-facing translation. ISO/IEC 17025:2017 does not require multi-language certificates but customer expectations in regulated markets (pharma in EU, automotive in Japan / Korea, aerospace in France / UK) often do." },
        { question: "Can the platform integrate with calibration execution software?", answer: "Yes. Calibration data captured in Beamex CMX/LOGiCAL, Fluke MET/TEAM, Druck DPI 620, Mensor CPC-8000, Indysoft GAGEpack, ProCalV5 — flows into the document control system as the source-data for the calibration certificate. The certificate-generation workflow consumes the raw data, applies the uncertainty budget, and produces the customer-facing PDF." },
      ]}
    />
  );
}
