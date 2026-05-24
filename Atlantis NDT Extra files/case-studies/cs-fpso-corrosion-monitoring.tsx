import React from "react";
import CaseStudyTemplate from "./CaseStudyTemplate";
import type { Author } from "@/components/AuthorBio";

/**
 * Case Study — FPSO offshore Brazil / West Africa corrosion monitoring
 * program combining ER probes, UT campaigns, IoT feed, and AI RUL
 * forecasting. Anonymized.
 */

const AUTHOR: Author = {
  name: "B. Okafor ASNT III",
  role: "Senior NDT Level III — Maritime & FPSO",
  asntLevels: [
    { method: "Ultrasonic Testing", methodCode: "UT-III" },
    { method: "Magnetic Particle Testing", methodCode: "MT-III" },
    { method: "Penetrant Testing", methodCode: "PT-III" },
  ],
  yearsInField: 19,
  bio:
    "Placeholder bio. B. Okafor is a Senior NDT Level III at Atlantis leading maritime and " +
    "FPSO asset work. Replace with real bio before deploy.",
};

export default function CsFpsoCorrosionMonitoring () {
  return (
    <CaseStudyTemplate
      path="/case-studies/cs-fpso-corrosion-monitoring"
      title="36-month FPSO corrosion monitoring with ER probes, UT campaigns and AI RUL forecasting"
      metaDescription="Offshore FPSO (Brazil / West Africa, redacted). Combined ER probes, biennial UT thickness campaigns, IoT live feed and AI RUL models under ABS and DNV to extend safe operating window."
      client="FPSO operator — deepwater West Africa / Brazil (redacted)"
      industry="Oil & Gas — Offshore Production"
      region="West Africa / Brazil deepwater"
      assetType="Floating Production Storage and Offloading (FPSO) — turret-moored, circa 2.0 MMbbl storage"
      scope="A 36-month corrosion monitoring program covering cargo tanks, slop tanks, crude oil wash lines, and the topside process modules. ER probes and permanently installed UT sensors feed a live IoT stream; biennial manned UT campaigns corroborate. AI RUL models forecast wall loss per plate."
      timeline="Rolling 36 months. Month 0 sensor install + twin build. Month 6 first manned UT campaign. Month 12 first RUL model retrain. Month 24 second manned campaign. Month 36 program review + optional extension."
      methods={[
        "ER (Electrical Resistance) corrosion probes — cargo tank atmospheres",
        "Permanently installed UT thickness pucks — bottom plates and side shell",
        "Manned UT thickness campaigns — hull plating, cargo tank internals",
        "AUT girth-weld inspection — topside piping",
        "MT and PT — weld and nozzle inspection at accessible locations",
        "Guided wave UT — underdeck piping sections",
      ]}
      outcome={[
        { label: "RUL forecast accuracy", value: "±9% at 24-month horizon", note: "Measured against manned-campaign truth at month 24" },
        { label: "Safe operating window extension", value: "+14 months", note: "Versus baseline survey cycle, approved under ABS class" },
        { label: "Unplanned tank entries", value: "0 in 36 months", note: "All data captured via permanent sensors or planned campaigns" },
        { label: "Integrity-engineering hours", value: "-38%", note: "Automated binding of readings to the twin replaced manual data reconciliation" },
      ]}
      regulatorContext={[
        "ABS Rules for Building and Classing Floating Production Installations",
        "DNV-OS-C102 — Structural Design of Offshore Ships",
        "API 581 — Risk-Based Inspection on topside process modules",
        "ANP / ANBV — Brazil regulator equivalent (if in Brazilian waters)",
        "IMO MARPOL — cargo system and slop tank compliance",
      ]}
      regulatorCodesSubset={["ABS", "DNV", "Lloyd's Register", "API 510", "API 570", "API 580/581"]}
      reviewedBy={AUTHOR}
    >
      <h2>Asset and operating context</h2>
      <p>
        The FPSO in scope is a turret-moored unit of approximately two million barrels storage
        capacity operating on a deepwater block whose exact geography is held under the
        operator&apos;s confidentiality terms. Conditions are consistent with either the
        Brazilian pre-salt or the West African deepwater basin: high sour-gas content in the
        produced fluid, warm seawater ballast, humid topside atmospheres, and a long distance to
        shore. Surveys require planned shuttle logistics. Unplanned tank entries are expensive
        and degassing windows are scheduled months ahead. The operator wanted to extend the safe
        interval between manned hull inspections without surrendering the engineering evidence
        that underpinned the class survey cycle.
      </p>

      <h2>Program design</h2>
      <p>
        Atlantis designed a three-layer inspection program. The first layer was continuous —
        sixteen ER corrosion probes distributed across the cargo tank atmospheres, the slop
        tanks, and the pump room, chosen to represent the different sour-gas and water-cut
        exposure regimes on board. The second layer was permanent UT — eighty-four installed
        thickness pucks bonded to bottom plates, side shell, and key topside piping spools,
        polled weekly over an IS-rated Modbus loop and lifted to shore by the existing VSAT
        link. The third layer was periodic manned UT — a full hull and tank thickness campaign
        at months 6 and 24 using conventional UT and AUT, with selected sections of topside
        piping scanned under guided wave UT to pick up buried or insulated segments.
      </p>
      <p>
        Each sensor installation site was captured in the LIDAR scan at program start and bound
        to a node on the vessel&apos;s twin. The twin was built from a combination of the
        as-built class drawings and the point cloud, so that every ER probe and every UT puck
        appeared at its true location on the 3D hull. Readings flowed in via MQTT and landed in
        a time-series store; each reading carried a pointer back to its twin node.
      </p>

      <h2>AI RUL model</h2>
      <p>
        Three model families were deployed. A per-plate wall-loss regressor took the UT puck
        time series, sour-gas composition logs from the cargo metering system, and ambient
        tank-temperature history and projected remaining wall on a rolling twelve- and
        twenty-four-month horizon. An anomaly detector on the ER probe signal flagged
        corrosion-rate excursions that were not explainable by cargo composition drift. A
        topside piping RUL model on the AUT girth-weld baseline looked at pit growth rate rather
        than general-loss trend. All three were retrained at months 12 and 24 using the
        manned-campaign truth data, so the model did not drift. Outputs were visible inside the
        twin as forecast heatmaps at whatever horizon the integrity engineer dialled in.
      </p>

      <h2>Manned campaigns</h2>
      <p>
        The month-6 manned campaign served as the first truth reference for the model family.
        Thickness readings at roughly 4,400 locations were taken using conventional UT by Level
        II technicians, with AUT on selected girth welds. Each reading was entered against its
        twin coordinate from a tablet application linked to the model; no readings were
        transcribed from paper. MT was run on topside nozzle welds at accessible locations and
        PT on suspect accessories. Findings were reviewed by Level III on board and signed off
        the same week.
      </p>
      <p>
        The month-24 campaign replicated the pattern. Predicted minimum wall from the model at
        each of the 4,400 UT locations was compared to the measured minimum wall at the same
        location. The mean absolute error across the population was 9% of projected wall loss
        on a 24-month horizon, concentrated in topside piping where vibration-driven error
        exceeded the general-corrosion regime the model was trained on. Cargo tank and hull
        plate performance was within 6% error. That accuracy was sufficient for ABS to accept
        the twin-plus-monitoring program as an alternative to a shorter manned survey interval,
        and for the operator to add fourteen months to the prior safe operating window before
        the next full campaign.
      </p>

      <h2>Regulator and class posture</h2>
      <p>
        ABS was the unit&apos;s classification society. The program was presented to the class
        surveyor in advance as a condition-monitoring augmentation to the regular Enhanced
        Survey Programme, not a replacement. All sensor installations were pre-approved in
        writing, and the AI model outputs were treated as advisory with the manned-campaign
        data the authoritative record. DNV-OS-C102 structural design references were used where
        applicable. For the Brazilian option the ANP/ANBV regime was overlaid on top of ABS. No
        reg findings were issued against the program during the 36-month window.
      </p>

      <h2>Results summary</h2>
      <p>
        Across three years the program caught one corrosion-rate excursion on an ER probe in a
        slop tank that was traced to a process-side dosing change, delivered 9% mean absolute
        error in RUL forecasting on a 24-month horizon, extended the next manned survey window
        by 14 months under class, and cut integrity-engineering hours by 38% against the
        baseline workflow on the same vessel. Zero unplanned tank entries were required. The
        live twin is the current operational record for the FPSO&apos;s inspection state and is
        the document of reference at the operator&apos;s quarterly integrity review. The
        operator has extended the program for a further 24 months.
      </p>

      <h2>Data governance and handoff</h2>
      <p>
        A 36-month program generates a large and sensitive data estate. The governance model
        was agreed with the operator up-front. Raw sensor streams were ingested into a
        time-series store hosted in the operator&apos;s own cloud tenancy, with Atlantis given
        scoped access under a data-processing agreement. The twin viewer itself ran on the
        Atlantis platform but federated data access back to the operator store rather than
        copying it. Model training used an extracted, anonymized slice rather than the raw
        stream. Class surveyor access was scoped to the twin viewer with no direct database
        access. At handoff at month 36, the operator received a full export of the twin
        including all model weights, training data slices, and reconciliation scripts, so that
        the program can continue either with Atlantis or under the operator&apos;s own
        integrity engineering group.
      </p>

      <h2>Lessons learned</h2>
      <p>
        Three lessons travel to the next FPSO engagement. First, the ratio of permanent UT
        pucks to ER probes mattered; starting with roughly five UT pucks per ER probe gave
        sufficient spatial coverage to triangulate an ER excursion to a specific tank
        sub-region. Second, the manned-campaign truth data is indispensable for retraining the
        model; skipping either manned campaign to save money would have halved the program&apos;s
        RUL forecast accuracy. Third, regulator and class pre-engagement paid back. A
        fifteen-minute conversation with the ABS surveyor in the first week saved weeks of
        scope negotiation later. None of the three lessons requires new technology; they are
        program-design choices that fall out of treating the twin as an engineering record
        rather than a visualization deliverable.
      </p>

      <h2>Takeaway</h2>
      <p>
        Sensor data without geometric context is a time series on a dashboard. Sensor data bound
        to a twin becomes an engineering record that survives handovers between integrity
        engineers and between class surveys. The combination of ER probes for atmosphere, UT
        pucks for plate, and periodic manned UT for ground truth is a reliable default for
        FPSOs where tank entries are expensive and weather windows are tight. For operators
        considering a similar program the minimum commitment is two manned campaigns inside 24
        months, roughly eighty permanent UT pucks on an Aframax-class or larger unit, and a
        class pre-engagement in the first two weeks of the program.
      </p>
    </CaseStudyTemplate>
  );
}
