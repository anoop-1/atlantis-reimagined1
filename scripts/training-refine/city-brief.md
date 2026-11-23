# Brief: new US NDT training city pages for atlantisndt.com (daily refinement since 2026-11-23)

This is the brief the 2026-11-11 wave used, updated for 2026-11-23. Today's city comes from `node scripts/training-refine/next.mjs`; add it to `src/data/na-training-2026-11/_manifest.json` first (`"slug": ["City", "ST", "USA", "state-slug"]`, same style as the other rows). Why: Search Console shows that in mid-size industrial markets our city pages already rank 1-5 for "ndt training near me" style searches (competition is thin); the queue lists markets with NDT-heavy employers and no page yet. The queue hint is only a hint: verify every employer fact.

Repository root: the atlantis-reimagined1 checkout. Model files to read first: src/data/deep-content/ndt-training-newport-news.json and the profile src/data/na-training-2026-11/casper.json. Edit only the manifest row and the two files per city named below (RUNBOOK.md covers wiring, build and push).

## What you are writing
Atlantis NDT sells NDT training (ASNT SNT-TC-1A based) to technicians and employers in the USA and Canada. Each city gets a page at /ndt-training-{slug}. The site template already adds a hero, the published US fee table, the enquiry form, the certification hand-off block and links. You write the long-form, city-specific copy that answers what people in that city type into Google: "ndt training {city}", "ndt certification {city}", "ndt school near me", "ndt classes {city}", "ultrasonic testing training {city}", "asnt level 2 {state}", "snt-tc-1a certification", "online ndt training {state}", "ndt jobs {city}", "how to become an ndt technician in {state}".

For each city write TWO files:

1. `src/data/na-training-2026-11/{slug}.json`:
```json
{
  "slug": "sacramento",
  "lat": 38.58, "lng": -121.49,
  "localContext": "60-110 words: the real industrial base that employs NDT technicians around the city (named employers, plants, yards, bases, pipelines, only if you are sure they exist and operate today), the codes that work runs to, and what that means for training.",
  "certPathwayNote": "40-80 words: how certification actually works for employers in this market (SNT-TC-1A written practice, employer certification, any sector-specific overlay such as NAVSEA, nuclear QA, aerospace prime flow-down, CAN/CGSB-48.9712 in Canada).",
  "salaryFrom": "<slug of an EXISTING profile in src/data/training-cities.ts in the same state or nearest region; its salary band is reused, so do not invent salary figures>",
  "siblings": ["5 existing /ndt-training-{slug} slugs nearby"],
  "canadaMeta": { "title": "<=60 chars", "description": "120-158 chars", "h1": "..." }
}
```
`canadaMeta` only for Canadian cities: title and H1 must say "ASNT SNT-TC-1A" (e.g. "ASNT SNT-TC-1A NDT Training in Toronto | Level 1, 2 & 3").
Existing training slugs you may use as siblings: list them with `ls /home/claude/atlantis-reimagined1/dist | grep '^ndt-training-' | sed 's/ndt-training-//'` (also any city in `src/data/na-training-2026-11/_manifest.json`).

2. `src/data/deep-content/ndt-training-{slug}.json`: `{ "path": "/ndt-training-{slug}", "bodyHtml": "<h2>...</h2><p>...</p>..." }`
Read `src/data/deep-content/ndt-training-newport-news.json` first: it is the model for structure, depth and honesty. Then write **2,000 to 2,600 words** of HTML (h2, h3, p, ul/ol/li, table/thead/tbody/tr/th/td, a, strong only; no inline styles, no scripts, no images). Suggested H2s (adapt the wording; keep them query-shaped):
   1. NDT training in {City}, {ST}: how it works (start with a `<p><strong>Short answer:</strong> ...</p>` of 50-80 words)
   2. How to get NDT certified in {City}: the SNT-TC-1A path step by step (ordered list)
   3. Level 1, Level 2 and Level 3 NDT courses for {City} technicians (a table: method, what the course covers, where it is used around {City})
   4. Ultrasonic testing (UT) training in {City} (and the method most used locally)
   5. Where NDT technicians work around {City} (real employers and sectors; no invented names)
   6. NDT schools and classes near {City}: what to compare (honest buyer guidance: classroom schools vs self-paced theory plus a practical at the employer; what to ask any provider; do not disparage named competitors)
   7. Online NDT training in {State/Province}
   8. Training a crew at your {City} facility (employers)
   9. Radiography licensing in {State/Province} (who licenses radiographers; RT training does not license anyone)
   10. Practise before your practical exam (link the simulator and practice tests)
   11. Frequently asked questions about NDT training in {City}: 8-10 `<h3>` questions with `<p>` answers, phrased the way people search (how long, cost, online, near me, which method first, jobs, certificate transfer, Level III).
Every page must have different wording: do not reuse sentences from other cities' files (the validator checks).

