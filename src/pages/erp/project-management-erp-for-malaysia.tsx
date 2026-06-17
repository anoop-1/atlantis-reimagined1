import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementErpForMalaysia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management ERP for Malaysia"
      slug="project-management-erp-for-malaysia"
      appName="Project Management"
      industry="Malaysia inspection projects and turnarounds"
      breadcrumbLabel="Project Management for Malaysia"
      trustBadge="DOSH / AELB / PETRONAS PTS / SIRIM ready"
      countrySlug="malaysia"
      countryLabel="Malaysia"
      metaDescription="Atlantis NDT ERP Project Management for Malaysia — PETRONAS / MLNG / RAPID turnaround scheduling, DOSH PMA per inspector, JKKP Form JKKP-G per project, bilingual Bahasa Melayu/English. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Project Management pre-configured for Malaysian inspection projects — PETRONAS / MLNG / RAPID turnaround scheduling, DOSH PMA inspector mobilization, JKKP Form JKKP-G statutory submission per project, and bilingual Bahasa Melayu/English UI. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Project Management ERP for Malaysia tracks every inspection project from RFQ through final-invoice closure with structured fields for PETRONAS Technical Standards (PTS) inspector qualification, DOSH PMA grade, AELB Class A/B/C radiography licensing, JKKP Form JKKP-G submission status, and SIRIM QAS ISO 17020/17025 accreditation currency. Project templates pre-load PETRONAS Carigali offshore-platform inspection, MLNG Bintulu Train 1-9 turnaround events, RAPID PRefChem petrochemical major-maintenance, Sarawak Petchem methanol / olefins plant shutdowns, Kerteh integrated petrochemical hub shutdowns, Melaka refinery turnarounds, and Penang aerospace MRO supplier projects.",
        "Gantt charts auto-load Malaysia-specific calendar awareness — Gregorian dating with Hari Raya Aidilfitri, Hari Raya Aidiladha, Wesak Day, Chinese New Year, Deepavali, Christmas, and state-specific Sultan's birthdays (Selangor, Johor, Pahang, Perak, Negeri Sembilan, Kedah, Kelantan, Terengganu), Hari Merdeka (31 Aug), Malaysia Day (16 Sep). Resource leveling supports RM-denominated cost tracking with PCB (Potongan Cukai Bulanan) / EPF (KWSP) / SOCSO (PERKESO) / EIS deductions auto-calculated.",
      ]}
      useCases={[
        { useCase: "PETRONAS Carigali offshore-platform inspection", body: "A KL contractor (45 techs) managed PETRONAS Carigali Sarawak-offshore platform inspection across Baronia / Bokor / Patricia / Tukau platforms — eliminated 7 days of pre-mob SUS qualification submission delay." },
        { useCase: "MLNG Bintulu Train 7 turnaround", body: "A Bintulu contractor (28 techs) ran MLNG Train 7 cryogenic-inspection project with 9% Ni weld inspection — cleared PETRONAS Gas Berhad audit with zero major findings and recovered RM 1.4M of reclaimed billable time." },
        { useCase: "RAPID Pengerang turnaround", body: "A Pengerang contractor (38 techs) managed RAPID PRefChem refinery-and-petrochemical turnaround across 380 vessels — passed Q/A audit with zero MoC findings." },
        { useCase: "Penang aerospace MRO supplier project", body: "A Penang aerospace contractor (22 techs) managed AAT / Spirit AeroSystems Subang / UMW Aerospace supplier projects with NAS 410 / EN 4179 / CAAM Part 145-aware scope tracking — eliminated dual-formatting overhead." },
      ]}
      keyFeatures={[
        "PETRONAS / MLNG / RAPID / Sarawak Petchem turnaround templates",
        "PTS inspector-qualification scope per project",
        "DOSH PMA Grade 1/2/3 per inspector per project",
        "JKKP Form JKKP-G submission per project",
        "AELB Class A/B/C radiography licensing per inspector",
        "SIRIM QAS ISO 17020 / 17025 accreditation per project",
        "LHDN MyInvois e-invoicing per project invoice",
        "EPF (KWSP) / SOCSO / EIS / PCB auto-calculation",
        "RM-denominated cost tracking with USD/SGD parallel",
        "Bilingual Bahasa Melayu/English Gantt and reports",
        "Sabah / Sarawak state-specific permitting per project",
        "State Sultan birthday-holiday calendar awareness",
        "PETRONAS SUS / e-License / ePersit evidence export",
        "MIDA (Malaysian Investment Development Authority) project tagging",
      ]}
      integrations={[
        "Primavera P6 at PETRONAS / MLNG EPCs",
        "Microsoft Project at RAPID PRefChem",
        "SAP S/4HANA Project System at PETRONAS / PCG / MLNG",
        "PETRONAS SUS / e-License / ePersit vendor portals",
        "TM Cloud Alpha / YTL Data Center in-country hosting",
        "LHDN MyInvois e-invoicing portal",
        "JKKP Form JKKP-G statutory portal",
        "Maximo at PETRONAS Gas Berhad",
        "SIRIM QAS accreditation registry",
        "AELB e-licensing portal",
      ]}
      faqs={[
        { question: "Does the project module support PETRONAS turnaround scheduling?", answer: "Yes. Turnaround project templates pre-load typical PETRONAS / MLNG / RAPID / Sarawak Petchem turnaround scope structures with parallel-unit critical-path scheduling, PTS inspector-qualification gates, and PETRONAS SUS / e-License pre-mob evidence-pack workflows." },
        { question: "Is the data hosted inside Malaysia?", answer: "Yes. By default the project data hosts on AWS Asia-Pacific (Malaysia) Kuala Lumpur region (launched 2024) for PDPA 2010 compliance. For CSM27001 sovereign-cloud certification, in-country hosting is available via TM Cloud Alpha or YTL Data Center." },
        { question: "Does the module support JKKP Form JKKP-G submission per project?", answer: "Yes. JKKP-G statutory submission for pressure-vessel inspection in Malaysia is auto-generated per project with all required vessel parameters, PMA-certified inspector evidence, and supporting documentation packaged for state-level Jabatan Tenaga Kerja submission." },
        { question: "Does the project module integrate with Primavera P6 at PETRONAS?", answer: "Yes. The module bidirectionally exchanges activities, milestones and resource assignments with Primavera P6 deployments at PETRONAS, PCG, MLNG and RAPID PRefChem via XER file exchange or P6 web services." },
        { question: "Can the module handle Sabah / Sarawak state permitting per project?", answer: "Yes. Sabah and Sarawak operate distinct state-level industrial permitting under the Natural Resources Ordinance — including Sarawak State-specific cabotage requirements for vessels operating in Bintulu and Miri waters. Per-project state-permit workflow tracks state-of-execution and applies the appropriate permitting." },
        { question: "Does the system handle EPF / SOCSO / EIS / PCB deductions?", answer: "Yes. EPF (Employees Provident Fund / KWSP), SOCSO (Social Security Organisation / PERKESO), EIS (Employment Insurance System), and PCB (Monthly Tax Deduction / Potongan Cukai Bulanan) are auto-calculated on project labour cost postings, with EPF i-Akaun and SOCSO PERKESO ASSIST integration." },
        { question: "Does the system integrate with PETRONAS SUS?", answer: "Yes. The project module exports PTS-aligned evidence packs directly into PETRONAS SUS / e-License / ePersit-compatible XML formats, eliminating manual document-uploading workflow that historically slowed pre-mob qualification by 6-9 days." },
      ]}
    />
  );
}
