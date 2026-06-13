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
      metaDescription="Atlantis NDT ERP Inventory Management for Saudi Arabia — multi-warehouse Aramco/SABIC/RCJY-aligned stock control, NACE MR0175 consumables tracking, ZATCA e-invoicing, bilingual Arabic/English. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for Saudi Arabia — multi-warehouse stock control across Aramco / SABIC / RCJY-aligned consumables, NACE MR0175 sour-service-grade material tracking, ZATCA Phase 2 e-invoicing, bilingual Arabic/English UI, and SAC-aligned ISO 17025 calibration lot management. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Inventory Management ERP for Saudi Arabia tracks consumables, capital equipment, calibrated instruments, radiation sources and PPE across multiple warehouses with Aramco / SABIC / SATORP / YASREF lot-traceability requirements. Every UT couplant batch, MT dry-magnetic-particle lot, PT spray-can batch, Ir-192 / Se-75 / Co-60 radioactive source, and radiographic-film lot is tracked with full chain-of-custody from receipt through consumption.",
        "Sour-service-grade material (NACE MR0175 / ISO 15156-compliant carbon steel, duplex stainless, low-alloy steel) is tagged at the SKU level. ZATCA Phase 2 e-invoicing with QR-code TLV encoding is built-in. Bilingual Arabic/English UI runs alongside Hijri/Gregorian dual dating. Multi-warehouse routing supports Dammam / Khobar / Jubail / Yanbu / Riyadh / Tabuk / NEOM logistics flows with Saudi Customs (ZATCA Customs) HS-code import data integration.",
      ]}
      useCases={[
        { useCase: "Aramco contractor multi-warehouse logistics", body: "An Eastern Province contractor (75 techs) tracks consumables across Dammam HQ, Abqaiq site warehouse, Khurais FIFO base and Shaybah remote camp — eliminated SAR 1.2M of stock-out-driven mobilization delays in year one." },
        { useCase: "SABIC Jubail / Yanbu petrochemical supplier", body: "A Jubail contractor (60 techs) tags every consumable lot to specific SABIC complex (Kemya, Yansab, Petrokemya, Sharq) and tracks NACE MR0175 sour-service grades — passed SABIC Q/A audit with zero MoC findings." },
        { useCase: "RCJY industrial-city customs flow", body: "A Yanbu contractor (40 techs) integrates ZATCA Customs HS-code import data with internal inventory — cut customs-clearance documentation prep from 6 days to 1 day for radiographic-source imports." },
        { useCase: "Vision 2030 NEOM remote-site mobilization", body: "A Tabuk-based contractor (28 techs) tracks NEOM Phase 1 mobilization-stock at Sharma, Magna and Tabuk base camps with daily SAP S/4HANA reconciliation to Aramco contractor portal." },
      ]}
      keyFeatures={[
        "Multi-warehouse stock control (Dammam/Khobar/Jubail/Yanbu/Riyadh/NEOM)",
        "Aramco / SABIC / SATORP / YASREF lot-traceability",
        "NACE MR0175 / ISO 15156 sour-service-grade material tagging",
        "UT couplant / MT dry-particle / PT spray batch tracking",
        "Ir-192 / Se-75 / Co-60 radioactive-source chain-of-custody",
        "Radiographic-film lot tracking and shelf-life alerts",
        "ZATCA Phase 2 e-invoicing with QR-code TLV encoding",
        "Saudi Customs HS-code import data integration",
        "Bilingual Arabic/English UI with Hijri/Gregorian dating",
        "SAR-denominated default with USD secondary",
        "Equipment calibration tracking aligned with SAC ISO 17025",
        "Mobile-app barcode/QR scanning for field-tech consumption",
        "Min/Max replenishment per warehouse with auto-PO generation",
        "GOSI workforce-count syncing for headcount-driven consumables",
      ]}
      integrations={[
        "SAP S/4HANA at Saudi Aramco, SABIC, SATORP",
        "Aramco APQS / VQIP vendor portal",
        "ZATCA Fatoorah e-invoicing platform",
        "STC Cloud / Mobily Business in-Kingdom hosting",
        "Saudi Customs (ZATCA Customs) HS-code import API",
        "RCJY industrial-city permit system",
        "Maximo at YASREF / Petro Rabigh",
        "Saudi Accreditation Center (SAC) calibration registry",
        "NRRC radiography licensing portal",
        "Hyperion / Oracle EBS at SAGCO subsidiaries",
      ]}
      faqs={[
        { question: "Does the inventory module support multi-warehouse logistics across the Kingdom?", answer: "Yes. The platform supports unlimited warehouses with intra-Kingdom transfer workflows, partial-receipt and partial-issue handling, and FIFO/LIFO/lot/serial costing methods. Pre-loaded warehouse templates cover Dammam, Khobar, Jubail, Yanbu, Riyadh, Tabuk and NEOM site locations." },
        { question: "Is the data hosted inside Saudi Arabia?", answer: "By default the platform hosts on AWS Middle East (Bahrain) for SACS-002 compliance. For clients requiring NCA Cloud Cybersecurity Controls (CCC-1:2020) compliance, in-Kingdom hosting is available via STC Cloud (Riyadh) or Mobily Business — both NCA-licensed providers." },
        { question: "Does the inventory module handle ZATCA Phase 2 e-invoicing?", answer: "Yes. ZATCA Fatoorah Phase 2 (Integration) e-invoicing generates XML invoices with QR-code TLV (Tag-Length-Value) encoding and integrates with the ZATCA portal via the official integration API." },
        { question: "Does the system track radioactive sources?", answer: "Yes. Ir-192 / Se-75 / Co-60 radioactive sources are tracked with full chain-of-custody from import through disposal, NRRC licensing status, half-life-driven decay calculations, and shielding/transport-container assignments. Source-leakage testing and wipe-test results are logged per source per period." },
        { question: "Can the system tag NACE MR0175 sour-service-grade material?", answer: "Yes. Every SKU can be flagged as NACE MR0175 / ISO 15156-compliant at the carbon-steel, duplex stainless, low-alloy or nickel-alloy material level. The system prevents accidental issue of non-MR0175 material to sour-service work orders." },
        { question: "Does the inventory module support Saudi Customs HS-code data?", answer: "Yes. ZATCA Customs HS-code import data integrates with internal inventory receipts so that material imported through Jeddah Islamic Port, Dammam King Abdulaziz Port or Riyadh Dry Port is automatically reconciled against PO and customs-clearance documentation." },
        { question: "Can the system integrate with SAP at Aramco?", answer: "Yes. The inventory module bidirectionally syncs material master data, stock balances and consumption postings with SAP S/4HANA at Aramco, SABIC, SATORP and YASREF via OData web services or RFC connectors." },
      ]}
    />
  );
}
