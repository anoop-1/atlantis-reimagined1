# Training/Certification Competitive & Keyword Analysis — 2026-09-19

Scope: `/training`, `/ndt-training-*`, `/asnt-certification`, and the salary/comparison reference cluster. GSC data pulled live via `gsc-service-account.json`, 90-day window **2026-06-18 to 2026-09-16**. All numbers below are fresh from this pull, not carried over from earlier reports.

## 1. Current state

### 1.1 Informational cluster is still where the volume lives — and still barely converts

The 8 highest-traffic reference/informational pages in the training-adjacent space, 90d:

| Page | Impr | CTR | Pos |
|---|---:|---:|---:|
| `/blog/ndt-salary-guide-2026-global` | 58,574 | 0.90% | 5.7 |
| `/asnt-certification` | 10,072 | 0.83% | 9.8 |
| `/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison` | 5,601 | 1.89% | 6.4 |
| `/blog/api-570-inspector-salary-2026-by-region-experience` | 5,129 | 0.90% | 6.0 |
| `/ndt-technician-salary` | 4,870 | 0.88% | 5.8 |
| `/blog/asnt-level-3-fees-2026-complete-pricing-table` | 4,479 | 2.30% | 6.5 |
| `/compare/asnt-vs-pcn` | 2,693 | 0.85% | 5.7 |
| `/blog/paut-technician-salary-2026-region-cert-industry` | 671 | 0.89% | 5.7 |

**~92,000 impressions, average position 5.7-9.8 (top of page 1), average CTR under 1.3%.** These pages are not a ranking problem — they're ranking excellently. They're an intent-mismatch problem: someone Googling "NDT salary" or "ASNT vs PCN" is not in buying mode. Confirmed by checking internal links: `/asnt-certification`'s only training links are `/training` (generic hub) and two hardcoded city examples (`/ndt-training-usa`, `/ndt-training-dubai`); the salary guide's only training CTA is one generic "Explore Training Programs" block at the very bottom of a 659-line page.

### 1.2 Enrollment cluster: right intent, wrong position — with a cannibalization problem layered on top

US page-level data for the `/ndt-training-*` / `/training/*` family (country=USA, 90d):

| Page | Impr | Pos | CTR |
|---|---:|---:|---:|
| `/ndt-training-denver` | 574 | 52.8 | 0.70% |
| `/ndt-training-atlanta` | 533 | 56.7 | 1.31% |
| `/ndt-training-honolulu` | 256 | 78.5 | 0.00% |
| `/ndt-training-houston` | 217 | 49.2 | 0.00% |
| `/ndt-training-new-york` | 211 | 61.0 | 1.90% |
| `/training-usa` | 202 | 77.1 | 0.00% |
| `/ndt-training-dallas` | 194 | 39.7 | 1.55% |
| `/ndt-training-new-orleans` | 117 | 37.5 | 3.42% |

Meanwhile, a second tier of **smaller** US cities is already winning, at 3-13% of the volume but 10-30x the CTR: `/ndt-training-tampa` (21 impr, pos 13.2, **19.05% CTR**), `/ndt-training-fort-worth` (9 impr, pos 3.2, 22.22%), `/ndt-training-midland` (10 impr, pos 1.0, 10%), plus site-wide (all countries) standouts like Indianapolis (30% CTR, pos 3.6), Nashville (27.78%, pos 3.1), Seattle (19.51%, pos 4.5), Oklahoma City (17.78%, pos 8.2). **The content and offer convert fine once a page reaches page 1 — the problem is exclusively that the highest-demand metros can't get there.**

**Root cause found in the page-level data: internal keyword cannibalization.** Several cities run two or three competing URLs targeting the same city:

