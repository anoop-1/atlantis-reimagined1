// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "heat-exchanger-ndt",
  "slug": "tube-identity-plugging-history-campaign-reconciliation",
  "title": "Reconciling Tube Identity, Plugging History and Cross-Campaign Records",
  "description": "How exchanger maintenance teams can resolve tube numbering, viewing direction, bundle replacements and plugging events before combining campaign records.",
  "intent": "Informational guidance for maintenance planners reconciling exchanger tube identity and history before technical comparison of examination campaigns.",
  "primaryOffer": "twin",
  "sections": [
    {
      "heading": "Begin with the tube population, not the colored map",
      "paragraphs": [
        "A tubesheet map can make a large examination dataset easy to understand, but its apparent precision depends on the identity behind each symbol. Two campaigns may number tubes in opposite directions, use different viewing ends or include different bundles under the same exchanger tag. A plugged tube can disappear from a later acquisition list even though its history still matters. Before overlaying results, establish what physical population each map represents and how individual tube identities relate. Otherwise a visually convincing comparison can place an older finding on the wrong tube.",
        "This guide is about reconciling records for review. It does not select a tube examination method, determine a plugging criterion or authorize an exchanger to return to service. Eddyfi's published tube-mapping documentation describes configurable numbering sequences and tubesheet representations, illustrating why numbering conventions are part of the evidence context. The workflow below is independent of a particular software product. It can be maintained in a controlled worksheet provided the sources, identity decisions and unresolved questions remain visible to the responsible exchanger integrity team."
      ]
    },
    {
      "heading": "Separate the exchanger position from the physical bundle",
      "paragraphs": [
        "Record the functional exchanger tag and the physical bundle identity separately. A replacement bundle may occupy the same equipment position while having a different manufacturing history or tube layout. Capture installation and removal events, bundle serial references where available, drawing revisions and source documents supporting those associations. If a bundle moved between shells or equipment positions, retain the move as an event. Its prior examination history follows the physical bundle, while the functional asset history records which bundle was installed during each period.",
        "Within that bundle, distinguish the tube identity from an acquisition sequence number. An inspection team may examine tubes in an efficient order that does not match the owner's permanent numbering system. Preserve the acquisition list and its mapping to tube identities. A file named 0042 may mean the forty-second acquisition, not tube number 42. Where the original convention is unclear, ask for the source list or analyst clarification. Do not let a convenient filename become the permanent identity without evidence that it represents the intended tube."
      ]
    },
    {
      "heading": "Make orientation and numbering explicit",
      "paragraphs": [
        "Every campaign map should identify the viewing end, orientation references, row and column conventions, and any partition or other fixed feature used for location. Include a legend explaining whether numbering follows rows, columns, a serpentine path or another defined sequence. A photograph can help establish orientation, but it should be linked to the relevant bundle and date. If it is rotated or mirrored for presentation, retain the original and label the transformation. A map with no stated viewing direction leaves a future reviewer to guess whether left and right correspond across campaigns.",
        "Create a crosswalk between campaign identifiers only after the orientation is understood. Check several distinctive locations across the population rather than relying on one corner. A match at one point may still hide a reversed sequence elsewhere. Where U-tube geometry or another arrangement creates paired ends, record the relationship needed to identify the physical tube without assuming each visible opening is an independent tube. The technical team should confirm the applicable geometry. The records coordinator's role is to preserve that interpretation and ensure every dataset uses it consistently."
      ]
    },
    {
      "heading": "Treat plugging as an event with evidence",
      "paragraphs": [
        "A current plugged status is useful, but it is not a complete plugging history. Retain the event date, tube identity, work order or record reference, recorded reason and the decision source. Where the project records plug type, location or verification evidence, keep those links as well. Separate a recommendation to plug from a record that plugging occurred. A red symbol on an examination map may indicate a recommended action rather than an installed plug. The legend and the underlying decision record determine its meaning.",
        "Distinguish previously plugged, newly plugged, reported inaccessible, not examined and identity unresolved. Those states have different implications for the campaign population and should not share one blank value. If a later record says a tube is available after an earlier plugged status, do not overwrite the old state. Request the intervening maintenance evidence and preserve the question until resolved. The history may reflect an actual intervention, a numbering mismatch or an earlier transcription error. Each explanation needs its own evidence and may affect different downstream records."
      ]
    },
    {
      "heading": "Reconcile counts before combining findings",
      "paragraphs": [
        "Prepare a population summary for each campaign showing the stated total, planned examination population, recorded acquisitions and excluded or unresolved identities. Define the categories so they do not overlap accidentally. A tube with an incomplete acquisition should not be counted both as fully examined and as unexamined merely because it appears in two source lists. Keep the source counts and the reconciled counts side by side, with explanations for differences. A balanced total is a useful consistency check, but it does not prove that individual identities are correctly mapped.",
        "Investigate missing and duplicate tube references before calculating percentages. A duplicate can be a repeat acquisition, a corrected file or two results accidentally assigned to one tube. Preserve separate examination events when they are real, and identify superseded interpretations without deleting source files. A missing result may reflect exclusion from scope, an access limitation or an omitted export. Record the actual explanation when known. When it is unknown, leave the tube in an unresolved category rather than assuming that absence means no relevant finding."
      ]
    },
    {
      "heading": "Hypothetical example: matching two maps without mirroring the history",
      "paragraphs": [
        "Consider a hypothetical exchanger position E-310 whose 2021 report contains a map of bundle B-7 with 600 tube identities. A 2025 campaign arrives with 584 acquisition records and a map numbered from the opposite side. The maintenance summary states that 16 tubes were previously plugged. At first glance, the numbers appear to reconcile perfectly. The coordinator nevertheless checks bundle identity, orientation and event history before accepting the match. A total of 584 plus 16 equals 600, but that arithmetic says nothing about which physical tubes the records describe.",
        "The bundle installation record confirms B-7 remained in place. A dated tubesheet photograph establishes the viewing end for the older map, and the current team supplies its numbering convention. The proposed crosswalk is checked against distinctive partition features and several known plugged positions. Of the 16 stated plugging events, twelve records map cleanly, two entries use ambiguous shorthand and two lack individual supporting records in the supplied maintenance file. Separately, two current acquisition files appear to repeat tube identities after a restarted acquisition. The apparent perfect count had concealed uncertain plugging locations, missing evidence and duplicate records.",
        "In this hypothetical case, the repeated files are retained as acquisition events and their interpretation status is clarified. The two ambiguous historical plugging entries stay unresolved while the maintenance team retrieves the original work order, and the two missing plugging records receive separate evidence requests. The 584 acquisition files represent only 582 distinct tube identities if the two repeats are confirmed; the population therefore needs further reconciliation even if all 16 plugged identities are established as distinct exclusions. The final comparison set includes confirmed tube associations and an explicit exception list. No findings are transferred onto the uncertain identities, and the unexplained gap is not filled by assigning the nearest available map position. The engineer receives a population reconciliation that states what is established, what remains uncertain and which source records could resolve the remaining questions."
      ]
    },
    {
      "heading": "Keep finding comparison separate from identity reconciliation",
      "paragraphs": [
        "Once a tube relationship is confirmed, the technical reviewer still needs to determine whether the findings are comparable for the intended purpose. Different methods, coverage, acquisition conditions or reporting conventions can create differences that a tube identity crosswalk does not resolve. Link each finding to its campaign, method record, relevant location convention and source interpretation. A tube-level match does not automatically establish that two axial positions or reported indications are equivalent. Preserve the basis for any more detailed association made by the responsible reviewer.",
        "Use separate status fields for identity resolved and comparison reviewed. This prevents an administrative reconciliation from appearing to approve a technical trend. The reviewer may accept the tube identity while limiting a comparison to a broad historical reference. Another tube may have sufficiently detailed records for a more specific comparison. Record the intended use and limitations alongside the result. A later analyst should not have to infer them from a meeting note or discover that the crosswalk was designed only to reconcile population counts."
      ]
    },
    {
      "heading": "Plan the next campaign around the reconciled population",
      "paragraphs": [
        "Before the next outage, issue a controlled population package containing the bundle identity, orientation map, numbering convention, plugging history and unresolved items relevant to planning. Give the acquisition team a clear route for reporting discrepancies encountered in the field. A disagreement between the package and observed labels should become a traceable question. The field team should not silently edit the master population to fit the local situation. Their observations are valuable evidence, but the identity change needs review and a recorded basis.",
        "Record the package version used for acquisition. If a numbering correction is approved during the campaign, identify which files were acquired before and after the change and preserve the mapping. Otherwise the final folder can contain two conventions with indistinguishable filenames. At handover, include the actual acquisition list and exclusions, not merely the planned list. This makes the population reconciliation possible without relying on the team being available months later to explain which tubes were skipped, repeated or renamed."
      ]
    },
    {
      "heading": "Retain the axial reference behind a tube finding",
      "paragraphs": [
        "A tube identity establishes which tube is involved, but a finding may also depend on a position along its length. Preserve the stated origin, direction, units and any support or tubesheet references used in the source report. If campaigns measure from different ends, a conversion requires an established geometry and a reviewed mapping. Do not subtract a reported distance from a nominal length and assume the result locates the same feature. The available dimensions and conventions may not support that level of precision.",
        "When an axial location is approximate, keep that qualification visible in the comparison. A historical note such as near first support is useful context but should not become an exact coordinate during migration. Store the original wording alongside any proposed location association and its review status. This allows a reviewer to understand whether an apparent shift reflects physical evidence, a changed reference origin or a more detailed reporting convention. It also avoids transferring a precisely plotted symbol into a model when the source only supports a general region."
      ]
    },
    {
      "heading": "A practical reconciliation checklist",
      "paragraphs": [
        "Use the checklist during package preparation and again before the historical overlay is released for review. Test both directions: pick a current tube and find its historical evidence, then pick an old plugging event and find its current identity. Include difficult cases such as a repeat acquisition, an excluded tube and a bundle replacement. The exercise should reveal unsupported links rather than reward a visually complete map. Any unresolved item should identify the evidence needed and the person responsible for obtaining it."
      ],
      "bullets": [
        "Confirm the physical bundle and its installation history separately from the exchanger position, including any movement between equipment tags.",
        "Preserve each campaign's viewing end, orientation, numbering sequence and original map, with transformations identified on derivative images.",
        "Map acquisition file identifiers to permanent tube identities and distinguish repeated acquisitions from duplicate copies of the same record.",
        "Link plugging recommendations, completed maintenance events and current status without treating them as interchangeable statements.",
        "Reconcile population totals using explicit categories for examined, excluded, plugged, incomplete and unresolved records as applicable to the package.",
        "Check representative identity matches across the geometry and retain the evidence supporting each reviewed mapping rule.",
        "Keep identity resolution separate from the technical decision about whether findings, coverage and measurement locations can be compared.",
        "Deliver a versioned crosswalk, exception list and source index that remains usable when the next campaign team changes."
      ]
    },
    {
      "heading": "Protect the history when the map changes",
      "paragraphs": [
        "Common failure modes include mirroring a historical image without recording it, treating an acquisition sequence as a permanent tube number and carrying a shell tag across a bundle replacement as if the tube population were unchanged. Another is updating a tube's current status without retaining the event that changed it. These mistakes can remain hidden because the map still looks orderly. Review the evidence relationships behind the display, especially whenever a numbering convention, bundle identity or status legend changes.",
        "Keep the reconciled package as an identifiable issue with original maps, crosswalk rules, reviewed decisions and unresolved questions. When later evidence changes a mapping, identify the affected findings and downstream comparisons rather than merely replacing the diagram. The value of the record is its ability to explain the physical history of each tube and the limits of that explanation. An accurate exception list is part of a useful handover, because it tells the next team where confident interpretation must stop until the evidence improves."
      ]
    }
  ],
  "checklist": [
    "Separate bundle identity from exchanger position.",
    "Verify viewing direction and numbering conventions.",
    "Retain plugging events and repeat acquisitions.",
    "Deliver reviewed crosswalks with unresolved identities."
  ],
  "references": [
    {
      "label": "Eddyfi TubePro documentation: tubesheet representations and configurable numbering",
      "url": "https://eddyfi.com/en/product/tubepro"
    }
  ],
  "relatedOffers": [
    "inspection",
    "consulting"
  ]
};
