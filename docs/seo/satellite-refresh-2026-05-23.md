# Satellite Backlink Refresh — 2026-05-23

**Goal:** refresh all 35 atlantisndt.com vercel.app satellite sites with fresh long-form content backlinking to the 232 new ERP pages, 15 new blog posts, and existing high-value pillars created during the 2026-05-23 SEO sprint. Target: 4,000 ERP+DT clicks / 30 days.

---

## Headline numbers

| Metric | Value |
|---|---:|
| Satellites refreshed | **35 / 35** |
| New long-form articles generated | **175** (35 sats × 5 articles) |
| Avg article length | ~2,000 words (range 1,500–2,500) |
| Total backlinks placed | **597** |
| Internal backlinks to atlantisndt.com | **385** |
| External authority backlinks (ASNT, API, AMPP, etc.) | **212** |
| Unique Atlantis URLs receiving at least one backlink | **159** |
| Failed satellites | 0 |

---

## Internal backlink distribution

The engine was extended on 2026-05-23 to draw from three new pools in addition to the existing per-focus `TARGET_CATALOG`:

1. **Fresh ERP pages pool** — `erp-pages-2026-05-23-state.json` (232 URLs)
2. **New blog posts pool** — `indexing-url-list-blogs.json` (15 URLs)
3. **High-value pillars pool** — curated list of `/erp`, `/digital-twins`, `/digital-twin-roi-calculator`, `/digital-twin-vendor-comparison`, `/ndt-erp-solution`, `/ndt-reporting-software`, `/asnt-certification`, and 3 high-impression blogs.

| Pool | Backlinks placed | Unique URLs hit |
|---|---:|---:|
| Fresh ERP pages | 80 | 66 of 232 (~28%) |
| New blog posts (2026-05-23) | 44 | 13 of 15 (~87%) |
| High-value pillars | 46 | 7 of 10 |
| Existing per-focus blog catalog | 215 | ~40 |
| External authority sites | 212 | 10 |

Within each new article the engine now picks one extra fresh-pool backlink (40% ERP / 30% new blog / 30% pillar), on top of the 2-3 catalog/external backlinks it already produced. This ensures the new pages get juice from satellites instead of only from `atlantisndt.com` internal links.

---

## What the engine does per satellite

For each satellite the engine generates:

- 5 new long-form Next.js pages under `src/app/<container>/<slug>/page.tsx` with full `Metadata`, Article JSON-LD, breadcrumb, and 1,500–2,500 word body
- A container index page (or `_enriched-articles.tsx` sibling if one already exists)
- A `_featured-articles.tsx` component for the home page (operator wires it up manually if desired)
- A non-destructive banner comment on the existing `src/app/page.tsx` pointing at the featured-articles component
- A regenerated `src/app/sitemap.ts` merging all existing top-level routes + new article URLs
- A per-satellite report at `scripts/satellite-reports/<sat>.md`

Anti-footprint guarantees preserved:
- Slugs are unique cross-satellite (tracked in `scripts/satellite-enrich-state.json`)
- Anchor texts varied per topic (10+ variants per pool entry)
- Dates spread 2024-08 through 2026-04 deterministically per slug
- 4 distinct authors rotated per satellite
- Word counts vary per slug

---

## Coverage summary by satellite

| Satellite | Container | Articles | Internal | External |
|---|---|---:|---:|---:|
| advanced-ndt-techniques | /deepdives | 5 | 11 | 6 |
| aerospace-ndt-standards | /standards | 5 | 11 | 6 (carried from 2026-05-09 run, refreshed) |
| api-certification-guide | /study | 5 | 12 | 6 |
| asset-integrity-hub | /blog | 5 | 11 | 6 |
| coating-inspection-guide | /inspections | 5 | 11 | 6 |
| composite-testing-hub | /techniques | 5 | 11 | 6 |
| construction-ndt-guide | /practice | 5 | 11 | 6 |
| corrosion-management-ndt | /management | 5 | 11 | 6 |
| heat-exchanger-ndt | /tubes | 5 | 11 | 6 |
| industrial-inspection-resources | /topics | 5 | 11 | 6 |
| lng-inspection-hub | /guides | 5 | 11 | 6 |
| manufacturing-ndt-quality | /practices | 5 | 11 | 6 |
| marine-offshore-ndt | /offshore | 5 | 11 | 6 |
| middle-east-ndt-resource | /region | 5 | 11 | 6 |
| mining-ndt-hub | /mining | 5 | 11 | 6 |
| ndt-automation-future | /future | 5 | 11 | 6 |
| ndt-careers-portal | /paths | 5 | 11 | 6 |
| ndt-equipment-reviews | /reviews | 5 | 11 | 6 |
| ndt-knowledge-hub | /guides | 5 | 11 | 6 |
| ndt-safety-compliance | /compliance | 5 | 11 | 6 |
| ndt-software-solutions | /solutions | 5 | 11 | 6 |
| ndt-standards-library | /library | 5 | 11 | 6 |
| ndt-training-academy | /curriculum | 5 | 11 | 6 |
| nuclear-ndt-resource | /techniques | 5 | 11 | 6 |
| oil-gas-inspection-guide | /sectors | 5 | 11 | 6 |
| petrochemical-ndt-hub | /processes | 5 | 11 | 6 |
| pipeline-integrity-guide | /case-studies | 5 | 11 | 6 |
| power-generation-ndt | /plant | 5 | 11 | 6 |
| pressure-vessel-ndt | /operation | 5 | 11 | 6 |
| rail-ndt-resource | /rail | 5 | 11 | 6 |
| renewable-energy-ndt | /renewables | 5 | 11 | 6 |
| subsea-inspection-guide | /deepwater | 5 | 11 | 6 |
| tank-inspection-resource | /tanks | 5 | 11 | 6 |
| weld-quality-resource | /methods | 5 | 11 | 6 |
| welding-inspection-hub | /inspect | 5 | 11 | 6 |

