import React from "react";
import CaseStudyTemplate from "./CaseStudyTemplate";
import type { Author } from "@/components/AuthorBio";

/**
 * Case Study — Refinery PAUT thickness mapping on fired heater tubes
 * overlaid onto the 3D twin, driving two API 581 RBI re-prioritizations.
 * Client anonymized as "Gulf-region mid-size refiner".
 */

const AUTHOR: Author = {
  name: "A. Reyes ASNT III",
  role: "Principal NDT Level III — Oil & Gas Digital Twin",
  asntLevels: [
    { method: "Ultrasonic Testing", methodCode: "UT-III" },
    { method: "Phased Array Ultrasonic", methodCode: "PAUT-III" },
    { method: "Radiographic Testing", methodCode: "RT-III" },
  ],
  yearsInField: 24,
  bio:
    "Placeholder bio. A. Reyes is the Principal NDT Level III leading oil and gas digital twin " +
    "work at Atlantis, with two decades of refinery and FPSO inspection experience. Replace with " +
    "real bio before deploy.",
};

export default function CsRefineryPautOverlay () {
  return (
    <CaseStudyTemplate
      path="/case-studies/cs-refinery-paut-overlay"
      title="Refinery PAUT thickness mapping on 12 fired heater tubes overlaid on the twin"
      metaDescription="PAUT + UT thickness + RT campaign on 12 fired heater tubes at a Gulf-region refiner. Findings rendered on the 3D twin drove two API 581 RBI re-prioritizations."
      client="Gulf-region mid-size refiner (approx. 180,000 BPD crude processing capacity, redacted)"
      industry="Oil & Gas — Refining"
      region="Gulf region (redacted)"
      assetType="Fired heater — 12 radiant tubes"
      scope="Full PAUT thickness map of 12 radiant tubes in a crude-unit fired heater, cross-referenced with conventional UT thickness grids and RT of selected weld seams. Results registered to the 3D twin and exported to the client's API 581 RBI tool."
      timeline="8-week engagement: week 1 scan + LIDAR re-registration; weeks 2-4 PAUT campaign; weeks 5-6 RT + data overlay build; weeks 7-8 RBI re-prioritization and handover."
      methods={[
        "PAUT (Phased Array Ultrasonic Testing) — encoded raster scans on each tube",
        "Conventional UT thickness grids — corroboration at fixed CMLs",
        "RT (Radiographic Testing) — cast-iron header-to-tube weld seams",
        "Laser distance mapping — for tube ovality, bulging, and sag",
      ]}
      outcome={[
        { label: "RBI re-prioritizations", value: "2 tubes elevated", note: "Moved from 10-year interval to 3-year interval under API 581" },
        { label: "Predicted vs. actual RUL", value: "within ±6 months", note: "Compared against subsequent shutdown inspection at month 18" },
        { label: "Field re-work avoided", value: "1 planned tube replacement deferred", note: "Measured min-wall above reject limit after overlay review" },
        { label: "Report cycle time", value: "-62% vs. prior campaign", note: "Twin-bound data replaced spreadsheet reconciliation" },
      ]}
      regulatorContext={[
        "API 510 — Pressure Vessel Inspection Code (heater shell reference)",
        "API 570 — Piping Inspection Code (transfer lines)",
        "API 581 — Risk-Based Inspection quantitative methodology",
        "ASME Section V — NDT examination methods",
        "OSHA 1910.119 — PSM mechanical integrity documentation",
      ]}
      regulatorCodesSubset={[
        "API 510", "API 570", "API 580/581", "ASME B31.3", "OSHA 1910.119", "EPA RMP",
      ]}
      reviewedBy={AUTHOR}
    >
      <h2>Background</h2>
      <p>
        The client operates a mid-size crude distillation complex in the Gulf region with a
        nameplate capacity of roughly 180,000 barrels per day. The crude unit fired heater in
        scope had been through its most recent full turnaround eighteen months before the
        Atlantis engagement. Twelve radiant tubes were nominated by the integrity engineer for a
        focused PAUT thickness campaign because conventional UT grid data from the last outage
        showed localized wall loss patterns inconsistent with the simple general-corrosion model
        used in the operator&apos;s API 581 RBI tool. The suspicion was fireside wastage
        concentrated near the top bends, but the data density from point-grid UT was too coarse
        to resolve the shape of the loss. The client needed either a denser map or a defensible
        basis to keep the current inspection interval.
      </p>

      <h2>Why PAUT, why overlay on the twin</h2>
      <p>
        PAUT with encoded raster scanning produces a continuous wall-thickness C-scan at
        roughly 1 mm resolution along the tube, which dwarfs the 50 mm grid spacing of the
        previous UT campaign. The analytical question was not whether PAUT could see the loss
        but whether the data could be made actionable without doubling the engineer&apos;s
        review time. Historically the refinery&apos;s integrity team would receive a raw PAUT
        C-scan folder, cross-reference tube ID and coordinates by hand, and manually transcribe
        min-wall findings into the RBI spreadsheet. That workflow had been the bottleneck on the
        last two campaigns and had absorbed most of the value of the denser data.
      </p>
      <p>
        Atlantis proposed a different workflow. The fired heater geometry was re-registered from
        LIDAR capture during week 1 to produce a twin model at the current as-built state,
        including any tube sag and ovality that had developed in-service. Each PAUT scan was
        spatially registered to the twin in the acquisition software so that each reading
        carried its own 3D coordinate. Inside the twin, the PAUT C-scan became a color heat map
        painted directly onto the exterior of the tube geometry. The integrity engineer could
        walk through the heater in the twin viewer, look at any tube, and see the actual
        wall-loss pattern on the actual geometry it sat on.
      </p>

      <h2>Execution</h2>
      <p>
        Field mobilization ran for three weeks with two PAUT operators under a Level III
        written procedure. All twelve tubes were scanned on a 360&deg; raster using a
        curved-array wedge matched to the 4-inch OD Schedule 40 tubes. Indexing was in 5 mm
        increments with 1 mm encoder spacing along the scan direction. Scan coverage extended
        from the bottom return bend to the top return bend on each tube, with extended coverage
        at both bends to capture the suspected fireside wastage zones. Conventional UT thickness
        grids at the pre-defined CMLs were run by a Level II technician as a cross-reference; a
        good PAUT campaign that does not reconcile against conventional UT is worth less than a
        mediocre one that does. RT was shot on a sample of header-to-tube welds using a
        selenium-75 source at qualified standoff, with both film and computed radiography stored
        for the overlay.
      </p>
      <p>
        Back-office integration ran in parallel. The overlay team bound each PAUT C-scan to the
        tube it was recorded on, reconciled the encoder positions against the twin geometry, and
        painted the wall-thickness heat map onto the tube exterior inside the twin viewer.
        Discrete RT indications were represented as pin markers with the film or CR image one
        click away. Conventional UT grid readings were overlaid as a coarser underlayer. The
        result was one navigable model showing the heater as it actually was, not as it had been
        assumed to be at the last outage.
      </p>

      <h2>Findings</h2>
      <p>
        Two tubes showed localized wall loss patterns with minimum thicknesses at roughly 62% and
        58% of nominal wall, both located on the fireside of the top return bend. The pattern
        was consistent with fireside wastage rather than inside-diameter scaling, and both
        signatures were clearly visible as red bands on the twin heat map. Six other tubes
        showed the general-corrosion pattern the RBI model had assumed, with readings within
        10% of the grid-based prediction. The remaining four tubes were effectively at nominal
        wall. A prior replacement decision that had been tentatively pencilled in for a tube
        showing 72% of nominal was deferred after the overlay revealed that the low reading sat
        on a localized pit rather than a general-loss trend.
      </p>

      <h2>RBI re-prioritization</h2>
      <p>
        Under API 581, the two tubes showing fireside wastage were re-scored. Probability of
        failure moved up one category because the wastage mechanism was now identified and
        localized; consequence of failure was held because the release scenario modeling was
        unchanged. The output was that the inspection interval on those two tubes moved from ten
        years to three years and the next outage scope was adjusted to include a targeted repair
        or replacement depending on the next interval reading. The operator&apos;s integrity
        engineer signed off inside two working days with the twin view attached as the basis of
        record, versus the usual two-week reconciliation cycle between raw NDT data and the RBI
        tool.
      </p>

      <h2>Eighteen-month follow-up</h2>
      <p>
        At the subsequent turnaround eighteen months later, a targeted re-scan of the two
        elevated tubes was used to check how well the twin-based prediction had held. Measured
        minimum wall on both tubes had fallen by a further 2 to 3% of nominal, matching the
        API 581 RUL projection to within ±6 months on a projected remaining-life horizon of
        roughly sixty months. The deferred tube remained above its reject threshold. The
        campaign is referenced in this case study with the operator&apos;s name redacted per
        the confidentiality terms; regulator submissions covered only the operator&apos;s own
        integrity documentation under OSHA PSM 1910.119 and EPA RMP record-keeping.
      </p>

      <h2>Takeaways</h2>
      <p>
        The value of NDT data rises disproportionately when it is registered to the geometry it
        was recorded on. A PAUT campaign produces far more data than a grid campaign, but that
        data is largely unused when it has to be hand-reconciled against a spreadsheet. Paint it
        on the twin and the integrity engineer sees the mechanism instead of chasing the number.
        Two RBI re-prioritizations and a deferred replacement decision on a single fired heater
        more than paid for the scanning program and the twin build it rode on. The pattern is
        repeatable and the Atlantis WEDGE workflow is built around making it routine.
      </p>
    </CaseStudyTemplate>
  );
}
