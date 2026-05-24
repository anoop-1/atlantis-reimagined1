import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForWeldingFabricationShops() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Welding & Fabrication Shops"
      slug="cmms-for-welding-fabrication-shops"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="welding and fabrication shops"
      breadcrumbLabel="CMMS for Weld Shops"
      trustBadge="AWS / ASME IX / ISO 3834 ready"
      metaDescription="Atlantis NDT ERP CMMS for welding & fabrication shops — AWS D1.1 / ASME Section IX / ISO 3834 quality systems, welder qualification continuity, machine maintenance for GMAW/GTAW/SAW/FCAW, consumable lot traceability. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP CMMS configured for AWS / ASME Section IX / ISO 3834 weld shops — welder qualification continuity (90-day rule, six-month rule), welding machine maintenance for GMAW/GTAW/SAW/FCAW/SMAW power sources, consumable lot traceability, jig and fixture inspection, and shop-level inspection equipment for radiography, ultrasonic, MT, PT and visual examination. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "CMMS for Welding & Fabrication Shops inside Atlantis NDT ERP is the Odoo 18 Maintenance + Equipment module configured for the equipment register and quality cadence of fabrication — AWS D1.1 (structural steel), AWS D1.2 (aluminum), AWS D1.5 (bridge welding), AWS D14 series (machinery), ASME Section IX (welding qualification for pressure equipment), ASME Section V (NDE for pressure equipment), ASME B31.1/B31.3 (power and process piping), API 1104 (pipeline welding), AWS D1.6 (stainless steel), ISO 3834 (welding-shop quality system), ISO 9606 (welder qualification), ISO 15614 (WPQR).",
        "The CMMS tracks every welding machine (Lincoln Electric Power Wave, Miller Continuum, ESAB Aristo, Fronius TPS, Hypertherm Powermax, Lincoln Power MIG, Miller Dynasty, ESAB Rebel), every NDE instrument (Olympus EPOCH 650 / OmniScan X3, GE USM Go+, Sonatest Veo+, Magnaflux Y6 yokes, Met-L-Chek PT consumables), every overhead crane and gantry hoist (LOLER inspection cycles), every consumable lot (electrode batch, wire heat-number, flux lot, shielding gas mix), and every welder's continuity-of-qualification status.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston structural-fabrication shop (60 welders, 20 NDE techs) cleared AISC certification audit and AWS D1.1 client audits with zero findings after consolidating WPQR / WPS / PQR records and welder continuity into the CMMS." },
        { useCase: "Use Case 2", body: "A Hyderabad ASME U-stamp pressure-vessel fabricator (45 welders) eliminated 6 ASME Section IX continuity-lapse findings per quarter after the CMMS-driven 90-day-rule alerts went live." },
        { useCase: "Use Case 3", body: "A Dammam petrochemical fabricator (38 welders) supporting Aramco shutdowns tracks welder continuity to Aramco-specific WPS variants — eliminated 9 pre-mob qualification disputes in 12 months." },
        { useCase: "Use Case 4", body: "A Calgary AWS / CWB-certified shop (28 welders) for oil-sands modules tracks welder continuity, machine calibration and consumable lot traceability per AB pressure-equipment registration — reduced ABSA audit findings from 4 per cycle to zero." },
      ]}
      keyFeatures={[
        "Welding machine register (Lincoln, Miller, ESAB, Fronius, Hypertherm, OTC Daihen, Kemppi)",
        "Power-source calibration intervals (current/voltage meter cal per manufacturer)",
        "Wire-feeder roll wear tracking and replacement schedule",
        "Gas-mixer / flow-meter calibration tracking",
        "Welder continuity tracking (ASME IX 6-month rule, AWS 90-day rule, ISO 9606)",
        "WPS / PQR / WPQR document control and revision history",
        "Consumable lot traceability (electrode batch, wire heat#, flux lot, gas certificate)",
        "Overhead crane LOLER / OSHA 1910.179 inspection scheduling",
        "Fixture and jig inspection / GD&T verification",
        "Radiography source-pit and dark-room equipment register",
        "PT / MT consumable shelf-life and lot-conformance tracking",
        "Welder bay environmental monitoring (temperature, humidity for low-hydrogen)",
        "Mobile app for shop-floor capture (offline-capable, attaches photos)",
      ]}
      integrations={[
        "Lincoln Electric Production Monitoring 2.0",
        "Miller Insight Centerpoint welding-data analytics",
        "ESAB WeldCloud welding-data platform",
        "Fronius WeldCube welding-data exchange",
        "Hypertherm CutPro plasma-cut scheduler",
        "AWS Bridge software for welder records",
        "ASME Section IX QW-300 weld-records template export",
        "ISO 3834 / EN 1090 manufacturer-document evidence pack export",
        "Procore / Aconex construction-portal supplier integration",
        "BSI / TUV / DNV / Lloyd's Register fab-shop surveillance audit support",
      ]}
      faqs={[
        { question: "Does the CMMS enforce welder continuity rules?", answer: "Yes. ASME Section IX QW-322 (6-month rule), AWS D1.1 Clause 6.4 (90-day rule and 3-year requalification), ISO 9606-1 (6-month renewal by employer attestation, 24-month full requalification) are encoded as automated alerts. When a welder approaches lapse, the system fires 90 / 60 / 30 / 7-day alerts to the welding engineer; if the welder's qualification lapses, the system prevents that welder from being assigned to WPS-controlled work." },
        { question: "How does the CMMS handle WPS / PQR / WPQR control?", answer: "The Welding Procedure Specification (WPS), Procedure Qualification Record (PQR) and Welder Performance Qualification Record (WPQR) library is fully revision-controlled, with cross-reference between WPS-PQR (which PQRs support which WPS) and WPS-WPQR (which welders are qualified to which WPS). When a PQR is added or revised, the system flags which downstream WPS / WPQR records require review." },
        { question: "Can the CMMS track consumable lot traceability?", answer: "Yes. Every consumable lot — electrode batch (AWS A5 series), wire heat number (AWS A5.18, A5.20, A5.28), flux lot (AWS A5.17, A5.23), shielding gas mix and lot certificate (CGA G-1) — is tracked from receipt through use, with material-test-report (MTR) attached. Per-weld traceability ties the finished weld to the specific lot of every consumable used." },
        { question: "Does the platform handle low-hydrogen electrode storage?", answer: "Yes. Low-hydrogen electrodes (AWS A5.1 E70XX-H4, E80XX-H4, E90XX-H4 variants) require controlled storage (oven temperatures, exposure time limits, rebake cycles). The CMMS tracks the rod-oven calibration, exposure time per opened-package, rebake history, and prevents use of out-of-spec electrodes on Section IX-controlled welds." },
        { question: "Does the CMMS support overhead crane / lifting equipment inspection?", answer: "Yes. Overhead cranes, gantry hoists, mobile cranes, slings, shackles and below-the-hook devices are tracked per OSHA 1910.179 (US), LOLER 1998 (UK), AS 2550 (Australia), CSA B167 (Canada) inspection intervals. Pre-shift, monthly and annual inspection records are captured via mobile app and the lifting-equipment compliance dashboard is audit-ready in under 60 seconds." },
        { question: "Can the platform track AISC / CWB / EN 1090 certification?", answer: "Yes. AISC Certified Fabricator status (Building Buildings, Bridges, Conventional Steel, Major Steel Bridge categories), CWB W47.1 Division 1/2/3 certification, EN 1090-2 Execution Class 1-4, and ISO 3834-2/-3/-4 certification are tracked as shop-level certifications with surveillance-audit calendars and evidence packs." },
        { question: "Does the CMMS handle radiography source pit and darkroom?", answer: "Yes. Ir-192, Co-60 and Se-75 source-pit equipment is tracked with regulator license (NRC, FANR, AERB, ASN, ENSI, ARPANSA), source-strength records, leak-test certificates, ALARA records, and dosimeter exchange schedules. Darkroom equipment (developer / fixer chemistry pH, temperature, replenishment cycles, densitometer calibration) is tracked per ASTM E1742 / ASME Section V Article 2 requirements." },
        { question: "Can we integrate with welding-data acquisition platforms?", answer: "Yes. Lincoln Electric Production Monitoring 2.0, Miller Insight Centerpoint, ESAB WeldCloud, Fronius WeldCube and Lincoln CheckPoint stream welding-machine telemetry (current, voltage, wire-feed speed, gas flow, travel speed, heat input) per weld. The CMMS ingests this data, ties it to the weld-record-by-WPS, and produces deviation alerts when a parameter falls outside WPS-essential-variable ranges." },
      ]}
    />
  );
}
