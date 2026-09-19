# Competitive Keyword Analysis — Atlantis NDT ERP
**Date:** 2026-09-19 | **GSC window:** 2026-06-19 → 2026-09-17 (90d) | **Site:** atlantisndt.com

**Method:** Fresh GSC pull via ad-hoc script (same auth pattern as `scripts/gsc-erp-demand.mjs`) against `/erp*` and `/ndt-erp*` paths (1,128 pages, 13,126 impr, 144 clicks, 1.10% CTR) and query-level data filtered to real ERP/NDT-software terms with word-boundary matching (the existing script's `q.includes('erp')` filter over-matches — it also catches "**erp**rise" inside "ent**erp**rise"; I excluded those). Page+country combined-dimension data is unreliable here (556 rows captured only 1,767 of the 13,126 page impressions — GSC suppresses long-tail rows on high-cardinality dimension pairs, consistent with the known `country+page` GSC gotcha), so geo-tiering below uses **page-URL geography** (city/country in the slug) for page-level splits and **query+country** (not lossy) for query-level splits.

---

## 1. Current State, by Geo Tier

### Site-wide ERP page family (URL-geography tiering, 90d, 1,128 pages)

| Tier | Impr | % | Clicks | Pages | CTR |
|---|---|---|---|---|---|
| Generic/no geo (hub, modules, industries pillars) | 4,823 | 36.7% | 42 | 365 | 0.87% |
| **Tier 3 — India/Middle East** | 4,260 | 32.5% | 45 | 319 | 1.06% |
| Other countries (Nigeria, Brazil, S. Africa, LatAm — not in the stated tiers) | 1,464 | 11.2% | 31 | 107 | 2.12% |
| **De-prioritized — general Asia** (Singapore, Malaysia, Indonesia, Thailand, Vietnam, Korea, China) | 1,221 | 9.3% | 12 | 139 | 0.98% |
| **Tier 2 — Canada/Europe/Australia-NZ** | 1,130 | 8.6% | 10 | 142 | 0.88% |
| **Tier 1 — USA** | **228** | **1.7%** | **4** | **56** | 1.75% |

This is inverted relative to the stated priority order. USA — the #1 priority market — has the fewest dedicated pages (56 of 1,128, 5%) and the least impression volume (1.7%), while Tier 3 India/Middle East alone accounts for 319 pages (28% of the whole family) and a third of all impressions. The explicitly de-prioritized Asia tier still carries 139 live pages generating real, if thin, volume. "Other countries" outside any stated tier (Nigeria/Lagos/Port Harcourt, Brazil, South Africa, Ecuador, Guyana, Suriname, Tunisia) is its own sizeable, unaddressed bucket — 11% of impressions with the *best* CTR of any tier (2.12%, though still off a tiny click base of 31).

### Real on-target query demand, by country (query+country, 90d, word-boundary filtered to true ERP/NDT-software terms — 99 distinct queries, 1,679 impr, 8 clicks total)

| Country | Impr | % of real-query volume | Clicks |
|---|---|---|---|
| **USA** | 787 | 47% | 0 |
| MYS (de-prioritized) | 306 | 18% | 0 |
| SGP (de-prioritized) | 252 | 15% | 0 |
| DEU (Tier 2) | 89 | 5% | 1 |
| AUS (Tier 2) | 37 | 2% | 0 |
| GBR (Tier 2) | 27 | 2% | 0 |
| IND (Tier 3) | 24 | 1% | 3 |
| ARE (Tier 3) | 18 | 1% | 1 |
| CAN (Tier 2) | 9 | 0.5% | 0 |

This is the important reversal: **at the query level (genuine buyer intent, not just page impressions), USA is not dead weight — it's the plurality source (47%) of real ERP/NDT-software demand**, exactly matching the priority order. MYS+SGP (33% combined) are confirmed dead weight, but concentrated in just ~12 distinct generic construction/oil-and-gas ERP queries, not NDT-specific ones (detail below). So the diagnosis holds for Singapore/Malaysia, but the fix isn't "shrink USA" — USA already has real demand and is starved of dedicated pages (56, all thin, mostly Houston-adjacent Texas Gulf Coast + a handful of orphans like Denver, Tulsa, Cleveland, Chicago, Detroit, LA, Philadelphia, Pittsburgh, Seattle at 1-2 impressions each).

### Named zero-CTR page-1 examples confirming the mismatch (from `reports/erp-zero-ctr-page1-2026-09-19.txt`, still current in this pull)
- `/erp/crm-erp-for-saudi-arabia` — 183 impr, pos 8.5, 0 clicks (183/8.8 in this 90d pull — consistent)
- `/erp-modules/corrosion-tracking-sharjah` — 121 impr, pos 8.8, 0 clicks
- `/ndt-erp-vs-generic-erp` — 127 impr, pos 8.3, 0 clicks
- Generic-buyer-mismatch queries (confirmed fresh): **"construction erp software singapore"** 163 impr, pos 9.3 (page 1!), 0 clicks; **"erp system oil and gas malaysia"** 87 impr, pos 40.8, 0 clicks; **"erp solution for oil and gas malaysia"** 81 impr, pos 38.3; **"erp oil and gas malaysia"** 55 impr, pos 15.4; **"construction erp singapore"** 46 impr, pos 18.6 — all zero clicks, all generic SAP/Oracle/NetSuite-class buyer searches, none NDT-specific.

### On-target query performance (global aggregate)
- **"ndt inspection software"** — 300 impr, 3 clicks (1.0% CTR), pos 20.5 (USA: 274 impr, pos 21.7, 0 clicks)
- **"ndt software"** — 418 impr, 0 clicks, pos 44.8 (USA: 285 impr, pos 44.4)
- **"ndt reporting software"** — ~314 impr across countries, pos 13.6 in USA (174 impr, 0 clicks), pos 7.8 in Denmark (69 impr), pos 21.6 UK (1 click)
- **"best ndt software"** — 43 impr, pos 10.9, 1 click
- **"asset integrity management software"** — 14-58 impr per country, positions 36-59 everywhere — page 4-6, not competitive at all (see §2)

### Cannibalization: five Atlantis URLs compete for the same query cluster
Page×query data shows **/best-ndt-reporting-software-2026**, **/blog/ndt-inspection-software-2026-best-platforms-compared**, **/blog/best-ndt-inspection-software-2026-buyers-guide**, **/erp/ndt-inspection-software-comparison**, and **/ndt-inspection-software** all independently rank for "ndt software" / "ndt inspection software" / "ndt reporting software":

| Page | Query | Impr | Pos |
|---|---|---|---|
| `/best-ndt-reporting-software-2026` | ndt reporting software | 287 | **9.7** (page 1) |
| `/blog/ndt-inspection-software-2026-best-platforms-compared` | ndt inspection software | 244 | 16.4 |
| `/best-ndt-reporting-software-2026` | ndt software | 211 | 25.4 |
| `/erp/ndt-inspection-software-comparison` | ndt software | 23 | 74.7 |
| `/ndt-inspection-software` | ndt inspection software | 8 | 24.4 |

`/best-ndt-reporting-software-2026` is already the strongest asset in the portfolio for this cluster — one query away from page 1 top-half — but its authority is being split five ways instead of consolidated.

---

## 2. Competitive Gaps

**"ndt reporting software" / "ndt software"** — direct competitors on page 1: **Floodlight** (floodlightsoft.com) and **AgileNDT** (agilendt.com), both purpose-built NDT reporting/workflow platforms, the same category Atlantis is chasing. Both show what Atlantis's pages don't:
- Floodlight: 100+ active customers, 50,000+ inspections managed, named real clients (Vale, National Inspection Services, Dynamic NDT), an attributed 5-star testimonial, published pricing ($250/$650/$1,500 per month tiers), a 14-day free trial. Title: *"NDT Software - Save 24 Hours/Month Per Inspector."*
- AgileNDT: 14 years operating (live since 2012), named real clients (SGS, Applus RTD, IKM Testing, AquaTerra Group), seven attributed testimonials, two detailed dated case studies, ISO 27001/17020/9001 alignment. Title: *"NDT Reporting Software for Inspection Companies."*

Both titles are short, literal, and match the query exactly. Atlantis's competing page title is *"Best NDT Reporting Software 2026 — The Operator-Grade Top-10 Buyer Guide by an ASNT Level III"* — longer, "listicle"-shaped, and its trust section names **Aramco SAEP-1112, ADNOC GMTS-100, Shell DEP UK, ExxonMobil GP supplier networks, Marathon Petroleum, Boeing, Petrobras, Reliance** as if they were client relationships, with zero attributed testimonials, dates, or case-study specifics behind any of them. The `/erp` hub and `/ndt-erp-solution` pages repeat the same pattern (Aramco, ADNOC, Shell, ExxonMobil, BASF, Dow, Boeing, Airbus). This is the opposite of what wins the category: Floodlight and AgileNDT win on *specific, checkable* proof from real mid-market NDT firms; Atlantis is naming the biggest oil majors on earth with no supporting detail, which reads as unverifiable and is a real credibility/legal exposure given the site already did one fabricated-claims cleanup pass on 2026-09-10.

**"calibration lab management software"** — the field is owned by dedicated calibration-management vendors: **Metquay** (3,000+ lab professionals, ISO 17025 + FDA 21 CFR Part 11 + GAMP-5 badges, named clients OptoCal/SDL Atlas/Cornerstone Metrology, Capterra/Software Advice/GetApp review badges, free trial), **GageList**, and **Fluke's CalStudio**. Notably, Metquay's own name showed up *inside Atlantis's own GSC query data* — a searcher literally asked an AI engine "what calibration tracking... does Metquay offer" while crawling atlantisndt.com content, meaning Atlantis is already being evaluated against Metquay by real prospects and isn't winning the comparison. Atlantis has no standalone, well-titled "calibration lab management software" page competing on this exact phrase.

**"inspection company management software"** — dominated by broader, better-funded inspection/QA platforms (SafetyCulture/Mitti, Field Eagle, Benchmark Gensuite, ComplianceQuest, QT9 QMS) that serve manufacturing/construction/EHS broadly, not NDT specifically. This is a crowded generic category Atlantis can't win head-on; the defensible angle is the NDT-specific modifier ("NDT inspection company management software"), which none of these players target.

**"asset integrity management software"** — owned by enterprise-scale platforms: **GE Digital/Meridium**, **AVEVA APM**, **DNV Synergi**, **Cenosco**, **Antea**, **ONE Integrity**, **IBM Maximo** — the same tier of vendor that genuinely serves Aramco/Shell/ExxonMobil at scale (confirming those logos, wherever real, belong to *these* platforms, not to a niche NDT ERP). Atlantis positions 36-59 across every country pulled — page 4-6, structurally uncompetitive. This is the wrong buyer category for the product; chasing it is wasted effort.

**Odoo-for-NDT niche** — no direct competitor found. General Odoo implementation partners (Confianz, Glorium, Ksolves, Itransition) exist in volume but none specialize in NDT/inspection. This is genuine, uncontested whitespace — worth leaning into explicitly rather than diluting into generic "ERP" framing (see hub-page title issue below).

---

## 3. Prioritized Recommendations

All tied to the USA-first geo priority; nothing below recommends new investment in Singapore/Malaysia/general-Asia.

**1. Fix `/ndt-erp-usa` — the single most strategically misplaced page in the family.** Title is *"Business Management Software in USA — Affordable, Accessible, Fully Customizable"* while the H1 is *"Affordable NDT ERP in USA — Fully Customizable, Every Business App You Need Included"* — a title/H1 mismatch (the known two-layer prerender/H1 trap) that also fails to target any of the actual queries with volume ("ndt software," "ndt inspection software," "ndt reporting software"). Result: only 6 impressions, position 27.3, despite this being the flagship page for the #1-priority market. Retitle to lead with "NDT Software" / "NDT ERP" phrasing matching the 274-impression "ndt inspection software" and 285-impression "ndt software" USA query volume sitting at position ~21-44 site-wide; align H1 to match exactly.

**2. Consolidate the 5-way cannibalization on "ndt inspection software"/"ndt reporting software."** `/best-ndt-reporting-software-2026` is already at position 9.7 for "ndt reporting software" (287 impr) — one solid push from page-1 top-half. Make it the canonical asset: strengthen it, internally link the other four pages (`/blog/ndt-inspection-software-2026-best-platforms-compared`, `/blog/best-ndt-inspection-software-2026-buyers-guide`, `/erp/ndt-inspection-software-comparison`, `/ndt-inspection-software`) into it rather than letting them compete for the same query, and canonicalize or merge the weakest (`/erp/ndt-inspection-software-comparison` at position 74.7 for "ndt software" is contributing nothing).

**3. Replace the Aramco/ADNOC/Shell/ExxonMobil/Boeing/Airbus-style client claims with real, checkable trust signals — or remove them.** This pattern repeats across `/erp`, `/ndt-erp-solution`, and `/best-ndt-reporting-software-2026`. Every direct competitor that outranks Atlantis on these terms (Floodlight, AgileNDT, Metquay) wins on small, specific, attributed, dated proof — not on the biggest logos on earth with no detail. Given the site already ran one fabricated-claims cleanup on 2026-09-10, this looks like the same pattern resurfacing on the ERP pages specifically and should be checked against that cleanup's methodology.

**4. Retarget the highest-volume zero-CTR page-1 pages with USA/Tier-2 relevance first.** `/erp/crm-erp-for-saudi-arabia` (183 impr, pos 8.5) and `/ndt-erp-vs-generic-erp` (127 impr, pos 8.3) are page-1 and getting zero clicks — title/meta rewrites here are cheap, high-leverage fixes (page-1 traffic already exists; only the click decision is failing). Prioritize the ones with the clearest USA/Tier-2 buyer intent over further Gulf-state city variants, since Tier 3 is already 319 pages deep.

**5. Stop producing new Singapore/Malaysia ERP city content; redirect that production budget to underbuilt USA hubs.** The MYS/SGP "erp oil and gas" and "construction erp" query cluster (8 queries, ~540 impressions, literally 0 clicks in 90 days) is a confirmed buyer mismatch — generic ERP shoppers, not NDT buyers. Meanwhile USA has only 56 city/topic pages total, several major NDT/energy hubs are missing dedicated pages (e.g., Baton Rouge, Corpus Christi, Odessa/Midland, Tampa, Baltimore each show only 1-3 stray impressions from thin or absent coverage), and USA is the largest source of real on-target demand (787 of 1,679 real-query impressions). Build out proper `/erp-industries/` and `/erp-modules/` variants for the 5-8 highest-value US Gulf Coast/energy-corridor cities with the same depth currently given to Doha/Muscat/Kuwait pages, rather than adding more Southeast Asia city permutations.

**6. Drop "asset integrity management software" as a target keyword.** Position 36-59 everywhere against GE Digital/Meridium, AVEVA, DNV, Cenosco — enterprise incumbents serving a different buyer tier entirely. Not winnable, not the right ICP; redirect any content effort earmarked for this term toward the NDT-specific modifier instead ("NDT inspection company management software," which is uncontested).

**7. Build a standalone "calibration lab management software" page competing directly on that phrase**, citing ISO 17025 specifically (currently absent as a dedicated asset) — this is a real, named-competitor gap (Metquay, GageList) where Atlantis is already being evaluated by real searchers and currently has nothing purpose-built to show them.
