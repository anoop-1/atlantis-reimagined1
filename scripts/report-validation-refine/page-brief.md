# Writer brief — NDT report validation pages (/report-validation/{slug})

Owner, 2026-11-23: "add report validation with multiple US cities … we provide independent review and impartial analysis for the data they've sent, with team of experts from different industries, Nuclear, Maritime, Oil & gas, and petrochemical etc., scale it massive across all US cities except North Carolina"; "make sure all the new pages are of high quality content, include key words like Digital inspection, review, Digital reporting etc."; "I don't want any pricing mentioned in any of those pages, they reach out to us for the pricing and validation"; "include Methods, Digital radiography, Computed radiography, PAUT, Eddy current tube inspection etc., across all US cities and middle eastern cities". Maritime SEO is paused (class-society audits): maritime may be mentioned as a background of the review team, never as a page topic.

## What the service is
Independent, impartial technical review of NDT reports and digital inspection data a client sends: PAUT/TOFD files, CR/DR images and film radiographs, eddy current tube data, UT thickness and corrosion maps, UT/MT/PT/VT weld reports, inspection reports to API 510/570/653, pipeline and structural records. Seven checks every review runs: procedure compliance; personnel qualification on the date of work; equipment and calibration; technique adequacy; acceptance criteria (right code, edition, table); interpretation and sizing; completeness and traceability. Three verdicts: sound; deficient in documentation only; deficient in disposition. Output: a written opinion with each finding tied to the clause/procedure step and the evidence. Reviews are carried out **remotely** on the records sent (secure transfer). Atlantis's offices: Houston and Hyderabad only. No office, team, lab, agent or partner anywhere else (Atlantis has no office in the GCC). Atlantis does not review reports for projects where it performed the examination.

