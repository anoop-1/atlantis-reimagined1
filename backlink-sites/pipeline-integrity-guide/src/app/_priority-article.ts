// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "pipeline-integrity-guide",
  "slug": "reconcile-chainage-coordinates-feature-identity",
  "title": "Reconciling chainage, coordinates and pipeline feature identity",
  "description": "Plan a traceable reconciliation of pipeline location references without silently merging different features or replacing original examination records.",
  "intent": "Informational data-reconciliation guidance for pipeline teams combining examination records with different location reference systems.",
  "primaryOffer": "twin",
  "sections": [
    {
      "heading": "Treat identity and position as different questions",
      "paragraphs": [
        "Two pipeline records can describe the same physical feature using different chainages, while two different features can have nearly identical coordinates. A reliable reconciliation therefore asks two questions separately: where was the observation recorded, and what physical feature does it concern? Matching a location field is evidence for identity, not proof of identity. This distinction matters when examination history is assembled from construction drawings, maintenance records, field sketches and later surveys.",
        "Begin with a defined use case. A team preparing a record handover may need a defensible cross-reference between report locations and the owner's feature register. A future field campaign may need enough context to relocate an examination area. An engineering comparison may require confidence that two measurements concern the same area. These uses can demand different evidence, and a mapping adequate for one should not silently be treated as adequate for all three.",
        "The workflow below concerns records and their relationships. It does not establish survey accuracy, excavation instructions, examination extent or an integrity assessment. Where a record cannot support the required location confidence, preserve the uncertainty and route it to the responsible specialist. A tidy map with an unjustified point location can be less useful than a visibly unresolved record with a clear plan for verification."
      ]
    },
    {
      "heading": "Inventory each location system before converting values",
      "paragraphs": [
        "For every source, identify the pipeline or route, branch, reference origin, direction of increasing distance, units, route version and date. Determine whether the distance represents chainage along an alignment, a station value, a local offset from a landmark or an acquisition-system distance. A column labeled distance does not explain which of these it contains. Keep the source terminology while adding an explicit interpretation field.",
        "The Open Geospatial Consortium's LandInfra model describes linear referencing in terms of a linear element, a referencing method and a measured value. That conceptual distinction is useful here: a number alone cannot describe a complete linear location. The article's reconciliation steps are an original planning approach, not a claim that using these fields implements the OGC standard or makes a pipeline dataset compliant with it.",
        "For coordinates, record the coordinate reference system, units, axis order, relevant datum information and the source's stated quality or limitations. Do not infer these solely from the number of decimal places. A coordinate copied from a map cursor and a coordinate supplied by a survey may look equally precise in a spreadsheet. Retain how the coordinate was obtained and whether it represents the feature, an access point or another nearby reference."
      ]
    },
    {
      "heading": "Preserve original values beside normalized representations",
      "paragraphs": [
        "Create a staging register that retains every original location string exactly as supplied. Add normalized values in separate fields, with the transformation or interpretation used. For example, an original station string can be preserved while a numeric distance is prepared for comparison. Record any assumptions about separators or units. A value such as 12+450 is not safely interpretable merely because another dataset uses similar notation.",
        "Store the source document identifier, revision, page or record row, and import date with each staged record. This lets a reviewer return to the evidence when a normalized value looks implausible. If a source is corrected later, keep both issues and identify which interpretation used each issue. Avoid maintaining a single mutable master value that conceals how the reconciliation changed over time.",
        "Use explicit missing-value states. Unknown reference system, unreadable source and not recorded are different problems. A zero inserted to satisfy a numeric field may become a false location at the route origin. Likewise, copying the asset's general coordinates into a missing examination-location field creates unsupported precision. The data structure should allow the record to exist without pretending its location is established."
      ]
    },
    {
      "heading": "Build candidate relationships from several independent clues",
      "paragraphs": [
        "Create candidate matches using location proximity, feature type, neighboring features, drawing references, component identifiers and the sequence of landmarks. The useful clues depend on the source material. A reported weld label, a nearby bend and an offset from a valve may collectively support a match that coordinates alone cannot resolve. Record which clues agree and which conflict instead of reducing the comparison immediately to a single confidence score.",
        "Give every candidate relationship its own identifier. It should connect a source record to a proposed owner feature, name the reviewer and contain the evidence supporting the proposal. Allow one source record to remain linked to several candidates while unresolved. Forcing a one-to-one match too early can hide ambiguity, especially where repeated features occur close together or where a report describes an area spanning more than one component.",
        "Define the evidence needed for each intended use with the owner. A provisional association suitable for finding records in an archive may be insufficient for comparing historical measurements. Use descriptive states such as confirmed by documented cross-reference, supported but awaiting review and unresolved. Avoid numerical confidence percentages unless the project has a defensible method for deriving and interpreting them. A subjective 95 percent can be mistaken for measured positional accuracy."
      ]
    },
    {
      "heading": "Account for route revisions and changing component populations",
      "paragraphs": [
        "A later route alignment may change the relationship between distance values without moving every physical feature. A replaced section may also introduce new components while older reports remain relevant to removed material. Keep route-version history and component lifecycle history separate. A location transformation explains position within a reference system; it does not establish that the material at that position is unchanged.",
        "Where a verified reference change can be expressed as a documented offset over a bounded section, record the section limits and supporting anchors. Do not apply that offset to the entire pipeline by convenience. More complex differences may require a specialist transformation or additional evidence. Preserve the mapping method and its limits so future users know where a converted chainage is supported and where it is only a candidate.",
        "Represent removal, replacement, split and merge relationships explicitly. A historic feature can remain in the register with an end date or superseding relationship rather than being deleted. If a new spool occupies an old location, it needs an identity relationship that explains replacement, not a silent inheritance of the old examination results. This prevents a visually continuous history from implying that examinations of removed material describe the installed component."
      ]
    },
    {
      "heading": "Hypothetical worked example: a forty-metre chainage discrepancy",
      "paragraphs": [
        "Consider a hypothetical records project involving a maintenance report that locates feature F-118 at chainage 8,420 metres on route revision A. The current owner register places candidate feature P-772 at 8,460 metres on revision B. A nearby coordinate and a matching feature description suggest a relationship, but the coordinator does not overwrite the original chainage. The staging record retains 8,420, revision A and the report's original location wording.",
        "The drawing archive contains a documented revision to the route reference before this section. Two identifiable landmarks bracketing the relevant area differ by forty metres between the two route versions. The records specialist prepares a candidate mapping limited to that bounded section. The supporting evidence includes the revision note, landmark cross-references and matching orientation information. The reviewer still checks the feature sequence because a plausible offset can accidentally align neighboring features.",
        "The source report identifies F-118 between a particular bend and a labeled connection, and the owner drawing places P-772 in that same relationship. With the documented cross-reference accepted through the owner's process, the mapping is marked confirmed for the stated record-reconciliation purpose. Both chainages remain visible with their route versions. The accepted relationship is stored as F-118 corresponds to P-772, rather than rewriting the historical report to claim it originally used the current chainage."
      ]
    },
    {
      "heading": "Hypothetical worked example: when the nearest point is wrong",
      "paragraphs": [
        "In the same hypothetical project, a second report concerns feature F-119. Its coordinates fall closer to P-773 than P-774, so an automated proximity check proposes P-773. However, the source sketch places the examined feature beyond a branch connection, while P-773 lies before it. The coordinate source is also described as an access-location note rather than a surveyed feature position. These conflicting clues prevent a confirmed match.",
        "The reconciliation team retains both candidates and asks the owner record custodian for a construction sketch referenced in the report. That sketch identifies a component serial reference associated with P-774. The reviewer evaluates the new evidence and records the accepted association, the reason the initial proximity suggestion was rejected and the limited meaning of the original coordinates. The coordinate value remains preserved; its interpretation changes from feature position to access reference.",
        "A third record cannot be resolved because its only location is a handwritten distance with no identifiable origin. It is left unresolved with a named owner and a specific request for supporting field records. It is excluded from comparisons requiring confirmed feature identity. The project does not claim a complete match rate by forcing that final record onto the nearest available feature. The unresolved entry becomes an actionable handover item instead of a hidden mapping error."
      ]
    },
    {
      "heading": "Review exceptions by the consequence of a wrong association",
      "paragraphs": [
        "Prioritize records whose identity affects an upcoming decision or a proposed comparison across campaigns. A mismatch on a general route photograph may have limited immediate impact. A mismatch between a repair record and an examination result can change the apparent history of a specific component. State the consequence in the exception entry so the reviewer understands why a location discrepancy needs attention.",
        "Distinguish coordinate-system problems from feature-identity problems. A specialist may be able to transform coordinates correctly while the report still refers to the wrong component label. Conversely, a documented serial-number cross-reference may establish identity even when geographic coordinates are absent. Assign the question to the role able to resolve it, and record which problem the resulting answer actually addresses.",
        "Keep a record of rejected matches because they prevent repeated investigation. Include the candidate feature, contradiction and evidence reference. If later information changes the conclusion, add a dated revision rather than deleting the rejected relationship. This creates a reviewable decision trail and makes it possible to understand why an earlier campaign used a different association without assuming that someone simply made an unexplained clerical error."
      ]
    },
    {
      "heading": "Test the reconciled dataset before using it as history",
      "paragraphs": [
        "Review a sample that deliberately includes route boundaries, repeated feature types, replacement sections, missing coordinates and records with multiple plausible candidates. A random sample dominated by easy matches can miss the situations most likely to fail. Trace each selected item backward to the original document and forward to the owner feature. Verify that the relationship states, source revisions and stated limitations survive export into the receiving system.",
        "Check for many-to-one relationships that were not intended. Several examinations may legitimately refer to one feature, but several supposedly distinct components mapped to one current identifier may indicate a merge error. Also check one-to-many relationships where a report describes an area spanning components. A database import that allows only one feature per report must not silently discard those additional relationships.",
        "Agree how the mapping will be maintained after handover. New drawings, corrected field labels and replacement records can change the evidence. Name a custodian, record the mapping version and provide a route for proposing corrections. Downstream summaries should identify which mapping issue they used, so an updated relationship can be traced to any trend chart or historical comparison that depended on the earlier interpretation. Include a notification route for affected users when a confirmed relationship changes; updating the master register alone will not correct copies already used elsewhere."
      ]
    },
    {
      "heading": "Practical reconciliation checklist",
      "paragraphs": [
        "Use these checks before treating the location register as a dependable link between examination campaigns. The purpose is to expose assumptions and preserve evidence, not to declare that every record must contain the same kind of coordinate. A well-documented local reference can be valuable; an unexplained globally formatted coordinate can remain unusable for the intended decision."
      ],
      "bullets": [
        "Identify route, branch, origin, increasing direction, units and route revision for each linear reference; retain unknowns explicitly.",
        "Record coordinate reference information and whether each coordinate describes the feature, an access point or another reference location.",
        "Preserve original strings, source document revisions and transformation notes beside normalized values instead of replacing historical evidence.",
        "Compare feature sequence, sketches and component references as well as spatial proximity, retaining conflicting clues and rejected candidates.",
        "Keep replacement-component identity separate from route-position mapping, and limit any transformation to its documented area of applicability.",
        "Test difficult examples in the receiving system and assign unresolved relationships before allowing confirmed-identity comparisons to use them."
      ]
    }
  ],
  "checklist": [
    "Identify each location reference system.",
    "Retain original values and transformation provenance.",
    "Review identity using multiple clues.",
    "Preserve unresolved matches and replacement history."
  ],
  "references": [
    {
      "label": "OGC LandInfra conceptual model: linear referencing",
      "url": "https://docs.ogc.org/is/15-111r1/15-111r1.html"
    }
  ],
  "relatedOffers": [
    "reporting",
    "consulting"
  ]
};
