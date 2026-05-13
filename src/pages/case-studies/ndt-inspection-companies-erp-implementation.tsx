import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function NdtInspectionCompaniesErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="ndt-inspection-companies"
      industryName="NDT Inspection Companies"
      title="Gulf-Coast NDT Contractor — Atlantis NDT ERP Implementation Case Study"
      metaDescription="Mid-size Gulf-Coast NDT inspection contractor, 45 technicians, refinery turnaround work. How Atlantis NDT ERP cut report production by 70%, eliminated cert-expiry incidents, and survived first-time API 510 client audit."
      companyDescriptor="Mid-size Gulf-Coast NDT inspection contractor — 45 technicians, refinery turnaround support across the Houston Ship Channel, Beaumont, and Lake Charles. Approximate annual revenue band: $10M-$15M. Primary clients: two majors and three independent refiners. Anonymized under MNDA."
      region="Texas & Louisiana, USA"
      companySize="45 technicians, 4 office staff, 2 NDT Level III"
      ctaMailSubject="Demo — Atlantis NDT ERP for NDT inspection contractors"
      challenge={
        <>
          <p>
            By the time the company contacted Atlantis NDT they had grown past the point where the
            workflow that built them — three shared Excel workbooks, an Outlook calendar, and a
            QuickBooks file — could keep up with the scope of work. They had been added to the
            approved vendor list of two major refiners over the previous eighteen months, which
            tripled the volume of turnaround support hours and exposed every weakness in their
            back-office. The owner had stopped sleeping during turnarounds because the alternative
            was missing a hand-tagged probe calibration, a SAEP-1142 written-practice update, or an
            expired ASNT Level II vision test on the wrong job. Each of those would mean a hold-point
            failure and possibly removal from the vendor list.
          </p>
          <p>
            The proximate trigger was a near-miss during a 2025 Q4 catalytic reformer turnaround.
            A Level II UT technician was assigned to a high-energy piping circuit covered by the
            client's ASME Section V / B31.3 procedure, which required current eye-exam evidence
            within twelve months per SNT-TC-1A §8.4. The certification file showed a valid Jaeger
            J1 test, but the test had been administered fourteen months earlier; the assistant
            who maintained the spreadsheet had transcribed the date wrong. The client auditor
            caught it before any inspections were performed, but the contractor took the cost of
            re-mobilizing a replacement technician from Beaumont overnight and lost two days of
            billable work. Internally, the owner committed to replacing the spreadsheet system
            within the year.
          </p>
          <p>
            The second pain point was report production. Across the technician fleet they were
            producing somewhere between 280 and 360 inspection reports per week during turnaround
            peaks — UT thickness surveys, MT/PT exam records, RT shot lists, PAUT scan plans, and
            client-specific Section V reports for each operator's template. Reports were drafted
            on laptops at site, emailed to the office, reformatted by an admin into the operator's
            preferred template, and reviewed by a Level III before release. Average cycle time was
            48-72 hours from field execution to client delivery, with the Level III chain becoming
            the bottleneck during peaks. Several clients had requested 24-hour turnaround language
            in the next MSA cycle, which the contractor knew they could not meet with the existing
            workflow.
          </p>
          <p>
            The third pressure point was audit preparation. The major refiners had been
            increasing audit frequency — surveillance audits every six months instead of annually,
            and unannounced spot-checks on three occasions in 2025. Pulling an audit package
            (signed written practice, technician qualification matrix, calibration history,
            radiation safety records, last 12 months of NCRs) was an eighty-hour effort across two
            administrators. After the second unannounced audit the contractor was given a verbal
            warning that their document-retrieval time was on the edge of compliance with the
            client's QA-SP-002 supplier quality clause.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a four-way comparison against a generic field-service
            ERP (rejected because it modelled technicians as plumbers and could not represent
            method-specific scope), a CMMS aimed at end-user owner-operators (wrong direction — the
            contractor is the inspection supplier, not the asset owner), and a custom build on top
            of QuickBooks (estimated at 14 months and $180K with no NDT-domain content baked in).
            Atlantis NDT ERP won on three specific points: the certification module ships with
            ASNT SNT-TC-1A, ISO 9712, SAEP-1142, ADNOC ACS-01, and PCN schemes pre-loaded; the
            report module accepts operator-specific Section V templates as configuration rather
            than custom code; and the implementation team is staffed by Level IIIs who do not need
            to be taught what a written practice is.
          </p>
          <p>
            The selected scope was deliberately narrow. Four modules in phase one: certification
            tracking, work-order management, inspection scheduling, and calibration management.
            Asset integrity / RBI was held back to phase two — the contractor is not the asset
            owner and does not need an API 581 engine of its own. Corrosion trending and FFS
            screening were also deferred. The strategy was to deliver the loudest pain points first,
            prove value to the owner, and earn the budget for phase two before adding more surface
            area.
          </p>
          <p>
            Integration plan was minimal on purpose. QuickBooks Online stayed in place for AP/AR;
            the ERP pushed invoiceable work orders to QuickBooks via the standard connector.
            Microsoft 365 was kept for email and calendar; ERP appointment events were synced via
            the Microsoft Graph integration. Field laptops ran the Atlantis offline-capable mobile
            client because Gulf-Coast refinery tenancy frequently strips cellular coverage inside
            process units. The plan deliberately did not attempt a Microsoft Teams integration in
            phase one — that came later — to avoid scope creep.
          </p>
          <p>
            The most important configuration decision was the operator-specific report template
            library. Each of the five primary clients had a slightly different Section V report
            template, with that operator's logo, signature block, hold-point matrix, and
            preferred section ordering. Rather than treat templates as code, Atlantis NDT ERP's
            report module models each template as a configurable variant of a base SNT-TC-1A
            structure, with the operator-specific clauses overlaid. This is the workflow that
            existing administrators had been doing manually for years; moving it into the system
            meant the technician could publish a draft directly into the right template without
            office intervention.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Two days on-site with the Level III, three days remote with the office team. Captured the full certification spreadsheet, the five client report templates, the calibration log, and the QuickBooks chart-of-accounts. Output: a thirty-page scoping document with rejected items called out (RBI, corrosion trending, asset register) and the agreed phase-one boundary." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Imported 45 technician records with full certification chains, 380 calibratable assets (probes, gauges, UT couplant lots), and 24 months of project history. Loaded the five operator report templates as variants. Configured the SAEP-1142 / SNT-TC-1A / API ICP qualification schemes with method-specific scope. Manual re-keying of certificate scan dates for 14 technicians where the spreadsheet was wrong." },
        { phase: "Week 7-8: Parallel-run", detail: "Both systems lived. Technicians submitted reports through the ERP and the office continued to produce the same reports in the old workflow. Weekly variance review with the Level III. Found and fixed seven template mapping issues, two missing PAUT scan-plan fields, and one calibration-decay calculation defect for an Ir-192 source." },
        { phase: "Week 9-12: Go-live & training", detail: "Spreadsheet retired at the end of week 9. Five training cohorts: office (1 day), field supervisors (half day), technicians (half day), Level IIIs (1 day), client portal walkthrough (half day, attended by two of five clients). Post-go-live hyper-care for four weeks with daily 30-minute stand-ups." },
      ]}
      outcomes={[
        { metric: "Report production cycle time", before: "48-72 hours", after: "8-18 hours" },
        { metric: "Certification expiry incidents", before: "3-5 per quarter", after: "0 (12 months and counting)" },
        { metric: "Audit-package preparation", before: "80 hours", after: "Under 30 seconds (one-click PDF)" },
        { metric: "Office admin overhead for templates", before: "1.5 FTE", after: "0.4 FTE redeployed to QA review" },
        { metric: "Customer-portal positive feedback", before: "Not measured", after: "84% positive in first 6 months" },
        { metric: "Repeat-business win-rate on rebids", before: "63%", after: "78% (4-quarter rolling)" },
      ]}
      lessonsLearned={[
        "The operator-template library took three weeks of refinement during parallel-run rather than the planned two — every operator had at least one undocumented preference (a specific hold-point colour, a preferred date format) that only surfaced when a real report was rendered. We now budget +50% on template configuration for any inspection contractor with more than three primary clients.",
        "Migrating the certification dates by hand was the right call. Auto-import from the legacy spreadsheet would have carried forward the date-transcription errors that caused the near-miss in the first place. The two-week manual re-keying paid for itself within the first month of zero expiry incidents.",
        "Field offline reliability was the single highest-value technical decision. During the next turnaround the inside-of-process-unit cellular was unusable for three of the five shifts; technicians captured everything offline and synced when they exited the unit. The previous workflow would have stalled.",
        "Deferring RBI / asset register was the right scoping call. Phase one delivered visible value to the owner in 90 days. Phase two was funded out of phase-one savings rather than capex, which is a much easier conversation.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two is now scoped: asset register for client-owned circuits the contractor
            repeatedly inspects, lightweight corrosion-rate trending against the contractor's own
            archived UT data, and a customer portal allowing the client integrity engineer to pull
            past reports themselves rather than emailing the office. The contractor has also
            committed to onboarding an additional refiner in Q3 2026 and the ERP scaling work is
            already configured.
          </p>
          <p>
            Quality management and a formal NCR / CAPA module is scheduled for Q4 2026. The
            contractor is targeting ISO 9001:2015 certification in 2027 and the audit-management
            module included in phase one already covers most of clause 9.2 (internal audit) and
            10.2 (nonconformity and corrective action).
          </p>
        </>
      }
      faqs={[
        {
          question: "How does Atlantis NDT ERP handle multiple operator-specific Section V templates?",
          answer: "Each operator template is configured as a variant of a base SNT-TC-1A / ASME Section V report structure. The technician selects the work order, the system already knows the client, the client template loads automatically with that operator's logo, signature block, preferred section order, and hold-point matrix. The technician fills the data fields once and the rendered PDF matches what each operator's contract specifies. New templates take roughly half a day to configure and validate.",
        },
        {
          question: "Will the certification module work for SAEP-1142, ADNOC ACS-01, and SNT-TC-1A simultaneously?",
          answer: "Yes. The module stores qualification chains per technician per scheme. A single technician on the Gulf Coast was qualified under SNT-TC-1A; we added SAEP-1142 mapping for a Saudi sub-contract and ADNOC ACS-01 mapping for a UAE rotation, with three separate expiry calendars, three separate scope definitions, and three separate audit packages — without re-entering the technician's data.",
        },
        {
          question: "What happens to existing QuickBooks invoicing during and after implementation?",
          answer: "QuickBooks Online stays as the system of record for AP/AR. Atlantis NDT ERP pushes ready-to-invoice work orders to QuickBooks through the standard QuickBooks Online connector. Time-and-materials, day-rate, and fixed-price work orders all map to the existing QuickBooks chart of accounts. No re-implementation of accounting is required.",
        },
        {
          question: "How does the audit-package one-click export work?",
          answer: "Any user with audit-export permission selects a client, a date range, and a scope (e.g., 'all UT work for Operator X 2025-Q4') and the system assembles a single PDF containing the written practice in force on the work date, every technician's qualification matrix evidence, the calibration certificate for each instrument used, the radiation-safety records, any NCRs raised, and the chain of custody for every report. The 80-hour audit prep cycle becomes a 30-second download.",
        },
        {
          question: "What if our field crews lose cellular coverage inside a process unit?",
          answer: "The offline-capable field client caches the work order, prior calibration history, and the report template on the technician's device. Field data capture, photo attachment, signature, and PAUT scan annotation all work offline. When the technician exits the unit and re-enters coverage, the device syncs automatically with conflict-resolution rules biased toward the most recent in-field timestamp.",
        },
      ]}
      related={[
        { slug: "pipeline-integrity-services", label: "Midstream Pipeline Integrity Services" },
        { slug: "industrial-coatings-inspection", label: "Industrial Coatings Inspection" },
        { slug: "welding-fabrication-shops", label: "Welding & Fabrication Shop" },
      ]}
    />
  );
}
