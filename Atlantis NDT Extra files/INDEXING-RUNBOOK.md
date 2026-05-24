# Indexing Runbook — atlantisndt.com (post-Tier-4 expansion)

Last updated 2026-04-24 after the 120-city merge + 15-translation-file run.

## TL;DR

Nothing is submitted to the Google Indexing API yet **and submitting now would be wrong.** The 187 target URLs split three ways:

| Tier | Count | Live? | What submitting *now* does |
|---|---|---|---|
| **S** — hub + 5 industry verticals | 6 | hub yes, verticals no | hub: re-crawl stale content; verticals: 404 burn |
| **B** — 120 EN city pages | 120 | ~73 live (thin), 47 not yet | live ones get re-crawled with same thin content; non-live 404 |
| **C** — 61 language alternates (ES/PT/DE/KO/AR/FR/RU) | 61 | none | 100% 404 burn |

**Net waste if we fired blindly today: ~108 of 187 URLs would 404 → 58% of that day's quota wasted.** Plus the ~73 EN cities re-crawled would just re-index their existing thin content with no schema, no hreflang, no rich PAA — Google would see nothing new and the impressions wouldn't move.

## What's actually live (verified 2026-04-24)

```
✅ /ndt-erp-software                        thin existing hub
✅ /ndt-erp-houston                         thin (no schema, no facilities, no hreflang)
✅ /ndt-erp-dubai                           thin (no schema)
✅ /ndt-erp-singapore, london, perth, ...   ~73 city URLs in current sitemap
❌ /ndt-erp-dallas                          NOT in sitemap (new)
❌ /ndt-erp-sao-paulo, atyrau, gladstone… ~47 new EN cities
❌ /es/ndt-erp-houston (and all alternates) SPA fallback → returns homepage
❌ /ar/ndt-erp-dubai                        SPA fallback
❌ /pt/ndt-erp-software                     SPA fallback
❌ /ndt-erp-for-refineries                  vertical pages don't exist yet
```

Existing live pages have:
- ✅ unique `<title>` and `<meta description>`
- ❌ **NO** schema.org JSON-LD (no SoftwareApplication, no LocalBusiness, no FAQPage, no BreadcrumbList)
- ❌ **NO** hreflang alternates emitted
- ❌ **NO** named-facilities content (Marathon, ExxonMobil Baytown, ADNOC, etc. all absent from body)
- ❌ thin body (<5KB rendered)

## The correct sequence

### Phase 1 — Deploy (repo session, ~2 hours)

Mount `E:\software\Atlantis\atlantis-reimagined1` → execute `DROP-IN-CHECKLIST.md` Stages 0-10. This:

1. Drops in `erp-cities-all-tiers.json` as the data source.
2. Wires `ERPSoftwareCityPage.tsx` to render rich content per city (named facilities, integrationPainParagraph, 6 bullets, 8 PAA, schema.org combo).
3. Adds `lib/hreflang.ts` to emit alternates.
4. Adds the 5 industry vertical pages.
5. Pre-renders all 187 URLs into static HTML via `scripts/prerender.mjs`.
6. **Contact-form + email-delivery regression test** (mandatory per `CLAUDE-md-contact-form-patch.md`).
7. Pushes 7 feature-branch PRs, merges to main, Vercel auto-deploys.

After Phase 1: every URL in `indexing-url-list.json` returns 200 with rich, unique, schema-marked content.

### Phase 2 — Verify (15 min, automated)

```bash
node scripts/gsc-submit-multi-account.mjs --dry-run
```

The pre-flight gate inside the script HEAD-checks every URL and rejects:
- non-200 responses,
- responses where `<title>` matches the homepage SPA fallback,
- bodies smaller than 5 KB.

Expected dry-run output: **187/187 pass** if deploy is clean. If any fail, fix the route/prerender before going live.

### Phase 3 — Submit (3-day rolling, automated)

