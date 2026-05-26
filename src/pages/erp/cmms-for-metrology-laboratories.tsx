import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForMetrologyLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Metrology Laboratories"
      slug="cmms-for-metrology-laboratories"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="metrology laboratories"
      breadcrumbLabel="CMMS for Metrology"
      trustBadge="ISO/IEC 17025 / ISO 10012 ready"
      metaDescription="Atlantis NDT ERP CMMS for metrology laboratories — ISO/IEC 17025:2017 + ISO 10012 measurement management, primary-standard upkeep, environmental-chamber control, master-artifact inter-comparison, recurring re-cal scheduling. Flat regional pricing."
      heroBody="Atlantis NDT ERP CMMS configured for ISO/IEC 17025 metrology laboratories — primary-standard upkeep (deadweight testers, gauge blocks, frequency standards, time references), environmental-chamber control (temperature / humidity / pressure logging per ISO/IEC 17025 §6.3), master-artifact inter-comparison scheduling, and the recurring re-calibration cycle that keeps the laboratory's measurement chain traceable to the SI. Part of the all-apps-included subscription."
      whatItIs={[
        "CMMS for Metrology Laboratories inside Atlantis NDT ERP is the Odoo 18 Maintenance + Equipment module configured for the unique equipment fleet of an accredited calibration laboratory — primary pressure standards (DH-Budenberg deadweight testers, Ruska 2465A piston gauges, Mensor CPC piston gauges), primary temperature standards (Hart Scientific 1521 / 1502A / Fluke 1594A SuperThermometers, Isotech blackbody sources, tri-junction water cells, ITS-90 fixed-point cells), primary mass standards (E1 / E2 OIML class artifact sets), primary length standards (Mahr / Mitutoyo / Tesa gauge-block sets, helium-neon laser interferometers), primary electrical standards (Fluke 5520A / 5730A multifunction calibrators, Megger or Fluke megohmmeter standards, Josephson voltage standards, quantum Hall resistance standards in NMI labs), and primary time/frequency standards (Cs beam standards, Rb oscillators, GPS-disciplined oscillators).",
        "The CMMS schedules each standard's re-calibration via the appropriate national-metrology-institute (NIST, NPL, PTB, NIM, NMIJ, KRISS, BIPM, VSL), tracks artifact stability through inter-comparison data, monitors environmental-chamber conditions per ISO/IEC 17025:2017 §6.3 (temperature 20°C ± 1°C, humidity 50% ± 10% typical), and produces uncertainty budgets that comply with JCGM 100:2008 (GUM) and EA-4/02 M:2022 evaluation of uncertainty of measurement.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A NIST-traceable cal lab in Cleveland (15 metrologists, ANAB ISO/IEC 17025) maintains 240 primary standards across pressure, temperature, mass, length, electrical and dimensional disciplines — cleared ANAB surveillance with zero non-conformances (baseline: 3 NCs)." },
        { useCase: "Use Case 2", body: "A UKAS-accredited cal lab in Manchester (12 metrologists) tracks deadweight tester maintenance, piston-gauge re-calibration and environmental-chamber drift — eliminated a recurring §6.3 environmental-monitoring finding that had appeared in 4 consecutive UKAS audits." },
        { useCase: "Use Case 3", body: "A NABL-accredited cal lab in Pune (8 metrologists) supporting Bharat Forge and Tata Motors automotive supply chain manages 180 reference gauge blocks, surface plates, granite straightedges and master tools — eliminated 7 measurement-management-system (ISO 10012) findings per NABL cycle." },
        { useCase: "Use Case 4", body: "A SAC-SINGLAS-accredited cal lab in Singapore (18 metrologists) servicing Jurong Island clients tracks deadweight tester re-cal at NPL UK, electrical standards at NIST USA, and temperature standards at NMIJ Japan — automated the cross-NMI re-cal scheduling that previously required a dedicated full-time coordinator." },
      ]}
      keyFeatures={[
        "Primary-standard register (pressure, temperature, mass, length, electrical, time/frequency)",
        "NMI re-calibration scheduling (NIST, NPL, PTB, NIM, NMIJ, KRISS, BIPM, VSL)",
        "Environmental-chamber temperature / humidity / pressure continuous logging",
        "ISO/IEC 17025:2017 §6.3 environmental-monitoring evidence pack",
        "Master-artifact inter-comparison scheduling",
        "Drift-trending per primary standard (control charts vs warning + control limits)",
        "Uncertainty budget per measurement (Type A / B, combined, expanded U=k*uc)",
        "Working-standard hierarchy management (primary → secondary → working)",
        "ISO 10012 measurement-management-system records",
        "Decision Rule library per ISO/IEC 17025:2017 §7.8.6",
        "Gauge-block / surface-plate / straightedge condition records",
        "Reference-material lot tracking with CRM expiry alerts (ISO 17034)",
        "Mobile app for in-lab inspection / re-cal-cycle capture",
      ]}
      integrations={[
        "Beamex CMX / LOGiCAL calibration data import",
        "Fluke MET/TEAM uncertainty-of-measurement records",
        "Druck DPI 620 piston-gauge data exchange",
        "Mensor CPC-8000 reference data ingest",
        "Mitutoyo MeasurLink / MCOSMOS dimensional data",
        "Hexagon PC-DMIS CMM measurement data",
        "Indysoft GAGEpack gauge management import",
        "NIST primary-standard re-calibration scheduling",
        "NPL primary-standard re-calibration scheduling",
        "BIPM KCDB (Key Comparison Database) calibration measurement capability look-up",
      ]}
      faqs={[
        { question: "Does the CMMS handle primary-standard re-calibration at NMIs?", answer: "Yes. Primary standards must be re-calibrated periodically at a National Metrology Institute (NMI) — NIST USA, NPL UK, PTB Germany, NIM China, NMIJ Japan, KRISS South Korea, VSL Netherlands, NRC Canada, INMETRO Brazil, CENAM Mexico, KCEM Egypt — to maintain traceability to the SI. The CMMS schedules each primary standard's re-calibration, manages the shipment logistics (customs paperwork, dangerous-goods classification where applicable, insurance), and tracks NMI-issued recalibration certificates with their uncertainty values." },
        { question: "How does the CMMS implement ISO/IEC 17025 §6.3 environmental monitoring?", answer: "ISO/IEC 17025:2017 §6.3 requires environmental conditions to be controlled and monitored when they affect measurement validity. The CMMS integrates with environmental data loggers (Vaisala HMP110, Rotronic HC2A, Honeywell HumidIcon, Sensirion SHT85) to continuously record temperature, humidity, atmospheric pressure, air pressure differential, vibration and electromagnetic environment. Excursions outside limits trigger automatic alerts and 'lab is closed for measurement' status until conditions normalise." },
        { question: "Does the platform support ISO 10012 Measurement Management Systems?", answer: "Yes. ISO 10012 (Measurement Management Systems — Requirements for measurement processes and measuring equipment) is structurally implemented — measurement-management policy, measurement-process design, measurement-uncertainty determination, equipment confirmation, measuring-process realization, periodic re-validation, and continual improvement. ISO 10012 evidence packs assemble in under 5 minutes vs the typical multi-day exercise." },
        { question: "Can the CMMS produce GUM-compliant uncertainty budgets?", answer: "Yes. Uncertainty budgets per JCGM 100:2008 (GUM, the Guide to the Expression of Uncertainty in Measurement) and EA-4/02 M:2022 are structurally implemented — Type A (statistical) contributions from repeated measurement, Type B (other) contributions from calibration certificates, manufacturer specifications and reasonable assumptions, combined standard uncertainty uc via the law of propagation of uncertainty, and expanded uncertainty U = k * uc with k typically 2 for 95% coverage. The system warns when contributions are missing or coverage factors don't match the lab's policy." },
        { question: "How does the CMMS handle inter-comparison drift tracking?", answer: "Inter-comparison data — between the lab's own primary standards (e.g. comparing two deadweight testers head-to-head, or two ITS-90 fixed-point cells), between the lab and peer labs (proficiency testing), and between the lab and an NMI — is loaded as control-chart data. Statistical Process Control (SPC) rules (Western Electric 1, 2, 3 rules; Nelson rules) flag drift early so the lab can investigate before a customer audit raises the issue." },
        { question: "Does the CMMS handle ISO 17034 reference-material tracking?", answer: "Yes. Reference-material (CRM, Certified Reference Material) tracking per ISO 17034 — including expiry date, certified value with uncertainty, traceability statement, storage requirements, and lot number — is structured. When a CRM is about to expire, the system fires 90/60/30-day alerts so the lab can order replacement and avoid the audit-finding of an expired CRM in use." },
        { question: "Can the platform track working-standard hierarchy?", answer: "Yes. The metrology hierarchy — Primary Standard (national-NMI traceable) → Secondary Standard (lab-internal reference) → Working Standard (used on the bench) — is structurally maintained. Each level has independent calibration intervals, with auto-derivation of working-standard re-cal due-dates from the secondary, and the working-standard re-cal due-date drives bench-availability scheduling." },
        { question: "Does the CMMS support Decision Rule per ISO/IEC 17025 §7.8.6?", answer: "Yes. The Decision Rule used when reporting conformity — simple acceptance, conditional acceptance, guard-band w/k=2, statistical conformity — is stored per customer-per-instrument-class. The lab can produce defensible conformity statements that comply with both ISO/IEC 17025:2017 §7.8.6 and ASME B89.7.3.1 / ILAC G8 / ISO 14253-1 supplementary guidance." },
      ]}
    />
  );
}
