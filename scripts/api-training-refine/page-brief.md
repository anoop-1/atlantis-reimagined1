# Brief: API 510 / 570 / 580 / 653 exam-prep training pages (atlantisndt.com)

You are writing one or more page records for Atlantis NDT's new API exam-preparation courses. Every record is a JSON
file in `src/data/api-training-2026-11/{slug}.json`. The page plan (path, slug, course, kind, city, state, region) is
in `src/data/api-training-2026-11/_pages.json`. The build module is `scripts/api-training-2026-11.mjs`; read its
`apiFormatBlock`, `relatedBlock` and `ctaBlock` so you know what the page already says around your copy. Do not
repeat those blocks.

## The offer (owner, 2026-11-28) — state it exactly, never embellish

- Atlantis NDT offers exam-preparation courses for API 510 (pressure vessel inspector), API 570 (piping inspector),
  API 580 (risk based inspection) and API 653 (aboveground storage tank inspector).
- Delivery: **self-paced online, with instructor Q&A**. No scheduled class times, no live classes, no cohorts,
  no classroom. The candidate starts when they enrol and sets their own pace. An instructor answers questions.
- **Do not state a course length** (no "5-day", "40 hours", "12 weeks", "takes N weeks").
- **No prices or fee figures for Atlantis**. "Fees are quoted on request." Employers can sponsor several candidates.
- **API administers and certifies.** The American Petroleum Institute (API) Individual Certification Programs (ICP)
  sets eligibility, administers the exam in person at Prometric test centres, and issues the certification.
  Each candidate applies to API individually. Atlantis's course does not grant certification.
- Atlantis is **not** an API-approved, API-accredited or API-endorsed training provider. Never imply it is.
- **No instructor is named.** Never give the instructor a credential. The founder (Anoop Rayavarapu, ASNT NDT
  Level III in UT, RT, MT, PT and VT) holds **no API certification** — never connect him to API 510/570/580/653.
- No pass rates, no guarantees, no "students we trained at X", no client names.
- Atlantis's other lines you may link to where they genuinely help: ASNT SNT-TC-1A NDT training (UT, RT, MT, PT, VT,
  MFL) at `/training`, `/ndt-training-usa`, `/ndt-training-{city}`; the 6-day AWS CWI exam-prep course at
  `/aws-cwi-training` and `/training/cwi-training-{city}`; remote RBI studies at `/inspection/risk-based-inspection`;
  ASNT Level III consulting at `/consulting/ndt-consulting-level-iii`. In the US, Atlantis performs UT, MT, PT and VT
  but **never radiography (RT)**. Fitness-for-service (API 579) is **not** offered. Never mention NAS 410.
- Offices: Houston (USA) and Hyderabad (India). There is **no Atlantis classroom anywhere**. Every city page must
  contain the sentence "There is no Atlantis classroom in {City}" (Houston: you may add that Atlantis has an office
  there, but write it as "Atlantis has an office in Houston" — never "our Houston office").
- Only email: info@atlantisndt.com (you rarely need it; the page has an enquiry link).

## Verified facts (api.org programme pages, read 2026-11-28). Use these; do not add others unless you verify them.

