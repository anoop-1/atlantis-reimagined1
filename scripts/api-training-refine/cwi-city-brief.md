# Brief: AWS CWI exam-prep city pages (/training/cwi-training-{city})

Atlantis NDT already has 52 CWI city pages built from one JSON record each in `src/data/audit-cwi-2026-11/`
(`cwi-training-{slug}.json`), rendered by `scripts/audit-cwi-2026-11.mjs` (read `auditCwiMain`, `cwiFormatsBlock`,
`relatedBlock`, `ctaBlock` and the `RULES` guard). Model your records on three existing ones, e.g.
`cwi-training-tulsa.json`, `cwi-training-houston.json`, `cwi-training-pittsburgh.json` — same JSON shape:
`{"slug","path","title","description","h1","html","faq":[{"q","a"}],"sources":[...]}` — but **never copy their
sentences**: every sentence of 10+ words must be your own and unique across all CWI records.

## The offer (owner rules — exactly)
- A **six-day** AWS CWI exam-preparation course in three formats, all six days: corporate (at the employer's
  facility, a group), online (own pace, instructor answers questions, no scheduled class times), one-to-one (online
  or in person at a location agreed when booking). The page template adds a block describing the three formats;
  your copy should mention the six days and fit the formats, but do not repeat that block.
- **AWS administers the examination and issues the certification.** Each candidate applies to AWS individually and
  meets the AWS eligibility and vision rules personally. Atlantis is not AWS-approved or endorsed and has never seen
  exam content.
- Fees are quoted on request — no prices, no "from $". No exam or class dates, no cohorts, no live classes, no
  "next intake". No time promises except "we reply within one business day". No pass rates or guarantees.
- No instructor named. The founder (Anoop Rayavarapu) is ASNT NDT Level III in UT, RT, MT, PT, VT — he is **not** a
  CWI; never connect him to the CWI or any AWS credential.
- There is no Atlantis classroom in the city; say so plainly ("There is no Atlantis classroom in {City}").
  Offices are Houston (USA) and Hyderabad (India) only. Never write "our … office/classroom/centre".
- Atlantis does not write or qualify welding procedures (WPS/PQR) — never offer that. In the US Atlantis never
  offers radiography (RT). No NAS 410. No fitness-for-service offers.
- No CITGO, nothing about Russia, Venezuela or Iran. No incident narratives (fires, explosions, deaths).

## Content (2,200–2,600 words of html, plus 8–10 FAQs)
Local and specific, researched with WebSearch (fetch only URLs a WebSearch returned to you): who employs welders
and welding inspectors in and around the city (fabricators, shipyards, refineries, power, rail, structural steel,
pipelines, manufacturers — real names you can source), the work and codes they use (AWS D1.1, D1.5, D1.6, API
1104, ASME IX/B31.x, D15.1 etc.) and which Part C code book suits local candidates; the local AWS section (verify
on aws.org; if you cannot verify, point to the AWS section finder); welding schools and colleges in the area
(factually, no disparagement); where candidates sit the exam (AWS exams are at Prometric test centres or AWS
seminar sites — describe generally unless verified); experience/eligibility routes for local candidates; how a
local employer would run the corporate format at its facility; what to do after the CWI (endorsements, ASNT NDT
training at /training or /ndt-training-{city} if it exists). Title ≤ 62 chars like "AWS CWI Exam Prep in {City},
{ST}: 6-Day Course"; description ≤ 160 chars; h1 more descriptive. At least 8 `<h2>` sections. Internal links only
to pages that exist (`dist/<path>/index.html`).

## Check
For each record run:
`node scripts/api-training-refine/check-cwi.mjs <slug> [<slug>…]` — fix everything it prints until OK.
