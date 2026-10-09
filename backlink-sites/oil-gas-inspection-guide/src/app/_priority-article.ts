// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "oil-gas-inspection-guide",
  "slug": "contractor-evidence-handover-turnaround-closeout",
  "title": "Contractor evidence handover before turnaround closeout",
  "description": "Build a usable contractor-to-owner handover with a reconciled scope register, report manifest, exceptions and a tested evidence transfer.",
  "intent": "Informational guidance for oil and gas owners reconciling inspection evidence before contractors demobilize.",
  "primaryOffer": "reporting",
  "sections": [
    {
      "heading": "Start with the owner's next question",
      "paragraphs": [
        "A turnaround evidence handover succeeds when the owner can answer a specific question after the contractor leaves: what examination was completed on this asset, under which instruction, with what result, and what still needs attention? A folder containing hundreds of reports may fail that test. Conversely, a smaller package with a clear register and explicit gaps can be useful while remaining visibly incomplete. The objective is a reliable transfer of knowledge and records, not a ceremonial delivery of files.",
        "Begin by naming the receiving teams and the decisions they need to support. Maintenance may need the repair chronology. Integrity engineers may need original measurements and location sketches. Document control needs the approved report and revision history. Commercial staff need evidence supporting the agreed deliverable. These uses overlap, but no single status called complete can safely represent all of them. Record readiness for each receiving function separately, with named owners for unresolved questions.",
        "This is a record-planning workflow. It does not prescribe examination methods, acceptance criteria, retention periods or permission to restart equipment. Those remain governed by the applicable project requirements and responsible authorities. A handover receipt should say precisely what was received and checked. It should not imply a broader engineering approval merely because the transfer occurred before the turnaround closeout meeting."
      ]
    },
    {
      "heading": "Freeze the deliverable baseline before counting completion",
      "paragraphs": [
        "Create a dated baseline from the latest agreed work package, including approved additions, cancellations and substitutions. Give each examination obligation a stable identifier. An obligation might concern a particular asset area, method and work stage; it is not necessarily one report or one physical asset. Several obligations can appear in a report, while one obligation may require several records. Keeping these relationships explicit prevents the report count from becoming a misleading measure of completion.",
        "For each obligation, retain the original request reference, asset identifier, location description, governing instruction reference, expected deliverables and the person responsible for receiving them. Record changes as dated events rather than silently editing the original scope. If the owner removes an item, link the authorized change record. An unexplained blank should never become an assumed cancellation because the contractor is preparing to demobilize.",
        "Use the baseline to identify three different gaps: work not yet performed, work performed with evidence not yet delivered, and delivered evidence awaiting correction or review. Each calls for a different response. A missing report may be resolved remotely; an unresolved location identity might require access that will disappear when equipment is closed. That distinction should drive the order of the handover review."
      ]
    },
    {
      "heading": "Design a manifest that survives the contractor's folder structure",
      "paragraphs": [
        "The manifest is the receiving team's map of the package. Include the obligation identifier, asset and location, report number, report revision, issue status, examination date, filename, file type and destination record identifier. Add supporting files through explicit relationships. A sketch should identify the reports it explains; a raw dataset should identify its examination event. Avoid relying on adjacency in a folder or a filename prefix as the only relationship.",
        "Agree the owner-facing identifiers before large transfers begin. A contractor may organize by crew and date, while the owner organizes by equipment and inspection campaign. Both arrangements can remain valid if the manifest maps between them. Do not rename every original file simply to make a directory look consistent. Preserve the original name as metadata when a destination system requires a new name, and record which representation is the authoritative copy.",
        "A spreadsheet can serve as the manifest if its fields are controlled and its revision is recorded. The key test is whether a receiving person can navigate from one obligation to all its evidence without asking the departing supervisor. Test that journey with an ordinary completed item, a repaired item and an exception. These examples expose different weaknesses that a random file-opening exercise may miss."
      ]
    },
    {
      "heading": "Separate receipt, document review and technical disposition",
      "paragraphs": [
        "Receipt means the files arrived. Administrative validation means they open, are legible, match the manifest and carry the expected identifiers. Technical review means the responsible reviewer has considered the content for its intended purpose. An asset disposition belongs to the appropriate decision process. Give these events separate fields and dates. Otherwise a green transfer indicator can travel into a meeting slide and be mistaken for an accepted examination or released asset.",
        "Use a short status vocabulary with written definitions. For example, received, administratively checked, returned for correction and technically reviewed describe document progression. Unperformed, partially performed and completed describe work progression. Open, superseded and closed describe an exception. The exact words matter less than preventing one field from doing several jobs. Permit a completed examination to have a returned report, because that combination often describes reality accurately.",
        "Decide who can change each status and what evidence accompanies the change. A coordinator can acknowledge receipt without resolving an engineering query. A technical reviewer can request clarification without rewriting the contractor's source data. Where a report is corrected, the new issue should carry its own revision and reason for change, while the previous issue remains traceable within the agreed record system."
      ]
    },
    {
      "heading": "Preserve files without overstating what a checksum proves",
      "paragraphs": [
        "NIST's Digital Evidence Preservation guidance discusses provenance, digital objects and preservation concerns in a forensic context. Its discussion of file integrity provides useful background for inspection archives, although it is not an industrial inspection handover standard. A file checksum can help identify whether a transferred file matches the supplied file. It cannot establish whether the examination was correctly performed, whether the asset label was right, or whether the report's conclusion is justified.",
        "Where the agreed transfer process uses checksums, retain the algorithm, value, file size and the date the value was generated. Compare the received files with the manifest before reorganizing or converting them. Treat a mismatch as a transfer or version question requiring investigation. Do not repair the manifest by replacing its value with the newly received value without recording why the files differ.",
        "Keep original acquisition files where required by the work package, alongside usable exports when needed. A proprietary dataset and a PDF image of its result are different deliverables. Confirm that the owner can open the intended records with available tools and permissions. Discovering an unavailable viewer after demobilization can turn a technically complete package into an operationally inaccessible archive."
      ]
    },
    {
      "heading": "Resolve identity gaps while field knowledge is available",
      "paragraphs": [
        "Give identity mismatches priority over cosmetic corrections. An incorrect date format is usually recoverable from source records. A thickness location described only as near the nozzle may be impossible to recover after insulation returns. Compare report identifiers against the asset register and controlled sketches. Maintain aliases where field tags, legacy equipment names and owner identifiers legitimately differ, but require evidence for the relationship.",
        "Ask the contractor to explain ambiguous references while the people who collected the data remain reachable. Capture the answer in a controlled clarification linked to the original record. A marked photograph, orientation sketch or signed correction may be appropriate depending on the issue and project process. Do not quietly convert a recollection into a measured coordinate or rewrite a tentative identification as established fact.",
        "Use an exception register for unresolved cases. Each entry should describe the uncertainty, affected records, likely consequence for future use, decision owner and the evidence needed to resolve it. Avoid generic comments such as pending clarification. A useful entry states that two reports use location L17 for different marked areas and that the original crew must reconcile the sketches before the area becomes inaccessible."
      ]
    },
    {
      "heading": "Hypothetical worked example: a separator package with mixed readiness",
      "paragraphs": [
        "Consider a hypothetical turnaround package containing 36 examination obligations across six separators. At the planned handover meeting, the contractor supplies 31 reports. The initial summary says the package is 86 percent complete, calculated by dividing reports by obligations. That figure is rejected as unsuitable because six reports cover multiple obligations, two reports are revisions, and several obligations require both a location sketch and an examination record.",
        "The team rebuilds the view around obligation identifiers. Thirty obligations have completed work and all specified files present, with identity and usability checks still to be finished. Three have completed work but missing approved reports. Two were removed through an owner change record. One remains unperformed because the agreed access was unavailable. The revised baseline contains 34 obligations, and the report register now explains each one. The removed items remain visible in the change history instead of disappearing.",
        "During the receiving test, obligation SEP04-L12 points to a drawing using a legacy separator tag. The report and field photograph agree with each other, but the owner register uses a different tag. The contractor provides the work-package cross-reference and the owner record custodian confirms the alias. That clarification resolves the identity question without changing the examination result. The receiving team records who confirmed it and which evidence supported the mapping."
      ]
    },
    {
      "heading": "Hypothetical worked example: deciding what can leave site",
      "paragraphs": [
        "The same hypothetical package contains a more difficult issue. An original scan file is listed in the manifest, but its filename refers to SEP03 while the associated report says SEP05. The file opens correctly and its checksum matches the supplied manifest. These facts establish a successful transfer, not the correct equipment identity. The item stays unresolved until the contractor examines acquisition records and the field supervisor checks the marked location photograph.",
        "The handover lead separates the remaining actions. The three missing approved reports have named reviewers and agreed delivery dates. Their source evidence is already accessible to the owner, and no additional field clarification is currently identified. The scan identity issue requires the relevant personnel to remain available for a focused review. The unperformed obligation goes to the owner's responsible authority for disposition through the established process; document control cannot close it administratively.",
        "The package receipt records 30 sets with the specified files present, including one still subject to identity review, plus three awaiting issued reports and one unperformed obligation. File completeness therefore does not imply validated identity or usability. It also lists the two authorized scope removals. The owner acknowledges custody of the delivered files while preserving these distinctions. Nothing in the receipt asserts that all six separators are suitable for service. The example shows why a precise partial handover can be more useful than an inaccurate complete label."
      ]
    },
    {
      "heading": "Use consequence and recoverability to order the final review",
      "paragraphs": [
        "Prioritize a gap by asking what decision it affects, how quickly the evidence may become unavailable, and who can resolve it. Missing identity, missing original measurements or an unclear repair sequence may undermine later interpretation. An incorrectly indexed but otherwise complete approved report may be straightforward to repair. The handover team should not spend its last field-access window perfecting filenames while unresolved location evidence becomes harder to obtain.",
        "Agree the escalation route before the final week. A document correction can go to the issuing contractor; a scope ambiguity goes to the designated owner representative; an interpretation question goes to the responsible technical reviewer. Some issues involve more than one route. Record the dependency explicitly so that an administrative action does not appear to resolve a technical question simply because the same email thread contains both.",
        "Set package acceptance criteria around demonstrated usability. The manifest should reconcile with the agreed scope, the received files should be accessible, the expected revisions should be identifiable, and every exception should have an owner. The criteria should also specify how later corrections are submitted and acknowledged. This allows the final dossier to evolve through controlled updates without losing the state of the earlier transfer."
      ]
    },
    {
      "heading": "Practical closeout checklist for the receiving coordinator",
      "paragraphs": [
        "Run this checklist with the contractor and the owner's record custodian using the actual package. Record the result and supporting evidence for each check. A tick alone is weak evidence if nobody can explain which baseline or file issue was checked. Mark an item not applicable only with a reason tied to the agreed deliverables."
      ],
      "bullets": [
        "Confirm the dated scope baseline, all approved additions and removals, and a stable identifier for every remaining examination obligation.",
        "Reconcile completed work, missing evidence, returned reports and unperformed obligations without using a report count as the scope denominator.",
        "Open representative original files and issued reports from the owner's destination, including a repaired item and an item with a corrected revision.",
        "Verify the connection between equipment tags, examination locations, sketches, source datasets and report numbers; record supported aliases explicitly.",
        "List unresolved exceptions with the affected decision, named owner, required evidence and expected resolution date before field knowledge is lost.",
        "Acknowledge receipt separately from technical review, preserve superseded issues, and confirm the route for corrections after demobilization."
      ]
    }
  ],
  "checklist": [
    "Reconcile scope obligations before report totals.",
    "Test owner access to original evidence.",
    "Resolve identity questions while the crew is available.",
    "Assign every exception and separate receipt from technical disposition."
  ],
  "references": [
    {
      "label": "NIST IR 8387: Digital Evidence Preservation",
      "url": "https://www.nist.gov/publications/digital-evidence-preservation-considerations-evidence-handlers"
    }
  ],
  "relatedOffers": [
    "erp",
    "consulting"
  ]
};
