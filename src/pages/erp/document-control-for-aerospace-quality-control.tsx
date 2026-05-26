import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function DocumentControlForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="Document Control for Aerospace Quality Control"
      slug="document-control-for-aerospace-quality-control"
      appName="Document Control"
      industry="aerospace quality control"
      breadcrumbLabel="Doc Control — Aerospace"
      trustBadge="AS9100 / FAA Part 145 / EASA Part-145 ready"
      metaDescription="Atlantis NDT ERP Document Control for aerospace QA — AS9100 §7.5 documented information, FAA Part 145 §145.219 records, EASA Part-145 record retention, OEM written-practice version control, NADCAP evidence-pack lifecycle. Flat regional pricing."
      heroBody="Atlantis NDT ERP Document Control for aerospace QA firms — AS9100 Rev D §7.5 documented information, FAA Part 145 §145.219 record retention, EASA Part-145 record retention, customer written-practice version control (Boeing BSS, Airbus AITM, GE/CFM, P&W PWA-MCL, RR MTSP), and NADCAP MAUP evidence-pack lifecycle management. Part of the all-apps-included subscription."
      whatItIs={[
        "Document Control for Aerospace Quality Control inside Atlantis NDT ERP is the Odoo 18 Document Management module configured for the layered document hierarchy of aerospace QA — AS9100 Rev D §7.5 (Documented Information: creating and updating documents, control of documented information), FAA 14 CFR Part 145 §145.219 (Repair Stations record retention, 2 years minimum, 5 years for major repairs/major alterations), EASA Part-145.A.55 (Maintenance records, 3 years minimum with customer-specific extensions to 7-10 years), customer-specific record-retention requirements (Boeing requires 7 years, Airbus 10 years post-aircraft retirement for safety-critical records).",
        "Customer-specific written practices — Boeing BSS7039, BSS7320, Airbus AITM 6-1001, Airbus PR 1.2, GE Aviation GE C50TF, P&W PWA-MCL, Rolls-Royce RR MTSP, Safran Aircraft Engines QA-04, Honeywell QPS, Collins SQR — are revision-controlled with effective-date matrices showing which revision applies to which customer / aircraft program / engine program / production lot. NADCAP MAUP audit-prep evidence packs accrete across the 24-month rolling cycle.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Wichita airframe NDT specialist (40 technicians) cleared Boeing supplier audit with zero document-control NCs after consolidating Boeing BSS7039 / D6-82479 / D1-9000 revision history." },
        { useCase: "Use Case 2", body: "A Bangalore aerospace QA contractor (30 technicians) tracks NAS 410 Rev 4 to Rev 5 transition per customer — eliminated 7 obsolete-procedure-in-use findings." },
        { useCase: "Use Case 3", body: "A Toulouse Airbus / Safran supplier QA firm (22 technicians) maintains parallel Boeing/Airbus written-practice libraries with cross-references." },
        { useCase: "Use Case 4", body: "A Connecticut engine MRO firm (35 technicians) cleared FAA Part 145 audit with full §145.219 record retention demonstrated." },
      ]}
      keyFeatures={[
        "AS9100 Rev D §7.5 documented information control",
        "FAA Part 145 §145.219 record retention (2-yr / 5-yr / customer 7-10 yr)",
        "EASA Part-145.A.55 maintenance records retention",
        "Customer-specific written-practice revision control",
        "Boeing BSS / D6 series document framework",
        "Airbus AITM / PR series document framework",
        "GE Aviation GE C50TF / S-1000 series",
        "Pratt & Whitney PWA-MCL / QSI series",
        "Rolls-Royce RR MTSP / SABRe series",
        "Safran Aircraft Engines QA series",
        "NADCAP MAUP evidence-pack lifecycle (24-month rolling)",
        "ITAR / EAR document classification per 22 CFR 120-130 / 15 CFR 730-774",
        "Mobile app for shop-floor document access (offline-capable)",
      ]}
      integrations={[
        "Boeing D-PIM (FlightView, GoldCare) document portal",
        "Airbus Sphere AIRMAN / EREVOA document sync",
        "Embraer DiscoverFleet document portal",
        "GE Aviation iCheck document portal",
        "Pratt & Whitney Engine Network document portal",
        "Rolls-Royce SAP Ariba document portal",
        "Safran SupplyOn document portal",
        "PRI eAuditNet / Cumulus NADCAP document submission",
        "Net-Inspect supplier-quality document workflow",
        "IAQG OASIS supplier QMS registry",
      ]}
      faqs={[
        { question: "Does the platform implement AS9100 Rev D §7.5?", answer: "Yes. AS9100 Rev D §7.5 (Documented Information) — covering creating and updating (§7.5.2), control of documented information (§7.5.3) including distribution, access, retrieval, storage, preservation, control of changes, retention and disposition — is structurally implemented per the IAQG family of standards." },
        { question: "How does the platform handle FAA Part 145 §145.219 retention?", answer: "Yes. FAA Part 145 §145.219 requires repair stations to retain inspection records for at least 2 years for general maintenance, 5 years for major repairs/major alterations. The platform supports per-record-class retention with immutable audit trail, electronic-signature workflow per 14 CFR 145.221, and FAA-format 8130-3 Authorized Release Certificate generation tied to the inspection record." },
        { question: "Can the platform handle EASA Part-145.A.55 retention?", answer: "Yes. EASA Part-145.A.55 requires 3-year minimum retention with extensions per customer or national authority. The platform supports parallel FAA / EASA / Transport Canada CAR 573 / CAA UK Part-145 retention policies for multi-jurisdiction repair stations." },
        { question: "Does the platform handle OEM-specific written practices?", answer: "Yes. Customer-specific written practices — Boeing BSS7039, Airbus AITM 6-1001, Embraer NE 27-001, GE Aviation GE C50TF, P&W PWA-MCL, Rolls-Royce RR MTSP, Safran Aircraft Engines QA-04 — are revision-controlled with effective-date matrices. When an OEM revises its written practice, the platform identifies all downstream procedures and work instructions that require review and update." },
        { question: "How does the platform handle NADCAP evidence-pack lifecycle?", answer: "Yes. NADCAP MAUP audit-prep evidence accretes across the 24-month rolling cycle — personnel qualification (NAS 410 Rev 5), procedure index (NDT method procedures aligned to OEM/SOC), equipment calibration certificates, customer-rejection-rate analysis, internal audit reports, management review minutes, training records, raw-material verification, sub-tier supplier surveillance. The eAuditNet-ready ZIP can be uploaded directly to PRI's submission portal." },
        { question: "Can the platform handle ITAR / EAR document classification?", answer: "Yes. ITAR (International Traffic in Arms Regulations) per 22 CFR 120-130 — covering USML (United States Munitions List) Categories I to XXI — and EAR (Export Administration Regulations) per 15 CFR 730-774 — covering EAR Commerce Control List CCL — document classification is integrated. Per-document classification triggers access controls (US-person verification, export-license tracking, foreign-national pop-up warnings)." },
        { question: "Does the platform support multi-jurisdiction repair stations?", answer: "Yes. Many aerospace MRO operations hold parallel FAA Part 145, EASA Part-145, Transport Canada CAR 573, and CAAC China / DGCA India / ANAC Brazil approvals. The platform supports parallel record-retention regimes with the longest-applicable retention applied per record class." },
        { question: "How does the platform handle customer aircraft program changes?", answer: "Aircraft program changes (e.g. Boeing 737 NG to 737 MAX, Airbus A320ceo to A320neo, GE CFM56 to LEAP-1A) bring revised written practices, revised inspection procedures and revised record formats. The platform supports change-management workflows that identify all affected documents and route them through the revision lifecycle." },
      ]}
    />
  );
}
