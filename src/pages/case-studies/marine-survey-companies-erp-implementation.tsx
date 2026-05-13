import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function MarineSurveyCompaniesErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="marine-survey-companies"
      industryName="Marine Survey & Offshore Inspection"
      title="FPSO Conversion Marine Survey Specialist — Atlantis NDT ERP Implementation Case Study"
      metaDescription="FPSO conversion and life-extension marine survey company, IMCA D-018, class-society alignment with DNV / ABS / LR. How Atlantis NDT ERP unified hull surveys, class records, and offshore mobilisation logistics."
      companyDescriptor="Specialist marine survey and offshore inspection company focused on FPSO conversion and hull life-extension surveys. Multi-class exposure (DNV, ABS, LR, BV). IMCA D-018 audited contractor. ~25 marine surveyors, 8 in-house NDT technicians, 4 dive technicians, 6 office and logistics staff. Anonymized under MNDA."
      region="Singapore HQ, global operations"
      companySize="~37 field + 14 office, 3 vessels under long-term charter"
      ctaMailSubject="Demo — Atlantis NDT ERP for marine survey & offshore inspection"
      challenge={
        <>
          <p>
            Marine survey work has a unique back-office signature: high-value, short-duration
            campaigns, intense mobilisation logistics, complex multi-party stakeholders (class
            society, flag state, owner, charterer, insurance underwriter), and an extremely high
            penalty for any documentation gap. The company under study had grown by reputation
            in the FPSO conversion segment over the past five years, supporting four major
            conversion projects for two yard groups. The growth had outrun the systems. Class-
            society records, IMCA personnel files, dive logs, ROV records, and hull-integrity NDT
            data lived in different systems. Producing a hull thickness gauging report that
            satisfied DNV's RU SHIP Pt.7 Ch.2 close-up survey requirements alongside ABS Hull
            Survey for new construction was a manual cut-and-paste effort between three tools.
          </p>
          <p>
            The IMCA D-018 audit cycle was the single biggest scheduled pressure point. IMCA
            audits the contractor's competency assurance, planned maintenance, dive equipment
            certification, ROV equipment register, and HSE management. The contractor had cleared
            the most recent audit but the auditor had noted under the "documentation accessibility"
            criterion that the time to retrieve a specific piece of evidence (for example, the
            cathodic-protection survey for a named vessel on a named date) was at the edge of
            acceptable. With the next audit nine months away the leadership team had committed to
            visibly improving documentation accessibility.
          </p>
          <p>
            The third pain was mobilisation. A typical FPSO conversion campaign required
            mobilising 8-12 surveyors and NDT technicians on 5-day notice to a yard in Singapore,
            Batam, or South Korea, with each surveyor requiring the right combination of class-
            society approvals, IMCA-recognised diver certifications (or surface-fed equivalents
            for hyperbaric / saturation tasks), valid BOSIET, current HUET, valid medicals, and
            country-specific work permits. The mobilisation matrix was maintained in two
            spreadsheets by an experienced logistics coordinator who had announced her retirement
            for late 2026 — and the company knew the institutional knowledge would walk out the
            door with her unless it was captured in a system.
          </p>
          <p>
            The fourth concern was hull-integrity data continuity. FPSOs in conversion typically
            have 15-25 years of trading-vessel history behind them. Capturing the previous
            class-record data (thickness gauging at previous special surveys, condition assessment
            programme records, intermediate hull condition surveys) into a structure that
            supported life-extension assessment was a recurring high-value, low-leverage analyst
            task. Each FPSO conversion bid required a senior surveyor to manually reconstruct the
            hull integrity baseline.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after a structured eight-week evaluation against three
            other candidates: a marine-specific class-society reporting tool (rejected because it
            did not cover IMCA personnel, dive equipment, or hull NDT data capture beyond the class
            interface), a generic offshore-contractor PMS / ERP (rejected because it had no
            structured class-society alignment), and the contractor's existing patchwork of tools
            with targeted custom development (rejected on lifecycle cost). Atlantis NDT ERP won
            because it modelled the surveyor as a personnel asset with multiple qualification
            schemes (CSWIP 3.1U / 3.2U / 3.3U / 3.4U, IIMS, IMCA, class-society approval), the work
            order as a marine campaign with mobilisation prerequisites, and the inspection record
            as a structured data point that could populate class-society templates.
          </p>
          <p>
            Phase one scope: certification and personnel qualification (with full IMCA + class +
            BOSIET / HUET / medical tracking), work-order / campaign management with mobilisation
            workflow, inspection scheduling, and document control. Asset management was added in
            a half-scope way — the contractor's own dive equipment, ROV systems, gas analyzers,
            and hyperbaric chambers — but customer-owned vessel asset registers were deferred to
            phase two. The customer portal was included for the two FPSO-conversion yard clients
            who specifically asked for live progress visibility.
          </p>
          <p>
            The integration plan was deliberately conservative because the contractor's IT support
            was thin. Microsoft 365 stayed for email and Teams; the existing accounting package
            (Xero) stayed for AP/AR. Atlantis NDT ERP pushed invoiceable campaigns to Xero through
            the standard connector. No attempt was made to integrate class-society systems directly
            — the existing pattern of producing class-society-shaped PDF reports was acceptable to
            DNV, ABS, and LR and the contractor did not want to take on a class-system integration
            project.
          </p>
          <p>
            The single highest-leverage configuration was the mobilisation prerequisite model.
            Each campaign was modelled with the required certifications, the required equipment,
            and the country-specific work-permit constraints. When the campaign manager opened
            a new campaign, the system surfaced the eligible personnel filtered by current
            qualifications, current medicals, and current work-permit status, with explicit
            blockers ("Surveyor A: BOSIET expires 14 days into campaign window — not eligible").
            This captured the retiring logistics coordinator's mental model in a structured form
            and was the most visible quick win.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Three days on-site at the Singapore HQ, two days remote with field teams. Captured the personnel matrix (qualifications, medicals, work permits), the equipment registers (dive, ROV, NDT), the typical campaign types (class survey, hull NDT, ROV inspection, dive inspection), and the class-society templates currently in use. Output: a mobilisation-prerequisite spec, a class-template inventory, and a phase-one configuration spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated 37 personnel records with full qualification chains across IMCA, CSWIP, class-society, and HSE schemes. Migrated ~620 owned-equipment records and 30 months of campaign history. Built the class-society report templates (DNV thickness gauging close-up, ABS hull survey new-construction, LR FPSO condition assessment, BV class renewal). Configured the mobilisation prerequisite engine for the seven most common campaign types." },
        { phase: "Week 7-8: Parallel-run", detail: "Two live campaigns ran in parallel — one FPSO conversion thickness gauging campaign in Singapore, one hull condition survey in South Korea. Daily variance review with senior surveyors. Caught and fixed: 9 mobilisation rule misconfigurations, a DNV close-up survey template ordering issue, and a class-society signature-block date format issue." },
        { phase: "Week 9-12: Go-live & training", detail: "Legacy spreadsheets retired at end of week 9. Six training cohorts: surveyors (1 day in two sessions), NDT technicians (half day), dive supervisors (half day), campaign managers (1 day), office (1 day), customer portal pilot with 2 yard clients (half day). Hyper-care for six weeks with the senior surveyor team embedded with the implementation team daily." },
      ]}
      outcomes={[
        { metric: "Mobilisation eligibility check", before: "2-4 hours manual cross-check", after: "Real-time, automated by campaign" },
        { metric: "Class-society report production", before: "1-2 days per major report", after: "Same-day, template-driven" },
        { metric: "IMCA evidence retrieval time", before: "Auditor noted as borderline", after: "Under 30 seconds per evidence item" },
        { metric: "Personnel-expiry incidents on mobilisation", before: "2-3 per year (late surfacing)", after: "0 (12 months)" },
        { metric: "FPSO conversion bid baseline construction", before: "1-2 senior-surveyor weeks", after: "1 day with system-supported pull" },
        { metric: "Customer-portal positive feedback (2 yards)", before: "No portal", after: "Both yards reported improved campaign visibility" },
      ]}
      lessonsLearned={[
        "Capturing the retiring logistics coordinator's mental model took a full week of paired sessions, not the planned two days. There were dozens of small rules that had never been written down (e.g., 'always carry one extra eligible surveyor as float for Batam mobilisations because permit issues occur there'). The exercise was high value and we now reserve a full week of senior-coordinator time for any marine implementation.",
        "Class-society template work was the longest single configuration. DNV and ABS had moved to electronic submission formats since the last template review and the legacy PDF templates were technically still acceptable but visibly out of date. The implementation refresh produced cleaner templates aligned with current expectations.",
        "Country-specific work-permit logic was harder than expected. Singapore EP / S Pass / DP rules, Korean working-visa rules, and Indonesian crew-change rules all needed to be encoded distinctly. Three of these rules were silently outdated in the legacy spreadsheet. Surfacing them was a benefit, but added effort.",
        "Customer-portal access for yard clients was the surprise win. Both yards reported that the portal reduced their own coordination overhead and one yard's quality manager explicitly named it as a factor in awarding follow-on work. We now position the customer portal as a first-row deliverable for marine implementations.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add the customer-owned vessel asset register for the two yard clients
            who have asked for it, the corrosion-tracking module for FPSO life-extension data
            continuity (capturing every special survey hull thickness data point as a structured
            data series rather than a PDF), and the audit-management module for IMCA D-018 audit
            preparation under §6.2 / §6.5 internal audit. The next IMCA audit is targeted as the
            outcome milestone.
          </p>
          <p>
            Phase three (2027) will explore the project-management module for multi-month FPSO
            conversion campaigns where the contractor scopes the full hull survey programme.
            Currently each campaign is run as a series of work orders; the project module would
            allow a single campaign-of-record structure. The contractor's largest yard client has
            indicated this would change the commercial relationship.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does Atlantis NDT ERP support multiple class societies (DNV / ABS / LR / BV / ClassNK)?",
          answer: "Yes. Each class society's expected report format is configured as a template variant with the society's logo, signature block, section order, and required content blocks. The inspection record is captured once and rendered into any class society's preferred format. The system does not directly integrate with class-society electronic submission portals — the typical pattern is to render the class-shaped PDF, validate, and submit through the surveyor's existing class portal account.",
        },
        {
          question: "How is IMCA D-018 compliance evidence handled?",
          answer: "IMCA's competency assurance, planned maintenance, equipment certification, and HSE records are first-class entities. Diver certifications, ROV pilot qualifications, dive-equipment service records, and HSE incident records are linked to personnel and equipment with audit-ready retrieval. The audit-export workflow produces an IMCA-shaped evidence package on demand.",
        },
        {
          question: "Can the system handle mobilisation prerequisites (BOSIET, HUET, medicals, work permits)?",
          answer: "Yes. Each campaign type carries a configurable prerequisite matrix (e.g., 'FPSO Singapore yard hull survey: BOSIET + valid OGUK medical + valid Singapore S Pass or EP + Class-X approval'). When a campaign is opened, the system filters the personnel pool to eligible candidates and surfaces blockers explicitly with timeline (e.g., 'Surveyor A's BOSIET expires 14 days into the campaign window — not eligible').",
        },
        {
          question: "How does FPSO life-extension hull data continuity work?",
          answer: "Hull thickness gauging readings are captured as a structured data series per location per date, not as a PDF blob. The previous special survey data is migrated as part of phase-one or phase-two work. Each new survey appends to the series, enabling automatic remaining-life calculation per ABS RCM, DNV CSR, or owner-specific corrosion model. The bid baseline that previously took two senior-surveyor weeks now takes one day.",
        },
        {
          question: "Does the system replace our Xero accounting?",
          answer: "No. Xero remains the system of record for AP/AR. Atlantis NDT ERP pushes ready-to-invoice campaigns to Xero through the standard Xero connector. Campaign revenue continues to recognise in Xero against the existing chart of accounts; the ERP adds operational visibility (mobilisation, qualification, equipment, class records) that Xero does not provide.",
        },
      ]}
      related={[
        { slug: "pipeline-integrity-services", label: "Midstream Pipeline Integrity Services" },
        { slug: "oilfield-services", label: "Drilling & Wellsite Inspection Services" },
        { slug: "ndt-inspection-companies", label: "Gulf-Coast NDT Inspection Contractor" },
      ]}
    />
  );
}
