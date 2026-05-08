# SEO Fix + Growth Plan — 2026-05-08

## 1. Schema Fix (DEPLOYED — commit `961d7991`)

### Problem
GSC reported 432 invalid items: **"Review has multiple aggregate ratings"** on `/digital-twins`. URL Inspection API also showed **"Duplicate field FAQPage"**.

### Root cause
- `index.html` shipped `aggregateRating` (4.9 / 127) + 5 `review` items on the Organization JSON-LD on **every** page.
- Page-level structured data (e.g., `DigitalTwins.tsx`, `Index.tsx`, `best-ndt-reporting-software-2026.tsx`) **also** emitted an `aggregateRating` on Product / SoftwareApplication / LocalBusiness entities.
- Google parsed each Review and saw it attached to entities holding multiple aggregateRatings → invalid.
- A separate FAQPage was injected by `scripts/prerender.mjs` on the same routes whose React `@graph` already had its own FAQPage → duplicate.

### Changes applied
| File | Change |
|---|---|
| `index.html` | Removed `aggregateRating` + 5 `review` items from Organization. Kept `knowsAbout`. |
| `src/components/SEOHead.tsx` | Removed the duplicate `aggregateRating` + review array from the runtime Organization injection. |
| `scripts/prerender.mjs` | Stopped injecting `FAQPage` on `/digital-twins`, `/asnt-certification`, `/api-510-certification`, `/api-570-certification`, `/api-653-certification`, `/training`, `/weld-inspection`. Their React pages already emit FAQPage in `@graph`. |
| `scripts/gsc-rich-results-audit.mjs` | New helper — URL Inspection + 28-day search analytics + CTR bleeders. |

### Validation steps after Vercel deploy
1. Visit `https://atlantisndt.com/digital-twins` and run Google's [Rich Results Test](https://search.google.com/test/rich-results) — expect 0 errors.
2. In GSC → Enhancements → Review snippets → click **Validate Fix** on the 432-item error. Re-validation runs ~7 days.
3. Same for FAQ enhancement panel.
4. Re-run `node scripts/gsc-rich-results-audit.mjs` 24h after deploy.

---

## 2. GSC Performance Snapshot (28d, ending 2026-05-06)

| Metric | Value | Trend |
|---|---|---|
| Clicks | 185 | +22% WoW |
| Impressions | 19,522 | +44% WoW |
| CTR | 0.95% | low |
| Avg position | 16.9 | improving |

### Top CTR-bleeder pages (high impressions, near-zero CTR)

| Page | Impressions | CTR | Avg pos | Verdict |
|---|---|---|---|---|
| `/blog/ndt-salary-guide-2026-global` | 4,014 | 0.70% | 5.3 | Should be 12-15% — title doesn't match SERP intent |
| `/asnt-certification` | 2,510 | 0.56% | 7.5 | Title front-loaded with fees + pass rate, but losing to authority sites |
| `/blog/api-653-tank-inspection-guide` | 2,185 | 0.41% | 16.2 | Needs content depth + internal links to push to top 10 |
| `/api-653-certification` | 1,495 | 0.54% | 20.7 | Same — push from page 2 to page 1 |
| `/blog/cwi-certification-requirements-cost-career-impact` | 1,427 | 0.00% | 6.9 | **0 clicks at pos 6.9** — content/SERP mismatch |
| `/api-510-certification` | 1,303 | 0.46% | 21.7 | Page 2 — needs ranking push |
| `/blog/eddy-current-testing` | 1,229 | 0% | 25.7 | Redirect deployed, awaiting rerank |
| `/blog/aerospace-composite-inspection-ndt-methods-guide` | 888 | 0% | 8.2 | **0 clicks at pos 8.2** — recheck title vs target query |

---

## 3. GA4 Snapshot (28d)

- **1,352 sessions** (48/day, trending +up — 29 → 86/day in the period)
- **Organic Search 55%** of traffic, engagement 57.7% (good — content is sticky once found)
- **Top countries**: US (402), Singapore (199), India (145), UK (52), Indonesia (49), Canada (48), China (48), Saudi (32), Australia (28), UAE (26)
- Mobile engagement 57.9% > desktop 37.2% — mobile UX is good
- **Top organic landing pages** match GSC bleeders: `/blog/ndt-salary-guide-2026-global`, `/training`, `/asnt-certification`, `/digital-twins`

