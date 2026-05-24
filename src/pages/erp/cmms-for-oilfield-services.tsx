import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForOilfieldServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Oilfield Services Companies"
      slug="cmms-for-oilfield-services"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="oilfield services"
      breadcrumbLabel="CMMS for OFS"
      trustBadge="API Q1 / Q2 / Spec 4F / 7K / 8C ready"
      metaDescription="Atlantis NDT ERP CMMS for oilfield services — API Q1 / API Q2 quality, API Spec 4F (drilling structures), 7K (drilling equipment), 8C (drilling hoisting), 16A (BOP), 16C (choke-and-kill), DS-1 inspection categories. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP CMMS configured for oilfield services contractors — API Q1 / Q2 quality management, API Spec 4F (drilling derrick / mast), 7K (drilling equipment), 8A/8C (drilling hoisting), 16A (BOP stack), 16C (choke and kill), DS-1 inspection categories (cat I/II/III/IV/V), DNV 2.7-1 offshore containers, NACE MR0175/ISO 15156 sour-service materials, and field-NDT instrument calibration for rig-up / rig-down cycles. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "CMMS for Oilfield Services inside Atlantis NDT ERP is the Odoo 18 Maintenance + Equipment module configured for the high-cadence drilling and well-services equipment fleet — drill-string components (drill pipe, drill collars, HWDP, BHA components, tools, jars, MWD/LWD), top drives, rotary tables, mud pumps, blowout preventers (BOPs - annulars, single rams, double rams, shear rams), kill manifolds, choke manifolds, accumulator units, casing-running tools, completion equipment, wireline tools, coiled-tubing units, hydraulic workover snubbing units, cement units, pumping units, and the field-NDT instrument fleet for periodic inspection (Olympus 38DL, Magnaflux yokes, Met-L-Chek PT, EPOCH series UT).",
        "Every oilfield asset carries DS-1 inspection categories (Category I quarterly, II annual, III on-demand, IV every 3 years, V every 5 years), API Spec licensing audit cycles (API Q1 monogram licenses, Spec 4F derrick inspections, Spec 7K/8A drill-string inspections, Spec 16A BOP inspections), and the OEM-recommended overhaul cycles for top drives (Varco TDS-11SA, NOV Ideal, Aker MH, Bentec, Cameron TopDrive), mud pumps (NOV Continental Emsco F-1600, Gardner Denver PZ-11, Bentec K-1100), and BOPs (Cameron, Hydril, Shaffer NOV).",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Midland-based Permian wireline contractor (60 field staff) tracking 240 wireline trucks, MWD tools, perforating guns and slickline units cut equipment-failure-on-location incidents from 14 per quarter to 3 via CMMS-driven preventive maintenance." },
        { useCase: "Use Case 2", body: "A Calgary directional-drilling firm (45 staff) maintains DS-1 inspection records for 380 BHA components across CNRL, Cenovus and Suncor pads — cleared its first IADC HSE Solutions audit with zero findings." },
        { useCase: "Use Case 3", body: "A Houston offshore BOP services provider (35 staff) maintains 6 BOP stacks for GOM clients (Transocean, Diamond, Valaris) — passed API 53 5-year stack-recertification audits on all stacks with zero findings." },
        { useCase: "Use Case 4", body: "An Abu Dhabi-based ADNOC-approved coiled-tubing contractor (28 staff) tracks coiled-tubing string fatigue-life per ICOTA recommended practice — extended average string life by 21% via API 5C7-compliant fatigue tracking." },
      ]}
      keyFeatures={[
        "Drill-string component register (drill pipe by length, OD, wall, grade, connection)",
        "DS-1 inspection categories I-V with auto-scheduled re-inspection intervals",
        "API Spec 4F derrick / substructure inspection scheduling (DS-1 Cat 4 every 3 years)",
        "API Spec 7K / 8A / 8C drilling-equipment inspection scheduling",
        "API Spec 16A BOP inspection (API 53 5-year stack recertification)",
        "API Spec 16C choke-and-kill manifold inspection",
        "Top-drive / mud-pump / rotary-table OEM-recommended overhaul intervals",
        "Wireline / slickline / e-line / coiled-tubing string fatigue tracking",
        "DNV 2.7-1 offshore container periodic-inspection",
        "Wellhead / Christmas tree / valve register with API 6A specifications",
        "NACE MR0175 / ISO 15156 sour-service material certification",
        "Pumping-service iron register (Weco 1502, Halliburton WECO unions, hammer unions)",
        "Mobile app for field-crew capture (offline, attaches geo-tag + photo)",
      ]}
      integrations={[
        "NOV RigSentry / NOV CTES casing-running data",
        "Halliburton InSite drilling-data ingest",
        "Schlumberger DELFI / Studio drilling-data integration",
        "Baker Hughes JewelSuite drilling-data exchange",
        "Weatherford SEKAL / Cerebro drilling data",
        "IADC Daily Drilling Report (DDR) electronic submission",
        "IADC HSE Solutions audit-pack export",
        "Avetta / ISNetworld / Veriforce / Achilles supplier-portal integration",
        "DROPS (Dropped Objects Prevention Scheme) inspection records",
        "RigBooks / Rigvault rig-equipment maintenance records",
      ]}
      faqs={[
        { question: "Does the CMMS support DS-1 inspection categories?", answer: "Yes. DS-1 (Drill Stem Inspection) categories I (quarterly), II (annual), III (on-demand), IV (every 3 years), and V (every 5 years), as defined by T H Hill Associates and adopted by every major US operator, are encoded as automated inspection-scheduling rules per component. The system tracks drill pipe by tally length, OD, wall thickness, grade (E-75, X-95, G-105, S-135), connection (NC50, NC56, XT57, VAM Top), and runs the DS-1 category schedule per individual joint or per string." },
        { question: "How does the CMMS handle API Spec 4F derrick inspections?", answer: "API Spec 4F derrick / mast inspection (DS-1 Category 4 every 3 years for category 4 derricks, with additional Category 2 annual visual / Category 3 on-condition inspections) is tracked per individual rig structure. The CMMS holds the derrick capacity certificate, rated hook load, current condition rating (A/B/C/D), historical inspection reports, and the rig-up/rig-down cycle count — which affects the inspection interval for some component types." },
        { question: "Can the CMMS handle API 53 BOP stack re-certification?", answer: "Yes. API Standard 53 (Blowout Prevention Equipment Systems for Drilling Wells) defines the 5-year stack recertification cycle for BOP equipment. The CMMS tracks every BOP component (annular, single ram, double ram, shear ram, blind ram) by serial number, MAWP rating, last-pressure-test, last-NDE inspection, ram-element / rubber-goods lot-and-shelf-life, and OEM-recommended overhaul interval. The 5-year recert evidence pack assembles automatically from these records." },
        { question: "Does the platform support DNV 2.7-1 offshore container inspection?", answer: "Yes. DNV 2.7-1 offshore container (cargo basket, half-height container, mud skip) inspection — 6-monthly visual / annual NDE / 4-yearly major-overhaul — is tracked with original-builder DNV certificate, padeye-load history, lifting-set inspection records, and the cargo-container-specific NDE history. Mobile-app capture at the supply-base allows offshore-bound containers to be cleared in minutes vs the hours of paperwork-driven approval that historically delays vessel sailings." },
        { question: "How does the CMMS handle coiled-tubing string fatigue tracking?", answer: "Coiled-tubing string fatigue is tracked per ICOTA (Intervention and Coiled Tubing Association) recommended practice — every job on the string is recorded with bending events (reel-on, reel-off, gooseneck, well entry), pressure cycles, and temperature exposure. The CMMS calculates accumulated fatigue using API 5C7 / Cycle 1 / Cycle 2 methods and predicts string-retirement-date based on remaining cycles." },
        { question: "Does the CMMS support pumping iron NDE?", answer: "Yes. Pumping-service iron — Weco 1502 fittings, hammer unions, swivel joints, plug valves, check valves, choke chickens, frac iron — are tracked per OEM specification and inspected per OEM and customer-specific NDE intervals (typically MT for the body, UT for the pressure-bearing weld, hydro test per ASME PCC-2). Per-piece serial-tracked history is preserved across the asset's life including hydro-test pressure-decay records, MT findings, and ferromagnetic anomaly history." },
        { question: "Can the platform handle wireline tool maintenance?", answer: "Yes. Wireline tool maintenance — electric line tools, slickline tools, perforating guns, plug-and-perf assemblies, bridge plugs, packers, retrievable bridge plugs, casing scrapers, MIT / Mechanical Integrity Tool sondes, MWD/LWD components — is tracked per tool serial with the OEM recommended-maintenance cycle, calibration loops for logging tools, gun-shell hydro tests, detonator inventory and shelf-life management (per BATFE / DGCA / equivalents)." },
        { question: "Does the CMMS support IADC HSE Solutions audit?", answer: "Yes. IADC (International Association of Drilling Contractors) HSE Solutions audit, used by oilfield services contractors to demonstrate safety-management maturity, is supported with structured evidence packs covering leadership, employee involvement, hazard identification, hazard prevention/control, training, evaluation/improvement, and incident reporting. Evidence packs assemble in under 5 minutes vs the multi-day Excel exercise typical in the industry." },
      ]}
    />
  );
}
