import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CertificationTrackingForCalibrationLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="Certification Tracking for Calibration Laboratories"
      slug="certification-tracking-for-calibration-laboratories"
      appName="Certification Tracking"
      industry="calibration laboratories"
      breadcrumbLabel="Certification Tracking for Calibration Labs"
      trustBadge="ISO 17025 / ANSI Z540 / NABL / A2LA"
      metaDescription="Atlantis NDT ERP Certification Tracking for ISO 17025 calibration laboratories. Uncertainty budget tracking, NIST/NPL/BAM/NIM traceability, NABL/A2LA/ANAB/UKAS accreditation, ANSI Z540.3 decision rules. regional pricing flat."
      heroBody="Atlantis NDT ERP Certification Tracking pre-configured for ISO 17025-accredited calibration laboratories — uncertainty budget management, NIST / NPL / BAM / NIM / KRISS / NIM metrological traceability chains, NABL / A2LA / ANAB / UKAS / DAC / EIAC / SAC accreditation evidence, ANSI/NCSL Z540.3 / ISO 17025:2017 Section 7.8.6 decision-rule documentation and customer-specific calibration intervals for oil & gas, aerospace, pharmaceutical and defense clients. Part of the all-apps-included subscription."
      whatItIs={[
        "Certification Tracking for Calibration Laboratories inside Atlantis NDT ERP is the Odoo 18 Maintenance + Quality module pre-configured for the operating reality of ISO/IEC 17025:2017-accredited calibration and testing laboratories. The system manages every piece of customer test equipment that comes through your lab — pressure gauges (deadweight testers, digital pressure calibrators), temperature instruments (RTD / thermocouple / IR thermometers, dry-block calibrators, fluid baths), torque tools (torque wrenches, torque drivers, torque testers), dimensional metrology (CMMs, height gauges, micrometers, calipers, gauge blocks, surface plates), mass and balance (analytical balances, mass standards, OIML class E1/E2/F1/F2/M1), electrical instruments (multimeters, oscilloscopes, signal generators, power analyzers), gas analysers (oxygen, CO, CO2, H2S, SO2, NOx, hydrocarbons), and bespoke industry instruments (NDT calibration blocks, UT reference standards, RT step wedges, MT yokes, PT temperature reference samples).",
        "Every calibration record is captured with full ISO/IEC 17025:2017 compliance: customer name and contact, instrument model and serial number, customer-provided ID tag (asset register reference), 'as-found' condition status (in tolerance, out of tolerance, damaged), calibration procedure used, reference standards employed with their own calibration certificate IDs and NIST / NPL / BAM / NIM traceability chains, environmental conditions during calibration, uncertainty budget per ILAC P14 / GUM JCGM 100:2008, decision rule applied (per ISO 17025:2017 7.8.6 — guard-banded, simple, or shared-risk), 'as-left' final readings, technician name and qualification, calibration certificate number, customer-specified interval, and next calibration due date. The system stores the calibration certificate as a searchable PDF with cradle-to-grave traceability.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Mumbai NABL-accredited calibration laboratory (40 metrology technicians, 8 lab disciplines) tracks 6,500+ active customer instruments — eliminated calibration certificate disputes with 12 major industrial clients, recovered approximately INR 1.2 crore/year in disputed-invoice resolution time, and cleared next NABL CIPM-aligned surveillance audit with zero non-conformances." },
        { useCase: "Use Case 2", body: "A Houston A2LA-accredited calibration laboratory (28 technicians) serving ExxonMobil, Shell, Chevron and Valero refineries automated calibration-recall notifications to 220+ customer asset-management contacts — recovered $480K of late-recall revenue in the first year." },
        { useCase: "Use Case 3", body: "A Dubai EIAC-accredited calibration laboratory (32 technicians) serves ADNOC, Emirates Global Aluminium, DUCAB and Emirates Steel — runs parallel ISO/IEC 17025:2017, ENAS-EIAC and Saudi SAC accreditations with shared procedures but distinct audit-evidence packs, cleared next ENAS surveillance audit with zero major findings." },
        { useCase: "Use Case 4", body: "A Singapore SAC-accredited calibration laboratory (18 technicians) serving Jurong Island petrochemical operators uses the ANSI/NCSL Z540.3 decision-rule documentation workflow for all gauge-block and pressure-gauge calibrations — eliminated 6 customer-disputed PWA (probability of false accept) findings per quarter." },
      ]}
      keyFeatures={[
        "ISO/IEC 17025:2017 compliance evidence pack generation",
        "Uncertainty budget calculation per JCGM 100:2008 (GUM)",
        "Metrological traceability chain (NIST, NPL, BAM, NIM, KRISS, PTB, INMETRO)",
        "ANSI/NCSL Z540.3 / ISO 17025:2017 Section 7.8.6 decision-rule documentation",
        "Customer-specified interval tracking with interval-extension request workflow",
        "'As-found' / 'as-left' status with out-of-tolerance impact assessment",
        "ILAC P14 / ILAC G8 / EA-4/02 uncertainty conformity evidence",
        "Reference standard inventory with sub-traceability hierarchy",
        "Customer asset-tag cross-reference (your tag → customer's asset register ID)",
        "Calibration interval analytics by instrument type, by environment, by usage",
        "MSA (Measurement System Analysis) gauge R&R study management",
        "PDF calibration certificate generator with QR-code traceability",
        "NABL / A2LA / ANAB / UKAS / SAC / EIAC / DAC accreditation-specific audit packs",
        "Internal proficiency-test (PT) and inter-laboratory comparison (ILC) tracking",
      ]}
      integrations={[
        "Indysoft Calibration Management Software import",
        "Beamex CMX Calibration Software import",
        "Fluke MET/CAL Plus integration",
        "PTC Windchill calibration data export",
        "MET/TRACK / Calibrations Direct migration support",
        "GAGEtrak / Gage InSite legacy data import",
        "Customer MES / CMMS (Maximo, SAP PM, Infor EAM) recall notifications",
        "NIST On-line Calibration Service (NOLCS) report integration",
        "ILAC MRA / APLAC MRA / EA MRA mutual-recognition evidence export",
        "Customer PowerBI / Tableau dashboard data feeds",
      ]}
      faqs={[
        { question: "Does the system support ISO/IEC 17025:2017 Section 7.8.6 decision rules?", answer: "Yes. ISO/IEC 17025:2017 Section 7.8.6 requires laboratories to document and apply explicit decision rules for conformity statements. Atlantis NDT ERP supports the four standard rule types: (1) simple acceptance (no guard band, decision-rule risk equals 50% for borderline measurements), (2) guard-banded acceptance per ILAC G8:2019 (typically 95% probability of true acceptance), (3) shared-risk decision rule (customer-specified probability), (4) customer-defined rule. Each calibration certificate clearly states the rule applied, the guard band (if any), the measurement uncertainty and the decision outcome." },
        { question: "How does the system manage uncertainty budgets?", answer: "Each calibration procedure has a standardized uncertainty budget template — list of all contributing sources (reference-standard uncertainty, repeatability, environmental, resolution, operator), their type-A vs type-B classification, their probability distribution (normal, rectangular, U-shaped, triangular), their standard uncertainty, sensitivity coefficients, and the combined standard uncertainty calculated per JCGM 100:2008 (GUM). The system stores per-calibration uncertainty calculation so that any subsequent audit, customer dispute or root-cause investigation can re-construct the uncertainty estimate exactly as performed at the time." },
        { question: "Can the system track sub-traceability chains?", answer: "Yes. Metrological traceability is hierarchical — your customer's instrument is calibrated against your working standard, which is calibrated against your reference standard, which is calibrated against a national-metrology-institute (NMI) standard. Atlantis NDT ERP tracks the full chain: each customer-calibration record references the working standard's current calibration certificate, which references the NMI standard's calibration. Chain-of-custody is automatically valid as long as every link is in-currency; the system warns when any link approaches expiry that could break the chain for downstream customer calibrations." },
        { question: "How are 'as-found' out-of-tolerance findings handled?", answer: "An 'as-found' out-of-tolerance result has immediate downstream impact assessment — the customer is notified per ISO/IEC 17025:2017 Section 7.10, all measurements made by the affected instrument since its previous calibration are flagged for customer review, and the customer is offered impact-assessment support (which measurements could have produced non-conforming product, which finished-goods inspections need re-validation). The workflow is configurable to customer-specific impact-assessment thresholds — pharmaceutical customers typically demand 100% traceability, aerospace customers per AS 9100 Rev D, and industrial customers per their individual quality manuals." },
        { question: "Does the system support gauge R&R study management?", answer: "Yes. Gauge R&R (Repeatability and Reproducibility) studies are a core requirement of customer Measurement System Analysis (MSA) audits — particularly automotive (AIAG MSA Manual Rev 4), aerospace (AS 13003) and medical-device (ISO 13485) customers. Atlantis NDT ERP supports: planning the study (number of operators, parts, replicates), entering the measurement data, calculating Repeatability, Reproducibility and overall %GR&R via ANOVA method, generating the AIAG-format MSA report, and tracking the next-due-date for re-study (typically 12-24 months for production-critical gauges)." },
        { question: "Can we differentiate accreditation-scope-specific calibrations?", answer: "Yes. Many labs hold parallel accreditations under different national bodies (NABL India + A2LA US + UKAS UK + ENAS / EIAC UAE + SAC Singapore + DAC Dubai) — each with slightly different scope, methods and witness requirements. Atlantis NDT ERP supports per-calibration accreditation tagging: a single calibration may be issued under NABL scope (best uncertainty for the Indian market), A2LA scope (for the US client subset), or unaccredited (faster turnaround for non-critical scope). Audit-pack export filters by accreditation body so each surveillance audit (NABL CIPM, A2LA Assessor, UKAS Assessor, ENAS Lead Assessor) sees only the records within that body's scope." },
        { question: "How does the customer recall-notification workflow work?", answer: "Every customer instrument has a 'next-due' date per the customer-specified interval (typically 6 / 12 / 24 / 36 months). Atlantis NDT ERP sends automated email and SMS recall notifications at 90 / 60 / 30 / 7 days before due-date to the customer asset-manager contact — with a one-click 'schedule calibration' link that creates a draft service order. Recall-conversion rates (% of recalled instruments that return for re-calibration) are tracked and trended, with customer-specific recall-fee economics modelled into the pipeline forecast." },
        { question: "Is the system suitable for multi-disciplinary calibration labs?", answer: "Yes. Most accredited labs hold scope across multiple disciplines (mechanical, dimensional, mass, force, pressure, temperature, electrical-DC, electrical-AC, time/frequency, gas analysis, NDT reference standards). Atlantis NDT ERP supports unlimited disciplines per accreditation, with per-discipline procedure libraries, per-discipline equipment registers, and per-discipline technician qualifications. Cross-discipline reports (revenue by discipline, gross margin by discipline, technician utilization by discipline) help labs identify the most profitable accreditation scopes to invest in next." },
      ]}
    />
  );
}
