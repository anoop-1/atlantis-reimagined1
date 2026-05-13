import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function AerospaceQualityControlErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="aerospace-quality-control"
      industryName="Aerospace Quality Control & MRO"
      title="AS9100D / NAS-410 Aerospace NDT Shop — Atlantis NDT ERP Implementation Case Study"
      metaDescription="AS9100D-certified aerospace NDT shop, NAS-410 qualified workforce, Boeing + Airbus + Pratt & Whitney customer mix. How Atlantis NDT ERP linked NAS-410 qualification, customer-specific flow-down, and Nadcap audit prep."
      companyDescriptor="Aerospace NDT shop with AS9100D certification, NAS-410 qualified workforce, Nadcap NDT accreditation, and an active mix of Boeing, Airbus, Pratt & Whitney, Bombardier, and GE Aerospace customers. ~30 NAS-410 qualified inspectors, 3 Level III, 5 customer-quality engineers, 8 admin / QA staff. Anonymized under MNDA."
      region="US Pacific Northwest"
      companySize="~46 inspectors and engineers"
      ctaMailSubject="Demo — Atlantis NDT ERP for AS9100D / NAS-410 aerospace NDT shops"
      challenge={
        <>
          <p>
            The shop carried an unusually heavy customer-quality footprint for its size. Each of
            the five major aerospace customers imposed its own quality flow-down clauses on top of
            AS9100D: Boeing's D6-82479 (NDT requirements for Boeing structures), Airbus AIPS / AITM
            standards, Pratt &amp; Whitney's PWA processes, Bombardier's BDS standards, and GE
            Aerospace's S-400 / P-21 family. The shop's quality manual mapped each customer's
            requirements to internal procedures, but the day-to-day reality was that a given job
            could have three different customer-specific procedure references on its traveler and
            the inspector needed to know which procedure governed which exam. Procedure references
            were managed in a SharePoint document library that was technically controlled but
            functionally chaotic — the same procedure existed under different file names in two
            customer-specific folders.
          </p>
          <p>
            NAS-410 qualification under the shop's written practice was the second pressure point.
            NAS-410 rev 5 sets minimum requirements for NDT personnel qualification in aerospace,
            with method-specific eye-exam, training-hours, on-the-job experience, and examination
            requirements. Each inspector's NAS-410 record was a binder of paper plus a SharePoint
            file. Renewing an inspector's NAS-410 qualification required pulling the binder,
            checking the eye-exam dates, the recurrent training records, the proficiency exam
            results, and the Level III's annual review. The process worked but the recordkeeping
            had been flagged by the most recent Nadcap NDT audit (NADCAP AC7114) as needing
            improvement under §3.3.6 Personnel.
          </p>
          <p>
            Nadcap audit preparation was the third concern. Nadcap NDT (AC7114) audits every two
            years cover personnel qualification, written practice, procedure compliance, equipment
            calibration, technique sheets, and traceability. The shop's most recent audit had been
            successful but the senior NDT engineer had committed roughly four weeks of pre-audit
            preparation time to assemble the evidence pack. Some of that was unavoidable — the
            actual audit content — but a significant portion was simply gathering documents that
            should have been one click away.
          </p>
          <p>
            The fourth concern was technique sheet (TS) version control. NAS-410 and customer
            requirements demand a part-specific technique sheet that controls the actual exam
            (transducer, scan plan, sensitivity setting, reference standard, acceptance criteria).
            The shop's TS library had grown over fifteen years to roughly 1,800 documents. Tracking
            which TS revision was used to inspect which serial number on which date — a frequent
            customer-audit question — required the customer-quality engineer to dig through three
            sources. The risk was low but the time cost was real.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a structured five-month evaluation. Two of the
            three alternatives were aerospace-MRO-specific systems (rejected because they did not
            represent NAS-410 cleanly and treated NDT as a sub-process of MRO work), and one was a
            generic AS9100D-aligned ERP (rejected because its quality module did not represent
            customer-specific flow-down as configuration). Atlantis NDT ERP won because the
            certification-tracking module covered NAS-410 with method-specific scope as a first-
            class feature, the document-control module supported customer-specific flow-down as
            configuration rather than custom code, and the audit-management module produced a
            Nadcap-shaped evidence pack on demand.
          </p>
          <p>
            Phase one scope: certification and personnel qualification, document control with
            customer flow-down mapping, work-order management with traveler-level technique-sheet
            linkage, calibration management for the NDT equipment, audit management, and the
            quality / NCR module. The shop's existing MRP system (a major aerospace-specific ERP)
            stayed in place; Atlantis NDT ERP received work-order header data from MRP and pushed
            inspection-record summaries back, leaving MRP as the system of record for the
            production / commercial side.
          </p>
          <p>
            The customer-specific flow-down model was the single highest-leverage configuration.
            Each customer's flow-down clauses were captured as a set of references: this customer
            on this part family requires NAS-410 Level II minimum with method-specific eye-exam
            recency, requires this technique-sheet template, requires this acceptance criterion,
            and requires this customer-form output. When a job entered the system, the
            customer-quality engineer's previous manual cross-check was replaced by an automated
            check that surfaced any flow-down violation before the inspector started work.
          </p>
          <p>
            Technique sheet version control was reorganised around the customer-part-method
            combination rather than around the customer alone. Each TS now carries explicit links
            to the parts and methods it governs, with revision history tied to customer
            engineering approval where required. The 1,800 documents were reviewed during
            migration — a substantial effort, but one that surfaced 47 duplicate or
            no-longer-active TSs that were retired.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Three days on-site with the senior NDT engineer, customer-quality engineers, and quality manager. Captured the customer flow-down matrix, the NAS-410 personnel records, the TS library structure, and the MRP integration points. Output: a flow-down configuration spec, a TS migration plan, and a phase-one scope spec with explicit MRP boundaries." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated 30 NAS-410 personnel records with full qualification chains, 1,800 technique sheets (including the retirement of 47 duplicates / obsolete documents), 24 months of work-order and inspection history, the calibration register for ~180 NDT instruments, and the full customer flow-down matrix. Built the MRP bridge for work-order headers and inspection summaries." },
        { phase: "Week 7-8: Parallel-run", detail: "Four live customer programmes ran in parallel — one Boeing, one Airbus, one Pratt & Whitney, one Bombardier. Daily variance review with the customer-quality engineers. Caught and fixed: 6 customer flow-down misconfigurations, an eye-exam recurrence issue for one method (PT), a TS version-control issue for a part family where Boeing engineering had approved a revision the shop had not yet promoted, and an MRP-bridge data mapping issue for non-standard part numbers." },
        { phase: "Week 9-12: Go-live & training", detail: "Legacy SharePoint document control retired at end of week 9. Six training cohorts: NAS-410 inspectors (1 day in two sessions per shift), Level IIIs (1 day), customer-quality engineers (1 day per customer), QA office (1 day), production schedulers (half day). Hyper-care for eight weeks given the customer-audit exposure." },
      ]}
      outcomes={[
        { metric: "Customer flow-down compliance check", before: "Manual cross-check, ~30 min/job", after: "Automated, blocked at work-order release if non-compliant" },
        { metric: "TS version-in-use traceability", before: "3-source manual lookup", after: "Single-query lookup by part + serial + date" },
        { metric: "NAS-410 record retrieval per inspector", before: "10-20 min from binder + SharePoint", after: "Under 10 seconds in system" },
        { metric: "Nadcap audit prep time", before: "~4 senior-engineer weeks", after: "1 week (review, not assembly)" },
        { metric: "Customer audit findings (last 12 months)", before: "2-3 findings/audit (records-related)", after: "0 records-related findings" },
        { metric: "Duplicate / obsolete TSs in library", before: "~47 (estimated, surfaced at migration)", after: "0 (retired)" },
      ]}
      lessonsLearned={[
        "The TS library review took five weeks of NDT engineer time rather than the budgeted three. The library had genuine redundancy and ambiguity from fifteen years of accretion. The exercise was high value (the 47 retirements alone reduced audit surface area) but it was the single biggest line-item over-run in the project. We now plan +50% on TS library work for aerospace shops with libraries over 1,000 documents.",
        "Customer flow-down captures need formal customer review on go-live. We had the shop's interpretation of each customer's flow-down in the configuration, but two customers' supplier-quality engineers had small interpretive differences from the shop. Surfacing them produced minor configuration changes and a much stronger relationship with both customers. We now schedule a customer flow-down review session as part of go-live for aerospace shops.",
        "The MRP bridge added complexity but was the right call. Replacing the MRP would have been a 12-18 month parallel project on top of the QA-side work. The bridge took three weeks and delivered the integration we needed. We do not recommend MRP replacement for aerospace shops as part of a NAS-410 / NDT QA implementation.",
        "Inspector tablet adoption was faster than expected. Aerospace inspectors are generally process-oriented and welcomed the in-traveler TS linkage and technique guidance. The shop floor had been preparing the workforce for the transition for several months ahead of go-live, which helped.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add the asset-integrity module (the shop's owned production NDT
            equipment lifecycle), the corrosion / DPI baseline programme for an MRO contract the
            shop is bidding, and a deeper customer-portal capability for the two customers who
            have asked for direct visibility into in-process inspection status. The next Nadcap
            NDT audit cycle (late 2027) is the proof-point milestone.
          </p>
          <p>
            Phase three (2027) will explore the project-management module for the shop's emerging
            engineering-services business, which involves multi-month NDT programme development
            for new aerospace customers. The current work-order model is sufficient for the
            ongoing production work but does not represent multi-month programmes cleanly.
          </p>
        </>
      }
      faqs={[
        {
          question: "How does Atlantis NDT ERP support NAS-410 qualification recordkeeping?",
          answer: "Each inspector's record is structured per NAS-410 §6 (qualification requirements). The system captures training-hours by method, on-the-job experience hours, recurrent training, eye-exam (near-vision Snellen + Jaeger + colour discrimination per method) with method-specific recurrence intervals, written / practical / specific examination results, and the Level III's annual review. Renewal triggers fire at configurable windows (90/60/30/7 days) and the audit-export workflow produces a per-inspector NAS-410 evidence pack on demand.",
        },
        {
          question: "How is customer-specific flow-down (Boeing, Airbus, Pratt & Whitney, etc.) handled?",
          answer: "Each customer's flow-down is configured as a structured set of references applied to the relevant part families and methods. The customer-quality engineer's previous manual cross-check is replaced by an automated compliance check at work-order release. Non-compliant work orders are blocked before they reach the shop floor. Flow-down references include personnel-level minimum (e.g., NAS-410 Level II with current eye-exam), technique-sheet template, acceptance criterion reference, and customer-form output.",
        },
        {
          question: "Does the system replace our existing aerospace MRP / ERP?",
          answer: "No. The typical pattern is a one-way work-order header feed from MRP into Atlantis NDT ERP, with inspection-record summaries pushed back to MRP as configurable status updates. Atlantis NDT ERP owns the NDT / QA execution; MRP retains production / commercial / financial functions. The bridge is typically a three-week implementation effort.",
        },
        {
          question: "How does technique sheet version control work?",
          answer: "Each TS carries explicit links to the customer, part family, and method it governs, with revision history. When an inspection is performed, the system records the TS revision in force on that date — making the question 'which TS revision was used to inspect serial number X on date Y' a single query rather than a three-source manual lookup. Revisions can be tied to customer engineering approvals where customer flow-down requires it.",
        },
        {
          question: "Can the system produce a Nadcap NDT (AC7114) audit evidence pack on demand?",
          answer: "Yes. The audit-export workflow assembles the written practice in force on the audit date, the per-inspector NAS-410 records, the technique sheets used during the audit scope, the calibration records for the equipment used, the procedure approvals, and the NCR / CAPA records — as a single PDF in under a minute. The shop's pre-audit assembly time drops from weeks of senior-engineer effort to a review-only week.",
        },
      ]}
      related={[
        { slug: "metrology-laboratories", label: "Multi-Discipline Metrology Laboratory" },
        { slug: "calibration-laboratories", label: "ISO 17025 Calibration Laboratory" },
        { slug: "welding-fabrication-shops", label: "ASME 'U' Stamp Fabrication Shop" },
      ]}
    />
  );
}
