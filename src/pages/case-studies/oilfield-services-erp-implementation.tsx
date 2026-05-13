import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function OilfieldServicesErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="oilfield-services"
      industryName="Oilfield Services & Wellsite Inspection"
      title="Drilling & Wellsite Inspection Services — Atlantis NDT ERP Implementation Case Study"
      metaDescription="Oilfield services company providing API 5C5 OCTG inspection, BOP testing per API RP 53, and wellsite NDT support across Permian and Eagle Ford basins. How Atlantis NDT ERP unified field tickets, certifications, and operator-specific reporting."
      companyDescriptor="Mid-size oilfield services company providing API 5C5 OCTG inspection (casing, tubing, drill pipe), BOP function and pressure testing per API RP 53, and wellsite NDT support (UT, MT, hardness) across the Permian and Eagle Ford basins. ~40 wellsite inspectors, 12 BOP test crews, 6 office and admin staff. Anonymized under MNDA."
      region="US Permian + Eagle Ford"
      companySize="~58 field + admin staff"
      ctaMailSubject="Demo — Atlantis NDT ERP for oilfield services & wellsite inspection"
      challenge={
        <>
          <p>
            Oilfield services have a high-tempo, ticket-driven workflow that puts pressure on
            every back-office system. The company under study ran somewhere between 18 and 32
            active well sites at any given time, plus 4-6 BOP test campaigns per week, plus 2-3
            OCTG inspection campaigns per month at pipe yards. Each activity generated a field
            ticket; field tickets drove time, materials, and equipment usage; tickets converted to
            invoices; invoices generated revenue. The tickets in 2025 lived in a mix of paper
            triplicate books, an iPad app that did not integrate with the back-office, and the
            office's QuickBooks Enterprise. The cycle time from ticket-out to invoice-out
            averaged 14-21 days, with disputes adding 30-60 days for affected tickets.
          </p>
          <p>
            API 5C5 OCTG inspection was the second pain. API 5C5 specifies the inspection
            requirements for used casing, tubing, and drill pipe, with multiple inspection
            techniques (EMI, UT, MPI, visual) and explicit acceptance criteria per pipe class.
            Each inspection generated a per-joint result that fed into the pipe yard's inventory
            tracking. The inspection results were captured on field-printed run sheets, with the
            office re-keying them into a per-customer spreadsheet for delivery. Two operator
            clients had specifically asked for an electronic delivery format and the company had
            been unable to provide it.
          </p>
          <p>
            BOP testing was the third pain. API RP 53 specifies the BOP function and pressure
            testing requirements for drilling operations. The test procedure is well-defined
            (low-pressure test, high-pressure test, function test, ram tests, choke / kill tests)
            but the test record assembly was manual. Each test generated a chart recorder strip
            (or digital chart), a function-test checklist, and a tabular result sheet; the office
            assembled the operator-specific BOP test report by hand. Operators had been
            increasing their post-test report scrutiny and two had pushed back on report quality
            within the past twelve months.
          </p>
          <p>
            The fourth concern was inspector qualification under the company's written practice
            (SNT-TC-1A) plus operator-specific qualifications (Saudi Aramco SAEP-1142 was relevant
            for the company's small international rotation, Chevron's contractor quality programme,
            ConocoPhillips' programme, etc.). The qualification spreadsheet had drifted, and the
            company had recently lost a contract bid where the operator's quality team had asked
            for evidence of a specific qualification combination that the company technically
            held but could not assemble cleanly.
          </p>
          <p>
            The fifth concern was the field tablet experience in basin conditions. The company had
            tried two prior field-app deployments; both had failed adoption because the apps did
            not work offline, did not survive Permian heat, or had user interfaces designed for
            office workflow rather than basin reality.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a structured three-month evaluation. Two
            alternatives were considered: an oilfield-specific field-ticketing system (rejected
            because it covered tickets and invoicing well but had no NDT, qualification, or QA
            content) and a vertical-specific inspection ERP (rejected because its OCTG and BOP
            content was thin and its field client was office-oriented). Atlantis NDT ERP won
            because the work-order module modelled OCTG inspection and BOP testing as structured
            workflows (with method-specific data capture and operator-specific report templates),
            the certification module covered both SNT-TC-1A and operator-specific schemes natively,
            and the field client was demonstrably basin-tested through prior Gulf-Coast deployments.
          </p>
          <p>
            Phase one scope: work-order / field-ticket management (replacing the iPad app and the
            paper triplicate books), OCTG inspection module configuration with operator-specific
            report templates, BOP test record assembly, certification tracking, and the customer
            portal for the company's top operator clients. Calibration management was added in a
            narrow scope for the company's owned NDE equipment (EMI scanners, UT gauges, hardness
            testers). Inventory was kept in QuickBooks for now.
          </p>
          <p>
            The field-ticket-to-invoice integration was the highest-leverage decision. Each field
            ticket created in the field client carries the work scope, time, materials, and
            equipment usage. When the supervisor approves the ticket, it converts to an invoiceable
            work order that pushes to QuickBooks Enterprise through the standard connector. The
            previous 14-21 day cycle compresses to 2-4 days with the most material driver being
            same-shift supervisor approval rather than office data entry.
          </p>
          <p>
            OCTG inspection was configured with per-joint result capture, operator-specific class
            mapping (Premium / Class 2 / Class 3 / scrap per the operator's spec), and an
            electronic delivery format that satisfies the two operator clients who had previously
            asked for it. The per-joint capture also enables pipe-yard inventory integration in
            phase two.
          </p>
          <p>
            BOP test record assembly was configured with the API RP 53 test sequence built in.
            The crew chief steps through the test sequence on the tablet, captures chart-recorder
            output (digital or photographed analog strip), confirms function tests, and the
            tablet assembles the operator-specific BOP test report on submit. Operator report
            quality became consistent and operator pushback dropped to zero in the first six
            months.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Two days at the office, three days on active rigs and pipe yards. Captured the field-ticket structure, the OCTG inspection workflow, the BOP test procedure variants per operator, the inspector roster, and the QuickBooks integration points. Output: a field-ticket migration plan, an OCTG operator-report inventory, a BOP test template per operator, and a phase-one scope spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated 18 months of field-ticket history, 40 inspector qualification records, 12 BOP test crew records, the OCTG operator-spec library, the BOP test templates (four operator variants), the NDE equipment calibration register, and the QuickBooks customer / item / chart-of-accounts setup. Configured the iPad-tested ruggedised field client and the offline-sync logic." },
        { phase: "Week 7-8: Parallel-run", detail: "All active rigs ran with both old (paper triplicate + iPad app) and new (Atlantis field client) ticketing. Daily variance review with the operations manager and a senior crew chief. Caught and fixed: 9 ticket-to-invoice mapping issues for non-standard work types, 4 OCTG operator-class mapping issues, 2 BOP test sequence edge cases for older BOP stack configurations, and an offline-sync conflict-resolution issue when two crews shared a single rig site." },
        { phase: "Week 9-12: Go-live & training", detail: "Paper triplicate and the legacy iPad app retired at end of week 9. Four training cohorts: wellsite inspectors (1 day, twice — to catch hitch rotations), BOP test crews (1 day), OCTG pipe yard crews (1 day), office team (1 day). On-site refresher visits to the three largest customer rig sites in week 11. Hyper-care for six weeks." },
      ]}
      outcomes={[
        { metric: "Field-ticket-to-invoice cycle", before: "14-21 days", after: "2-4 days" },
        { metric: "Disputed-ticket cycle", before: "30-60 days", after: "5-10 days (data-supported resolution)" },
        { metric: "OCTG inspection electronic delivery", before: "Manual spreadsheet, 2 customers unsupported", after: "Native electronic delivery, all customers supported" },
        { metric: "BOP test operator pushback events", before: "2 in 12 months (2025)", after: "0 (12 months post-go-live)" },
        { metric: "Inspector qualification audit retrieval", before: "Hours to assemble evidence", after: "Under 30 seconds (one-click PDF)" },
        { metric: "Field tablet adoption (basin-tested)", before: "Two prior failed deployments", after: "94% active daily usage at 90 days" },
      ]}
      lessonsLearned={[
        "Field tablet hardware selection was the single most important non-software decision. The IT-recommended consumer ruggedised tablet did not survive a Permian August. The replacement (a Getac F110, fully ruggedised, extended operating-temperature range, gloves-compatible touch) cost more but eliminated the heat-related shutdowns. Field hardware decisions belong in the implementation conversation.",
        "Offline-sync conflict resolution for shared-site work (two crews on the same rig at the same time) required a configuration we had not anticipated. The default 'last write wins' produced occasional ticket loss when both crews submitted concurrent updates. We changed to 'merge with conflict surface for supervisor review' which solved the issue but added a small supervisor review step. We now build this into the offline-sync configuration for any multi-crew site.",
        "Operator-specific BOP test templates required more conversation with operators than we had budgeted. Two of the four operator templates were technically aligned with API RP 53 but had operator-side custom requirements that were carried in the previous service company's institutional knowledge. Surfacing them through paired sessions with each operator's drilling-engineering team strengthened the relationships and clarified ambiguities.",
        "QuickBooks Enterprise integration was solid but the customer / item master needed cleanup before the integration could be fully automated. Roughly 12% of customer records had drift between the field-billing convention and the QuickBooks master. We now schedule a QuickBooks master-data cleanup window before integration go-live.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add pipe-yard inventory integration (per-joint OCTG inspection results
            feeding the pipe-yard inventory system), deepen the customer portal for two operator
            clients who have asked for live wellsite activity visibility, and add the asset-
            integrity module's lite variant for client-owned BOP stacks the company repeatedly
            tests. The next operator audit cycle is the proof-point.
          </p>
          <p>
            Phase three (2027) will explore the project-management module for multi-month
            drilling-campaign coverage (rather than single-rig hitches), the quality / NCR module
            for the operator-side NCR workflow that has been emerging, and the certification /
            training module for the company's growing in-house training programme.
          </p>
        </>
      }
      faqs={[
        {
          question: "How does Atlantis NDT ERP support API 5C5 OCTG inspection?",
          answer: "The work-order module carries an OCTG inspection structure per joint, with EMI / UT / MPI / visual result capture, wall-thickness measurement, and operator-specific acceptance criteria. Results are mapped to the operator's pipe class (Premium / Class 2 / Class 3 / scrap per spec). Electronic delivery formats are configured per operator and produced automatically on inspection completion.",
        },
        {
          question: "Can the system produce API RP 53 BOP test records?",
          answer: "Yes. Each BOP test is structured per API RP 53 with low-pressure test, high-pressure test, function test, ram tests, and choke / kill tests. The crew chief steps through the test sequence on the field client. Chart-recorder output (digital or photographed analog strip) is captured with the test record. The operator-specific BOP test report assembles on submit, eliminating the previous manual office assembly.",
        },
        {
          question: "How does field-ticket-to-invoice integration with QuickBooks Enterprise work?",
          answer: "Each field ticket carries work scope, time, materials, and equipment usage. Supervisor approval converts the ticket to an invoiceable work order that pushes to QuickBooks through the standard QuickBooks connector. Customer / item / chart-of-accounts mapping is configured in the implementation. The ticket-to-invoice cycle compresses from 14-21 days to 2-4 days, with same-shift supervisor approval the primary driver.",
        },
        {
          question: "Does the field client work offline in basin conditions?",
          answer: "Yes. The field client is offline-capable with structured offline-sync conflict resolution for multi-crew sites. We strongly recommend a fully ruggedised tablet (Getac F110-class or equivalent) with extended operating-temperature rating; consumer-ruggedised tablets typically do not survive a Permian summer. Field hardware selection is part of the implementation conversation rather than a procurement-only decision.",
        },
        {
          question: "How are inspector qualifications under SNT-TC-1A plus operator-specific schemes tracked?",
          answer: "Each inspector's record stores their SNT-TC-1A method-specific qualifications plus any operator-specific qualifications (SAEP-1142, Chevron contractor quality, ConocoPhillips contractor quality, etc.). The qualification matrix view supports operator-quality-team audit queries — 'show me all inspectors with current UT Level II SNT-TC-1A plus current operator-specific qualification X' — as a single query rather than a hours-long evidence pull.",
        },
      ]}
      related={[
        { slug: "pipeline-integrity-services", label: "Midstream Pipeline Integrity Services" },
        { slug: "ndt-inspection-companies", label: "Gulf-Coast NDT Inspection Contractor" },
        { slug: "marine-survey-companies", label: "FPSO Marine Survey Specialist" },
      ]}
    />
  );
}
