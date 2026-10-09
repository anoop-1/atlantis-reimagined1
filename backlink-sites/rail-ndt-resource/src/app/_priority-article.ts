// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "rail-ndt-resource",
  "slug": "component-serial-identity-maintenance-handoffs",
  "title": "Preserving rail component identity through examination handoffs",
  "description": "Keep serial numbers, assembly relationships and examination records connected when rail components move between maintenance, inspection and storage teams.",
  "intent": "Informational record-planning guidance for rail maintenance teams preserving component identity across custody and examination handoffs.",
  "primaryOffer": "consulting",
  "sections": [
    {
      "heading": "Follow the component when its surroundings change",
      "paragraphs": [
        "A component can leave one vehicle position, pass through several maintenance areas and later enter a different assembly. Its examination history must remain attached to the physical item throughout those moves. A work-order number or storage location may help find the record, but neither necessarily identifies the component. The records problem becomes harder when several similar items arrive together and the examination team receives a job pack organized around the original vehicle rather than each item.",
        "Define the identity that must persist before designing the handoff form. Depending on the component and operator's system, that may involve a manufacturer's serial reference, an owner asset identifier or a documented combination of identifiers. The applicable maintenance requirements determine the authoritative approach. This article proposes ways to preserve those relationships; it does not create a rail identification standard or authorize marking, examination or component release.",
        "Separate physical identity, current assembly position, custody and maintenance status in the register. These properties can change independently. A component may move to a different rack without changing identity, leave an assembly while retaining its history, or await a report after examination is performed. A single label such as completed wheelset hides these distinctions and can make a later handoff depend on assumptions that were never recorded."
      ]
    },
    {
      "heading": "Use the full identifier and its issuing context",
      "paragraphs": [
        "Capture the identifier exactly as shown in the authoritative source, including leading zeros, letters, separators and any issuing organization needed to distinguish it. Store a normalized search version separately if useful. A spreadsheet that converts a serial reference to a number can remove zeros or alter long values. Treat identifiers as text unless the controlling system explicitly defines another representation.",
        "GS1's explanation of serialization distinguishes an individual instance identifier from identification at a broader level and discusses serial numbers in combination with other identification keys. That distinction provides useful context: a bare serial string may not be unique across all manufacturers or component classes. It does not mean a maintenance team should adopt GS1 identifiers without the operator's agreement. Use the authorized identification system and preserve its namespace or issuing context.",
        "Record the source of the captured value. It might be a readable component marking, a controlled assembly record or another approved identification source. An entry transcribed from a work order is different evidence from a verified marking observation. Preserve both when they disagree and route the discrepancy for resolution. Do not silently choose the version that makes the receiving system accept the record."
      ]
    },
    {
      "heading": "Build a component passport around events",
      "paragraphs": [
        "A practical component record contains stable identity fields followed by dated events. Events can include receipt, removal from an assembly, examination, record correction, transfer to storage and installation into another assembly. Each event names the source and destination context, responsible person or team, supporting document and any unresolved identity question. This structure preserves history without duplicating the entire component record every time it moves.",
        "Give examination events their own identifiers and connect reports to those events. The same component may be examined more than once during a maintenance visit, especially when additional work occurs between examinations. If every report is stored only under the serial number, users may find the files but struggle to establish sequence. Event references let the record show which examination belongs to which maintenance stage.",
        "Keep status history alongside the event sequence. Received, awaiting identity resolution, examination performed, report under review and transferred are possible administrative descriptions, but their definitions should match the local system. A records status must not substitute for the operator's authorized release decision. Where a release record exists, link it as a separate controlled event with its actual authority and scope."
      ]
    },
    {
      "heading": "Record assembly relationships with effective dates",
      "paragraphs": [
        "An assembly identifier and a component identifier describe different levels of the maintenance structure. Record which component occupied which position for the relevant period, using removal and installation events where available. If an assembly is rebuilt, retain its earlier composition rather than changing the historical record to show only the newly fitted items. Otherwise an old examination report may appear to describe a replacement component that was not present at the time.",
        "Define position conventions explicitly. Left and right, drive and non-drive, or numbered locations can be meaningful only within an agreed viewpoint or assembly scheme. Preserve the operator's terminology and the reference that defines it. A handoff should not require the receiving person to guess whether a position label describes the vehicle orientation, the removed assembly on a stand or the observer's view.",
        "When a component is temporarily separated from its assembly, retain the previous relationship and record its present custody independently. Do not use the former vehicle position as the component's only identity in the examination report. The report should remain understandable if the item is later allocated elsewhere. A useful cross-reference allows both searches: find all evidence for this component, and find which components were associated with this assembly at a specified date."
      ]
    },
    {
      "heading": "Make the physical-to-record handoff explicit",
      "paragraphs": [
        "At each agreed handoff point, reconcile the received item with the accompanying record using the authorized identification process. Record the transfer event, identifier evidence, quantity, receiving location and any discrepancy. This is a planning requirement for the record system, not an instruction to alter markings or handle components in a particular way. Physical methods and responsibilities follow the site's established maintenance procedures.",
        "A barcode or other machine-readable label can reduce transcription only if its encoded value and relationship to the component are controlled. Record what the label identifies: the component, a job, a container or a storage position. Scanning a container label does not automatically establish which component is inside. The receiving workflow should preserve that distinction and identify the check that links the physical item to its record.",
        "For grouped transfers, list individual component identifiers where the process requires individual traceability. A note saying six items received may reconcile quantity while failing to reconcile identity. The receiving team needs to know which six items arrived, whether any expected item is missing and whether an unexpected item is present. Preserve discrepancies as named exceptions rather than correcting the dispatch list to match the arrival without explanation."
      ]
    },
    {
      "heading": "Hypothetical worked example: similar serials in one maintenance batch",
      "paragraphs": [
        "In a hypothetical maintenance batch, two components carry serial references AX-00871 and AX-00817 within the same authorized identification system. The dispatch list includes both, but a transcribed examination request repeats AX-00871 twice. The receiving coordinator detects the duplicate because the request is reconciled against individual identities rather than just a quantity of two. The discrepancy is logged before the examination reports are associated with component histories.",
        "The authorized identity check confirms the physical items and supporting dispatch records. The request issuer supplies a corrected controlled issue and explains the transposition. The component register retains the original request reference, correction reference and verification evidence. It does not create a second history for AX-00871 or silently rename one of two duplicate rows. Each subsequent examination event receives its own identifier linked to the confirmed component identity.",
        "The report for AX-00817 is later returned for an administrative correction unrelated to the examination result. Its physical custody moves to the designated storage area under the site's process, while its document status remains correction pending. The transfer record shows where the item went; the report register shows what remains open. Neither state is inferred from the other, and no release decision is created merely because the component has left the examination area."
      ]
    },
    {
      "heading": "Hypothetical worked example: the component changes assembly",
      "paragraphs": [
        "Continuing the hypothetical example, AX-00871 was removed from assembly WS-42 and is later assigned to a different assembly through the operator's maintenance process. The old composition record for WS-42 retains AX-00871 for the period when it was installed. A removal event ends that relationship, and a later installation event creates the new relationship. The examination report remains attached to AX-00871 and its examination event throughout.",
        "A dashboard initially displays the report only under WS-42 because the original work order used that assembly number. The record custodian adds a component-level relationship and preserves the original work-order context. The dashboard can then show the report when searching either the historical assembly or the component. It does not copy the report into an unrelated replacement component's history simply because that new item now occupies the old position.",
        "A third component in the batch has an unreadable identifier and conflicting accompanying paperwork. The records team assigns an exception reference and retains the competing values as unconfirmed evidence. The item follows the site's established identity-resolution process. The team does not infer a serial from its position in the batch or give it the missing number from the dispatch list. The unresolved identity remains visible until the authorized process establishes a supported relationship."
      ]
    },
    {
      "heading": "Decide what kind of discrepancy you are handling",
      "paragraphs": [
        "Classify discrepancies before attempting correction. A transcription error with an authoritative source may need a controlled record amendment. A duplicate identifier across different issuing contexts may need a namespace correction. An unreadable marking may require a different authorized verification route. Conflicting assembly histories may need reconciliation of removal and installation events. These problems should not all be resolved by editing the serial-number field.",
        "Consider the consequence of an incorrect association. Would it attach another component's examination result, obscure a maintenance action, or misrepresent an assembly's composition at a past date? State that consequence in the exception so the responsible person can prioritize it. Avoid inventing a technical severity classification; the record coordinator can explain the traceability impact without making a condition assessment.",
        "Preserve the evidence used to accept or reject an identity relationship. Record the reviewer, date, source documents and any limits on the conclusion. If the correction affects previously distributed reports or imported histories, identify those downstream records and notify their custodians. Correcting the central register alone may leave an incorrect copy in a workshop job pack or a receiving organization's maintenance archive."
      ]
    },
    {
      "heading": "Prevent imports and exports from changing identity",
      "paragraphs": [
        "Test transfers between maintenance and reporting systems with realistic identifier examples. Include leading zeros, mixed letters and numbers, long references, separators and identifiers that differ by one character. Verify that exports preserve the exact string and that the destination does not truncate, round or reformat it. Display formatting can hide a changed underlying value, so compare the actual exported identifiers with the controlled source.",
        "Check duplicate rules at the correct level. A system may prohibit a repeated serial string even though different manufacturers legitimately use it, or permit duplicate component records because one copy contains a space. Resolve these issues through a documented identification model rather than aggressive text cleanup. Preserve the original representation and a controlled comparison form, with a clear rule for when two records may be merged. Test the receiving team's ordinary search as well as the import itself; an accurately stored identifier is still difficult to use if the search hides its distinguishing characters.",
        "Before merging duplicate records, compare their event histories and supporting evidence. Similar names do not establish that the records describe one physical item. If a merge is justified, retain predecessor record identifiers and document how their reports and custody events were reconciled. A receiving system should be able to explain the merge afterward, especially if older work orders still point to an identifier that is no longer current."
      ]
    },
    {
      "heading": "Practical identity checklist for a maintenance handoff",
      "paragraphs": [
        "Use the checklist with an actual outgoing batch and its receiving records. Include a component that changed assembly and an item with a corrected report so the check covers more than an uncomplicated receipt. The aim is to make the next custodian's questions answerable from the record: which item is this, what happened to it, which evidence belongs to it, and what remains unresolved?"
      ],
      "bullets": [
        "Preserve the full component identifier as text, together with its issuing context, source evidence and any separately controlled search representation.",
        "Distinguish component identity from assembly position, container label, work order and storage location before associating examination reports.",
        "Record individual transfer events and reconcile expected, received, missing and unexpected identities rather than checking only the batch quantity.",
        "Link each report to an examination event and retain the maintenance stage, report revision and separate review or release references.",
        "Maintain dated assembly relationships so removal, replacement and reinstallation do not rewrite the historical composition of an assembly.",
        "Route unresolved identity through the authorized process, preserve competing evidence, and propagate accepted corrections to affected record custodians."
      ]
    }
  ],
  "checklist": [
    "Preserve exact identifiers and issuing context.",
    "Track component, assembly and custody separately.",
    "Reconcile individual identities at handoff.",
    "Keep corrections and unresolved identity evidence traceable."
  ],
  "references": [
    {
      "label": "GS1: Serialization and unique identification",
      "url": "https://support.gs1.org/support/solutions/articles/43000734238-how-does-serialisation-differ-from-unique-identification-in-the-gs1-system-"
    }
  ],
  "relatedOffers": [
    "reporting",
    "erp"
  ]
};
