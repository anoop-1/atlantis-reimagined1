import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementForOilfieldServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management for Oilfield Services Companies"
      slug="project-management-for-oilfield-services"
      appName="Project Management"
      industry="oilfield services"
      breadcrumbLabel="Project Management for Oilfield Services"
      trustBadge="API / NORSOK / OISD aligned"
      metaDescription="Atlantis NDT ERP Project Management for oilfield services. Drilling-rig inspection campaigns, wireline / wireless logging, well-integrity surveys, NACE MR0175 sour-service, API 510/570/653, multi-rig FIFO logistics. regional pricing flat."
      heroBody="Atlantis NDT ERP Project Management pre-configured for oilfield services contractors — drilling-rig inspection campaigns, wireline and wireless logging operations, well-integrity surveys, completion-string NDT, BOP recertification, NACE MR0175 sour-service damage management, API 510 / 570 / 653 surface-asset inspection scheduling and multi-rig FIFO crew logistics across upstream operators worldwide. Part of the all-apps-included subscription."
      whatItIs={[
        "Project Management for Oilfield Services inside Atlantis NDT ERP is the Atlantis ERP Project module pre-configured for the operational reality of upstream and oilfield-services contractors — the firms running rig-up NDT inspections, drill-pipe / drill-collar / BHA recertification, BOP (Blowout Preventer) recertification per API 16A and API 53, wireline NDT (TPS, electromagnetic thickness gauging), wireless / production-logging-tool integrity inspection, downhole-tool inspection and surface-asset campaigns on operator wells worldwide. The system understands that an oilfield-services 'project' is rarely a single fixed-location job — it is a rolling campaign across multiple rigs, multiple operators, multiple regulatory regimes and a constantly-shifting crew roster.",
        "Every project carries structured custom fields for: rig name (Transocean Deepwater Pontus, Valaris DS-12, Noble Globetrotter, Saipem Scarabeo 9, Stena IceMAX, Helmerich & Payne Flex Rig 4), well type (development, exploration, appraisal, workover, completion, P&A), operator (Saudi Aramco upstream, ADNOC Onshore / Offshore, PETRONAS Carigali, Pertamina Hulu, ONGC, Petrobras, Equinor, Shell upstream, ExxonMobil upstream), service line (drilling, wireline, well integrity, BOP, downhole tools, surface equipment), regulatory regime (PSA Norway, HSE UK, BSEE US, NOPSEMA Australia, ANP Brazil, AER Alberta, MoEMR Indonesia, DGH India, DPR Nigeria) and contract type (day-rate, lump-sum, integrated services, performance-based).",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "Example: a Houston offshore wireline NDT contractor tracks crew rotations in the technician availability calendar, where overlapping bookings are blocked." },
        { useCase: "Use Case 2", body: "Example: a Dubai drilling-tubular inspection firm runs each recertification campaign as a project, with the inspection report for each item linked to the job." },
        { useCase: "Use Case 3", body: "Example: an Aberdeen well-integrity contractor keeps well documentation and procedures under revision control, ready for regulator and client audits." },
        { useCase: "Use Case 4", body: "Example: a Calgary oilfield inspection firm plans crews for thermal operations by method, level and availability, and sees each technician's next available date." },
      ]}
      keyFeatures={[
        "Multi-rig campaign tracking (active rigs, mobilizations, demobilizations)",
        "API Spec 5DP / 7-1 drill-pipe recertification workflow",
        "API 16A / API 53 BOP recertification scheduling",
        "API 6A / 6D wellhead and Christmas-tree integrity inspection",
        "NACE MR0175 / ISO 15156 sour-service damage tracking",
        "FIFO crew roster with qualification cross-checks",
        "PSA Norway / HSE UK / BSEE US / NOPSEMA / ANP regulatory dashboards",
        "Day-rate / lump-sum / performance-based billing per contract type",
        "Subsea well-integrity management (SWIM) documentation",
        "BOP test-pressure record management",
        "SCSSV (Subsurface Safety Valve) inspection records",
        "Pre-load and torque verification records for HP/HT equipment",
        "OIL inspection workflow (Tubular Inspection Report, Drill-Collar Inspection Report)",
      ]}
      integrations={[
        "Saudi Aramco APQS / VQIP upstream contractor portal",
        "ADNOC Onshore / Offshore Tejari vendor system",
        "PETRONAS PCSB upstream vendor portal",
        "Pertamina Hulu Indonesia SKK Migas portal",
        "ONGC India vendor qualification system",
        "Petrobras Petronect supplier portal",
        "Equinor Sub-Surface vendor portal (Norway)",
        "BP / Shell / ExxonMobil / TotalEnergies upstream vendor systems",
        "Achilles JQS (Norway / UK upstream) supplier qualification",
        "ISNetworld / Avetta / PEC Premier / Veriforce upstream contractor portals",
      ]}
      faqs={[
        { question: "How does the system handle multi-rig campaign tracking?", answer: "Atlantis NDT ERP treats each rig campaign as a top-level project entity with sub-projects for each well, each service-line discipline (drilling NDT, wireline NDT, BOP recertification, well integrity, downhole tools), and each crew rotation. The system shows you at a glance which rigs are active, which crews are mobilizing or demobilizing in the next 30 / 60 / 90 days, which qualifications are at risk of expiry mid-mobilization, and which operator contracts are approaching renewal. Multi-rig campaign reporting is configurable by operator, by service line, by region, by FIFO crew base, by drilling-contractor and by regulatory regime." },
        { question: "Does the system track API Spec 5DP and API Spec 7-1 drill-pipe recertification?", answer: "Yes. Drill-pipe and BHA tubular inspection is a core oilfield-services workflow. The TIR (Tubular Inspection Report) workflow supports both rig-floor inspection (mobile, offline capture) and shop inspection (TPS, electromagnetic thickness gauging, ultrasonic compression-wave wall thickness)." },
        { question: "How does the system support BOP (Blowout Preventer) recertification?", answer: "API 16A annular preventers, API 53 BOP system integrity, API 6A wellhead and tree integrity, and API 17D subsea wellhead inspection are all tracked. BOP recertification campaigns are managed as multi-week projects with sub-tasks for disassembly inspection, MPI (magnetic particle inspection) of rams, sealing-element inspection, hydrostatic test, function test, and reassembly with torque-verification records. Service-bulletin and product-advisory tracking from manufacturers (Cameron / Schlumberger OneSubsea / Aker Solutions / NOV / GE Oil & Gas / Baker Hughes) is built into the equipment master." },
        { question: "Can the system handle NACE MR0175 sour-service compliance?", answer: "Yes. Every well, pipeline, vessel and downhole component is classified by H2S partial pressure, chloride concentration, pH and temperature, with material-selection matrix per ISO 15156-2 (carbon and low-alloy steels), ISO 15156-3 (CRAs) and ISO 15156-4 (other materials)." },
        { question: "How does FIFO crew rotation management work?", answer: "Oilfield-services crews routinely run 14/14, 21/21, 28/28 or 4-and-1 rotations from home base to remote rig site. Atlantis NDT ERP manages: home-base assignment (Houston, Aberdeen, Stavanger, Calgary, Dubai, Singapore, Mumbai), rotational pattern, mobilization/demobilization paperwork (visa, work permit, medical, drug-and-alcohol, BOSIET / FOET / HUET, T-BOSIET, MIST, OPITO certifications), per-rig site-induction status, and qualification-expiry crossover (an expiry mid-rotation is a hard mobilization-abort trigger that the system flags before crew dispatch)." },
        { question: "Does the system support PSA Norway and HSE UK offshore documentation?", answer: "Yes. UK Continental Shelf (UKCS) HSE-aligned documentation — PSSR 2000 written scheme of examination, KP3 (Key Programme 3) hydrocarbon-release tracking, COMAH Safety Case, HSE Pressure Systems online register, OPITO MIST tracking." },
        { question: "Can we manage well-integrity inspections across multiple operators?", answer: "Yes. Well-integrity management (WIM) is supported via the dedicated Subsea Well-Integrity Management (SWIM) workflow — annular pressure monitoring, downhole-pressure-gauge data trends, SCSSV (Subsurface Safety Valve) inspection records, SCSSSV leak-rate tracking, SCSSV lock-open events, tubing-integrity ultrasonic logs (electromagnetic thickness, electromagnetic-corrosion-evaluation logs), casing-integrity ultrasonic logs and barrier-status documentation per NORSOK D-010 / API RP 90 / API RP 96 / SCBHP. Each well is tracked separately with operator, regulator and barrier-philosophy context." },
        { question: "Does the system integrate with operator vendor portals like Aramco APQS and ADNOC Tejari?", answer: "Yes. Atlantis NDT ERP ships native integration with the dominant upstream vendor-qualification portals — Saudi Aramco APQS / VQIP, ADNOC Tejari, PETRONAS PCSB, Pertamina SKK Migas, ONGC e-procurement, Petrobras Petronect, Equinor Sub-Surface vendor portal, Achilles JQS (UK/Norway upstream), Achilles UVDB (UK utilities), ISNetworld (US), Avetta (US/global), PEC Premier (US oilfield) and Veriforce (US pipeline). Evidence packs (personnel qualifications, equipment calibration, ISO certifications, insurance certificates, HSE statistics) export directly to each portal's format requirements." },
      ]}
    />
  );
}
