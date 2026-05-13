import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function CalibrationLaboratoriesErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="calibration-laboratories"
      industryName="Calibration Laboratories"
      title="ISO 17025 Calibration Lab — Atlantis NDT ERP Implementation Case Study"
      metaDescription="ISO/IEC 17025-accredited calibration lab, ~8,000 customer instruments per year, multi-discipline scope. How Atlantis NDT ERP cut certificate cycle time, eliminated out-of-tolerance recall confusion, and survived ANAB surveillance with zero non-conformities."
      companyDescriptor="Independent ISO/IEC 17025-accredited calibration laboratory — approximately 8,000 customer instruments handled per year across dimensional, electrical, pressure, mass, and temperature disciplines. ANAB-accredited under ISO/IEC 17025:2017. Mid-size: two locations, ~30 calibration technicians, ~5 metrology engineers, ~6 office staff. Anonymized under MNDA."
      region="US Mid-Atlantic"
      companySize="~35 metrology + technician staff, 6 admin"
      ctaMailSubject="Demo — Atlantis NDT ERP for ISO 17025 calibration labs"
      challenge={
        <>
          <p>
            The laboratory had grown from a single-discipline (dimensional only) shop into a true
            multi-discipline operation over a decade. Each discipline had been added with the
            specific tooling and procedures required, but the back-office systems had never caught
            up. Calibration records were kept in three distinct places: dimensional in a homegrown
            Access database that was nearing 15 years old, electrical in spreadsheets, and pressure
            / mass / temperature in a vendor LIMS originally bought for a sister business. When a
            customer asked "where is my instrument?", the answer depended on which technician you
            asked, which discipline they worked, and whether the receiving log had been updated
            that morning. Two of the three customer-instrument-owner audits in 2025 had raised
            findings against the lab's traceability under ISO/IEC 17025:2017 §6.5 because the
            disciplines could not agree on a single record.
          </p>
          <p>
            The second problem was out-of-tolerance handling. ISO 17025 §7.10.1 requires the lab to
            notify the customer when a measurement result indicates the customer's instrument was
            previously providing results outside specification, so that the customer can assess the
            retroactive measurement risk on whatever the instrument had been used to measure. In
            practice the lab caught OOT events well, but the customer-notification workflow was
            email-driven, ad-hoc, and not consistently logged. A surveillance auditor in early
            2025 had flagged that the lab could not produce a complete OOT register for the prior
            twelve months without manual reconstruction from email folders — a finding that the lab
            had successfully closed with a corrective action, but which had cost two weeks of
            engineering time.
          </p>
          <p>
            Certificate cycle time was a competitive disadvantage. From customer receipt to
            certificate dispatch averaged 9-12 working days. Two competitors in the region had
            advertised 5-day turnaround and were taking key customer accounts. The bottleneck was
            not calibration capacity — the labs and standards were idle for portions of every day —
            but the certificate-production workflow: the metrology engineer reviewed the measurement
            results in the discipline-specific tool, drafted the certificate in Word using a per-
            discipline template, manually copied the uncertainty budget from a separate Excel file,
            had it counter-signed by a second metrologist, and dispatched it. The Word template
            had drifted between disciplines over time so the lab's certificates did not look like
            a single laboratory's output.
          </p>
          <p>
            The fourth concern was the upcoming addition of optical and force disciplines to the
            accreditation scope. The lab had won an MOU with a regional aerospace supplier that
            required both disciplines on the ANAB scope of accreditation within twelve months. The
            existing fragmented system could not absorb two more disciplines without becoming
            unmanageable.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Selection ran for nine weeks against three alternatives: continuing with the existing
            LIMS plus heavier customization (rejected — the LIMS vendor's roadmap did not include
            ISO 17025 §7.8 certificate generation), a metrology-specific LIMS (rejected as too
            narrow — the lab also needed quoting, billing, and customer portal in the same system),
            and a custom build (rejected on cost and timeline). Atlantis NDT ERP's calibration
            management module was selected because it was the only candidate that combined a
            §7.8 / GUM-compliant certificate generator, multi-discipline support out of the box,
            and a quote-to-cash workflow that integrated the lab's existing QuickBooks Enterprise.
          </p>
          <p>
            Phase one scope: calibration management, work-order management (calibration order
            lifecycle: receipt → conditioning → measurement → review → dispatch), document control,
            and the customer portal. Inventory was deferred to phase two — the lab had a fairly
            stable in-house standards register and the calibration module's reference-standard
            handling was sufficient for the launch. Project management was deferred entirely;
            the lab does not run multi-month projects in the EPC sense, so the project module added
            nothing.
          </p>
          <p>
            A core technical decision was uncertainty budget handling. The legacy practice had been
            "engineer drafts in Excel, calculates by hand, attaches PDF". Atlantis NDT ERP's
            uncertainty budget builder (per JCGM 100:2008 / GUM) computes Type A and Type B
            contributions from the measurement data plus the configured per-instrument
            uncertainty model. The metrology team mapped roughly 320 in-scope CMC (Calibration
            and Measurement Capability) entries from the ANAB scope into the system in six weeks,
            which was the largest single migration task. The benefit: every certificate carries a
            computed uncertainty traceable to the underlying measurement; no more Excel drift.
          </p>
          <p>
            Decision rules were the other major calibration-domain configuration. The lab's
            customer base required a mix of rules — ILAC G8 simple acceptance for most customers,
            ASME B89.7.3.1 guard-banded acceptance for the aerospace MOU customer, and a small
            number of customer-specific risk-of-false-accept rules for two pharmaceutical
            customers. The system stores the rule per customer per scope so the technician does
            not need to remember which customer wants which rule; the certificate renders correctly
            and the rule is stated on the document per §7.8.6.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "Two senior metrologists embedded with the implementation team for the first week. Captured the full CMC scope, the discipline-specific templates, the OOT workflow, the customer base segmentation, and the QuickBooks chart of accounts. Output: a CMC-mapping spreadsheet for the migration team plus a phase-one configuration spec covering 100+ decision points." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Imported ~14,000 customer-owned instruments (active register), ~280 in-house reference standards with traceability chain back to NIST, three years of calibration history, and the 320 CMC entries. Loaded the new unified certificate template (with optical and force layouts pre-built). Configured decision rules per customer." },
        { phase: "Week 7-8: Parallel-run", detail: "All five disciplines ran in parallel. Roughly 600 customer instruments processed in both old and new systems with daily variance review. Caught and fixed: 14 uncertainty-budget mapping errors, 2 decision-rule misconfigurations, the optical-discipline rendering of a particular measurement-result table, and a Greek-letter rendering issue in the pressure-discipline PDF generator." },
        { phase: "Week 9-12: Go-live & training", detail: "Old Access database and discipline spreadsheets retired at end of week 9. Six training cohorts: technicians per discipline (half day each), metrology engineers (1 day), customer service (1 day), customer-portal pilot with 8 customers (half day). Hyper-care for six weeks with a metrologist embedded with the implementation team daily." },
      ]}
      outcomes={[
        { metric: "Certificate cycle time (avg)", before: "9-12 working days", after: "3-5 working days" },
        { metric: "OOT register reconstruction", before: "2 engineer-weeks", after: "Available real-time, exportable in 30 seconds" },
        { metric: "ANAB surveillance audit non-conformities", before: "2 findings (2025)", after: "0 findings (2026 surveillance)" },
        { metric: "Certificate format drift across disciplines", before: "5 distinct templates", after: "1 unified template, discipline-specific layout sections" },
        { metric: "Customer-portal positive feedback", before: "No portal", after: "91% positive in first 4 months" },
        { metric: "Quoting cycle (new customer instrument)", before: "2-3 days", after: "Same-day automated quote" },
      ]}
      lessonsLearned={[
        "Mapping the 320 CMC entries took six weeks, not the planned four. The original spreadsheet contained ambiguities the metrology team had been silently working around for years — for example, two distinct dimensional micrometer ranges with the same nominal scope but different uncertainty due to different reference standards. Surfacing and fixing these took deliberate metrology-engineer time. We now plan +50% on CMC migration for any multi-discipline lab.",
        "Customer-portal adoption was slower than projected. We expected 60% of active customers to log in within 90 days; actual was 38%. The bottleneck was customer-side IT — many customers required the portal URL to be added to their corporate allow-list before procurement would let buyers use it. We now ship a customer-IT-friendly onboarding pack with whitelisting documentation up front.",
        "The single unified certificate template was the single highest-value design decision. Every customer audit in the eight months following go-live commented favourably on the consistency. Two customer auditors specifically called out the unified template as a sign of mature QMS practice.",
        "Decision-rule configuration was harder than expected. The aerospace MOU customer's guard-banded acceptance rule per ASME B89.7.3.1 required clarification with their supplier-quality engineer because the rule had not been formally written down on their side either. The conversation strengthened the customer relationship.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add the inventory management module (consumables, calibration block
            traceability, and probe lifecycle for the small NDT-equipment line the lab also
            supports), plus a deeper integration into the lab's environmental-conditions monitoring
            (Vaisala humidity / temperature sensors). The optical and force disciplines have been
            added to the ANAB scope on schedule and the aerospace MOU customer is now active.
          </p>
          <p>
            Phase three (2027) will explore the audit-management module for proficiency-testing
            tracking under ISO 17025 §7.7.2, replacing the current external-PT-coordinator
            spreadsheet. The lab is also evaluating the certification-tracking module for staff
            qualification records (ISO 17025 §6.2 personnel competence), which would replace the
            current HR system's narrow training log.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does Atlantis NDT ERP's certificate generator meet ISO/IEC 17025:2017 §7.8 requirements?",
          answer: "Yes. The certificate template includes the §7.8.2 common requirements (identification of the laboratory and customer, measurement results, uncertainty, environmental conditions, dates, identification of the standards used), the §7.8.4 calibration-specific content (measurement results table, conditions affecting results, statement of traceability), and the §7.8.6 decision-rule statement where applicable. The PDF renderer locks the certificate after counter-signature to prevent post-issue edits, satisfying §7.8.1.3.",
        },
        {
          question: "How are out-of-tolerance customer notifications handled?",
          answer: "When a calibration result indicates the customer's instrument was previously out of tolerance against the customer's stated use, the system flags the work order, blocks dispatch until the metrologist confirms the OOT determination, and triggers a structured customer notification through both the portal and email. The OOT event is logged in a single OOT register exportable for audit at any time, satisfying ISO 17025 §7.10.1 and §7.10.2.",
        },
        {
          question: "Can the system handle customer-specific decision rules (ILAC G8, ASME B89.7.3.1, customer custom)?",
          answer: "Yes. Decision rules are stored per customer per scope; the technician does not have to remember which customer wants which rule. The system supports simple acceptance per ILAC G8, guard-banded acceptance per ASME B89.7.3.1 with configurable guard-band factor, and customer-specific risk-of-false-accept rules. The applied rule is rendered on the certificate as required by ISO 17025 §7.8.6.2.",
        },
        {
          question: "What is the migration effort for an existing multi-discipline scope?",
          answer: "Plan on five to seven weeks for a lab in the 8,000-15,000 customer-instrument-per-year range with three to six disciplines. The driver is CMC mapping rather than data volume — every CMC entry needs to be reviewed for ambiguities the legacy system was silently working around. We provide a CMC mapping spreadsheet and a metrologist-led workshop format that has cut migration time for similar labs.",
        },
        {
          question: "Does Atlantis NDT ERP replace our QuickBooks?",
          answer: "No. QuickBooks (Online or Enterprise) remains the system of record for AP/AR. Atlantis NDT ERP pushes invoice-ready calibration orders to QuickBooks through the standard connector, with line items mapped to your existing chart of accounts. Calibration revenue continues to recognise in QuickBooks; the ERP adds the calibration operational visibility QuickBooks does not provide.",
        },
      ]}
      related={[
        { slug: "metrology-laboratories", label: "Multi-Discipline Metrology Laboratory" },
        { slug: "environmental-testing-labs", label: "ISO 17025 Environmental Testing Lab" },
        { slug: "aerospace-quality-control", label: "Aerospace AS9100D NDT Shop" },
      ]}
    />
  );
}
