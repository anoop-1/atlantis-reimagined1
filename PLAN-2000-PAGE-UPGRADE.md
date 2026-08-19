# The 2,000-page upgrade programme

Planned 2026-08-19, on owner direction: ~2,000 pages of high-quality content across the
thin pages and low-traffic products and services.

## The strategic choice this plan makes

**Upgrade existing URLs; do not mint 2,000 new ones.** The site carries ~5,650 routes of
which 2,446 are unindexed and 116 produce 80% of clicks. Two thousand *new* URLs would feed
the unindexed pile and split crawl budget further — the exact measured failure of the
permutation era (ERP: 727 pages, 0.06 clicks/page). Two thousand *upgraded* URLs inherit
their existing index history, positions and internal links, and lift the yield of what
Google already knows.

Every upgraded page receives the citation layer that is already proven through the
pipeline: a 40-70 word answer block, a captioned decomposition table, six question-form
facets, a named authority, and the reviewer byline — emitted into the **static HTML**,
because React never reaches crawlers here.

## Two production lines, because 2,000 agent-written pages is neither feasible nor needed

**Line A — agent prose** for pages with demonstrated individual demand. An agent reads the
built page and writes a bespoke layer against its actual queries. Cost: ~10-15 pages per
workflow batch. Reserved for pages that earn it.

**Line B — template + data** for the families. The structured data already exists:

| Data store | Size | Feeds |
|---|---|---|
| `src/data/city-profiles.ts` | 299 KB — `localIndustryUseCases`, `localCompliance`, `faqs` per city | consulting + service city pages |
| `src/data/training-cities.ts` | 252 KB — per-level cert/experience data per city | training city pages |
| `src/data/expanded-cities.ts` | 263 KB — `industries`, `companies`, `industrialProfile` | demand-map tables everywhere |
| `src/data/erp-*-knowledge.ts` | module/industry maps | ERP family |
| `src/data/dt-city-data.ts` | per-city DT context | DT family |

A prerender pass renders each family's citation layer from this data — one pass upgrades
hundreds of pages, and the per-city table is *genuinely different per city* because the data
is. This is the same mechanism that beat the salary aggregators, applied at family scale:
segment where the incumbent publishes nothing at all.

## Tranches, in execution order

| # | Cohort | Pages | Line | Evidence gate to proceed |
|---|---|---|---|---|
| T1 | Top-click cohort remainder | 47 | A | in progress (70/116 done) |
| T2 | Mid-tail: 20-149 impressions, zero clicks | 275 | A | T1 complete |
| T3 | Glossary ≥60 impressions + continuing blogs | ~165 | A | rolling |
| T4 | Training cities | 191 | B | template pass passes the lint gate on a 20-page sample |
| T5 | Consulting cities | 151 | B | T4 verified in dist |
| T6 | ERP + Digital Twin families | ~837 | B | T4/T5 measured post-deploy: impressions moving on ≥10% of upgraded pages within 4 weeks |
| T7 | Noindexed method-city family | ~195 | B | layering auto-un-noindexes them (the prune exempts citation pages) — gated on T6's evidence |
| | **Total** | **~1,861** + rolling blogs ≈ **2,000** | | |

## Quality gates — non-negotiable, all already built

1. `build-citation-layers.mjs` / `build-depth-pages.mjs` REJECT anything failing the spec.
   Markdown sanitised before validation.
2. `lint-citation-spec.mjs` audits the built HTML on every build.
3. `preflight.mjs` (10 checks) before any push — pricing policy, personal email, H1
   integrity, sitemap coverage, orphan detection.
4. Template layers are sampled per family: 20 built pages hand-audited before the family
   ships. A template bug at family scale is 800 broken pages, so the sample gate is the
   whole game for Line B.
5. Tranche N+1 proceeds only on Tranche N's evidence (kpi-weekly + GSC). If T4/T5 move
   nothing in 4 weeks post-deploy, T6/T7 do not run on hope.

## Why sequencing is demand-first

Impressions are the queue. T1/T2 hold pages Google already shows to people (the mid-tail
alone holds 275 pages × 20-149 impressions each with zero clicks — recoverable demand,
already ranked). The families (T4-T7) are larger but each page has thinner individual
demand, so they run on the cheap line and only after the expensive line's targets are done.

## What this does NOT do

- No new permutation URLs. The freeze stands; this plan is the opposite of it.
- No page is deleted, noindexed or redirected. Additive throughout.
- No invented figures. A template layer states what the data store knows; where a field is
  empty the block says less rather than padding.

## Capacity honesty

Line A at current validated throughput: ~30-40 pages/day of agent prose (session limits
permitting — two batches died to limits this week; resume with `resumeFromRunId`).
T1+T2+T3 ≈ 490 pages ≈ 2-3 weeks of batching.
Line B: each family pass is 1-2 days to build + sample-audit, then covers its whole family
in one build. T4-T7 ≈ 2 weeks of engineering.
**Whole programme: 4-6 weeks to built-and-verified, gated at each tranche.** Deploy cadence
is the owner's: push after each tranche or batch them.
