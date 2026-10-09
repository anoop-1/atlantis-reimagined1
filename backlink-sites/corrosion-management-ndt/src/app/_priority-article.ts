// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "corrosion-management-ndt",
  "slug": "reconciling-mismatched-corrosion-campaign-baselines",
  "title": "Reconciling Mismatched Measurement Baselines Across Corrosion Campaigns",
  "description": "A practical workflow for separating location, measurement and asset-history differences before comparing corrosion campaign data.",
  "intent": "Informational reconciliation guidance for corrosion and integrity teams reviewing incompatible historical measurement baselines, distinct from building a location register.",
  "primaryOffer": "twin",
  "sections": [
    {
      "heading": "A difference between numbers is not yet a condition trend",
      "paragraphs": [
        "Two corrosion campaigns can use the same equipment tag and still describe different physical locations, measurement footprints or component generations. An older spreadsheet may contain a local minimum, while a later report records a selected point. A replacement spool may retain the parent line tag. A drawing origin may have shifted. Subtracting the values produces a number, but that number does not establish a meaningful change in condition. Before interpreting a trend, the team needs to determine what each value represents and whether the evidence supports the proposed comparison.",
        "This guide addresses reconciliation of existing campaign records. It is not a guide to creating a location register, selecting a thickness technique or calculating remaining life. The objective is a reviewable comparison set that preserves original measurements, documents differences and keeps unsupported associations visible. Engineering interpretation, inspection intervals and operating decisions remain with the responsible technical authority. A good reconciliation can conclude that some data are directly comparable, some support only a limited comparison and some should remain separate. Keeping an honest gap is preferable to constructing an apparently continuous history from unrelated measurements."
      ]
    },
    {
      "heading": "Inventory what the campaigns actually contain",
      "paragraphs": [
        "Start by listing the source files, report issues, acquisition dates and asset scope for each campaign. Distinguish raw or field results from transcribed tables, reviewed reports and later analytical summaries. A historical database extract may already contain unit conversions, rounding or overwritten identifiers. Record its provenance and retain the original export as received. Where a report and spreadsheet disagree, create a discrepancy entry rather than choosing whichever value fits the expected trend. The applicable review process determines which evidence supports the comparison and how any correction is recorded.",
        "For each candidate measurement pair, capture the original location label, physical reference, units, reported value type and relevant method context. Value type matters: a point reading, an area minimum and an average answer different questions. Preserve the source's wording when its meaning is uncertain. If the original report does not explain whether a number is a minimum or a selected reading, label that uncertainty explicitly. Do not infer the meaning from the column heading alone when the interpretation materially affects the proposed comparison."
      ]
    },
    {
      "heading": "Resolve the physical object before resolving the numbers",
      "paragraphs": [
        "Check whether both campaigns concern the same physical component. Review replacement, rerouting, repair and installation records where available. A plant tag often identifies a functional position over time; it does not prove that the same piece of material remained there. Build a simple event timeline around the candidate comparison. If a component was replaced between campaigns, separate its histories at the replacement event and connect both to the functional asset. The earlier reading may remain valuable context, but it is not a starting thickness for the replacement component.",
        "Next, establish how the recorded locations relate. Compare orientation references, distances from fixed features, photographs and drawing revisions. A clock position is incomplete without a defined viewing direction. A distance along a line is ambiguous if the origin moved. Document the mapping between historical and current references and identify the evidence supporting it. When several old locations could match one new location, retain the alternatives until resolved. A nearest-coordinate match can help identify candidates, but proximity alone should not silently establish physical equivalence."
      ]
    },
    {
      "heading": "Keep method and measurement context with the comparison",
      "paragraphs": [
        "The measurement context can explain a mismatch that appears to be a physical change. Evident's guidance on corrosion thickness gauging notes that material sound velocity and transducer zero offset change with temperature. Its guidance on measuring through paint explains how coating can affect conventional ultrasonic thickness readings. These sources support retaining temperature, coating and configuration context where recorded; they do not supply a universal correction for historical data. A records team should not retrofit a correction from a general article without the application-specific information and technical review needed to justify it.",
        "Collect the applicable procedure reference, equipment and probe identification, recorded calibration or verification evidence and relevant surface-condition notes where those form part of the campaign package. Preserve acquisition settings in their source records rather than copying a few fields and assuming the context is complete. Missing information should be described by its consequence for the intended comparison. For instance, uncertainty about whether coating was included may limit a thickness comparison. The reviewer decides the significance; the coordinator ensures that the issue is visible before a trend is presented as established."
      ]
    },
    {
      "heading": "Use a reconciliation worksheet with explicit decision states",
      "paragraphs": [
        "A useful worksheet gives each proposed pair a comparison identifier. Include the two source references, physical identity status, location-mapping status, value definitions, units and known contextual differences. Add a proposed relationship and a reviewed decision. Suggested workflow states are comparable for the stated purpose, comparable with a stated limitation, unresolved and separate histories. These labels describe the treatment of the evidence, not the integrity of the asset. A low reading can have excellent traceability, while a reassuring reading can remain unsuitable for comparison because its location is unknown.",
        "Record the purpose of the comparison because suitability depends on the question. Evidence adequate for showing that an area was included in two campaigns may be inadequate for calculating a local rate. A regional overview and a point-by-point engineering assessment require different support. The reviewer should state what the reconciled association can be used for and any limitation. Keep that decision alongside the data export so a later analyst does not reuse the same pair for a more demanding calculation without seeing the original qualification."
      ]
    },
    {
      "heading": "Hypothetical example: an apparent increase with three explanations",
      "paragraphs": [
        "Consider a hypothetical line segment with a 2022 spreadsheet value of 7.8 mm at label L14 and a 2025 report value of 8.3 mm at label P14. An automated chart shows an increase of 0.5 mm and marks the result as anomalous. The coordinator first preserves both source records and identifies the question as a baseline association problem. The parent equipment tag matches, but that alone is insufficient. The team checks the physical component history, location mapping and definition of the reported values before asking an engineer to interpret the apparent increase.",
        "The source documents reveal three different situations across the segment. At one location, a spool replacement occurred in 2024, so the 2025 reading belongs to a new physical component. At a second location, the older value was the minimum from a defined scanned area, while the newer value was a point reading near its center. At a third, both records appear to identify the same point, but one campaign lacks the surface-condition and measurement-context information needed for the proposed comparison. These differences require separate decisions rather than a single correction applied to the whole dataset.",
        "In this hypothetical example, the replacement location receives separate histories connected by the replacement event. The area-minimum and point-reading pair is retained as contextual evidence, with a limitation against treating it as an equivalent local baseline. The third pair stays unresolved while the original acquisition package is requested. The arithmetic difference remains reproducible, but it is excluded from any chart presented as an established local condition trend. The reviewer sees why each pair was treated differently and what further evidence would be needed to change the decision."
      ]
    },
    {
      "heading": "Normalize units without normalizing away uncertainty",
      "paragraphs": [
        "Unit conversion is a transparent data transformation when the source unit is known. Retain the original value and unit alongside the converted value, the conversion rule and the precision used for display. Do not increase apparent precision merely because software can show more decimal places. A historical reading recorded to one decimal place should not acquire extra measurement certainty when converted. Where the source unit is missing or inconsistent, flag the record for resolution. Guessing from the magnitude can produce a plausible but unsupported result that survives unnoticed in later analyses.",
        "Treat other transformations more cautiously. Coordinate remapping, selection of an area minimum and exclusion of a questionable reading involve assumptions beyond a simple unit conversion. Record the rule, affected records and reviewer decision. Keep a reproducible comparison export with its version and date so the same analytical result can be reconstructed. If the reconciliation changes, issue a new export and explain the affected comparisons. An unversioned spreadsheet that quietly updates in place can leave an earlier engineering assessment referring to a dataset that no longer exists.",
        "Check duplicate records before aggregating a campaign. The same result may appear in a field export, a revised report and a later database migration. Those are not necessarily three independent measurements. Retain the relationship between copies and identify the source event they represent. Conversely, repeated readings taken during separate events should not be removed merely because their values match. Use event identity, dates and source references to distinguish duplication from repetition, and keep the deduplication decision reviewable whenever it affects the resulting comparison set."
      ]
    },
    {
      "heading": "Prioritize unresolved pairs by the decisions they affect",
      "paragraphs": [
        "Not every missing field deserves the same immediate effort. Identify which unresolved comparisons feed an active engineering review, maintenance plan or report issue. Then ask what specific evidence could resolve each one and who can supply it. A missing orientation photograph may be recoverable from the field archive; a missing definition of a historical summary may require the original analyst's explanation. Assign owners and dates to these requests. Keep the unresolved records available so the team can revisit them when new evidence appears, rather than deleting them from the history.",
        "Avoid treating the oldest reading as automatically the best baseline. Its usefulness depends on physical continuity, location certainty and measurement context. Likewise, the newest campaign is not automatically more reliable simply because its files are easier to access. The reviewer should choose an appropriate comparison basis for the intended purpose and document why. Where no supported historical pair exists, state that limitation clearly. Establishing a new baseline may be a future planning decision, but it does not retrospectively make earlier mismatched records equivalent."
      ]
    },
    {
      "heading": "Checklist for a reviewable comparison set",
      "paragraphs": [
        "Before presenting reconciled data, select a few comparison rows and reconstruct them from the original records. Include at least one accepted association, one limited comparison and one unresolved pair if those categories exist. The reviewer should be able to see how the result was reached without relying on the coordinator's memory. This retrieval exercise tests the evidence chain. It does not validate the underlying examination or approve the use of the data for an engineering calculation."
      ],
      "bullets": [
        "Retain each source report and dataset as received, with acquisition dates, issue dates and the distinction between original and derived values.",
        "Confirm physical component continuity and identify replacements, repairs or relocations that divide the historical record into different material histories.",
        "Document location mapping with origins, orientation and supporting evidence; leave ambiguous matches visible instead of forcing a nearest-neighbor association.",
        "Identify whether values represent points, minima, averages or another defined result, and retain uncertainty where the source does not explain the meaning.",
        "Capture available measurement context and route unexplained differences to the responsible reviewer without applying unsupported retrospective corrections.",
        "Preserve original units and values, document conversions and prevent display precision from implying greater measurement certainty than the source supports.",
        "State the permitted purpose and limitation of each reviewed comparison, especially where data are suitable for context but not a local trend calculation.",
        "Version the comparison export and maintain an action list for unresolved pairs with evidence requests, owners and affected downstream decisions."
      ]
    },
    {
      "heading": "Make the limitations travel with the data",
      "paragraphs": [
        "A carefully reconciled dataset can become misleading when exported without its decision notes. Include comparison status and limitations in the handover, and ensure charts distinguish supported associations from unresolved ones. Avoid joining points across a replacement event with a continuous line unless the presentation clearly communicates the change in physical component. A visual trend can imply continuity more strongly than a footnote can correct. Ask the receiving analyst to explain one limited pair back to the coordinator; misunderstandings at this stage are cheaper to correct than assumptions embedded in a later assessment.",
        "At closeout, preserve the source inventory, relationship worksheet, reviewed decisions and exact comparison export. Record the recurring causes of mismatch so future campaign packages can capture the missing evidence at acquisition. Useful improvements are specific: define the viewing direction, distinguish a point reading from an area minimum or link replacement events to the relevant measurements. The outcome is a history that can support informed review without pretending that every old number belongs in one uninterrupted trend."
      ]
    }
  ],
  "checklist": [
    "Check physical continuity and location mapping.",
    "Separate point readings, area minima and derived summaries.",
    "Retain method context and original units.",
    "Export reviewed comparison limits with the data."
  ],
  "references": [
    {
      "label": "Evident: corrosion thickness gauging and temperature-related measurement context",
      "url": "https://ims.evidentscientific.com/en/applications/corrosion-gaging-dual-element-transducers"
    },
    {
      "label": "Evident: measuring metal thickness through paint",
      "url": "https://ims.evidentscientific.com/en/applications/measuring-metal-thickness-paint"
    }
  ],
  "relatedOffers": [
    "inspection",
    "consulting"
  ]
};
