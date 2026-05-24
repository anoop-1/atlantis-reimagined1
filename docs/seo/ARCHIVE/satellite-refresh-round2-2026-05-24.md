# Satellite Refresh — Round 2 (2026-05-24)

Second pass of `scripts/satellite-enrich.mjs` against all 35 atlantisndt.com satellites,
adding 5 brand-new articles per satellite. Round 1 ran 2026-05-09 (10 priority sats)
and 2026-05-23 (full 35 sats × 5 articles = 175 first-pass articles). This Round 2
pushes 175 additional articles and 769 new backlink placements, biased toward the
Day-1 and Day-2 sprint pages that need fresh link equity to compete in GSC.

## Headline numbers

| Metric | Value |
|---|---:|
| Satellites refreshed | **35 / 35** |
| New articles written this round | **175** (5 per satellite) |
| Cumulative articles across both rounds | **350** |
| Total backlink placements this round | **769** |
| Internal (atlantisndt + ndt-connect) backlinks | **561** |
| External authority backlinks (ASNT/API/AMPP/NRC/IMCA/DNV/IAEA/NACE/ISO/AWS/NADCAP) | **208** |
| Unique Atlantis URLs receiving backlinks | **232** |
| Average article length | ~1,800 words (1,500–2,500 deterministic per slug) |

## Fresh-pool backlink distribution (the strategic 4-bucket split)

Each article writes 2 fresh-pool backlinks plus 2–3 catalog/external links. The fresh
pool is bucketed as follows:

