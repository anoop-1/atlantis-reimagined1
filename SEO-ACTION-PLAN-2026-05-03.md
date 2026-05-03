# Atlantis NDT + NDT-Connect — SEO Action Plan
**Date:** 2026-05-03
**Author:** Claude (Opus 4.7)
**Data sources:** GSC (Apr 2 → Apr 30, 28d), GA4 (Apr 4 → May 2, 28d), live codebase audit

---

## 1. Where you are right now

### atlantisndt.com (28d GSC)
| Metric | Value | vs 2026-04-22 audit |
|---|---:|---|
| Clicks | **353** | +40% (was 252) |
| Impressions | **45,420** | +23% (was 36,812) |
| CTR | **0.78%** | flat |
| Avg position | ~17 | flat |
| Pages with traffic | 1,039 | +6% |
| Unique queries | 1,555 | +3.5% |

### ndt-connect.com (28d GSC)
| Metric | Value |
|---|---:|
| Clicks | **24** |
| Impressions | 2,169 |
| CTR | 1.11% |
| Pages w/ traffic | 64 |

### GA4 28d
| Property | Sessions | Users | Engaged | Views |
|---|---:|---:|---:|---:|
| atlantisndt.com | 1,348 | 1,176 | 745 | 1,433 |
| NDTConnect | 124 | 75 | 99 | 243 |

**Channel split (atlantisndt):** direct 506 / google organic 419 / **bing organic 272** / ndt.org referral 36 / yahoo+duckduckgo 53 / AI assistants (copilot, gemini, chatgpt) ~30. Bing = 39% of total search traffic — undervalued.

**Geography mismatch:** GA4 shows Singapore = #2 country (183 sessions) but GSC shows only 12 SG clicks. SG sessions are direct/referral/bot. Real organic markets ranked: USA › India › UAE › UK › Canada › Saudi › Singapore.

---

## 2. The single biggest issue: CTR collapse on top-10 pages

You rank top-10 for high-volume queries and Google is showing you to thousands of people, but they're not clicking. Fixing this is **higher leverage than ranking new keywords** because the impressions already exist.

### Page-level CTR bleeders (top-10 position, near-zero CTR)

| Page | Impr | Pos | Clicks | CTR | What's wrong |
|---|---:|---:|---:|---:|---|
| `/blog/cwi-certification-requirements-cost-career-impact` | 1,220 | 6.8 | **0** | **0.00%** | Title/desc not pulling clicks at all |
| `/blog/aerospace-composite-inspection-ndt-methods-guide` | 705 | 8.3 | **0** | **0.00%** | Same |
| `/ndt-technician-salary` | 244 | 5.3 | **0** | **0.00%** | Same |
| `/blog/risk-based-inspection-rbi-implementation-guide` | 232 | 7.0 | **0** | **0.00%** | Same |
| `/blog/ndt-equipment-calibration-and-maintenance-best-practices` | 220 | 12.6 | **0** | **0.00%** | Same |
| `/blog/ndt-salary-guide-2026-global` | 4,181 | 5.0 | 28 | 0.67% | At pos 5 should be ~10% CTR — losing ~390 clicks/mo |
| `/asnt-certification` | 2,682 | 7.4 | 15 | 0.56% | At pos 7 should be ~5% — losing ~120 clicks/mo |
| `/blog/rt-vs-ut-complete-comparison` | 1,453 | 6.2 | 13 | 0.89% | Losing ~85 clicks/mo |
| `/api-570-certification` | 1,364 | 10.0 | 10 | 0.73% | Borderline page-2 — push and rewrite |
| `/blog/ndt-salary-guide-2025-global-level-1-2-3` | 1,059 | 5.5 | 3 | 0.28% | Already 301'd to 2026 guide per vercel.json — but still showing impressions = stale snippet |

**Math:** if top-10 striking-distance pages averaged the position-appropriate CTR (~6-10%), clicks/month would jump from ~70 (these pages) → ~700. That's **~10x on this slice alone**, ~3x sitewide.

### Why CTR is collapsing (hypotheses, in priority order)

