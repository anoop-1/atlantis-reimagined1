import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management for Aerospace Quality Control"
      slug="project-management-for-aerospace-quality-control"
      appName="Project Management"
      industry="aerospace quality control"
      breadcrumbLabel="Project Mgmt — Aerospace QA"
      trustBadge="AS9100 / NAS 410 / NADCAP ready"
      metaDescription="Atlantis NDT ERP Project Management for aerospace QA — AS9100D project gates, NADCAP MAUP-cycle aware planning, NAS 410 Rev 5 currency-driven assignment, OEM written-practice routing for Boeing / Airbus / GE / P&W / RR / Safran. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Project Management for aerospace quality control companies — AS9100 Rev D project-gate workflows, NADCAP MAUP-cycle aware project planning, NAS 410 Rev 5 personnel-currency-driven task assignment, customer written-practice routing (Boeing, Airbus, Embraer, Lockheed, Northrop, GE Aviation, P&W, Rolls-Royce, Safran), and FAI / PFR / NCR workflow integration. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Project Management for Aerospace Quality Control inside Atlantis NDT ERP is the Odoo 18 Project + Timesheet + Quality module configured for the gate-driven, audit-anchored project rhythm of aerospace QA — AS9100 Rev D / EN 9100 stage-gate workflow (Customer requirements → APQP planning → Process validation → Production trial → Customer first article approval → Series production → Continual improvement), NADCAP MAUP audit-prep gate (24 months prior, evidence-pack accretion), FAA Part 145 / EASA Part-145 repair-station project gates, AS9145 APQP (Advanced Product Quality Planning) and PPAP (Production Part Approval Process) gates.",
        "Every project task is matched to qualified technicians by NAS 410 Rev 5 currency in the specific OEM written practice (Boeing BSS7039 UT Level II for 737 fuselage, Airbus AITM 6-1001 UT Level II for A350 wing, Embraer NE 27-001 UT Level II, GE Aviation GE C50TF UT Level II, P&W PWA-MCL UT Level II, Rolls-Royce RR MTSP UT Level II) — the system blocks assignment if the assignee lacks the OEM-specific endorsement. AS9102 First Article Inspection (FAI) sub-projects are integrated; AS9131 Nonconformance Documentation (8D, root-cause analysis, corrective-action) is structured.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Bangalore aerospace QA firm (30 technicians) running 14 concurrent NADCAP MAUP audit-prep projects cut audit-prep slippage from 35% to under 5% via the gate-driven project workflow." },
        { useCase: "Use Case 2", body: "A Wichita airframe specialist (40 technicians) managing parallel Spirit AeroSystems, Boeing Wichita and Cessna Citation projects eliminated the recurring 'OEM written-practice mismatch' that caused 6 nonconformances per quarter." },
        { useCase: "Use Case 3", body: "A Connecticut engine MRO inspection firm (35 technicians) managing PW1000G / V2500 / CFM-LEAP shop-floor inspection projects reduced cycle time per engine from 11.2 days to 8.6 days via critical-path resource leveling." },
        { useCase: "Use Case 4", body: "A Toulouse Airbus / Safran supplier QA firm (22 technicians) tracking AS9102 FAI / AS9145 APQP / EASA Part-145 project gates eliminated 9 missed audit deadlines in 18 months." },
      ]}
      keyFeatures={[
        "AS9100 Rev D stage-gate project workflow",
        "NADCAP MAUP audit-prep evidence-pack accretion across 24-month cycle",
        "NAS 410 Rev 5 currency-driven task assignment",
        "OEM written-practice routing (Boeing BSS, Airbus AITM, GE/CFM, P&W PWA-MCL, RR MTSP)",
        "AS9102 First Article Inspection (FAI) sub-project workflow",
        "AS9145 APQP / PPAP gate workflow",
        "AS9131 nonconformance management (8D, root-cause, corrective-action)",
        "ITAR / EAR export-control project flagging",
        "Aircraft-program project segmentation (737 MAX, 787, A320neo, A350, F-35, F-15)",
        "Engine-program project segmentation (PW1000G, V2500, CFM56, LEAP, GE9X, Trent XWB)",
        "Critical-path scheduling with NAS 410 / NADCAP gate constraints",
        "Customer-rejection-rate gate (PRI eAuditNet customer rejection threshold)",
        "Mobile app for shop-floor capture (offline-capable, integrates with FAI / inspection workflows)",
      ]}
      integrations={[
        "Boeing D-PIM (FlightView, GoldCare) project-data sync",
        "Airbus Sphere AIRMAN / EREVOA project sync",
        "Embraer DiscoverFleet project portal",
        "GE Aviation iCheck supplier-quality project portal",
        "Pratt & Whitney Engine Network project portal",
        "Rolls-Royce SAP Ariba supplier project portal",
        "Safran SupplyOn project portal",
        "PRI eAuditNet / Cumulus NADCAP audit-prep evidence",
        "Net-Inspect supplier-quality project workflow",
        "Apriso / Plex Systems aerospace MES integration",
      ]}
      faqs={[
        { question: "Does the project module enforce AS9100 stage gates?", answer: "Yes. AS9100 Rev D project stage gates — customer requirements review, APQP planning, process validation per AS9145, production trial, customer FAI approval per AS9102, series production, continual improvement — are encoded as mandatory deliverable check-points. Tasks cannot advance past a gate without the deliverable being captured, reviewed and approved by the assigned authority (quality manager, customer focal, qualified technical lead)." },
        { question: "How does NADCAP MAUP audit-prep work?", answer: "NADCAP MAUP audit-prep is structured as a 24-month rolling project — evidence accretes monthly across personnel qualification (NAS 410 Rev 5 currency for every technician on the scope), procedure currency (NDT method procedures aligned to OEM/SOC requirements), equipment calibration certificates, customer-rejection-rate analysis, internal audit reports, management review minutes, training records, raw-material verification, sub-tier supplier surveillance. The PRI eAuditNet checklist is the project template." },
        { question: "Can the module route tasks by OEM written practice?", answer: "Yes. Every task carries the applicable OEM written-practice code — Boeing BSS7039 UT, Airbus AITM 6-1001 UT, Embraer NE 27-001, GE Aviation GE C50TF, Pratt & Whitney PWA-MCL, Rolls-Royce RR MTSP, Safran Aircraft Engines QA-04, Honeywell Aerospace QPS, Collins Aerospace SQR. Only technicians qualified to that exact OEM written practice can be assigned. A technician with generic NAS 410 Level II without the Boeing 7039 endorsement cannot pick up Boeing 7039-specific work — preventing the most common pre-audit nonconformance." },
        { question: "Does the platform handle AS9102 First Article Inspection?", answer: "Yes. AS9102 FAI — required for every aerospace part on first production, first manufacturing change, or first inspection process — is a sub-project type with the structured Form 1 (Part Accountability), Form 2 (Product Accountability — Materials, Special Processes, Functional Testing), Form 3 (Characteristic Accountability, Verification and Compatibility Evaluation) workflow. Per-characteristic verification status is tracked, and the AS9102 export goes directly to customer-portal upload." },
        { question: "How does the project module handle ITAR / EAR project constraints?", answer: "ITAR (International Traffic in Arms Regulations) and EAR (Export Administration Regulations) project flags propagate through every task. Only US-person technicians can be assigned to ITAR-restricted tasks; only export-license-current technicians can be assigned to EAR-restricted work. Customer-specific overlays (F-35 program restrictions, B-21 black-program restrictions, specific countries-of-concern restrictions) layer on top so the project enforces compliance without manual checks." },
        { question: "Can the platform track customer rejection rate at the project level?", answer: "Yes. Customer rejection rate per part-number / per inspection-method is tracked as a project-level KPI. When the rejection rate crosses an OEM-specific threshold (typically 0.5-2% for top-tier suppliers), the project workflow auto-creates a corrective-action sub-project per AS9131 with 8D, root-cause and corrective-action gates. The PRI eAuditNet audit-pack export includes the trend data." },
        { question: "Does the module support engine MRO project workflow?", answer: "Yes. Engine MRO inspection projects — borescope inspection of LP/HP turbine blades, FPI / MPI of compressor blades, ECT inspection of blade-disc dovetails, ZGlow rumblestrip inspection, hot-section blade refurbishment NDT — flow as gate-driven projects with shop-process variability tracking. The system integrates with P&W Engine Network, Rolls-Royce IntelligentEngine and GE Predix Aviation data streams." },
        { question: "Can projects be segmented by aircraft program?", answer: "Yes. Projects can be sliced by aircraft program (737 MAX, 787, A320neo, A350, A380, A220, E2 family, KC-390, Global 7500, Falcon 6X, Gulfstream G500/G600/G700), engine program (PW1000G, V2500, CFM56, CFM LEAP, GE90, GEnx, GE9X, Trent XWB, Trent 7000), or military program (F-35, F-15, F-16, F-18, F-22, B-21, B-52, KC-46, P-8, V-22) for capacity planning and resource allocation." },
      ]}
    />
  );
}
