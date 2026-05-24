import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementForMarineSurveyCompanies() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management for Marine Survey Companies"
      slug="project-management-for-marine-survey-companies"
      appName="Project Management"
      industry="marine survey companies"
      breadcrumbLabel="Project Mgmt — Marine"
      trustBadge="IACS / IMO / Lloyd's Register ready"
      metaDescription="Atlantis NDT ERP Project Management for marine survey firms — IACS class-society survey cycles, IMO convention milestones, IACS UR Z10 ESP plans, P&I damage-survey lifecycle, FPSO MIC programs. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Project Management for marine survey companies — IACS class-society survey cycles (Annual, Intermediate, Special, Continuous), IMO MARPOL / SOLAS / Load Line / MLC milestones, IACS UR Z10 Enhanced Survey Programme plans for bulkers and tankers, P&I damage-survey lifecycle, FPSO mooring-integrity-certification (MIC) programs, and IMO 2050 net-zero readiness assessments. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Project Management for Marine Survey Companies inside Atlantis NDT ERP is the Odoo 18 Project + Timesheet + Quality module configured for the survey-driven, class-society-cadenced project rhythm of maritime quality assurance — IACS class survey cycles (Annual Survey every 12 months, Intermediate Survey at 2.5 years, Special Survey at 5 years, Continuous Survey of Hull and Machinery in 5-year rotations), the Enhanced Survey Programme (ESP) for bulk carriers and oil tankers per IACS UR Z10 (close-up survey requirements scale with vessel age and tonnage), IMO MARPOL Annex VI EEXI / CII regulatory milestones (CII rating A-E annual evaluation since 2023), and SOLAS chapter II-1 / II-2 structural and fire-safety milestones.",
        "Newbuild survey projects span 12-36 months through yard-pre-construction (drawing approval), keel laying, block assembly, hull pre-erection, hydro testing, sea trials and final delivery — each gate carrying surveyor-day budgets, gate deliverables (drawing-approval letter, weld-test sign-off, hydro-test certificate, sea-trial report) and customer-class-society sign-off. P&I damage-survey projects run on much faster cadence (typically 24-hour mobilization to 5-day report). FPSO and MOPU MIC programs run 5-yearly with mooring-line inspection, ROV survey and dynamic positioning verification.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Singapore marine survey firm (45 surveyors) running 180 concurrent class-survey projects across LR, DNV, ABS, BV and ClassNK cut survey-cycle slippage from 22% to under 5%." },
        { useCase: "Use Case 2", body: "A Rotterdam P&I correspondent (12 surveyors) managing rapid-response damage-survey projects across 15 P&I Clubs cut instruction-to-final-report from 96 hours to 38." },
        { useCase: "Use Case 3", body: "A Houston Gulf-coast marine survey firm (22 surveyors) supporting FPSO mooring-integrity-certification at Petrobras pre-salt FPSOs ran parallel projects without ROV-vessel conflict." },
        { useCase: "Use Case 4", body: "A Mumbai marine survey contractor (18 surveyors) managing IACS UR Z10 ESP close-up surveys on aging bulkers tracked compartment-by-compartment close-up examination — eliminated 7 scope-overlooked findings per audit cycle." },
      ]}
      keyFeatures={[
        "IACS class-survey cycle workflow (Annual, Intermediate, Special, Continuous)",
        "IACS UR Z10 ESP close-up survey scope per compartment per vessel age",
        "IMO MARPOL Annex VI EEXI / CII / SEEMP milestone tracking",
        "P&I damage-survey rapid-response project type (24-hour mobilization SLA)",
        "Newbuild survey project type (drawing approval → keel lay → delivery gates)",
        "FPSO / MOPU MIC (Mooring Integrity Certification) 5-year cycle",
        "Conversion / re-classification project workflow",
        "Hong Kong Convention / EU SRR ship-recycling survey project type",
        "Class-society parallel project routing (dual class management)",
        "Flag-state inspection-cycle awareness (Paris MoU, Tokyo MoU, USCG, AMSA)",
        "P&I Club / insurance-syndicate billing-route per project",
        "Multi-currency project pricing (USD, EUR, GBP, SGD, JPY, KRW)",
        "Mobile app for shipboard surveyor capture (offline-capable, GPS + photo)",
      ]}
      integrations={[
        "Lloyd's Register OneOcean (Class Direct, ShipRight) project sync",
        "DNV Veracity / Survey Status project sync",
        "ABS Eagle.Engineering / ABS Nautical Systems project sync",
        "Bureau Veritas Veristar project sync",
        "ClassNK NK-SHIPS project portal",
        "IACS recognised-organisation data exchange",
        "Marine Traffic / AIS Live API for vessel-position-driven mobilization",
        "Equasis port-state-control inspection history",
        "IMO GISIS (Global Integrated Shipping Information System)",
        "IG P&I Clubs correspondent network instruction inbox",
      ]}
      faqs={[
        { question: "Does the project module support IACS class-survey cycles?", answer: "Yes. IACS class survey cycles — Annual Survey every 12 months, Intermediate Survey at the 2nd / 3rd anniversary, Special Survey at the 5th anniversary, Continuous Survey of Machinery (CSM) and Continuous Survey of Hull (CSH) in 5-year rotations — are encoded as automated project templates per vessel. The system uses the vessel's keel-laying date / build date / last special survey date to forecast the next survey window 18 months ahead." },
        { question: "How does the module handle IACS UR Z10 Enhanced Survey Programme?", answer: "Yes. IACS Unified Requirement Z10 (Enhanced Survey Programme for Bulk Carriers and Oil Tankers) requires close-up survey of specific compartments scaling with vessel age and tonnage — at the 1st Special Survey, ~5% of cargo-hold longitudinal members; at the 2nd Special Survey, ~50%; at the 3rd Special Survey, ~100%. Top-side tanks, hopper tanks, double-bottom tanks all carry similar age-scaled close-up requirements. The project module loads the correct scope per vessel age." },
        { question: "Can the platform handle IMO MARPOL Annex VI EEXI / CII milestones?", answer: "Yes. MARPOL Annex VI Energy Efficiency Existing Ship Index (EEXI) — mandatory since 1 January 2023 for all existing vessels — and Carbon Intensity Indicator (CII) annual rating (A, B, C, D, E) are tracked as recurring survey/verification projects. Vessels rated D for three consecutive years or E in any single year must implement a corrective Ship Energy Efficiency Management Plan (SEEMP) — these are tracked as remediation projects." },
        { question: "Does the project module support newbuild survey lifecycle?", answer: "Yes. Newbuild survey projects span 12-36 months — from drawing approval, through keel laying, block assembly, hull pre-erection, hydro testing, sea trials, gas trials (for LNG / LPG carriers), and final delivery. Each gate carries surveyor-day budgets, gate deliverables (drawing-approval letter, weld-test sign-off, hydro-test certificate, sea-trial report) and customer-class-society sign-off. The system handles parallel newbuild contracts for major orderers (Maersk, MSC, Evergreen, ONE) at major yards (HHI, SHI, DSME, Imabari, Mitsubishi)." },
        { question: "How does the module handle P&I damage-survey rapid response?", answer: "P&I damage-survey projects are a separate rapid-response project type with 24-hour SLA mobilization, 5-day report turnaround. The project workflow captures P&I Club instruction, vessel current position from AIS, port-of-call coordination, surveyor mobilization, on-board damage assessment, repair-cost estimation, and final report submission to the P&I Club correspondent network." },
        { question: "Can the platform track FPSO MIC programs?", answer: "Yes. FPSO / MOPU / FSO Mooring Integrity Certification (MIC) is a 5-year project cycle — mooring-line inspection via ROV (rope segment, chain segment, sheathing, link inspections), riser inspection, turret-bearing inspection, dynamic positioning verification, hawser inspection on disconnectable systems. Class-society-specific MIC requirements (ABS, DNV, LR offshore divisions) are encoded as project templates." },
        { question: "Does the module support Hong Kong Convention / EU SRR ship recycling?", answer: "Yes. The Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships (in force June 2025) and the EU Ship Recycling Regulation (EU 1257/2013) require Initial Survey for Inventory of Hazardous Materials (IHM), Renewal Survey at every Special Survey, and Final Survey before recycling. These are tracked as a dedicated project type with the IHM compilation workflow (Part I/II/III)." },
        { question: "How does the module handle dual-class management?", answer: "Vessels under dual class — common for newbuild orderers seeking parallel approval (e.g. LR + ABS, DNV + ClassNK, BV + LR) — are managed as parallel project streams sharing the vessel master record but with separate class-society deliverables, billing and surveyor-assignment rules. Conflicts (one surveyor double-booked across both classes for the same window) are flagged automatically." },
      ]}
    />
  );
}
