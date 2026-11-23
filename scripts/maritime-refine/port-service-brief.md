<!-- Copied into the repo 2026-11-23 for the daily maritime runs (scripts/maritime-refine/RUNBOOK.md). Run commands from the repository root. -->
# Brief: European port × CVIP pages for atlantisndt.com (2026-11-23)

Repo for this work: **the repository checkout** . Do NOT run git, do NOT run the site build, do NOT edit any file except the combo JSON files you are assigned.

## What CVIP is (owner's words, 2026-11-23)
"CVIP, also known as CAS or CAP for owners requirement, not class." CVIP is Atlantis NDT's **Comprehensive Vessel Inspection Programme**: an owner-commissioned whole-ship condition assessment. Owners and technical managers often call it an "owner's CAS" or "owner's CAP" because it follows the same pattern as those schemes — close-up survey of the structure to a plan, thickness gauging at defined locations, coatings and machinery assessed, findings graded, one condition report for the whole ship — but it is done for the **owner's own requirement**: commissioned by the owner, manager, charterer or financier, scoped with them, and the record belongs to them. It is **not** the IMO Condition Assessment Scheme (verified by flag for certain older tankers) and **not** a class Condition Assessment Programme rating; it gives no CAS Statement of Compliance and no CAP rating, and where a charterer requires the official scheme the owner books it with class (CVIP readings then tell the owner the likely result first). CVIP runs as a baseline visit and repeat visits timed to the survey cycle and port calls, with one report format and one trend record, and can cover sister ships as a fleet programme.

Read `src/data/maritime-section/pages/comprehensive-vessel-inspection-programme.json` (the service page, including the section "CVIP, owner's CAS and owner's CAP") and the CAS and CAP pages (`pages/condition-assessment-scheme.json`, `pages/condition-assessment-programme.json`) before writing. Use the terms "owner's CAS" and "owner's CAP" naturally on every page (they are how owners search), always with the distinction above, worded differently on each page.

## The page
Each page lives at `/maritime/{port}/comprehensive-vessel-inspection-programme` and is rendered from `src/data/maritime-section/combos/{port}--comprehensive-vessel-inspection-programme.json` by `comboPage()` in `src/data/maritime-section/model.mjs`. The reader is a ship owner, technical manager, superintendent, charterer, lessor or lender with ships calling at, trading through, laid up at, or docking at THAT port. It must answer what the port page and the CVIP page cannot answer alone: how a whole-ship owner's condition assessment is run for the ships that use this port, in the places at this port where it can physically be done (anchorages, lay-by and repair berths, dry docks and floating docks, discharge windows), and how the programme's repeat visits fit this port's role in the ships' trade.

The template adds, around your copy: breadcrumbs, hero (your title/h1/intro/highlights), a "How the job runs at {port}" step list (STEPS_CVIP in model.mjs), a "Who does the work" paragraph (team mobilised from India, the founder as Responsible NDT Level III, SNT-TC-1A written practice, ISO 9001/14001), your codes, deliverables and vessels lists, the enquiry form and related links. Do not repeat any of that.

## Read before writing (for each page)
1. The port record `src/data/maritime-section/cities/{port}.json` — facts you may rely on (yards, berths, anchorages, traffic, PSC, ECA). Use its facts; do not copy its sentences.
2. The service page and CAS/CAP pages above.
3. `model.mjs`: `comboPage()`, `STEPS_CVIP`, `TEAM_PARAS`, `classApprovalText()`.
4. Every other combo file for the same port in `combos/` (special survey, hull structural integrity, pre-purchase, condition survey, etc.) and every other `*--comprehensive-vessel-inspection-programme.json` already written: share no sentence and no 10-word phrase with them. The condition-survey page for a port is a one-off survey; your CVIP page is the programme (baseline + repeat visits + trend record), so take a different angle.

