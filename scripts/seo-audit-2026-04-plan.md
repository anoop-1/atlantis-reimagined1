# Atlantis NDT — SEO Audit & Phased Execution Plan
**Date:** 2026-04-22
**Mandate:** Make Atlantis the top-3 global result for *NDT consulting, NDT training, digital twin NDT, NDT reporting software, NDT ERP* — no matter where the query is run.

## Where we are (numbers)

**atlantisndt.com (28d, GSC):** 252 clicks · 36,812 impr · 0.68% CTR · avg pos 16.9 · 977 pages indexed · 1,502 ranking queries.
**90d trend:** +128.7% clicks/day, +209.3% impressions/day vs prior 62d — indexing pipeline + Soft 404 + noindex fixes are compounding.
**GA4 28d:** 296 sessions / 270 users / 66s avg session / 137 engaged sessions.
**ndt-connect.com (28d, GSC):** 19 clicks · 1,991 impr — distant second, needs content + backlinks.

**The single biggest finding:** ranking is not the blocker — CTR is. 29 of top-30 queries ranked with zero clicks. 39 queries rank pos ≤10 with ≥10 impressions and zero clicks. Five head-term queries rank top-3 with zero clicks, which is almost entirely a title+meta failure.

## The five real problems

1. **CTR collapse at good ranks.** `asnt snt-tc-1a` (pos 1.0), `api 653 exam fees` (pos 2.4), `miami ndt hazardous waste` (pos 2.4), `wfmt inspection` (pos 2.7), `api 570 certification` (pos 2.8) — all zero clicks. The title or description isn't matching the query intent on the desktop SERP.
2. **Head terms routed to the wrong page.** "ndt consulting" lands on `/ndt-consulting-louisiana` at pos 63. "ndt training" lands on `/ndt-training-chicago` at pos 62. "ultrasonic testing" lands on `/blog/ultrasonic-testing` at pos 63. The city/blog pages are outranking the hubs — an internal-link problem.
3. **Pillar content voids.** NDT ERP: **0 impressions.** Digital Twin NDT: **4 impressions.** NDT Reporting: 14 impressions. Top-3 globally on those terms is impossible without substantial content.
4. **USA desktop CTR crisis.** 27,074 desktop impressions at 0.55% CTR vs mobile 6,894 at 1.44% CTR. USA: 15,959 impr · 0.31% CTR. Mobile converts 2.6× desktop — desktop is where we bleed clicks.
5. **Silence at scale.** 433 of 977 pages (44%) earned <5 impressions in 28d. 149 of those are thin method×city combos cannibalizing each other. Crawl budget is being wasted on pages that will never rank.

## Competitor landscape (5 pillars)

- **Nobody uses `Course`, `SoftwareApplication`, `FAQPage`, `Review`, `HowTo`, or `Person` schema well.** Schema is free rich-snippet territory sitting unclaimed.
- **Nobody publishes pricing.** Everyone hides behind "book a demo." A pricing page is a bottom-funnel wedge.
- **No interactive tools.** Zero calculators, decision trees, live demos, comparison matrices across all 15 top-ranking competitor pages.
- **FAQ sections seldom use schema** even when the visible FAQ is there.
- **No named Level-III E-E-A-T pages.** Nobody shows the actual certified expert with cert number, years, publications.

Priority order for content build: **Digital Twin (biggest gap, weakest competition) → Reporting Software (schema win) → ERP (ROI calculator wedge) → Consulting (E-E-A-T) → Training (hardest, ASNT dominates long tail only).**

---

## The plan — 6 phases, shippable today

### Phase A — Meta + Schema CTR Sprint (biggest single lever)
**Est. lift: +100–150 clicks/mo within 30 days of re-crawl.**

1. Rewrite title + meta-description on the 10 highest-impression zero-click pages, targeting desktop preview (60 char title / 155 char meta) with a number, year, and intent-match hook:
   - `/asnt-certification` — "asnt snt-tc-1a", "asnt certification" (pos 1–8)
   - `/api-570-certification` — pos 2.8, zero clicks on 137 impr
   - `/api-653-certification` — "exam fees", "cost" (pos 2.3–11)
   - `/api-510-certification` — "pass rate" (pos 4.4)
   - `/blog/cwi-certification-requirements-cost-career-impact` — 844 impr / pos 6.5 / zero clicks
   - `/blog/magnetic-particle-testing` — "wfmt inspection" (pos 2.7)
   - `/industry/oil-gas-ndt-miami` — "miami ndt hazardous waste" (pos 2.4)
   - `/blog/ut-vs-rt-comparison` — "rt vs ut", "rt vs ut weld" (pos 4–9)
   - `/consulting/ndt-consulting-level-iii` — 122 impr / pos 5.6 / zero clicks
   - `/blog/aerospace-composite-inspection-ndt-methods-guide` — 304 impr / pos 9.1