1. **SERP feature dominance.** "ndt salary", "asnt certification" trigger People-Also-Ask, FAQ rich results, AI Overviews, and entries from BLS/Glassdoor/ASNT itself. You're listed but buried below interactive features.
2. **Title/description not differentiated.** All page titles use the same generic suffix ` | Atlantis NDT` and most descriptions read like landing-page boilerplate.
3. **Same OG image (`atlantis.jpg`) everywhere** — no per-page social card → lower social CTR and possibly lower SERP CTR if Google uses image cues.
4. **Keywords meta is identical across all 925 prerendered pages** (verified: same string for `/blog/ndt-salary-guide-2026-global` and `/asnt-certification`). Doesn't hurt directly (Google ignores), but signals automated/templated content.

---

## 3. Where indexed positions are buried (need ranking, not CTR)

| Query | Impr | Position | Target page | Action |
|---|---:|---:|---|---|
| eddy current testing | 238 | **44.5** | `/blog/eddy-current-testing-complete-guide` (pos 12 already!) | This page IS at pos 12 with 5 cl. The pos-44 is from the OLD `/blog/eddy-current-testing` (1,244 impr, 0 cl). vercel.json already 301s it — but Google still shows old URL. **Force re-index of the redirect.** |
| mfl pipeline inspection service | 192 | 42.5 | none with traffic | **Build dedicated MFL pipeline service page** |
| api 653 | 189 | 28.8 | `/api-653-certification` | Already pos 16 for "asnt certification". Need topical rewrite + internal linking from the 10+ /api-653-* pages |
| eddy current inspection | 124 | 43.5 | same as #1 | Same fix |
| 653 api | 45 | 28.3 | same | Same |

---

## 4. NDT-Connect.com is essentially invisible

24 clicks/28d on a 3,691-URL site. Of 2,169 impressions, **only 1 query has any meaningful position** (cost-guide/houston/ultrasonic-testing at pos 7.8 with 519 impr → 2 cl). Everything else is pos 30-100+.

**Diagnosis:** site is technically indexed (1,519 GSC-confirmed pages per CLAUDE.md), but Google has no signal that it's authoritative for any topic. No backlinks, no brand searches, no engagement, no entity in Knowledge Graph.

**Options (recommendation in §6):**
- **A) Merge.** Collapse ndt-connect into atlantisndt.com under `/marketplace/` — borrow domain authority. Cost: lose `.com` brand, ~6 weeks of redirect chaos. Gain: instant authority lift.
- **B) Build authority slowly.** Targeted backlink campaign + 2-3 high-quality guest posts on ndt.net, AsiaSeo, OneStopNDT. 6-12 month horizon to reach 100 cl/day.
- **C) Pivot pitch.** If ndt-connect is the marketplace product, run paid Google Ads (~$500/mo) on commercial intent ("hire ndt inspector", "ndt service quote") while organic builds.

---

## 5. Codebase / technical SEO findings

### Confirmed working
- Prerendering produces 925 unique HTML files with per-page title/description/canonical.
- Sitemap split correctly across 7 sub-sitemaps (core/blog/consulting/methods/digital-twins/training/other).
- robots.txt clean, allows everything except `/admin/ /embed/ /api/`.
- Schema.org Organization+WebSite with reviews + ratings present on every page (correct strategy).
- vercel.json has 50+ legacy URL 301 redirects (good cleanup).
- 6-tier GSC indexing pipeline operational with 10 service accounts (~2,000 URLs/day quota).

### Issues to fix

