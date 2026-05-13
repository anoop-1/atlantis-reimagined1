import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function ConstructionQualityAssuranceErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="construction-quality-assurance"
      industryName="Construction Quality Assurance"
      title="EPC QA/QC Contractor — Atlantis NDT ERP Implementation Case Study"
      metaDescription="EPC quality-assurance contractor supporting a large refinery construction project. How Atlantis NDT ERP unified ITP execution, ASME / AWS / ASTM hold-points, and pre-commissioning data-pack assembly."
      companyDescriptor="EPC quality assurance and quality control contractor supporting a $1B-class refinery expansion project. Scope: ITP authoring and execution, multi-discipline witness inspection, vendor surveillance, hold-point management, mechanical-completion data-pack assembly. ~35 QA/QC inspectors at peak, 6 senior QA engineers, 4 document controllers. Anonymized under MNDA."
      region="US Gulf Coast (project site) + global vendor surveillance"
      companySize="~45 staff at peak"
      ctaMailSubject="Demo — Atlantis NDT ERP for EPC construction QA/QC contractors"
      challenge={
        <>
          <p>
            EPC construction QA work has an unusual operational signature: it is project-bounded
            (24-36 months), heavily document-driven, multi-discipline (civil, structural, piping,
            equipment, electrical, instrumentation), code-bound (ASME B31.3, ASME Section VIII,
            AWS D1.1, ASTM, NACE, NB-23), and exposed to four distinct audiences (the owner's
            engineering team, the engineering contractor's quality team, the construction
            contractor's quality team, and the regulator). The contractor had succeeded for two
            decades on the strength of senior individuals carrying institutional knowledge, but
            the current project had stretched the systems to a breaking point. Inspection Test
            Plans (ITPs) were authored in Word, hold-point status was tracked in shared
            spreadsheets that were sometimes a day or two behind reality, and the mechanical-
            completion data pack — typically several thousand pages per major equipment item —
            was assembled at the end of the project by a senior document controller working
            12-hour days for several weeks per system.
          </p>
          <p>
            ITP execution was the first major pain point. Each system or equipment item had an ITP
            with rows of activities (pressure test, NDE, dimensional inspection, paint inspection,
            instrument calibration, electrical inspection), each row carrying a hold-point or
            witness-point status and an evidence reference. The ITP was the operational backbone
            of the project. In practice, the contractor's QA inspectors annotated paper ITPs at
            site, the document controllers re-keyed the status into a master spreadsheet weekly,
            and any party asking "what is the current status of System X" was always working from
            stale data. Three notable instances during the project had involved hold-points
            cleared in the field but not visible in the master for several days, with the
            downstream activity (e.g., insulation install on a piping system pending hydrotest
            release) waiting on a status update.
          </p>
          <p>
            Vendor surveillance was the second pain. The project carried ~80 vendor surveillance
            scopes across rotating-equipment vendors, pressure-vessel fabricators, and electrical-
            equipment vendors in three continents. Each scope required QA inspectors to mobilise
            for vendor inspections, capture findings against the vendor's quality plan, raise NCRs
            where required, and feed status back to the project team. The travel and status
            workflow worked but was opaque to project leadership; identifying a specific
            surveillance NCR's status required emailing the assigned inspector.
          </p>
          <p>
            The third concern was the mechanical-completion data pack. Each system handover from
            construction to commissioning required a structured data pack covering MTRs, weld maps
            with NDE coverage, hydrotest records, calibration records, electrical megger results,
            paint inspection records, and final walk-down. The assembly was manual, late in the
            schedule, and a recurring source of commissioning-readiness slippage.
          </p>
          <p>
            The fourth concern was code-compliance recordkeeping. ASME B31.3, ASME Section VIII,
            AWS D1.1, and NACE all impose specific recordkeeping obligations on the QA contractor.
            The records existed but were spread across systems; assembling the code-compliance
            evidence pack for an owner audit was a multi-day effort.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a structured four-month evaluation against an
            EPC-construction-management platform (rejected because its QA module was a sub-system
            of construction management and did not represent inspection workflow at the depth
            needed), a dedicated turnover-management system (rejected because it covered data-pack
            assembly well but not ITP execution or vendor surveillance), and a custom build
            (rejected on lifecycle cost). Atlantis NDT ERP won because the work-order /
            project-management modules together modelled ITP rows as work orders with explicit
            hold-points and evidence linkage, the document control module supported the data-pack
            template structure, and the certification / vendor surveillance workflow was native.
          </p>
          <p>
            Phase one scope: project management for the active refinery project, work-order
            management with ITP-row support, document control for the project document set, the
            audit / NCR module for vendor surveillance, and certification tracking for the
            inspector workforce. Calibration management was added in a narrow scope (inspector-
            owned gauges only). Customer portal was included for the owner's quality team and the
            engineering contractor's quality team.
          </p>
          <p>
            The ITP-as-work-order configuration was the highest-leverage decision. Each ITP row
            became a discrete work order with: code reference (ASME B31.3 §345.5, ASME Section
            VIII UG-101, AWS D1.1 §6.10, etc.), responsible inspector, hold-point or witness-point
            level, evidence-required list (NDE report, calibration cert, photo, signature), and a
            status that updated in real time as the inspector worked. The master ITP view (still
            a familiar matrix layout for project leadership) was now driven by live data rather
            than weekly spreadsheet refresh.
          </p>
          <p>
            Vendor surveillance was modelled as a project-scoped sub-system with each vendor's
            quality plan represented as a structured ITP-equivalent. Findings, NCRs, and
            re-inspection events were tracked against the vendor's plan; status was visible to
            project leadership in real time, eliminating the previous email-driven status pull.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "One week on-site at the project, three days remote. Captured the ITP structure across disciplines, the vendor surveillance scope list, the data-pack template, the inspector roster, and the existing document-control workflow. Output: an ITP migration plan, a vendor surveillance configuration spec, a data-pack template spec, and a phase-one scope spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated ~140 active ITPs across all disciplines (~12,000 individual ITP rows), 24 months of NCR history, 80 vendor surveillance scopes, 35 inspector qualification records, and the data-pack template (~120 standard sections). Built the vendor surveillance project structure. Configured code-compliance evidence packs per ASME / AWS / NACE." },
        { phase: "Week 7-8: Parallel-run", detail: "Three live systems ran in parallel with both old and new tracking. Daily variance review with the senior QA engineers and document controllers. Caught and fixed: 14 ITP row mapping issues, 5 hold-point definition ambiguities (the contractor and the engineering contractor had different definitions for one specific witness level — surfaced and resolved with the engineering contractor), 3 vendor-surveillance scope misconfigurations, and a code-evidence pack ordering issue for ASME Section VIII vessels." },
        { phase: "Week 9-12: Go-live & training", detail: "Master spreadsheet retired at end of week 9. Five training cohorts: QA inspectors (1 day, twice — to catch all rotation schedules), senior QA engineers (1 day), document controllers (1 day), vendor surveillance inspectors (1 day, dial-in for travelling inspectors), customer portal handover with owner and engineering contractor (half day each). Hyper-care for eight weeks given the project criticality." },
      ]}
      outcomes={[
        { metric: "ITP status latency", before: "Several days (weekly spreadsheet refresh)", after: "Real-time" },
        { metric: "Vendor surveillance status retrieval", before: "Email-driven (hours-days)", after: "Real-time dashboard" },
        { metric: "Mechanical-completion data-pack assembly", before: "12-hour days x several weeks per system", after: "1-2 reviewer-days per system (assembled by system)" },
        { metric: "Hold-point clearance to downstream activity", before: "1-3 day status lag", after: "Same-shift visibility" },
        { metric: "Code-compliance evidence pack (owner audit)", before: "Multi-day assembly", after: "Under 1 hour (one-click + reviewer scan)" },
        { metric: "Internal NCR cycle time", before: "Variable, often >30 days", after: "Median 9 days, 90th percentile 18 days" },
      ]}
      lessonsLearned={[
        "Hold-point definition ambiguity between the contractor and the engineering contractor was the most valuable hidden discovery. Both parties had been operating with different interpretations of one witness level for over a year; surfacing it during parallel-run produced a one-day workshop and a documented clarification. The relationship strengthened. We now schedule a definition-alignment session as a first-week activity for any EPC QA implementation.",
        "Migrating 12,000 ITP rows from Word/Excel was the largest single data migration. The implementation team built a structured importer for the contractor's standard ITP format, but custom ITPs (~15% of the total) required manual entry. Three weeks of senior QA engineer time were committed to the manual portion. We now build budget for the manual share in the project plan.",
        "Vendor surveillance dashboard access for project leadership changed how leadership engaged with the QA function. Previously the QA director's weekly status meeting was a serial pull of information from each inspector; with the dashboard, leadership came to the meeting having already reviewed the data and the meeting time shifted to decisions. A genuine operational win.",
        "The customer-portal handover to the owner and the engineering contractor took longer than scoped — six weeks rather than the planned two — because both parties wanted formal acceptance of the portal's data-quality, access-control, and audit-trail capability before allowing project-team use. We now ship a customer-portal acceptance pack and schedule the acceptance window early.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two on this project will extend the data-pack template to cover all remaining
            systems, deepen the integration with the project's planning system (Primavera P6) for
            ITP-row to planned-activity linkage, and add the project's late-discovery construction
            NCRs into the same NCR / CAPA workflow. The mechanical-completion milestones across
            the remaining systems are the proof-point.
          </p>
          <p>
            Phase three (2027) will use the contractor's experience on this project as a template
            for the next major EPC project the contractor has secured. The system already supports
            multi-project tenancy and the contractor's per-project configuration model is now well
            established. The contractor expects a 50% reduction in EPC QA tooling setup time on
            future projects.
          </p>
        </>
      }
      faqs={[
        {
          question: "How does Atlantis NDT ERP support ITP execution on an EPC project?",
          answer: "Each ITP row is modelled as a discrete work order with code reference, hold-point or witness-point level, responsible inspector, evidence-required list, and live status. The familiar ITP matrix view is driven by real-time data rather than weekly spreadsheet refresh. Hold-point clearance is visible to downstream activities immediately, eliminating the typical lag between field clearance and master-spreadsheet update.",
        },
        {
          question: "Can the system handle vendor surveillance across multiple vendors and continents?",
          answer: "Yes. Each vendor surveillance scope is a project-scoped sub-system with the vendor's quality plan represented as structured activities. Findings, NCRs, re-inspection events, and qualification records are tracked against the vendor's plan. Status is visible to project leadership in real time. Mobile field clients work offline for travelling surveillance inspectors at vendor facilities without site Wi-Fi.",
        },
        {
          question: "How is mechanical-completion data-pack assembly automated?",
          answer: "Each system has a configured data-pack template (typically 80-150 standard sections). The system assembles the pack on demand by gathering MTRs, weld maps with NDE coverage, hydrotest records, calibration records, electrical megger results, paint inspection records, and final walk-down evidence already captured in the system. The senior document controller's previous role of assembling becomes one of reviewing.",
        },
        {
          question: "Does the system support multi-code recordkeeping (ASME B31.3, Section VIII, AWS D1.1, NACE)?",
          answer: "Yes. Each work order carries a code reference and the system enforces code-specific evidence requirements (e.g., ASME B31.3 hydrotest requires test pressure, hold time, gauge calibration, examination results per §345; AWS D1.1 visual inspection per §6.6; etc.). The audit-export workflow assembles a code-specific evidence pack on demand.",
        },
        {
          question: "Can the customer portal expose status to the owner and the engineering contractor simultaneously?",
          answer: "Yes. The portal supports multi-tenant audience-specific views. The owner sees their relevant scope; the engineering contractor sees the scope they manage; the construction contractor sees their scope. Access control is role-based and audit-trailed. The customer-portal acceptance process (data-quality, access-control, audit-trail) is supported by a portal-acceptance pack the implementation team provides.",
        },
      ]}
      related={[
        { slug: "welding-fabrication-shops", label: "ASME 'U' Stamp Fabrication Shop" },
        { slug: "industrial-coatings-inspection", label: "Industrial Coatings Inspection" },
        { slug: "geotechnical-engineering", label: "Geotechnical Engineering Firm" },
      ]}
    />
  );
}
