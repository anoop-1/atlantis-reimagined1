import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementForCalibrationLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management for Calibration Laboratories"
      slug="project-management-for-calibration-laboratories"
      appName="Project Management"
      industry="calibration laboratories"
      breadcrumbLabel="Project Mgmt — Cal Labs"
      trustBadge="ISO/IEC 17025 / ILAC MRA ready"
      metaDescription="Atlantis NDT ERP Project Management for ISO/IEC 17025 cal labs — scope-of-accreditation gates, mobile on-site cal-van campaigns, multi-instrument-fleet projects, NMI ship-out scheduling, ILAC MRA-aware deliverables. Flat regional pricing."
      heroBody="Atlantis NDT ERP Project Management for ISO/IEC 17025 calibration laboratories — scope-of-accreditation gates per project, mobile on-site cal-van campaign workflows, multi-instrument-fleet project structures, NMI (NIST/NPL/PTB) ship-out scheduling, and ILAC MRA-aware deliverable routing. Part of the all-apps-included subscription."
      whatItIs={[
        "Project Management for Calibration Laboratories inside Atlantis NDT ERP is the Odoo 18 Project + Timesheet + Quality module configured for the unique project structures of accredited calibration work — large client-fleet recurring projects (e.g. a refinery with 800 pressure gauges, 200 temperature transmitters, 150 flow meters on a 12-month rolling re-cal schedule), mobile on-site cal-van campaigns (refinery turnaround support for 200+ instruments in a 5-day window), NMI ship-out projects (primary-standard re-calibration logistics including customs and dangerous-goods classification), and high-uncertainty / R&D calibration projects (development of new accredited scope items).",
        "Every project task is gated by scope-of-accreditation — when a task requires calibration of a 0–100 MPa pressure gauge with target uncertainty 0.02%, the project module checks that the lab is currently accredited for that parameter / range / uncertainty combination and that the assigned metrologist holds the relevant competency. Decision Rules per ISO/IEC 17025:2017 §7.8.6 are stored per project per customer.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston cal lab (15 metrologists) running 23 concurrent refinery turnaround mobile-cal-van campaigns cut campaign-overrun from 28% to under 4% via critical-path scheduling." },
        { useCase: "Use Case 2", body: "A Singapore SAC-SINGLAS cal lab (18 metrologists) tracking 1,400 instruments across 23 customer accounts cut on-time recall slippage from 33% to under 6% with project-driven recall planning." },
        { useCase: "Use Case 3", body: "A Mumbai NABL-accredited cal lab (8 metrologists) supporting Bharat Forge supplier audits scheduled NMI ship-outs (NPL UK, NIST USA) without primary-standard downtime conflicts — eliminated 3 customer recalls per year caused by primary-standard unavailability." },
        { useCase: "Use Case 4", body: "A Dubai EIAC-accredited cal lab (10 metrologists) running on-site cal-van campaigns at ADNOC offshore platforms tracked van-utilization-vs-margin in real time — improved campaign margin from 18% to 31%." },
      ]}
      keyFeatures={[
        "Scope-of-accreditation gate per project task (parameter-range-uncertainty quad)",
        "Mobile on-site cal-van campaign project type",
        "Multi-instrument-fleet client-recurring project structure",
        "NMI ship-out logistics workflow (customs, dangerous-goods, insurance)",
        "Primary-standard downtime conflict detection",
        "Decision Rule library per customer per instrument class",
        "Uncertainty-budget review gate per project deliverable",
        "ILAC MRA-recognized accreditation-body filter per customer requirement",
        "Reference-material (CRM) selection gate (ISO 17034 expiry compliant)",
        "PT / ILC participation project tracking",
        "Customer recall scheduling driven by instrument-interval forecast",
        "Multi-currency project pricing (USD, GBP, EUR, AED, SAR, INR, SGD)",
        "Mobile app for on-site metrologist capture (offline-capable)",
      ]}
      integrations={[
        "Beamex CMX / LOGiCAL project-data exchange",
        "Fluke MET/TEAM uncertainty data integration",
        "Crystal Engineering 30-Series / nVision project data",
        "Druck DPI 620 / 620G genii project data",
        "Additel CMX project data",
        "Indysoft GAGEpack instrument-management project sync",
        "ProCalV5 / Prime Technologies calibration project records",
        "NIST primary-standard re-cal scheduling integration",
        "NPL primary-standard re-cal scheduling integration",
        "ANAB / UKAS / EA-MRA scope directory project filter",
      ]}
      faqs={[
        { question: "Does the project module enforce scope of accreditation?", answer: "Yes. Every task in every project is constrained by the lab's current ISO/IEC 17025:2017 scope of accreditation. When a task requires calibration outside scope (a parameter, range, uncertainty, or matrix not in the current scope), the system warns and routes the task either to scope-expansion R&D (a separate project type) or to a sub-contract referral. This prevents the costly error of executing out-of-scope work and either losing the accreditation status or issuing unaccredited certificates." },
        { question: "How does the module handle mobile cal-van campaigns?", answer: "Mobile cal-van campaigns — common for refinery turnarounds, offshore platform support, manufacturing plant shutdowns — are a special project type. The project tracks van booking, metrologist assignment, instrument list, customer-site access requirements (PPE, safety induction, gate-pass currency, valid medical), and per-trip P&L. The system optimises the daily instrument-sequence to minimise pack-out and pack-in time." },
        { question: "Can the platform schedule NMI primary-standard ship-outs?", answer: "Yes. Primary-standard ship-outs to NIST, NPL, PTB, NIM, NMIJ, KRISS, BIPM, VSL, NRC and other NMIs are tracked as a logistics-heavy project type — customs paperwork, dangerous-goods classification (where applicable, e.g. radioactive standards), insurance coverage, secondary-standard upkeep during primary downtime, and conflict-detection so multiple primary standards don't go out simultaneously. The system warns 6 months ahead of scheduled NMI re-calibration so the logistics window can be planned." },
        { question: "Does the module track recurring client-fleet projects?", answer: "Yes. Recurring client-fleet projects — typical of long-term refinery / process-plant relationships — manage hundreds or thousands of customer instruments on cycle-based recall schedules. The project module forecasts capacity requirements 12 months out, smooths recall scheduling to avoid month-end peaks, and triggers customer-recall outreach 90/60/30 days before each instrument is due." },
        { question: "How does the module support PT / ILC participation?", answer: "Yes. Proficiency Testing / Inter-Laboratory Comparison participation (mandatory under ISO/IEC 17025:2017 §7.7.2) is tracked as a project type with bid-and-tender of PT/ILC schemes (APMP, EURAMET, COOMET, SIM, AFRIMETS regional metrology organisations), participation cost budgeting, internal scheduling around bench availability, and post-PT corrective-action workflow per ISO/IEC 17025 §7.10." },
        { question: "Can the platform track Decision Rule per project?", answer: "Yes. The Decision Rule per ISO/IEC 17025:2017 §7.8.6 — simple acceptance, conditional acceptance, guard band with k=2, statistical conformity — is stored per project per customer per instrument class. The conformity statement on the calibration certificate matches the Decision Rule applied, with appropriate documentation per ASME B89.7.3.1 / ILAC G8 / ISO 14253-1." },
        { question: "Does the module handle ILAC MRA cross-border requirements?", answer: "Yes. Customer-specific ILAC MRA requirements (multinational aerospace OEMs, automotive OEMs, pharma manufacturers requiring ILAC MRA-recognized accreditation) are stored as customer-policy filters. The project module warns when a customer requires ILAC MRA-recognized accreditation and the lab's primary accreditation body is not currently an ILAC MRA member — preventing inadvertent acceptance of non-compliant work." },
        { question: "How does the module support uncertainty-budget review gates?", answer: "Yes. Every project deliverable carries an uncertainty budget per JCGM 100:2008 (GUM) and EA-4/02 M:2022. The project workflow includes an uncertainty-budget review gate where the assigned metrologist's uncertainty budget is peer-reviewed by a senior metrologist before the certificate is issued — typical industry best practice for ISO/IEC 17025 §7.6.3 documented procedures." },
      ]}
    />
  );
}
