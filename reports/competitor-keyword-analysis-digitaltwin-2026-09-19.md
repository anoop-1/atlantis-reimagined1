# Digital Twin Platform — Competitive & Keyword Analysis
**Date**: 2026-09-19 | **GSC window**: 2026-06-21 to 2026-09-17 (90d) | **Property**: sc-domain:atlantisndt.com | **Scope**: all `/digital-twin*` and `/3d-scanning*` paths

## Current State

### Footprint vs. yield
The Digital Twin page family spans **739 published URLs** (327 `/digital-twin*` + 412 `/3d-scanning*`, per `dist/sitemap-digital-twins.xml` + `sitemap.xml`/`sitemap-other.xml`). Only **367 (49.7%)** logged any impression in 90 days, and the entire family produced **15,762 impressions / 211 clicks** — 2.3 clicks/day across nearly 750 pages. This is the same yield-saturation pattern already flagged site-wide (116 pages driving 80% of clicks): a handful of pages carry the family, the long tail is dead weight.

### The core problem: two page types with opposite intent, same URL family
| Segment | Pages w/ impr. | Impressions | Clicks | CTR | Imp-weighted avg. position |
|---|---|---|---|---|---|
| `/3d-scanning-*` (land-survey/LiDAR/BIM) | 212 | 13,060 (83%) | 177 | 1.36% | **32.3** |
| `/digital-twin*` (asset-integrity/RBI/FFS) | 155 | 2,702 (17%) | 34 | 1.26% | **14.1** |

83% of this family's total search visibility comes from the `/3d-scanning-<city>` pages, and their ranking queries are **generic reality-capture/surveying terms with zero industrial asset-integrity intent**: "point cloud scanning louisville" (302 imp), "3d laser scanning netherlands" (347 imp), "lidar scanning denver" (96 imp), "survey scanning austin" (62 imp), "3d survey sydney" (72 imp, pos 51), "terrestrial laser scanning services" (repeated across AU pages at pos 76–96). These are AEC/land-surveying buyer queries — the audience is architects, surveyors, construction firms — not refinery/petrochem asset-integrity engineers. This traffic is off-target by design: the `/3d-scanning-<city>` title template is literally "3D Scanning [City] 2026: LiDAR + Drone + Photogrammetry | Same-Day Quote" (or "Survey-Grade LiDAR + Drone + BIM"), which reads identically to a commodity land-surveying vendor, not an NDT/asset-integrity company. It is directly competing with Matterport, drone-survey shops, and BIM scan-to-CAD vendors for volume that has no path to an RBI/FFS sale.

The smaller `/digital-twin-<city/country>` and `/digital-twins/<use-case>` segment is **genuinely better-targeted and ranks better** (avg. position 14.1 vs. 32.3) but gets 5x less volume. Its titles are correctly disambiguated: e.g. `/digital-twin-houston` template = "Digital Twin NDT Houston 2026 — API 510/570/653 + RBI + FFS Integrated | Free Demo", and the core `/digital-twins` hub page title is "Digital Twin for NDT 2026 — 3D Asset Integrity, API 581 RBI + API 579 FFS Overlay." Title disambiguation is **not** the primary problem on this half of the family — visibility and authority are.

### Genuinely on-target queries (low volume, mixed positions)
Only **106 query-page rows** across the whole 90-day window match real asset-integrity/RBI/FFS intent, totaling ~350 impressions site-wide (2.2% of family impressions). Notable ones:
- "asset integrity digital twin" → `/digital-twins`, imp=42, **pos 69.6** (page 7 — losing badly on the single most important head term)
- "best 3d digital twin software for corrosion monitoring" → blog comparison page, imp=7, **pos 6.7**, **0 clicks** — page 1 for a highly commercial query and still zero clicks in 90 days (title/CTR problem, not a ranking problem)
- "digital twins for turnarounds" → imp=15, pos 9.6, 0 clicks
- "fitness for service ras laffan" / "lng fitness for service ras laffan" → imp=8/14, pos 3.6/6.4, 0 clicks — ranking #1-2 page for a hyper-specific buyer query and converting zero clicks
- "digital twin platform roi calculator..." → imp=27, pos 8.5, 0 clicks
- "api 579 yanbu" → imp=5, pos 19.2
- "digital twin vendor comparison" (targeting "bentley itwin iot alternative") → pos 81 — not ranking at all for the comparison query it's built for

Pattern: **where Atlantis ranks well (top 10) on-target, CTR is 0% anyway** — a title/meta problem on the winning pages, separate from the ranking problem on the losing ones.