Internal links to use (relative hrefs): /aws-cwi-training (and /training/cwi-training-{slug} only if it exists in dist/), /training, /ndt-training-usa (US) or /ndt-training-canada (Canada), /ndt-training-{state or province slug} if `dist/ndt-training-{that slug}` exists, /snt-tc-1a-eligibility, /ndt-training-faq, /ndt-level-1-training, /ndt-level-2-training, /asnt-level-iii-training, /ultrasonic-testing-training, /practical-ndt, /ndt-practice-tests, /ndt-written-practice-development, /consulting/ndt-consulting-level-iii, plus 3-5 sibling city pages. Only link pages that exist in dist/.

## Facts about Atlantis you may state (and nothing more)
- Theory is self-paced online on the Atlantis portal with Level III Q&A; access opens the moment the candidate enrols; courses run year-round (never give course dates, cohorts, intakes or schedules).
- There is NO Atlantis classroom, training centre, venue or office in any city. Say so plainly once ("Atlantis NDT has no classroom in {City}").
- Practicals: in the Practical NDT browser simulator, and hands-on in person at the employer's own facility (or the candidate's employer's), under a written practice built on ASNT SNT-TC-1A.
- Under SNT-TC-1A the EMPLOYER certifies its technicians; a course does not certify anyone. ASNT central certification (ASNT 9712 for Level I/II, ASNT NDT Level III exams) is the alternative route; Atlantis prepares candidates for it.
- The instructor is Anoop Rayavarapu, ASNT NDT Level III in UT, RT, MT, PT and VT, with more than eleven years of international field experience. Never say he is Level III in ET, PAUT or TOFD.
- Published US training fees appear in a table on the page itself: refer to it ("the published US fees on this page"), never write a figure. For Canada write "contact us for fees in your region". Register & Buy Now opens the course on the Atlantis portal.
- "We reply within one business day" is the only time promise allowed.
- Atlantis does NOT offer API 510/570/653, ISO 9712, PCN, CSWIP or CGSB training or certification (mention only as employer context).
- Atlantis DOES offer a six-day AWS CWI exam-prep course: corporate (at the employer's facility), online, or one-to-one (online or in person); AWS administers the exam and certifies; never a pass claim. The page template already adds a CWI block with the nearest CWI city page, so one sentence and a link to /aws-cwi-training is enough where welding inspection matters locally.
- Canada: CGSB stopped certifying on 1 April 2026; CAN/CGSB-48.9712 stays valid and NRCan's NDT Certification Body or CWB Group certify to it. Atlantis is NOT an NRCan Recognized Training Organization, so its courses do not count toward CAN/CGSB-48.9712 certification. Atlantis offers ASNT SNT-TC-1A training for employers whose customers specify ASNT (aerospace and aviation suppliers, maritime, nuclear supply chain, US-code work). Never imply SNT-TC-1A is accepted for CANDU in-service inspection or Transport Canada AMO work unless the customer specifies it. Radiography in Canada needs CNSC exposure device operator certification.
- No ISO 17020/17025 claims; Atlantis is ISO 9001 and ISO 14001 certified (only if relevant).

## Hard rules (the validator fails on these)
- No money figures of any kind ($, USD, CAD, "k/year"), except you may cite the national O*NET median wage for NDT specialists, $78,350 (O*NET 17-3029.01), once, if useful.
- No dates of courses, no "cohort", "intake", "next class", "seats", "enrol by".
- No "classroom/campus/training center/lab" belonging to Atlantis, no "our {City} office/team/instructors", no "near you" promises of a physical location.
- No "live class", "live online", "instructor-led sessions" (theory is self-paced with Q&A).
- No "within 24 hours", "same day", "guarantee", "#1", "best NDT school", "pass rate", "job placement", "job guarantee".
- No NAS 410 anywhere.
- No invented employers, facility names, statistics or local figures. If unsure, describe the sector generically.
- American English for US pages, Canadian/British spelling for Canadian pages. Plain, direct sentences.

## Research
At most 6 WebSearch calls per city, and WebFetch only on URLs those searches return. Use them for the employer facts you are least sure of (current operations, closures, acquisitions). Also find the nearest real NDT/welding-inspection training options (college NDT or welding programmes) so section 6 can compare options honestly and neutrally; name them only if verified.

## Check your work
Run `node scripts/na-training-validate.mjs <slug> [<slug> ...]` and fix everything until each slug shows ✓.

## Report back (short)
Slugs written, validator result, and a list of facts you included but are not fully sure of.

## Second check (also required)
`node scripts/training-refine/validate-city-extra.mjs <slug> ...`
runs the site's training honesty gate (it fails the whole site build on wording such as "scheduled class", "next session",
"our venue") plus superlative and partnership checks. A sentence passes only if it is a plain negation ("There are no set
class times") or a question. Fix until every slug shows ✓ in both checks.
