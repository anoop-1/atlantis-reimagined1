import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function DocumentControlForPipelineIntegrityServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="Document Control for Pipeline Integrity Services"
      slug="document-control-for-pipeline-integrity-services"
      appName="Document Control"
      industry="pipeline integrity services"
      breadcrumbLabel="Doc Control for Pipeline"
      trustBadge="API 1173 / PHMSA / CER ready"
      metaDescription="Atlantis NDT ERP Document Control for pipeline integrity firms — API 1173 SMS document hierarchy, PHMSA 49 CFR 195.452 IMP version control, ILI verification-dig records, B31.4 / B31.8 / B31.12 code revisions, NACE coatings procedures. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Document Control for pipeline integrity firms — API 1173 Pipeline SMS document hierarchy (Policy → Standards → Procedures → Work Instructions → Records), PHMSA 49 CFR 195.452 / 192.917 Integrity Management Plan version control, CER Condition 9 documentation, ILI verification-dig records, ASME B31.4 / B31.8 / B31.12 code revision management, and NACE SP0169 / SP0102 / SP0207 coating-and-corrosion procedures. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Document Control for Pipeline Integrity Services inside Atlantis NDT ERP is the Odoo 18 Document Management module configured for the regulatory document hierarchy of pipeline integrity — API 1173 SMS document hierarchy (Level 1 Policy, Level 2 Standards, Level 3 Procedures, Level 4 Work Instructions, Level 5 Records), PHMSA 49 CFR 195.452 (hazardous liquid pipeline IMP) and 192.917 (gas pipeline IMP) plan version control with revision-by-revision change-log retention, CER Condition 9 documentation, ASME B31.4 (Pipeline Transportation of Liquids and Slurries) / B31.8 (Gas Transmission and Distribution Piping) / B31.12 (Hydrogen Pipelines) code revision management, API 1104 (Welding of Pipelines and Related Facilities) revision history.",
        "ILI verification-dig records — where the in-line-inspection tool's anomaly call is verified by in-the-ditch NDT — are preserved as immutable records with the ILI run report, the dig report, photographs, NDT method records (UT/MFL/PAUT/AUT), pit-depth measurements, ECA (Engineering Critical Assessment) per API 579-1 / BS 7910, and repair-history. NACE SP0169 (External CP), SP0102 (In-Line Inspection), SP0207 (Coating Application), SP0490 (Holiday Detection), SP0286 (Buried Steel Tanks) procedures are version-controlled with effective dates and supersession history.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston pipeline integrity firm (75 staff) consolidated 14 client-specific document libraries into one version-controlled framework — cleared API 1173 audit with zero document-control findings." },
        { useCase: "Use Case 2", body: "A Calgary CER-regulated contractor (40 staff) cleared Condition 9 audit with all 1,200+ procedures controlled and supersession traceable." },
        { useCase: "Use Case 3", body: "A Mumbai pipeline contractor (35 staff) tracks OISD-141 / OISD-129 procedures with bilingual English / Hindi versions controlled in parallel." },
        { useCase: "Use Case 4", body: "A Sao Paulo pipeline contractor (28 staff) tracks ANP regulations and Transpetro-specific procedures in parallel — eliminated 6 obsolete-procedure-in-use findings per audit cycle." },
      ]}
      keyFeatures={[
        "API 1173 SMS 5-level document hierarchy",
        "PHMSA 49 CFR 195.452 / 192.917 IMP version control",
        "CER Condition 9 documentation control",
        "ASME B31.4 / B31.8 / B31.12 / B31.3 code revision tracking",
        "API 1104 pipeline welding code revision history",
        "ILI verification-dig immutable records",
        "NACE SP0169 / SP0102 / SP0207 / SP0490 / SP0286 procedures",
        "Operator-specific procedure overlay (Enbridge, Kinder Morgan, TC Energy, Pembina)",
        "PHMSA pipeline-safety-related document retention (5 years minimum, 7-10 years typical)",
        "CER record retention (10 years for inspection, 25 years for failure investigations)",
        "Multi-language document control (English, French for Canada, Spanish for Mexico/LatAm)",
        "Electronic signature workflow per FDA 21 CFR Part 11 (where applicable)",
        "Mobile app for field document access (offline-capable)",
      ]}
      integrations={[
        "Documentum / OpenText / SharePoint document-system migration",
        "Procore document-portal integration",
        "Aconex (Oracle) document-control sync",
        "Bentley OpenPipeline document hub",
        "Cetaris Aviation document control",
        "PHMSA NPMS document submission",
        "CER Online Application System document submission",
        "API 1163 conformity-assessment document evidence",
        "ASME standards portal integration (B31.4, B31.8, B31.12, B31.3, B31.1)",
        "NACE SP-series and TM-series standards portal",
      ]}
      faqs={[
        { question: "Does the platform implement API 1173 document hierarchy?", answer: "Yes. API 1173 Pipeline SMS Annex A specifies the 5-level document hierarchy — Level 1 Policy (organizational commitment), Level 2 Standards (top-level requirements), Level 3 Procedures (how things are done), Level 4 Work Instructions (specific task instructions), Level 5 Records (objective evidence). Every document is classified at its appropriate level with cross-references up and down the hierarchy." },
        { question: "How does the system manage PHMSA IMP version control?", answer: "Yes. PHMSA 49 CFR 195.452 (hazardous liquid pipeline IMP) and 192.917 (gas pipeline IMP) plans are subject to mandatory periodic updates and document control. Every IMP revision carries a change-log with the specific clauses changed, the regulatory driver for the change, the responsible reviewer, and the approval signatures. PHMSA auditors can demand prior-revision evidence at any time — the system produces it in under 30 seconds." },
        { question: "Can the system handle ASME code revisions?", answer: "Yes. ASME B31.4, B31.8 and B31.12 code revisions on multi-year cycles — and the addenda/errata published between revisions — require careful management of which code version applies to which client project. The system maintains the effective-date matrix per client per pipeline with the project's contractual code revision and any subsequent variations or grandfathering provisions." },
        { question: "Does the platform support ILI verification-dig records?", answer: "Yes. ILI verification-dig records are preserved as immutable records with the ILI run report (Rosen NIMS, NDT Global, GE PII, TDW, Baker Hughes), the dig report, photographs, NDT method records, pit-depth measurements, ECA (Engineering Critical Assessment) per API 579-1 / BS 7910, and repair-history. These records are foundational to integrity-management audit defence." },
        { question: "How does the system handle operator-specific procedure overlays?", answer: "Yes. Major operators (Enbridge, Kinder Morgan, TC Energy, Pembina, Inter Pipeline, Plains All American, Energy Transfer, ONEOK, Williams) publish operator-specific procedures that contractors must follow. Each operator's procedure library is maintained as a structured overlay with cross-references to the contractor's base procedures, and gap-analysis tools surface where contractor procedures fall short of operator expectations." },
        { question: "Can the platform handle multi-language document control?", answer: "Yes. Multi-language document control — English / French for Canadian regulators, English / Spanish for Mexican PEMEX or LatAm operators, English / Arabic for ARAMCO, English / Mandarin for PetroChina — is structurally supported. Each document carries a parallel translation chain with translation-update alerts when the base document is revised." },
        { question: "Does the platform support electronic signature workflow?", answer: "Yes. Electronic signature workflow compatible with FDA 21 CFR Part 11 (where applicable, e.g. pharmaceutical pipeline work), Canada PIPEDA, EU eIDAS, and customer-specific electronic signature requirements is supported. Multi-step approval workflows (author → technical reviewer → quality reviewer → approver) are enforced." },
        { question: "How long are records retained?", answer: "PHMSA pipeline-safety-related document retention is typically 5 years minimum, with customer-specific 7-10 year retention common. CER record retention extends to 10 years for inspection records and 25 years for failure investigations. The system supports per-document-class retention policies with audit-trail of every record modification preserved indefinitely." },
      ]}
    />
  );
}
