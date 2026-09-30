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
      metaDescription="Atlantis NDT ERP Project Management for aerospace QA — AS9100D project gates, NADCAP MAUP-cycle aware planning, NAS 410 Rev 5 currency-driven assignment, OEM written-practice routing for Boeing / Airbus / GE / P&W / RR / Safran. Quote on request."
      heroBody="Part of the all-apps-included subscription."
      whatItIs={[
        "Project Management for Aerospace Quality Control inside Atlantis NDT ERP is the Atlantis ERP Project + Timesheet + Quality module configured for the gate-driven, audit-anchored project rhythm of aerospace QA — AS9100 Rev D / EN 9100 stage-gate workflow (Customer requirements → APQP planning → Process validation → Production trial → Customer first article approval → Series production → Continual improvement), NADCAP MAUP audit-prep gate (24 months prior, evidence-pack accretion), FAA Part 145 / EASA Part-145 repair-station project gates, AS9145 APQP (Advanced Product Quality Planning) and PPAP (Production Part Approval Process) gates.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "Example: a Bangalore aerospace QA firm runs NADCAP audit preparation as a project, with tasks, owners and due dates for each area of the audit." },
        { useCase: "Use Case 2", body: "Example: a Wichita airframe shop records the customer written practice and procedure references on each project task, so crews work to the right OEM requirements." },
        { useCase: "Use Case 3", body: "Example: a Connecticut engine MRO inspection firm tracks each engine inspection as a project, with a task per component and the result, indications and defect counts recorded." },
        { useCase: "Use Case 4", body: "Example: a Toulouse supplier QA firm keeps first-article and audit deadlines in the shared calendar, linked to the projects they belong to." },
      ]}
      keyFeatures={[
        "AS9100 Rev D stage-gate project workflow",
        "NADCAP MAUP audit-prep evidence-pack accretion across 24-month cycle",
        "NAS 410 Rev 5 currency-driven task assignment",
        "OEM written-practice routing (Boeing BSS, Airbus AITM, GE/CFM, P&W PWA-MCL, RR MTSP)",
        "AS9102 First Article Inspection (FAI) sub-project workflow",
        "AS9145 APQP / PPAP gate workflow",
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
        "Safran SupplyOn project portal",
        "PRI eAuditNet / Cumulus NADCAP audit-prep evidence",
        "Net-Inspect supplier-quality project workflow",
        "Apriso / Plex Systems aerospace MES integration",
      ]}
      faqs={[
        { question: "Does the project module enforce AS9100 stage gates?", answer: "Yes. AS9100 Rev D project stage gates — customer requirements review, APQP planning, process validation per AS9145, production trial, customer FAI approval per AS9102, series production, continual improvement — are encoded as mandatory deliverable check-points. Tasks cannot advance past a gate without the deliverable being captured, reviewed and approved by the assigned authority (quality manager, customer focal, qualified technical lead)." },
        { question: "How does NADCAP MAUP audit-prep work?", answer: "NADCAP MAUP audit-prep is structured as a 24-month rolling project — evidence accretes monthly across personnel qualification (NAS 410 Rev 5 currency for every technician on the scope), procedure currency (NDT method procedures aligned to OEM/SOC requirements), equipment calibration certificates, customer-rejection-rate analysis, internal audit reports, management review minutes, training records, raw-material verification, sub-tier supplier surveillance. The PRI eAuditNet checklist is the project template." },
        { question: "Can the module route tasks by OEM written practice?", answer: "Yes. Every task carries the applicable OEM written-practice code — Boeing BSS7039 UT, Airbus AITM 6-1001 UT, Embraer NE 27-001, GE Aviation GE C50TF, Pratt & Whitney PWA-MCL, Rolls-Royce RR MTSP, Safran Aircraft Engines QA-04, Honeywell Aerospace QPS, Collins Aerospace SQR. Only technicians qualified to that exact OEM written practice can be assigned." },
        { question: "Does the platform handle AS9102 First Article Inspection?", answer: "Yes. AS9102 FAI — required for every aerospace part on first production, first manufacturing change, or first inspection process — is a sub-project type with the structured Form 1 (Part Accountability), Form 2 (Product Accountability — Materials, Special Processes, Functional Testing), Form 3 (Characteristic Accountability, Verification and Compatibility Evaluation) workflow. Per-characteristic verification status is tracked, and the AS9102 export goes directly to customer-portal upload." },
        { question: "How does the project module handle ITAR / EAR project constraints?", answer: "ITAR (International Traffic in Arms Regulations) and EAR (Export Administration Regulations) project flags propagate through every task. Only US-person technicians can be assigned to ITAR-restricted tasks; only export-license-current technicians can be assigned to EAR-restricted work. Customer-specific overlays (F-35 program restrictions, B-21 black-program restrictions, specific countries-of-concern restrictions) layer on top so the project enforces compliance without manual checks." },
        { question: "Can the platform track customer rejection rate at the project level?", answer: "Yes. Customer rejection rate per part-number / per inspection-method is tracked as a project-level KPI. When the rejection rate crosses an OEM-specific threshold (typically 0.5-2% for top-tier suppliers), the project workflow auto-creates a corrective-action sub-project per AS9131 with 8D, root-cause and corrective-action gates. The PRI eAuditNet audit-pack export includes the trend data." },
        { question: "Does the module support engine MRO project workflow?", answer: "Yes. Engine MRO inspection projects — borescope inspection of LP/HP turbine blades, FPI / MPI of compressor blades, ECT inspection of blade-disc dovetails, ZGlow rumblestrip inspection, hot-section blade refurbishment NDT — flow as gate-driven projects with shop-process variability tracking. The system integrates with P&W Engine Network, Rolls-Royce IntelligentEngine and GE Predix Aviation data streams." },
        { question: "Can projects be segmented by aircraft program?", answer: "Yes. Projects can be sliced by aircraft program (737 MAX, 787, A320neo, A350, A380, A220, E2 family, KC-390, Global 7500, Falcon 6X, Gulfstream G500/G600/G700), engine program (PW1000G, V2500, CFM56, CFM LEAP, GE90, GEnx, GE9X, Trent XWB, Trent 7000), or military program (F-35, F-15, F-16, F-18, F-22, B-21, B-52, KC-46, P-8, V-22) for capacity planning and resource allocation." },
      ]}
    />
  );
}
