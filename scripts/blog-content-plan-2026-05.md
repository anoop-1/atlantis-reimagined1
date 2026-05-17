# Blog Content Plan — GSC-Driven, Additive Only

**Created:** 2026-05-17
**Source data:** `gsc-audit-2026-04.json` (90-day window 2026-02-05 → 2026-05-06)
**Hard rule:** All work is ADDITIVE. No existing blog post, landing page, slug, redirect, schema, or internal link is to be removed or replaced. New posts only. Existing post optimization is layered (new sections, new schema, new internal links) — never destructive.

---

## 1. Current state (snapshot)

| Site | 90d clicks | 90d impressions | Avg CTR | Indexed blog posts (from GSC) |
|------|-----------:|----------------:|--------:|------------------------------:|
| atlantisndt.com | 705 | 85,809 | 0.82% | 39+ |
| ndt-connect.com | 35 | 3,563 | 0.98% | live programmatic SEO pages |

**Headline diagnosis:** atlantisndt.com is shown for high-intent NDT certification queries on page 1–2 but the CTR is sub-1%. We have the impressions; we are losing the clicks to training companies, standards bodies, and Scribd PDFs because our pages are not optimised as direct-answer assets.

---

## 2. Top "we rank, we don't click" queries (atlantisndt 90d)

Sorted by impressions; position ≤ 10; CTR ≤ 3%; no dedicated post that owns the snippet.

| Query | Impr | Pos | CTR | Current page (if any) | Gap |
|-------|-----:|----:|----:|----------------------|-----|
| asnt certification | 325 | 8.6 | 0.6% | /asnt-certification | Hub LP, not a "what does ASNT cert mean / cost / get" answer post |
| api 510 exam pass rate | 60 | 4.7 | 3.3% | (none specific) | No dedicated pass-rate post |
| asnt level 3 exam fees | 51 | 5.0 | 0% | (none) | Scribd PDFs are winning — HTML vacuum |
| iso 9712 vs asnt | 19 | 3.2 | 5.3% | /blog/iso-9712-vs-asnt-snt-tc-1a-... | Already ranks — add comparison table + decision tree (additive) |
| cwi certification cost | 40 | 8.2 | 0% | /blog/cwi-certification-requirements-cost-career-impact (1,427 impr, 0 clicks) | Existing post not snippet-optimized. Layer new section + FAQ schema |
| api 570 exam schedule 2026 | 72 | 7.4 | 0% | (none) | No live 2026 schedule table |
| api 510 body of knowledge 2026 | 12 | 6.9 | 0% | (none) | No BoK-diff explainer |
| api 570 exam pass rate | 14 | 8.6 | 7.1% | (none) | Same gap as 510 |
| asnt level 3 renewal fees | 12 | 4.2 | 0% | (none) | ASNT itself doesn't publish $$ — open lane |
| cwi pass rate | 6 | 5.8 | 0% | (none) | Beat SI Certs with part-by-part breakdown |
| paut technician salary | 15 | 5.0 | 6.7% | /ndt-technician-salary (379 impr pos 5.3) | Salary hub exists — add PAUT-specific cluster post |
| api 653 exam pass rate | 10 | 3.5 | 20% | /blog/api-653-tank-inspection-guide (rel) | Working — duplicate playbook for 510 + 570 |

## 3. Top "we don't rank" high-impression queries

Position > 15, impressions ≥ 50, no targeting content.

| Query | Impr | Pos | Gap |
|-------|-----:|----:|-----|
| mfl pipeline inspection service | 315 | 41.2 | Zero dedicated MFL service/cost post |
| api 570 inspector salary | 24 | 17.4 | Generic NDT salary post mentions briefly |
| api 510 pressure vessel inspector | 121 | 42.4 | Hub page exists but doesn't target this phrase |
| boiler ndt preparation | 85 | 45.3 | No NDT-boiler post |
| api pressure vessel | 120 | 56.2 | Cross-link from /api-510-certification |
| paut technician salary in india | 12 | 9.0 | Geo cluster opportunity |

