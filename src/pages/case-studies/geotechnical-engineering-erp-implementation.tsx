import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function GeotechnicalEngineeringErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="geotechnical-engineering"
      industryName="Geotechnical Engineering"
      title="Site Investigation Geotechnical Firm — Atlantis NDT ERP Implementation Case Study"
      metaDescription="Site investigation geotechnical engineering firm on a major infrastructure project. AGS data format, multi-rig borehole + CPT operations, full ASTM / EN ISO lab scope. How Atlantis NDT ERP linked field, lab, and reporting in a unified workflow."
      companyDescriptor="Mid-size geotechnical engineering and site investigation firm engaged on a regional infrastructure project (multi-mile highway / rail corridor). Active scope: 6 rigs (drilling + CPT), an in-house geotechnical laboratory with full ASTM and EN ISO scope, and a senior engineering team producing factual + interpretive reports per UK / US / AGS data standards. ~28 field, ~14 lab, ~10 engineering and admin staff. Anonymized under MNDA."
      region="US / UK dual-office"
      companySize="~52 staff"
      ctaMailSubject="Demo — Atlantis NDT ERP for geotechnical engineering firms"
      challenge={
        <>
          <p>
            Geotechnical site investigation has a unique workflow signature. The field side
            captures borehole logs, CPT data, piezometer installations, in-situ tests (SPT, vane,
            pressuremeter), and sample collection — typically into a mix of paper logs, ruggedised
            field tablets, and proprietary CPT logging systems. The samples flow to the lab where
            ASTM (USA) or EN ISO (UK / EU) tests are performed (Atterberg limits, particle size,
            triaxial, oedometer, CBR, direct shear, permeability, chemical suite). Engineering
            then synthesises field + lab into a factual report (the AGS data delivery, where in
            use), an interpretive report, and a project-specific design parameters document. The
            firm under study was good at the engineering output but the back-office was struggling
            to keep up with the project's scale.
          </p>
          <p>
            AGS (Association of Geotechnical and Geoenvironmental Specialists) data format
            handling was the single largest pain. Many of the firm's UK clients required AGS4 or
            AGS4.1 data submissions alongside the human-readable factual report. The firm
            assembled AGS submissions by exporting from each field and lab tool, normalising in
            Python scripts maintained by a single senior engineer, validating against the AGS
            transfer format, and submitting. The submissions were technically correct but the
            assembly time was significant (typically 3-5 engineer-days per submission) and the
            tooling depended on the senior engineer's availability. A submission backlog had built
            up during 2025.
          </p>
          <p>
            The second concern was field-lab-engineering data continuity. A borehole log captured
            in the field cited samples by location, depth, and a field-assigned identifier. The
            lab received samples and assigned its own lab identifiers. Engineering pulled both
            and joined them in Excel during report production. The join was error-prone — sample
            identifier mismatches required manual reconciliation, and several borderline cases per
            project would surface during senior-engineer review. The errors did not reach the
            client but the senior-engineer review time was a recurring cost.
          </p>
          <p>
            The third pressure was project budget and time tracking. Each project carried a defined
            scope of investigation (number of boreholes, number of CPTs, number of lab tests by
            type), a defined budget, and a defined time-band. Engineering and field activity time
            was tracked in a separate time-and-billing system that did not link to the project's
            technical progress. The project manager could see hours and could see borehole counts,
            but joining them meaningfully required end-of-week manual work. Cost over-runs surfaced
            late.
          </p>
          <p>
            The fourth concern was ASTM and EN ISO lab procedure version control. The lab held
            roughly 80 distinct test procedures aligned to ASTM and EN ISO standards. Standards
            update on roughly 5-7 year cycles; the lab's procedure library had drifted on a small
            number of standards since the last formal review. None of the drift was material to
            test results but the firm's UKAS-equivalent quality audit had noted the drift as an
            improvement area.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a two-month evaluation against a geotechnical-
            specific data management platform (rejected because it covered the field and lab data
            sides but did not represent the project, time, NCR, and certification workflow), a
            generic project-based ERP (rejected because it had no domain content), and the status
            quo with custom scripts (rejected on key-person dependence). Atlantis NDT ERP won
            because the project management module modelled the geotechnical project as a multi-
            scope investigation, the work-order module supported field and lab activities as
            structured records (with sample-level traceability through the lifecycle), the
            document-control module supported ASTM / EN ISO procedure version control, and the
            audit-export workflow produced an AGS-shaped data export as configuration.
          </p>
          <p>
            Phase one scope: project management for active projects, work-order management
            (field activities + lab activities), document control for procedures and the QMS,
            calibration management for lab and field equipment, and the audit / NCR module.
            Customer portal was included for the infrastructure project's owner who had requested
            real-time investigation progress visibility. Certification tracking was added in a
            narrow scope for the field crew (driller certifications, CPT operator certifications,
            HSE certifications).
          </p>
          <p>
            The single-system field-lab-engineering data model was the highest-leverage decision.
            Each sample carried a single canonical identifier through field capture, lab receipt,
            lab testing, engineering review, and report inclusion. The previous identifier
            translation step disappeared. Engineering review focused on technical interpretation
            rather than data-join cleanup.
          </p>
          <p>
            AGS export was configured as a project-level audit-export with the AGS4 / AGS4.1
            structure preconfigured. The previous 3-5-day assembly process became a 1-2 hour
            review-and-submit. The Python scripts remain in the senior engineer's toolkit for
            edge-case validation but are no longer the primary assembly path.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Two days in each office (US + UK), one day on a live field operation, two days remote. Captured the project structure, the field log formats, the lab procedure library, the AGS submission process, and the time-and-billing integration. Output: a sample-traceability spec, an AGS export configuration spec, a procedure-migration plan, and a phase-one scope spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated 18 active projects, 28 months of borehole and CPT data, 18 months of lab test data, the 80 ASTM / EN ISO procedure documents (with a quality-driven review and update of the 6 drifted procedures during migration), the field-crew certification register, and the lab equipment calibration register. Configured AGS4 / AGS4.1 export." },
        { phase: "Week 7-8: Parallel-run", detail: "Two active projects ran in parallel. Daily variance review with the senior engineering team. Caught and fixed: 8 sample-traceability mapping issues (mostly historical projects with non-standard field identifier conventions), 4 lab procedure parameter issues, 2 AGS export structural issues for a particular sub-tab not used in most submissions, and a customer-portal access-control issue for the infrastructure project owner." },
        { phase: "Week 9-12: Go-live & training", detail: "Legacy data tools and the Python AGS scripts retired (as primary path) at end of week 9. Five training cohorts: drillers and CPT operators (1 day, on-site at the largest active project), lab technicians (1 day), engineering team (1 day), project managers (1 day), customer portal handover with the infrastructure project owner (half day). Hyper-care for six weeks." },
      ]}
      outcomes={[
        { metric: "AGS submission assembly", before: "3-5 engineer-days per submission", after: "1-2 hours (review-and-submit)" },
        { metric: "Sample-traceability data joins", before: "Manual Excel, error-prone", after: "Single canonical identifier through lifecycle" },
        { metric: "Project budget vs technical progress visibility", before: "End-of-week manual join", after: "Real-time dashboard" },
        { metric: "ASTM / EN ISO procedure drift", before: "6 procedures drifted from current standard", after: "All current, change-control workflow in place" },
        { metric: "AGS submission backlog clearance", before: "~14 submissions backlogged", after: "Backlog cleared within first 8 weeks of go-live" },
        { metric: "Field-to-report cycle time (typical project)", before: "10-14 weeks", after: "6-9 weeks" },
      ]}
      lessonsLearned={[
        "Procedure-drift review during migration was the most valuable hidden deliverable. The migration team had originally planned to migrate procedures as-is; the lab manager treated the migration as an opportunity to align with current ASTM and EN ISO editions. Six procedures were updated, with the work documented in a change-control register that the next audit specifically commented on. We now build procedure-currency review into geotechnical migrations.",
        "AGS4.1 export configuration was harder than expected. The AGS transfer format has many optional sub-tabs and the firm's submissions varied by client. Three weeks of senior engineer time were committed to capturing the variations. We now budget +50% on AGS export configuration for firms with diverse client portfolios.",
        "Field crew adoption depended heavily on the ruggedised tablet selection. The first tablet specified by IT did not survive a borehole site environment (drilling fluid spray + sub-freezing temperatures). The second tablet specification (higher IP rating + extended operating temperature) worked. Field hardware decisions are not procurement-only decisions.",
        "Sample-traceability migration surfaced a small but real proportion of historical projects (less than 5%) where the original field identifiers were ambiguous. The migration team flagged each ambiguous case and the senior engineering team made judgement calls on each. None affected delivered reports but the exercise was educational about the legacy data quality.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add the corrosion-tracking / RBI module's lite variant for chemistry-
            and-contamination tracking on environmental geotechnical projects, deepen the customer
            portal for the infrastructure project owner, and integrate the firm's existing CPT
            logging systems directly so that field data flows in real time rather than via end-of-
            shift export. The next major project award is the proof-point.
          </p>
          <p>
            Phase three (2027) will explore the asset-management module for the firm's owned
            rigs, CPT trucks, and lab equipment as a structured asset register with calibration
            and maintenance lifecycle. The firm's owned fleet represents a meaningful capital
            base and current tracking is light.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does Atlantis NDT ERP produce AGS4 / AGS4.1 data submissions?",
          answer: "Yes. The audit-export workflow produces an AGS4 or AGS4.1 transfer file on demand for any project. The structure is configurable per client (which optional sub-tabs are included). The senior engineer's previous role of script-driven assembly becomes one of review-and-submit, with the Python scripts retained for edge-case validation.",
        },
        {
          question: "How does sample-traceability work from field to lab to report?",
          answer: "Each sample carries a single canonical identifier (typically project-borehole-depth-suffix) that persists through field capture, lab receipt, lab testing, engineering review, and report inclusion. The previous field-to-lab identifier translation step is eliminated. The lab still uses its internal workflow identifiers but they are linked rather than substituted, preserving the audit trail.",
        },
        {
          question: "Can the system support both ASTM (USA) and EN ISO (UK / EU) procedure libraries simultaneously?",
          answer: "Yes. Each lab procedure is tagged by parent standard (ASTM, EN ISO, BS, AASHTO) and the procedure library supports both libraries in parallel. Standards-currency change control fires alerts when a parent standard's revision date passes, surfacing procedures that may need review. This addresses the procedure-drift concern that surfaced at the firm's quality audit.",
        },
        {
          question: "Does the system integrate with our CPT logging systems?",
          answer: "Yes. The system ships with importers for the major CPT logging system formats (Vertek, Geomil, A.P. van den Berg, Pagani) and additional systems are added as one-week implementation work using sample files. The typical pattern is for CPT data to flow into the system as the operator returns from a CPT shift; real-time streaming is available for operators with cellular coverage at site.",
        },
        {
          question: "How is project budget vs technical progress visibility delivered?",
          answer: "The project module joins time-and-cost data (from the time-and-billing integration) with technical progress data (boreholes complete, CPTs complete, lab tests complete, reports drafted) into a single project dashboard. Budget over-runs are visible against scope as they emerge rather than at end-of-week reconciliation. The project manager sees the full picture in one view.",
        },
      ]}
      related={[
        { slug: "environmental-testing-labs", label: "ISO 17025 Environmental Testing Lab" },
        { slug: "construction-quality-assurance", label: "EPC Construction QA Contractor" },
        { slug: "metrology-laboratories", label: "Multi-Discipline Metrology Laboratory" },
      ]}
    />
  );
}
