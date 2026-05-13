import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function EnvironmentalTestingLabsErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="environmental-testing-labs"
      industryName="Environmental Testing Laboratories"
      title="ISO 17025 Environmental Testing Lab — Atlantis NDT ERP Implementation Case Study"
      metaDescription="ISO/IEC 17025-accredited environmental testing laboratory, EPA SW-846 methods, multi-matrix sample handling. How Atlantis NDT ERP unified COC, batch QC, and EDD delivery."
      companyDescriptor="ISO/IEC 17025-accredited environmental testing laboratory with NELAP, multi-state, and EPA programme accreditations. Multi-matrix scope (water, soil, sediment, air, waste), full EPA SW-846 capability plus drinking water (40 CFR Part 141), wastewater (40 CFR Part 136), and air (Method TO-15 / TO-17). ~60 lab staff, 8 method specialists, 12 admin / sample-management / EDD-reporting staff. Anonymized under MNDA."
      region="US Mid-Atlantic + Southeast"
      companySize="~80 staff across 2 locations"
      ctaMailSubject="Demo — Atlantis NDT ERP for ISO 17025 environmental testing labs"
      challenge={
        <>
          <p>
            Environmental testing labs operate at the intersection of three quality regimes:
            ISO/IEC 17025, EPA programme requirements (drinking water, RCRA, CWA, CAA), and state-
            specific NELAP / TNI requirements. The lab under study had been competent in all three
            for two decades but the back-office had become a patchwork. The LIMS (a tier-2
            vendor's product) was solid for sample tracking and instrument data import but had
            grown out of date for EDD (Electronic Data Deliverable) production, batch QC review,
            and ISO 17025 §7.8 certificate-equivalent report generation. The lab maintained four
            production workflows that should have been one: sample receipt and chain-of-custody
            (LIMS-native), test execution (LIMS-native with significant Excel side-tools), batch
            QC review (Excel + Word, partly LIMS), and EDD production (a vendor-supplied EDD tool
            plus extensive Excel transformations).
          </p>
          <p>
            EDD production was the most acute pain. State agencies, EPA programmes, and many
            commercial clients require structured Electronic Data Deliverables in formats like
            EQuIS EDD, ERPIMS, EDF, SEDD, or client-specific Excel templates. The lab's EDD
            production team — three people during normal volume — built each EDD by exporting from
            LIMS, transforming through Excel, validating, and submitting. EDD rejection rates from
            clients were running at roughly 8% on first submission, with the typical rejection
            requiring a half-day to diagnose and re-submit. The EDD team had asked for help.
          </p>
          <p>
            Batch QC review was the second pain. EPA SW-846 methods (e.g., 8260D, 8270E, 6020B,
            7470A) require batch QC including method blanks, laboratory control samples (LCS),
            matrix spikes, matrix spike duplicates, and surrogates, with acceptance criteria per
            method. The lab's analysts ran the QC correctly but the review and disposition (accept
            / reanalyse / batch failure) was a manual process driven by analyst-generated Excel
            QC summaries. The senior chemist reviewing batches felt the documentation was solid
            but the assembly was expensive in chemist time.
          </p>
          <p>
            The third concern was multi-accreditation evidence management. The lab held NELAP-TNI
            primary accreditation plus secondary accreditations in ~12 states and the EPA UCMR
            programme. Each accreditation body required slightly different evidence — proficiency
            testing records, control-chart documentation, training records, equipment calibration.
            Accreditation audit prep was a several-week effort.
          </p>
          <p>
            The fourth concern was the growing air-testing scope (TO-15 / TO-17 / TO-13A, AB
            2588). Air testing has a distinct sample-management workflow (Summa canister tracking,
            sorbent tube handling, certification of pre-cleaned media) that the existing LIMS
            represented but not cleanly. The lab was growing this segment of the business and the
            current systems were a bottleneck.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a structured five-month evaluation that included
            two environmental-LIMS-specific vendors (rejected because their EDD production was
            similar to the lab's incumbent vendor and would not solve the rejection-rate problem),
            a generic ISO 17025 quality platform (rejected because it did not represent EPA batch
            QC), and the status quo with custom EDD tooling (rejected on rejection-rate trend).
            Atlantis NDT ERP won because the calibration / measurement-result module modelled EPA
            batch QC as first-class data (with acceptance-criterion enforcement), the audit-export
            workflow supported EDD production as configuration (with multiple EDD templates), and
            the document-control / accreditation module supported multi-accreditation evidence
            management.
          </p>
          <p>
            Phase one scope: replacing the LIMS for sample tracking, COC, test execution, batch QC
            review, and EDD production (the existing LIMS retained for a six-month overlap as a
            read-only reference until full data migration was complete). Document control,
            calibration management for lab instruments, audit / NCR module, and the multi-
            accreditation evidence workflow. Customer portal was included for the lab's top 20
            commercial clients.
          </p>
          <p>
            The single highest-leverage configuration was the EDD template library. The
            implementation team built configurable EDD templates for the lab's top 25 EDD formats
            (covering ~90% of submissions) including EQuIS, ERPIMS, EDF, SEDD, EarthSoft, and the
            most common client-specific Excel formats. Each template was validated against the
            client's specification using sample submissions from the previous quarter. The EDD
            production process became: select work order, select EDD template, review, submit.
          </p>
          <p>
            Batch QC review was reorganised around method-specific QC dashboards. Each EPA method
            (8260D, 8270E, 6020B, 7470A, etc.) has its own QC acceptance criteria; the system
            evaluates each batch against the configured criteria and surfaces pass / marginal /
            fail status before the chemist opens the batch for review. The chemist's review
            focuses on the marginal and failed batches; passed batches are reviewed by exception
            rather than line-by-line.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Three days on-site at each location. Captured the sample lifecycle, the test method portfolio, the EDD template inventory, the batch QC structure per method, the accreditation evidence requirements, and the air-testing workflow. Output: a sample-lifecycle migration plan, an EDD template inventory with priorities, a batch-QC configuration spec, and a phase-one scope spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated ~280,000 historical sample records (24 months), the active sample work in progress, ~85 test method procedures, the calibration history for ~120 instruments, the accreditation evidence inventory, and the EDD template library (top 25). Configured method-specific batch QC dashboards. Built the multi-accreditation evidence workflow." },
        { phase: "Week 7-8: Parallel-run", detail: "Both LIMS environments lived. The lab ran roughly 6,000 samples in both systems with daily variance review. Caught and fixed: 12 EDD template validation issues, 8 batch QC acceptance-criterion mappings (mostly involving the lab's internal tighter-than-EPA criteria), 4 sample-management edge cases for air-testing media, and an accreditation-evidence document-control issue for the most recent NELAP-TNI assessment." },
        { phase: "Week 9-12: Go-live & training", detail: "Sample-receipt / COC switched to Atlantis NDT ERP at end of week 9; legacy LIMS retained as read-only reference. Eight training cohorts: sample-receipt and COC (1 day), analysts per method group (half day per group, three groups), senior chemists for batch QC review (1 day), EDD production team (1 day), accreditation manager (1 day), customer portal pilot with 8 clients (half day). Hyper-care for ten weeks given the scale." },
      ]}
      outcomes={[
        { metric: "EDD first-submission rejection rate", before: "~8%", after: "Under 1%" },
        { metric: "EDD production time per submission", before: "Half-day with frequent diagnosis", after: "Under 1 hour, review-and-submit" },
        { metric: "Batch QC review time", before: "Line-by-line for every batch", after: "Exception-based on marginal / failed batches" },
        { metric: "Accreditation audit prep", before: "~3 weeks per cycle", after: "~5 days per cycle (review, not assembly)" },
        { metric: "Air-testing sample-management errors", before: "Periodic media-tracking issues", after: "0 media-tracking incidents (12 months)" },
        { metric: "Customer-portal positive feedback", before: "No portal", after: "82% positive in first 6 months" },
      ]}
      lessonsLearned={[
        "Migrating ~280,000 historical sample records was the largest single data-volume task. The migration team built a structured importer with sample-level validation, but the historical sample identifier conventions had varied over the years. Three weeks of senior-analyst time were committed to resolving identifier ambiguities. We now plan for historical-identifier review for any lab with more than 5 years of LIMS data.",
        "The EDD template library was the single most valuable deliverable. The 25 templates covered ~90% of submissions; the remaining 10% are still produced through hybrid template + light Excel transformation. The 90% coverage drove the rejection-rate improvement and produced the chemist-time savings. We now treat EDD template coverage as the single most important success metric for environmental-lab implementations.",
        "Customer-portal pharmaceutical-customer onboarding was again slower than expected (a pattern across labs we have seen). Two of the lab's top customers required formal portal validation and access-control review that took 6-8 weeks each. We have standardised a portal acceptance pack to compress this.",
        "Air-testing scope deepening was a surprise win. The implementation team had originally scoped air-testing as a low-priority workstream because the volume was small. The lab manager invested in capturing the workflow cleanly during phase one. The air-testing volume has since doubled — partly enabled by the cleaner workflow — and the segment is now profitable in a way it had not been previously.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add the remaining ~10% of EDD templates (long-tail), deepen the
            customer portal to expose live testing progress for clients who require it, add the
            certification / training module for the analyst workforce (currently in HR), and
            integrate the proficiency testing programme into the audit module. The next major
            NELAP-TNI assessment cycle is the proof-point.
          </p>
          <p>
            Phase three (2027) will explore the inventory module for laboratory consumables and
            standards lifecycle (currently managed in a separate inventory tool), the project-
            management module for multi-month emergency-response or long-term-monitoring contracts,
            and a deeper integration with two clients' field-data-collection tools that produce
            samples flowing to the lab.
          </p>
        </>
      }
      faqs={[
        {
          question: "How many EDD formats does Atlantis NDT ERP support?",
          answer: "The system ships with configurable templates for the major formats: EQuIS EDD (various states), ERPIMS, EDF (California), SEDD (DoD / DoE), EarthSoft, and the standard client-specific Excel templates. Each template is validated against the client's specification using sample submissions during implementation. Lab-specific or rare formats are added as one-week implementation work using sample submissions.",
        },
        {
          question: "How is EPA SW-846 batch QC handled?",
          answer: "Each EPA method (8260D, 8270E, 6020B, 7470A, etc.) carries its own configured batch QC structure: method blank, LCS, MS / MSD, surrogate, with method-specific or lab-tighter acceptance criteria. The system evaluates each batch against the criteria and surfaces pass / marginal / fail status. Marginal and failed batches require chemist disposition; passed batches are reviewed by exception. The chemist's review time drops materially.",
        },
        {
          question: "Does the system support multi-accreditation evidence management (NELAP, state, EPA UCMR)?",
          answer: "Yes. Each accreditation body's evidence requirements (proficiency testing records, control chart documentation, training records, equipment calibration) are configured as an evidence template. Accreditation audit prep produces a body-specific evidence pack on demand. The accreditation manager's previous role of assembling becomes one of reviewing.",
        },
        {
          question: "Can the system handle air-testing media tracking (Summa canisters, sorbent tubes)?",
          answer: "Yes. Air-testing media are modelled as instrumented sample containers with pre-cleaning certification, batch ID, expiry, and field-deployment tracking. Sample receipt validates that the media's certification is current and that the field-deployment record is complete. Media-tracking incidents (the most common air-testing data-quality issue) drop to zero with disciplined media-lifecycle tracking.",
        },
        {
          question: "Does Atlantis NDT ERP replace our existing LIMS entirely?",
          answer: "For environmental testing labs, yes — phase one replaces the LIMS for sample tracking, COC, test execution, batch QC review, and EDD production. The typical implementation retains the legacy LIMS as a read-only reference for six months while historical data is fully migrated. After six months the legacy LIMS is decommissioned. For labs with very deep custom LIMS investment, a hybrid approach is possible but not typical.",
        },
      ]}
      related={[
        { slug: "calibration-laboratories", label: "ISO 17025 Calibration Laboratory" },
        { slug: "metrology-laboratories", label: "Multi-Discipline Metrology Laboratory" },
        { slug: "geotechnical-engineering", label: "Geotechnical Engineering Firm" },
      ]}
    />
  );
}
