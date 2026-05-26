import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementErpForUae() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management ERP for UAE"
      slug="inventory-management-erp-for-uae"
      appName="Inventory Management"
      industry="UAE inspection and industrial operations"
      breadcrumbLabel="Inventory Management for UAE"
      trustBadge="ADNOC AGES / FANR / FTA ready"
      metaDescription="Atlantis NDT ERP Inventory Management for UAE — multi-warehouse ADNOC-aligned stock control, FANR radioactive-source tracking, FTA e-invoicing, bilingual Arabic/English. Flat regional pricing (AED 66,000)."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for UAE — multi-warehouse stock control across ADNOC / ENOC / SNOC / EGA-aligned consumables, FANR radioactive-source chain-of-custody, FTA e-invoicing, bilingual Arabic/English UI, and EIAC/ENAS/DAC-aligned ISO 17025 calibration lot management. Flat AED 66,000 / $18,000 per year."
      whatItIs={[
        "Inventory Management ERP for UAE tracks consumables, capital equipment, calibrated instruments, radiation sources and PPE across multiple warehouses with ADNOC / ENOC / SNOC lot-traceability requirements. Every UT couplant, MT magnetic-particle, PT spray-can batch, Ir-192/Se-75/Co-60 radioactive source, and radiographic-film lot is tracked with full chain-of-custody.",
        "ADNOC AGES Material Compliance requirements are baked into the SKU master — NACE MR0175 sour-service grades, sea-water corrosion-resistant alloys for offshore Das Island / Zirku / Umm Shaif applications, and HF acid alkylation-service materials at Ruwais are flagged at the part-number level. UAE Federal Tax Authority (FTA) e-invoicing (rolling 2026-2027 mandate) is supported via PEPPOL-aligned UBL output. Multi-warehouse routing covers Abu Dhabi / Dubai / Sharjah / Ras Al Khaimah / Fujairah logistics flows with UAE Customs HS-code import integration.",
      ]}
      useCases={[
        { useCase: "ADNOC contractor multi-warehouse logistics", body: "An Abu Dhabi contractor (80 techs) tracks consumables across Mussafah HQ, Ruwais site warehouse, Das Island FIFO base and Bab onshore camp — eliminated AED 1.8M of stock-out-driven mobilization delays in year one." },
        { useCase: "Jebel Ali / DAFZA free-zone trading", body: "A Jebel Ali Free Zone (JAFZA) trading contractor (32 techs) uses bonded-warehouse stock-control for re-export to Iraq / Iran / GCC markets — cut customs-clearance documentation prep from 4 days to half a day." },
        { useCase: "SNOC Sharjah multi-asset stock", body: "A Hamriyah Free Zone contractor (22 techs) manages SNOC Saja'a / Moveyeid / Kahaif site-resident consumables with Hamriyah Free Zone Authority permit-aware import documentation." },
        { useCase: "Fujairah bunker-port marine consumables", body: "A Fujairah bunker-port marine inspection contractor (18 techs) tracks IACS classification-society-compliant consumables for vessel surveys and stockpiles emergency-spares for next-port-of-call vessel-deviation work." },
      ]}
      keyFeatures={[
        "Multi-warehouse stock control (Abu Dhabi/Dubai/Sharjah/RAK/Fujairah)",
        "ADNOC / ENOC / SNOC / EGA lot-traceability",
        "AGES Material Compliance NACE MR0175 / sour-service tagging",
        "UT couplant / MT dry-particle / PT spray batch tracking",
        "Ir-192 / Se-75 / Co-60 radioactive-source chain-of-custody",
        "Radiographic-film lot tracking and shelf-life alerts",
        "FTA e-invoicing PEPPOL-aligned UBL output",
        "UAE Customs HS-code import integration",
        "Bilingual Arabic/English UI with Hijri/Gregorian dating",
        "AED-denominated default with USD/SAR secondary",
        "Equipment calibration tracking aligned with EIAC/ENAS/DAC ISO 17025",
        "JAFZA / DAFZA / Hamriyah Free Zone bonded-warehouse workflows",
        "Min/Max replenishment per warehouse with auto-PO generation",
        "MoHRE workforce-count syncing for headcount-driven consumables",
      ]}
      integrations={[
        "SAP S/4HANA at ADNOC Onshore / Offshore / Borouge",
        "ADNOC Tejari vendor portal",
        "ENOC vendor portal",
        "Etisalat Digital / du UAE Cloud hosting",
        "UAE Customs (Federal Customs Authority) HS-code import API",
        "FTA e-invoicing portal",
        "Maximo at ADNOC Refining Ruwais",
        "EIAC / ENAS / DAC accreditation registry",
        "FANR radiography licensing portal",
        "JAFZA / DAFZA / Hamriyah Free Zone authority systems",
      ]}
      faqs={[
        { question: "Does the inventory module support multi-warehouse logistics across the UAE?", answer: "Yes. Unlimited warehouses with intra-UAE transfer workflows, partial-receipt and partial-issue handling, and FIFO/LIFO/lot/serial costing methods. Pre-loaded warehouse templates cover Abu Dhabi (Mussafah, ICAD, KIZAD), Dubai (JAFZA, DIP, DSO), Sharjah (Hamriyah, SAIF Zone), Ras Al Khaimah (RAK Maritime City) and Fujairah." },
        { question: "Is the data hosted inside the UAE?", answer: "Yes. By default the platform hosts on AWS Middle East (UAE) in Abu Dhabi. For NESA IA Standards compliance, in-country hosting is available via Etisalat Digital or du UAE Cloud — both TDRA-licensed providers." },
        { question: "Does the module handle FTA e-invoicing?", answer: "Yes. The UAE FTA e-invoicing mandate (rolling 2026-2027 implementation) is supported via the PEPPOL-aligned UBL XML invoice generator, ready for FTA platform integration when the technical standard finalises." },
        { question: "What is the AED pricing?", answer: "Flat AED 66,000 per year at the prevailing USD = 3.6725 AED pegged rate. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services are typically quoted AED 75,000-220,000 depending on scope." },
        { question: "Does the system track radioactive sources under FANR?", answer: "Yes. Ir-192 / Se-75 / Co-60 sources are tracked with FANR-aligned chain-of-custody from import through disposal, half-life-driven decay calculations, shielding/transport-container assignments, and wipe-test results logged per source per period." },
        { question: "Can the system handle free-zone bonded-warehouse workflows?", answer: "Yes. JAFZA (Jebel Ali Free Zone), DAFZA (Dubai Airport Free Zone), Hamriyah Free Zone, KIZAD, RAK Maritime City and other free-zone bonded-warehouse workflows are pre-built with re-export to GCC / Iraq / Iran / India markets supported." },
        { question: "Does the inventory module support UAE Customs HS-code data?", answer: "Yes. Federal Customs Authority HS-code import data integrates with internal inventory receipts so material imported through Jebel Ali Port, Khalifa Port, Port Rashid or Sharjah Khorfakkan Port is automatically reconciled against PO and customs-clearance documentation." },
        { question: "Can the system integrate with SAP at ADNOC?", answer: "Yes. Bidirectional sync of material master data, stock balances and consumption postings with SAP S/4HANA at ADNOC Onshore, ADNOC Offshore and Borouge via OData / RFC." },
      ]}
    />
  );
}
