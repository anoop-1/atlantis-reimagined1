# Brief: Risk-based inspection (RBI) service pages for atlantisndt.com

Repo: the atlantis-reimagined1 checkout. Do NOT commit (the run commits). Write ONLY your assigned files:
`src/data/rbi-section/pages/{slug}.json` (slugs and labels are in src/data/rbi-section/list.json).
Check each file until it passes: `node scripts/rbi-section-2026-11.mjs --check {slug}`.

## The business decision (owner, 2026-11-23)
Atlantis NDT now offers risk-based inspection (RBI) as a service, delivered REMOTELY from the client's drawings, data
and inspection history. Pages live at /inspection/risk-based-inspection/{slug}; the parent page is
/inspection/risk-based-inspection. Scope: topic pages, country pages and tank/refining hub pages (USA, Canada, the
Middle East, Singapore, India, China, Malaysia). Russia and Venezuela are NOT covered (US sanctions) — do not mention
them at all.

## Search evidence (Google Search Console, 28 days to 2026-11-14)
81 RBI queries, 1,112 impressions, 5 clicks: "api 581" 386 imp p24, "rbi software" 69 p75, "api 581 software" 57 p35,
"rbi implementation" 46 p23, "risk based inspection" 43 p72, "api 580" 32 p39, "risk based inspection consulting" 26
p45, "api 581 training" 22, "api 580 and 581" 20, "api 581 calculations" 18, plus long questions about tank inspection
intervals, midstream RBI programs, defensible RBI documentation and RBI-specific certification. No query names a city:
city and country pages win by being the most useful page for someone at that facility, and they hand head terms to the
topic pages and the parent service page.

## Record format (the site's service-section page shape)
```json
{
  "title": "≤ 62 chars, e.g. 'Storage Tank RBI: API 653 and API 580 Inspection Planning'",
  "description": "120–160 chars, says what the reader gets",
  "h1": "different from the title",
  "eyebrow": "Risk-based inspection",
  "intro": "60–110 words: who this is for and what the page answers",
  "highlights": [ { "h": "short", "p": "30–60 words" }, {…}, {…} ],
  "sections": [
    { "id": "kebab-id", "h": "Heading", "p": ["paragraph", "paragraph"] },
    { "id": "…", "h": "…", "p": ["…"], "list": ["bullet", "…"] },
    { "id": "…", "h": "…", "p": ["…"], "table": { "head": ["…","…","…"], "rows": [["…","…","…"]] } }
  ],
  "codes": ["API RP 580 …", "…"],
  "deliverables": ["…"],
  "industries": ["…"],
  "faqs": [ { "q": "question?", "a": "50–110 words" } ],
  "related": [ ["/path", "anchor text"], … ]
}
```
- 7–10 sections, 6–10 FAQs, 1–2 tables. The page's OWN copy (intro, highlights, sections, lists, table rows, FAQs)
  must be 2,000+ words (owner, 2026-11-23: "2000+ words of high quality content"; the template's codes, deliverables
  and call-to-action band do not count). Aim for 2,200–2,500 own words. No padding: every paragraph answers something
  a reader at that facility would ask.
- Plain text only (no HTML, no Markdown). Internal links go in `related` (6–12 entries) and, if you want inline links,
  in a section's "links": [["/path","label"], …] array (renders as link pills). Links must exist in dist/ or be an RBI
  page from list.json. Useful targets: /inspection/risk-based-inspection, the topic pages in list.json,
  /inspection/asset-integrity-services, /inspection/turnarounds-shutdowns, /inspection-services,
  /consulting/api-653-tank-inspector-services, /consulting/api-510-pressure-vessel-inspector-services,
  /consulting/api-570-piping-inspector-services, /tools/api-inspection-interval-calculator, /standards/api-580,
  /standards/api-581, /standards/api-571, /standards/api-653, /standards/api-584, /api-inspection, /corrosion-mapping,
  /ultrasonic-pipe-thickness-testing, /ultrasonic-testing, /inspection/ndt-inspection-services/advanced-ndt,
  /consulting/ndt-consulting-level-iii, /erp/apps/asset-management, /contact. Check with `ls dist/<path>/index.html`.

## What Atlantis offers (state it accurately; vary the wording page to page)
- RBI studies delivered remotely: data collection through a shared data room (P&IDs, PFDs, heat and material balances,
  equipment datasheets and manufacturer's data reports, inspection and thickness history, process chemistry and IOWs),
  video workshops with the client's operations, process, corrosion and inspection people, corrosion loops and damage
  mechanism assignment to API 571, probability and consequence of failure (qualitative, semi-quantitative or
  quantitative to API RP 581, or the operator's own RBI standard), risk ranking, inspection plans (method, coverage,
  effectiveness, due date per item), CML/TML optimisation, data-gap log, reassessment triggers and a report.
- The client's inspector of record (API 510/570/653 inspector, Authorized Inspector or the operator's inspection
  authority) approves intervals. Atlantis does NOT act as inspector of record.
- Fitness-for-service (API 579-1/ASME FFS-1) is NOT offered: when damage is found, the assessment stays with the
  owner's engineer. Say so where it is relevant (once per page at most).
