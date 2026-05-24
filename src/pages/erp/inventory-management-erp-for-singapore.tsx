import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementErpForSingapore() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management ERP for Singapore"
      slug="inventory-management-erp-for-singapore"
      appName="Inventory Management"
      industry="Singapore inspection and industrial operations"
      breadcrumbLabel="Inventory Management for Singapore"
      trustBadge="MOM / NEA / SAC-SINGLAS / InvoiceNow ready"
      metaDescription="Atlantis NDT ERP Inventory Management for Singapore — multi-warehouse Jurong Island-aligned stock control, NEA radioactive-source tracking, InvoiceNow PEPPOL e-invoicing. Flat $18,000/yr (S$24,300)."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for Singapore — multi-warehouse stock control across ExxonMobil / Shell / PCS / Sembcorp / ST Engineering-aligned consumables, NEA RPNS radioactive-source chain-of-custody, InvoiceNow PEPPOL e-invoicing, and SAC-SINGLAS-aligned ISO 17025 calibration lot management. Flat S$24,300 / $18,000 per year."
      whatItIs={[
        "Inventory Management ERP for Singapore tracks consumables, capital equipment, calibrated instruments, radiation sources and PPE across multiple warehouses with ExxonMobil / Shell / Singapore Refining Company / PCS / Sembcorp / ST Engineering lot-traceability requirements. Every UT couplant batch, MT dry-magnetic-particle lot, PT spray-can batch, Ir-192/Se-75 radioactive source, and radiographic-film lot is tracked with full chain-of-custody.",
        "Jurong Island operator material-compliance requirements are baked into the SKU master — NACE MR0175 sour-service grades, opportunistic-crude TAN-resistant materials for ExxonMobil and SRC service, FCC catalyst-handling consumables for Shell Bukom, and aerospace-MRO NAS 410-traceable materials for ST Engineering Aerospace, Pratt & Whitney Singapore and Rolls-Royce Seletar. IMDA InvoiceNow PEPPOL e-invoicing is built in. Multi-warehouse routing covers Jurong Island (multiple operator-site warehouses) / Tuas / Sembawang / Changi logistics flows with Singapore Customs TradeNet integration.",
      ]}
      useCases={[
        { useCase: "Jurong Island operator-tenant contractor", body: "A Jurong-Island-access inspection firm (32 techs) tracks consumables across multiple operator-site warehouses (ExxonMobil JIE, Shell Bukom, PCS, SRC) with JTC pass-aware logistics — eliminated 4-6 per-shutdown island-access disputes." },
        { useCase: "Sembcorp/Keppel marine consumables", body: "A Tuas marine-yard contractor (28 techs) tags every consumable lot to IACS classification-society-specific requirements (LR / DNV / ABS / BV / ClassNK) — passed Sembcorp Marine Q/A audit with zero MoC findings." },
        { useCase: "ST Engineering Aerospace MRO supplier", body: "A Changi aerospace contractor (20 techs) manages NAS 410 / EN 4179-aware consumables with per-aircraft serial-number traceability — cleared two consecutive CAAS Part 145 audits with zero findings." },
        { useCase: "Tuas BCA-graded construction-fabrication", body: "A Tuas contractor (24 techs) tracks BCA W01/W02/W04-graded consumables for Singapore construction-fabrication scopes with PUB-Sand permit-aware import documentation." },
      ]}
      keyFeatures={[
        "Multi-warehouse stock control (Jurong Island/Tuas/Sembawang/Changi)",
        "Operator-tenant warehouse routing (ExxonMobil/Shell/PCS/SRC)",
        "Sembcorp / Keppel / ST Engineering lot-traceability",
        "NACE MR0175 / TAN naphthenic-acid material tagging",
        "UT couplant / MT dry-particle / PT spray batch tracking",
        "Ir-192 / Se-75 radioactive-source NEA RPNS chain-of-custody",
        "Radiographic-film lot tracking and shelf-life alerts",
        "IMDA InvoiceNow PEPPOL e-invoicing integration",
        "Singapore Customs TradeNet HS-code import data",
        "English UI with optional Simplified Chinese / Bahasa Melayu / Tamil",
        "S$-denominated default with USD/MYR secondary",
        "Equipment calibration tracking aligned with SAC-SINGLAS ISO 17025",
        "GST 9% compliance with IRAS e-Tax integration",
        "Jurong Island JTC / EMA / NEA / EDB access-permit integration",
      ]}
      integrations={[
        "ExxonMobil Singapore Refining Company SAP PM",
        "Shell Bukom Pulau Ular vendor portal",
        "Sembcorp Industries vendor portal",
        "Keppel Offshore & Marine vendor portal",
        "ST Engineering Aerospace vendor portal",
        "JTC Jurong Island Pass system",
        "Singtel DC / M1 Cloud MTCS-3 hosting",
        "IMDA InvoiceNow PEPPOL e-invoicing",
        "Singapore Customs TradeNet HS-code import API",
        "SAC-SINGLAS accreditation registry",
      ]}
      faqs={[
        { question: "Does the inventory module support multi-warehouse logistics across Singapore?", answer: "Yes. Unlimited warehouses with intra-Singapore transfer workflows, partial-receipt and partial-issue handling, and FIFO/LIFO/lot/serial costing methods. Pre-loaded warehouse templates cover Jurong Island (multiple operator-tenant sub-warehouses), Tuas, Sembawang, Changi, Tampines, and Woodlands Industrial Park." },
        { question: "Is the data hosted inside Singapore?", answer: "Yes. By default the platform hosts on AWS Asia-Pacific (Singapore) ap-southeast-1 for PDPA 2012 compliance. For MTCS Level 3 sovereign-cloud certification, in-country hosting is available via Singtel DC or M1 Cloud." },
        { question: "Does the module handle InvoiceNow PEPPOL e-invoicing?", answer: "Yes. IMDA InvoiceNow PEPPOL e-invoicing has been mandatory for GST-registered businesses since November 2025 Phase 2. Atlantis NDT ERP generates PEPPOL BIS Billing 3.0 UBL XML invoices via PEPPOL Access Points." },
        { question: "What is the S$ pricing?", answer: "Flat S$24,300 per year at the prevailing USD = 1.35 S$ exchange rate. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services are typically quoted S$22,000-65,000 depending on scope." },
        { question: "Does the system track radioactive sources under NEA RPNS?", answer: "Yes. Ir-192 / Se-75 sources are tracked with NEA Radiation Protection and Nuclear Safety-aligned chain-of-custody from import through disposal, half-life-driven decay calculations, shielding/transport-container assignments, and wipe-test results." },
        { question: "Can the system handle Jurong Island access permits?", answer: "Yes. JTC Jurong Island Pass, ExxonMobil JIE access pass, Shell Bukom Pulau Ular gate pass, and individual operator-site permits are tracked per inspector per facility, with auto-alert for access-permit-expiry before mobilization." },
        { question: "Does the inventory module support Singapore Customs TradeNet?", answer: "Yes. Singapore Customs TradeNet HS-code import data integrates with internal inventory receipts so material imported through PSA Singapore, Jurong Port, Pasir Panjang Terminal or Tuas Port is automatically reconciled against PO and customs documentation." },
        { question: "Can the system integrate with SAP at ExxonMobil / Shell?", answer: "Yes. Bidirectional sync of material master data, stock balances and consumption postings with SAP S/4HANA at ExxonMobil Singapore Refining Company, Shell Bukom and Pulau Ular, Singapore Petroleum Company, PCS and Sembcorp Industries via OData / RFC." },
      ]}
    />
  );
}