---

## 4. Recommended Next Sprints

### A) CTR rewrites (1 day, expected +30-50% clicks at current rankings)
Target the 4 worst bleeders. New titles should front-load the **exact** query the user typed and a number/year/benefit:

- `/blog/ndt-salary-guide-2026-global` → current title is fine; **description** should lead with country breakdown and "USA/UK/UAE/India/Canada" since global searches segment by country.
- `/blog/cwi-certification-requirements-cost-career-impact` → 0% CTR at pos 6.9 means SERP shows wrong meta or competitors are stronger. Inspect SERP for query "cwi certification requirements" and rewrite title to match top-3 patterns.
- `/blog/aerospace-composite-inspection-ndt-methods-guide` → check exact query in GSC dimension `query × page` (filter by this URL). Title likely too long (>60 chars truncated).
- `/asnt-certification` → already has good numbers. Check if SERP shows description; competitors may have FAQ snippets stealing the click.

### B) Push pos 11-20 pages into top 10 (high lift)
Pages on page-2 that need 2-3 backlinks + 200-300 word content additions:
- `/api-653-certification` (pos 20.7, 1,495 imp) — add API 653 v2024 changes section, link from `/api-inspector-guide` and 4 city pages.
- `/api-510-certification` (pos 21.7) — same approach.
- `/blog/api-653-tank-inspection-guide` (pos 16.2, 2,185 imp) — already a long-form post; just needs internal anchor links from the cert page + 5-10 city pages.
- `/blog/eddy-current-testing` (pos 25.7) — wait 2 weeks for redirect rerank.

### C) City-page traffic capture (your specific ask)
GSC shows city-specific pages getting low impressions (`/ndt-training-houston` at 70 imp, pos 37; `/ndt-training-dubai` at 377 imp, pos 8.9 already good). Pattern:
- Dubai works (CTR 2.12% at pos 8.9, 8 clicks). Replicate the Dubai page structure for the next 5 highest-search cities: Houston, Singapore, Mumbai, Riyadh, Calgary.
- For each, the unique content blocks that move the needle: local cert body (e.g., ASNT vs PCN vs SACE vs CSWIP per city), local salary band, local employer list, local exam centers, local FAQs. Add `LocalBusiness` schema with city `geo` coordinates (already supported in `SEOHead.tsx`).

### D) Country-tier expansion (Singapore, Indonesia, Nigeria)
Singapore is #2 traffic source but has only `/ndt-training-singapore` style pages. Build:
- `/ndt-training-singapore-pcn`, `/ndt-consulting-singapore-marine`, `/api-510-singapore`. Pattern from Houston / Dubai cluster.
- Indonesia (49 sessions): create `/ndt-training-jakarta`, `/ndt-services-batam` (oil & gas).
- Nigeria (17 sessions): `/ndt-services-port-harcourt`, `/ndt-training-lagos` already exist — just need internal links + a country-level hub `/ndt-services-nigeria`.

### E) Rich-result wins to chase next
After GSC re-validates Review snippets:
- Add **Course** schema to all training city pages (already supported in `SEOHead.tsx` `course` prop). Unlocks Google Courses SERP carousel.
- Add **HowTo** schema for top 5 procedural blog posts (UT calibration, RT setup, MT exam prep). HowTo is undervalued and easy to win.
- Add **VideoObject** schema for YouTube-embedded content if any.

---

## 5. Open infrastructure items

- **GA4 Data API** is enabled and working (`atlantismarketing@x-jigsaw-293515` SA reads property `517088706`). The CLAUDE.md note "GA4 API NOT yet enabled" is now stale.
- **Core Web Vitals**: still no CrUX data — needs ~1,000 visits in 28-day window. Should land within ~3 weeks at current trajectory.
- **GSC indexed**: 1,519 / 2,468 pages — Tier 3 (ndt-connect) submission still in progress.

---

## Files
- `scripts/gsc-rich-results-audit.mjs` — re-runnable audit
- `scripts/gsc-audit-2026-05-08.json` — raw audit data
- `scripts/ga4-report.json` — GA4 28-day snapshot
