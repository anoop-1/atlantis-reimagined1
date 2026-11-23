<!-- Copied into the repo 2026-11-23 for the daily maritime runs (scripts/maritime-refine/RUNBOOK.md). Run commands from the repository root. -->
# Brief: maritime port × owner-service pages (pre-purchase inspection, vessel condition survey) for atlantisndt.com (2026-11-23)

Repo: the repository checkout. Do NOT run git, do NOT run the site build, do NOT edit any file except the combo JSON files you are assigned.

## The page
Each assigned page lives at `/maritime/{port}/{inspection}` (for example /maritime/rotterdam/hull-structural-integrity) and is rendered from `src/data/maritime-section/combos/{port}--{inspection}.json` by `comboPage()` in `src/data/maritime-section/model.mjs`. The reader is a ship buyer, broker, owner, technical manager, charterer or financier who needs THAT service for a ship at THAT port (the owner wants these pages to win the attention of maritime managers and ship owners). For pre-purchase pages, think sale-and-purchase reality at this port: where ships are viewed (anchorage, lay-by, discharge berth, yard, lay-up), how short the inspection window is, the ship types and ages that change hands here, and what the buyer must learn before the deal closes. For condition-survey pages, think owners and managers based or trading here: fleet checks, charter delivery/redelivery, lenders, docking planning. It is the most specific page in the maritime section: it must answer what the port page and the inspection page cannot answer on their own, namely how this inspection works for the ships that use this port, in the places at this port where it can physically be done.

The template adds, around your copy: breadcrumbs, the hero (your title/h1/intro/highlights), a "How the job runs at {port}" step list written for this service (see STEPS_PPI and STEPS_VCS in model.mjs), a "Who does the work" paragraph (team mobilised from India, the founder as Responsible NDT Level III, SNT-TC-1A written practice, ISO 9001/14001) plus your codes, deliverables and vessels lists, the enquiry form and related links. Do not repeat any of that.

## Read before writing (for each page)
1. The port record `src/data/maritime-section/cities/{port}.json` — facts about the port you may rely on (yards, berths, anchorages, traffic, PSC, ECA). Do not copy its sentences; use its facts.
2. The inspection record `src/data/maritime-section/pages/{inspection}.json` — the method, scope and codes. Do not copy its sentences either.
3. `src/data/maritime-section/model.mjs`: `comboPage()`, `STEPS_PPI`, `STEPS_VCS`, `TEAM_PARAS`, `classApprovalText()`.
4. Any combo file already written for the same port or the same inspection (they appear in `combos/` as other writers finish): your page must not share sentences with them.

## JSON fields (all required)
```json
{
  "port": "rotterdam",
  "service": "hull-structural-integrity",
  "title": "<= 65 chars, unique; port name + the inspection's search term",
  "description": "120-160 chars (count them), unique",
  "h1": "full heading, different wording from the title",
  "intro": "80-110 words: the inspection, this port, the ships, why it is done here, and (in your own words) that the team travels from India to the ship",
  "highlights": [ { "h": "<= 8 words", "p": "35-55 words" }, 3 items, specific to this port and inspection ],
  "sections": [ 4-6 items: { "id": "kebab-id", "h": "query-shaped heading", "p": ["paragraph", "..."], "list": ["optional short items"] } ],
  "vessels": ["5-8 ship types at this port that need this inspection"],
  "codes": ["4-6 rules/standards that govern this inspection on these ships (IACS URs, SOLAS, class rules, ISO/ASTM method standards)"],
  "deliverables": ["4-6 items in the report for this inspection"],
  "faqs": [ { "q": "...", "a": "50-90 words" }, 5-6 items phrased as people search, specific to this port and inspection ]
}
```
Suggested sections (adapt; keep headings query-shaped, e.g. "Where hull gauging is done in Rotterdam"):
1. Where at this port the inspection can be done (named yards, docks, repair quays, lay-by berths, anchorages from the port record) and what each location allows (dry hull, afloat, cargo stop, lay-up).
2. Which ships at this port need it and why (their trades, ages, typical findings, survey timing).
3. How the inspection is scoped for those ships (areas, method choices, access, gas-free/enclosed space, coatings, temperature, weather/tide/ice/lock constraints at this port).
4. What we typically find and report on these ships here (damage mechanisms tied to the trades: cargo hold wastage on bulkers, ballast tank corrosion, cracking at hatch corners, scrubber wash-water piping, etc.).
5. Planning the job at this port (timing against cargo operations or docking slots, what the yard/agent arranges, what to send us) — not the generic step list.
6. Optional: a worked scope example for one ship type (no invented ship names or figures).

**Own copy must total at least 1,300 words** (intro + highlights + sections incl. lists + FAQs); the page must render 2,000+ words. Real substance, no padding.

## Facts about Atlantis you may state (and nothing more)
- Teams are mobilised from India to the vessel for each job; there is no office, agent, partner or staff at any port.
- Atlantis is NOT class-approved as a thickness measurement firm. It is in the process of obtaining IACS UR Z17 approval from DNV, Lloyd's Register and ABS. Say once, in your own words, that readings taken in a pre-purchase inspection or condition survey serve the buyer's or owner's decision and are not credited to a class survey; never claim approval or class credit.
- Pre-purchase: not a valuation, not a class survey; opening up needs the seller's consent; class records come through the class society with the seller's consent. No money words even about the deal (say "the negotiation", never prices).
- Condition survey: distinct from the IMO CAS scheme and the class CAP rating (link those pages by name if useful); does not replace a P&I or charterer-appointed surveyor.
- Machinery condition readings use vibration analysis and thermography by qualified analysts/thermographers; no lube oil analysis.
- Enquiries: you may tell readers to email info@atlantisndt.com (the only Atlantis email); the page also has an enquiry form.
- Crack detection (MPI, DPI, UT, PAUT) reports are owner's/yard's NDT records, not class approvals.

## Hard rules (the validator fails on these)
- No prices or money words (price, pricing, fee, day rate, discount, cost-effective, cheap, low-cost, currency amounts).
- No local presence ("our local office/team/base", "office in", "our office", "our agents", "our partners", "subsidiary").
- Never mention: divers, diving, ROV, drones, rope access, NACE, AMPP, FROSIO, CSWIP, PCN, ISO 17020, ISO 17025, underwater inspection.
- No time promises ("within 24 hours", "24-hour turnaround", "mobilise within N hours").
- Banned: 24/7, guarantee, state-of-the-art, cutting-edge, world-class, look no further, "team of Level IIIs".
- No class-approval claim ("class-approved", "IACS-approved", "approved by DNV/ABS/LR…", "approved service supplier").
- No invented facts: no made-up yard names, dimensions, depths, figures or dates. Use the port record's facts; if unsure, describe generically.
- No sentence of 10+ words that appears in any other port, country or combo record. British English.

## Research
At most 4 WebSearch calls for your whole batch; WebFetch only on URLs those searches return.

## Check your work
`node scripts/maritime-validate.mjs {port}--{inspection} [...]` until each shows ✓.

## Report back (short)
Files written, validator result, facts you are not fully sure of.