## 4. Competitor domains we lose to (count of top-5 appearances)

| Domain | Role |
|--------|------|
| api.org | Standards body (8x) |
| atlasapitraining.com | Training co (4x) |
| inspector-training.com | Training co (4x) |
| casti.ca | Training co Canada (4x) |
| sicerts.com / certification.asnt.org / aws.org | Standards + training (3x each) |
| petrosync.com, inspectioneering.com, mfe-is.com, ndtintel.com | Secondary recurring |

## 5. Winning snippet patterns (must ship with every new post)

- **HTML data table** in the first 400 words (member vs non-member, by method, YoY)
- **FAQ schema** (JSON-LD)
- **2,000–3,500 word long-form** when answering "format / pattern / pass rate / vs"
- **Side-by-side comparison table** for "X vs Y"
- **"Last updated [month] 2026" stamp** in `<time datetime>` + visible
- **Downloadable PDF mirror** for fee/BoK/schedule (Google currently ranks Scribd → reward PDF assets)

---

## 6. NEW blog posts to write (12 — additive)

All new files. New slugs. No existing post is to be edited destructively. Each post = self-contained, links INTO existing related posts (boost internal link equity to old content).

### Tier 1 — Snippet-bait, 0% CTR rescue (write first)

| # | Slug | Target query | Word target | Notes |
|---|------|--------------|------------:|-------|
| 1 | `/blog/api-icp-pass-rates-510-vs-570-vs-653-2026` | api 510/570/653 exam pass rate | 2,200 | Pillar post: data table, first-time vs overall, retake stats, FAQ schema, PDF download |
| 2 | `/blog/asnt-level-3-fees-2026-complete-pricing-table` | asnt level 3 exam fees / renewal fees | 1,800 | Dense table member vs non-member × method; recert pricing matrix; FAQ schema |
| 3 | `/blog/api-510-570-653-exam-schedule-2026` | api 5xx exam schedule 2026 | 1,500 | Live table: window / application deadline / exam date / result; deep-link to Prometric |
| 4 | `/blog/api-510-body-of-knowledge-2026-changes-explained` | api 510 body of knowledge 2026 | 2,000 | Diff vs prior edition; what's new; topic weights table |
| 5 | `/blog/cwi-exam-cost-2026-total-investment-calculator` | cwi certification cost | 1,800 | TCO calculator: exam+seminar+retake+renewal × 9-yr career. Beats AWS PDF |
| 6 | `/blog/cwi-pass-rate-by-part-a-b-c-breakdown` | cwi pass rate | 1,600 | Beats SI Certs by splitting Part A/B/C with retake data |

### Tier 2 — Buyer-intent + salary clusters

| # | Slug | Target query | Word target | Notes |
|---|------|--------------|------------:|-------|
| 7 | `/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut` | mfl pipeline inspection service | 2,500 | Buyer-intent: cost ranges, top vendors, MFL vs UT ILI decision matrix |
| 8 | `/blog/paut-technician-salary-2026-region-cert-industry` | paut technician salary | 1,800 | Heat-map table: US / Gulf / India × L2 vs L3 × O&G/aero/nuclear |
| 9 | `/blog/api-570-inspector-salary-2026-by-region-experience` | api 570 inspector salary | 1,600 | Same playbook scoped to API 570 holders |
| 10 | `/blog/ndt-inspection-cost-2026-by-method-pricing-matrix` | ndt inspection cost (NDT Connect primary, atlantisndt cross-post) | 2,200 | Method × geography pricing matrix; beats NDTIntel state-only table |

### Tier 3 — Standards-confusion plays (high authority signal)