- **San Diego**: `/ndt-training-san-diego` is sitting at **position 2.0** — but with only 1 US impression, because `/training/asnt-level-iii-training-san-diego` is absorbing 175 impressions at position 71.3 for the same demand.
- **Cincinnati**: canonical page pos 11.2 (14 impr) vs. `/training/asnt-level-iii-training-cincinnati` pos 55.5 (177 impr).
- **Houston**: three live URLs — `/ndt-training-houston` (217 impr, pos 49.2), `/oil-gas-ndt-training-houston` (16 impr, pos 64.1), `/training/certification-requirements-houston` (9 impr, pos 71.4).
- **Tampa**: three live URLs — `/ndt-training-tampa` (21 impr, pos 13.2, the good one), `/training/asnt-level-iii-training-tampa` (16 impr, pos 19.4), `/training/cwi-training-tampa` (173 impr, pos 28.7 — note CWI is an AWS credential, not ASNT, and arguably off-brand under today's ASNT-only repositioning).

This is a fixable, high-confidence problem: Google is splitting authority (and in San Diego's case, actively serving the *weaker* duplicate for the bulk of the query volume) across pages that should be one page.

### 1.3 "Near me" is unwinnable as literally phrased — but a synonym pattern is already ranking on the same pages

US query data confirms and sharpens the earlier finding. Literal near-me phrasing is stuck deep, matching the known GBP-impossible local-pack problem:

| Query | Impr | Pos |
|---|---:|---:|
| ndt training near me | 299 | 47.1 |
| asnt training near me | 214 | 39.2 |
| ndt certification near me | 201 | 53.5 |
| ndt courses near me | 132 | 55.6 |
| non destructive testing training near me | 97 | 82.7 |

But **on the exact same pages**, "school"/"technician" phrasing of near-me intent ranks dramatically better:

| Query → Page | Impr | Pos | CTR |
|---|---:|---:|---:|
| ndt school near me → `/ndt-training-denver` | 4 | **2.5** | 50% |
| ndt school near me → `/ndt-training-atlanta` | 4 | **7.3** | 25% |
| ndt technician training near me → `/ndt-training-new-orleans` | 6 | **1.8** | 33% |
| non destructive testing schools near me → `/ndt-training-atlanta` | 3 | **3.7** | 33% |
| ndt certification near me → `/ndt-training-dallas` | 5 | **4.4** | 0% (too new) |

Site-wide: "ndt school near me" pos 6.1/19.35% CTR; "ndt schools near me" pos 25.4; "ndt technician school near me" pos 5.2. This is the same Denver and Atlanta page that ranks 48-57 for the literal "training near me" query — meaning it's not a content-quality gap, it's that "training near me" / "certification near me" trip Google's local-pack (map-pack) treatment, which per the standing GBP finding Atlantis structurally cannot win without a verifiable local address, while "school" and "technician" phrasing routes to plain organic results where the page already ranks page 1.

### 1.4 Country tiers (training-course pages only, contains `/ndt-training-`, 90d)

| Country | Impr | Pos | Clicks |
|---|---:|---:|---:|
| USA | 2,324 | 52.4 | 32 |
| UAE | 284 | 19.2 | 7 |
| Saudi Arabia | 229 | 10.4 | 6 |
| India | 224 | 14.0 | 4 |
| UK | 56 | 43.9 | 0 |
| Canada | 20 | 28.1 | 0 |
| Australia | 12 | 53.6 | 0 |

USA carries the volume but the worst position of any tier (52.4 avg — page 5+). UAE/Saudi are smaller but rank far better (pos 10-19) and convert reasonably. **Canada and Australia are effectively unbuilt**: 20 and 12 impressions respectively across the entire country over 90 days. India generates volume (224 impr on course pages, another 493 on the broader "training" filter, another 217 on `/asnt-certification`) but it's almost entirely informational — city-specific course lookups ("ndt course in hyderabad," "ndt level 2 course in kolkata"), ASNT-India org queries, zero to near-zero clicks. **Singapore: 90 impressions, 0 clicks, 90 days, position 44.9** — flat confirmation of the memory finding that this traffic doesn't convert.

### 1.5 China/Australia new pages: no signal yet

All 5 new China city pages (Beijing, Shenzhen, Guangzhou, Tianjin, Qingdao) and all 4 new Australia pages (Adelaide, Newcastle, Gladstone, Darwin) show **zero impressions** — expected, they launched today and haven't been crawled/indexed yet. One useful baseline: the existing (not-new) `/ndt-training-shanghai` page already ranks position 7.9 with 95 impressions/90d at 3.16% CTR — proof the template can work in China once indexed.

## 2. Competitive gaps

**Ocean Corp** (`oceancorp.com`, Houston) — the single most concrete threat: a 30-week hands-on program with recurring "new classes begin every 5 weeks," alumni testimonials with named job titles, tuition-assistance/financial-aid messaging, and a physical Houston campus. It's also already a *branded query* showing up inside Atlantis's own GSC data ("ocean corp ndt training" appears as a real query on Atlantis-adjacent India/Canada results) — meaning searchers comparing options already know this name. It sits directly on top of `/ndt-training-houston`, Atlantis's own HQ city and one of its weakest pages (pos 49.2).

**Universal Technical Institute (UTI)** — a 17-campus, ACCSC-accredited national trade-school chain with a dedicated `/locations/texas/houston/non-destructive-testing` page. That exact page **ranks #1 for "ndt training near me"** in general search results — it uses the identical location-page URL pattern Atlantis already uses, but backed by decades of domain authority, published tuition ($22,900-$51,800/yr), and physical campuses. This is the clearest evidence that the URL pattern isn't the problem; authority and trust signals are.

**trainingndt.com** — runs a hybrid model worth copying: a single `/ndt-training-locations/` hub page listing 200+ cities alphabetically by state (cheap to maintain, captures long-tail without full pages), *plus* dedicated individual pages for select cities (e.g. `/ndt-training-norfolk-va/`). Visible trust stack: partner logos (ASNT, AWS, Mistras Group), a BBB badge, a dedicated testimonials page, per-course pricing ($199-$2,000+), and staff ASNT Level III credentials shown by name. Notably, it does **not** show cohort start dates either — same gap Atlantis has.

**Community colleges** (WSU Tech, Clover Park Technical College, Central Piedmont CC, Chattanooga State CC) — .edu domains, embedded local trust, financial-aid pipelines, ASNT-aligned associate degrees. These are structurally unbeatable on cost/trust for pure near-me searches in their own metro; Atlantis should not try to out-rank them locally, only capture the multi-location/corporate-training searcher they can't serve.

**City-specific regional competitors matching Atlantis's own weak spots**: `ndtleveliii.com` runs a dedicated "NDT Training Dallas Texas" page (Dallas is Atlantis's best-positioned weak city at pos 39.7 — this is the one to watch). Applied Technical Services (`atslab.com`) has a physical Marietta, GA location — inside the Atlanta metro — which plausibly explains why `/ndt-training-atlanta` (533 impr) can't crack position 40. Houston alone has at least three dedicated competitors (Ocean Corp, UTI, NDTCS/`ndtcs.com`, NDT Training Center/`ndt-training.org`) on top of Atlantis's own three cannibalizing URLs — it is the single most contested city in the set.

**Trust-signal gap, with a nuance**: the `TrainingLocationPage.tsx` template that generates every `/ndt-training-{city}` page contains a code comment stating a "next three cohorts" date block was **deliberately removed** because the dates were inconsistent/fabricated across pages, replaced with generic delivery-format language. That's the right call under the no-fabricated-claims rule, but it leaves a real, measurable trust-signal gap against Ocean Corp's "new class every 5 weeks" and UTI's published tuition — this should be closed with something *true* (e.g., a real partner-facility count, a real average enrollment-to-start window), not re-fabricated dates.

**One inconsistency worth flagging**: the same template's FAQ copy still reads "Per ASNT SNT-TC-1A (and aligned schemes such as ISO 9712, PCN...)" — language that appears to predate today's sitewide ASNT-only repositioning and should be reconciled so the city pages don't contradict the corrected positioning.

## 3. China/Australia assessment

**China**: no ASNT-specific training competitor surfaced in searches for Beijing, Shenzhen, Guangzhou, Tianjin, or Qingdao. China's domestic default is **GB/T 9445** administered through CNAS-accredited bodies (e.g., Shandong HTS NDT) — a different standard, different buyer. ASNT SNT-TC-1A is specifically requested by API/ASME-scope, export-facing, or foreign-JV facilities (its recognized scope explicitly spans API/ASME/TUV/LR/BV/DNV and Chinese majors CNPC/Sinopec/CNOOC when foreign clients require it). All 5 new cities are genuine industrial/export hubs (Tianjin/Qingdao = petrochemical and shipbuilding ports; Guangzhou/Shenzhen = manufacturing/export; Beijing = HQ/JV hub), so the niche is real but narrow — **content must explicitly frame "ASNT for API/export-standard work," not generic "become an NDT technician,"** or it will misfire against the GB/T 9445 majority audience and rank for the wrong intent entirely.

**Australia**: less clean. **Adelaide has a real, established incumbent** — NANTIA, headquartered in Adelaide, explicitly markets "SNT-TC-1A training for US defence supply chain alignment" plus ASNT Level III oversight services — direct head-to-head competition in the exact city just entered. TCS NDT (Perth) is the other major national player. Australia's default personnel standard is **ISO 9712 via AINDT** (the Australian qualifying-body registry — a different organization from the US-based "American Institute of NDT" found in the US search results, worth not confusing) — the same demand-side mismatch as China, arguably sharper given AINDT's entrenched national role. Newcastle, Gladstone, and Darwin showed no dedicated incumbent in search results — more open, but still competing against the ISO 9712 default nationally. Recommend the same narrow framing used for China: target the ASNT-specific buyer (US-flagged vessel work, API-spec fabrication for US clients, expat-run oil & gas operations) rather than general "NDT technician" positioning.

## 4. Prioritized recommendations

1. **Fix the cannibalization first — no new content required, highest confidence.** Consolidate/301 `/training/asnt-level-iii-training-{san-diego,cincinnati,tampa}`, `/training/cwi-training-tampa`, `/oil-gas-ndt-training-houston`, `/training/certification-requirements-houston` into their matching `/ndt-training-{city}` canonical page. San Diego's canonical page is already sitting at position 2.0 with essentially no visibility — this alone should unlock real clicks within weeks.
2. **Turn the ~92K-impression reference cluster into a funnel.** Add a mid-article + sticky-sidebar CTA on `/blog/ndt-salary-guide-2026-global` (58,574 impr, pos 5.7, one CTA at the bottom of 659 lines) and expand `/asnt-certification`'s "Related Training" block beyond its current two hardcoded links (USA-generic, Dubai) to the five real-volume US cities (Denver, Atlanta, Houston, Dallas, New York) plus a "Find an NDT School Near You" framed link.
3. **Reinforce "school"/"technician" phrasing on Denver, Atlanta, Dallas, New Orleans** — these pages already rank position 2-7 for "ndt school near me" / "ndt technician training near me" while sitting at position 40-90 for "training near me" / "certification near me" on the same page. Add explicit H2s/FAQ entries using "school" and "technician" framing; this is incremental on-page work exploiting a pattern Google is already rewarding, not a new-content bet, and it sidesteps the local-pack wall the literal phrasing can't get past.
4. **Push position on US cities in order of impression volume**: Denver (574 impr, pos 52.8), Atlanta (533, pos 56.7 — contested by ATS's Marietta GA location), Honolulu (256, pos 78.5), Houston (217, pos 49.2 — most contested city in the dataset, four external + two internal competitors), New York (211, pos 61.0). **Dallas (194 impr, pos 39.7) is the nearest to page 3 and the best near-term win** — only one identified external competitor (`ndtleveliii.com`).
5. **China/Australia**: let the 9 new pages accumulate crawl data (currently zero, too early to read), but fix the framing now while cheap — lead with "ASNT for API/export-standard work" rather than general technician-training copy, given the GB/T 9445 (China) and ISO 9712/AINDT (Australia) standards mismatch found above. Also reconcile the TrainingLocationPage.tsx FAQ line that still references "ISO 9712, PCN" against today's ASNT-only repositioning.
6. **Canada stays lowest priority per the stated tier**, but note the pages that do get any visibility convert exceptionally well (Halifax 26.15% CTR at pos 5.5, Winnipeg 19.05% at pos 6.9 — both essentially invisible at 65 and 21 impressions respectively) — the content works, it just has almost no reach yet (20-70 total impressions across the whole country, 90 days).