2. Add `FAQPage` schema on all 5 pillar hubs covering the 25 PAA questions from the competitor audit. This alone can unlock People-Also-Ask panel capture for every pillar.

3. Add `Course` schema to all training pages (`api-510-training`, `api-570-training`, `api-653-training`, `asnt-level-iii-training`, `aerospace-ndt-training`) with `price`, `priceCurrency`, `courseWorkload`, `provider`, `hasCourseInstance.location`.

4. Add `SoftwareApplication` + `AggregateRating` + `Offer` schema triple on `/digital-twins`, `/ndt-connect`, `/ndt-erp-solution`, `/best-ndt-reporting-software-2026`. The competitor scan found **zero** competitors combining these — instant rich-result eligibility.

### Phase B — Head-term rerouting (structural)

5. Build a real `/ndt-training` hub page (method × level matrix: UT/RT/MT/PT/VT/ECT × L1/L2/L3; PAUT, TOFD as specialties) with internal links **into** city pages (not from). Target the head term "ndt training" (currently lost to `/ndt-training-chicago`).

6. Rewire `/consulting` to own "ndt consulting". Every `ndt-consulting-<city/state>` page already links to regional hubs — add an explicit "Back to NDT Consulting" breadcrumb-first link pointing to `/consulting`.

7. Add a proper `/ultrasonic-testing` service hub (currently `/blog/ultrasonic-testing` outranks the service). Same for `/magnetic-particle-testing`, `/eddy-current-testing`, `/radiographic-testing`.

### Phase C — Pillar depth (greenfield where it's needed)

8. **Digital Twin cluster** (greenfield, 6 cornerstone pieces):
   - `/digital-twins-ndt-guide-2026` — pillar piece, 3,500 words, HowTo + FAQ schema
   - `/digital-twin-vs-3d-model-ndt` — answers PAA #3
   - `/digital-twin-roi-calculator` — interactive calculator (link magnet)
   - `/digital-twin-readiness-quiz` — 10-question quiz → maturity score
   - `/digital-twin-vendor-comparison` — Antea vs Mistras vs Hexagon vs Bentley vs Atlantis matrix
   - `/digital-twin-api-510-570-580-mapping` — regulatory code walk-through

9. **NDT ERP cluster** (greenfield, 4 pieces):
   - `/ndt-erp-vs-generic-erp` — owns "what is NDT ERP?"
   - `/ndt-erp-integration-matrix` — SAP / Oracle / Maximo / QuickBooks / Xero logos + spec sheets
   - `/ndt-erp-roi-calculator` — inputs: # techs, # jobs/month → $ saved
   - `/ndt-erp-implementation-timeline` — 30/60/90-day go-live plan

10. **Reporting Software** (depth on existing):
   - Add sample PDF report gallery (UT, RT, MT per API/ASME code) to `/best-ndt-reporting-software-2026`
   - Add Atlantis-vs-Floodlight, Atlantis-vs-DRIVE, Atlantis-vs-RDT comparison pages
   - Add public pricing page (tiered starting prices)

### Phase D — Internal-linking overhaul

11. Every `ndt-consulting-<city>` → prominent link to `/consulting`. Every `*-testing-<city>` → prominent link to `/services/<method>`. Every `digital-twin-<city>` → `/digital-twins`. This is a programmatic component edit, not 300 manual page changes.

12. Link the 40 orphan blog posts from already-ranking guides: `ndt-salary-guide-2026-global`, `ut-vs-rt-comparison`, `api-653-tank-inspection-guide`.

13. Consolidate 149 thin method×city silent pages. Strategy: keep the top 20 cities per method based on 28d-impr; 301-redirect the other 129 to the method hub (`/ultrasonic-testing`, `/magnetic-particle-testing`, etc.).

### Phase E — Localization + geo expansion

14. Spanish (ESP+MEX = 568 impr, 0% CTR) and Portuguese (BRA 750 impr, 0.27% CTR) are the biggest leaks — ranks are there, language is wrong. Ship pillar pages in `es`, `pt`, `de`, `ko`, `zh-CN` with proper `hreflang` alternates starting from the 10 highest-impression pages.

### Phase F — Technical hardening + ship

15. Build, prerender, validate sitemap, verify no duplicate content via Levenshtein spot-check, commit, push to main. Vercel auto-deploys. Submit changed URLs via existing Indexing API pipeline (`gsc-submit-priority.mjs`).

---

## Execution order for this session

Phase A → Phase B → Phase D (programmatic) → Phase C (parallel agents) → Phase F (ship). Phase E is queued for a follow-up session because localized content needs translation review.