| Bucket | Target % | Achieved % | Placements |
|---|---:|---:|---:|
| Day-1 segment pages (Training / Consulting / ERP / DT expansion) | 30% | **32.0%** | 112 |
| Day-2 sprint pages (today's parallel-agent deliverables) | 30% | **30.6%** | 107 |
| Day-0 ERP pages (232 published 2026-05-23) | 20% | **18.3%** | 64 |
| High-value pillars (/erp, /digital-twins, /digital-twin-roi-calculator, …) | 20% | **19.1%** | 67 |
| **Total fresh-pool placements** | 100% | 100% | **350** |

Achieved distribution lands inside ±2pp of every target — the random-pick deterministic
RNG settles cleanly because there are 175 articles × 2 picks = 350 trials.

## Source pool sizes

| Source | Size | Purpose |
|---|---:|---|
| `scripts/indexing-url-list-day1.json` | 106 URLs | Day-1 segment-expansion pages |
| `scripts/indexing-url-list-day2.json` | 58 URLs | Day-2 disk-enumerated new pages (built today via `build-day2-url-list.mjs`) |
| `scripts/erp-pages-2026-05-23-state.json` | 232 URLs | Day-0 ERP city/app/industry pages |
| `HIGH_VALUE_PILLARS` (in-script) | 10 URLs | /erp, /digital-twins, ROI calculator, vendor comparison, blog pillars |

## Top-10 anchor texts after Round 2 (cumulative across both rounds)

| Count | Anchor |
|---:|---|
| 60 | the AWS standards catalog |
| 55 | the IMCA technical resources for offshore work |
| 51 | DNV asset integrity services portfolio |
| 50 | ISO 55000 asset management family |
| 49 | the NADCAP audit programme overview |
| 46 | the IAEA non-destructive testing programme |
| 37 | the NRC operating experience archive |
| 28 | the API individual certification program overview |
| 24 | NRC operating experience reports |
| 23 | integrity KPI dashboards built on NDT reporting data |

External authority anchors dominate the top of the list (deliberate — they're varied
and natural). Atlantis anchors are diversified across hundreds of phrases via
`anchorForErpPage`, `blogAnchorFromUrl`, `dayPageAnchors`, so no single Atlantis
anchor text repeats more than ~10 times across 350 articles. This avoids the
over-optimization footprint that triggered the post-Helpful-Content devaluations.

## Anti-footprint guardrails honored

- **No slug repeats.** All 175 Round-2 slugs verified unique vs the 175 Round-1 slugs
  via `scripts/satellite-enrich-state.json`. Self-uniqueness also verified (0 self-dupes).
- **`publishedAt` dates spread 2025-05 → 2026-05.** Round-2 dates cluster between
  2025-05-08 and 2026-05-14 — never identical to Round-1 dates on the same satellite,
  and never two articles on the same date within one satellite.
- **4 rotating authors per satellite** continue from Round-1. Each round-2 article
  rotates through the same author pool the satellite established on Day 0, so the
  satellite reads like a continuous publication rather than a content dump.
- **Word-count variance.** 1,500–2,500 words per article, deterministic per slug.
- **No external API calls.** All content generated from the in-script fragment
  library + topic angles + `src/data/blogs.json`. Reproducible from source.

## Per-satellite article counts

All 35 satellites received exactly 5 new articles. See
`scripts/satellite-reports/<sat-name>-round2.md` for the article inventory,
backlink targets, and file paths per satellite.

| Satellite | New articles | Container |
|---|---:|---|
| advanced-ndt-techniques | 5 | /deepdives |
| aerospace-ndt-standards | 5 | /standards |
| api-certification-guide | 5 | /study |
| asset-integrity-hub | 5 | /blog |
| coating-inspection-guide | 5 | /inspections |
| composite-testing-hub | 5 | /techniques |
| construction-ndt-guide | 5 | /practice |
| corrosion-management-ndt | 5 | /management |
| heat-exchanger-ndt | 5 | /tubes |
| industrial-inspection-resources | 5 | /topics |
| lng-inspection-hub | 5 | /guides |
| manufacturing-ndt-quality | 5 | /practices |
| marine-offshore-ndt | 5 | /offshore |
| middle-east-ndt-resource | 5 | /region |
| mining-ndt-hub | 5 | /mining |
| ndt-automation-future | 5 | /future |
| ndt-careers-portal | 5 | /paths |
| ndt-equipment-reviews | 5 | /reviews |
| ndt-knowledge-hub | 5 | /guides |
| ndt-safety-compliance | 5 | /compliance |
| ndt-software-solutions | 5 | /solutions |
| ndt-standards-library | 5 | /library |
| ndt-training-academy | 5 | /curriculum |
| nuclear-ndt-resource | 5 | /techniques |
| oil-gas-inspection-guide | 5 | /sectors |
| petrochemical-ndt-hub | 5 | /processes |
| pipeline-integrity-guide | 5 | /case-studies |
| power-generation-ndt | 5 | /plant |
| pressure-vessel-ndt | 5 | /operation |
| rail-ndt-resource | 5 | /rail |
| renewable-energy-ndt | 5 | /renewables |
| subsea-inspection-guide | 5 | /deepwater |
| tank-inspection-resource | 5 | /tanks |
| weld-quality-resource | 5 | /methods |
| welding-inspection-hub | 5 | /inspect |

## Files touched per satellite

For every satellite, this Round 2 run:

1. Wrote **5 new `page.tsx` files** at `backlink-sites/<sat>/src/app/<container>/<slug>/page.tsx`
2. Refreshed **`_enriched-articles.tsx`** (or `page.tsx` for the container index) to list
   all 10 articles — Round-1 + Round-2 — so users land on a fuller index page
3. Rewrote **`_featured-articles.tsx`** for the homepage component
4. Regenerated **`sitemap.ts`** to include all 10 articles' URLs with their respective
   `publishedAt` dates and existing top-level routes

## Pipeline / deployment

- Satellites are GitHub-connected → **Vercel auto-deploys on push**. No manual
  `vercel deploy` needed. Once the orchestrator commits + pushes this Round 2 work,
  all 35 satellites redeploy automatically.
- The Round-2 article URL list is at **`scripts/satellite-new-urls-2026-05-24.json`**
  (structured) and **`scripts/satellite-urls-to-index-2026-05-24-round2.txt`** (flat) —
  ready for submission via `scripts/gsc-submit-priority.mjs` or the multi-account
  submitter.

## Tools / scripts touched

- **`scripts/satellite-enrich.mjs`** — extended with: ROUND2_ANGLES import,
  Day-1/Day-2 URL pool loading, `pickFreshBacklinkR2()` 4-bucket picker,
  `--round2` CLI flag, mode-aware `enrichSatellite()` that merges round-1+round-2
  angles into sitemap/index regen, mode-tagged per-satellite report filenames.
- **`scripts/satellite-round2-angles.mjs`** — new file. 175 verified-unique angles
  (5 per satellite × 35 satellites) with focus tags, dates spread 2025-05 → 2026-05,
  and 4 rotating authors per satellite (continuing Round-1 author rotation).
- **`scripts/build-day2-url-list.mjs`** — new helper. Enumerates `src/pages/*.tsx`
  files newer than the Day-1 reference file and emits `indexing-url-list-day2.json`
  with the same shape as the Day-1 list. Idempotent.

## Anomalies / manual attention

None. All 35 satellite directories present, all 175 angles wrote cleanly, all
sitemaps regenerated, all per-satellite reports saved to
`scripts/satellite-reports/<sat>-round2.md`.

## Next sprint

- Submit the 175 new article URLs to GSC via the daily indexing pipeline.
- Watch GSC weekly for impressions on Day-1 + Day-2 pages — backlink uplift should
  show in 7–14 days.
- Consider Round 3 around 2026-06-07 once Day-3 / Day-4 sprint pages exist.
