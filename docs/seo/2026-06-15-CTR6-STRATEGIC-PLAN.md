# Strategic SEO Plan — Lift product+service page CTR to 6%+

**Date:** 2026-06-15
**Site-wide 30d:** 1,007 clicks / 89,245 imp / 1.13% CTR / pos 23.5 (+100 vs 2 days ago, +500 vs Day-0 baseline)

## Per-segment state (real CTR gap vs 6% target)

| Segment | 30d clicks | 30d imp | CTR | Pages | Gap to 6% |
|---|---:|---:|---:|---:|---|
| **ERP** | 7 | 556 | **1.26%** | 80 | need ~28 clicks (4×) |
| **Digital Twins** | 9 | 1,542 | **0.58%** | 33 | need ~85 clicks (10×) |
| **Consulting** | 4 | 718 | **0.56%** | 29 | need ~39 clicks (10×) |
| **Training** | 282 | 25,603 | **1.10%** | 68 | need ~1,250 clicks (4.5×) |
| Other (blog) | 705 | 60,826 | 1.16% | 1,424 | n/a — funnel into product |

## Critical query-level findings (today's analysis)

1. **/consulting ranks pos 16-74 for ASNT Level III queries** — page 2 = no clicks. Need RANK improvement, not just CTR.
2. **/api-510 doesn't own "api 510"** — ranks pos 32 (blog post wins at pos 11). Cannibalization.
3. **/api-653 ranks pos 46 for "api 653"** — blog post wins at pos 11. Same cannibalization.
4. **/digital-twins** doesn't rank for "digital twin" core query — gets random off-topic impressions.
5. **Brand "atlantis ndt" at pos 1 only 3.7% CTR** — title not compelling.

## Why CTR isn't moving despite Phase 3 v2 title rewrites

Phase 3 title rewrites pushed 2-3 days ago. **Google recrawl + index update lag is 7-21 days.** v2 effects not yet in GSC. **DO NOT REWRITE TITLES AGAIN.** Wait for v2 to land.

Instead, attack CTR via SERP-side enhancements that work IMMEDIATELY after recrawl:

## Strategy — SERP-side rich snippets (faster CTR lift than title rewrites)

### A. Schema enrichment (rich result eligibility)
Each schema type produces a visible SERP enhancement that lifts CTR 20-150%:
- **FAQPage** — accordion in SERP (CTR +30-80%)
- **HowTo** — numbered steps in SERP (CTR +20-60%)
- **SoftwareApplication** — star rating + price + screenshot (CTR +50-100%)
- **Course** — duration + provider + price band (CTR +40-90%)
- **ProfessionalService** — review stars + areaServed (CTR +30-60%)
- **BreadcrumbList** — visible breadcrumb path (replaces URL)
- **VideoObject** — video thumbnail (if video embed present)

### B. Quick-Answer block (featured snippet bait)
50-75 word direct answer at top of each money page. Google extracts as featured snippet (position 0 = 30-40% CTR avg).

### C. Table of Contents
Auto-generated from H2/H3. Triggers SERP jump-link sitelinks. Boosts CTR 10-20%.

### D. Internal link cascade
Already injected RelatedGuidesBlock on 10 pages. Extend to all 30 high-imp pages + product hubs. PageRank flow.

### E. Cannibalization resolution
For API 510/570/653 split between cert page + blog guide:
- Cert page (commercial intent) — keep as primary for "{X} certification" / "{X} exam" / "{X} prep"
- Blog guide (informational intent) — re-orient toward "what is {X}", "{X} explained", "{X} requirements"
- Add canonical link strategically + reciprocal internal links

### F. Consulting RANK climb (not CTR — different problem)
`/consulting` at pos 16 for the money query. To climb:
- Add 800+ words depth on ASNT Level III specifically
- More internal links from cert pages (already done in Phase 3.5)
- Schema ProfessionalService with serviceType="ASNT Level III Consulting"
- Bring in 4 service-line pages (built in Phase 3) — link prominently from hub

## Execution today

### Action 1 — Quick-Answer + TOC + enriched schema on top 30 high-imp pages
Build script: `scripts/enhance-top30-pages.mjs`
For each of the 30 pages (mostly already touched by Agent CTR earlier):
- Insert `<QuickAnswerBox>` component immediately after `<Breadcrumbs>` (50-75 word direct answer)
- Insert `<TableOfContents>` component auto-extracting H2s
- Ensure `SEOHead` emits FAQPage + Article schema (audit each)

### Action 2 — Consulting hub depth + schema
- `/consulting` hero: more depth on ASNT Level III as primary keyword
- Add 4 cards prominently linking to the 4 service-line pages (Phase 3)
- Add ProfessionalService schema serviceType="ASNT Level III Consulting"

### Action 3 — Cannibalization resolve on API cert pages
- `/blog/api-653-tank-inspection-guide` — add canonical pointing to itself (informational) + prominent CTA "Get certified → /api-653-certification"
- Same for /blog/api-{510,570}-*

### Action 4 — Submit refreshed URLs to GSC + IndexNow
~40 URLs touched today

## What we WILL NOT do

- Rewrite titles again (Phase 3 v2 hasn't recrawled yet)
- Add NEW pages (per CLAUDE.md rule — focus on existing depth)
- Touch the 16 Day-3 pages (still need 7+ days post-deploy to recrawl)

## Measurement

Daily `node scripts/gsc-30day-tracker.mjs`. Watch:
- /consulting clicks > 8 (back above baseline)
- /digital-twins clicks > 15 (CTR 1%+)
- Top 30 page CTR avg > 3%
- Schema rich-results in GSC Coverage report
