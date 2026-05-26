import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementErpForSaudiArabia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management ERP for Saudi Arabia"
      slug="project-management-erp-for-saudi-arabia"
      appName="Project Management"
      industry="Saudi Arabia inspection projects and turnarounds"
      breadcrumbLabel="Project Management for Saudi Arabia"
      trustBadge="SAEP-1112 / Aramco / Vision 2030 ready"
      metaDescription="Atlantis NDT ERP Project Management for Saudi Arabia — Aramco turnaround scheduling, SAEP-1112 inspector mobilization, Vision 2030 mega-project tagging, bilingual Arabic/English. Flat regional pricing (SAR 67,500)."
      heroBody="Atlantis NDT ERP Project Management pre-configured for Saudi inspection projects — Aramco turnaround scheduling, SAEP-1112-aware inspector mobilization, Vision 2030 mega-project portfolio tracking (NEOM, Red Sea, Qiddiya, SPARK), and bilingual Arabic/English UI with Hijri/Gregorian dual dating. Flat SAR 67,500 / $18,000 per year."
      whatItIs={[
        "Project Management ERP for Saudi Arabia tracks every inspection project from RFQ through final-invoice closure with structured fields for Aramco SAEP-1112 inspector-qualification scope, RCJY industrial-city permit status, NRRC radiography licensing, SACS-002 cybersecurity data residency, and Saudi Aramco APQS / VQIP vendor-portal evidence requirements. Project templates are pre-built for the main Saudi work types — Aramco refinery turnaround support, SABIC petrochemical complex shutdowns, RCJY industrial-city construction commissioning, SATORP and YASREF major-maintenance events, Maaden phosphate/aluminium plant inspection, and Vision 2030 mega-project construction inspection.",
        "Gantt charts auto-load Saudi-specific calendar awareness — Hijri / Gregorian dual dating, Saudi weekend (Friday-Saturday), Ramadan working-hour modifications, Eid Al-Fitr and Eid Al-Adha holidays, Saudi National Day (23 Sep), Founding Day (22 Feb), and operator-specific shutdown windows. Resource leveling supports SAR-denominated cost tracking with parallel USD reporting, and integrates with GOSI (General Organization for Social Insurance) workforce data for compliance-aware deployment of Saudi nationals vs expatriate technicians.",
      ]}
      useCases={[
        { useCase: "Aramco refinery turnaround project", body: "An Eastern Province contractor (75 techs) managed the Riyadh Refinery turnaround across 320 vessel inspections — eliminated the 4-day pre-mob SAEP-1112 evidence gap and brought the critical-path inspection 11 days early." },
        { useCase: "SATORP Jubail major-maintenance event", body: "A Jubail contractor (60 techs) ran 18 parallel SATORP unit-inspection projects with separated billing per unit (Crude / VDU / Hydrocracker / FCC / Alkylation) — passed SATORP audit with zero scope-creep findings." },
        { useCase: "NEOM Phase 1 construction inspection", body: "A Tabuk-based contractor (28 techs) tracked NEOM Phase 1 inspection scopes at Sharma, Magna and Tabuk base camps with PIF subsidiary reporting — won three additional NEOM scopes after structured Vision 2030 portfolio visibility." },
        { useCase: "Maaden Ras Al-Khair plant inspection", body: "A Ras Al-Khair phosphate-fertiliser inspection contractor (40 techs) tracked acid-service vessel inspection with NACE-aligned damage models — cut customer reporting overhead 38%." },
      ]}
      keyFeatures={[
        "Aramco turnaround / shutdown project templates",
        "SAEP-1112 inspector-qualification scope per project",
        "RCJY industrial-city permit tracking per project",
        "NRRC radiography licensing per project",
        "Vision 2030 mega-project portfolio tagging (NEOM/Red Sea/SPARK)",
        "Hijri/Gregorian dual dating with Ramadan / Eid calendar",
        "Saudi weekend (Friday-Saturday) calendar awareness",
        "GOSI workforce-data integration for Saudization tracking",
        "SAR-denominated cost tracking with USD parallel",
        "Bilingual Arabic/English Gantt and reports",
        "Aramco APQS / VQIP vendor-portal evidence export",
        "SACS-002 cybersecurity data-residency overlay",
        "Resource leveling across multi-project FIFO/site teams",
        "Customer-facing milestone-portal with Arabic/English access",
      ]}
      integrations={[
        "Primavera P6 at Saudi Aramco / SABIC EPCs",
        "Microsoft Project at SATORP / YASREF",
        "SAP S/4HANA Project System at Aramco / SABIC",
        "Aramco APQS / VQIP vendor portal",
        "SACS-002-aligned hosting on STC Cloud / Mobily Business",
        "ZATCA Fatoorah e-invoicing platform",
        "GOSI workforce-data exchange",
        "Aramco SAEP-1119 damage-mechanism database",
        "NRRC radiography licensing portal",
        "RCJY industrial-city permit system",
      ]}
      faqs={[
        { question: "Does the project module support Aramco turnaround scheduling?", answer: "Yes. Turnaround project templates pre-load typical Aramco refinery / gas plant / GOSP turnaround scope structures with parallel-unit critical-path scheduling, SAEP-1112 inspector-qualification gates, and Aramco APQS pre-mob evidence-pack workflows." },
        { question: "Is the data hosted inside Saudi Arabia?", answer: "By default the project data hosts on AWS Middle East (Bahrain) for SACS-002 compliance. For NCA Cloud Cybersecurity Controls (CCC-1:2020) compliance, in-Kingdom hosting is available via STC Cloud or Mobily Business." },
        { question: "Does the module support Vision 2030 mega-project tracking?", answer: "Yes. NEOM (Phase 1 Sharma/Magna/Tabuk, Trojena, Sindalah, The Line, Oxagon), Red Sea Project, Qiddiya, Diriyah Gate, SPARK (King Salman Energy Park), AlUla, Roshn and other PIF mega-projects are tagged at the project level with PIF subsidiary procurement-portal integration." },
        { question: "What is the SAR pricing?", answer: "Flat SAR 67,500 per year. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services are typically quoted SAR 75,000-225,000 depending on scope." },
        { question: "Does the project module integrate with Primavera P6 at Aramco?", answer: "Yes. The module bidirectionally exchanges activities, milestones and resource assignments with Primavera P6 deployments at Saudi Aramco, SABIC and tier-1 Aramco EPC contractors (L&T, Tecnicas Reunidas, JGC, Hyundai E&C, Samsung Engineering, Saipem) via XER file exchange or P6 web services." },
        { question: "Can the module handle Saudization (GOSI workforce tracking)?", answer: "Yes. GOSI (General Organization for Social Insurance) workforce data integrates with project resource assignments to track Saudization (Nitaqat) compliance per project — flagging projects where Saudi-national headcount falls below the Nitaqat platinum/green-band threshold." },
        { question: "Does the system handle Ramadan working-hour modifications?", answer: "Yes. The project calendar auto-applies Ramadan reduced working hours (typically 6 hours/day under Saudi Labor Law Article 98 for Muslim workers during Ramadan), Eid Al-Fitr and Eid Al-Adha public holidays, and Saudi National Day / Founding Day observances." },
        { question: "Does the system integrate with Aramco APQS / VQIP?", answer: "Yes. The project module exports SAEP-1112-aligned evidence packs directly into Aramco APQS / VQIP-compatible XML formats, eliminating manual document-uploading workflow that historically slowed pre-mob qualification by 7-11 days." },
      ]}
    />
  );
}
