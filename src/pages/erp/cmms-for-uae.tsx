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
      heroBody="Affordable, accessible, and fully customizable."
      whatItIs={[
      ]}
      useCases={[
        { useCase: "ADNOC Onshore maintenance contractor", body: "" },
        { useCase: "ADNOC Offshore Das Island operator", body: "A Das Island maintenance contractor (220 vessels) tracks cryogenic LNG service inspection alongside offshore-platform structural inspection — eliminated 30 days of pre-shutdown documentation across two consecutive maintenance windows." },
        { useCase: "ADNOC Refining Ruwais maintenance", body: "" },
        { useCase: "Borouge polyolefin plant operator", body: "A Borouge Ruwais polyolefin plant maintenance team (180 vessels) tracks ethylene-cracker furnace-tube creep, polypropylene reactor service, and cooling-water corrosion with NACE / API-aligned intervals." },
      ]}
      keyFeatures={[
        "ADNOC AGES Asset Integrity inspection-interval management",
        "ACS-01 inspection-report format generation",
        "HTHA on hydrocracker / hydrotreater service tracking",
        "Sea-water and chloride-SCC offshore-coastal models",
        "Bilingual Arabic/English asset registers",
        "Hijri/Gregorian dual dating throughout",
        "AED-denominated default with USD/SAR secondary",
        "FANR radiography licensing integration",
        "ADNOC Tejari vendor-portal work-order evidence export",
        "OSHAD-SF HSE compliance dashboard",
      ]}
      integrations={[
        "ADNOC Tejari vendor portal",
        "ADNOC APQS personnel qualification database",
        "ENOC vendor portal",
        "Emirates Global Aluminium vendor portal",
        "Etisalat Digital / du UAE Cloud hosting",
        "Synergi Life at ADNOC Offshore",
        "IRIS AIM platform compatibility",
      ]}
      faqs={[
        { question: "Does the CMMS support ADNOC AGES?", answer: "Yes. ACS-01 inspection-report formats are bundled." },
        { question: "Is the data hosted inside the UAE?", answer: "By default the CMMS hosts on AWS Middle East (UAE) in Abu Dhabi for AGES-aligned data residency. For clients requiring full NESA IA Standards compliance, in-country hosting is available via Etisalat Digital or du UAE Cloud — both TDRA-licensed providers." },
        { question: "Does the CMMS handle cryogenic LNG service?", answer: "Yes. Cryogenic LNG service at Das Island (ADNOC LNG) — including 9% Ni weld inspection, austenitic stainless cryogenic-toughness tracking, and Charpy retesting per ASME Section VIII Division 2 — is fully supported with sample frequency and disposal/repair workflows pre-built." },
                        { question: "Does the CMMS support FANR radiography licensing?", answer: "Yes. FANR industrial-radiography authorisation status is tracked per radiographer, per radioactive source (Ir-192 / Se-75), and per work order. The CMMS auto-alerts when source-handling qualifications expire and integrates with FANR e-licensing for renewal tracking." },
        { question: "Does the system handle OSHAD-SF compliance?", answer: "Yes. OSHAD-SF (Statutory Framework) compliance is tracked at the entity, project, and work-order levels — including OSHAD-RV (Regulatory Vehicles) for oil-and-gas and construction sectors. Pre-job HSE checks, permit-to-work integration, and post-job incident-reporting workflows are all OSHAD-SF-aligned." },
      ]}
    />
  );
}
