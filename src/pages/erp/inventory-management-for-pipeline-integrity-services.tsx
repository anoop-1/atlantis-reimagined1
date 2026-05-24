import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementForPipelineIntegrityServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management for Pipeline Integrity Services"
      slug="inventory-management-for-pipeline-integrity-services"
      appName="Inventory Management"
      industry="pipeline integrity services"
      breadcrumbLabel="Inventory for Pipeline Integrity"
      trustBadge="PHMSA / API 1163 / NACE ready"
      metaDescription="Atlantis NDT ERP Inventory Management for pipeline integrity firms — ILI tool consumables, NACE-grade coatings, MIC coupon kits, AUT scanner spares, pipe-grade material traceability. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Inventory Management built for pipeline integrity contractors — ILI tool consumables (sensor wheels, batteries, MFL magnet packs), NACE-grade coupons and probes, AUT scanner spares, in-the-ditch NDT consumables (couplant, PT/MT chemistry, calibration blocks), pipe-grade material traceability and bond-wire / cathodic-protection consumables. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Inventory Management for Pipeline Integrity Services inside Atlantis NDT ERP is the Odoo 18 Inventory + Purchase + Quality module configured for the consumable-heavy fleet of pipeline integrity work — ILI smart-pig consumable parts (sensor wheels per OEM, drive cups, brushes, battery packs, encoder wheels, MFL magnet assemblies, UT transducer crystals), AUT scanner consumables (encoder ribbons, water-column membranes, magnetic wheels, calibration blocks), NACE corrosion-coupon kits (CO2, H2S, sour-service variants), bond-wire and cathodic-protection consumables (sacrificial anodes — Mg/Zn/Al, impressed current rectifiers, reference electrodes — Cu/CuSO4, Ag/AgCl), and the field-NDT consumable set (couplant, PT penetrant / cleaner / developer, MT wet-fluorescent particles).",
        "Material traceability is API 5L grade-aware — when you receive line pipe samples or replacement spools, the system tracks API 5L grade (B, X42, X52, X60, X65, X70, X80, X100), heat number, melt source, mill certificate (3.1 / 3.2 EN 10204), Charpy V-notch test results, hydrostatic test results, and the chain-of-custody from mill through pipeline. NACE MR0175 / ISO 15156 sour-service material certification is preserved per heat with documented sulfur content and HIC / SSC test data.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston pipeline integrity firm (70 staff) eliminated stale ILI consumable inventory worth USD 280k by switching to demand-driven AUT-scanner-membrane reorder triggered by scanner-deployment count." },
        { useCase: "Use Case 2", body: "A Calgary CER-regulated contractor (40 staff) tracking NACE coupon kits by exposure-cycle reduced expired-coupon scrap from 18% to under 2%." },
        { useCase: "Use Case 3", body: "A Mumbai pipeline integrity contractor (35 staff) servicing GAIL India and IOCL pipelines tracks API 5L pipe-grade traceability through repair-spool replacement campaigns — cleared OISD-141 surveillance audit with zero material-traceability findings." },
        { useCase: "Use Case 4", body: "A Lagos integrity contractor (25 staff) supporting NLNG Bonny Island tracks corrosion-coupon kits, cathodic-protection consumables and field-NDT consumables — eliminated 9 mobilization aborts caused by stale consumables in 12 months." },
      ]}
      keyFeatures={[
        "ILI smart-pig consumable register per tool-OEM (Rosen, NDT Global, GE PII, TDW, Baker Hughes)",
        "AUT scanner consumable lifecycle tracking (encoder, membranes, magnetic wheels)",
        "NACE corrosion-coupon kit lifecycle (exposure-cycle aware reorder triggers)",
        "Cathodic-protection consumable register (Mg/Zn/Al anodes, Cu/CuSO4 reference cells)",
        "Field-NDT consumable lifecycle (couplant, PT/MT chemistry, calibration blocks)",
        "API 5L grade traceability (B, X42, X52, X60, X65, X70, X80, X100)",
        "Heat number / melt source / mill certificate (EN 10204 3.1 / 3.2) attached per spool",
        "NACE MR0175 / ISO 15156 sour-service material certification per heat",
        "Charpy V-notch / hydrostatic test data per spool",
        "Shelf-life management (PT penetrant 24-month, MT particles 36-month, batteries 24-month)",
        "Lot-and-batch traceability through every deployment",
        "Vendor-managed inventory (VMI) integration with major NDE suppliers",
        "Mobile app for field-crew consumable receipt / consumption capture",
      ]}
      integrations={[
        "Olympus dealer-portal consumable reorder integration",
        "Magnaflux distributor-portal MT consumable reorder",
        "Met-L-Chek distributor-portal PT consumable reorder",
        "Sonatech / Sonotech UT-couplant reorder portals",
        "M.G. Newell NACE coupon distributor portal",
        "Sentry Equipment NACE coupon program integration",
        "Anode-distributor portal integration (Galvotec, M.C. Miller, Farwest)",
        "Pipe-mill EN 10204 certificate ingest (Tata Steel, Tenaris, Vallourec, JFE, Nippon Steel)",
        "PHMSA NPMS material-traceability evidence",
        "API 1163 conformity-assessment evidence pack",
      ]}
      faqs={[
        { question: "Does the inventory module track ILI smart-pig consumables?", answer: "Yes. Every ILI tool consumable — sensor wheels, drive cups, brushes, battery packs, encoder wheels, MFL magnet assemblies, UT transducer crystals — is tracked per OEM (Rosen, NDT Global, GE PII, T.D. Williamson, Baker Hughes) and per tool size (4-inch, 6-inch, 8-inch, 10-inch, 12-inch, 16-inch, 20-inch, 24-inch, 30-inch, 36-inch, 42-inch, 48-inch). Reorder triggers are deployment-count driven rather than fixed-interval driven so consumable stock levels match actual tool run frequency." },
        { question: "How does the system handle API 5L material traceability?", answer: "Pipe-grade material traceability is API 5L-aware — every spool, fitting or component carries the API 5L grade (B, X42, X52, X60, X65, X70, X80, X100), heat number, melt source, mill EN 10204 3.1 or 3.2 certificate, manufacturing process (seamless / ERW / SAW longitudinal / SAW helical), Charpy V-notch impact toughness test results, hydrostatic test pressure and duration, and NDE method records (UT, RT, MT, PT on welds). Heat-by-heat traceability flows through repair-spool installation into the customer pipeline." },
        { question: "Can the system handle NACE MR0175 / ISO 15156 sour-service certification?", answer: "Yes. NACE MR0175 / ISO 15156 sour-service certification — required for components exposed to H2S environments — is tracked per heat with documented sulfur content, hardness (typically HRC 22 max for carbon steel), HIC (Hydrogen Induced Cracking) test results per NACE TM0284, SSC (Sulfide Stress Cracking) test results per NACE TM0177, and the material's environmental severity Region per ISO 15156-1 figure." },
        { question: "Does the system support shelf-life management?", answer: "Yes. Shelf-life management applies to NDE consumables (PT penetrant 24-month, MT wet particles 36-month typical, batteries 24-month, calibration block reflectivity 36-month), corrosion-monitoring consumables (NACE coupon kits, MIC coupons), and cathodic-protection consumables (sacrificial anode shelf-life, reference electrode hydration). FIFO consumption is enforced; products approaching expiry trigger 90/60/30-day alerts." },
        { question: "Can the system integrate with vendor-managed inventory (VMI)?", answer: "Yes. Major NDE distributors offer VMI programs where the distributor monitors customer stock levels and replenishes against agreed targets. The inventory module exposes real-time consumption data via API to authorized distributor VMI systems so replenishment happens before stockouts — particularly valuable for field-NDT consumables (couplant, MT particles, PT chemistry) where stockout causes mobilization abort." },
        { question: "How does the system handle cathodic-protection consumables?", answer: "Cathodic-protection consumables — sacrificial anodes (Mg high-potential, Mg ribbon, Zn ASTM B418 Type II, Al-Zn-In ALZAK), impressed-current rectifiers (Universal Rectifiers, Cathodic Protection Inc, Stuart Steel Protection), reference electrodes (Cu/CuSO4 saturated, Ag/AgCl saturated KCl, Zn/seawater), bond-wires, casing isolators — are tracked per CP-system project with installation records, post-installation test data, and replacement-cycle scheduling." },
        { question: "Does the system support API 1163 ILI conformity evidence?", answer: "Yes. API 1163 (In-Line Inspection Systems Qualification) Level 1, 2 and 3 conformity-assessment evidence — including ILI tool qualification reports, calibration-loop performance, post-run signoff, and field-validation dig verification — is structured into the inventory record. Customer audits can produce an API 1163 conformity evidence pack as a single ZIP export." },
        { question: "Can the system track repair-spool replacement campaigns?", answer: "Yes. Repair-spool campaigns — common after ILI runs identify class-3 or class-4 anomalies requiring metal-loss cut-out — are tracked from pipe-mill EN 10204 certificate through cut-out / dig / welder / WPS / inspection / hydro-test / commissioning. The end-to-end material-traceability evidence assembles in under 30 seconds per repair spool, satisfying customer integrity-management audit expectations." },
      ]}
    />
  );
}
