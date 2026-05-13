import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function PipelineIntegrityServicesErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="pipeline-integrity-services"
      industryName="Pipeline Integrity Services"
      title="Midstream Pipeline Operator IMP — Atlantis NDT ERP Implementation Case Study"
      metaDescription="Midstream pipeline operator with ~8,000 km of transmission, full API 1160 integrity management programme. How Atlantis NDT ERP unified ILI data, dig verification, and DOT PHMSA reporting under a single integrity workflow."
      companyDescriptor="Mid-size midstream pipeline operator running ~8,000 km of NGL and crude transmission across the US mid-continent and Permian. API 1160 integrity management programme. ~40 integrity engineers, ~80 inline-inspection field and ILI vendor coordination staff, ~25 dig and repair crews. Anonymized under MNDA."
      region="US Mid-Continent + Permian"
      companySize="~145 integrity, ILI, dig & repair staff"
      ctaMailSubject="Demo — Atlantis NDT ERP for pipeline integrity / ILI / IMP"
      challenge={
        <>
          <p>
            The operator's integrity management programme (IMP) was mature on paper — fully aligned
            to API 1160, with documented threat assessment, HCA identification per 49 CFR 195.452,
            ILI scheduling, dig verification, and recordkeeping — but in practice the workflow was
            spread across roughly nine tools. ILI vendor data arrived as XML and PDF. Threat
            assessment was maintained in an internal SharePoint with attached Excel models. Dig
            results were captured in field forms and re-keyed into the same SharePoint by a
            three-person integrity-records team. DOT PHMSA Annual Report data (Form 7100.2-1 for
            hazardous liquid) was assembled in early Q1 each year by a senior engineer pulling from
            multiple sources, with the assembly itself taking three to four weeks. The leadership
            team had concluded that the next regulatory review would likely surface this as a weak
            integrity-records area even though the underlying integrity decisions were sound.
          </p>
          <p>
            ILI tool deployment data integration was the most painful operational issue. Each
            vendor delivered MFL, UT, EMAT, caliper, IMU, or combo-tool results in their own
            structure — Rosen, Baker Hughes (PII), TDW, ENTEGRA, NDT Global, ROSEN, A.Hak each with
            distinct file formats. The integrity-records team manually normalised each delivery
            into a common spreadsheet for the threat-assessment engineer to use. Errors crept in
            (chainage offset, depth basis, missing girth-weld references) and were sometimes only
            caught at dig verification, by which point the dig crew had been mobilised to the wrong
            location. Two notable instances in 2024-2025 had cost roughly $90K each in
            re-mobilisation.
          </p>
          <p>
            Dig verification was the second pain. The dig crew captured girth-weld photos,
            wall-thickness measurements, anomaly dimensions, repair selection (Type A / Type B
            sleeve, weld deposition, replacement, leave-in-service), and field NCRs on paper at
            site, with photos on the foreman's phone. The reconciliation back into the IMP record
            was a weekly office task. The information was complete but the cycle time meant that
            an integrity engineer chasing a specific dig answer was always at least a week behind
            reality.
          </p>
          <p>
            The fourth pressure was the DOT PHMSA annual reporting cycle. Form 7100.2-1 requires
            structured data on incidents, mileage by HCA / non-HCA, ILI runs, dig verification,
            and pressure tests. Each year the senior engineer assembled this from the disparate
            sources over three to four weeks. The data was correct but the cost was significant
            and the audit trail was less clean than the engineer wanted.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a six-month evaluation that included two pipeline-
            integrity-specialised tools and a generic asset-performance-management platform.
            The pipeline-integrity specialists were strong at ILI data normalisation but weak at
            the dig-crew workflow, dig NCR / CAPA, and the operator's wider QA / certification /
            regulatory needs. The APM platform was strong at the dashboard layer but treated
            inspection data as a generic event stream. Atlantis NDT ERP won on three points: the
            corrosion-tracking and RBI module modelled ILI data as a first-class entity with vendor
            normalisation built in, the work-order module supported the dig crew with a mobile
            offline-capable field client, and the audit-management module produced a structured
            DOT PHMSA evidence package on demand.
          </p>
          <p>
            Phase one scope: corrosion-tracking / RBI integration with the ILI data pipeline,
            work-order management with the dig-crew mobile client, document control for the IMP
            programme document set (HCA identification procedure, ILI procedure, dig verification
            procedure, repair selection procedure, training records), and audit / compliance
            management. The asset-management module was included in a phased way — the system of
            record for the pipeline asset register itself remained the operator's GIS, with
            Atlantis NDT ERP receiving asset-segment data through a one-way feed.
          </p>
          <p>
            ILI vendor integration was the highest-effort technical task. The implementation team
            built a vendor-specific normalisation layer for each of the six active ILI vendors,
            with sample files from each vendor's last two deliveries used to validate the mapping.
            The normalisation output is a common anomaly record (chainage, joint identifier, depth,
            length, width, type per POF 'Pipeline Operator Forum' guidance, ILI tool confidence)
            that downstream threat-assessment and dig-prioritisation logic consumes. The
            integration effort paid back within four ILI deliveries.
          </p>
          <p>
            The dig-crew mobile client was the highest-leverage operational change. Dig crews now
            capture every field data point — anomaly dimensions, wall-thickness measurements,
            photos with GPS, repair selection rationale, NCRs — on a ruggedised tablet at the dig
            site. The data flows back to the IMP record within minutes of being captured, not a
            week later. Repair selection (Type A / Type B sleeve / replacement / leave-in-service)
            is supported by an in-tablet decision aid aligned to the operator's repair procedure.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Two days on-site with the IMP team, two days on-site with the dig crews, three days remote with the records team. Captured the threat-assessment workflow, the HCA model, the ILI vendor list, the dig procedure, and the DOT PHMSA assembly process. Output: an ILI vendor normalisation spec, a dig-crew mobile spec, and a phase-one configuration spec with explicit out-of-scope items (GIS, ILI vendor selection, pipeline modelling)." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated 18 months of ILI run history (six vendors), 24 months of dig verification records, 36 months of incidents and findings, and the full IMP document set. Built the six ILI vendor normalisation maps using sample files. Configured the threat-assessment workflow, the HCA-aware prioritisation, and the DOT PHMSA assembly logic." },
        { phase: "Week 7-8: Parallel-run", detail: "Two ILI runs (one MFL, one combo-tool) and twelve dig verifications ran in parallel. Daily variance review. Caught: 4 vendor normalisation issues (one vendor's recent format change), 3 dig-crew field-form mapping issues, and a DOT PHMSA mile-segment edge case for a pipeline lateral that started in HCA and ended in non-HCA." },
        { phase: "Week 9-12: Go-live & training", detail: "Legacy SharePoint integrity tracking retired at end of week 9 (GIS retained as system of record for asset register). Five training cohorts: integrity engineers (1 day), ILI coordinators (half day), dig crews (1 day, on-site at the operator's Midland field office), records team (1 day), regulatory team for DOT PHMSA workflow (1 day). Hyper-care for eight weeks given the operational footprint." },
      ]}
      outcomes={[
        { metric: "ILI vendor normalisation cycle", before: "1-2 weeks per delivery", after: "Automated, same-day with QA review" },
        { metric: "Dig data reconciliation latency", before: "5-7 days field to IMP record", after: "Under 30 minutes" },
        { metric: "Wrong-dig-location incidents", before: "2 in 2024-2025 ($90K each)", after: "0 (12 months and counting)" },
        { metric: "DOT PHMSA annual report assembly", before: "3-4 engineer-weeks", after: "2-3 engineer-days (system-assembled)" },
        { metric: "Internal IMP audit findings", before: "3 records-related findings (2025)", after: "0 records-related findings (2026 cycle)" },
        { metric: "Dig prioritisation cycle time", before: "2-3 weeks per ILI run", after: "Within 1 week with HCA-aware automation" },
      ]}
      lessonsLearned={[
        "ILI vendor normalisation needs ongoing maintenance — vendors update their delivery formats. The implementation included a quarterly normalisation review with one of the vendors in scope, which caught a format change between the parallel-run and go-live. We now schedule normalisation reviews as a standing item rather than treating them as one-time work.",
        "Dig-crew tablet ruggedisation matters. The first batch of ruggedised tablets specified by the IT team turned out to be insufficient for Permian summer heat (140°F+ in the dig hole). Two tablets were lost to thermal shutdown in the first three weeks. The replacement spec (higher operating-temperature range) added $400 per device but eliminated the issue. Field hardware decisions belong in the implementation conversation, not just the procurement conversation.",
        "The repair-selection decision aid was high-leverage but politically sensitive — dig crews and engineers disagreed on edge cases. The aid was configured as advisory only, with the dig foreman retaining final authority. Adoption was much faster as a result.",
        "HCA / non-HCA boundary segment handling was the single piece of configuration that needed the most iteration. Pipelines with laterals crossing HCA boundaries required explicit modelling that the operator's previous workflow had handled by convention. Writing the convention down was a benefit, but it was three weeks of work.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will deepen the asset-integrity module to capture more of the operator's
            facility assets (compressor stations, pump stations, tank farms — where the pipeline
            ERP currently stops), the corrosion-coupon and corrosion-probe programme (currently
            in a separate database), and the customer / shipper portal for nominations-adjacent
            integrity transparency where contractually required. The next DOT PHMSA cycle (Q1
            2027) is the proof-point milestone.
          </p>
          <p>
            Phase three (2027-2028) will explore the project-management module for major pipeline
            replacement / re-route projects, of which the operator has two in early scoping. The
            quality-management / NCR module is also targeted for deeper deployment as the operator
            moves towards API Q1-aligned supplier quality management.
          </p>
        </>
      }
      faqs={[
        {
          question: "Which ILI vendors does Atlantis NDT ERP normalise?",
          answer: "The system ships with normalisation maps for Rosen, Baker Hughes (PII), TDW, ENTEGRA, NDT Global, A.Hak, and Onstream. Each map handles MFL, UT, EMAT, caliper, IMU, and combo-tool output where the vendor offers it. Additional vendors are added as one-week implementation work using sample files. Maps are reviewed quarterly to catch vendor format changes.",
        },
        {
          question: "How is HCA / non-HCA handling implemented?",
          answer: "The HCA model is implemented per 49 CFR 195.452 (hazardous liquid) and 49 CFR 192 Subpart O (gas, where the operator runs gas assets) with the operator's specific HCA register imported from GIS. Anomaly prioritisation, response timeline (180-day / 60-day / immediate per HCA category), and reporting all reflect the HCA status. Pipelines with laterals crossing HCA boundaries are modelled explicitly.",
        },
        {
          question: "Does the system produce DOT PHMSA Form 7100.2-1 directly?",
          answer: "The system assembles the structured data (mileage by HCA / non-HCA, ILI runs, dig verifications, repairs, pressure tests, incidents) required for the annual report. The form itself is submitted through the DOT PHMSA Online Data Entry System; Atlantis NDT ERP produces a structured export that maps to each field of the form, dramatically reducing the senior-engineer assembly time.",
        },
        {
          question: "How does the dig-crew mobile client work in remote areas without cell coverage?",
          answer: "The mobile client is offline-capable. The dig work order, the upstream ILI anomaly data, the relevant procedure, and the photo capture all work without cell coverage. Field data captured offline is queued locally on the ruggedised tablet and syncs automatically when the crew returns to coverage. The repair-selection decision aid also works offline using the configured operator repair procedure.",
        },
        {
          question: "Does the system integrate with our GIS (Esri / PODS / APDM)?",
          answer: "Yes. The typical pattern is a one-way feed from GIS into Atlantis NDT ERP for asset-segment data and HCA status, refreshed daily or on-demand. The ERP does not attempt to replace the GIS as the system of record for the pipeline asset. Bi-directional feedback (e.g., pushing as-built dig outcomes back to GIS) is available in phase two for operators that want it.",
        },
      ]}
      related={[
        { slug: "oilfield-services", label: "Drilling & Wellsite Inspection Services" },
        { slug: "industrial-coatings-inspection", label: "Industrial Coatings Inspection" },
        { slug: "ndt-inspection-companies", label: "Gulf-Coast NDT Inspection Contractor" },
      ]}
    />
  );
}