### Geo breakdown (priority order: USA > Canada/Europe/Australia-NZ > India/Middle East)
| Country | Impressions | Clicks | Avg. position | Distinct pages |
|---|---|---|---|---|
| USA | 3,831 | **0** | 40.2 | 130 |
| UAE | 1,122 | 0 | 48.8 | 8 |
| Singapore | 754 | 0 | 35.8 | 5 |
| UK | 711 | 0 | 34.1 | 41 |
| Netherlands | 563 | 0 | 33.7 | 6 |
| Australia | 447 | 0 | 66.4 | 17 |
| Canada | 289 | 0 | 36.4 | 11 |

**USA — the #1 geo priority — logged zero clicks on this entire page family over 90 days**, despite 3,831 impressions across 130 pages. Of those USA impressions, 3,592 (93.8%) are on `/3d-scanning-*` pages ranking at avg. position ~30-85 for generic lidar/survey terms (Louisville, Denver, Austin, Phoenix, Dallas, San Francisco, Kansas City); only 239 impressions (6.2%) are on genuinely on-target `/digital-twin*` pages, and most of those also rank poorly (pos 30-90), except a few blog/tool pages at pos 6-10 that still convert zero clicks (see above). Canada and UK show the identical pattern: Halifax/Toronto/Vancouver and Glasgow/Aberdeen/London impressions are ~95%+ generic "3d scanning"/"lidar surveying" queries, not asset-integrity buyer intent.

**Refining/petrochem hub cities specifically** (the actual buyer geography): `/digital-twin-houston` — Atlantis's own HQ market, the single highest-priority city — has **zero GSC impressions in 90 days**; the only Houston-adjacent visibility is a use-case combo page, `/digital-twins/refinery-houston` (6 impressions, pos 8.2, 0 clicks). Calgary: 9 impressions, pos 4.6, 0 clicks. Aberdeen: 1 impression. Stavanger: 10 impressions, pos 5.0. Lake Charles: 7 impressions, pos 7.3, 1 click (the only USA click found in the entire on-target segment). New Orleans, Perth, and Gladstone show **zero impressions at all** — Perth's only visibility is on the `/3d-scanning-perth` generic page (terrestrial laser scanning queries, pos 56-92); Gladstone has no footprint whatsoever despite being a major LNG/petrochem hub in the priority-3 (AU) tier.

## Competitive Gaps

The closest **direct** competitor is **Antea** (antea.tech) — "Asset Integrity Management Software with Digital Twin," RBI/IDMS/PIMS modules, "field-proven for over 33 years." Antea's homepage headline and RBI product page rank for almost the exact phrases Atlantis is targeting ("3D asset integrity platform," "RBI software... API 581," "digital twin... RBI data overlaid... colored by risk level" — nearly identical framing to Atlantis's own pitch). Antea publishes a dedicated case-studies section, displays partner/certification logos (APAVE, Bureau Veritas, DPS), and is validated to API 580/581 by a named certification body. **Pricing is quote-only** (phone/email contact) — no published numbers.

Other real incumbents surfaced by query-matched search:
- **DNV Synergi RBI** — API 580/581 RBI suite, onshore + offshore (DNV-RP-G101), backed by DNV's certification-body brand authority.
- **AVEVA** (RBI, Corrosion and IOW Management Software, part of the AVEVA APM portfolio) — API-581 embedded, AI-driven, IoT-integrated; enterprise sales motion.
- **GE Vernova / Meridium APM** (GE Digital acquired Meridium for $495M in 2016) — the dominant enterprise APM/RBI suite in oil & gas; API 580/581 calculations built in; no public pricing; sold as a multi-module enterprise platform.
- **Equity Software / E2G (PlantManager ASSET)** — markets itself as having "the industry's only fully compliant API 581 calculator," cloud-native.
- **Cenosco, VisualAIM, Palladio** — mid-market AIM platforms combining 3D/visual asset tracking with RBI/compliance workflows, actively ranking on "asset integrity platform" queries.
- **Hexagon (PV Elite, TANK)** — API 579 FFS calculation tools bundled into its broader PPM/engineering suite.
- **KBC (a Yokogawa company)** — a corrosion-specific digital twin (Petro-SIM-based) for CDU overhead systems; narrower but highly credible technical content (whitepapers, Digital Refining bylines).
- **Matterport** — not RBI-focused, but publishes content ("The Essential Oil & Gas Asset Management Software Stack") that ranks on asset-integrity-adjacent queries purely through capture-market brand strength; a reminder that even non-competitors are winning shelf space in this SERP.
- **Cintoo** — reality-capture/BIM digital twin platform, publishes an oil & gas asset-integrity blog series and **lists self-serve pricing on AWS Marketplace ($20/mo BIM Edition, $28.70/mo Twin Edition per seat)** — not RBI/FFS-specific, but proof that "affordable, transparent" positioning is achievable and already partly claimed by a competitor in the broader category.

