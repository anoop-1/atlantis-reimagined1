// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "ndt-automation-future",
  "slug": "dispatch-exceptions-human-approval-handoffs",
  "title": "Designing Dispatch Exceptions and Human Approval Handoffs",
  "description": "Map the decisions, evidence and ownership needed when inspection dispatch automation encounters missing records, substitutions or changed work windows.",
  "intent": "Informational workflow design for exception handling in inspection dispatch, without automating technical authority or claiming product capabilities.",
  "primaryOffer": "erp",
  "sections": [
    {
      "heading": "Define the handoff before choosing what to automate",
      "paragraphs": [
        "An inspection dispatch workflow connects a requested job with proposed people, equipment, documents and a work window. Automation can move those records and flag inconsistencies, but the difficult part is deciding what happens when an input is missing or changes. Begin with that decision. A useful first project might route equipment substitutions to a named reviewer and return the resulting decision to the scheduler. It need not attempt to automate every step from enquiry to issued report.",
        "Write down the workflow's output in plain language. A proposed crew allocation, a records-complete dispatch pack and an authorization to perform work are different outputs. This guide concerns the first two and the handoffs to responsible decision makers. It does not authorize mobilization, define personnel qualification requirements or replace site controls. Give the workflow a precise boundary so a green status cannot be mistaken for broader permission than the underlying evidence supports."
      ]
    },
    {
      "heading": "Describe inputs as evidence with owners and dates",
      "paragraphs": [
        "For each input, identify the record owner, the source, the date last checked and the conditions that make it relevant to this job. A personnel record might be present yet unrelated to the required method or employer authorization. An equipment file might identify an instrument without showing whether its configuration fits the proposed application. A procedure may be current in the library but not the revision named in the work package. Presence and suitability are separate questions.",
        "ASNT's explanation of employer-based certification emphasizes the employer's written practice and responsibility within that type of programme. The planning implication is limited but important: a scheduler should know which responsible person interprets the applicable personnel requirements. Do not turn a general certificate upload into a universal dispatch rule. Capture the specific evidence reference and route questions about its applicability to the designated authority. The automation design should make that route easy to follow and its answer easy to retain."
      ]
    },
    {
      "heading": "Build an exception register around questions to be answered",
      "paragraphs": [
        "An exception is more useful when phrased as a question than as a red icon. Instead of equipment invalid, record that the proposed instrument has a different serial number from the instrument in the reviewed pack and ask whether the substitution can be accepted under the applicable arrangements. Include the job identifier, affected allocation, evidence snapshot, decision owner and required response. The recipient should be able to understand the issue without searching through unrelated email threads.",
        "Classify exceptions by the kind of decision needed. Missing records need retrieval or confirmation. Conflicting records need reconciliation. Changed scope needs technical or commercial review. Unavailable resources need replanning. Some cases need more than one response in sequence. Keep these categories small and understandable. An elaborate taxonomy becomes counterproductive if schedulers choose miscellaneous for most events. Review the first few real examples with the people who will receive them and adjust the categories to match their work."
      ]
    },
    {
      "heading": "Separate automated checks from human decisions",
      "paragraphs": [
        "A rule can compare dates, detect a missing identifier or notice that an allocation changed after review. Those checks identify conditions; they do not establish the technical meaning of every condition. Name the rule, preserve the inputs it used and describe the action it takes. A rule that flags a date conflict should say which date was compared with which planned event. A generic failed validation message leaves the next person to repeat the investigation.",
        "For each condition, choose whether the workflow continues with a visible note, pauses pending a response or returns to an earlier planning step. Base that choice on the team's governing arrangements and the consequence of an incorrect handoff. Avoid making every warning a hard stop, which can encourage workarounds. Also avoid a universal override button. A justified exception should identify the decision, the authority making it, the evidence considered and the scope or time limit of that decision."
      ]
    },
    {
      "heading": "Make acceptance of responsibility observable",
      "paragraphs": [
        "Sending a notification and handing over responsibility are different events. Record when an exception was raised, when it reached the intended recipient and when that person accepted the task. A queue can show awaiting acknowledgement separately from under review. If the recipient is absent, the reassignment path should be defined before the pilot. A message copied to several people can otherwise create the impression that someone else owns the response.",
        "Distinguish the person coordinating the response from the person authorized to make the decision. A dispatcher may assemble evidence while a technical reviewer determines applicability. The workflow should make both contributions visible without implying equal authority. Require a response that resolves the question rather than a bare acknowledgement. Received, approved for the stated scope and returned for missing evidence are different outcomes. Use labels that recipients can explain consistently during a short handover conversation."
      ]
    },
    {
      "heading": "Hypothetical worked example: a changed window and replacement kit",
      "paragraphs": [
        "Consider a hypothetical job J-318 planned for Tuesday with crew C-6 and kit K-12. The scheduler has assembled a draft pack, and its review is pending. On Monday, the customer moves the work to Thursday. The workflow creates a new planning version and identifies the affected resource reservations. It does not simply change the date in the calendar while preserving every earlier readiness indicator. The decision needed is whether the proposed resources and evidence remain applicable to the revised window.",
        "The equipment coordinator reports that K-12 is unavailable on Thursday and proposes K-19. This creates a substitution exception linked to the current planning version. The coordinator supplies the kit identity and relevant records; the designated reviewer receives a question about the proposed substitution. Meanwhile, the scheduler checks availability of C-6 for the new window. These activities can proceed independently, but the pack should not imply that completing one resolves the other.",
        "The reviewer returns the substitution because one supplied document refers to a different instrument serial number. The exception remains open with a clear retrieval request. When the correct document arrives, the reviewer considers it within their assigned responsibility and records a decision limited to J-318's stated scope. The workflow preserves the earlier mismatch and the later resolution. It does not convert the decision into a blanket approval of K-19 for every future job.",
        "Before the pack is handed over, one member of C-6 becomes unavailable. The proposed replacement creates a fresh personnel review task and makes the earlier crew-specific readiness statement inapplicable. The equipment decision can remain associated with the unchanged equipment proposal if the responsible process permits it. This selective response avoids two extremes: retaining stale approvals or needlessly restarting every completed check. The hypothetical example shows why decisions should be tied to specific inputs rather than to a job number alone."
      ]
    },
    {
      "heading": "Define what invalidates an earlier response",
      "paragraphs": [
        "List the changes that should trigger review of a prior decision. Examples include a new work window, a different person, a changed kit, a revised scope or a different procedure reference. The list is a planning aid, not a universal technical rule. Ask each decision owner which inputs their response depends on. Store those dependencies in a simple form so a change can identify potentially affected decisions without pretending to determine the technical outcome automatically.",
        "A response should reference the version of the proposal that was reviewed. If an approval arrives after the proposal changes, route it for reconciliation instead of silently applying it to the latest version. This can happen when someone responds from an old email while the scheduler edits the pack. The workflow needs a visible stale-response condition. The reviewer can then confirm applicability to the new proposal or request further information, with that additional decision retained.",
        "Show the recipient a concise comparison of the changed inputs when requesting that recheck. Asking someone to repeat an entire review without indicating what changed creates unnecessary effort and can obscure the very change that needs attention. Retain the comparison with the response so the basis of the renewed decision remains understandable."
      ]
    },
    {
      "heading": "Plan for duplicate events, outages and manual fallback",
      "paragraphs": [
        "The same customer update may arrive through a portal and an email, or a user may retry a submission after a slow response. Give events stable identifiers where practical and decide how duplicates are recognized. A repeated message should not create two conflicting resource reservations or two indistinguishable approval tasks. When duplication cannot be resolved automatically, make the possible relationship visible to the coordinator. Preserving the event history is useful; multiplying the apparent workload is not.",
        "Agree a manual fallback for periods when the normal system is unavailable. The fallback should retain the job version, exception question, decision maker, response and time, using the organization's approved communication arrangements. On recovery, reconcile those records with the system before resuming automatic actions. Do not assume that the most recent upload represents the most recent decision. Record the actual sequence and identify any action already taken so that restoration does not repeat a handoff unnecessarily."
      ]
    },
    {
      "heading": "Run a pilot that includes ordinary awkward cases",
      "paragraphs": [
        "Select a limited job type and a manageable set of exception categories. Establish the current process first: where requests arrive, who resolves them and how decisions return to the schedule. Then rehearse missing evidence, a late substitution, an absent reviewer and a response to an obsolete proposal. Use fictional records for the first exercise. Once the team understands the behaviour, a controlled pilot can follow the organization's existing authorization process while testing the new administrative handoffs.",
        "Observe time to acknowledgement, time waiting for evidence, reopened exceptions and duplicate tasks. These measures help explain where work accumulates; they do not prove that faster dispatch is safer or technically better. Review a sample of resolved exceptions for clarity and traceability. A low open-item count can hide premature closure, especially if users feel pressured to keep a dashboard green. Ask recipients whether the tasks contain enough context to make the requested decision without reconstructing the whole job."
      ]
    },
    {
      "heading": "Failure modes and the decision criteria for expanding",
      "paragraphs": [
        "Do not expand a workflow that routinely loses ownership when a recipient is absent, treats acknowledgements as approvals or preserves decisions after their inputs change. These are structural problems. Also investigate frequent manual overrides, unrecorded phone decisions and repeated correction of the same input field. The answer may be a clearer form, a better source record or a different assignment rule. Adding more automation to an unclear handoff usually moves the confusion faster.",
        "Expansion is reasonable when the team can explain the open queue, reconstruct selected decisions and recover from a changed proposal without hidden work. The next scope should share those proven handoff patterns. A new job type with different authority or evidence needs deserves its own mapping. Keep a short register of rule versions and why they changed. A rule that worked for yesterday's scope should not acquire broader authority simply because it has been running without visible errors."
      ]
    },
    {
      "heading": "Practical checklist for a dispatch exception design review",
      "paragraphs": [
        "Walk through this checklist with a scheduler, a records owner and at least one person who receives technical review requests. Use one concrete job version throughout. When answers differ, capture the disagreement as a design question and assign someone to resolve it. This is more productive than approving a diagram whose boxes mean different things to different participants."
      ],
      "bullets": [
        "State exactly what the workflow hands over and which separate process authorizes work.",
        "Identify the source, owner and applicability of each required personnel, equipment and document record.",
        "Describe every exception as a question with an affected proposal version and a named recipient.",
        "Specify acknowledgement, reassignment and escalation behaviour when the expected recipient is unavailable.",
        "Record which changed inputs require earlier decisions to be checked again.",
        "Demonstrate a late response to an obsolete proposal and a duplicated incoming event.",
        "Reconcile a manual fallback record before allowing the normal workflow to resume.",
        "Review resolved exceptions for evidence quality before using completion counts to judge the pilot."
      ]
    },
    {
      "heading": "Leave the next shift a decision-ready record",
      "paragraphs": [
        "A good dispatch exception record lets the next coordinator answer four questions: what changed, what remains unresolved, who owns the next decision and which proposal is current? Include a concise summary with links to the supporting evidence. Avoid making the next shift infer status from a long chain of notifications. Closed items should state the resolution; open items should state the next action and the reason work is waiting.",
        "That record is the practical output of the design. The automation earns its place when it moves clear questions to the right people and brings their decisions back into the current plan. Technical responsibility remains identifiable, changes remain visible and routine scheduling work can proceed with fewer ambiguous handoffs."
      ]
    }
  ],
  "checklist": [
    "Name the administrative output and its authorization boundary.",
    "Attach each exception to a specific proposal version.",
    "Separate task coordination from decision authority.",
    "Make acknowledgement and reassignment visible.",
    "Invalidate or recheck decisions when their inputs change.",
    "Test duplicate events and manual recovery.",
    "Evaluate resolved evidence, not just queue size."
  ],
  "references": [
    {
      "label": "ASNT: explaining employer-based certification programmes",
      "url": "https://www.asnt.org/standards-publications/blog/employer-based-certification-programs"
    }
  ],
  "relatedOffers": [
    "reporting",
    "consulting"
  ]
};