| # | Slug | Target query | Word target | Notes |
|---|------|--------------|------------:|-------|
| 11 | `/blog/api-653-current-edition-2026-vs-bok-window-explained` | api 653 latest edition 2026 | 1,500 | Resolves "5th Ed still effective vs Mar 2026 BoK window" confusion |
| 12 | `/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country` | iso 9712 vs asnt | 2,000 | Decision tree: country/employer/portability → which cert. Companion to existing comparison post (linked, not replaced) |

---

## 7. Additive optimization of EXISTING posts (no removals)

These edits are layered: add a section, add schema, add an internal link. Do NOT shorten, retitle, or restructure the existing post body.

| Existing URL | Add | Why |
|--------------|-----|-----|
| /asnt-certification (pos 8.6, 5,295 impr, 0.5% CTR) | Add FAQPage schema; add "ASNT cost & timeline" table at top | Highest impression bleeder |
| /api-510-certification (pos 19.7, 2,499 impr) | Add internal link to new pass-rate + schedule + BoK posts | Hub gets topical density boost |
| /api-570-certification (pos 12.5, 2,797 impr) | Same — internal links to new schedule/pass-rate posts | |
| /api-653-certification (pos 19.6, 3,088 impr) | Same — internal links to new edition + pass-rate posts | |
| /blog/cwi-certification-requirements-cost-career-impact (1,427 impr, 0 clicks) | Add new bottom section "How CWI cost has changed in 2026" + FAQ schema + internal link to new cost-calculator post. Existing body untouched. | Title-tag rewrite candidate (separate task) |
| /ndt-technician-salary (379 impr, pos 5.3, 0% CTR) | Add region+cert salary table; FAQ schema; internal link to new PAUT salary post | |
| /blog/iso-9712-vs-asnt-snt-tc-1a-... (779 impr, 4.6 pos, 2.2% CTR) | Add 12-row comparison table + decision flowchart embed; internal link to new "by country" post | Companion, not replacement |

---

## 8. Schema + technical adds (per post + site-wide)

- Every new post: `Article` + `FAQPage` JSON-LD. No duplicate FAQ schema (the 2026-05-08 inspection found duplicate FAQPage errors — keep one per page).
- `BreadcrumbList` schema on `/blog/*` URLs (already present? verify; if present don't duplicate).
- `datePublished` + `dateModified` in head; visible "Last updated" string.
- Each post: 1 downloadable PDF mirror (study-guide PDF) hosted at `/downloads/<slug>.pdf` — Indexing API submitted alongside the post.
- Submit all new URLs via existing `gsc-submit-priority.mjs` Tier 1 batch on launch day.

## 9. Internal linking plan (additive)

- Each new Tier-1 post links **into** the existing `/api-510-certification`, `/api-570-certification`, `/api-653-certification`, `/asnt-certification` hub LPs (boost their authority).
- Each existing hub LP gets a "Latest from the blog" block APPENDED at bottom (one-line `<Edit>`-style insert) listing the new posts. Existing body unchanged.
- New posts link to each other in cluster: pass-rate ↔ schedule ↔ BoK ↔ cost.

## 10. Publish cadence (suggested)

- Week 1 (now): Posts #1, #2, #3 (the zero-CTR rescue trio)
- Week 2: Posts #4, #5, #6
- Week 3: Posts #7, #8, #9, #10
- Week 4: Posts #11, #12 + all additive optimizations
- After each push: `node scripts/gsc-submit-priority.mjs` → new URLs in Tier 1 queue.

---

## 11. Success metrics (re-pull GSC audit in 30 + 60 days)

- Target: lift atlantisndt 90d CTR from 0.82% → 1.5% (+85%)
- Target: 6 new posts ranking page-1 within 60 days
- Target: zero `[COVERED?]` Tier-1 queries with 0% CTR

## 12. Hard constraint (memory)

Per `[[feedback-no-undo-prior-work]]`: nothing in this plan deletes, replaces, retitles, or redirects an existing URL. Every action is "add a file" or "append a section / schema / link". If a competing approach is suggested that would remove or rewrite existing content, reject it.
