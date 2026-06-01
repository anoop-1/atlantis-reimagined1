import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementErpForMalaysia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management ERP for Malaysia"
      slug="inventory-management-erp-for-malaysia"
      appName="Inventory Management"
      industry="Malaysia inspection and industrial operations"
      breadcrumbLabel="Inventory Management for Malaysia"
      trustBadge="DOSH / AELB / SIRIM / MyInvois ready"
      metaDescription="Atlantis NDT ERP Inventory Management for Malaysia — multi-warehouse PETRONAS-aligned stock control, AELB radioactive-source tracking, MyInvois e-invoicing, bilingual Bahasa Melayu/English. Flat regional pricing."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for Malaysia — multi-warehouse stock control across PETRONAS / MLNG / RAPID / Sarawak Petchem-aligned consumables, AELB radioactive-source chain-of-custody, LHDN MyInvois e-invoicing, bilingual Bahasa Melayu/English UI, and SIRIM QAS-aligned ISO 17025 calibration lot management. Flat RM 84,000 / $18,000 per year."
      whatItIs={[
        "Inventory Management ERP for Malaysia tracks consumables, capital equipment, calibrated instruments, radiation sources and PPE across multiple warehouses with PETRONAS / MLNG / RAPID lot-traceability requirements. Every UT couplant batch, MT dry-magnetic-particle lot, PT spray-can batch, Ir-192/Se-75/Co-60 radioactive source, and radiographic-film lot is tracked with full chain-of-custody.",
        "PETRONAS Technical Standards (PTS) Material Compliance is baked into the SKU master — NACE MR0175 sour-service grades for Sarawak gas service, cryogenic 9% Ni for MLNG and PFLNG Satu / Dua service, and opportunistic-crude TAN-resistant materials for Melaka and PRefChem service. LHDN MyInvois e-invoicing is integrated via the MyInvois Portal API. Multi-warehouse routing covers Kuala Lumpur / Johor / Pengerang / Bintulu / Kerteh / Melaka / Penang / Kuching logistics flows with Royal Malaysian Customs uCustoms integration.",
      ]}
      useCases={[
        { useCase: "PETRONAS multi-asset contractor", body: "A KL contractor (45 techs) tracks consumables across KL HQ, Pengerang site warehouse, Bintulu FIFO base and Kerteh remote camp — eliminated RM 320k of stock-out-driven mobilization delays in year one." },
        { useCase: "MLNG Bintulu cryogenic-spares contractor", body: "A Bintulu contractor (28 techs) tags every consumable lot to MLNG Train 1-9 asset with 9% Ni cryogenic-material flagging — passed PETRONAS Gas Berhad Q/A audit with zero material-traceability findings." },
        { useCase: "RAPID Pengerang petrochemical supplier", body: "A Pengerang contractor (38 techs) manages RAPID PRefChem complex consumables with Johor Petroleum Development Corporation permit-aware import documentation — cut customs-clearance prep from 5 days to 1 day." },
        { useCase: "Penang aerospace MRO consumables", body: "A Penang aerospace contractor (22 techs) tracks AAT, Spirit AeroSystems Subang, UMW Aerospace consumables with NAS 410 / EN 4179-aware per-aircraft serial-number traceability." },
      ]}
      keyFeatures={[
        "Multi-warehouse stock control (KL/Johor/Pengerang/Bintulu/Kerteh/Melaka/Penang/Kuching)",
        "PETRONAS / MLNG / RAPID / Sarawak Petchem lot-traceability",
        "PTS Material Compliance NACE MR0175 / 9% Ni cryogenic tagging",
        "UT couplant / MT dry-particle / PT spray batch tracking",
        "Ir-192 / Se-75 / Co-60 radioactive-source AELB chain-of-custody",
        "Radiographic-film lot tracking and shelf-life alerts",
        "LHDN MyInvois e-invoicing integration",
        "Royal Malaysian Customs uCustoms HS-code import data",
        "Bilingual Bahasa Melayu/English UI",
        "RM-denominated default with USD/SGD secondary",
        "Equipment calibration tracking aligned with SIRIM QAS ISO 17025",
        "SST 8% compliance with state-specific tax handling",
        "Min/Max replenishment per warehouse with auto-PO generation",
        "Sabah / Sarawak state-specific cabotage and permitting",
      ]}
      integrations={[
        "SAP S/4HANA at PETRONAS / PCG / MLNG",
        "PETRONAS SUS / e-License / ePersit vendor portals",
        "MLNG Bintulu vendor portal",
        "RAPID PRefChem / Sarawak Petchem vendor portals",
        "TM Cloud Alpha / YTL Data Center in-country hosting",
        "Royal Malaysian Customs uCustoms HS-code import API",
        "LHDN MyInvois e-invoicing portal",
        "Maximo at PETRONAS Gas Berhad",
        "SIRIM QAS accreditation registry",
        "AELB e-licensing portal",
      ]}
      faqs={[
        { question: "Does the inventory module support multi-warehouse logistics across Malaysia?", answer: "Yes. Unlimited warehouses with intra-Malaysia transfer workflows, partial-receipt and partial-issue handling, and FIFO/LIFO/lot/serial costing methods. Pre-loaded warehouse templates cover Kuala Lumpur (Shah Alam, Klang), Johor (Pengerang, Pasir Gudang, Iskandar), Sarawak (Bintulu, Miri, Kuching), Pahang (Kerteh), Melaka, Penang and Sabah (Kota Kinabalu)." },
        { question: "Is the data hosted inside Malaysia?", answer: "Yes. By default the platform hosts on AWS Asia-Pacific (Malaysia) Kuala Lumpur region (launched 2024) for PDPA 2010 compliance. For CSM27001 sovereign-cloud certification, in-country hosting is available via TM Cloud Alpha or YTL Data Center." },
        { question: "Does the module handle MyInvois e-invoicing?", answer: "Yes. LHDN MyInvois e-invoicing has been mandatory for businesses above RM 100M turnover since August 2024. Atlantis NDT ERP generates JSON-format e-invoices via the MyInvois Portal API, returning UIN (Unique Identifier Number) and QR code automatically." },
        { question: "Does the system track radioactive sources under AELB?", answer: "Yes. Ir-192 / Se-75 / Co-60 sources are tracked with AELB Class A/B/C-aligned chain-of-custody from import through disposal, half-life-driven decay calculations, shielding/transport-container assignments, and wipe-test results logged per source per period." },
        { question: "Can the system handle East Malaysia (Sabah/Sarawak) cabotage?", answer: "Yes. Sarawak State-specific cabotage requirements (vessels operating in Bintulu / Miri / Kuching waters must hold Sarawak State licensing) and Sabah-specific industrial permitting are tracked per warehouse and per consignment. The system enforces correct cabotage compliance before consignment release." },
        { question: "Does the inventory module support uCustoms data?", answer: "Yes. Royal Malaysian Customs uCustoms HS-code import data integrates with internal inventory receipts so material imported through Port Klang, Pasir Gudang, Tanjung Pelepas, Bintulu Port or Penang Port is automatically reconciled against PO and customs documentation." },
        { question: "Can the system integrate with SAP at PETRONAS?", answer: "Yes. Bidirectional sync of material master data, stock balances and consumption postings with SAP S/4HANA at PETRONAS, PETRONAS Chemicals Group (PCG), MLNG and RAPID PRefChem via OData / RFC." },
      ]}
    />
  );
}
