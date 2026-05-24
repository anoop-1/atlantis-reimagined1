import React from "react";
import CaseStudyTemplate from "./CaseStudyTemplate";
import type { Author } from "@/components/AuthorBio";

/**
 * Case Study — Aerospace MRO depot, engine HPT blade inspection campaign.
 * FPI (PT) + ECT array + CT scan integrated into the per-blade digital twin
 * under AS9100 + FAA Part 145 scope. Anonymized.
 */

const AUTHOR: Author = {
  name: "D. Nair ASNT III",
  role: "NDT Level III — Aerospace & Defense MRO",
  asntLevels: [
    { method: "Penetrant Testing", methodCode: "PT-III" },
    { method: "Eddy Current Testing", methodCode: "ET-III" },
    { method: "Computed Tomography", methodCode: "CT-III" },
  ],
  yearsInField: 17,
  bio:
    "Placeholder bio. D. Nair is an NDT Level III at Atlantis leading aerospace MRO and " +
    "defense-sustainment inspection campaigns. Replace with real bio before deploy.",
};

export default function CsAerospaceMroEngineCmm () {
  return (
    <CaseStudyTemplate
      path="/case-studies/cs-aerospace-mro-engine-cmm"
      title="Aerospace MRO — HPT blade inspection with FPI, ECT array and CT scan bound per-blade twin"
      metaDescription="Aerospace MRO depot engine HPT blade inspection campaign: fluorescent penetrant, eddy-current array and volumetric CT integrated into a per-blade digital twin under AS9100 and FAA Part 145."
      client="Aerospace MRO depot — tier-1 regional (redacted)"
      industry="Aerospace MRO"
      region="Redacted"
      assetType="HPT (High Pressure Turbine) blade inspection — commercial turbofan"
      scope="Full inspection campaign on a population of HPT stage 1 and stage 2 blades during engine shop-visit overhaul. FPI, ECT array, and volumetric CT data registered to a per-blade digital twin for life-cycle traceability. AS9100-compliant quality records and FAA Part 145 repair-station sign-off."
      timeline="6-week engagement: week 1 process review + twin schema; weeks 2-5 inspection campaign on ~220 blades; week 6 data handover + MRO records integration."
      methods={[
        "FPI / PT (Fluorescent Penetrant Inspection) — surface-connected indications",
        "ECT array (Eddy Current Testing) — near-surface cracks at blade roots and fir-trees",
        "Volumetric CT (Computed Tomography) — per-blade internal cooling channel scan",
        "VT with photogrammetric registration — tip rub and leading-edge wear mapping",
      ]}
      outcome={[
        { label: "Blades inspected", value: "218 of 218 scheduled", note: "Zero re-inspection loops" },
        { label: "Per-blade twin record", value: "100% coverage", note: "Life-cycle traceability established at first shop visit" },
        { label: "Escape rate to secondary inspection", value: "-22%", note: "vs. prior campaign on same engine type at the same MRO" },
        { label: "QA record turn-around", value: "same-day", note: "Was 3-5 days under paper-based routing" },
      ]}
      regulatorContext={[
        "AS9100 Rev D — aerospace QMS, including special-process NDT controls",
        "FAA 14 CFR Part 145 — repair station certification",
        "EASA Part 145 — EU-equivalent maintenance organization approval",
        "OEM engine shop manual — inspection acceptance criteria",
        "NAS 410 / NAS 6049 — NDT personnel qualification",
      ]}
      regulatorCodesSubset={["AS9100", "FAA Part 145", "EASA Part 145"]}
      reviewedBy={AUTHOR}
    >
      <h2>Scope and setting</h2>
      <p>
        The engagement sits inside a tier-1 regional aerospace MRO depot performing shop-visit
        overhauls on a common commercial turbofan. HPT stage 1 and stage 2 blades receive a
        full inspection workflow at every shop visit because they are the hottest-running,
        highest-stress components in the hot section and because their failure mode is
        catastrophic enough that the OEM shop manual specifies a fixed inspection sequence. The
        depot operates under AS9100 Rev D for quality management, FAA Part 145 for repair
        station authority, and EASA Part 145 for work on EU-registered aircraft. NDT personnel
        qualification follows NAS 410 and the depot&apos;s internal NDT procedures, each
        authored and signed by an NDT Level III.
      </p>

      <h2>Pain before the engagement</h2>
      <p>
        The depot had three pain points. First, inspection data on individual blades was
        captured across three systems that did not share a blade serial number field — the FPI
        station booked indications against the blade serial in a QA workbook, the ECT array
        fed into a vendor-specific file format that lived on a technician laptop, and the CT
        scans were archived on a radiology server with a different index. Second, life-cycle
        traceability across shop visits was effectively impossible because reconciling the
        three sources at the next visit was a manual effort no one had time for. Third, the
        QA record-turnaround after a shop visit ran three to five days as paper packages moved
        through signatures, which pushed invoicing and delayed customer engine return.
      </p>

      <h2>What changed</h2>
      <p>
        Atlantis proposed a per-blade digital twin model. Each serialized blade got an
        individual record in the twin, indexed by the blade manufacturer serial number printed
        on the root, with space for every inspection event across its service life. At this
        shop visit the record captured the FPI findings, the ECT array readings at the root
        and fir-tree, the full CT volumetric scan, and photogrammetric documentation of tip rub
        and leading-edge wear. The engagement covered 218 blades across the two HPT stages. No
        new NDT technology was introduced; the work was to bind what the depot already did into
        one coordinated record.
      </p>

      <h2>FPI workflow</h2>
      <p>
        FPI followed the depot&apos;s existing approved written procedure — Type 1 hydrophilic
        postemulsifiable penetrant, 20-minute dwell, dedicated drain cycle, dry developer,
        inspection under UV-A in a light-controlled booth. The change was at the data-capture
        step. Technicians now scanned the blade serial at intake, opened the per-blade twin
        record, and recorded indications by tapping the blade diagram on a tablet. Indication
        type, length, and location were captured into structured fields rather than
        free-written notes. The Level II signed off in the record and the Level III
        counter-signed from a station that opened the same record.
      </p>

      <h2>ECT array</h2>
      <p>
        ECT array was run on the blade root and fir-tree using a form-fitting array coil
        matched to the blade profile. Raw C-scan images landed in the per-blade record with
        both the amplitude and phase channels. Near-surface cracks at the fir-tree notches were
        the primary target; the OEM shop manual reject criteria were encoded into the analysis
        template so that a Level II pass produced a first-cut accept/reject that a Level III
        then reviewed. Because the C-scan image was in the blade&apos;s own twin record, any
        future shop visit can open the prior ECT scan side-by-side with the new one.
      </p>

      <h2>Volumetric CT</h2>
      <p>
        CT was performed on a subset of blades flagged for internal cooling channel integrity
        review based on prior service hours and on any FPI or ECT indication that suggested
        subsurface follow-up. The CT volume was attached to the twin record as the full
        reconstructed dataset plus a Level-III-authored summary of channel wall thickness,
        coating status, and any indication that warranted repair or scrap disposition. Storage
        volumes are significant but the per-blade twin schema carried pointers rather than
        embedded data, so the working record stayed navigable.
      </p>

      <h2>QA and regulator fit</h2>
      <p>
        AS9100 compliance is a function of process conformance, personnel qualification, and
        traceable records. The twin workflow strengthened all three. Process conformance was
        stronger because indication capture was structured and the template aligned to the
        approved procedure. Personnel qualification was visible on the record because every
        sign-off carried the technician&apos;s NAS 410 certification scope. Traceability was
        materially stronger because the per-blade record was now the primary source of truth,
        versus a reconciled paper package. FAA Part 145 and EASA Part 145 inspectors reviewed
        the twin output during the following routine audit cycle and accepted the electronic
        record as the authoritative shop-visit QA record, subject to the usual retention and
        access requirements.
      </p>

      <h2>Numbers</h2>
      <p>
        218 blades were inspected against 218 scheduled; zero re-inspection loops were required.
        The per-blade twin record now exists for all 218 and is available for the next shop
        visit. Escape rate to secondary inspection — a depot-internal metric for findings that
        were missed in the primary inspection and caught in a downstream pass — fell 22% versus
        the prior campaign on the same engine type at the same MRO. QA record turn-around after
        a shop visit collapsed from three to five days to same-day because the record was
        already signed inside the twin when the blade left the inspection cell.
      </p>

      <h2>Integration with the MRO work order system</h2>
      <p>
        The depot&apos;s existing work-order system remained the master of shop-visit state.
        The twin did not replace it. What changed was that the work-order task for HPT blade
        inspection no longer carried the text instruction &quot;complete FPI + ECT + CT and
        attach report.&quot; It now carried a link to the per-blade twin record with the
        required fields pre-staged. Completion of the task was gated on the record being
        signed by both Level II and Level III. Integration was a lightweight API call from
        the work-order system to the twin, not a re-implementation of either system. This
        kept the depot&apos;s customer-facing shop-visit reports unchanged and kept the
        OEM&apos;s configuration-control interface unaffected.
      </p>

      <h2>Lessons for the next shop visit</h2>
      <p>
        The second shop visit on any given blade is the one where the twin earns its cost back
        a second time. At that point the blade record already contains the prior FPI, ECT, and
        CT data, and the current-visit inspection is framed against the prior-visit reference.
        Borderline ECT indications that would previously have been accepted on a pass-fail
        basis can now be reviewed against their prior amplitude to see whether they have grown
        or stayed dormant. That longitudinal view is effectively impossible under a
        paper-first or siloed-systems regime because nobody has the time to reconcile three
        separate archives for a single blade. The twin makes it the default view.
      </p>

      <h2>Takeaway</h2>
      <p>
        Aerospace MRO work is already tightly proceduralized; the opportunity is not to change
        the NDT methods but to bind their outputs into a per-asset twin that survives handovers
        between shop visits. The first shop visit that does this pays its own cost back in QA
        record turnaround; the second shop visit pays it back a second time by making
        life-cycle traceability routine. Under AS9100 Rev D and FAA Part 145 the electronic
        record is acceptable when it is as traceable and as signed as the paper record would
        have been. The per-blade twin meets that bar and extends it by making longitudinal
        comparison across shop visits the default view rather than the exception.
      </p>
    </CaseStudyTemplate>
  );
}
