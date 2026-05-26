import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementForEnvironmentalTestingLabs() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management for Environmental Testing Laboratories"
      slug="inventory-management-for-environmental-testing-labs"
      appName="Inventory Management"
      industry="environmental testing labs"
      breadcrumbLabel="Inventory for Env Labs"
      trustBadge="ISO/IEC 17025 / NELAP / DoD ELAP ready"
      metaDescription="Atlantis NDT ERP Inventory Management for environmental labs — EPA SW-846 reagent lot tracking, CRM (Certified Reference Material) expiry, sample-container preservative shelf-life, GC/MS column lifecycle. Flat regional pricing."
      heroBody="Atlantis NDT ERP Inventory Management for ISO/IEC 17025 environmental labs — EPA-method reagent lot tracking (SW-846, EPA 500/600/200 series), CRM expiry alerts under ISO 17034, sample-container and preservative shelf-life, GC/MS column and detector consumable lifecycle, and PFAS-specific consumable lifecycle management. Part of the all-apps-included subscription."
      whatItIs={[
        "Inventory Management for Environmental Testing Labs inside Atlantis NDT ERP is the Odoo 18 Inventory + Purchase + Quality module configured for the reagent-heavy operational reality of accredited environmental labs — every reagent (HPLC-grade solvents, ICP-grade acids, ASTM reagent water Type I/II/III, methanol, dichloromethane, hexane), every CRM (Certified Reference Material under ISO 17034, with certified value, uncertainty, and expiry), every sample container (40 mL VOA vial, 250 mL amber glass, 1 L poly bottle, 4 oz wide-mouth jar, summa canister for air), every preservative (HCl, HNO3, H2SO4, NaOH, sodium thiosulfate, ascorbic acid for chlorine-quench), and every analytical-column / detector consumable.",
        "PFAS-specific consumable management is structured — only PFAS-free Teflon-replacement containers (HDPE, PP, PE), no FEP-lined caps, no LDPE squeeze bottles in PFAS workflow, certified PFAS-free isotope-dilution standards (per EPA 533 / 537.1 / 8327 method-specific isotope-dilution requirements), and isolation of PFAS-workflow consumables from general laboratory inventory to prevent cross-contamination.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A California ELAP-accredited lab (28 chemists) eliminated 14 method-blank-contamination incidents per quarter via consumable-lot tracking that traced contamination to a single bad reagent lot — vs the historical 4-week-to-root-cause baseline." },
        { useCase: "Use Case 2", body: "A Texas TNI-NELAP lab (45 chemists) cut CRM scrap from 22% to 5% by implementing FIFO consumption and 90/60/30 expiry alerts on a 380-CRM inventory." },
        { useCase: "Use Case 3", body: "A New Jersey ELAP lab (22 chemists) tracking PFAS-specific consumables eliminated 6 PFAS cross-contamination incidents in 9 months by isolating PFAS-workflow consumables in the inventory system." },
        { useCase: "Use Case 4", body: "A DoD ELAP lab (18 chemists) tracks DoD-PT-approved CRMs separately from commercial CRMs — automated quarterly DoD QSM v5.4 inventory audit prep from 14 hours to 45 minutes." },
      ]}
      keyFeatures={[
        "EPA method-driven reagent inventory (SW-846, 500/600/200 series, 1600 series, 8270, 8260)",
        "CRM (Certified Reference Material) per ISO 17034 with certified value + uncertainty + expiry",
        "Sample-container inventory (40 mL VOA, 250 mL amber, 1 L poly, summa canister, sorbent tube)",
        "Preservative inventory (HCl, HNO3, H2SO4, NaOH, thiosulfate, ascorbic acid)",
        "PFAS-specific isolated consumable inventory (HDPE/PP only, no FEP, no LDPE squeeze)",
        "GC/MS column lifecycle tracking (DB-624, DB-5MS, DB-1701, Rxi-5Sil MS)",
        "LC/MS column lifecycle (HSS T3, BEH C18, F5, HILIC for PFAS)",
        "ICP-MS skimmer / sample / nebulizer cone lifecycle",
        "Solvent inventory with grade verification (HPLC, GC, pesticide residue, OSHA grade)",
        "Standard mixture (calibration) lifecycle with expiry alerts",
        "Method-blank reagent lot quarantine on contamination detection",
        "DoD QSM v5.4 / v5.3 isotope-dilution-standard tracking",
        "Mobile app for sample receipt / container check-in / preservative verification",
      ]}
      integrations={[
        "Restek consumable distributor portal",
        "Agilent Technologies consumable portal",
        "Waters Corporation consumable portal",
        "Sigma-Aldrich (MilliporeSigma) reagent distributor",
        "Fisher Scientific reagent distributor",
        "VHG Labs CRM distributor portal",
        "Spex CertiPrep CRM distributor portal",
        "Wellington Laboratories PFAS standard distributor",
        "Cambridge Isotope Laboratories isotope-standard distributor",
        "EPA Reference Materials Program portal",
      ]}
      faqs={[
        { question: "Does the inventory module track CRM expiry?", answer: "Yes. Every CRM (Certified Reference Material) is tracked per ISO 17034 with the certified value, expanded uncertainty (k=2 typical), production date, expiry date, certification body (NIST SRM, NRC CRM, ERM, LGC, Sigma-Aldrich CRM, Spex CertiPrep, VHG Labs), storage conditions, and chain-of-custody from receipt. 90/60/30-day expiry alerts trigger reorder; expired CRMs are quarantined automatically and cannot be selected on the bench." },
        { question: "How does the module handle PFAS-specific consumable isolation?", answer: "PFAS workflow has unique consumable constraints — no Teflon (PTFE/PFA/FEP) in contact with sample, no PFAS-coated caps, no LDPE squeeze bottles. The module maintains a separate PFAS-workflow consumable inventory with strict in/out logging, certified PFAS-free isotope-dilution standards (per EPA 533 mass-labeled, EPA 537.1 native + mass-labeled, EPA 8327 isotope-dilution, draft EPA 1633 isotope-dilution), and isolation from general laboratory inventory to prevent cross-contamination. The module enforces that only PFAS-free consumables can be used on PFAS opportunities." },
        { question: "Can the module track sample-container preservative shelf-life?", answer: "Yes. Sample containers — 40 mL VOA vials with PTFE-lined septa (no PFAS-workflow use), 250 mL amber glass, 1 L poly bottles, 4 oz wide-mouth glass jars, summa canisters for air, sorbent tubes (charcoal, Tenax, XAD-2) — and preservatives (HCl pH<2, HNO3 pH<2, H2SO4 pH<2, NaOH pH>12, sodium thiosulfate for chlorine quench, ascorbic acid for chlorine quench in PFAS workflow) are tracked per lot with shelf-life from preservative addition date." },
        { question: "Does the module manage GC/MS column lifecycle?", answer: "Yes. GC/MS columns (DB-624 for VOC, DB-5MS for SVOC, DB-1701 for pesticides, Rxi-5Sil MS for hydrocarbons) and LC/MS columns (HSS T3 for polar VOC, BEH C18 for SVOC, F5 / PFP for fluorinated compounds, HILIC for polar PFAS, Restek Raptor PFAS for EPA 533) are tracked per column serial number, number of injections, current performance (theoretical-plate count, peak symmetry, retention-time drift), and OEM-recommended replacement triggers." },
        { question: "How does the module handle reagent contamination quarantine?", answer: "When a method-blank shows contamination above the reporting limit, the inventory module can quarantine the specific reagent lot used in that batch and propagate the quarantine downstream — every sample analyzed using that lot is flagged for re-analysis, every quality-control sample is re-evaluated, and the corrective-action workflow under ISO/IEC 17025 §7.10 (corrective action) is auto-initiated." },
        { question: "Can the module track DoD QSM-compliant consumables?", answer: "Yes. DoD QSM v5.4 (current 2026) requires specific isotope-dilution standards for SW-846 8270, 8260, 8290 (dioxins) and PFAS methods. The module tracks DoD QSM-approved CRMs separately, with the DoD QSM-specific quality-control criteria attached. Quarterly DoD QSM inventory audit prep — historically a multi-day exercise — assembles in under an hour." },
        { question: "Does the module support sample-container chain-of-custody?", answer: "Yes. Sample containers are tracked from receipt at the laboratory back to the customer's sampling event — each container's lot, the preservative lot, the cooler ice-pack record (continuous-temperature logger if used), the chain-of-custody (CoC) seal verification, and the temperature-at-receipt (<6°C for water, <4°C for soil typical). The full CoC chain assembles in the EDD output that flows to the customer or state regulator." },
        { question: "Can the module integrate with reagent supplier portals?", answer: "Yes. Integration with Restek, Agilent, Waters, Sigma-Aldrich (MilliporeSigma), Fisher Scientific, VHG Labs, Spex CertiPrep, Wellington Laboratories and Cambridge Isotope Laboratories distributor portals enables direct reagent reorder, CoA (Certificate of Analysis) ingest, lot-and-batch traceability, and price-on-demand for high-volume contract laboratories." },
      ]}
    />
  );
}
