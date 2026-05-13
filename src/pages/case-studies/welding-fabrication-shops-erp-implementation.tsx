import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function WeldingFabricationShopsErpImplementation() {
  return (
    <CaseStudyLayout
      industrySlug="welding-fabrication-shops"
      industryName="Welding & Fabrication Shops"
      title="ASME 'U' Stamp Fabrication Shop — Atlantis NDT ERP Implementation Case Study"
      metaDescription="ASME 'U' stamp pressure-vessel fabrication shop, 60-welder fleet, AWS D1.1 + ASME Section IX scope. How Atlantis NDT ERP tied WPS/PQR/WPQ control to live work orders and survived National Board re-audit."
      companyDescriptor="Mid-size pressure-vessel fabrication shop with ASME 'U' stamp authorization and AWS D1.1 structural scope. Approximately 60 active welders across two shifts, 4 CWIs, 1 ASNT Level III for NDE oversight. Annual shop output ~$25M-$40M of code work. Anonymized under MNDA."
      region="US Midwest"
      companySize="60 welders, 4 CWIs, 1 NDE Level III, 22 production / QA staff"
      ctaMailSubject="Demo — Atlantis NDT ERP for ASME / AWS welding fabrication shops"
      challenge={
        <>
          <p>
            The shop had been ASME 'U' stamp authorized for over a decade and held a clean
            National Board record, but the QMS that supported the authorization had aged into a
            fragile state. The WPS / PQR / WPQ library lived in a network share that was originally
            organized by code (Section IX vs D1.1) and had become organized by project as the shop
            grew, with the result that the same essential variable combination existed in four
            different folders with three different rev numbers. When a customer asked for "the
            current WPS for SA-516-70 to A106B at 0.500 inch wall in 3G position", the answer was
            usually correct but required a CWI to manually search and cross-check — which had
            twice resulted in an outdated WPS being attached to a production traveler. Both
            instances had been caught at QA gate review, but neither would have survived a
            customer audit.
          </p>
          <p>
            Welder continuity tracking under ASME Section IX QW-322 was the second area of
            concern. The rule is that a welder must use a particular process within six months to
            maintain continuity in that process; the shop's spreadsheet was updated weekly by the
            QA office but the data driving it (which welder ran which weld on which travelers)
            lived in shop-floor production records, paper hold-point cards, and the ERP-of-record
            (an aged make-to-order shop management system). The reconciliation took roughly six
            hours per week and was always at least one cycle behind reality. During a six-week
            slow period in 2025 the shop had nine welders silently slip out of continuity in MIG
            short-arc because no production records of that process had been entered for them; the
            requalification effort cost roughly $14K and four shop days.
          </p>
          <p>
            The third problem was NDE coordination. The shop used an external NDT subcontractor for
            RT and PAUT, and an in-house team of three Level IIs for MT, PT, and VT. Coordinating
            NDE call-out, ensuring the correct procedure was being used (the customer's procedure
            vs the shop's procedure vs the subcontractor's procedure), capturing examination
            results back into the traveler, and producing a code-compliant data package for the
            Authorized Inspector was a continuous source of friction. The Authorized Inspector
            had verbally noted at the last 'U' stamp renewal that the data package quality was
            inconsistent and would need attention before the next three-year renewal.
          </p>
          <p>
            The fourth pressure was AWS D1.1 structural work. The shop had taken on a state DOT
            bridge fabrication contract that required full D1.1 compliance including welder
            qualification under Section 6, NDE per Section 8, and complete traceability per the
            contract's QC plan. The existing systems could not represent the D1.1 work cleanly
            alongside the Section IX work, leading to risk of cross-contamination between the two
            regimes' qualification rules.
          </p>
        </>
      }
      whyAtlantis={
        <>
          <p>
            Atlantis NDT ERP was selected after evaluation against three alternatives: a generic
            shop-management upgrade (rejected because the vendor's "weld management" was a single
            free-text field), a dedicated welding-management point solution (rejected because it
            did not represent NDE workflow, customer code mapping, or AI quality / NCR / CAPA), and
            staying on the existing system with custom development (rejected on cost and
            risk). Atlantis NDT ERP won on three points: the work-order / traveler model could
            represent both ASME Section IX and AWS D1.1 simultaneously without cross-contamination,
            the certification-tracking module covered welder continuity per QW-322 as a first-class
            feature rather than a spreadsheet, and the quality-management module was capable of
            producing an Authorized Inspector data package as a one-click PDF.
          </p>
          <p>
            Phase one scope: work-order / traveler management with NDE coordination, the WPS /
            PQR / WPQ document control library, welder qualification and continuity tracking,
            and the quality / NCR module. Inventory was deferred to phase two — the shop's MRO and
            consumable handling was already well-managed in the legacy system and was not a pain
            point. Calibration management was added in a half-scope way (just the in-house NDE
            equipment) because the shop did not need a full lab-scope calibration capability.
          </p>
          <p>
            The integration plan was more complex than usual because the shop kept its legacy
            make-to-order system for production scheduling and bill-of-materials. Atlantis NDT ERP
            does not attempt to replace the BOM / MRP side of a fabricator; it integrates. The
            two systems exchanged work-order header data via a flat-file bridge built in three
            weeks of phase-one effort. The integration was deliberately one-directional initially —
            legacy creates the work order, Atlantis NDT ERP owns the welding / NDE / QA execution —
            which kept the integration simple and reduced risk.
          </p>
          <p>
            The single highest-leverage configuration was the essential-variable matrix. The
            implementation team and the lead CWI worked through the shop's full WPS library and
            represented each procedure as a structured set of essential variables per Section IX
            QW-253 / QW-254 / QW-255. Once the matrix was in place, the search "give me the current
            WPS qualified for SA-516-70 to A106B, 0.500 inch wall, 3G position, GMAW spray" returned
            a single answer in under a second, with full audit trail back to the supporting PQR.
            This single change eliminated the most error-prone CWI task.
          </p>
        </>
      }
      timeline={[
        { phase: "Week 1-2: Discovery", detail: "On-site week with the lead CWI, NDE Level III, QA manager, and shop superintendent. Captured the full WPS/PQR/WPQ register, the welder roster, the NDE subcontractor relationships, and the legacy system's data model. Output: an essential-variable mapping spreadsheet, an NDE coordination flowchart, and a phase-one configuration spec." },
        { phase: "Week 3-6: Data migration & configuration", detail: "Migrated 187 WPSs, 96 PQRs, 412 WPQ records, and 24 months of welder continuity history. Built the essential-variable matrix. Configured the data-package template aligned to the Authorized Inspector's preferences. Built the legacy-to-ERP flat-file bridge for work-order headers." },
        { phase: "Week 7-8: Parallel-run", detail: "Six active production jobs (mix of ASME and AWS D1.1) ran in both systems with daily variance review. Caught: 11 essential-variable mapping issues, an issue with how the system represented dual-certified materials (e.g., SA-516-70 / A516-70), and one calibration-decay issue for an RT subcontractor's Ir-192 source." },
        { phase: "Week 9-12: Go-live & training", detail: "Legacy QMS spreadsheets retired at end of week 9 (legacy production / MRP system retained as planned). Five training cohorts: CWIs (1 day), welders (half day, two sessions per shift), NDE techs (1 day), QA office (1 day), production schedulers (half day). Six weeks of hyper-care with daily stand-ups." },
      ]}
      outcomes={[
        { metric: "WPS search time (correct procedure)", before: "5-15 minutes CWI search", after: "Under 5 seconds, single result" },
        { metric: "Welder continuity reconciliation", before: "6 hours/week, 1 cycle behind", after: "Real-time, automated" },
        { metric: "Silent continuity lapses", before: "9 lapses in 2025", after: "0 lapses (12 months and counting)" },
        { metric: "AI data-package assembly", before: "1-2 days per major job", after: "Under 60 seconds (one-click)" },
        { metric: "QA gate review failures (outdated WPS)", before: "2-3 per quarter", after: "0 (12 months)" },
        { metric: "National Board surveillance audit findings", before: "Verbal concern raised", after: "Clean audit, AI commended data-package consistency" },
      ]}
      lessonsLearned={[
        "Representing dual-certified materials (SA-516-70 / A516-70 dual-cert, common on the shop floor) required a configuration we did not anticipate. The essential-variable matrix had to model dual certification as a single 'effective material' for WPS-matching purposes while preserving both heat numbers for MTR traceability. Two weeks of refinement during parallel-run, fully resolved.",
        "The flat-file bridge to the legacy production system was the right scoping decision but produced one operational lesson: the legacy system's work-order header data was not as clean as the team believed. The bridge had to add a normalisation step (trim whitespace, expand abbreviated material codes, lookup customer aliases) before the ERP would accept the data. Future fabricator implementations now include a dedicated data-cleansing day for the legacy headers.",
        "Training welders on the in-traveler hold-point sign-off was the toughest cultural change. Welders had signed paper travelers for decades; the move to a tablet at the welding booth was met with reluctance. The solution was a two-week parallel period where the welder signed both the paper and the tablet, after which the paper was retired. We now build this dual-signature period into all welder-facing rollouts.",
        "The Authorized Inspector's data-package preferences were not formally documented anywhere — they were carried in the AI's head. The implementation team spent two productive sessions with the AI to capture them. The exercise paid back during the next renewal cycle and strengthened the AI relationship.",
      ]}
      whatsNext={
        <>
          <p>
            Phase two will add the asset-management module for the shop's owned welding and NDE
            equipment (welding machines, gas systems, RT cameras, MT yokes, UT gauges), the
            corrosion-coupon programme for the shop's R&amp;D group, and a deeper integration with
            the in-house NDE team's reporting (PAUT scan plans imported automatically into the
            traveler). The phase-two budget is funded out of the operational savings from welder
            continuity reconciliation and AI data-package effort alone.
          </p>
          <p>
            Phase three (2027) is targeted at the project-management module for full
            new-construction projects, which the shop is now bidding for the first time. This
            will displace the legacy production system entirely if the phase-three pilot is
            successful, but the integration approach remains "decide then" — the shop is not
            committed to a full legacy replacement at this time.
          </p>
        </>
      }
      faqs={[
        {
          question: "How does Atlantis NDT ERP represent ASME Section IX essential variables?",
          answer: "Each WPS is structured as a set of essential variables per QW-253 (GTAW), QW-254 (SMAW), QW-255 (GMAW), QW-256 (FCAW), and the relevant tables for SAW, ESW, and other processes. Searching is by essential-variable match, not by free-text. The system carries the supporting PQR linkage so that a WPS missing its supporting PQR is automatically blocked from being attached to a production traveler.",
        },
        {
          question: "How is AWS D1.1 work kept separate from ASME Section IX work?",
          answer: "The work-order model carries a code-scheme tag (Section IX, D1.1, D1.5, AWS D1.6, B31.3, B31.1, etc.). WPS, PQR, and WPQ records are scoped per scheme. A welder qualified to D1.1 Section 4 cannot be assigned to a Section IX production weld through the same WPS without explicit cross-qualification mapping, which prevents the most common cross-contamination error.",
        },
        {
          question: "How does welder continuity tracking under QW-322 work?",
          answer: "Every production weld assigned to a welder updates that welder's continuity record per process. The dashboard surfaces welders approaching the six-month limit at 60, 30, and 7 days. The shop superintendent can plan a continuity test before the welder slips out of qualification, eliminating reactive requalification.",
        },
        {
          question: "Can the system produce an Authorized Inspector data package automatically?",
          answer: "Yes. The data-package template is configured to the AI's preferences (section order, traceability format, signature pages, NDE record format) and rendered on demand for any work order or job. The package includes the MTRs, the WPSs and supporting PQRs, the WPQ records for every welder used, the NDE examination records and procedures, the hydrotest record, the post-weld heat treatment record, and the final inspection record — assembled as a single PDF in under a minute.",
        },
        {
          question: "Does the system integrate with our existing MRP / production scheduling system?",
          answer: "Yes — the typical pattern for fabricators is one-directional integration where the legacy MRP creates the work-order header (job, BOM, schedule) and Atlantis NDT ERP owns the welding, NDE, and QA execution. Two-directional integration (status back to MRP) is available in phase two for shops that want it but is not required for go-live.",
        },
      ]}
      related={[
        { slug: "ndt-inspection-companies", label: "Gulf-Coast NDT Inspection Contractor" },
        { slug: "construction-quality-assurance", label: "EPC Construction QA Contractor" },
        { slug: "aerospace-quality-control", label: "Aerospace AS9100D NDT Shop" },
      ]}
    />
  );
}
