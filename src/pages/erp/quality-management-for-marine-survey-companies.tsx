import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function QualityManagementForMarineSurveyCompanies() {
  return (
    <ErpIndustryAppPage
      pageTitle="Quality Management for Marine Survey Companies"
      slug="quality-management-for-marine-survey-companies"
      appName="Quality Management"
      industry="marine survey companies"
      breadcrumbLabel="QMS for Marine Surveyors"
      trustBadge="IACS QSCS / ISO 9001 / IMO ready"
      metaDescription="Atlantis NDT ERP QMS for marine survey companies — IACS QSCS (Quality System Certification Scheme), ISO 9001:2015, IMO Tier I/II audit cycles, P&I Club correspondent QMS, class-society surveyor competence. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Quality Management for marine survey firms — IACS QSCS (Quality System Certification Scheme) audit cycles, ISO 9001:2015 quality management system, IMO Tier I / Tier II audit framework, P&I Club correspondent QMS expectations, and class-society surveyor competence management per IACS UR Z10 / Z11. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Quality Management for Marine Survey Companies inside Atlantis NDT ERP is the Odoo 18 Quality + Documentation + Audit module configured for the unique quality landscape of marine survey work — IACS QSCS (the Quality System Certification Scheme that the 12 IACS member classification societies use to audit their authorized surveyors and recognized organizations), ISO 9001:2015 QMS architecture, IMO Tier I (flag-state audit of recognized organisations) and Tier II (port-state inspection regimes — Paris MoU, Tokyo MoU, USCG, AMSA), and the QMS expectations of major P&I Clubs for correspondent surveyors.",
        "Surveyor competence is tracked per IACS UR Z10 (competence requirements for surveyors) and Z11 (qualifications and experience requirements). Each surveyor's class-society endorsement portfolio, hull / machinery / cargo specialty, FPSO offshore endorsement, dual-class authority, and customer-specific approvals (Maersk preferred-surveyor list, MSC AVL, P&I Club correspondent panels) is maintained as live data with renewal-cycle alerts.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Singapore marine survey firm (45 surveyors) cleared IACS QSCS audit by ABS, LR, BV simultaneously with zero major NCs after the QMS consolidated documentation across three class systems." },
        { useCase: "Use Case 2", body: "A Rotterdam P&I correspondent (12 surveyors) tracks correspondent-panel approvals for 15 P&I Clubs — eliminated 4 client-instruction-misroute incidents per quarter." },
        { useCase: "Use Case 3", body: "A Houston Gulf-coast marine survey firm (22 surveyors) tracks USCG / BSEE / EPA / ABS dual-class surveyor competence per IACS UR Z10/Z11." },
        { useCase: "Use Case 4", body: "A Mumbai marine survey contractor (18 surveyors) cleared IRClass + Lloyd's Register parallel QMS audit with zero NCs." },
      ]}
      keyFeatures={[
        "IACS QSCS audit cycle workflow",
        "ISO 9001:2015 management-system architecture",
        "IMO Tier I (RO audit) framework documentation",
        "IMO Tier II port-state-control (Paris MoU, Tokyo MoU) compliance",
        "Surveyor competence per IACS UR Z10 / Z11",
        "Class-society endorsement portfolio per surveyor",
        "Hull / machinery / cargo / FPSO offshore specialty tracking",
        "P&I Club correspondent panel approval management",
        "Customer preferred-surveyor list (PSL) maintenance",
        "Dual-class surveyor authority tracking",
        "IACS UR W1 to W32 welding standard awareness",
        "Equasis port-state-control inspection history",
        "Mobile app for shipboard surveyor capture (offline-capable)",
      ]}
      integrations={[
        "Lloyd's Register OneOcean (Class Direct, ShipRight) QMS sync",
        "DNV Veracity QMS sync",
        "ABS Eagle.Engineering / Nautical Systems QMS sync",
        "Bureau Veritas Veristar QMS sync",
        "ClassNK NK-SHIPS QMS portal",
        "IACS recognised-organisation data exchange",
        "IMO GISIS submission portal",
        "Equasis port-state-control inspection history",
        "Paris MoU / Tokyo MoU public inspection databases",
        "IG P&I Clubs correspondent QMS instruction inbox",
      ]}
      faqs={[
        { question: "Does the QMS implement IACS QSCS?", answer: "Yes. IACS QSCS (Quality System Certification Scheme) — the framework IACS member societies use to audit their authorized surveyors and recognized organisations — is structurally implemented with the IACS QSCS audit checklist, IACS PR (Procedural Requirements), IACS UR (Unified Requirements) and IACS UI (Unified Interpretations) cross-referenced into the document framework." },
        { question: "How does the QMS handle IACS UR Z10 / Z11 surveyor competence?", answer: "Yes. IACS UR Z10 (Competence Requirements for Surveyors) and UR Z11 (Qualifications and Experience Requirements for Surveyors) are encoded as competency frameworks per surveyor — initial competency, ongoing professional development, peer-review, customer-feedback, and renewal-cycle tracking with auto-alerts on expiry." },
        { question: "Can the QMS handle parallel class-society audits?", answer: "Yes. Many marine survey firms hold parallel authorization from multiple IACS members (e.g. LR + ABS + BV simultaneously). The QMS supports parallel audit programs without duplicate documentation — one core ISO 9001:2015 + IACS QSCS document set, with class-society-specific overlays for each authorizing class." },
        { question: "Does the QMS support IMO Tier I and Tier II frameworks?", answer: "Yes. IMO Tier I (flag-state audit of recognized organisations under SOLAS XI/1) and Tier II (port-state-control inspection regimes — Paris MoU, Tokyo MoU, USCG, AMSA, Indian Ocean MoU, Riyadh MoU, Black Sea MoU, Mediterranean MoU) are encoded as audit frameworks with the relevant compliance documentation." },
        { question: "How does the QMS handle P&I Club correspondent QMS?", answer: "Yes. Major P&I Clubs (UK P&I, Britannia, North, Steamship Mutual, Gard, Skuld, West of England, Standard Club, Shipowners Mutual, American Club, Japan P&I) maintain correspondent panels with QMS expectations. Each Club's correspondent-panel approval is tracked with renewal cycle, performance metrics (response-time, report-quality, customer-feedback)." },
        { question: "Can the QMS handle customer preferred-surveyor lists?", answer: "Yes. Major liner operators (Maersk, MSC, CMA CGM, Hapag-Lloyd, ONE, Evergreen, ZIM, COSCO), tanker pool operators (Teekay, Frontline, Euronav, Tankers International), and bulker operators (Scorpio, Star Bulk, Berge Bulk) maintain preferred-surveyor lists. Per-customer PSL status is maintained with renewal-cycle alerts and PSL-removal risk indicators." },
        { question: "Does the QMS handle dual-class surveyor authority?", answer: "Yes. Surveyors authorized under multiple class societies (typical for senior surveyors with 15+ years experience) carry dual or triple authorization. The QMS tracks each authorization's scope, expiry and renewal evidence. Conflicts (one surveyor double-booked across both classes for the same vessel-window) are flagged." },
        { question: "How does the QMS handle IACS UR W welding standards?", answer: "Yes. IACS UR W series (Welding standards for steel ship hulls — W1 General, W2 Steel hull, W14 Steel forging, W17 Approval of welders, W22 Approval of welding procedures, W28 Welding of stainless steel, W32 Brazing) are loaded as reference documents per surveyor competency assessment." },
      ]}
    />
  );
}
