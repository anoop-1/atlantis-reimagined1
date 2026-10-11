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
      countrySlug="india"
      countryLabel="India"
      metaDescription="Atlantis NDT ERP Inventory Management for India — multi-warehouse IOCL/HPCL/BPCL/Reliance-aligned stock, AERB radioactive-source tracking, GST e-invoice IRN, bilingual English/Hindi. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for India — multi-warehouse stock control across IOCL / HPCL / BPCL / Reliance / Nayara / ONGC-aligned consumables, AERB radioactive-source chain-of-custody, GST e-invoice IRN, bilingual English/Hindi UI, and NABL-aligned ISO 17025 calibration lot management. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Inventory Management ERP for India tracks consumables, capital equipment, calibrated instruments, radiation sources and PPE across multiple warehouses with IOCL / HPCL / BPCL / Reliance / Nayara / ONGC lot-traceability requirements. Every UT couplant batch, MT dry-magnetic-particle lot, PT spray-can batch, Ir-192/Se-75/Co-60 radioactive source, and radiographic-film lot is tracked with full chain-of-custody from receipt through consumption.",
      ]}
      useCases={[
        { useCase: "IOCL/HPCL/BPCL multi-refinery contractor", body: "Example: a Mumbai contractor tracks consumables across Mumbai HQ, Vadodara site, Mathura FIFO base and Visakh remote camp." },
        { useCase: "Reliance Jamnagar mega-turnaround vendor", body: "Example: a Jamnagar contractor tags every consumable lot to Reliance Phase I / Phase II asset with TAN opportunity-crude-aware material flagging." },
        { useCase: "Bangalore aerospace HAL/GE/PW supplier", body: "Example: a Bangalore aerospace contractor manages NAS 410 / NADCAP-aware consumables with per-aircraft serial-number traceability." },
        { useCase: "Kolkata SAIL multi-plant consumables", body: "Example: a Kolkata contractor tracks consumables across SAIL Durgapur / Burnpur / Bokaro / Rourkela plant inspection sites with state-specific factory-act-aligned documentation." },
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
        "IOCL / HPCL / BPCL e-Procurement portal",
        "Reliance Industries / Nayara Energy vendor portal",
        "ONGC / GAIL / MRPL vendor portals",
        "GST e-invoice IRN portal (NIC IRP)",
        "ICEGATE customs HS-code import API",
        "PESO Form XVI/XIV statutory portal",
        "AERB radiography licensing portal",
        "NABL accreditation registry",
      ]}
      faqs={[
        { question: "Does the inventory module support multi-warehouse logistics across India?", answer: "Yes. Unlimited warehouses with intra-India transfer workflows, partial-receipt and partial-issue handling, and FIFO/LIFO/lot/serial costing methods." },
        { question: "Is the data hosted inside India?", answer: "Yes. By default the platform hosts on AWS Asia-Pacific (Mumbai) for MeitY data-residency compliance." },
        { question: "Does the module handle GST e-invoice IRN?", answer: "Yes. The GST e-invoice IRN mandate applies to all businesses with turnover above ₹5 crore since August 2023." },
        { question: "What does the ERP cost?", answer: "Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com. The platform is affordable, transparent SaaS that includes hosting, all 28 business apps, mobile apps, training and support. Implementation services are quoted based on scope." },
        { question: "Does the system track radioactive sources under AERB?", answer: "Yes. Ir-192 / Se-75 / Co-60 sources are tracked with AERB-aligned chain-of-custody from import through disposal, half-life-driven decay calculations, shielding/transport-container assignments, and wipe-test results logged per source per period." },
        { question: "Can the system tag NACE MR0175 sour-service material?", answer: "Yes. Every SKU can be flagged as NACE MR0175 / ISO 15156-compliant at the carbon-steel, duplex stainless, low-alloy or nickel-alloy material level. The system prevents accidental issue of non-MR0175 material to ONGC offshore sour-service or HPCL/BPCL refinery sour-service work orders." },
        { question: "Does the inventory module support ICEGATE customs data?", answer: "Yes. ICEGATE customs HS-code import data integrates with internal inventory receipts so material imported through JNPT, Chennai Port, Mundra, Krishnapatnam or Cochin Port is automatically reconciled against PO and bill-of-entry documentation." },
              ]}
    />
  );
}
