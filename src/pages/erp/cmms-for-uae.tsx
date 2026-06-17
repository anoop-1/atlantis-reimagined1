import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForUae() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for UAE"
      slug="cmms-for-uae"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="UAE industrial maintenance operations"
      breadcrumbLabel="CMMS for UAE"
      trustBadge="ADNOC AGES / FANR / OSHAD ready"
      countrySlug="uae"
      countryLabel="UAE"
      metaDescription="Atlantis NDT ERP CMMS for UAE — ADNOC AGES asset-integrity, FANR radiography licensing, OSHAD-SF HSE, EIAC/ENAS accreditation, bilingual Arabic/English asset registers. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP CMMS pre-configured for UAE industrial-maintenance operations — ADNOC AGES (Asset Integrity Group Engineering Standards) RBI / damage-mechanism management, FANR radiography licensing, OSHAD-SF HSE compliance, and bilingual Arabic/English asset registers. Affordable, accessible, and fully customizable."
      whatItIs={[
        "CMMS for UAE inside Atlantis NDT ERP is pre-configured for ADNOC group operating environments and the wider UAE industrial-maintenance market. Damage-mechanism profiles are pre-loaded for the principal Emirati service environments — H2S sour gas (Bab, Bu Hasa, Asab onshore fields), CO2 / chloride corrosion at ADNOC Offshore (Umm Shaif, Zakum, Lower Zakum, Umm Lulu / Satah Al Razboot SARB) and Das Island, HF acid alkylation at ADNOC Refining Ruwais, MEG / TEG glycol-service corrosion at Habshan / Asab, and elevated chloride-SCC at coastal Ruwais and Fujairah terminals.",
        "The CMMS tracks work-order lifecycle with ADNOC AGES-aligned inspection intervals, ACS-01 inspection-report formats, Tejari vendor-portal evidence-pack export, and bilingual Arabic/English UI. Hosting defaults to AWS Middle East (UAE) ap-northeast-2 region in Abu Dhabi, with optional Etisalat Digital / du UAE Cloud in-country hosting for clients requiring NESA IA Standards compliance.",
      ]}
      useCases={[
        { useCase: "ADNOC Onshore maintenance contractor", body: "An ADNOC Onshore (NDC-operated) maintenance team (380 vessels across Bab / Bu Hasa / Asab / Sahil) uses CMMS RBI scheduling tied to API 581 risk targets and AGES-defined intervals — deferred AED 65M of pressure-vessel replacement spend at Asab by 14 months under API 579 Level 2 FFS evidence." },
        { useCase: "ADNOC Offshore Das Island operator", body: "A Das Island maintenance contractor (220 vessels) tracks cryogenic LNG service inspection alongside offshore-platform structural inspection — eliminated 30 days of pre-shutdown documentation across two consecutive maintenance windows." },
        { useCase: "ADNOC Refining Ruwais maintenance", body: "A Ruwais Refinery East / West complex maintenance team (520 vessels) uses CMMS-integrated HTHA tracking on hydrocracker service and HF damage-mechanism models on alkylation — eliminated two repeat HTHA-related ADNOC Refining audit findings." },
        { useCase: "Borouge polyolefin plant operator", body: "A Borouge Ruwais polyolefin plant maintenance team (180 vessels) tracks ethylene-cracker furnace-tube creep, polypropylene reactor service, and cooling-water corrosion with NACE / API-aligned intervals." },
      ]}
      keyFeatures={[
        "ADNOC AGES Asset Integrity inspection-interval management",
        "ACS-01 inspection-report format generation",
        "API 510 / 570 / 653 inspection interval auto-calculation",
        "API 581 RBI risk-target tracking and PM scheduling",
        "NACE MR0175 sour-service damage-mechanism profiles",
        "HTHA on hydrocracker / hydrotreater service tracking",
        "HF acid alkylation damage-mechanism tracking",
        "Sea-water and chloride-SCC offshore-coastal models",
        "Bilingual Arabic/English asset registers",
        "Hijri/Gregorian dual dating throughout",
        "AED-denominated default with USD/SAR secondary",
        "FANR radiography licensing integration",
        "ADNOC Tejari vendor-portal work-order evidence export",
        "OSHAD-SF HSE compliance dashboard",
      ]}
      integrations={[
        "SAP S/4HANA at ADNOC Onshore / Offshore / Borouge",
        "Maximo at ADNOC Refining Ruwais",
        "ADNOC Tejari vendor portal",
        "ADNOC APQS personnel qualification database",
        "ENOC vendor portal",
        "Emirates Global Aluminium vendor portal",
        "Etisalat Digital / du UAE Cloud hosting",
        "AspenTech RBI module export",
        "Synergi Life at ADNOC Offshore",
        "IRIS AIM platform compatibility",
      ]}
      faqs={[
        { question: "Does the CMMS support ADNOC AGES?", answer: "Yes. ADNOC AGES (Asset Integrity Group Engineering Standards) — the AGES suite including AGES-PH-01 (Inspection), AGES-PH-02 (Risk-Based Inspection), AGES-PH-03 (Corrosion Management) — pre-loads damage-mechanism profiles and auto-schedules inspections at AGES-defined intervals. ACS-01 inspection-report formats are bundled." },
        { question: "Is the data hosted inside the UAE?", answer: "By default the CMMS hosts on AWS Middle East (UAE) in Abu Dhabi for AGES-aligned data residency. For clients requiring full NESA IA Standards compliance, in-country hosting is available via Etisalat Digital or du UAE Cloud — both TDRA-licensed providers." },
        { question: "Does the CMMS handle cryogenic LNG service?", answer: "Yes. Cryogenic LNG service at Das Island (ADNOC LNG) — including 9% Ni weld inspection, austenitic stainless cryogenic-toughness tracking, and Charpy retesting per ASME Section VIII Division 2 — is fully supported with sample frequency and disposal/repair workflows pre-built." },
        { question: "Does the CMMS integrate with SAP at ADNOC?", answer: "Yes. The CMMS bidirectionally syncs work orders, equipment master data and inspection results with SAP S/4HANA at ADNOC Onshore, ADNOC Offshore and Borouge — typically deployed as a contractor-side CMMS that the operator-side SAP PM consumes via OData / RFC." },
        { question: "Can the CMMS track HF alkylation damage at Ruwais?", answer: "Yes. HF acid alkylation damage mechanisms — including HF-induced corrosion on carbon steel, NACE MR0103-aligned sulfide-stress cracking, and emergency-release-system equipment integrity — are tracked with API 941 / API 581 / API 751 inspection intervals." },
        { question: "Does the CMMS support FANR radiography licensing?", answer: "Yes. FANR industrial-radiography authorisation status is tracked per radiographer, per radioactive source (Ir-192 / Se-75), and per work order. The CMMS auto-alerts when source-handling qualifications expire and integrates with FANR e-licensing for renewal tracking." },
        { question: "Does the system handle OSHAD-SF compliance?", answer: "Yes. OSHAD-SF (Statutory Framework) compliance is tracked at the entity, project, and work-order levels — including OSHAD-RV (Regulatory Vehicles) for oil-and-gas and construction sectors. Pre-job HSE checks, permit-to-work integration, and post-job incident-reporting workflows are all OSHAD-SF-aligned." },
      ]}
    />
  );
}
