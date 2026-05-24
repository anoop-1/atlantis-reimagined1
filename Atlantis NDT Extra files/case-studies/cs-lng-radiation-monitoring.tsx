import React from "react";
import CaseStudyTemplate from "./CaseStudyTemplate";
import type { Author } from "@/components/AuthorBio";

/**
 * Case Study — LNG terminal (Qatar or Singapore generic, redacted) — radiation
 * monitoring + RT inspection of pressure vessels + gas detection sensors
 * integrated into the twin, under KEPIC + KGS code context.
 */

const AUTHOR: Author = {
  name: "C. Vargas ASNT III",
  role: "NDT Level III — LNG & Power Generation",
  asntLevels: [
    { method: "Radiographic Testing", methodCode: "RT-III" },
    { method: "Eddy Current Testing", methodCode: "ET-III" },
    { method: "Acoustic Emission", methodCode: "AE-III" },
  ],
  yearsInField: 21,
  bio:
    "Placeholder bio. C. Vargas is an NDT Level III at Atlantis leading LNG and power-generation " +
    "asset work, including KEPIC, KGS, and ASME Section V/VIII campaigns. Replace with real " +
    "bio before deploy.",
};

export default function CsLngRadiationMonitoring () {
  return (
    <CaseStudyTemplate
      path="/case-studies/cs-lng-radiation-monitoring"
      title="LNG terminal — radiation monitoring, RT inspection of pressure vessels, gas sensing on the twin"
      metaDescription="LNG import / export terminal (Qatar or Singapore, redacted). Radiation monitoring, RT of LNG-rated pressure vessels, and gas detection feeds bound to the twin under KEPIC and KGS."
      client="LNG terminal operator — Far East / Middle East (redacted)"
      industry="Oil & Gas — LNG"
      region="Far East / Middle East (redacted)"
      assetType="LNG receiving / export terminal — storage tanks, vaporizers, loading arms"
      scope="Radiation monitoring program at source-handling locations, RT inspection of LNG-rated pressure vessels, and integration of fixed gas-detection sensors into the terminal twin. Regulator context spans KEPIC for Korean-built equipment and KGS for pressurized-gas assets; ASME VIII Div 1 is the base code for the vessels."
      timeline="12-week engagement: weeks 1-2 twin model + sensor inventory; weeks 3-6 RT campaign on 22 pressure vessels; weeks 7-9 radiation and gas-feed integration; weeks 10-12 validation and handover."
      methods={[
        "RT (Radiographic Testing) — LNG-rated pressure vessels, Se-75 and Ir-192 sources",
        "CR / DR imaging — archived into the twin with indication mark-up",
        "Permanent radiation monitoring probes — source storage and use areas",
        "Fixed gas-detection sensors (IR methane, electrochemical H2S) — integrated onto twin",
        "Leak detection via passive acoustic — loading arm flanges",
      ]}
      outcome={[
        { label: "Vessels RT-inspected", value: "22 of 22", note: "Full population covered to ASME Section V Article 2" },
        { label: "Operator dose tracking", value: "twin-bound, per-technician", note: "Replaces paper dose-log reconciliation" },
        { label: "Gas-leak response time", value: "~40% faster", note: "Sensor alarm localises to 3D node, not tag list" },
        { label: "Regulator reviews", value: "KEPIC + KGS accepted", note: "Twin export used as primary evidence pack" },
      ]}
      regulatorContext={[
        "KEPIC-MN — Korean Electric Power Industry Code, mechanical (for Korean-sourced equipment)",
        "KGS AC series — Korea Gas Safety Corporation codes for pressurized gas",
        "ASME Section V — Nondestructive Examination (RT procedures)",
        "ASME Section VIII Div 1 — pressure vessel construction",
        "IAEA Safety Series and local radiation protection authority rules",
      ]}
      regulatorCodesSubset={["KEPIC", "ASME B31.3", "API 510", "OSHA 1910.119"]}
      reviewedBy={AUTHOR}
    >
      <h2>Asset</h2>
      <p>
        The asset is an LNG terminal with storage, vaporization, and ship-to-shore loading
        capability. The exact geography is held under the operator&apos;s confidentiality
        terms; the engagement is described in neutral terms that fit either a Qatari or a
        Singaporean / Malaysian context. The terminal operates under a mixed regulator frame
        where elements of Korean-sourced equipment carry KEPIC acceptance documents, pressurized
        gas handling is overseen under a KGS-style code where applicable, and the primary
        pressure-vessel code is ASME Section VIII Division 1 with RT to Section V Article 2.
        Radiation protection follows the IAEA safety series harmonized with the terminal
        country&apos;s radiation authority rules.
      </p>

      <h2>Three intersecting workstreams</h2>
      <p>
        The operator had three concurrent needs. First, a full RT inspection of twenty-two
        pressure vessels — receiving separators, BOG compressor suction vessels, vaporizer
        shells — because the prior inspection cycle was due and the data was scattered across
        three different inspection vendors&apos; report formats. Second, a radiation monitoring
        system upgrade at source storage and source use locations to move from clipboard dose
        tracking to a networked system with per-technician traceability. Third, an integration
        pass that took the existing fixed gas-detection network — infrared methane and
        electrochemical hydrogen-sulfide sensors — and bound it to the terminal 3D twin so that
        an alarm pointed at a geometric node instead of an anonymous tag.
      </p>
      <p>
        Atlantis proposed running the three workstreams in a single engagement so that the twin
        became the common coordinate system. A radiation monitor reading, an RT film of a
        vessel weld, and a methane sensor alarm all describe something happening at a specific
        point in physical space. If they share a coordinate system, an operator can ask
        questions across them. If they do not, each one lives in its own silo and the
        cross-questions are manual.
      </p>

      <h2>Twin build</h2>
      <p>
        Weeks 1 and 2 were a rapid LIDAR capture of the storage basin area, the vaporizer
        module, the loading arm gallery, and the source storage bunker. The terminal already
        had a design-intent 3D model from the EPC phase; the LIDAR pass was used to register
        as-built deviations. Every sensor and every source position was tagged into a node in
        the twin during the sensor inventory pass. By week 2 the twin was a browsable model
        with empty slots waiting for the RT, radiation, and gas data to flow in.
      </p>

      <h2>RT campaign</h2>
      <p>
        Weeks 3 through 6 ran the RT campaign on the twenty-two vessels. A Level III authored a
        site-specific written procedure per ASME Section V, with double-wall double-image and
        double-wall single-image configurations depending on vessel diameter. Sources used were
        Iridium-192 for thicker vessels and Selenium-75 for finer resolution on lighter wall.
        Both film and computed radiography were captured. Radiographic technicians operated
        under active dose monitoring from the upgraded radiation probes, with their individual
        dose accumulation visible on the twin against the source position at the time the
        reading was taken. Each finding — porosity, lack of fusion, slag — was marked up on the
        CR image and pinned to the weld seam in the twin. The film library was archived into
        the twin as attachments so that auditor access to the primary record did not require
        pulling a physical film folder.
      </p>

      <h2>Radiation monitoring</h2>
      <p>
        Weeks 7 through 9 installed and commissioned the radiation monitoring network. Fixed
        probes were placed at the source storage bunker perimeter, at the use location roped-off
        boundary, and at the technician staging area. All probes reported to a terminal-level
        aggregator and streamed into the twin time-series store over a cabled network. Per-
        technician dose tracking moved from paper TLD badge logs to a networked scheme in which
        each technician&apos;s dose for each shot was associated with a twin node and time-
        stamp. The regulator&apos;s record requirements were satisfied by a twin export rather
        than a separate log-book database.
      </p>

      <h2>Gas detection</h2>
      <p>
        The gas detection network at the terminal already existed and was not replaced. What
        Atlantis did was connect the existing alarm feed into the twin so that an alarm from an
        IR methane head or an H2S electrochemical head appeared as a flashing pin on the exact
        geometry it sat on. The operations room historically received an alarm on a tag ID and
        then had to look up the location in a reference document; the same alarm now appeared
        in the twin viewer at the correct equipment, with the four nearest isolation valves
        highlighted for quick response. No change was made to the underlying SIL-rated logic
        solver or to the gas detection hardware; only the visualization layer was added.
      </p>

      <h2>Regulator acceptance</h2>
      <p>
        Documentation was submitted to the terminal country&apos;s pressure-equipment authority
        using the twin export as the primary evidence pack for the RT campaign. KEPIC-MN
        equivalence documentation for Korean-sourced vessels was reconciled against the twin
        vessel records, and KGS-style pressurized-gas safety documentation was generated from
        the same source of truth. The regulator accepted the package on first submission. The
        radiation authority accepted the per-technician dose tracking scheme after an on-site
        demonstration of the twin-bound dose record. No finding or corrective action was
        issued.
      </p>

      <h2>Observed benefits</h2>
      <p>
        The operator reported a roughly 40% faster gas-alarm response time in the first month
        after the twin binding went live because operators could see where the alarm was in 3D
        rather than reading a tag list. The RT campaign&apos;s integration into the twin
        removed the three-way film-to-spreadsheet-to-report reconciliation that had absorbed
        most of the prior campaign&apos;s engineering hours. Per-technician dose tracking
        eliminated the monthly reconciliation pass between the TLD supplier and the terminal
        log-book. No radiation incident was recorded during the RT campaign.
      </p>

      <h2>Handover and ongoing operation</h2>
      <p>
        At handover the operator received the full twin, the RT film and CR archive, the
        radiation monitoring time-series database, and the written procedures under which
        each data stream was produced. Training sessions ran for the operations team on the
        twin viewer, the inspection engineering group on the RT record workflow, and the
        radiation safety officer on the per-technician dose tracking scheme. The operator&apos;s
        internal NDT Level III signed acceptance of the campaign records. Ongoing operation
        remained with the operator; Atlantis retained a retainer arrangement for the next
        routine RT campaign and for any ad-hoc source-use incident investigation.
      </p>

      <h2>What did not change</h2>
      <p>
        The existing gas-detection logic solver and its SIL rating were not touched. The
        existing radiation badges and TLD service were maintained in parallel for a six-month
        dual-run period before the operator moved to the networked system as primary. The RT
        technique and reject criteria followed the operator&apos;s own approved procedures
        under ASME Section V Article 2; no new RT technique was introduced. The point of the
        engagement was to bind the existing compliance stacks, not to replace them. That
        framing materially reduces regulator friction because nothing that was approved gets
        un-approved; a reporting layer is simply added on top.
      </p>

      <h2>Takeaway</h2>
      <p>
        LNG is a regulator-dense environment where RT, radiation monitoring, and gas detection
        already exist as separate compliance stacks. Binding them to one twin does not replace
        any of them; it gives the operator a single point of reference so that the stacks can
        talk to each other. The engineering work is less about new instrumentation than about
        geometric integration. Operators contemplating a similar scope should budget roughly
        twelve weeks, a LIDAR capture pass of the relevant process areas, and a parallel six-
        month dual-run on any regulator-touching instrumentation that moves from paper to
        networked capture.
      </p>
    </CaseStudyTemplate>
  );
}