## JSON fields (all required)
```json
{
  "port": "rotterdam",
  "service": "comprehensive-vessel-inspection-programme",
  "title": "<= 65 chars, unique; e.g. 'CVIP Owner's CAS/CAP Ship Condition Assessment Rotterdam'",
  "description": "120-160 chars (count them), unique",
  "h1": "full heading, different wording from the title",
  "intro": "80-110 words: CVIP as the owner's CAS/CAP-style condition assessment, this port, the ships, why it is done here, and (in your own words) that the team travels from India to the ship",
  "highlights": [ { "h": "<= 8 words", "p": "35-55 words" }, 3 items, specific to this port and CVIP ],
  "sections": [ 5-6 items: { "id": "kebab-id", "h": "query-shaped heading", "p": ["paragraph", "..."], "list": ["optional short items"] } ],
  "vessels": ["5-8 ship types at this port that suit a programme"],
  "codes": ["4-6 rules/standards that the assessment draws on (IACS URs Z7 / Z10.x, SOLAS, class rules, ISO method standards such as ISO 20816-1 for vibration where used) — only ones you are sure of"],
  "deliverables": ["4-6 items in the programme report"],
  "faqs": [ { "q": "...", "a": "50-90 words" }, 5-6 items as people search, specific to this port and CVIP; one must cover "Is this the same as CAS or CAP?" in your own words ]
}
```
Suggested sections (adapt; keep headings query-shaped, e.g. "Where an owner's condition assessment is done in Rotterdam"):
1. Where at this port the baseline and repeat visits can be done (named places from the port record) and what each allows (dry hull in dock, tanks at a repair berth, a holds-empty discharge window, anchorage visits for machinery and deck).
2. Which ships calling here benefit from a programme and why (trades, ages, charterer and vetting pressure, lenders, lay-up, upcoming 15- or 20-year special surveys).
3. The owner's CAS / owner's CAP at this port: how the assessment mirrors the official schemes for the owner's requirement, and when the owner still needs the class CAP or flag CAS instead.
4. Building the trend record across repeat calls at this port (fixed gauging points, coating ratings, vibration and thermography baselines, timing against cargo and docking).
5. Planning: what to send, what the agent or yard arranges, weather/tide/lock/ice/ECA constraints at this port, visas and travel from India.
6. Optional: a worked programme example for one ship type (no invented ship names or figures).

**Own copy must total at least 1,350 words** (intro + highlights + sections incl. lists + FAQs); the page must render 2,000+ words. Real substance, no padding.

## Facts about Atlantis you may state (and nothing more)
- Teams are mobilised from India to the vessel for each job; there is no office, agent, partner or staff at any port.
- Atlantis is NOT class-approved as a thickness measurement firm. It is in the process of obtaining IACS UR Z17 approval from DNV, Lloyd's Register and ABS. Say once, in your own words, that CVIP readings serve the owner's decisions and are not credited to a class survey; never claim approval or class credit.
- Machinery condition readings use vibration analysis and thermography by qualified analysts/thermographers; no lube oil analysis.
- Crack detection (MPI, DPI, UT) results are the owner's NDT records, not class approvals.
- Enquiries: you may tell readers to email info@atlantisndt.com (the only Atlantis email); the page also has an enquiry form.

## Hard rules (the validator fails on these)
- No prices or money words (price, pricing, fee, day rate, discount, cost-effective, cheap, low-cost, currency amounts).
- No local presence ("our local office/team/base", "office in", "our office", "our agents", "our partners", "subsidiary").
- Never mention: divers, diving, ROV, drones, rope access, NACE, AMPP, FROSIO, CSWIP, PCN, ISO 17020, ISO 17025, underwater inspection.
- No time promises ("within 24 hours", "24-hour turnaround", "mobilise within N hours").
- Banned: 24/7, guarantee, state-of-the-art, cutting-edge, world-class, look no further, "team of Level IIIs", "first", "only", "leading", "best".
- No class-approval claim ("class-approved", "IACS-approved", "approved by DNV/ABS/LR…", "approved service supplier").
- No invented facts: no made-up yard names, dimensions, depths, figures or dates. Use the port record's facts; if unsure, describe generically.
- No sentence of 10+ words that appears in any other port, country or combo record. British English.

## Research
At most 3 WebSearch calls for your whole batch; WebFetch only on URLs those searches return.

## Check your work
`node scripts/maritime-validate.mjs {port}--comprehensive-vessel-inspection-programme [...]` until each shows ✓.

## Report back (short)
Files written, word counts, validator result, facts you are not fully sure of.
