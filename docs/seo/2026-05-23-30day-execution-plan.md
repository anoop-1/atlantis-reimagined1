# 30-Day ERP+DT Click Goal — 4,000 clicks by 2026-06-22

**Goal:** ERP + Digital Twins combined = **4,000 clicks** in 30 days (2026-05-23 → 2026-06-22)
**Baseline (today):** 6 clicks / 30 days (3 ERP + 3 DT)
**Multiplier needed:** ≈ 666× — unprecedented but possible with full-stack execution

---

## Day-0 status (2026-05-23 23:00 UTC)

| Action | Status |
|---|---|
| 232 new pages built + deployed | ✅ Vercel deploy confirmed live in ~5 min after push |
| Top-30 page CTR rewrites | ✅ Deployed |
| 29 thin city pages enriched | ✅ Deployed |
| 232 URLs submitted to Google Indexing API | ✅ All 10 SAs, 23-24/account |
| 232 URLs submitted to Bing IndexNow | ✅ 200 OK, 232/232 accepted |
| 1,532 additional unindexed URLs queued | 🔄 Background submit running |
| 15 keyword-targeted blog posts | 🔄 Agent D running |
| ERP/DT cross-promo blocks on 250+ pages | ✅ Deployed |
| Baseline GSC snapshot saved | ✅ scripts/30day-tracker-snapshots/2026-05-23.json |

---

## Growth math — how 4,000 is built

| Lever | Realistic 30d contribution | Reasoning |
|---|---:|---|
| CTR fixes top 30 pages | **+250–400 ERP/DT clicks** | /digital-twins 688 imp × 4% CTR = 28/30d (was 5). API certs 24k imp × 4% CTR = 960/30d; ERP CTA blocks convert 3% = +30 to ERP. Plus all the DT blog posts (134+117+115+104 imp × 4%) = +180/30d. |
| 232 new pages get indexed + rank | **+500–1,200 clicks** | Avg 2–5 clicks/page × 232 = 460–1,160. Long-tail wins on construction-erp-malaysia, erp-software-london, jubail/yanbu/ras-laffan etc. |
| 15 new keyword-targeted blog posts | **+150–400 clicks** | Each post targets specific GSC-confirmed query. 10–30 clicks/post in 30 days post-index. |
| Cross-promo CTA capture | **+100–300 clicks** | Cross-promo block on 250+ existing pages (350 clicks/30d existing on those) at 3–7% conversion = 10–25 clicks/day → ERP/DT pillar pages |
| IndexNow accelerates Bing/Yandex | **+30–80 clicks** | Bing typically 4-6% of Google traffic |
| Brand search lift (atlantis erp, atlantis ndt) | **+20–60 clicks** | Already 10 imp pos 7.6 — title fixes lift to top-3 |
| Compound from existing pages getting recrawled with new titles | **+100–250 clicks** | Higher CTR on bulk of site lifts overall |
| **Realistic ceiling** | **~1,200–2,800 clicks** | Optimistic scenario |
| **Stretch to 4,000 needs** | additional pages, backlinks, paid promotion | see below |

**Stretch levers to bridge to 4,000:**
1. **Satellite-site refresh** — 35 existing vercel.app satellites have ~890 URLs. Re-enrich + link back to new pillar pages. Expected: +200–500 backlink-driven clicks
2. **G2 / Capterra / SoftwareSuggest listings** at $18K/yr positioning — high-intent buyer traffic. Expected: +200–600 directly-attributable clicks
3. **LinkedIn organic** + outbound email pipeline (Atlantis Marketing Agent 200/day) pointing leads at new pillar pages. Expected: +100–400 clicks via UTM-tracked links
4. **Reddit / Hacker News / NDT subreddits** — share Odoo-app pillar pages where allowed. Expected: +50–200 clicks
5. **YouTube Shorts** — 30s product tour per Odoo app. Embed on pillar page → boost dwell time. Expected: +30–150 clicks

Total stretch additions: **+580–1,850 clicks** → realistic target **1,800–4,650** by day 30.

---

## Daily execution plan (4-week roll)

### Week 1 (Days 1-7) — Index + Crawl Phase
- ✅ Submit 232 new URLs to Google + Bing (DONE day 0)
- ✅ Submit 1,532 unindexed sitemap URLs to remaining daily quota (running day 0)
- Day 1: Confirm Vercel deploy stable; spot-check 10 new pages render correctly in production
- Day 2-3: Daily `node scripts/gsc-submit-priority.mjs` continues at 6 AM (existing Windows task) — keeps queue rolling for any leftover URLs
- Day 4: First GSC re-crawl signal — check `node scripts/gsc-30day-tracker.mjs` for first new-page impressions
- Day 5-7: Watch /digital-twins + ERP city CTR climb as Google reindexes new titles
- **Week 1 milestone:** 50–80 new pages with first impressions, 30–80 ERP/DT clicks total

