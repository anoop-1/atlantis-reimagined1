# Brief: "NDT training near {City}: local options compared" sections (atlantisndt.com; daily refinement since 2026-11-23)

You write ONE researched section per page for existing US NDT training pages (`/ndt-training-{slug}`). Write each as
`src/data/geo-depth-2026-10/ndt-training-{slug}.json` in the repository (one file per page). Today's pages come from
`node scripts/training-refine/next.mjs`. The validator prints each page's minimum word count (enough for the page to reach
2,300 page-specific words, never under 650).

## Why this section exists (the data)
Google Search Console, USA, 90 days: 98% of the impressions on these city pages come from national searches such as
"ndt training near me", "ndt courses near me", "ndt certification near me", "non destructive testing training near me",
"asnt training near me", "ndt school near me", "ndt classes". Google shows the city page nearest the searcher. In big
metros the pages rank 40–70 because the page does not answer what a near-me searcher wants: **what NDT training actually
exists near me, how the options compare, and which one fits me.** Your section answers exactly that, honestly, for that
city (or state, for state pages), and shows where Atlantis fits without pretending to be local.

## Read first
1. The page as it is now: extract its text, e.g.
   `node -e "const h=require('fs').readFileSync('dist/ndt-training-dallas/index.html','utf8');console.log((h.match(/<main[\s\S]*?<\/main>/)||[''])[0].replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').slice(0,12000))"`
   Do not repeat what the page already says (the validator rejects repeated sentences). Your section adds the local
   comparison the page lacks.
2. Two published examples of this section type (voice, depth, honesty):
   `src/data/geo-depth-2026-10/ndt-training-denver.json` and `src/data/geo-depth-2026-10/ndt-training-dallas.json`.
   Do not copy any sentence from them.

## Research (real, checkable facts only)
WebSearch at most **3 searches per page**, and WebFetch only URLs
those searches returned. For each place find, where they exist:
- Colleges and technical schools near the city with an **NDT certificate/degree**, or welding/inspection programmes that
  include an NDT introduction (name the school and programme only if you verified it; describe the programme neutrally).
- Private NDT schools or training companies with a location in that metro (name factually, never disparage).
- Union or apprenticeship routes that train inspection people (e.g. Boilermakers, UA, operating engineers) — verified only.
- On-the-job routes: local inspection companies hire trainees (you may name well-known firms with a verified local office,
  or keep it generic).
- The nearest full-time NDT programme if none exists in the metro.
- Who licenses industrial radiographers in that state (state agency or NRC), stated without detail you are unsure of.
If you cannot verify something, leave it out or say it generally ("community colleges in the region offer welding
programmes; check whether one includes an NDT introduction"). **Never invent a school, programme, course code or office.**

## Shape of each section (HTML, plain)
- Starts with its **single** `<h2>`, query-shaped, e.g. "NDT training near Dallas: local schools, on-the-job routes and
  online study compared". (For a state page: "NDT training in Idaho: options across the state compared".)
- Then `<p>`, `<h3>`, `<ul>/<ol>/<li>`, `<table>/<thead>/<tbody>/<tr>/<th>/<td>`, `<strong>`, `<a href="/...">` only.
  No other h2, no h1, no images, no inline styles, no external links (sources go in `sources`, not in the HTML).
- At least three `<h3>` subsections. A good set:
  1. Who offers NDT training around {City}? (the verified options, one list item each: what it is, what it gives, what it does not)
  2. Which route fits you? (newcomer with no NDT job yet / working technician adding a method or level / employer
     certifying a crew) — a small table works well.
  3. Questions to ask any NDT training provider near {City} (hours by method under SNT-TC-1A, who runs the practical,
     who certifies you, whether the course counts under your employer's written practice, Level III access).
  4. Where Atlantis fits for {City} candidates and employers.
- **Words:** at least the minimum the validator prints for that page, at most 1,080. Aim 750–1,000.
- **Links** (relative): at least three of `/ndt-level-1-training`, `/ndt-level-2-training`, `/asnt-level-iii-training`,
  `/training`, `/ndt-training-usa`, `/ultrasonic-testing-training`, `/magnetic-particle-testing-training`,
  `/penetrant-testing-training`, `/visual-testing-training`, `/practical-ndt`, `/ndt-practice-tests`,
  `/snt-tc-1a-eligibility`, `/ndt-training-faq`, `/aws-cwi-training`, and where it exists `/training/cwi-training-{slug}`,
  the state page `/ndt-training-{state}` and 1–3 nearby city pages `/ndt-training-{slug}`. Only pages that exist in
  `dist/` (check with `ls`).

## What you may say about Atlantis (and nothing more)
- There is **no Atlantis classroom, school, venue or office in the city** (offices only in Houston, Texas and Hyderabad,
  India). You may say "Atlantis NDT has no classroom in {City}" once if useful (the page already says it).
- Theory is self-paced online on the Atlantis portal with ASNT Level III question-and-answer support; access opens when
  the candidate enrols; courses run year-round (no dates, cohorts, intakes, schedules, "next class").
- Practicals: in the Practical NDT browser simulator, and hands-on in person at the employer's own facility under a
  written practice built on ASNT SNT-TC-1A. Employers can have training delivered on-site at their facility.
- Under SNT-TC-1A **the employer certifies**; a course certifies nobody. ASNT central certification (ASNT 9712 Level I/II,
  ASNT NDT Level III) is the other route; Atlantis prepares candidates for it.
- Atlantis offers a **six-day AWS CWI exam-prep course** (corporate at the employer's facility, online, or one-to-one
  online or in person); AWS administers the exam and certifies. The page already carries a CWI block — mention only if useful.
- The instructor, if you mention him at all: ASNT NDT Level III in UT, RT, MT, PT and VT, 11+ years of international field
  experience. Never ET, PAUT or TOFD Level III; never CWI; never name him as "our {City} instructor".
- Published training fees appear elsewhere on the page — **do not use the words "fee", "fees", "price", "prices" or any
  money figure at all** in your section (the section rule rejects them). Say "see the course details on this page" or
  "ask for a quote" instead.

## Never write
Course dates, cohorts, intakes, "live classes", "instructor-led", "within 24 hours", "guarantee", "pass rate", "job
placement", "best", "#1", "the only", "first", "leading"; any claim that Atlantis partners with, is approved by or
affiliated with a school, college, ASNT or AWS; any Atlantis office, lab, facility, centre or campus; NAS 410; API, ISO
9712, PCN, CSWIP or CGSB training by Atlantis; any radiography service by Atlantis in the US; RBI/FFS services; email
addresses; disparagement of named schools. American English.

## File format (JSON, UTF-8, 1-space indent like the other records)
```json
{
 "path": "/ndt-training-dallas",
 "h2": "the same text as the h2 inside html",
 "html": "<h2>…</h2><p>…</p><h3>…</h3>…",
 "queries": ["ndt training near me", "ndt school near me", "…the near-me / city searches this answers"]
}
```
Put the URLs you used in `scripts/training-refine/sources.json` under the page path (`{"/ndt-training-dallas": ["https://…"]}`); they are not rendered.

## Check before you finish
`node scripts/training-refine/validate-section.mjs /ndt-training-{slug} …` — fix everything it reports until every page shows ✓.
