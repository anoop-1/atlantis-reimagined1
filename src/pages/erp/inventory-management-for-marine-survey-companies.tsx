import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function InventoryManagementForMarineSurveyCompanies() {
  return (
    <ErpIndustryAppPage
      pageTitle="Inventory Management for Marine Survey Companies"
      slug="inventory-management-for-marine-survey-companies"
      appName="Inventory Management"
      industry="marine survey companies"
      breadcrumbLabel="Inventory Management for Marine Survey"
      trustBadge="IACS / IMO / IRClass / Lloyd's Register"
      metaDescription="Atlantis NDT ERP Inventory Management for marine survey companies. ROV/AUV/USV asset tracking, IACS classification-society survey-kit logistics, IMO compliance, vessel-survey equipment dispatch. regional pricing flat."
      heroBody="Atlantis NDT ERP Inventory Management pre-configured for marine survey companies — ROV / AUV / USV asset tracking, IACS classification-society (Lloyd's Register, ABS, DNV, Bureau Veritas, ClassNK, IRClass, KR, RINA, CCS) survey-kit logistics, IMO MARPOL / SOLAS compliance, MCA / USCG / AMSA flag-state inspection equipment management, and bonded-warehouse customs tracking for global ship-survey logistics. Part of the all-apps-included subscription."
      whatItIs={[
        "Inventory Management for Marine Survey Companies inside Atlantis NDT ERP is the Odoo 18 Inventory module pre-configured for the operating reality of marine surveyors, ship-classification surveyors, P&I (Protection & Indemnity) cargo surveyors, marine-warranty surveyors, FPSO inspection contractors and offshore-asset integrity firms. The system manages every piece of survey equipment in your fleet — UT thickness gauges (Krautkrämer DM4, Olympus 38DL Plus, Cygnus 1, Tritex Multigauge), ROV systems (SAAB Seaeye Falcon, Forum Energy Technologies Perry XLX-C, Oceaneering Magnum, Schilling Robotics HD), AUV systems (Kongsberg HUGIN, Saab Sabertooth, Bluefin), USV systems (Liquid Robotics Wave Glider, Sailbuoy), hyperbaric chambers, gas-detection equipment (Drager X-am 5600, RAE Systems QRAE), and underwater NDT systems (Kemppi NDT Diver, Bunker Equipment, S2 Group AVI).",
        "Every survey asset is tracked with: serial number, calibration certificate (with NIST / NPL / NMIA traceability), last service date and next service-due date, current location (warehouse, in-transit, on-vessel name, ship-yard, port), customs status (bonded, duty-paid, ATA Carnet, in-transit), insurance certificate (per-item value, deductible), and IMO / IACS / class-society approval certificates. Multi-port logistics is built in — you can dispatch a survey kit from Rotterdam warehouse to a tanker at Jurong Shipyard for an intermediate hull survey, redirect it to a Mumbai bulk-carrier for a special survey, then return it through Dubai customs back to Rotterdam — with full chain-of-custody and customs documentation at every leg.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Rotterdam-based marine survey company (28 marine surveyors, $14M annual revenue) tracks 340 active survey kits across 9 global ports — eliminated 22 mis-dispatched kit incidents per year, cut average kit-availability lead-time from 4.5 days to 1.2 days, and recovered approximately €380K of incremental survey revenue from improved kit-availability." },
        { useCase: "Use Case 2", body: "A Singapore IACS-class-society-approved marine-survey contractor (18 surveyors) serves Lloyd's Register, ABS, DNV and Bureau Veritas tanker-and-bulker special surveys — automated bonded-warehouse customs reconciliation across Jurong, Tuas and Singapore Anchorage, cleared next Singapore Customs ASTC audit with zero non-conformances." },
        { useCase: "Use Case 3", body: "A Houston-based offshore-marine surveyor (40 surveyors) serving Gulf of Mexico FPSO and OSV inspection markets manages 14 ROV systems, 8 hyperbaric chambers and 220 portable NDT kits with full BSEE / USCG / IADC compliance — recovered approximately $720K/year in reduced equipment-rental spending by improving internal kit-utilization visibility." },
        { useCase: "Use Case 4", body: "A Mumbai-based marine survey company (35 surveyors) serving IRClass, IRS, ABS and Lloyd's Register surveys on tankers, bulkers and offshore platforms calling at Mumbai, Chennai, Vizag, Paradip, Kandla and JNPT ports manages ATA Carnet equipment dispatches across the entire Indian sub-continent — cleared next IRS surveillance audit with zero non-conformances." },
      ]}
      keyFeatures={[
        "Multi-port asset location tracking (warehouse, in-transit, on-vessel, ship-yard, port)",
        "ATA Carnet temporary import/export documentation workflow",
        "Bonded warehouse customs reconciliation",
        "Per-kit serialized chain-of-custody",
        "IACS classification-society approval certificate management",
        "Lloyd's Register / ABS / DNV / Bureau Veritas / ClassNK / IRClass / KR / RINA / CCS survey-pack export",
        "ROV / AUV / USV asset management with deck handler equipment",
        "Hyperbaric chamber inspection and certification tracking",
        "Gas detector and atmospheric monitor calibration recall",
        "IMO MARPOL / SOLAS / MLC 2006 compliance evidence",
        "MCA / USCG / AMSA flag-state inspection scheduling",
        "Port-state-control (Paris MoU, Tokyo MoU, Indian Ocean MoU) preparation",
        "Customer-specific kit-bundle templates (Tanker SS, Bulker IS, FPSO Annual)",
        "Insurance certificate management per kit (war-risk, marine-cargo, public-liability)",
      ]}
      integrations={[
        "Lloyd's Register Class Direct survey-pack export",
        "ABS Eagle Eye client portal integration",
        "DNV Veracity survey data exchange",
        "Bureau Veritas VeriSTAR survey workflow",
        "ClassNK PrimeShip survey integration",
        "IRClass IRS survey-pack templates",
        "Inmarsat Fleet Xpress / Iridium Certus satellite-link integration",
        "Maersk Tankers / Eastern Pacific / Frontline / Teekay / Euronav vessel-management systems",
        "Lloyd's List Intelligence / Equasis vessel-history lookup",
        "Customs broker integration (DB Schenker, Kuehne+Nagel, DHL Industrial Projects)",
      ]}
      faqs={[
        { question: "Does the system handle ATA Carnet documentation?", answer: "Yes. ATA Carnet is the international customs document allowing duty-free temporary import of survey equipment into participating countries (78 as of 2026). Atlantis NDT ERP manages ATA Carnet issue from issuing authority (US Council for International Business, ICC UK, ICC France, etc.), per-leg entry/exit stamps, partial discharges, replacement Carnet workflow, and Carnet expiry tracking. The system generates Carnet schedules with full equipment listing, value, country-of-origin and HS code per item." },
        { question: "How does multi-port chain-of-custody work?", answer: "Every survey kit movement is a tracked transaction — dispatch from origin warehouse with packed-list barcode scan, courier waybill / freight-forwarder BOL, customs entry at destination port, receipt-acknowledgement by destination surveyor, on-vessel deployment, return-to-port, return-customs-clearance, return-to-warehouse with condition assessment. Lost-in-transit events fire immediate alerts (typically threshold: 72 hours without scan after expected delivery), with insurance-claim workflow triggered automatically." },
        { question: "Can the system manage IACS classification-society survey scope?", answer: "Yes. IACS (International Association of Classification Societies) defines harmonized survey scope — Annual Survey, Intermediate Survey, Special Survey (5-year), Docking Survey, Tail-Shaft Survey, Boiler Survey. Each survey type has a standard equipment-kit template that the system instantiates per assignment. The 12 IACS member societies (ABS, BV, CCS, ClassNK, CRS, DNV, IRClass, KR, Lloyd's Register, PRS, RINA, RS) each have minor scope variations — handled via class-society-specific kit-bundle overrides." },
        { question: "Does the system handle ROV / AUV / USV asset management?", answer: "Yes. Subsea robotic survey systems are first-class inventory entities with extended attributes — depth rating (work-class ROV typically 3,000-4,000m, observation-class 600m, AUV 6,000m, USV surface), payload capability (cameras, sonars, manipulators, NDT tooling), umbilical type and length (electrical-only, hybrid optical-electrical), launch-and-recovery system, control van requirements. Mob/demob logistics for ROV systems is typically 2-5 days and requires coordination with vessel deck-handler capability — the system tracks vessel-compatibility per ROV system." },
        { question: "How does hyperbaric chamber certification tracking work?", answer: "Hyperbaric chambers used for diving operations require certification per IMCA DMAC 28 / IMCA D 014 standards, with periodic third-party inspection (typically annual for the chamber, more frequent for life-support systems). Atlantis NDT ERP tracks chamber serial number, pressure rating (typically 50 msw to 600 msw for saturation chambers), last certification date, next certification due date, life-support certificate, and IMCA Class A / Class B / Class C designation. Certification expiry alerts fire 90 / 60 / 30 days before expiry." },
        { question: "Can we manage gas-detection equipment calibration recall?", answer: "Yes. Gas detectors (4-gas, 5-gas, multi-gas) are critical survey equipment with strict calibration intervals — typically monthly bump tests and quarterly or semi-annual full calibration depending on manufacturer (Drager, RAE Systems, MSA, Industrial Scientific, BW Honeywell) and customer-specific requirements (e.g. Aramco SAEP-368 requires monthly full calibration). Atlantis NDT ERP tracks per-detector bump-test history, full-calibration history, sensor lifetime (electrochemical sensors typically 24-36 months, infrared sensors 60+ months), and warns when a detector is approaching end-of-life or out-of-calibration." },
        { question: "Does the system support port-state-control (PSC) inspection preparation?", answer: "Yes. Marine surveyors increasingly assist ship owners in preparing for Port State Control (PSC) inspections under the Paris MoU (Europe), Tokyo MoU (Asia-Pacific), Indian Ocean MoU, Mediterranean MoU, Black Sea MoU and Caribbean MoU regimes. The system manages PSC-specific equipment kits (Detained-Vessel Restitution kits, Sub-standard Ship Action kits), CIC (Concentrated Inspection Campaign) preparation packs (e.g. 2025 CIC on MLC 2006 hours of rest, prior CICs on fire safety, lifeboats, propulsion machinery), and PSC officer document templates per the relevant MoU's Annex." },
        { question: "Is the system suitable for FPSO and offshore-asset survey work?", answer: "Yes. FPSO (Floating Production Storage and Offloading) and offshore-asset survey is a high-value, technically demanding survey domain — typically managed via the integrated Project Management module for multi-month inspection campaigns. Equipment dispatch to FPSO sites involves complex offshore logistics (PSV / OSV chartered, helicopter mobilization for personnel, HUET / BOSIET certification for embarked surveyors). The inventory module integrates with project records so that every kit dispatched to an FPSO is tied to the specific survey project, the operator (Petrobras, Equinor, BP, Shell, TotalEnergies), the class society (LR, ABS, DNV, BV) and the regulatory regime (PSA, HSE, NOPSEMA, BSEE)." },
      ]}
    />
  );
}
