import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function IndustrialCoatingsInspectionErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="industrial-coatings-inspection"
      industryName="Industrial Coatings Inspection"
      title="Refinery Coatings Inspection Contractor — Atlantis NDT ERP Implementation Case Study"
      metaDescription="Refinery coatings inspection contractor with NACE/AMPP CIP Level III team, SSPC PA 2 DFT campaigns. How Atlantis NDT ERP unified DFT capture, inspector qualifications, and operator-specific coatings reporting."
      companyDescriptor="Refinery and petrochemical coatings inspection contractor running SSPC PA 2 DFT campaigns, ISO 12944 corrosion-protection systems audits, and shop-floor coatings inspection. ~20 NACE/AMPP-qualified inspectors (mix of CIP Level II and Level III), 3 office staff, 2 senior coatings consultants. Anonymized under MNDA."
      region="US Gulf Coast"
      companySize="~25 staff"
      ctaMailSubject="Demo — Atlantis NDT ERP for industrial coatings inspection"
      challenge={
        <>
          <p>
            The contractor had built a strong reputation in the Gulf-Coast refining belt over
            fifteen years. The business model was inspector-time-driven: an inspector mobilised to
            a refinery, supported a coatings campaign for several weeks, captured surface
            preparation evaluation per SSPC SP standards, dry-film thickness per SSPC PA 2, holiday
            detection per NACE SP0188, pull-off adhesion per ASTM D4541, and produced a daily
            report and a final campaign report. The work itself was high-quality but the
            office-side workflow was almost entirely manual. Daily inspection reports were typed
            in Word at the inspector's hotel each evening and emailed to the office; DFT data
            sheets were captured on paper and re-keyed by an admin; campaign final reports were
            compiled by the senior consultant in Word over two to three days at the end of each
            campaign.
          </p>
          <p>
            DFT data handling was the single largest pain. SSPC PA 2 requires a structured
            measurement plan (number of spots per area, three readings per spot, average per spot,
            average per area, minimum/maximum, evaluation against specification), with the
            specification being operator-and-contract specific. Inspectors carried PosiTector or
            Elcometer DFT gauges that produce CSV exports, but the exports were unstructured for
            the contractor's purposes — they were stored on the gauge until the campaign ended,
            then dumped into a holding folder, with the inspector or admin manually reconstructing
            the measurement plan from memory and field notes. Inspectors had occasionally missed
            an SSPC PA 2 minimum / maximum non-conformance until the post-campaign reconciliation,
            which was both embarrassing and contractually risky.
          </p>
          <p>
            Operator-specific reporting was the second pain. Each of the four primary refinery
            clients required a slightly different daily-report format and final-campaign-report
            format. Some required the operator's specific spec reference embedded in every report;
            some required a particular hold-point matrix; one required the contractor to submit
            data in the operator's internal coatings-database CSV format. The senior consultants
            handled the variation manually; new consultants were trained on it through paired-work.
          </p>
          <p>
            The third pressure point was inspector qualification tracking. NACE/AMPP CIP
            certifications have continuing-education and renewal requirements per NACE / AMPP's
            published guidelines, plus the inspectors held varying combinations of SSPC Level 2,
            NACE Coatings Inspector Level 3, BGAS-CSWIP painting inspector, and operator-specific
            qualifications (Shell DEP, Saudi Aramco SAEP-1142 coatings annex, etc.). The
            qualification spreadsheet was kept by the office manager and was generally accurate
            but the renewal-tracking was reactive — inspectors typically initiated their own
            renewals and the office discovered lapses after the fact.
          </p>
          <p>
            The fourth concern was the contractor's growing exposure to ISO 12944 corrosion-
            protection systems work, which is an architecturally different inspection regime (whole-
            system longevity audit) from the campaign-driven DFT work the contractor had grown up
            with. The existing reporting templates and inspector workflow did not cleanly support
            ISO 12944.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a structured three-month evaluation against a
            coatings-specific point solution (rejected because it covered DFT capture well but had
            no certification, work-order, or QMS / NCR capability), a generic field-service ERP
            (rejected because it had no coatings-specific data model), and the existing manual
            workflow with custom Excel macros (rejected on lifecycle cost). Atlantis NDT ERP won
            because the work-order module could carry the SSPC PA 2 measurement plan as
            configuration, the data-capture mobile client could ingest gauge CSVs (PosiTector,
            Elcometer) directly into the measurement plan, the certification module covered NACE
            / AMPP / SSPC / BGAS schemes natively, and the document-control / report-template
            module supported operator-specific variants without custom code.
          </p>
          <p>
            Phase one scope: work-order management with the field-data-capture mobile client,
            certification tracking, document control with operator-specific report templates, and
            customer portal. Calibration management was added in a narrow scope — DFT gauge
            calibration tracking — because the gauges are calibration-critical and the contractor
            had previously been managing this loosely. The audit and quality modules were
            included in phase two.
          </p>
          <p>
            The DFT gauge integration was the highest-value technical task. The implementation
            team built a CSV-import workflow for the two gauge families in field use, with the
            inspector pairing the export with the active measurement plan on the tablet. The
            gauge's spot identifiers are mapped to the SSPC PA 2 measurement plan's spot
            identifiers; the system computes per-spot average, per-area average, minimum, maximum,
            and evaluation against specification in real time. SSPC PA 2 non-conformances are
            surfaced at the moment of measurement rather than at post-campaign reconciliation.
          </p>
          <p>
            Operator-specific report templates were configured as variants of a base coatings
            inspection template. Each variant inherits the base structure (daily summary,
            measurement detail, photographic evidence, NCR log, environmental conditions, surface
            preparation evaluation, weather log, hold-point status) and applies the operator's
            specific layout, spec reference embedding, and signature block. New operator templates
            take roughly half a day to configure and validate.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Two days on-site at the office, three days in the field with active campaigns. Captured the SSPC PA 2 measurement plan structure, the four operator templates, the inspector qualification matrix, the DFT gauge CSV formats (PosiTector + Elcometer), the existing daily-report workflow, and the ISO 12944 reporting structure where in use. Output: a measurement-plan configuration spec, a gauge-CSV mapping spec, and a phase-one scope spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated 20 inspector records with full qualification chains across NACE / AMPP / SSPC / BGAS / operator-specific schemes, 18 months of campaign and daily-report history, the four operator templates, the DFT gauge calibration register, and the active campaign measurement plans. Built the gauge CSV importers. Configured the operator-specific report variants." },
        { phase: "Week 7-8: Parallel-run", detail: "Two live refinery campaigns ran in parallel with both old and new systems. Daily variance review with the senior coatings consultants. Caught and fixed: 4 gauge-mapping issues for a recent PosiTector firmware update, 3 operator-template layout issues, an SSPC PA 2 minimum/maximum edge-case for a specific area-size threshold, and one ISO 12944 report-template rendering issue." },
        { phase: "Week 9-12: Go-live & training", detail: "Spreadsheets and Word-document reporting retired at end of week 9. Four training cohorts: inspectors (1 day, twice — to catch all rotation schedules), senior consultants (1 day), office team (1 day), customer portal pilot with 3 of 4 primary clients (half day). Hyper-care for four weeks." },
      ]}
      outcomes={[
        { metric: "DFT data capture cycle", before: "Field paper + admin re-key", after: "Direct gauge-to-measurement-plan, real-time" },
        { metric: "SSPC PA 2 non-conformance surfacing", before: "Post-campaign reconciliation", after: "At moment of measurement" },
        { metric: "Daily report cycle (field to client)", before: "12-24 hours", after: "2-4 hours" },
        { metric: "Campaign final-report production", before: "2-3 consultant days", after: "4-6 consultant hours (review, not assembly)" },
        { metric: "Inspector qualification-lapse incidents", before: "1-2 per year", after: "0 (12 months)" },
        { metric: "Operator-template variations supported", before: "4 (manual)", after: "4 + ISO 12944 (configuration)" },
      ]}
      lessonsLearned={[
        "DFT gauge firmware drift is real. The PosiTector firmware updated mid-implementation and changed the CSV column order slightly; the implementation team's mapping had been built against the prior firmware. Three days of re-mapping work surfaced the issue. We now check gauge firmware as part of go-live verification and recommend the contractor standardise on firmware versions where possible.",
        "Operator-specific spec embedding required more conversation than expected. Two of the four operators had multiple spec revisions in flight simultaneously across different units; the contractor's previous workflow had been to ask the inspector to confirm the active spec each morning. Encoding this in the work-order configuration forced explicit operator-side decisions that took some weeks to settle.",
        "ISO 12944 reporting is genuinely different from SSPC PA 2 campaign reporting. The implementation team initially treated ISO 12944 as a template variant of the base coatings template, which produced reports that were technically correct but did not read like ISO 12944 audit reports. A second pass treated ISO 12944 as a distinct report family and produced cleaner output. We now treat ISO 12944 and SSPC PA 2 as distinct families for any new coatings implementation.",
        "Inspector adoption was faster than expected. Coatings inspectors are generally measurement-oriented and welcomed the elimination of paper data sheets. The tablet form factor (ruggedised, gloves-compatible) was important — the first tablet selected by the IT team did not work well in surface-prep dust, the replacement spec did.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add the audit / NCR management module (capturing operator audit
            findings on the contractor's campaigns and tracking corrective actions through to
            close), the asset-integrity module in a narrow scope for the contractor's owned DFT,
            holiday-detection, and pull-off adhesion equipment, and an extension of the gauge
            integration to cover Elcometer adhesion testers and Defelsko holiday detectors
            directly. The next major operator audit is the proof-point milestone.
          </p>
          <p>
            Phase three (2027) will explore the project-management module for multi-month
            coatings programmes the contractor is now bidding for new construction (rather than
            turnaround) work. The work-order model is sufficient for the campaign work but does
            not cleanly represent the longer-arc programme work.
          </p>
        </>
      }
      faqs={[
        {
          question: "How does Atlantis NDT ERP support SSPC PA 2 DFT campaigns?",
          answer: "Each work order carries an SSPC PA 2 measurement plan: spot pattern, spots per area, readings per spot, specification range, and area-size class. The mobile client guides the inspector through the plan, ingests gauge CSVs directly into the plan structure, and computes per-spot average, per-area average, minimum, maximum, and acceptance against specification in real time. SSPC PA 2 non-conformances surface at the moment of measurement.",
        },
        {
          question: "Which DFT gauges are supported for direct CSV import?",
          answer: "The system ships with importers for the PosiTector 6000 family (Defelsko) and the Elcometer 456 family. Additional gauges are added as one-week implementation work using sample CSV files. The importer maps gauge-side spot identifiers to the work-order measurement plan and validates that the readings match the plan structure.",
        },
        {
          question: "How are operator-specific report templates handled?",
          answer: "Each operator template is configured as a variant of a base coatings inspection report. Variants inherit the base structure and override layout, spec-reference embedding, signature block, and hold-point matrix as required. New operator templates typically take half a day to configure and validate against a representative campaign.",
        },
        {
          question: "Does the system support ISO 12944 corrosion-protection systems reporting?",
          answer: "Yes. ISO 12944 is configured as a distinct report family with its own work-order type, distinct from SSPC PA 2 campaign reporting. The data captured (system specification, corrosivity category, paint-system identification, surface preparation grade, layered DFT measurements, expected durability range) maps to the ISO 12944 audit report structure.",
        },
        {
          question: "How is NACE/AMPP CIP qualification renewal tracking handled?",
          answer: "Each inspector's record stores their CIP Level (Level 1, 2, or 3), issue date, expiration date, and continuing-education credit accrual. The expiry-alert engine fires at 180 / 90 / 60 / 30 / 7 days. CEC accrual is captured against AMPP-approved sources; the inspector and the office manager both see progress against the renewal requirement. Reactive renewal becomes proactive scheduling.",
        },
      ]}
      related={[
        { slug: "construction-quality-assurance", label: "EPC Construction QA Contractor" },
        { slug: "pipeline-integrity-services", label: "Midstream Pipeline Integrity Services" },
        { slug: "ndt-inspection-companies", label: "Gulf-Coast NDT Inspection Contractor" },
      ]}
    />
  );
}
