import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function MetrologyLaboratoriesErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="metrology-laboratories"
      industryName="Metrology Laboratories"
      title="ANAB-Accredited Multi-Discipline Metrology Lab — Atlantis NDT ERP Case Study"
      metaDescription="ANAB-accredited metrology laboratory, ~12,000 customer instruments per year, full dimensional / electrical / pressure / mass / temperature / RF / optical scope. How Atlantis NDT ERP unified the scope and standardised the customer experience."
      companyDescriptor="Independent ANAB-accredited metrology laboratory with a full multi-discipline scope: dimensional, electrical (DC / LF / RF / microwave), pressure (gas + hydraulic), mass, force, temperature, humidity, optical, and torque. Handles ~12,000 customer instruments per year. ~45 metrology technicians, 7 metrology engineers, 8 office and customer-service staff. Anonymized under MNDA."
      region="US Southeast"
      companySize="~52 lab + 8 admin"
      ctaMailSubject="Demo — Atlantis NDT ERP for multi-discipline metrology laboratories"
      challenge={
        <>
          <p>
            The laboratory's scope had grown to nine measurement disciplines, each with its own
            metrology engineer, its own technician group, its own legacy software stack, and its
            own reporting template. The result was that the laboratory looked like nine small
            laboratories sharing a customer database. From the customer's perspective the
            experience varied — a customer with a calibration order spanning four disciplines
            received four certificates in four formats with four different cycle times. Some of
            the variability was unavoidable (RF / microwave calibration is genuinely slower than
            dimensional), but a significant portion was simply lack of a unified workflow. The
            laboratory had two customer accounts threaten to consolidate to a single-discipline
            specialist competitor over the consistency issue.
          </p>
          <p>
            The ANAB scope was the second pressure point. The laboratory carried roughly 480 CMC
            (Calibration and Measurement Capability) entries across all nine disciplines. Adding,
            modifying, or removing a CMC required a coordinated process involving the discipline
            engineer, the quality manager, and the ANAB assessor. The existing process worked but
            took weeks of elapsed time and was occasionally a bottleneck when a customer required a
            new scope item before the next assessment. The CMC change-control records were kept in
            a quality-manager-owned spreadsheet that had grown unwieldy.
          </p>
          <p>
            Uncertainty budget consistency was the third concern. Each discipline engineer had
            inherited an uncertainty model from a predecessor, and the models had drifted over a
            decade. A peer-review exercise in early 2025 had surfaced inconsistencies in how
            similar contributions (resolution, repeatability, reference-standard uncertainty) were
            handled across disciplines. None of the inconsistencies caused individual certificate
            errors but the cumulative effect was that the laboratory's uncertainty estimates were
            harder to defend on a customer audit than they should have been. The chief metrologist
            had committed to a uncertainty-model consistency programme as the next quality
            objective.
          </p>
          <p>
            The fourth concern was customer-specific decision rule heterogeneity. The laboratory's
            customer base ranged from manufacturing customers willing to accept simple ILAC G8
            statements through aerospace customers requiring ASME B89.7.3.1 guard-banded
            acceptance, with a small but commercially significant pharmaceutical customer base
            requiring custom risk-of-false-accept rules under their internal validation protocols.
            The decision rule applied to each certificate was a function of customer + scope and
            was stored only in the metrology engineer's head. The team accepted the risk that an
            engineer turnover would expose the laboratory.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            The laboratory's evaluation process was longer than typical because of the nine-
            discipline footprint. Four candidates progressed to deep evaluation: two metrology-
            specific systems, one quality-system platform with metrology bolt-on, and Atlantis NDT
            ERP. Atlantis NDT ERP won on three reasons. First, the calibration-management module
            modelled all nine disciplines with a shared underlying data model — discipline-specific
            measurement-result tables, but a single certificate workflow and a single customer
            experience. Second, the uncertainty budget builder per JCGM 100:2008 enforced a
            consistent treatment of standard contributions, which addressed the chief metrologist's
            consistency objective directly. Third, the decision-rule library supported ILAC G8,
            ASME B89.7.3.1 with configurable guard-band factor, and customer-specific rules as
            first-class configuration.
          </p>
          <p>
            Phase one scope: calibration management for all nine disciplines simultaneously,
            work-order management with the receipt-to-dispatch lifecycle, document control for
            procedures and the quality manual, customer portal, and the audit-management module
            for the ANAB scope change-control workflow. Inventory management was scoped at half-
            depth — in-house reference standards and customer instruments under custody. Project
            management was excluded.
          </p>
          <p>
            The single highest-leverage configuration was the unified certificate template. After
            extensive review with each discipline engineer, the laboratory adopted a single base
            template with discipline-specific result-table layouts. The template carries the lab's
            ANAB accreditation symbol, the customer details, the instrument details, the standards
            traceability statement, the measurement-result table appropriate to the discipline,
            the environmental conditions, the uncertainty statement, the decision rule statement
            per ISO 17025 §7.8.6, and the counter-signature block. Every certificate looks like
            the same laboratory's output regardless of which discipline performed the calibration.
          </p>
          <p>
            Uncertainty model consistency was addressed through a six-week parallel exercise. The
            chief metrologist and each discipline engineer reviewed every uncertainty contribution
            against a common style guide. Roughly 40 contributions were modified for consistency
            (without changing any individual uncertainty value materially), 12 contributions
            previously implicit were made explicit, and 4 contributions that had been silently
            double-counted were corrected. The output is a defensible, consistent uncertainty
            framework documented in the quality manual.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Three days on-site, two days remote. Captured the full nine-discipline CMC scope, the existing discipline-specific tools, the customer base segmentation, and the decision-rule customer mapping. Output: a CMC migration spreadsheet, an uncertainty-model consistency style guide, a customer-decision-rule register, and a phase-one configuration spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated the 480 CMC entries, ~22,000 customer instruments under active register, ~520 in-house reference standards with full traceability chain, three years of calibration history, the customer-decision-rule register, and the audit-finding history. Built the unified certificate template with nine discipline-specific layouts. Configured the audit / scope-change workflow." },
        { phase: "Week 7-8: Parallel-run", detail: "All nine disciplines ran in parallel. Roughly 900 customer instruments processed in both old and new systems. Daily variance review with the chief metrologist and discipline engineers. Caught and fixed: 18 uncertainty-budget mapping issues, 7 decision-rule misconfigurations, 3 discipline-specific result-table rendering issues, and a customer-portal access-control issue for one pharmaceutical customer." },
        { phase: "Week 9-12: Go-live & training", detail: "Discipline-specific legacy tools retired at end of week 9. Eight training cohorts: technicians per discipline (half day each), metrology engineers (1 day), customer-service team (1 day), customer portal pilot with 12 customers (half day). Hyper-care for six weeks with the chief metrologist embedded with the implementation team daily." },
      ]}
      outcomes={[
        { metric: "Cross-discipline customer-experience consistency", before: "9 distinct discipline experiences", after: "1 unified workflow, discipline-specific result tables" },
        { metric: "Multi-discipline order cycle time", before: "10-20 working days mixed", after: "5-10 working days mixed (per-discipline parity)" },
        { metric: "Uncertainty-model consistency", before: "Drift across 9 disciplines", after: "Documented, peer-reviewed common framework" },
        { metric: "ANAB scope change-control elapsed time", before: "Several weeks (manual)", after: "Days (workflow-supported)" },
        { metric: "Customer-portal positive feedback", before: "No portal", after: "88% positive in first 6 months" },
        { metric: "ANAB surveillance audit findings", before: "1-2 minor findings/cycle", after: "0 findings (2026 surveillance)" },
      ]}
      lessonsLearned={[
        "The uncertainty-model consistency programme was the single most valuable hidden deliverable. The implementation team had originally scoped it as a 'tidy-up while we migrate the data' task; the chief metrologist treated it as a strategic objective. The programme took three weeks longer than scoped but delivered a defensible uncertainty framework that the next ANAB assessor commented on positively. We now schedule uncertainty consistency as a named workstream for any multi-discipline metrology implementation.",
        "Customer-portal adoption was slower for pharmaceutical customers than for others. The pharmaceutical customer base required portal-access security review (GxP-aligned access control, audit-trail review, change-control review) that took 6-8 weeks per customer to complete. We now ship a pharmaceutical-customer onboarding pack including a portal validation summary that has cut review time materially.",
        "The 480-entry CMC migration was the largest single configuration task. The original CMC spreadsheet had drift between what was on the ANAB scope and what the lab actually offered to customers. Surfacing the drift required discipline-engineer time. The clean-up was a benefit but the effort was real — we now plan +30% on multi-discipline CMC migrations.",
        "Discipline engineer engagement varied by personality. Some engineers were strong advocates and accelerated their discipline's go-live; others were more conservative and held parallel-run longer than the project plan suggested. The chief metrologist accepted the variance rather than forcing schedule consistency, which preserved the engineering relationships. We now build asymmetric per-discipline timelines into multi-discipline plans.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will deepen the customer portal (pharmaceutical-customer GxP-aligned access
            already in place, expanding to aerospace-customer document-pull workflows), add the
            inventory module for in-house standards lifecycle and consumable management, and
            extend the audit-management module to cover the proficiency-testing programme under
            ISO 17025 §7.7.2. The next ANAB assessment cycle is the proof-point milestone.
          </p>
          <p>
            Phase three (2027) will explore the asset-integrity module for the laboratory's
            controlled-environment infrastructure (humidity chambers, temperature standards
            rooms, mass laboratory, RF screened rooms). Environmental conditions feed the
            uncertainty model directly and tighter integration is a known next-quarter opportunity.
          </p>
        </>
      }
      faqs={[
        {
          question: "Can the system handle nine measurement disciplines under a unified workflow?",
          answer: "Yes. The data model carries a discipline tag on every measurement result, allowing discipline-specific result-table layouts within a single certificate template. Workflow (receipt, conditioning, calibration, review, dispatch) is shared. Discipline engineers retain method-specific configuration depth (uncertainty model, environmental tolerances, intermediate-check rules) without forking the underlying workflow.",
        },
        {
          question: "How is uncertainty budget consistency enforced across disciplines?",
          answer: "The uncertainty budget builder per JCGM 100:2008 / GUM enforces a common style for Type A and Type B contributions. The style guide is configurable per laboratory and is the basis for the implementation's consistency exercise. Once the framework is in place, peer review and audit-driven changes are managed through a documented change-control process rather than ad-hoc edits to discipline-specific spreadsheets.",
        },
        {
          question: "How are ANAB CMC scope changes managed?",
          answer: "The audit-management module includes a CMC change-control workflow. A new or revised CMC entry is initiated by the discipline engineer, peer-reviewed by the chief metrologist, signed by the quality manager, evidenced with supporting validation data, and submitted to ANAB through the laboratory's existing ANAB liaison. The system tracks the elapsed time and surfaces bottlenecks; the underlying ANAB submission is unchanged.",
        },
        {
          question: "Can customer-specific decision rules be stored as configuration?",
          answer: "Yes. Decision rules are stored per customer per scope. ILAC G8 simple acceptance, ASME B89.7.3.1 guard-banded acceptance with configurable factor, and customer-specific risk-of-false-accept rules are all first-class. The applied rule renders on the certificate per ISO 17025 §7.8.6.2 and the engineer no longer carries the rule mapping in their head.",
        },
        {
          question: "Does the customer portal support pharmaceutical GxP-aligned access control?",
          answer: "The portal supports role-based access, audit-trail capture, and change-control review evidence sufficient for pharmaceutical customer review. The implementation team ships a GxP onboarding pack covering portal validation, access-control narrative, and audit-trail review, which has reduced pharmaceutical customer review time from ~8 weeks to ~3 weeks in recent deployments.",
        },
      ]}
      related={[
        { slug: "calibration-laboratories", label: "ISO 17025 Calibration Laboratory" },
        { slug: "environmental-testing-labs", label: "ISO 17025 Environmental Testing Lab" },
        { slug: "aerospace-quality-control", label: "Aerospace AS9100D NDT Shop" },
      ]}
    />
  );
}
