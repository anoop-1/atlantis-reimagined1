import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForSaudiArabia() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Saudi Arabia"
      slug="cmms-for-saudi-arabia"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="Saudi Arabia industrial maintenance operations"
      breadcrumbLabel="CMMS for Saudi Arabia"
      trustBadge="SAEP-1112 / Aramco AIM / NACE MR0175 ready"
      metaDescription="Atlantis NDT ERP CMMS for Saudi Arabia — Aramco SAEP-1119 RBI, NACE MR0175 sour-service, SAC-002 cybersecurity data residency, bilingual Arabic/English asset registers. Flat regional pricing (SAR 67,500)."
      heroBody="Atlantis NDT ERP CMMS pre-configured for Saudi Arabia industrial-maintenance operations — Saudi Aramco SAEP-1119 RBI / damage-mechanism management, NACE MR0175 sour-service tracking, SACS-002 cybersecurity data residency, and bilingual Arabic/English asset registers. Flat SAR 67,500 / $18,000 per year."
      whatItIs={[
        "CMMS for Saudi Arabia inside Atlantis NDT ERP is the Odoo 18 maintenance module pre-configured for the Kingdom's operating environment — Saudi Aramco SAEP-1119 Asset Integrity standard, SAEP-1112 inspector-qualification framework, NACE MR0175 sour-service damage-mechanism profiles, ASME PCC-2 and API 510 / 570 / 653 inspection-interval management, and bilingual Arabic/English asset registers with Hijri/Gregorian dual dating.",
        "The CMMS tracks work-order lifecycle from notification through PM/CM execution, parts consumption and post-job inspection-evidence pack closure. Damage-mechanism profiles are pre-loaded for the principal Saudi service environments — H2S sour gas (Khurais, Shaybah, Manifa), HF acid alkylation (Aramco refineries), high-temperature hydrogen attack (HTHA) on Hydrocracker / Hydrotreater service, sea-water corrosion at Tanajib / Ras Tanura terminals, and chloride-stress-corrosion cracking on stainless overhead systems.",
      ]}
      useCases={[
        { useCase: "Aramco Eastern Province operator", body: "An Eastern Province operator-side maintenance team (450 vessels across Abqaiq / Berri / Manifa) uses CMMS RBI scheduling tied to API 581 risk targets — deferred SAR 22M of pressure-vessel replacement spend at Khurais by 16 months under API 579 Level 2 FFS evidence." },
        { useCase: "YASREF refinery maintenance contractor", body: "A Yanbu refinery contractor (200 vessels) tracks shutdown work-orders with SAEP-1119 RBI-driven prioritisation — cut Yanbu turnaround critical-path inspection time by 18% across two consecutive cycles." },
        { useCase: "SABIC Jubail petrochemical operator", body: "A Jubail SABIC complex maintenance team (380 vessels) uses CMMS-integrated NACE MR0175 sour-service damage models — eliminated three repeat HTHA-related findings in SABIC Kemya audits over 18 months." },
        { useCase: "Maaden Ras Al-Khair phosphate plant", body: "A Maaden Ras Al-Khair phosphate-fertiliser maintenance team (120 vessels) tracks acid-service damage mechanisms — sulphuric / phosphoric acid corrosion and stress-corrosion-cracking in stainless service — with NACE / API-aligned inspection intervals." },
      ]}
      keyFeatures={[
        "Aramco SAEP-1119 Asset Integrity inspection-interval management",
        "API 510 / 570 / 653 inspection interval auto-calculation",
        "API 581 RBI risk-target tracking and PM scheduling",
        "NACE MR0175 sour-service damage-mechanism profiles",
        "HTHA on hydrocracker / hydrotreater service tracking",
        "Sea-water and chloride-SCC corrosion models",
        "HF acid alkylation damage-mechanism tracking",
        "Bilingual Arabic/English asset registers",
        "Hijri/Gregorian dual dating throughout",
        "SAR-denominated default with USD secondary",
        "SACS-002 cybersecurity data-residency overlay",
        "Aramco APQS / VQIP work-order portal integration",
        "Mobile field-tech app with offline data capture",
        "Equipment calibration tracking aligned with SAC ISO 17025",
      ]}
      integrations={[
        "SAP Plant Maintenance at Saudi Aramco",
        "SAP S/4HANA at SABIC / SATORP / YASREF",
        "IBM Maximo at Petro Rabigh",
        "Aramco APQS / VQIP vendor portal",
        "Aramco SAEP-1119 damage-mechanism database",
        "Meridium APM at YASREF",
        "AspenTech RBI module export",
        "Synergi Life at Aramco offshore",
        "STC Cloud / Mobily Business in-Kingdom hosting",
        "Hyperion / Oracle EBS at SAGCO subsidiaries",
      ]}
      faqs={[
        { question: "Does the CMMS support Aramco SAEP-1119 RBI?", answer: "Yes. SAEP-1119 Asset Integrity covers RBI and damage-mechanism management — the CMMS pre-loads SAEP-1119-aligned damage-mechanism profiles per equipment class and auto-schedules inspections at the API 581 risk-target intervals." },
        { question: "Is the data hosted inside Saudi Arabia?", answer: "By default the CMMS hosts on AWS Middle East (Bahrain) for SACS-002 compliance. For clients requiring full NCA Cloud Cybersecurity Controls (CCC-1:2020) compliance, in-Kingdom hosting is available via STC Cloud (Riyadh) or Mobily Business — both NCA-licensed providers." },
        { question: "Does the CMMS handle NACE MR0175 sour-service?", answer: "Yes. NACE MR0175 / ISO 15156 sour-service damage-mechanism profiles are pre-loaded for the principal Saudi sour-service environments — Khurais, Shaybah, Manifa, Hawiyah-NGL, and Wasit gas plant. The CMMS auto-flags vessels approaching damage-mechanism trigger thresholds." },
        { question: "Does the CMMS integrate with SAP PM at Aramco?", answer: "Yes. The CMMS bidirectionally syncs work orders, equipment master data and inspection results with SAP Plant Maintenance at Saudi Aramco, SABIC, SATORP and YASREF — typically deployed as a parallel-data-store contractor-side CMMS that the operator-side SAP PM consumes via OData web services or RFC connectors." },
        { question: "Can the CMMS handle HTHA on hydrocracker service?", answer: "Yes. High-Temperature Hydrogen Attack (HTHA) on hydrocracker, hydrotreater and reformer service is tracked using API 941 Nelson curves with operational-history time-temperature-pressure integration. The CMMS auto-flags vessels approaching API 941-defined HTHA thresholds." },
        { question: "Does the CMMS support bilingual Arabic/English output?", answer: "Yes. Work-order PDFs, equipment-cards, calibration certificates and post-job reports all generate in parallel Arabic/English layout with Hijri/Gregorian dual dating. Naskh and Sakkal Majalla fonts are bundled." },
        { question: "Does the system handle equipment calibration?", answer: "Yes. Equipment calibration is tracked per UT thickness gauge, RT source, MT yoke, PT spray-can lot and torque-wrench — with SAC-aligned ISO 17025 traceability records and auto-generated calibration due-date alerts." },
      ]}
    />
  );
}
