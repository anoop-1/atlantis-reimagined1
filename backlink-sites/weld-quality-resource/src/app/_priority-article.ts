// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "weld-quality-resource",
  "slug": "repair-reexamination-evidence-chronology",
  "title": "Building a weld repair and re-examination evidence chronology",
  "description": "Preserve weld identity and the sequence of findings, repair events, examinations and dispositions without overwriting earlier evidence.",
  "intent": "Informational record-planning guidance for fabrication teams reconstructing repair and re-examination history for an identified weld.",
  "primaryOffer": "reporting",
  "sections": [
    {
      "heading": "A final report cannot explain the whole repair history",
      "paragraphs": [
        "A weld dossier may contain a final examination report yet leave a reviewer unable to explain what happened between the initial finding and that final record. The missing information is often relational: which repair event addressed which observation, what physical state the later examination describes, and whether every outstanding question received a disposition. A chronology makes those relationships explicit while preserving the original weld identity.",
        "Build the chronology as a sequence of linked events, not as a story reconstructed from whichever filenames sort first. Each event should identify the weld, relevant location or segment, date, source record and relationship to earlier events. The sequence can include examination, review, repair instruction, recorded repair work, subsequent examination and final disposition. These are distinct events even when several occur on the same day or share one work order.",
        "This article addresses the evidence structure. It does not prescribe a repair method, define required re-examination, interpret acceptance criteria or establish who may release the work. Those requirements come from the governing project documents and responsible authorities. The chronology should carry their references and recorded decisions so that document control does not have to infer technical closure from a complete-looking folder."
      ]
    },
    {
      "heading": "Keep the weld identifier stable and the event identifiers separate",
      "paragraphs": [
        "Use the authoritative weld identifier throughout the history. If drawings or contractor systems use different labels, maintain a reviewed cross-reference and retain the original labels in source records. An identifier should not change merely because the weld enters a repair cycle. Creating a new unrelated weld row for each repair can detach earlier findings and make the final register appear to contain several independent joints.",
        "Give every examination and repair event its own identifier. A suffix such as repair one may be useful, but define what it counts: a repair instruction, a physical work event or a re-examination sequence. These counts can differ. Avoid a numbering scheme that forces staff to choose between renumbering history and misrepresenting the sequence when an additional review or partial repair occurs.",
        "Record the location within the weld where the source evidence supports it. A local indication, a repair area and an examination extent may have different boundaries. Preserve each using the applicable drawing, sketch or positional convention. Do not assume that a report associated with a weld describes every part of it, or that the location of a later observation is identical to an earlier one because both share the same weld tag."
      ]
    },
    {
      "heading": "Separate the finding from the disposition and repair instruction",
      "paragraphs": [
        "An examination record reports evidence under its stated procedure and requirements. The subsequent review determines what action is needed within the project's authority structure. Keep the reported observation, the review outcome and any repair instruction as separate linked records. This allows a later reader to distinguish what was observed from what was decided and prevents an administrative summary from silently changing the original result.",
        "TWI's public discussion of repair-procedure development describes repair work as dependent on the application and the condition being addressed. That context supports keeping the engineering repair decision separate from the records workflow. It does not provide a universal repair sequence for this article. The chronology proposed here references the actual approved instruction used by the project rather than suggesting that one generic sequence applies to every weld.",
        "When a disposition calls for more information rather than repair, record that outcome accurately. An open query should not be coded as a repair simply because it follows an adverse or uncertain observation. Likewise, a withdrawn repair proposal should remain in the history with its reason and successor decision. Preserving alternatives helps explain why the eventual work differs from an early meeting note or marked sketch."
      ]
    },
    {
      "heading": "Link the physical work event to the instruction it followed",
      "paragraphs": [
        "The repair-work record should identify the instruction and revision it followed, the weld and area concerned, the relevant work-stage dates and the supporting documentation required by the project. The chronology's role is to connect these records, not to invent missing work evidence. If the instruction reference is absent or conflicting, raise a specific query with the issuing or performing organization.",
        "Distinguish planned work from recorded completed work. An approved repair instruction shows intent and authority within its scope; it does not demonstrate that the described work occurred. Conversely, a work record may reveal a difference that requires review against the instruction. Keep that discrepancy visible rather than editing the planned description to match the completed-work note and losing the reason a review was needed.",
        "Where work is carried out in several stages or areas, retain the event boundaries needed to interpret subsequent examinations. A single broad completion date may be inadequate if a report was issued between stages. Preserve both event time and record-entry time when they differ. A late administrative entry should not be backdated in a way that makes it appear the evidence was available earlier than it actually was."
      ]
    },
    {
      "heading": "Attach re-examination evidence to the state it describes",
      "paragraphs": [
        "A subsequent examination should point to the relevant repair event or work stage, together with the applicable procedure and location references. The project defines the required examination scope. The record register should show that scope as documented and preserve any stated limitations. Do not infer that a result covers the entire original weld or all repair stages merely because it is the latest report in the folder.",
        "Keep report revision separate from examination repetition. A corrected report may describe the same examination event, while a new examination requires its own event even if its report number is similar. Counting each revised report as another examination distorts the chronology. Replacing an earlier report with the latest one without revision history can conceal a changed location, result or interpretation that affected a prior decision.",
        "Allow the sequence to branch. One initial observation may lead to two repair areas with separate follow-up records, or one later report may cover several documented repair events. Represent those relationships explicitly rather than forcing every history into a single line. The register should make clear which questions have been resolved and which branch still awaits evidence or review."
      ]
    },
    {
      "heading": "Hypothetical worked example: two observations on one weld",
      "paragraphs": [
        "Consider a hypothetical fabrication package in which weld W-214 has an initial examination event EX-01. The report records observations O-01 and O-02 at different described locations. The responsible review creates two separate actions: O-01 leads to repair instruction RI-08, while O-02 requires clarification of the recorded location before a decision. The weld remains W-214 throughout; the actions receive their own identifiers.",
        "Repair event RW-03 records work under RI-08 at the area associated with O-01. Subsequent examination EX-05 references RW-03 and the relevant location sketch. Its report is delivered and reviewed through the established process. The chronology links the review outcome to O-01. It does not close O-02 because that observation followed a different branch and still requires its location clarification.",
        "The missing clarification for O-02 later arrives as a controlled report revision. It corrects the positional description but does not represent a new examination. The chronology retains EX-01 as the examination event, links both report issues and records the correction reason. The responsible reviewer then makes the appropriate disposition for O-02. That decision, rather than the mere arrival of the revised report, is what resolves the open branch."
      ]
    },
    {
      "heading": "Hypothetical worked example: a second repair cycle without lost history",
      "paragraphs": [
        "In a second hypothetical case, weld W-305 has an initial examination, a documented repair event and a subsequent examination that prompts further review. The team does not rename the weld W-305R2 and abandon the original row. It creates a second repair-event identifier linked to the same weld and to the review that required the additional action. The applicable instruction and recorded work are retained for each cycle.",
        "A later examination report provides the evidence for the final review within the defined scope. The current-status view can show the resulting disposition, while the history still displays the earlier findings and both repair events. Earlier reports are not labeled erroneous simply because later work changed the physical condition. They remain valid evidence of the state examined at their respective times, subject to their original limitations and any documented corrections.",
        "During dossier preparation, a coordinator notices that the second repair-work record cites an instruction revision issued after the recorded work date. The chronology exposes the conflict because dates and relationships are visible together. The issuer is asked to reconcile the reference using source records. The team preserves the discrepancy and resulting clarification rather than changing a date to make the sequence look plausible. Administrative consistency is achieved through evidence, not cosmetic editing."
      ]
    },
    {
      "heading": "Define closure around questions, not the newest status",
      "paragraphs": [
        "For each observation or action, identify the evidence and decision required for closure under the project's process. A repair completion note, a delivered report and a technical disposition serve different purposes. The register should permit repair work complete, report received and review pending to coexist. A single closed field often hides which part of that chain has actually been completed.",
        "Before presenting a weld as closed in the administrative register, reconcile all linked branches. Check that every observation has a recorded disposition, every instructed repair has the required work evidence and every specified subsequent examination has its associated record and review. The applicable requirements determine what is needed; the coordinator's checklist verifies the presence and traceability of those records without independently judging technical acceptability.",
        "Record the scope of the closure. A disposition may address a defined repair area or a particular examination requirement rather than every aspect of the weld's construction and release. Preserve that wording when summarizing the record. Broadening an event-specific conclusion into a whole-product acceptance statement creates an unsupported claim even when the underlying report is correctly issued and signed. Include the closure date and the evidence issue considered by the decision maker, so a later corrected report can be checked for possible effects on that earlier disposition."
      ]
    },
    {
      "heading": "Review common chronology failures before final assembly",
      "paragraphs": [
        "A common failure is ordering by upload date. A report delivered late can appear after a later repair even though the examination occurred earlier. Maintain distinct fields for examination date, work date, issue date and receipt date. Use the appropriate event date for the physical sequence, and keep the issue and receipt dates to explain when the information became available. Do not discard either chronology.",
        "Another failure is removing unfavorable earlier reports from the current package to reduce confusion. A clearer solution is a current-status summary with links to the full sequence. The summary should identify superseded document issues without erasing earlier physical states. A superseded report revision and an earlier examination of a subsequently repaired weld are different kinds of history and should not share an unexplained obsolete label.",
        "A third failure is relying on a repair count without its definition. Two records may describe one repair event, while one instruction may cover several areas. State what the count represents and retain the event list supporting it. If the information will be used for quality analysis, agree the denominator and counting rules before comparing teams, periods or projects. The chronology should support the calculation rather than being reshaped to fit a preferred metric."
      ]
    },
    {
      "heading": "Practical repair-chronology checklist",
      "paragraphs": [
        "Test the chronology with a weld that has more than one observation or repair event. Ask a reviewer to reconstruct the sequence using the register and linked evidence, then compare that reconstruction with the source documents. The useful test is whether another person can explain each transition without relying on the memory of the person who assembled the dossier."
      ],
      "bullets": [
        "Keep the authoritative weld identifier stable, with documented aliases and distinct identifiers for observations, reviews, repair events and examinations.",
        "Record the source location and extent for each event without assuming that every report covers the same area or physical state.",
        "Connect repair instructions to recorded work and subsequent examination evidence, preserving the actual instruction revisions and event dates.",
        "Treat report corrections as revisions of their examination event, and preserve new examinations as separate events with their own relationships.",
        "Reconcile every branch before administrative closure, linking the responsible disposition and retaining any unresolved limitation or identity query.",
        "Verify that the final summary preserves earlier physical states, defines repair counts and does not broaden an event-specific conclusion into product release; notify affected record custodians when a later correction changes a previously reviewed relationship."
      ]
    }
  ],
  "checklist": [
    "Use stable weld identity and separate event identities.",
    "Connect findings, decisions, work and re-examination.",
    "Preserve branches and report revisions.",
    "Close each question against its actual disposition."
  ],
  "references": [
    {
      "label": "TWI: Repair procedure development",
      "url": "https://www.twi-global.com/what-we-do/services-and-support/failure-analysis-and-repair/repair-procedure-development"
    }
  ],
  "relatedOffers": [
    "consulting",
    "erp"
  ]
};