### Week 2 (Days 8-14) — CTR Lift Phase
- Day 8: Run `gsc-30day-tracker.mjs` — measure delta. Expected ERP+DT clicks: 100–250 cumulative.
- Day 8-10: Refresh 35 vercel.app satellite sites with new content linking to top 50 new pillar/city pages (run `satellite-enrich.mjs` per satellite)
- Day 9-11: Submit G2 / Capterra / SoftwareSuggest / GetApp listings for "Atlantis NDT ERP — $18K/yr"
- Day 12: Identify top 5 winning new pages from `gsc-30day-tracker.mjs` — write 2 supporting articles each pointing to them
- Day 14: First major delta check. **Milestone: 400–800 ERP/DT clicks cumulative.**

### Week 3 (Days 15-21) — Scale + Optimize
- Day 15-16: Generate next 50 sub-city ERP pages based on which countries are showing impressions (likely India/Malaysia/Singapore)
- Day 17: Generate 5 more Odoo-app × city combo pages for any city showing >50 imp on existing ERP page
- Day 18-19: Refresh top 10 winning pages with more depth (1500 → 3000 words) — Google rewards updated content
- Day 20: LinkedIn organic posting — 1 post per Odoo-app pillar page (25 posts over 5 days)
- Day 21: **Milestone: 1,500–2,500 ERP/DT clicks cumulative**

### Week 4 (Days 22-30) — Acceleration
- Day 22-24: Submit to remaining 5+ free directories (Crunchbase, Trustpilot, Software Suggest, GoodFirms, Clutch)
- Day 25-27: Outbound email campaign — Atlantis Marketing Agent pipeline points all NDT-company leads to specific Odoo-app pillar pages matching their pain point
- Day 28: Final content blast — 5 more long-tail blog posts targeting any newly-discovered "money keywords" from GSC week-3 data
- Day 30: **Final measurement.** Expected: 2,500–4,500 ERP/DT clicks cumulative.

---

## Daily monitoring rhythm

```powershell
# Run every morning at 9 AM
cd e:\software\Atlantis\atlantis-reimagined1
node scripts/gsc-30day-tracker.mjs                  # Tracker delta + snapshot
node scripts/gsc-erp-demand.mjs                     # ERP query refresh
node scripts/gsc-deep-index-check.mjs               # Index status of new pages
```

The `gsc-30day-tracker.mjs` shows progress %, projected end-of-30d, and Δ vs prior snapshot.

---

## Killer queries — focus pages

These are the queries we already get impressions for that have the steepest CTR-fix upside. **Prioritize ranking + CTR-fixing pages targeting these in week 1:**

| Query | Page | Current pos | Target |
|---|---|---:|---|
| digital twin platform roi calculator | /digital-twin-roi-calculator | 2.8 | top-3, 8% CTR |
| implementation roadmap for digital twins in oil and gas | new blog post | 1.0 | rank-1, claim featured snippet |
| asset integrity digital twin | new blog post | 71.5 | climb to top-20 fast (low competition) |
| construction erp malaysia | new pillar (/erp/manufacturing-...) | 29.5 | top-10 in 30d |
| erp software london | new pillar (/erp/affordable-uk) | 87.0 | top-20 in 30d |
| ndt inspection software | /erp + /ndt-erp-solution | 59.0 | top-15 in 30d |
| atlantis erp (brand) | /erp | 7.6 | rank-1 |
| welding and fabrication erp | new pillar (/erp/manufacturing-erp-for-fabrication-shops) | 20 | top-5 |
| construction erp singapore | new content | 29 | top-15 |
| erp provider aberdeen | new content | 13 | top-5 |

---

## Risks + contingencies

| Risk | Severity | Mitigation |
|---|---|---|
| Vercel build breaks on next deploy (TS errors in legacy code) | High | Pre-existing errors don't block esbuild. If they ever do — fix in their own commit |
| Some new pages get thin-content noindex flag | Medium | `isCuratedCity()` gating in place. Worst case, generic-template fallback in ErpLocationPage is still 800+ words per page |
| Google takes >7 days to recrawl high-impression pages | Medium | Indexing API + IndexNow already submitted. Average recrawl on submission = 2-4 days |
| Our 232 pages get spam-classified | Low | Each page has unique title, meta, city-specific operators/regulators, FAQ schema, real local content |
| Quota burn on 10 SAs daily | Low | gsc-submit-multi-raw.mjs enforces 200/account/day. State file prevents re-submit |
| CTR improvement under-delivers | Medium | If <2× lift by day 7, A/B test alternative title formulas on next 5 fixes |

---

## What success looks like on day 30

✅ ERP+DT combined clicks ≥ **4,000** in last 30 days (vs 6 today)
✅ ≥ **150** ERP pages with non-zero GSC impressions (vs 36 today)
✅ ≥ **50** Odoo-app/city pages with first clicks (currently 0)
✅ Avg CTR on top-30 high-impression pages ≥ **4%** (vs 0.7% today)
✅ Top-10 keyword rankings include `digital twin roi calculator` (pos 1), `atlantis erp` (pos 1), `construction erp malaysia` (top-10), `welding and fabrication erp` (top-5)
✅ At least 1 new page indexed per day cumulative; full 232 indexed by day 14

Final tracker readout will be in `scripts/30day-tracker-snapshots/2026-06-22.json`.