```bash
# Day 1: hub + verticals + Tier-1 EN (existing live, getting refreshed schema)
node scripts/gsc-submit-multi-account.mjs --tier=S
node scripts/gsc-submit-multi-account.mjs --tier=A

# Day 2: New EN cities (Tier 2 EU/Canada/LatAm + Tier 3 MENA/APAC + Tier 4 specialty)
node scripts/gsc-submit-multi-account.mjs --tier=B

# Day 3: All language alternates (ES/PT/DE/KO/AR/FR/RU)
node scripts/gsc-submit-multi-account.mjs --tier=C
```

Each run rotates across 10 SAs at 200/day = 2,000/day capacity, far above the 187 needed. Runs are idempotent (state file at `.gsc-quota-state.json` skips already-done URLs). Ledger at `.gsc-submission-ledger.jsonl` records every attempt for later GSC reconciliation.

(If you want to compress to 1 day: just run `node scripts/gsc-submit-multi-account.mjs` with no tier flag — script will burn through all 187 in one pass since 2,000/day capacity easily absorbs it.)

### Phase 4 — Reconcile (GSC, day 3-7)

Open Google Search Console → Coverage → Submitted URLs:
- Day 3: most submitted URLs should show `Crawled — currently not indexed` (in queue).
- Day 5: ≥80% should flip to `Submitted and indexed`.
- Day 7: anything still `Crawled — not indexed` is content-quality flagged → expand body content (the targeted thicken-bottom-decile plan from `VERIFICATION.md`).

## Why not submit "Tier A" (existing live URLs) right now?

The 73 already-live EN URLs (Houston, Dubai, Singapore, etc.) **are** safe to submit today — they return 200, they have unique titles. But:

1. Submitting now signals "URL_UPDATED" → Google re-crawls → finds the same thin content it already has → wastes the signal.
2. The valuable URL_UPDATED signal should fire **after** the rich-schema deploy, when there's actually new content to surface.
3. Quota saved today is quota available tomorrow when it actually matters.

Net: **wait 2 hours, deploy, then submit.** Don't pre-spend the credibility.

## Files

```
outputs/gsc-submit-multi-account.mjs    drop-in script (place at scripts/gsc-submit-multi-account.mjs)
outputs/indexing-url-list.json          187 URLs tier-tagged (place at scripts/indexing-url-list.json)
outputs/INDEXING-RUNBOOK.md             this file
```

## What you need at the repo to make this run

In `E:\software\Atlantis\atlantis-reimagined1\scripts/`:
- `gsc-service-account-1.json` … `gsc-service-account-10.json` — already exist per the credentials memory; the script auto-discovers any matching the pattern, so even partial coverage works (e.g. if only 5 SA JSONs are present, runs at 1,000/day capacity).
- `gsc-submit-multi-account.mjs` — copy from outputs.
- `indexing-url-list.json` — copy from outputs.

Then run from repo root: `node scripts/gsc-submit-multi-account.mjs --dry-run` for the safety check, then live.

## Failure modes the script catches

| Failure | Detection | Action |
|---|---|---|
| URL 404 (deploy missed it) | preflight HTTP status | skip, log to ledger |
| URL returns SPA fallback shell | preflight `<title>` match | skip, log `spa_fallback` |
| URL body < 5 KB (prerender failed) | preflight body length | skip, log `thin_body` |
| 429 from Indexing API | submit response code | mark that SA at cap, retry with next SA |
| All 10 SAs at cap | per-account counter | exit cleanly, run again tomorrow |
| Crash mid-run | state file persisted on every success | re-run, already-done URLs skipped |

## Open follow-ups (post-Phase-3)

1. After 7 days, pull GSC search-impressions data → identify bottom-decile cities → expand body content (per the existing `VERIFICATION.md` plan).
2. Add `INDEXING-RUNBOOK.md` reference to the SEO skill so future expansions inherit the same pre-flight discipline.
3. Once stable, schedule the script to auto-fire on every Vercel deploy via a GitHub Actions hook reading the post-deploy URL diff (delta-only submission, not full re-fire).