| # | Issue | Where | Severity |
|---|---|---|---|
| T1 | All 925 pages share the **same `<meta name="keywords">`** boilerplate string | `index.html` line 22-23 | low (Google ignores) but signals templated |
| T2 | All pages use the **same OG image** `/atlantis.jpg` | `index.html` line 37 | medium — kills social CTR |
| T3 | Hard-coded review dates in Org schema (2025-09-22 etc.) — getting stale, may trigger structured-data warnings as they age past 12 months | `index.html` line 83-87, replicated to 925 files | medium |
| T4 | **24 orphan blog HTML folders** in `dist/blog/` with no corresponding entry in `src/data/blogs.json` (api-510-practice-questions, api-510-vs-570-comparison, asnt-level-3-basic-exam-prep, etc.) — these will 404 from `BlogDetail` lookups but exist as static HTML; probably no internal nav points to them | `dist/blog/*/index.html` | medium (orphan pages, no PageRank flow) |
| T5 | `vercel.json` catch-all rewrite `/(.*) → /` — anything not in dist/ serves SPA shell from `/`. CLAUDE.md says soft-404s already fixed via DynamicCityRoute. **Spot-check confirms** `/random-nonexistent-url` would still serve the homepage HTML (no native 404). Need genuine 404 handling for unknown paths to stop dilution | `vercel.json` line 299-303 | medium |
| T6 | `factory.png` is large (~700KB+ in `public/`) and `index.html` has `<link rel="preload" href="/atlantis.png">` — neither is the LCP element on most routes | `public/`, `index.html` line 30 | low |
| T7 | No `llms.txt` file — AI search referrals (chatgpt, copilot, gemini) already in GA4 referrers, will compound | site root | medium (growing channel) |
| T8 | Title length: home title is 88 chars, will truncate at ~60 in SERP. Several blog titles also >70 | `prerender.mjs` per-route titles | medium |
| T9 | No IndexNow integration for Bing/Yandex despite Bing being 39% of search traffic | site root + Vercel | medium |
| T10 | `dist/blog/eddy-current-testing/` may still exist as orphan HTML (the URL Google shows at pos 44 with 1,244 impr) — verify and either delete dist/ folder OR ensure 301 in vercel.json fires | `dist/blog/eddy-current-testing/` | high (1,244 wasted impressions/mo) |
| T11 | Singletons of `vite.config.ts.timestamp-*.mjs` (10 files) cluttering project root — not deployed but signals build-cache issue | project root | trivial |

---

## 6. Recommended action plan — 6 weeks, prioritized by ROI

### Week 1 — CTR rescue (estimated +200 clicks/month)

**P1.1 Rewrite titles + descriptions for top-15 zero-CTR pages.**
Edit `scripts/prerender.mjs` to inject specific titles/descriptions per slug. Targets:
- `/blog/cwi-certification-requirements-cost-career-impact` — Title: "CWI Certification 2026: Cost ($1,500), Pass Rate (60%), Salary ($75K)" — lead with hard numbers, drop "Atlantis NDT" suffix.
- `/blog/aerospace-composite-inspection-ndt-methods-guide` — Title: "Aerospace Composite Inspection: 7 NDT Methods (UT, IRT, Bond Tester) + When to Use Each"
- `/ndt-technician-salary` — Title: "NDT Technician Salary 2026: Level I $52K, Level II $68K, Level III $115K"
- `/blog/risk-based-inspection-rbi-implementation-guide` — Title: "Risk-Based Inspection (RBI): API 580/581 Step-by-Step + Free RBI Spreadsheet"
- `/asnt-certification` — Title: "ASNT Certification 2026: Cost, Requirements, Pass Rate by Method [Full Guide]" (current 65 chars, fine — but description needs price upfront)
- `/blog/ndt-salary-guide-2026-global` — Title: "NDT Salary 2026: Level I $45K-65K, Level II $55K-85K, Level III $80K-140K" (drop redundant brand)

**Pattern:** lead with year, hard numbers, brackets `[2026]` or `(60%)`. Drop `| Atlantis NDT` suffix on long titles. Remove "complete guide" filler — use specific count "7 methods", "12 steps".

**P1.2 Generate per-page OG images.** Build a script that renders title text over a branded template (e.g. `og-image-generator.mjs`). 925 images, one per page. Cache to `public/og/<slug>.png`. Update prerender to inject `og:image`.

**P1.3 Force 301 of `/blog/eddy-current-testing` (1,244 impr leak).**
- Verify `dist/blog/eddy-current-testing/index.html` exists; delete it if so.
- Confirm vercel.json line 264-267 redirect is firing (test in deployed env).
- Submit the OLD URL in GSC URL Inspection → Request Indexing to force re-crawl of the 301.
- Submit the NEW URL `/blog/eddy-current-testing-complete-guide` to refresh.