## Hard rules (the checker and the build guard enforce most of them)
- **No pricing, ever**: no price/pricing/fee/rate/discount/affordable/cost-effective/free consultation/free review, no currency figures. CTA language: "send the report", "request a review", "scope and a quote". The only time promise allowed: "we reply within one business day". No turnaround days/hours, no "same day".
- No "first", "only", "best", "leading", "top", "world-class", "guarantee", "24/7", "team of Level IIIs". No clients, outcomes, statistics or case stories about Atlantis work.
- Never name the founder. You may say reviews in UT, RT, MT, PT and VT are led by an ASNT NDT Level III certified in those five methods — phrase it differently on every page. Never claim Level III or certification in ET, AE, MFL, leak testing or anything else; for those, say the proposal names a reviewer with the certification the contract requires.
- The review team: members come from nuclear, maritime, oil and gas and petrochemical work. No numbers, no names, no other credentials.
- Not offered: fitness-for-service / API 579 / remaining-life calculations (stay with the owner's engineer); acting as inspector of record, Authorized Inspector or ANI; certifying personnel. Say so where relevant ("stays with …").
- United States: Atlantis does **not** perform industrial radiography in the US (NRC 10 CFR Part 34 / Agreement State licensing). Reviewing radiographs, CR and DR images from the owner's licensed contractor is a document review and is offered. Never offer RT in the US.
- Nuclear: Atlantis is not on any licensee's 10 CFR 50 Appendix B / NQA-1 approved supplier list. Frame nuclear work as an independent technical opinion the licensee's QA organisation decides how to use (non-safety-related scope, vendor oversight, owner's second opinion, disputes). Never claim experience at a named plant.
- Never name: Russia, Venezuela, Iran, or companies substantially owned by sanctioned entities (CITGO, PDVSA, Lukoil, Rosneft, Nayara). No North Carolina place or company. No incident/accident narratives at named facilities. No NAS 410. No ISO 17020/17025 accreditation claim (Atlantis holds ISO 9001 and ISO 14001). No class-approval wording.
- Do not invent facts. Every named facility, owner, regulator, standard edition and clause number must be verified on an official or primary source found through **WebSearch** (fetch only URLs a WebSearch returned — typed URLs stall on a permission prompt). If you cannot verify a clause number, describe the requirement without the number. Check current ownership (plants change hands: e.g. Deer Park is PEMEX's; LyondellBasell closed its Houston refinery in 2025; Phillips 66 closed its Los Angeles refinery in late 2025; Valero announced closing Benicia; U.S. Steel is owned by Nippon Steel since June 2025; KIPIC was folded into KNPC in 2026). Put every source URL in the record's `sources` array.

## Keywords to work in naturally (owner request)
NDT report validation, report review, independent review, third-party report review, NDT data review, inspection data review, **digital inspection**, digital inspection data, **digital reporting**, digital NDT reports, Level III review. Every page needs at least one paragraph on the digital side of its subject (raw files, digital images, digital reporting platforms, data lineage, electronic signatures) — not keyword lists.

## Record format — `src/data/report-validation-section/pages/{slug}.json`
```json
{
  "title": "≤62 chars, contains 'Report Validation' or 'Report Review' (city: 'NDT Report Validation in Houston, TX | Independent Review')",
  "description": "120–160 chars, specific, no price words",
  "h1": "different from the title",
  "eyebrow": "optional short label",
  "intro": "80–120 words",
  "highlights": [{"h": "…", "p": "…"}, {"h": "…", "p": "…"}, {"h": "…", "p": "…"}],
  "sections": [{"h": "…", "p": ["para", "para"], "list": ["optional"], "table": {"head": ["…"], "rows": [["…"]]}}],
  "faqs": [{"q": "…?", "a": "…"}],
  "related": [["/existing-built-path", "Label"]],
  "sources": ["https://…"]
}
```
- 7–10 sections, at least one table, 7–9 FAQs. **2,000+ words of the page's own copy** (intro, highlights, sections, lists, table rows, FAQs) — aim for 2,200–2,700. The model adds the CTA, form and links to the hub, industry, method, digital and nearby city pages automatically; `related` is only for extra built pages (e.g. `/inspection-services-texas`, `/consulting/ndt-consulting-level-iii`, `/inspection/risk-based-inspection`, `/ultrasonic-testing`, an existing guide such as `/report-validation/phased-array-data-review-paut`). Every link must be a built page — check that `dist/<path>/index.html` exists.
- No sentence of 10+ words may repeat any sentence on another page (the guard compares every page). Read two or three finished pages in `pages/` first and use a different structure and wording.

## Page types
- **City** (`{city}-{st}` US, `{city}-{country}` Middle East): who in that area commissions report reviews and why (named refineries, chemical plants, LNG terminals, nuclear and power plants, pipelines, fabricators — verified); which report types and digital inspection data arrive from there; the codes and regulators that apply locally (state boiler and pressure vessel program, OSHA PSM, PHMSA, NRC region / Agreement State for radiography, EPA/state rules where relevant; in the Middle East the operator standards: Saudi Aramco SAES, ADNOC, QatarEnergy, KNPC, and national authorities); typical review situations (turnaround close-out, vendor acceptance, rejected reports, acquisitions); how a remote review runs from there; a plain statement that there is no Atlantis office in the city and the review is done remotely from the records sent. Not a template with the city name swapped: each page must be about its place.
- **Industry**: what reports that sector produces, the codes and damage mechanisms, who reads the report and what decision it supports, the checks that matter most there, the common failures, the digital data involved.
- **Method**: the technique, the governing articles and standards (ASME Section V article, ASTM practices — verified), what the reviewer opens (files, images, calibration, scan plans), how reports of that method fail, a table of checks.
- **Digital topic**: raw digital inspection data review / digital reporting review — file formats, data lineage, audit trails, electronic signatures, templates, software settings, archiving.

## Check before you finish
`node scripts/report-validation-section-2026-11.mjs --check <slug> [...]` must print ✓ for every page you wrote. Report back: pages, own-word counts, sources used, anything you could not verify and left out.
