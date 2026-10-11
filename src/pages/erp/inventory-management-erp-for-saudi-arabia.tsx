import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementErpForSaudiArabia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management ERP for Saudi Arabia"
      slug="inventory-management-erp-for-saudi-arabia"
      appName="Inventory Management"
      industry="Saudi Arabia inspection and industrial operations"
      breadcrumbLabel="Inventory Management for Saudi Arabia"
      trustBadge="SAEP-1112 / ZATCA / SAC ready"
      countrySlug="saudi-arabia"
      countryLabel="Saudi Arabia"
      metaDescription="Atlantis NDT ERP Inventory Management for Saudi Arabia — multi-warehouse Aramco/SABIC/RCJY-aligned stock control, NACE MR0175 consumables tracking, ZATCA e-invoicing, bilingual Arabic/English. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for Saudi Arabia — multi-warehouse stock control across Aramco / SABIC / RCJY-aligned consumables, NACE MR0175 sour-service-grade material tracking, ZATCA Phase 2 e-invoicing, bilingual Arabic/English UI, and SAC-aligned ISO 17025 calibration lot management. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Inventory Management ERP for Saudi Arabia tracks consumables, capital equipment, calibrated instruments, radiation sources and PPE across multiple warehouses with Aramco / SABIC / SATORP / YASREF lot-traceability requirements. Every UT couplant batch, MT dry-magnetic-particle lot, PT spray-can batch, Ir-192 / Se-75 / Co-60 radioactive source, and radiographic-film lot is tracked with full chain-of-custody from receipt through consumption.",
      ]}
      useCases={[
        { useCase: "Aramco contractor multi-warehouse logistics", body: "Example: an Eastern Province contractor tracks consumables across Dammam HQ, Abqaiq site warehouse, Khurais FIFO base and Shaybah remote camp." },
        { useCase: "SABIC Jubail / Yanbu petrochemical supplier", body: "Example: a Jubail contractor tags every consumable lot to specific SABIC complex (Kemya, Yansab, Petrokemya, Sharq) and tracks NACE MR0175 sour-service grades." },
        { useCase: "RCJY industrial-city customs flow", body: "Example: a Yanbu contractor integrates ZATCA Customs HS-code import data with internal inventory." },
        { useCase: "Vision 2030 NEOM remote-site mobilization", body: "Example: a Tabuk-based contractor tracks NEOM Phase 1 mobilization-stock at Sharma, Magna and Tabuk base camps with daily SAP S/4HANA reconciliation to Aramco contractor portal." },
      ]}
      keyFeatures={[
        "Multi-warehouse stock control (Dammam/Khobar/Jubail/Yanbu/Riyadh/NEOM)",
        "Aramco / SABIC / SATORP / YASREF lot-traceability",
        "NACE MR0175 / ISO 15156 sour-service-grade material tagging",
        "UT couplant / MT dry-particle / PT spray batch tracking",
        "Ir-192 / Se-75 / Co-60 radioactive-source chain-of-custody",
        "Radiographic-film lot tracking and shelf-life alerts",
        "Saudi Customs HS-code import data integration",
        "Bilingual Arabic/English UI with Hijri/Gregorian dating",
        "SAR-denominated default with USD secondary",
        "Equipment calibration tracking aligned with SAC ISO 17025",
        "Min/Max replenishment per warehouse with auto-PO generation",
        "GOSI workforce-count syncing for headcount-driven consumables",
      ]}
      integrations={[
        "Aramco APQS / VQIP vendor portal",
        "ZATCA Fatoorah e-invoicing platform",
        "STC Cloud / Mobily Business in-Kingdom hosting",
        "Saudi Customs (ZATCA Customs) HS-code import API",
        "RCJY industrial-city permit system",
        "Saudi Accreditation Center (SAC) calibration registry",
        "NRRC radiography licensing portal",
        "Hyperion / Oracle EBS at SAGCO subsidiaries",
      ]}
      faqs={[
        { question: "Does the inventory module support multi-warehouse logistics across the Kingdom?", answer: "Yes. The platform supports unlimited warehouses with intra-Kingdom transfer workflows, partial-receipt and partial-issue handling, and FIFO/LIFO/lot/serial costing methods. Pre-loaded warehouse templates cover Dammam, Khobar, Jubail, Yanbu, Riyadh, Tabuk and NEOM site locations." },
        { question: "Is the data hosted inside Saudi Arabia?", answer: "By default the platform hosts on AWS Middle East (Bahrain) for SACS-002 compliance. For clients requiring NCA Cloud Cybersecurity Controls (CCC-1:2020) compliance, in-Kingdom hosting is available via STC Cloud (Riyadh) or Mobily Business — both NCA-licensed providers." },
                { question: "Does the system track radioactive sources?", answer: "Yes. Ir-192 / Se-75 / Co-60 radioactive sources are tracked with full chain-of-custody from import through disposal, NRRC licensing status, half-life-driven decay calculations, and shielding/transport-container assignments. Source-leakage testing and wipe-test results are logged per source per period." },
        { question: "Can the system tag NACE MR0175 sour-service-grade material?", answer: "Yes. Every SKU can be flagged as NACE MR0175 / ISO 15156-compliant at the carbon-steel, duplex stainless, low-alloy or nickel-alloy material level. The system prevents accidental issue of non-MR0175 material to sour-service work orders." },
        { question: "Does the inventory module support Saudi Customs HS-code data?", answer: "Yes. ZATCA Customs HS-code import data integrates with internal inventory receipts so that material imported through Jeddah Islamic Port, Dammam King Abdulaziz Port or Riyadh Dry Port is automatically reconciled against PO and customs-clearance documentation." },
              ]}
    />
  );
}