- Site walkdowns and data verification are done by the client's inspectors; in the United States Atlantis can also
  send UT, MT, PT and VT technicians to close data gaps (thickness surveys, corrosion mapping). Atlantis does not
  perform radiography in the United States. Outside the US do not promise field teams, and do not state that Atlantis does not or cannot send people either (other site pages offer inspection in Canada and ship inspection in Gulf ports): say that the study needs no travel and that its field checks are done by the owner's inspectors.
- Atlantis delivers the inspection that comes out of the plan where it has field capability (US conventional NDT),
  and its ERP can hold inspection records — but never say the Atlantis ERP, digital twin or any Atlantis software
  calculates RBI or holds an RBI model.

## Hard rules (the build guard enforces these; the checker shows violations)
1. No prices, fees, costs, rates, "affordable", "cost-effective", discounts or any money figure.
2. No named credentials ("API 580 certified", "certified RBI engineers") and no named software as an Atlantis tool.
   You may mention that RBI programmes often run in commercial RBI software and that Atlantis works from the owner's
   existing register or software exports — without naming any product as Atlantis's.
3. No physical presence: no office, lab, branch, base, local team, agents or partners in any city or country.
   The site lists offices in Houston (USA) and Hyderabad (India) only; claim no other location (none in the GCC,
   Canada, Singapore, China or Malaysia).
4. No "first/only/best/leading/top/world-class/industry-leading", no guarantees, no "24/7", no time promises.
5. No clients, case studies, outcomes or statistics about Atlantis work. No invented numbers.
6. Founder: do not mention the founder at all on these pages.
7. Never name Russia or Venezuela. Never write "NAS 410".
8. Named facilities and operators must be real and current; verify anything you add beyond what is already on the
   site, and record the source URL in a top-level "sources" array ({"fact": "…", "url": "…"}), which is not rendered.
   Do not say a named operator uses a particular RBI method or software unless a public source says so.
9. Code facts: verify clause references (e.g. which paragraph of API 653 allows RBI-based internal intervals, what
   API 510 says about RBI intervals, the current editions of API RP 580/581 and ASME PCC-3). If you cannot verify a
   clause number, describe the rule without the number.
10. Fetch only URLs that a WebSearch returned (anything else needs a user approval nobody is there to give).
    Keep to about 12 web searches for your whole set; the search budget is shared with other writers.

## Page types
- **Topic page** (e.g. storage-tank-rbi): the definitive practical page for that RBI subject: what the codes require,
  how the study is done for that equipment class, inputs, damage mechanisms, how inspection effectiveness and plans
  work, common mistakes, what the deliverable looks like, how the remote delivery works, FAQs.
- **Country page**: how RBI works in that country — the regulators and legal framework for pressure equipment and
  storage tanks, the operator standards that set RBI expectations (e.g. a national oil company's RBI procedure, if
  verified), where the refining, petrochemical and tank-storage capacity is (link the hub pages for that country),
  what owners there typically need from an outside RBI study, how a remote study runs across time zones, FAQs.
- **Hub page** (a city or terminal cluster): the facilities there (refineries, tank terminals, petrochemical plants,
  gas plants — real and current), the asset mix and climate/damage mechanisms that drive RBI there (e.g. coastal
  atmospheric corrosion, CUI in humid heat, sour service, caustic, high-temperature sulfidation, tank floor corrosion),
  the local and national rules that apply, how an RBI study for a facility there is organised remotely, FAQs.
  Name the country page in related links (the model adds it automatically too).

## Distinctness
Every page must be written for its subject. No sentence of 10+ words may repeat another RBI page (the checker fails
on it). Read the files other writers have finished (`ls src/data/rbi-section/pages/`) and vary structure and phrasing.

## Report when done
Files, rendered word counts, sources, and every fact you left out or generalised because you could not verify it.

## Notes for every page
- Do NOT put hub pages in a country page's "related" links: the template lists a country's live hub pages
  automatically ("In this section"). A hub may link another hub only if both files exist.
- Naming a refinery's or terminal's owner as a fact is fine. Never mention Venezuela or Russia.
- Read every existing file in src/data/rbi-section/pages/ and the parent page src/data/rbi-section/root.mjs before
  writing, and repeat none of their sentences. Vary structure (which sections, which table, which FAQs).
- API 653: the current edition is the 5th (November 2014) with Addenda 1–4; RBI may set the internal inspection
  interval provided the assessment is validated and reviewed at least every 10 years; later RBI intervals have no fixed
  year limit in the current edition. 49 CFR 195.432 does not allow RBI intervals for US breakout tanks today (a June
  2026 PHMSA proposal would; check whether a final rule has been published before saying anything else).
- Sanctions (owner: Russia and Venezuela are left out because of US sanctions): also do not name businesses that are
  substantially owned by sanctioned Russian or Venezuelan companies, e.g. the Vadinar refinery of Nayara Energy
  (Rosneft-linked) in India. Name the Jamnagar complex only.
- Ownership changes to keep straight: Pulau Bukom in Singapore has belonged to Aster (Chandra Asri and Glencore) since
  April 2025, not Shell; KIPIC in Kuwait was dissolved into KNPC in 2026.
- Incidents: do not describe fires, explosions, attacks, releases or other incidents at named facilities, or a named
  operator's failures (owner direction on the 2026 Gulf attacks, applied to all incidents). Public investigation
  lessons (e.g. a CSB report) may be cited only as general industry learning without dwelling on the operator.
