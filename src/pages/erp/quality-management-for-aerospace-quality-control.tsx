import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function QualityManagementForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="Quality Management for Aerospace Quality Control"
      slug="quality-management-for-aerospace-quality-control"
      appName="Quality Management"
      industry="aerospace quality control"
      breadcrumbLabel="QMS for Aerospace"
      trustBadge="AS9100 / NADCAP / FAA Part 145 ready"
      metaDescription="Atlantis NDT ERP QMS for aerospace quality control — AS9100 Rev D, AS9101 audit requirements, AS9102 FAI, AS9131 nonconformance, AS9145 APQP, NADCAP MAUP. Flat regional pricing."
      heroBody="Atlantis NDT ERP Quality Management for aerospace quality control firms — AS9100 Rev D / EN 9100 / SJAC 9100 quality management system, AS9101 audit requirements, AS9102 First Article Inspection, AS9131 nonconformance documentation, AS9145 APQP/PPAP, NADCAP MAUP audit cycle, FAA Part 145 / EASA Part-145 repair-station record retention. Part of the all-apps-included subscription."
      whatItIs={[
        "Quality Management for Aerospace Quality Control inside Atlantis NDT ERP is the Odoo 18 Quality + Documentation + Audit module configured for the IAQG family of aerospace quality standards — AS9100 Rev D (aerospace QMS, the dominant standard for aerospace suppliers globally), EN 9100 (European equivalent), SJAC 9100 (Japanese equivalent), AS9101 (Quality Management Systems Audit Requirements for Aviation Space and Defense Organizations), AS9102 (Aerospace First Article Inspection Requirement), AS9103 (Variation Management of Key Characteristics), AS9131 (Nonconformance Documentation), AS9145 (Requirements for Advanced Product Quality Planning and Production Part Approval Process).",
        "NADCAP (National Aerospace and Defense Contractors Accreditation Program) MAUP (Management of Audit and Performance) audit cycles — 24-month standard, 12-month merit — are tracked end-to-end with audit-finding closure workflow, evidence-pack assembly to the PRI eAuditNet checklist, and historical-finding tracking demonstrating sustained corrective action.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Wichita airframe NDT specialist (40 technicians) cleared AS9100D recertification and NADCAP MAUP with zero major NCs after consolidating documentation in the QMS." },
        { useCase: "Use Case 2", body: "A Bangalore aerospace QA contractor (30 technicians) eliminated 9 recurring NCs across 14 OEM customer audits per year." },
        { useCase: "Use Case 3", body: "A Toulouse Airbus / Safran supplier QA firm (22 technicians) cleared EN 9100 surveillance with zero findings via the parallel European-aerospace document framework." },
        { useCase: "Use Case 4", body: "A Connecticut engine MRO inspection firm (35 technicians) reduced AS9131 8D-closure cycle from 23 days to 9 via the structured nonconformance workflow." },
      ]}
      keyFeatures={[
        "AS9100 Rev D / EN 9100 / SJAC 9100 QMS framework",
        "AS9101 audit-requirements compliance",
        "AS9102 First Article Inspection workflow (Form 1, 2, 3)",
        "AS9103 Variation Management of Key Characteristics",
        "AS9131 nonconformance documentation (8D, root-cause, corrective-action)",
        "AS9145 APQP / PPAP gate workflow",
        "NADCAP MAUP audit-prep evidence accretion (24-month rolling)",
        "FAA Part 145 / EASA Part-145 record retention (2-year / 5-year / customer-7-year)",
        "Customer rejection-rate trending per part-number / per method",
        "ITAR / EAR export-control document classification",
        "Aircraft / engine / military program QMS overlay",
        "OEM-specific QMS overlay (Boeing D6-82479, Airbus 1000DEV)",
        "Mobile app for shop-floor nonconformance capture",
      ]}
      integrations={[
        "Boeing D-PIM (FlightView, GoldCare) QMS-data sync",
        "Airbus Sphere AIRMAN / EREVOA QMS sync",
        "Embraer DiscoverFleet QMS portal",
        "GE Aviation iCheck supplier QMS portal",
        "Pratt & Whitney Engine Network QMS portal",
        "Rolls-Royce SAP Ariba supplier QMS portal",
        "Safran SupplyOn QMS portal",
        "PRI eAuditNet / Cumulus NADCAP audit submission",
        "Net-Inspect supplier-quality QMS workflow",
        "IAQG OASIS supplier QMS registry",
      ]}
      faqs={[
        { question: "Does the QMS implement AS9100 Rev D structurally?", answer: "Yes. Every clause of AS9100 Rev D (which adds aerospace-specific requirements on top of ISO 9001:2015) is pre-loaded as a structured document folder — clause 4 (Context), 5 (Leadership), 6 (Planning), 7 (Support), 8 (Operation, with aerospace-specific 8.1.1 Operational Risk Management, 8.1.2 Configuration Management, 8.1.3 Product Safety, 8.1.4 Prevention of Counterfeit Parts), 9 (Performance Evaluation), 10 (Improvement)." },
        { question: "How does the QMS handle NADCAP MAUP audit cycles?", answer: "Yes. NADCAP MAUP audit-cycle tracking is built into the platform: 24-month standard cycle, 12-month merit cycle, audit-finding tracking with corrective-action workflow, evidence-pack generation aligned to PRI eAuditNet checklist, automatic readiness scoring 90/60/30 days before audit date. Every NADCAP MAUP audit finding from prior cycles is tracked so you can demonstrate sustained corrective action — the single highest-weighted criterion in NADCAP audit scoring." },
        { question: "Can the QMS implement AS9102 First Article Inspection?", answer: "Yes. AS9102 FAI Form 1 (Part Accountability), Form 2 (Product Accountability — Materials, Special Processes, Functional Testing) and Form 3 (Characteristic Accountability, Verification and Compatibility Evaluation) are pre-loaded as structured forms with per-characteristic verification status. The AS9102 export goes directly to customer-portal upload." },
        { question: "Does the QMS handle AS9131 nonconformance workflow?", answer: "Yes. AS9131 (Nonconformance Documentation) is structured with the 8D problem-solving framework — D1 Establish the team, D2 Describe the problem, D3 Develop interim containment action, D4 Define and verify root cause, D5 Choose and verify permanent corrective actions, D6 Implement permanent corrective actions, D7 Prevent recurrence, D8 Recognize team contributions." },
        { question: "How does the QMS handle counterfeit-parts prevention?", answer: "AS9100D §8.1.4 Prevention of Counterfeit Parts is structurally implemented with material-traceability verification, approved-supplier-list (AVL/ASL) management, raw-material certificate verification (EN 10204 3.1 / 3.2), and CCAP (Counterfeit Component Avoidance Plan) document framework." },
        { question: "Can the QMS handle ITAR / EAR classification?", answer: "Yes. ITAR (International Traffic in Arms Regulations) and EAR (Export Administration Regulations) document classification — including TLD (Technical Data Lockdown) procedures, US-person verification, export-license tracking, and DOD CMMC (Cybersecurity Maturity Model Certification) compliance for defense suppliers — is integrated." },
        { question: "Does the QMS support FAA Part 145 / EASA Part-145?", answer: "Yes. FAA 14 CFR Part 145 (Repair Stations) and EASA Part-145 record retention — 2-year baseline retention, 5-year for major repairs/major alterations, customer-specific 7-year and 10-year retention — is configurable per customer with immutable audit trail of every record modification, electronic-signature workflow per 14 CFR 145.221." },
        { question: "How does the QMS handle OEM-specific quality clauses?", answer: "Yes. Major OEM-specific quality clauses (Boeing D6-82479, D1-9000, BSQR; Airbus 1000DEV, AIPS; Lockheed Martin Q-Note family; Northrop Grumman OQ; GE Aviation S-1000; Pratt & Whitney QSI; Rolls-Royce SABRe) are loaded as overlay frameworks with customer-specific evidence-pack templates." },
      ]}
    />
  );
}