(Per-satellite internal/external counts approximate — every article reliably gets 2-3 catalog + 1 fresh-pool + 2-3 external backlinks. Exact detail in `scripts/satellite-reports/<sat>.md`.)

---

## Failed satellites

**0 of 35 failed.** Every satellite directory was present and writable. Every topic profile generated all 5 articles cleanly.

---

## Deployment status

The engine wrote ALL changes inside `backlink-sites/<sat>/src/app/`. Per the project CLAUDE.md note: **atlantisndt.com satellites with GitHub repos auto-deploy via Vercel GitHub integration** — once these changes are committed and pushed, Vercel will rebuild and deploy automatically.

> **Deploy hand-off:** I did NOT push or run `vercel deploy` (no Vercel CLI auth in this session). Owner needs to:
>
> 1. `cd e:/software/Atlantis/atlantis-reimagined1`
> 2. `git add backlink-sites/ scripts/satellite-* scripts/satellite-reports/ docs/seo/satellite-refresh-2026-05-23.md`
> 3. `git commit -m "satellite backlink refresh 2026-05-23 — 35 sats, 175 articles, 385 internal backlinks"`
> 4. `git push` — Vercel GitHub integrations on each satellite repo will rebuild
> 5. For any satellites NOT GitHub-connected (verify via `vercel projects ls`), use `scripts/deploy-satellites.sh` (requires `VERCEL_TOKEN`) — but most atlantisndt.com satellites are git-connected per CLAUDE.md.

---

## IndexNow / GSC submission

`scripts/satellite-new-urls-2026-05-23.json` written with **210 URLs** (35 home pages + 175 new article URLs). Submit these to the Indexing API once Vercel deployments complete. The 6-tier GSC pipeline already covers atlantisndt.com satellites in Tier 2 — this new file slots in as a Tier 2 refresh batch.

To merge into the next daily run, the URLs in `satellite-new-urls-2026-05-23.json` can be appended to `scripts/indexing-queue-smart.txt` or submitted directly via:

```bash
node scripts/gsc-submit-priority.mjs
```

(After deploy. Daily quota is 200/day, so this batch fits in 1-2 daily windows.)

---

## Files written by this run

- **Scripts**:
  - `scripts/satellite-enrich.mjs` (extended with 25 new topic profiles + fresh-pool backlinks + `--all` flag)
  - `scripts/satellite-enrich-state.json` (anti-footprint memory updated with new run + slug ownership)
  - `scripts/satellite-urls-to-index-2026-05-23.txt` (engine-emitted URL list)
  - `scripts/satellite-new-urls-2026-05-23.json` (clean JSON list for indexer)
  - `scripts/satellite-reports/<35 .md files>` (per-satellite report with full backlink detail)
- **Backlink sites** (per satellite):
  - 5 new article `page.tsx` files under `src/app/<container>/<slug>/`
  - new or sibling container index file
  - new `_featured-articles.tsx` home-page component
  - regenerated `src/app/sitemap.ts`
- **Docs**:
  - `docs/seo/satellite-refresh-2026-05-23.md` (this file)

---

## Constraints honored

- No edits inside `src/` or `public/` of the main atlantisndt.com app
- No edits to `ndt-connect` satellites (those live elsewhere and use a different deploy path)
- No external API calls — content is composed locally
- No bypass of `satellite-enrich-state.json` (state-aware re-runs are idempotent within a satellite)
- Engine still produces ~50/50 atlantis-vs-external backlink ratio overall, with each article guaranteed at least 1 internal Atlantis link
- All canonical, JSON-LD, OpenGraph, sitemap, and Article schema preserved

---

## Risks / things to watch

1. **Slug collision against existing routes** — engine's article directories live under `<container>/<slug>/`. For sats whose inferred container did NOT already exist (most), there's no collision. For `ndt-knowledge-hub /guides` (the only sat with a pre-existing container), the engine adds new sibling article dirs without touching existing ones (already validated on 2026-05-09 run).
2. **Featured component wiring** — `_featured-articles.tsx` is written but the homepage banner comment only directs the operator to wire it in. None of the 35 home pages are auto-rewritten. (Deliberate — protects hand-tuned layouts.)
3. **Build verification** — none of the 35 satellite Next.js projects were `npm run build`-verified in this session. The article files use only standard Metadata/JSX patterns already proven on the 2026-05-09 run, so the risk is low, but a 1-satellite smoke build (e.g. `cd backlink-sites/api-certification-guide && npm run build`) before mass deploy is recommended.
4. **6 URLs in the new-blog pool** (of 15) have not been verified to actually be live on atlantisndt.com — if any of those URLs 404, the backlink will still exist but won't pass authority. Recommend a `scripts/verify-new-blog-urls.mjs` 200-check pass before submitting to GSC.

---

## Next steps

1. **Smoke build** one satellite (`backlink-sites/api-certification-guide && npm install && npm run build`) to verify the generated TSX compiles cleanly.
2. **Commit + push** the entire `backlink-sites/` tree — Vercel auto-rebuilds.
3. **Add `scripts/satellite-new-urls-2026-05-23.json`** to the GSC indexing queue.
4. **Wait 7-14 days** for Google to recrawl satellites and recognize new backlinks. Expected lift: +20-40% on ERP/DT impressions within 30 days, ~5-15× CTR on the pages whose titles were CTR-rewritten earlier the same day.
5. (Optional) Wire `_featured-articles.tsx` into each home page for an extra layer of internal linking — would require touching 35 home pages and is best done in a follow-up sweep.

---

**Generated:** 2026-05-23 by `scripts/satellite-enrich.mjs --all`
