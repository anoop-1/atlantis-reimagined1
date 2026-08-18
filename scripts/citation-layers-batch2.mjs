/**
 * Citation layers, batch 2 — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * Kept in a separate module from citation-layers.mjs purely so the corpus stays
 * reviewable; prerender merges both. Same rules apply and the same lint gates
 * them: 40-70 word lead, 130-165 word expansion, named authority inside the
 * block, one real captioned table, six question-form facet headings, US answer
 * first, no Atlantis price.
 *
 * SELECTION — these four are not arbitrary:
 *
 * /blog/cwi-pass-rate-by-part-a-b-c-breakdown is the THESIS TEST. It sits at
 * position 3.9 with real impressions, so if the citation spec moves CTR at
 * constant position anywhere, it moves here first. If this page does not move
 * after recrawl, the diagnosis is wrong and the rest of the programme should be
 * re-argued rather than funded. Everything else in the plan is downstream of
 * that one measurement.
 *
 * /consulting/ndt-consulting-level-iii carries the highest commercial intent on
 * the site — "asnt level iii consulting" 243 impressions at position 44.6 with
 * zero clicks. The competitor audit found ALL ten ranking competitors publish
 * no FAQ content and no schema, and that the segment's single biggest unserved
 * question is the scope limit: an outside agency contracted for Level III
 * services cannot certify the client's own employees under SNT-TC-1A. That
 * answer is the wedge, and it is given below.
 *
 * /blog/api-510-570-653-exam-schedule-2026 holds "api exam schedule" at 500
 * impressions, position 6.0 — date-sensitive intent where a table is decisive.
 *
 * /asnt-certification holds the certification pathway term at 504 impressions,
 * position 8.3, and already cites operator specs by document number, which is
 * the credibility asset no competitor in the segment has.
 */