**What incumbents have that Atlantis's own pages currently don't show:** Antea and peers lead with named partner/certification logos and a browsable case-studies page. Atlantis's own `/digital-twins` hub explicitly states: *"KPIs reflect typical post-deployment ranges across the Atlantis customer base. Named customer case studies available under NDA on request"* — i.e., **no public proof on the page itself**, only a claim that proof exists elsewhere on request. Against Antea's public case-studies page and visible client/partner logos, this reads as a real credibility gap, not just a content-depth one. Independent, generic industry pricing guides estimate enterprise digital-twin/RBI programs at **$25K–$2M+**, and every RBI-specific incumbent found (Antea, DNV, AVEVA, GE Vernova, E2G) is quote-only — so Atlantis's "affordable, accessible, fully customizable, quote on request" positioning is directionally correct and differentiated, but it currently isn't being *proven* anywhere near as concretely as it could be (no anchor numbers, no visible logos, no public case study).

## Prioritized Recommendations (USA-first)

1. **Fix the zero-click paradox on already-ranking on-target pages first — cheapest, fastest win.** `/blog/digital-twin-corrosion-monitoring-vendors-comparison` (pos 6.7), the Ras Laffan FFS pages (pos 3.6–6.4), `/digital-twin-platform-roi-calculator-examples-2026` (pos 8.5), and `/blog/digital-twins-reduce-refinery-turnaround-time` (pos 9.6) are all page-1 for genuinely on-target buyer queries and all convert **0 clicks** in 90 days. Rewrite titles/meta on this specific set (name the competitor/method in the title, add a number or outcome) before touching anything else — this is a title-copy fix, not a content or authority problem.

2. **Build real, visible proof on `/digital-twins` itself.** Replace "case studies available under NDA on request" with at least one public, named or anonymized-but-specific case study (a number: % reduction in inspection hours, $ deferred-outage savings in the style of the Cintoo example found in research) plus visible certification/partner marks (ISO 9001, API 510/570/653, ASNT). This directly closes the gap against Antea's public case-studies page and is the highest-leverage credibility fix against every incumbent named above.

3. **Stop the `/3d-scanning-<city>` template from cannibalizing the family's identity.** These 412 pages generate 83% of the family's impressions but are indistinguishable from a commodity land-surveying vendor and structurally cannot convert into an RBI/FFS buyer. At minimum, retitle/re-meta the highest-impression ones (Singapore 1,094 imp, Abu Dhabi 1,077 imp, Netherlands 594 imp, Cape Town 374 imp) to lead with the industrial/asset-integrity capture use case (e.g., "3D Laser Scanning for Refinery & Offshore Asset Digitization — [City]") rather than generic AEC phrasing, and add explicit internal links from each to the matching `/digital-twin-<city>` RBI page so crawl equity and topical relevance flow toward the actual product. Do not delete — per the no-undo rule — retarget.

4. **Houston is the single highest-priority gap.** `/digital-twin-houston` (HQ market, Gulf Coast refining core) has **zero impressions** in 90 days — it is either unindexed or has no ranking signal at all. Fix/verify indexing and strengthen this one page before investing further in secondary USA cities. Pair it with Lake Charles, Odessa (Permian), New Orleans, and Denver — the only other USA refining/petrochem-relevant pages with any visibility, all currently under 25 impressions.

5. **Canada/Europe/Australia (tier 2): concentrate, don't spread.** The only tier-2 pages showing real position strength are Calgary (pos 4.6), Aberdeen (pos 7.0, but only 1 impression — needs indexing/authority, not a new page), and Stavanger (pos 5.0, 10 impressions). Gladstone and Perth (AU LNG/petrochem hubs) currently have **no RBI-relevant footprint** — Perth's only visibility is generic lidar-survey queries at position 56-92. Prioritize content depth (named operators, code-stack detail, a real case study) on Calgary/Aberdeen/Stavanger over creating any further new tier-2 or tier-3 city pages; the yield-saturation pattern site-wide says more permutations won't fix this.

6. **De-prioritize the country-level `/digital-twin-<small-market>` pages entirely.** Dozens of 1-4 impression pages (Gabon, Tanzania, Myanmar, Cyprus, Algeria, etc.) sit in tier-3/outside-priority geography per the standing geo rule and are contributing noise, not pipeline — leave them live (no-undo rule) but do not invest further content or linking effort there.

7. **Longer-term differentiation vs. Antea/DNV/AVEVA/GE Vernova**: none of them lead with "affordable" — all are quote-only enterprise sells with no visible price anchor. Atlantis's real opening is to be the only named player in this exact SERP that pairs RBI/FFS-specific software (not generic BIM/capture like Cintoo/Matterport) with an openly "affordable, accessible, fully customizable" position — but that claim needs the proof from #2 to be credible against incumbents with 33-year track records and $495M acquisition histories.