API 510, API 570, API 653 (same structure):
- Eligibility = education + experience, experience gained within the last 10 years while employed by or under
  contract with an authorized inspection agency (API's wording; for 653 it is Annex D of API 653):
  BS or higher in engineering/technology (or 3+ years technical military service): 1 year, supervision or performance
  of inspection activities as described in the code. 2-year degree/certificate in engineering/technology (or 2 years
  technical military service): 2 years, design/construction(or fabrication)/repair/operation/inspection of the
  equipment, including 1 year in supervision or performance of inspection. High school diploma or equivalent: 3
  years, same. No formal education: 5 or more years, same. A dishonorable discharge disqualifies military credit.
  Experience is documented on the application and verified.
- Exam: 170 questions (140 scored, 30 unscored pretest); 110 closed-book, 60 open-book; the day is 7.5 hours: a
  short tutorial, 2.75 hours closed-book, a 45-minute lunch break, 3.75 hours open-book. In person at designated test
  centres only (Prometric); no papers, notes or books; for the open-book part the code PDFs are on the computer.
- Certification: three-year term, ANSI-accredited under ISO 17024. Recertification: apply from 90 days before
  expiry, 90-day grace period with late fees; at least 20% of time in the last three years spent performing or
  supervising inspection of that equipment (otherwise the full exam); 24 CPD hours per three-year cycle across at
  least two categories; a web quiz every six years (25 open-book questions on code changes, four hours, pausable up
  to three times; one retake allowed).
API 580 (Risk Based Inspection):
- Holders of a current API 510, 570 or 653 certification automatically qualify. Otherwise education + petrochemical
  industry experience within the last 10 years: BS 1 year, 2-year degree 2 years, high school 3 years, none 5+ years.
- Exam: 90 multiple-choice questions (80 scored, 10 pretest), closed-book, 3.25 hours, set passing scaled score.
- Three-year term; recertification application from 90 days before expiry, 90-day grace; employment verification is
  not currently required to recertify. The exam is based on the API 580 Body of Knowledge, which draws on API RP 580.
Exam windows: **never write dates of exam windows or deadlines** (they change; the page links to
`/blog/api-510-570-653-exam-schedule-2026`, which holds them). You may say API runs each exam in set windows
during the year and that each window has an application deadline.
Body of Knowledge: each window has its own Body of Knowledge and Publications Effectivity Sheet listing the code
editions examined. Say the candidate studies the editions on the effectivity sheet for their window. Name specific
editions only if you have read them in the API BOK/effectivity PDF yourself (run a WebSearch such as
"api.org 653 BOK March 2027" first; fetch only URLs a WebSearch returned to you).
Typical documents in each Body of Knowledge (confirm in the BOK before giving detail): API 510 — API 510, RP 571,
RP 572, RP 576, RP 577, RP 578, ASME Section VIII Div. 1, Section V, Section IX, ASME PCC-2. API 570 — API 570, RP
571, RP 574, RP 577, RP 578, ASME B31.3, Section V, Section IX, B16.5 and related. API 653 — API 653, API 650, RP
575, RP 571, RP 577, RP 651, RP 652, ASME Section V, Section IX. API 580 — API RP 580 (with damage-mechanism and
RBI concepts; RP 581 is the quantitative method).

## What searchers want (write for them; use these phrases naturally, in headings where they fit)

National course pages: "API {code} training", "API {code} course", "API {code} exam prep", "API {code} online
course / online training", "API {code} certification training", "API {code} study guide", "API {code} practice
questions / practice exam", "how to pass the API {code} exam", "API {code} body of knowledge", "API {code}
calculations", "is API {code} open book". Eligibility and requirements queries belong to the certification page
(`/api-{code}-certification`) — summarise and link to it, do not compete with it.
Hub `/api-inspector-training-usa`: "API inspector training", "API certification training", "API ICP exam prep",
"API 510 570 653 training", "which API certification first", "API inspector career".
Region pages: "API inspector training {region / Texas / Louisiana / California…}", where API inspectors work there.
City pages: "API {code} training {city}", "API {code} course {city}", "API {code} classes near me", "API {code}
certification {city}", plus the local refineries, terminals, plants and employers that hire API inspectors.

## Page structure

- `title` ≤ 62 characters, leads with the query ("API 653 Training in Houston: Online Exam Prep" style).
- `description` 110–160 characters, concrete, no price, no length.
- `h1` one line, more descriptive than the title.
- `html`: at least 6 `<h2>` sections (plus `<h3>` as needed), `<p>`, `<ul>/<ol>`, at most 2 `<table>`s, internal
  `<a href="/...">` links only to pages that exist (check `dist/<path>/index.html`). No `<h1>`. No inline styles.
- `faq`: 6–10 `{ "q", "a" }` pairs a real candidate or employer would ask; answers 40–120 words; may contain links.
- Own words (html + FAQ, tags stripped) **2,200–2,700**. The guard fails under 2,000.
- `sources`: array of the URLs you actually read.
- `published`: "2026-11-28".

National page sections to cover (adapt): what the exam tests and how the closed/open-book split works; who should
take it and eligibility in brief (link to the cert page); what the course covers code by code; the calculations
candidates get wrong (give worked examples with numbers — these are exam content, not prices); a study plan by
phase without stating a length; how instructor Q&A works in practice; open-book technique (finding answers in the
PDFs); after the exam (results, recertification); employer sponsorship.
City page sections (2,200+ own words, local and specific): where {code} inspectors work in and around the city (name
real refineries, terminals, chemical plants, pipelines, owners/operators and state regulators — only facts you can
source; no incident narratives); what local work demands of a {code} inspector (assets, damage mechanisms common
there, e.g. sour service, chlorides, CUI on the Gulf, cold climate); how a candidate from {city} uses the self-paced
course (shift work, turnarounds); eligibility routes for local candidates (welders, NDT technicians, operators,
engineers); nearest Prometric test centre — say "Prometric lists test centres in and around {city}" without an
address unless you have read it on prometric.com; local options compared honestly (colleges, other providers by
type, employer in-house programmes — do not disparage named competitors); how employers in {city} can sponsor.
Do not reuse sentences across pages: every sentence of 10+ words must be unique across all API records (the guard
checks). Vary structure between pages you write. If you write the four course pages for one city, give each its own
local angle (vessels and columns for 510, unit piping and CUI for 570, RBI programmes and data for 580, tank farms and
terminals for 653).

## Forbidden (the guard fails the build)

Price figures · "within N days/hours" promises · a stated course length · live classes/cohorts/next intake ·
month + day dates (e.g. "January 2–22") · "our … office/classroom/centre" · superlatives about Atlantis ("leading",
"best", "only", "first") · pass rates, guarantees · API approval/accreditation/endorsement claims · Atlantis
issuing/administering certification or exams · the founder with any API credential · naming/credentialing the
instructor · US radiography offered by Atlantis · FFS offered · NAS 410 · client claims · CITGO, PDVSA, Lukoil,
Rosneft, Nayara, or anything about Russia, Venezuela or Iran.

## Check before you finish

`node scripts/api-training-2026-11.mjs --check <slug>` (no build needed). Fix every problem it prints. It also checks
shared sentences against every other record already written.
