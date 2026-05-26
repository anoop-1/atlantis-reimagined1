import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementErpForIndia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management ERP for India"
      slug="inventory-management-erp-for-india"
      appName="Inventory Management"
      industry="India inspection and industrial operations"
      breadcrumbLabel="Inventory Management for India"
      trustBadge="PESO / AERB / BIS / GST e-invoice ready"
      metaDescription="Atlantis NDT ERP Inventory Management for India — multi-warehouse IOCL/HPCL/BPCL/Reliance-aligned stock, AERB radioactive-source tracking, GST e-invoice IRN, bilingual English/Hindi. Flat regional pricing."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for India — multi-warehouse stock control across IOCL / HPCL / BPCL / Reliance / Nayara / ONGC-aligned consumables, AERB radioactive-source chain-of-custody, GST e-invoice IRN, bilingual English/Hindi UI, and NABL-aligned ISO 17025 calibration lot management. Flat ₹15,00,000 / $18,000 per year."
      whatItIs={[
        "Inventory Management ERP for India tracks consumables, capital equipment, calibrated instruments, radiation sources and PPE across multiple warehouses with IOCL / HPCL / BPCL / Reliance / Nayara / ONGC lot-traceability requirements. Every UT couplant batch, MT dry-magnetic-particle lot, PT spray-can batch, Ir-192/Se-75/Co-60 radioactive source, and radiographic-film lot is tracked with full chain-of-custody from receipt through consumption.",
        "OISD-141 / OISD-145 Material Compliance is baked into the SKU master — NACE MR0175 sour-service grades, opportunistic-crude TAN-resistant materials for Reliance Jamnagar service, and cryogenic 9% Ni materials for Petronet LNG Dahej / Kochi service are flagged at the part-number level. GST e-invoice IRN (Invoice Reference Number) integration is via the NIC IRP (Invoice Registration Portal) official API. Multi-warehouse routing covers Mumbai / Vadodara / Surat / Chennai / Hyderabad / Vizag / Kolkata / Delhi-NCR logistics flows with ICEGATE customs data integration.",
      ]}
      useCases={[
        { useCase: "IOCL/HPCL/BPCL multi-refinery contractor", body: "A Mumbai contractor (50 techs) tracks consumables across Mumbai HQ, Vadodara site, Mathura FIFO base and Visakh remote camp — eliminated ₹85 lakh of stock-out-driven mobilization delays in year one." },
        { useCase: "Reliance Jamnagar mega-turnaround vendor", body: "A Jamnagar contractor (60 techs) tags every consumable lot to Reliance Phase I / Phase II asset with TAN opportunity-crude-aware material flagging — passed Reliance Q/A audit with zero MoC findings across two consecutive turnaround windows." },
        { useCase: "Bangalore aerospace HAL/GE/PW supplier", body: "A Bangalore aerospace contractor (35 techs) manages NAS 410 / NADCAP-aware consumables with per-aircraft serial-number traceability — cleared two consecutive customer audits with zero material-traceability findings." },
        { useCase: "Kolkata SAIL multi-plant consumables", body: "A Kolkata contractor (28 techs) tracks consumables across SAIL Durgapur / Burnpur / Bokaro / Rourkela plant inspection sites with state-specific factory-act-aligned documentation." },
      ]}
      keyFeatures={[
        "Multi-warehouse stock control (Mum/Vad/Surat/Chen/Hyd/Vizag/Kol/Delhi)",
        "IOCL / HPCL / BPCL / Reliance / Nayara / ONGC lot-traceability",
        "OISD-141 / OISD-145 Material Compliance NACE MR0175 tagging",
        "UT couplant / MT dry-particle / PT spray batch tracking",
        "Ir-192 / Se-75 / Co-60 radioactive-source AERB chain-of-custody",
        "Radiographic-film lot tracking and shelf-life alerts",
        "GST e-invoice IRN integration with NIC IRP",
        "ICEGATE customs HS-code import data integration",
        "Bilingual English/Hindi UI plus state-language PDF",
        "INR-denominated default with USD secondary",
        "Equipment calibration tracking aligned with NABL ISO 17025",
        "TDS / TCS / PF / ESI compliance for procurement workflows",
        "Min/Max replenishment per warehouse with auto-PO generation",
        "State PCB (Pollution Control Board) hazardous-waste tracking",
      ]}
      integrations={[
        "SAP S/4HANA at IOCL / HPCL / BPCL / Reliance",
        "IOCL / HPCL / BPCL e-Procurement portal",
        "Reliance Industries / Nayara Energy vendor portal",
        "ONGC / GAIL / MRPL vendor portals",
        "GST e-invoice IRN portal (NIC IRP)",
        "ICEGATE customs HS-code import API",
        "PESO Form XVI/XIV statutory portal",
        "AERB radiography licensing portal",
        "NABL accreditation registry",
        "Maximo at IOCL / Reliance / Tata Steel",
      ]}
      faqs={[
        { question: "Does the inventory module support multi-warehouse logistics across India?", answer: "Yes. Unlimited warehouses with intra-India transfer workflows, partial-receipt and partial-issue handling, and FIFO/LIFO/lot/serial costing methods. Pre-loaded warehouse templates cover Mumbai, Vadodara, Surat, Chennai, Hyderabad, Visakhapatnam, Kolkata, Delhi-NCR, and most refinery-proximate FIFO bases." },
        { question: "Is the data hosted inside India?", answer: "Yes. By default the platform hosts on AWS Asia-Pacific (Mumbai) for MeitY data-residency compliance. For SEBI/IRDAI/RBI sector-specific data residency, in-country hosting is available via NIC, CDAC or AWS Local Zones in Hyderabad / Bangalore / Chennai." },
        { question: "Does the module handle GST e-invoice IRN?", answer: "Yes. The GST e-invoice IRN mandate applies to all businesses with turnover above ₹5 crore since August 2023. Atlantis NDT ERP generates JSON-format e-invoices and integrates with the NIC IRP via the official API, returning IRN and QR code automatically." },
        { question: "What is the INR pricing?", answer: "Flat ₹15,00,000 per year at the prevailing USD = 83 INR exchange rate. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services are typically quoted ₹4-15 lakh depending on scope." },
        { question: "Does the system track radioactive sources under AERB?", answer: "Yes. Ir-192 / Se-75 / Co-60 sources are tracked with AERB-aligned chain-of-custody from import through disposal, half-life-driven decay calculations, shielding/transport-container assignments, and wipe-test results logged per source per period." },
        { question: "Can the system tag NACE MR0175 sour-service material?", answer: "Yes. Every SKU can be flagged as NACE MR0175 / ISO 15156-compliant at the carbon-steel, duplex stainless, low-alloy or nickel-alloy material level. The system prevents accidental issue of non-MR0175 material to ONGC offshore sour-service or HPCL/BPCL refinery sour-service work orders." },
        { question: "Does the inventory module support ICEGATE customs data?", answer: "Yes. ICEGATE customs HS-code import data integrates with internal inventory receipts so material imported through JNPT, Chennai Port, Mundra, Krishnapatnam or Cochin Port is automatically reconciled against PO and bill-of-entry documentation." },
        { question: "Can the system integrate with SAP at IOCL / Reliance?", answer: "Yes. Bidirectional sync of material master data, stock balances and consumption postings with SAP S/4HANA at IOCL, HPCL, BPCL, Reliance Industries, ONGC and Tata Steel via OData / RFC." },
      ]}
    />
  );
}
