import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementForWeldingFabricationShops() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management for Welding & Fabrication Shops"
      slug="inventory-management-for-welding-fabrication-shops"
      appName="Inventory Management"
      industry="welding and fabrication shops"
      breadcrumbLabel="Inventory for Weld Shops"
      trustBadge="AWS / ASME IX / ISO 3834 ready"
      metaDescription="Atlantis NDT ERP Inventory Management for weld and fab shops — AWS A5 consumable lot tracking, ASTM/ASME material heat traceability, low-hydrogen electrode storage, shielding-gas cylinder management. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Inventory Management for AWS / ASME / ISO 3834 weld shops — AWS A5 consumable lot traceability (electrodes, wire, flux), ASTM / ASME II material heat-number traceability, low-hydrogen electrode oven and rebake management, shielding-gas cylinder lifecycle, and the NDE consumable register for radiography film, PT chemistry and MT particles. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Inventory Management for Welding & Fabrication Shops inside Atlantis NDT ERP is the Odoo 18 Inventory + Purchase + Quality module configured for the consumable-heavy weld-shop floor — AWS A5 welding consumables (A5.1 carbon steel SMAW, A5.5 low-alloy SMAW, A5.18 carbon steel GMAW wire, A5.20 carbon steel FCAW wire, A5.22 stainless-steel FCAW, A5.28 low-alloy GMAW, A5.17 SAW flux + wire, A5.23 SAW low-alloy flux + wire, A5.4 stainless SMAW, A5.9 stainless GMAW/GTAW), ASTM / ASME II material heat-number traceability (SA-516 / SA-105 / SA-106 / SA-333 / SA-335 / SA-240 / SA-312 / SA-358 — pressure-vessel steels, low-temperature steels, alloy steels, austenitic stainless steels, duplex stainless steels, nickel alloys), gas-cylinder lifecycle (CGA G-1 inspection, hydro test, valve test).",
        "Low-hydrogen electrode management — critical for AWS D1.1 / ASME Section IX work — is tracked at the rod-oven level with bake-out temperature, exposure-time-from-can, rebake records (typical AWS requirement: 4 hours max exposure for H4 / H8 / H16 designation, rebake at 500-600°F for 1-2 hours), and oven-calibration records (oven thermocouple cal vs reference thermometer). Per-weld traceability ties the finished weld to the specific lot of electrode, wire, flux and gas-mix used.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston structural-fabrication shop (60 welders) cleared an AWS D1.5 bridge-welding audit with zero consumable-traceability findings (baseline: 4 per cycle) after consolidating AWS A5 lot records into the inventory module." },
        { useCase: "Use Case 2", body: "A Hyderabad ASME U-stamp pressure-vessel fabricator (45 welders) cut electrode waste from 18% to 4% via FIFO enforcement and rebake-cycle tracking on E7018-H4 low-hydrogen electrodes." },
        { useCase: "Use Case 3", body: "A Dammam petrochemical fabricator (38 welders) tracks Aramco-specific consumable approvals per heat and cleared SAEP-1112 surveillance with zero material-traceability findings." },
        { useCase: "Use Case 4", body: "A Singapore offshore-module fabricator (50 welders) tracks duplex / super-duplex consumables (UNS S31803, S32750, S32760) by heat with PMI (positive material identification) records — eliminated material-mix-up incidents that previously caused customer rework." },
      ]}
      keyFeatures={[
        "AWS A5 consumable taxonomy with full lot traceability",
        "Electrode heat-number / wire-spool heat-number / flux-lot traceability",
        "Low-hydrogen electrode rod-oven and rebake-cycle tracking",
        "AWS A5 H4 / H8 / H16 hydrogen designation management",
        "ASTM / ASME II material heat-number traceability per plate / pipe / fitting",
        "EN 10204 3.1 / 3.2 mill-test-certificate ingest",
        "Charpy V-notch and tensile data per material heat",
        "PMI (Positive Material Identification) record per heat (XRF gun integration)",
        "Shielding-gas cylinder lifecycle (CGA G-1 inspection, hydro test, valve test)",
        "Mixed-gas cylinder composition verification (Ar/CO2, Ar/He, Ar/O2)",
        "Radiography film inventory (Kodak Industrex, Agfa Structurix shelf-life)",
        "PT chemistry consumable lifecycle (Magnaflux, Met-L-Chek shelf-life)",
        "MT particle consumable lifecycle (wet fluorescent, dry visible, dye)",
      ]}
      integrations={[
        "Lincoln Electric distributor portal (consumable reorder)",
        "ESAB distributor portal (consumable reorder)",
        "Miller / Hobart distributor portal",
        "Air Liquide / Linde / Air Products gas distributor portals",
        "Magnaflux MT/PT consumable distributor",
        "Met-L-Chek PT consumable distributor",
        "Agfa Industrial NDT radiography film distributor",
        "Carestream Industrial radiography film distributor",
        "ArcelorMittal / Tata Steel / Nippon Steel / POSCO mill certificate ingest",
        "Tenaris / Vallourec pipe-mill certificate ingest",
      ]}
      faqs={[
        { question: "Does the inventory module enforce per-weld consumable traceability?", answer: "Yes. Every weld record carries the specific electrode lot number (AWS A5 series), wire spool heat number, flux lot number, and shielding-gas-mix certificate — so an end-to-end audit trail exists from the customer-supplied material spec through the welder's consumable selection to the final weld. This is mandatory under ASME Section IX, AWS D1.1, AWS D1.5, AWS D1.6, and customer-specific weld-traceability programs for nuclear, aerospace and military supply." },
        { question: "How does the module handle low-hydrogen electrode management?", answer: "Low-hydrogen electrodes (AWS A5.1 E7018-H4 / E7018-H8 / E7018-H16, A5.5 E8018-C3 / E9018-G / E10018-G, A5.4 E308L-15 / E316L-15 family) require controlled storage. The system tracks each rod-oven's bake-out temperature (typically 250-300°F holding), exposure-time-from-can (4 hours max for H4 / H8 designation per AWS A5.1), rebake cycles (500-600°F for 1-2 hours), and oven thermocouple calibration. Electrodes exceeding exposure limits without rebake are flagged as scrap." },
        { question: "Can the module track material heat traceability?", answer: "Yes. ASTM / ASME II material heat-number traceability covers every pressure-vessel-grade material — SA-516 / A-516 carbon steel plate, SA-105 / A-105 carbon steel forging, SA-106 / A-106 carbon steel pipe, SA-333 / A-333 low-temperature carbon steel, SA-335 / A-335 alloy steel pipe, SA-240 / A-240 stainless plate, SA-312 / A-312 stainless pipe, SA-358 / A-358 EFW stainless pipe, SA-182 / A-182 forged stainless, SA-213 / A-213 boiler tubing, SA-790 duplex pipe, nickel alloys per SB-series. The system ingests EN 10204 3.1 / 3.2 mill test certificates and links each piece used in fabrication to its heat number." },
        { question: "Does the module support PMI (Positive Material Identification)?", answer: "Yes. PMI — required by API RP 578 / ASME PCC-2 / customer-specific PMI programs — is tracked per material heat. XRF gun results (Thermo Niton, Olympus Vanta, Bruker S1 TITAN, SPECTRO xSORT) ingest directly via mobile-app capture or USB upload, with the elemental composition compared to the heat-certificate target ranges. Out-of-spec PMI alerts trigger material quarantine before the heat goes into production." },
        { question: "How does the module handle shielding-gas cylinders?", answer: "Shielding-gas cylinders are tracked per CGA G-1 cylinder inspection (visual every fill), hydrostatic re-test (5 or 10 year cycles per DOT / TC / EIGA regulations), and valve test. Mixed-gas cylinders (Ar/CO2 in various proportions, Ar/He blends, Ar/O2 for stainless GTAW) are sampled per ASME B31.3 or AWS A5.32 to verify composition before use on Section IX-controlled welds." },
        { question: "Does the module handle radiography film inventory?", answer: "Yes. Radiography film (Kodak Industrex AA400, AA800, MX125; Agfa Structurix D2, D4, D5, D7, D8; Fuji IX 50, IX 80) is tracked per emulsion lot with batch shelf-life (typically 24 months from manufacture under controlled storage), exposure logbook tying each film to a specific weld / source / source-strength / IQI / density per ASTM E747 / ASME Section V Article 2." },
        { question: "Can the platform track consumable approvals per customer?", answer: "Yes. Customer-specific consumable approvals — common for Saudi Aramco (SAEP-1107 approved-consumable list), ADNOC, Petronas (PTS approved consumables), and major EPC contractors — are maintained as customer-policy filters. When a welder selects a consumable in the work-order app, the system filters the available consumables to only those approved for the specific customer and WPS." },
        { question: "How does the module manage NDE consumable shelf-life?", answer: "NDE consumables — PT penetrants (visible / fluorescent, Type I / II per ASME Section V Article 6), MT wet particles (visible / fluorescent), MT dry particles, contrast paint, couplant, calibration blocks — are tracked with shelf-life from manufacture date and reagent-batch certification per ASME Section V Article 6 / ASTM E165 / ASTM E709. Out-of-shelf-life consumables are flagged scrap." },
      ]}
    />
  );
}