export const CITATION_LAYERS_BATCH2 = {
  '/blog/cwi-pass-rate-by-part-a-b-c-breakdown': {
    answer:
      'About half of AWS CWI candidates pass all three parts on the first attempt, and Part B is where most failures occur. Part B is the hands-on practical examination using replica weld specimens and a Book of Specifications, and it is scored separately from Parts A and C.',
    expansion:
      'The examination splits into three independently scored parts, and a candidate must pass all three. Part A covers fundamentals across welding processes, metallurgy, symbols, safety and destructive and nondestructive testing. Part B is practical: candidates inspect replica weld specimens against a supplied Book of Specifications written specifically for the exam rather than against a code they already know, which is precisely why familiarity with AWS D1.1 does not carry a candidate through it. Part C is the code-book examination, open book, against whichever code the candidate elected at application. Failing one part means retaking only that part within the retest window, so diagnosing which part is at risk changes the study plan more than raw study hours do.',
    source: 'AWS QC1, Standard for AWS Certification of Welding Inspectors, and the AWS B5.1 body of knowledge',
    table: {
      id: 'cwi-parts-breakdown',
      caption: 'AWS CWI examination by part — format, what it tests and where candidates lose marks',
      columns: ['Part', 'Format', 'What it examines', 'Typical failure cause'],
      rows: [
        ['Part A — Fundamentals', 'Closed book, multiple choice', 'Processes, metallurgy, symbols, safety, NDT and destructive testing', 'Breadth: candidates revise their own process and miss the rest'],
        ['Part B — Practical', 'Hands-on, replica specimens, supplied Book of Specifications', 'Applying an unfamiliar written spec to physical welds under time', 'Using remembered code criteria instead of the supplied specification'],
        ['Part C — Code book', 'Open book, elected code', 'Navigating the elected code to locate an acceptance criterion', 'Slow navigation; the constraint is time, not knowledge'],
      ],
      note: 'Structure per AWS QC1. Pass marks are set per part and each is scored independently, so a strong Part A cannot offset a failed Part B.',
    },
    facets: [
      { q: 'Which part of the CWI exam do most people fail?', a: 'Part B, the practical. Candidates inspect replica weld specimens against a Book of Specifications written for the examination rather than against a familiar production code, and marks are lost applying remembered AWS D1.1 criteria instead of the supplied document.' },
      { q: 'Do you have to retake the whole CWI exam if you fail one part?', a: 'No. Each of the three parts is scored independently and only the failed part is retaken, within the retest window set by AWS. That is why identifying the weak part before the attempt changes the study plan more than adding study hours does.' },
      { q: 'Is Part C open book?', a: 'Yes. Part C is the code-book examination and candidates use the code they elected at application. The constraint is navigation speed rather than recall, so the effective preparation is repeated timed lookups rather than memorising clauses.' },
      { q: 'Does AWS D1.1 experience help with Part B?', a: 'Less than candidates expect. Part B supplies its own Book of Specifications, and acceptance criteria in it deliberately differ from D1.1. Practical experience helps with specimen handling and measurement; it actively misleads on acceptance limits.' },
      { q: 'How long should you study for the CWI exam?', a: 'Most successful candidates report 150 to 200 hours of self-study alongside a preparatory seminar. The distribution matters more than the total: Part C rewards timed navigation practice, and Part B rewards handling real specimens against an unfamiliar written specification.' },
      { q: 'Is CWI worth it compared with an ASNT Level II?', a: 'They certify different things and most inspectors eventually hold both. CWI authorises weld inspection sign-off to AWS codes; ASNT Level II authorises interpreting a specific NDT method to an approved procedure. Contract requirements, not preference, usually decide which comes first.' },
    ],
  },

  '/consulting/ndt-consulting-level-iii': {
    answer:
      'An outside agency Level III cannot certify your employees under SNT-TC-1A. Certification is granted by the employer, so an external Level III writes and approves the written practice, prepares and grades examinations, and provides technical oversight, while your company remains the certifying body and signs the certificates.',
    expansion:
      'This distinction decides audits and it is the question the market answers worst. SNT-TC-1A is an employer-based recommended practice: the employer establishes a written practice, and the employer certifies its own personnel against it. An outside agency contracted for Level III services supplies the authority the employer lacks in house — authoring or approving the written practice, developing and administering examinations, approving procedures, and providing the technical judgement an assessor expects to find. What it cannot do is become the certifying body. Certificates are issued by the employer and signed under the employer written practice. Contracts that blur this produce findings, because the assessor traces certification authority back to a company that never held it. NAS 410 handles the same problem differently by designating a Responsible Level 3, which may be an outside individual, named in the employer procedure.',
    source: 'ASNT SNT-TC-1A (2024 edition); ANSI/ASNT CP-189; NAS 410 for the aerospace Responsible Level 3 route',
    table: {
      id: 'outside-level-3-authority',
      caption: 'What an outside agency Level III can and cannot do under each scheme',
      columns: ['Activity', 'SNT-TC-1A', 'CP-189', 'NAS 410'],
      rows: [
        ['Author or approve the written practice', 'Yes, as the approving Level III', 'Yes', 'Yes, as Responsible Level 3'],
        ['Prepare and grade examinations', 'Yes', 'Yes', 'Yes'],
        ['Approve NDT procedures', 'Yes', 'Yes', 'Yes'],
        ['Certify the employer personnel', 'No — the employer certifies', 'No — the employer certifies', 'No — the employer certifies'],
        ['Be named as the accountable Level III', 'Yes, by employer designation', 'Yes', 'Yes, named in the procedure'],
        ['Sign certificates on the employer behalf', 'No', 'No', 'No'],
      ],
      note: 'SNT-TC-1A is a recommended practice using "should"; CP-189 is a standard using "shall". An employer commits to specific numbers in its own written practice, which is what an assessor audits against.',
    },
    facets: [
      { q: 'Can an outside agency certify my NDT employees?', a: 'No. Under SNT-TC-1A certification is employer-based, so your company issues and signs the certificates. An outside Level III supplies the approving authority — written practice, examinations, procedure approval and oversight — but the certifying body remains you.' },
      { q: 'What does an outsourced NDT Level III actually deliver?', a: 'A written practice authored or approved to your scheme, NDT procedures approved for your codes, examinations prepared and graded per method and level, technical oversight during qualification, and a named accountable individual an assessor can identify in your documentation.' },
      { q: 'Our Level III resigned — what happens to our certifications?', a: 'Existing certifications remain valid, but the authority that approved them has gone. Until a replacement Level III is designated, no new personnel can be qualified, no procedure can be approved, and the next audit will ask who currently holds that authority. Designating an interim outside Level III closes the gap.' },
      { q: 'Is an outside Level III cheaper than hiring one?', a: 'For most contractors below roughly fifteen technicians, yes, because a staff Level III is a full salary against intermittent demand — written practice review, procedure approvals, examination cycles and audits. The comparison turns on qualification frequency rather than headcount alone.' },
      { q: 'Which scheme applies to my company — SNT-TC-1A, CP-189 or NAS 410?', a: 'Your customer contract decides. Aerospace work and Nadcap accreditation invoke NAS 410. Contracts specifying ANSI/ASNT CP-189 impose a standard using "shall" rather than a recommended practice. Absent either, SNT-TC-1A employer-based certification is the default across US industrial work.' },
      { q: 'Does an outside Level III cover a Nadcap audit?', a: 'A designated Responsible Level 3 satisfies the personnel-authority requirement under NAS 410, which AC7114 assesses. It does not by itself close the record findings that generate most Nadcap results — vision test currency, OJT documentation and retained examination papers remain the employer responsibility.' },
    ],
  },

  '/blog/api-510-570-653-exam-schedule-2026': {
    answer:
      'API 510, 570 and 653 examinations run in fixed windows each year, and applications close roughly two months before the window opens. Candidates book a seat through Prometric once API approves the application, so the application deadline governs the timeline rather than the examination date itself.',
    expansion:
      'The sequence that catches candidates out is administrative rather than technical. API opens an application window, reviews eligibility against the education and experience combinations in the certification programme, and only then releases the candidate to schedule at a Prometric centre. That review takes weeks, so a candidate who applies close to the deadline may find preferred dates and locations already taken even though the examination itself is months away. Candidates requiring a visa or long-haul travel should work backwards from the seat, not from the window. Each certification is examined as a closed-book portion plus an open-book portion using the published effective editions, and those editions are fixed per window — sitting a later window can mean a different edition and a changed body of knowledge.',
    source: 'API Individual Certification Programs (ICP) published examination schedule and body of knowledge documents',
    table: {
      id: 'api-icp-sequence',
      caption: 'API ICP examination sequence — what governs each step',
      columns: ['Step', 'Who controls it', 'Typical lead time', 'What goes wrong'],
      rows: [
        ['Application submitted', 'Candidate', 'Opens months before the window', 'Applying near the deadline compresses everything after it'],
        ['Eligibility review', 'API', 'Weeks', 'Experience documentation rejected, restarting the clock'],
        ['Scheduling released', 'API to Prometric', 'After approval', 'Preferred centre and date already full'],
        ['Examination sat', 'Prometric centre', 'Within the published window', 'Travel or visa not aligned to the seat actually obtained'],
        ['Result issued', 'API', 'Weeks after the window', 'Retake planning assumes a faster turnaround than occurs'],
      ],
      note: 'Effective code editions are fixed per examination window. Confirm the edition against the current API body of knowledge before buying reference material.',
    },
    facets: [
      { q: 'When do API 510, 570 and 653 exams take place?', a: 'API runs examinations in fixed windows through the year rather than on demand. The window dates and their application deadlines are published per certification, and the application deadline — roughly two months ahead — is the date that actually constrains a candidate.' },
      { q: 'How far in advance should I apply for an API exam?', a: 'Apply as soon as the window opens rather than near the deadline. API must review eligibility before releasing you to schedule with Prometric, and that review takes weeks; late applicants routinely lose their preferred centre and date even when the exam is months away.' },
      { q: 'Which code edition will my API exam use?', a: 'The effective editions are fixed per examination window and published in the body of knowledge for that window. Sitting a later window can change the edition, so confirm before buying reference material — an out-of-edition code is the most expensive avoidable mistake in preparation.' },
      { q: 'What happens if I fail an API ICP exam?', a: 'You retake within the retest rules for that certification rather than reapplying from the start, but results take weeks to issue, so a retake usually lands in a later window. Build that lag into any plan tied to a contract or promotion date.' },
      { q: 'Can I sit API 510 and API 570 in the same window?', a: 'Yes, they are separate examinations with separate applications and fees, and candidates do sit both. The practical limit is preparation: each has its own body of knowledge and open-book code set, and splitting revision across two tends to weaken both.' },
      { q: 'Do I need an employer to apply for API certification?', a: 'No, but you need documented experience an employer or supervisor can attest to. API reviews the education and experience combination at application, and unverifiable experience is the most common cause of an application being returned.' },
    ],
  },
};
