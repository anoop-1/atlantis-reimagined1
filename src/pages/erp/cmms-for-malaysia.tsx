import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForMalaysia() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Malaysia"
      slug="cmms-for-malaysia"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="Malaysia industrial maintenance operations"
      breadcrumbLabel="CMMS for Malaysia"
      trustBadge="DOSH / AELB / PETRONAS PTS / SIRIM ready"
      countrySlug="malaysia"
      countryLabel="Malaysia"
      metaDescription="Atlantis NDT ERP CMMS for Malaysia — DOSH PMA certification, AELB radiography, PETRONAS PTS standards, SIRIM QAS accreditation, bilingual Bahasa Melayu/English asset registers. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP CMMS pre-configured for Malaysian industrial-maintenance operations — DOSH PMA (Person-in-Charge for Pressure Vessels) certification, AELB Class A/B/C radiography licensing, PETRONAS Technical Standards (PTS) compliance, and bilingual Bahasa Melayu/English asset registers. Affordable, accessible, and fully customizable."
      whatItIs={[
      ]}
      useCases={[
        { useCase: "PETRONAS Carigali offshore operator", body: "" },
        { useCase: "MLNG Bintulu cryogenic operations", body: "Example: a Bintulu MLNG maintenance contractor uses CMMS-integrated 9% Ni weld inspection tracking." },
        { useCase: "RAPID Pengerang petrochemical maintenance", body: "Example: a Pengerang RAPID maintenance team uses CMMS-integrated HTHA tracking on hydrocracker service and TAN corrosion on opportunistic-crude." },
        { useCase: "Kerteh petrochemical hub operator", body: "Example: a Kerteh integrated-petrochemical-hub maintenance team tracks plant-specific damage mechanisms with PETRONAS PTS-aligned intervals." },
      ]}
      keyFeatures={[
        "PETRONAS Technical Standards (PTS) inspection-interval management",
        "DOSH PMA Grade 1/2/3 inspector qualification tracking",
        "JKKP Form JKKP-G statutory submission generation",
        "AELB Class A/B/C radiography licence tracking",
        "SIRIM QAS ISO 17020 / 17025 accreditation currency",
        "9% Ni cryogenic LNG-service weld inspection",
        "TAN opportunity-crude naphthenic-acid corrosion models",
        "Bilingual Bahasa Melayu/English asset registers",
        "RM-denominated default with USD/SGD secondary",
        "SST 8% compliance with LHDN MyInvois e-invoicing",
        "PETRONAS SUS / e-License / ePersit work-order evidence export",
        "Sabah / Sarawak East Malaysia state-specific permitting",
      ]}
      integrations={[
        "PETRONAS SUS vendor portal",
        "PETRONAS e-License / ePersit",
        "MLNG Bintulu vendor portal",
        "RAPID PRefChem vendor portal",
        "Sarawak Petchem vendor portal",
        "TM Cloud Alpha / YTL Data Center in-country hosting",
        "LHDN MyInvois e-invoicing portal",
        "JKKP Form JKKP-G statutory portal",
      ]}
      faqs={[
        { question: "Does the CMMS support PETRONAS PTS?", answer: "Yes. PETRONAS SUS / e-License / ePersit evidence export is single-click." },
        { question: "Is the data hosted inside Malaysia?", answer: "Yes. By default the CMMS hosts on AWS Asia-Pacific (Malaysia) Kuala Lumpur region (launched 2024) for PDPA 2010 compliance. For clients requiring CSM27001 sovereign-cloud certification, in-country hosting is available via TM Cloud Alpha or YTL Data Center — both Cyberview-licensed providers." },
        { question: "Does the CMMS handle MLNG cryogenic inspection?", answer: "Yes. MLNG Train 1-9 cryogenic 9% Ni weld inspection, austenitic stainless cryogenic-toughness tracking, and Charpy retesting per ASME Section VIII Division 2 are fully supported. PFLNG Satu / Dua floating-LNG inspection workflows are pre-built." },
        { question: "Does the CMMS track DOSH PMA certification?", answer: "Yes. DOSH PMA (Person-in-Charge for Pressure Vessels) Grade 1/2/3 certification, Competent Person (Steam) and Competent Person (Pressure Vessel) certification status is tracked per individual and per work order. The CMMS auto-flags work orders where PMA grade required exceeds available inspectors' qualifications." },
        { question: "Does the CMMS handle JKKP Form JKKP-G submission?", answer: "Yes. JKKP-G statutory submission for pressure-vessel inspection in Malaysia is auto-generated from inspection records with all required vessel parameters, PMA-certified inspector evidence, and supporting documentation packaged for state-level Jabatan Tenaga Kerja submission." },
        { question: "Can the CMMS handle East Malaysia (Sabah/Sarawak) permitting?", answer: "Yes. Sabah and Sarawak operate distinct state-level industrial permitting under the Natural Resources Ordinance — including Sarawak State-specific cabotage requirements for vessels operating in Bintulu and Miri waters. The CMMS tracks state-of-execution per work order and applies the appropriate permitting workflow." },
              ]}
    />
  );
}
