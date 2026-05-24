import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForPipelineIntegrityServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Pipeline Integrity Services"
      slug="cmms-for-pipeline-integrity-services"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="pipeline integrity services"
      breadcrumbLabel="CMMS for Pipeline Integrity"
      trustBadge="PHMSA / CER / API 1160 ready"
      metaDescription="Atlantis NDT ERP CMMS for pipeline integrity services — PHMSA 49 CFR 192/195 asset registers, API 1160 / 1163 / 1173 integrity-management compliance, ILI fleet tracking, dig-program scheduling, HCA segment registers. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP CMMS configured for pipeline integrity contractors — PHMSA 49 CFR 192 (gas) and 195 (hazardous liquid) pipeline asset registers, API 1160 / 1163 / 1173 integrity-management compliance, ILI (In-Line Inspection) tool-fleet tracking, dig-program scheduling, HCA (High Consequence Area) segment registers, and integrity-management plan (IMP) revision tracking. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "CMMS for Pipeline Integrity Services inside Atlantis NDT ERP is the Odoo 18 Maintenance + Equipment module configured for the equipment fleet and regulatory cadence of pipeline integrity work — ILI smart-pig fleet (Rosen, GE PII, T.D. Williamson, NDT Global, Baker Hughes, ROSEN RoCorr MFL, Ultrasonic UT, Electromagnetic Acoustic Transducer EMAT, Inertial Measurement Unit IMU caliper, magnetic-flux-leakage MFL, transverse-field-inspection TFI), pipeline cleaning pigs, batch pigs, calibration loops, hot-tap and stopple equipment, and the field NDT toolset for in-the-ditch verification (UT, PAUT, ECT, MFL handheld, AUT automated UT).",
        "Every piece of equipment carries calibration intervals, manufacturer-recommended service intervals (Rosen 24-month overhaul, NDT Global per-mile sensor verification), batch-by-batch performance certificates, and historical run data so customer reports can cite tool-specific performance metrics (POI, POD, sizing accuracy) traceable to the specific tool deployed. PHMSA 49 CFR 195.452 inspections (Continual Assessment on HCA segments) and 49 CFR 192.917 inspections (gas-pipeline IMP) drive the maintenance calendar.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston pipeline integrity firm (75 technicians) managing 12 ILI tool platforms for Enbridge, Kinder Morgan and Energy Transfer cut tool-deployment dispute rate from 8% to under 1% via traceable tool-performance certificates." },
        { useCase: "Use Case 2", body: "A Calgary CER-regulated contractor (40 technicians) supporting TC Energy and Pembina pipeline maintenance maintains 240 calibration records per ILI tool — passed CER Condition 9 audit with zero findings (baseline: 5 findings)." },
        { useCase: "Use Case 3", body: "A Sao Paulo pipeline integrity contractor (28 technicians) supporting Transpetro and Petrobras tracks ILI tool batch certificates, calibration loops and AUT scanner servicing — extended ILI tool life by 14% via predictive-maintenance dashboards." },
        { useCase: "Use Case 4", body: "A Mumbai pipeline contractor (35 technicians) servicing GAIL India, IOCL pipelines and Reliance Industries tracks ILI deployment, dig-program AUT scanner currency and field-NDT toolset — eliminated 11 missed-mobilization incidents in 18 months." },
      ]}
      keyFeatures={[
        "ILI smart-pig fleet asset register (Rosen, GE PII, NDT Global, T.D. Williamson, Baker Hughes)",
        "Tool-type configuration (MFL, UT, EMAT, IMU, Caliper, TFI, AUT scanner)",
        "Per-tool calibration loops and batch performance certificates",
        "ILI tool POD (probability of detection) and POI (probability of identification) per tool-config",
        "Hot-tap and stopple equipment register",
        "PHMSA 49 CFR 192 (gas) and 195 (hazardous liquid) asset taxonomy",
        "API 1160 / 1163 / 1173 integrity-management compliance evidence",
        "Dig-program AUT scanner currency tracking",
        "Customer-pipeline HCA / Class Location segment register per opportunity",
        "Cleaning-pig batch lifecycle tracking",
        "Mooring / launching trap component-life tracking",
        "Predictive-maintenance dashboards (sensor / battery / encoder wear)",
        "Mobile app for in-the-ditch field NDT equipment scan / sync",
      ]}
      integrations={[
        "Rosen NIMS (Network Integrity Management System) data ingest",
        "NDT Global pipeline-data file format (.PSD, .RAW) ingest",
        "T.D. Williamson SmartPig data ingest",
        "GE PII PipeView ILI data integration",
        "Baker Hughes Process and Pipeline Services data exchange",
        "PHMSA NPMS (National Pipeline Mapping System)",
        "PHMSA Pipeline Safety Reporting (Annual Reports, 60-day Reports)",
        "CER (Canadian Energy Regulator) Online Application System",
        "API 1163 ILI conformity-assessment evidence",
        "ESRI ArcGIS pipeline route + asset-location integration",
      ]}
      faqs={[
        { question: "Does the CMMS track ILI tool performance certificates?", answer: "Yes. Every ILI smart-pig deployment is logged with the specific tool-serial-number, sensor-array configuration, calibration-loop verification record, batch performance certificate (per-mile POD/POI on the calibration loop), and post-run integrity check. When a customer audit asks 'show me the certificate for the tool you ran on segment XYZ in March 2024', the system produces it in under 30 seconds — including the calibration-loop verification record specific to that batch." },
        { question: "How does the CMMS handle the ILI tool-overhaul cycle?", answer: "ILI tool overhauls — Rosen recommends 24-month major overhaul on MFL tools, 12-month on UT tools, 6-month on EMAT — are tracked as scheduled maintenance work orders with parts-replacement BOM (battery packs, sensor wheels, encoders, transmission belts, mechanical seals). The system warns 90 / 60 / 30 days before overhaul due-date and flags any deployment plan that would push a tool past its recommended-overhaul interval." },
        { question: "Can the CMMS track PHMSA HCA segment registers?", answer: "Yes. PHMSA HCA (High Consequence Area) segment registers per customer pipeline — including the HCA segment ID, the Class Location designation (1-4), the MAOP, the diameter and length, the fluid commodity, the API 5L grade, the age, and the prior ILI / dig record — are loaded as customer-pipeline metadata. The system uses this metadata to forecast next-required Continual Assessment dates per 49 CFR 195.452." },
        { question: "Does the platform support API 1163 ILI conformity assessment?", answer: "Yes. API 1163 (In-Line Inspection Systems Qualification) Level 1, 2 and 3 conformity assessment evidence is structured into the asset record — manufacturer's qualification reports, calibration-loop performance, post-run signoff, and field-validation dig verification. When customer audits ask for API 1163 evidence, the system produces it as a single ZIP export." },
        { question: "How does the CMMS handle dig-program scheduling?", answer: "Dig-program work orders — derived from ILI anomaly lists — are scheduled against AUT scanner availability, qualified-technician (ASNT Level II/III in UT/PAUT, NACE CIP, API 1169) availability, and customer-mandated mobilization-window. The system optimizes the dig sequence to minimize technician travel time and equipment-rotation cost across multi-anomaly dig campaigns." },
        { question: "Does the platform support API 1173 Pipeline SMS?", answer: "Yes. API 1173 Pipeline SMS (Safety Management System) — the safety-management framework increasingly required by PHMSA and operators for pipeline contractors — is structured into the platform with leadership, stakeholder engagement, risk management, operational controls, incident investigation, safety assurance, management review and continual improvement elements. Evidence packages for SMS audit assemble in under 5 minutes." },
        { question: "Can the CMMS track hot-tap and stopple equipment?", answer: "Yes. Hot-tap fittings, stopple plugs, hot-tap machines, line-stop plugs, and the related calibration / certification documents are tracked as equipment assets with per-component pressure-rating, material-of-construction, last hydrotest date and next-due hydrotest. The hot-tap-machine register also tracks operator currency (T.D. Williamson, STATS Group, Plidco operator training)." },
        { question: "Does the platform handle dead-leg / corrosion-under-insulation programs?", answer: "Yes. Dead-leg inspection programs, CUI (Corrosion Under Insulation) screening with pulsed eddy current or guided wave ultrasonic, MIC (Microbiologically Influenced Corrosion) coupons, and insulated-pipework register are tracked as discrete equipment-fleet streams with their own calibration / inspection / replacement intervals." },
      ]}
    />
  );
}
