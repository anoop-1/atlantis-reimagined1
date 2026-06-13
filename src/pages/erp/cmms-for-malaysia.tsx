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
      metaDescription="Atlantis NDT ERP CMMS for Malaysia — DOSH PMA certification, AELB radiography, PETRONAS PTS standards, SIRIM QAS accreditation, bilingual Bahasa Melayu/English asset registers. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP CMMS pre-configured for Malaysian industrial-maintenance operations — DOSH PMA (Person-in-Charge for Pressure Vessels) certification, AELB Class A/B/C radiography licensing, PETRONAS Technical Standards (PTS) compliance, and bilingual Bahasa Melayu/English asset registers. Affordable, accessible, and fully customizable."
      whatItIs={[
        "CMMS for Malaysia inside Atlantis NDT ERP is pre-configured for Malaysia's PETRONAS-anchored hydrocarbon and the wider RAPID / MLNG / Pengerang / Bintulu / Kerteh / Melaka petrochemical-and-LNG industrial base. Damage-mechanism profiles are pre-loaded for principal Malaysian service environments — H2S sour service at Sarawak gas operations, opportunistic-crude TAN corrosion at Melaka / PRefChem, cryogenic LNG service at MLNG Bintulu and PFLNG Satu / Dua, naphthenic-acid corrosion at Kerteh and PRefChem, and tropical-humidity external corrosion across coastal facilities.",
        "The CMMS tracks work-order lifecycle with PETRONAS PTS-aligned inspection intervals, DOSH PMA-driven inspector qualification, JKKP (Jabatan Keselamatan dan Kesihatan Pekerjaan) Form JKKP-G submission, AELB radiography licensing, and SIRIM QAS ISO 17020 / 17025 accreditation tracking. Reports generate bilingual Bahasa Melayu/English PDF output with RM-denominated commercial terms and PETRONAS SUS / e-License / ePersit vendor-portal evidence export.",
      ]}
      useCases={[
        { useCase: "PETRONAS Carigali offshore operator", body: "A PETRONAS Carigali Sarawak-offshore maintenance contractor (260 vessels across Baronia / Bokor / Bayu-Undan-supplying assets) uses CMMS RBI scheduling tied to PTS — eliminated 9 days of pre-shutdown documentation and lifted bid-conversion from 21% to 36%." },
        { useCase: "MLNG Bintulu cryogenic operations", body: "A Bintulu MLNG maintenance contractor (180 vessels across Train 1-9) uses CMMS-integrated 9% Ni weld inspection tracking — cleared two consecutive PETRONAS Gas Berhad audits with zero major findings." },
        { useCase: "RAPID Pengerang petrochemical maintenance", body: "A Pengerang RAPID maintenance team (420 vessels across PRefChem refinery and petrochemical) uses CMMS-integrated HTHA tracking on hydrocracker service and TAN corrosion on opportunistic-crude — deferred RM 38M of vessel-replacement spend by 12 months." },
        { useCase: "Kerteh petrochemical hub operator", body: "A Kerteh integrated-petrochemical-hub maintenance team (260 vessels across olefins, polyethylene, polypropylene plants) tracks plant-specific damage mechanisms with PETRONAS PTS-aligned intervals." },
      ]}
      keyFeatures={[
        "PETRONAS Technical Standards (PTS) inspection-interval management",
        "DOSH PMA Grade 1/2/3 inspector qualification tracking",
        "JKKP Form JKKP-G statutory submission generation",
        "AELB Class A/B/C radiography licence tracking",
        "SIRIM QAS ISO 17020 / 17025 accreditation currency",
        "API 510 / 570 / 653 inspection interval auto-calculation",
        "NACE MR0175 sour-service damage-mechanism profiles",
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
        "SAP S/4HANA at PETRONAS / PCG / MLNG",
        "Maximo at PETRONAS Gas Berhad",
        "TM Cloud Alpha / YTL Data Center in-country hosting",
        "LHDN MyInvois e-invoicing portal",
        "JKKP Form JKKP-G statutory portal",
      ]}
      faqs={[
        { question: "Does the CMMS support PETRONAS PTS?", answer: "Yes. PETRONAS Technical Standards (PTS) — including PTS 31.38 (Inspection), PTS 60.2103 (RBI), PTS 70 (Materials and Corrosion) — pre-load damage-mechanism profiles and auto-schedule inspections at PTS-defined intervals. PETRONAS SUS / e-License / ePersit evidence export is single-click." },
        { question: "Is the data hosted inside Malaysia?", answer: "Yes. By default the CMMS hosts on AWS Asia-Pacific (Malaysia) Kuala Lumpur region (launched 2024) for PDPA 2010 compliance. For clients requiring CSM27001 sovereign-cloud certification, in-country hosting is available via TM Cloud Alpha or YTL Data Center — both Cyberview-licensed providers." },
        { question: "Does the CMMS handle MLNG cryogenic inspection?", answer: "Yes. MLNG Train 1-9 cryogenic 9% Ni weld inspection, austenitic stainless cryogenic-toughness tracking, and Charpy retesting per ASME Section VIII Division 2 are fully supported. PFLNG Satu / Dua floating-LNG inspection workflows are pre-built." },
        { question: "Does the CMMS track DOSH PMA certification?", answer: "Yes. DOSH PMA (Person-in-Charge for Pressure Vessels) Grade 1/2/3 certification, Competent Person (Steam) and Competent Person (Pressure Vessel) certification status is tracked per individual and per work order. The CMMS auto-flags work orders where PMA grade required exceeds available inspectors' qualifications." },
        { question: "Does the CMMS handle JKKP Form JKKP-G submission?", answer: "Yes. JKKP-G statutory submission for pressure-vessel inspection in Malaysia is auto-generated from inspection records with all required vessel parameters, PMA-certified inspector evidence, and supporting documentation packaged for state-level Jabatan Tenaga Kerja submission." },
        { question: "Can the CMMS handle East Malaysia (Sabah/Sarawak) permitting?", answer: "Yes. Sabah and Sarawak operate distinct state-level industrial permitting under the Natural Resources Ordinance — including Sarawak State-specific cabotage requirements for vessels operating in Bintulu and Miri waters. The CMMS tracks state-of-execution per work order and applies the appropriate permitting workflow." },
        { question: "Does the system integrate with SAP at PETRONAS?", answer: "Yes. The CMMS bidirectionally syncs work orders, equipment master data and inspection results with SAP S/4HANA at PETRONAS, PETRONAS Chemicals Group (PCG), MLNG Bintulu and RAPID PRefChem — typically deployed as a contractor-side CMMS that the operator-side SAP PM consumes via OData / RFC." },
      ]}
    />
  );
}
