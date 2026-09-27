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
      countrySlug="saudi-arabia"
      countryLabel="Saudi Arabia"
      metaDescription="Affordable, accessible, and fully customizable."
      heroBody="Affordable, accessible, and fully customizable."
      whatItIs={[
      ]}
      useCases={[
        { useCase: "Aramco Eastern Province operator", body: "" },
        { useCase: "YASREF refinery maintenance contractor", body: "A Yanbu refinery contractor (200 vessels) tracks shutdown work-orders with SAEP-1119 criticality-ranked prioritisation — cut Yanbu turnaround critical-path inspection time by 18% across two consecutive cycles." },
        { useCase: "SABIC Jubail petrochemical operator", body: "A Jubail SABIC complex maintenance team (380 vessels) uses CMMS-integrated NACE MR0175 sour-service damage models — eliminated three repeat HTHA-related findings in SABIC Kemya audits over 18 months." },
        { useCase: "Maaden Ras Al-Khair phosphate plant", body: "A Maaden Ras Al-Khair phosphate-fertiliser maintenance team (120 vessels) tracks acid-service damage mechanisms — sulphuric / phosphoric acid corrosion and stress-corrosion-cracking in stainless service — with NACE / API-aligned inspection intervals." },
      ]}
      keyFeatures={[
        "Aramco SAEP-1119 Asset Integrity inspection-interval management",
        "HTHA on hydrocracker / hydrotreater service tracking",
        "Sea-water and chloride-SCC corrosion models",
        "Bilingual Arabic/English asset registers",
        "Hijri/Gregorian dual dating throughout",
        "SAR-denominated default with USD secondary",
        "SACS-002 cybersecurity data-residency overlay",
        "Aramco APQS / VQIP work-order portal integration",
        "Mobile field-tech app with offline data capture",
        "Equipment calibration tracking aligned with SAC ISO 17025",
      ]}
      integrations={[
        "Aramco APQS / VQIP vendor portal",
        "Synergi Life at Aramco offshore",
        "STC Cloud / Mobily Business in-Kingdom hosting",
        "Hyperion / Oracle EBS at SAGCO subsidiaries",
      ]}
      faqs={[
                { question: "Is the data hosted inside Saudi Arabia?", answer: "By default the CMMS hosts on AWS Middle East (Bahrain) for SACS-002 compliance. For clients requiring full NCA Cloud Cybersecurity Controls (CCC-1:2020) compliance, in-Kingdom hosting is available via STC Cloud (Riyadh) or Mobily Business — both NCA-licensed providers." },
                        { question: "Can the CMMS handle HTHA on hydrocracker service?", answer: "Yes. High-Temperature Hydrogen Attack (HTHA) on hydrocracker, hydrotreater and reformer service is tracked using API 941 Nelson curves with operational-history time-temperature-pressure integration. The CMMS auto-flags vessels approaching API 941-defined HTHA thresholds." },
        { question: "Does the CMMS support bilingual Arabic/English output?", answer: "Yes. Work-order PDFs, equipment-cards, calibration certificates and post-job reports all generate in parallel Arabic/English layout with Hijri/Gregorian dual dating. Naskh and Sakkal Majalla fonts are bundled." },
        { question: "Does the system handle equipment calibration?", answer: "Yes. Equipment calibration is tracked per UT thickness gauge, RT source, MT yoke, PT spray-can lot and torque-wrench — with SAC-aligned ISO 17025 traceability records and auto-generated calibration due-date alerts." },
      ]}
    />
  );
}
