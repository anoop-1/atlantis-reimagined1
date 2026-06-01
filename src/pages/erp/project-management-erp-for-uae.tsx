import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementErpForUae() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management ERP for UAE"
      slug="project-management-erp-for-uae"
      appName="Project Management"
      industry="UAE inspection projects and turnarounds"
      breadcrumbLabel="Project Management for UAE"
      trustBadge="ADNOC AGES / FANR / OSHAD ready"
      metaDescription="Atlantis NDT ERP Project Management for UAE — ADNOC turnaround scheduling, AGES inspector mobilization, FANR radiography, OSHAD-SF HSE compliance, bilingual Arabic/English. Flat regional pricing (AED 66,000)."
      heroBody="Atlantis NDT ERP Project Management pre-configured for UAE inspection projects — ADNOC group turnaround scheduling, AGES (Asset Integrity Group Engineering Standards)-aware inspector mobilization, OSHAD-SF HSE compliance, and bilingual Arabic/English UI. Flat AED 66,000 / $18,000 per year."
      whatItIs={[
        "Project Management ERP for UAE tracks every inspection project from RFQ through final-invoice closure with structured fields for ADNOC AGES inspector-qualification scope, FANR radiography licensing, OSHAD-SF HSE compliance, and ADNOC Tejari / ENOC / SNOC vendor-portal evidence requirements. Project templates are pre-built for ADNOC Onshore Bab/Bu Hasa/Asab turnarounds, ADNOC Offshore Das Island/Zirku/Umm Shaif/SARB platform inspection, ADNOC Refining Ruwais major-maintenance, Borouge polyolefin plant shutdowns, ENOC Jebel Ali jetty/terminal inspection, EGA aluminium-smelter major-overhauls, and SNOC Sharjah onshore-gas inspection.",
        "Gantt charts auto-load UAE-specific calendar awareness — Hijri / Gregorian dual dating, UAE weekend (Saturday-Sunday since January 2022), Ramadan working-hour modifications, Eid Al-Fitr and Eid Al-Adha holidays, UAE National Day (2 Dec), Commemoration Day (1 Dec), and operator-specific shutdown windows. Resource leveling supports AED-denominated cost tracking and integrates with MoHRE (Ministry of Human Resources and Emiratisation) workforce data for Emiratisation compliance.",
      ]}
      useCases={[
        { useCase: "ADNOC Refining Ruwais turnaround project", body: "A Mussafah contractor (80 techs) managed the Ruwais East Refinery turnaround across 480 vessel inspections — eliminated the recurring AGES qualification submission gap and brought the critical-path inspection 9 days early." },
        { useCase: "Das Island ADNOC LNG cryogenic-inspection event", body: "A Das Island FIFO contractor (45 techs) ran 12 parallel ADNOC LNG cryogenic-inspection projects with separated billing per train — passed ADNOC Technical Center audit with zero major findings." },
        { useCase: "Borouge polyolefin plant shutdown", body: "An Abu Dhabi contractor (35 techs) tracked Borouge Ruwais polyolefin shutdown inspection across ethylene-cracker, polypropylene reactor and cooling-water systems — cut customer reporting overhead 41%." },
        { useCase: "EGA aluminium-smelter major-overhaul", body: "A Jebel Ali contractor (28 techs) tracked Emirates Global Aluminium 5-yearly major-overhaul inspection with pot-shell damage models — won three additional EGA scopes after structured pipeline visibility." },
      ]}
      keyFeatures={[
        "ADNOC turnaround / shutdown project templates",
        "AGES inspector-qualification scope per project",
        "FANR radiography licensing per project",
        "OSHAD-SF HSE compliance per project",
        "EIAC / ENAS / DAC accreditation per project",
        "Hijri/Gregorian dual dating with Ramadan / Eid calendar",
        "UAE weekend (Saturday-Sunday) calendar awareness",
        "MoHRE workforce-data integration for Emiratisation tracking",
        "AED-denominated cost tracking with USD/SAR parallel",
        "Bilingual Arabic/English Gantt and reports",
        "ADNOC Tejari vendor-portal evidence export",
        "NESA IA Standards-aligned data residency overlay",
        "Resource leveling across FIFO/site/free-zone teams",
        "Customer-facing milestone-portal with Arabic/English access",
      ]}
      integrations={[
        "Primavera P6 at ADNOC / Borouge EPCs",
        "Microsoft Project at ADNOC Refining Ruwais",
        "SAP S/4HANA Project System at ADNOC / Borouge",
        "ADNOC Tejari vendor portal",
        "Etisalat Digital / du UAE Cloud hosting",
        "FTA e-invoicing portal",
        "MoHRE workforce-data exchange",
        "Maximo at ADNOC Refining Ruwais",
        "FANR radiography licensing portal",
        "ADNOC APQS personnel qualification database",
      ]}
      faqs={[
        { question: "Does the project module support ADNOC turnaround scheduling?", answer: "Yes. Turnaround project templates pre-load typical ADNOC Onshore / Offshore / Refining / LNG / Borouge turnaround scope structures with parallel-unit critical-path scheduling, AGES inspector-qualification gates, and ADNOC Tejari pre-mob evidence-pack workflows." },
        { question: "Is the data hosted inside the UAE?", answer: "Yes. By default the project data hosts on AWS Middle East (UAE) in Abu Dhabi. For NESA IA Standards compliance, in-country hosting is available via Etisalat Digital or du UAE Cloud." },
        { question: "Does the module support Emiratisation tracking?", answer: "Yes. MoHRE (Ministry of Human Resources and Emiratisation) workforce data integrates with project resource assignments to track Emiratisation compliance per project — flagging projects where UAE-national headcount falls below the Tawteen/Nafis target for the firm's Emiratisation category." },
        { question: "Does the project module integrate with Primavera P6 at ADNOC?", answer: "Yes. The module bidirectionally exchanges activities, milestones and resource assignments with Primavera P6 deployments at ADNOC group companies and tier-1 EPC contractors (McDermott, Saipem, L&T Hydrocarbon, Petrofac, Tecnimont) via XER file exchange or P6 web services." },
        { question: "Can the module handle the UAE Saturday-Sunday weekend?", answer: "Yes. Since January 2022 the UAE federal workweek runs Monday-Friday with Friday a half-day and Saturday-Sunday as the weekend. The project calendar auto-applies this with Ramadan reduced working hours (Article 65 of UAE Labour Law allows reduced hours during Ramadan), Eid public holidays, and UAE National Day / Commemoration Day observances." },
        { question: "Does the system handle OSHAD-SF compliance per project?", answer: "Yes. OSHAD-SF (Statutory Framework) compliance is tracked at the entity, project and work-order levels, with OSHAD-RV (Regulatory Vehicles) for oil-and-gas and construction sectors applied automatically." },
        { question: "Does the system integrate with ADNOC Tejari?", answer: "Yes. The project module exports AGES-aligned evidence packs directly into ADNOC Tejari-compatible formats, eliminating manual document-uploading workflow that historically slowed pre-mob qualification by 7-9 days." },
      ]}
    />
  );
}