**P1.4 Drop the global keywords meta** OR generate per-page from blog.json tags. The duplicated keywords across 925 pages signals templated content.

---

### Week 2 — Bing + AI search (estimated +150 clicks/month)

**P2.1 Submit to Bing Webmaster Tools.** Verify both domains. Submit sitemap-index.xml. (Bing already 39% of your search — they're indexing despite no submission. Active submission = faster indexing of new pages.)

**P2.2 Implement IndexNow.** Add IndexNow API ping to `scripts/prerender.mjs` post-build. One-line POST per URL → Bing+Yandex index immediately on deploy. No quota.

**P2.3 Create `/llms.txt` and `/llms-full.txt`** at site root. Curated index of canonical pages with summaries — used by ChatGPT, Claude, Perplexity, Gemini for citation. ~200 lines, takes 1-2 hours. Likely to compound the existing AI referral traffic (~30 sessions/28d already, no effort spent).

**P2.4 Fix orphan dist/blog/ folders.** Either:
- Delete the 24 orphan dirs from `dist/` and re-deploy, OR
- Add corresponding entries to `blogs.json` if content is real.
The first is safer — they likely accumulated from removed/renamed posts.

---

### Week 3 — Content depth on already-indexed but buried pages

**P3.1 Cluster API-653 internal linking.** You have ~12 pages targeting API 653 variants (cert, training, study guide, practice questions, exam fees, tank inspection guide). The hub `/api-653-certification` ranks pos 16 for "api 653" (189 impr). Add 5-link contextual block to all 12 pages pointing to the hub + sibling pages. Add `BreadcrumbList` schema. Repeat for API 510 and API 570 hubs.

**P3.2 Build the missing "MFL pipeline inspection service" page.** Query has 192 impressions, you currently rank pos 42 (no dedicated page). Create `/services/mfl-pipeline-inspection`. Should be ~1,500 words, include schema (`Service` type), price range, areas served, link from `/services` index.

**P3.3 Eddy current testing consolidation.** Currently `/blog/eddy-current-testing-complete-guide` ranks pos 12 for "eddy current testing" with 238 impr. Push to top-10 by:
- Add 3 internal links from `/eddy-current-testing-{dubai,oman,kuwait}` city pages (already getting 2-3 clicks each with 100% CTR — they have intent).
- Add FAQ schema with 10 PAA-style questions.
- Add comparison table vs UT/MT.

**P3.4 Schema rotation.** Replace hardcoded review dates in Org schema with rolling logic. Either:
- Generate 5 fresh dates per build (last 6 months), OR
- Move reviews to Article-level schema on testimonials page only and drop sitewide reviews from Org schema (reduces structured-data risk).

---

### Week 4 — NDT-Connect resuscitation

**P4.1 Decide: merge or build.** My recommendation: **option B** (build, don't merge).

- Reasons: ndt-connect.com has the better keyword domain match for marketplace queries ("hire ndt inspector"), and merging risks confusing the dual-brand pitch.
- Tactic: 3-month focused outreach on 5 backlink targets — ndt.net forum, OneStopNDT, AsiaSEO directories, LinkedIn group cross-posts, and 1 paid placement on Inspectioneering ($1,500-3,000).

**P4.2 Submit ndt-connect.com via every available channel.**
- IndexNow on deploy (P2.2).
- Manually request indexing on top-25 pages via GSC URL Inspection (the cost-guide/houston page already proves the model works at pos 7.8).
- Bing Webmaster submission.

**P4.3 Add city-level cost guides for top-10 NDT cities** (same template as houston/ultrasonic-testing, which is your only winner). Houston, Dubai, Singapore, London, Mumbai, Hyderabad, Calgary, Sydney, Aberdeen, Riyadh.

---

### Week 5 — Geographic + commercial intent

**P5.1 India + Middle East content push.** GA4 shows India = #3 country (162 sessions) and UAE = #5 (30). GSC India = 44 clicks (#2). Underserved given the user base in Hyderabad office + India operations. Build:
- `/ndt-training-cities/<top-20-indian-cities>` — already partial coverage; finish.
- `/api-653-india`, `/api-570-india`, `/api-510-india` — pricing in INR, India-specific exam centers.

**P5.2 Commercial-intent landing pages.** Currently the consulting/training pages convert OK (`/contact` is #2 by GA4 page views = 94 sessions). Build comparison pages targeting bottom-funnel queries:
- `/compare/asnt-vs-pcn` (you already have a blog comparison — promote to landing page)
- `/compare/api-510-vs-api-570`
- `/compare/ndt-consulting-vs-in-house-team`

---

### Week 6 — Measurement + automation

**P6.1 Build a CTR delta dashboard.** Compare each page's actual CTR vs expected-by-position curve. Cron monthly via existing `scripts/full-audit.mjs`. Output → `scripts/ctr-bleeders-<month>.json`. Wire to Telegram bot in CLAUDE.md (chat ID 1712773246) for alerts.

**P6.2 GA4 → Search Console join.** You have credentials for both. Build `scripts/joined-attribution.mjs` that joins GSC query data with GA4 sessions/conversions per landing page. Identifies pages with high impressions but low engaged-session rate (= bad-intent traffic, candidates to noindex).

**P6.3 Set up Bing Webmaster Tools API pull** the same way you pull GSC. Bing's data is more generous on impression detail.

**P6.4 Schedule cleanup automation.** GoVisa satellite + Atlantis satellite sites have low-quality template pages. Run quarterly noindex sweep on pages with 0 clicks AND 0 impressions for 90 days.

---

## 7. Predicted impact

| Initiative | Effort | Expected uplift (clicks/mo) | Confidence |
|---|---|---:|---|
| Week 1 CTR rewrites | 1 day | +180 | High |
| Per-page OG images | 0.5 day | +20 | Med |
| Eddy-current 301 fix | 1 hr | +50 | High |
| Bing + IndexNow | 0.5 day | +100 | High |
| llms.txt | 2 hr | +30 | Med |
| API-653/570/510 cluster linking | 1 day | +60 | Med |
| MFL service page | 0.5 day | +15 | Med |
| ndt-connect cost guides ×10 | 2 days | +25 | Low (slow) |
| India/ME content | 3 days | +40 | Med |
| **Total realistic 60-day uplift** | ~10 days work | **+520 clicks/mo** | |

That takes atlantisndt.com from 353 → ~870 clicks/month. Compounding over 6 months (assuming new content also ranks): plausibly 1,500-2,000 clicks/month by end of 2026.

---

## 8. What I'm explicitly NOT recommending

- **More blog posts.** You have 200 already and 24 orphan HTML files in dist/. Quality + linking > quantity.
- **Backlink farms / PBNs.** ndt.net + OneStopNDT + 2-3 paid sponsorships > 100 spammy links.
- **Schema everywhere.** You already have Org + WebSite. Adding Article/HowTo/FAQ schema to 925 pages templated risks structured-data violations. Add only to top-30 commercial pages.
- **Killing satellite sites.** They're indexed and contributing. Don't disturb until 6+ months of zero performance.
- **Migrating off Vercel/React.** Vite + react-snap prerender is working. Stay.

---

## 9. Files / data referenced

- Fresh GSC data: `scripts/gsc-audit-2026-04.json` (1.4 MB, regenerated 2026-05-03)
- Fresh GA4 data: `scripts/ga4-audit-2026-04.json` (regenerated 2026-05-03)
- Indexing progress: `scripts/gsc-priority-progress.json`
- 10 GSC service account keys: `scripts/gsc-service-account-{1..10}.json` (~2,000 URLs/day quota)
- Tokens source: `E:\software\Atlantis\Tokens.docx`

## 10. First commit (do today)

The single highest-ROI 30 minutes:
1. Open `scripts/prerender.mjs`.
2. Find the title-injection logic.
3. Add per-slug overrides for the 10 pages in §2 (CTR bleeders) using the rewrites in P1.1.
4. Rebuild + deploy. Bing IndexNow ping after.
5. Manually re-submit those 10 URLs in GSC URL Inspection (use service account 1, has quota).

Expected: visible CTR delta in GSC within 7-14 days as Google re-crawls and cached snippets refresh.
