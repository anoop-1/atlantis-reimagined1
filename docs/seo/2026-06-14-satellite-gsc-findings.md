# Satellite GSC Findings — 2026-06-14

Audited all 35 satellites via GSC Search Analytics + URL Inspection API + Sitemaps API.

## Key finding — pages ARE indexed; problem is rank, not indexing

| Check | Status |
|---|---|
| 35 / 35 satellites verified in GSC across 11 SAs | done |
| 35 / 35 sitemaps now submitted to GSC | done (24 fixed today) |
| All sampled homepages: "Submitted and indexed / PASS / SUCCESSFUL" | done |
| All sampled article URLs: "Submitted and indexed / PASS / SUCCESSFUL" | done |
| GSC sitemap "indexed=0" counter | display lag, not actual indexing |

## Real symptom — low click yield despite indexing

| Satellite | 30d clicks | 30d imp | Pages w/ imp |
|---|---:|---:|---:|
| industrial-inspection-resources | 6 | 668 | 2 |
| ndt-knowledge-hub | 0 | 423 | 6 |
| tank-inspection-resource | 0 | 436 | 1 |
| aerospace-ndt-standards | 0 | 393 | 1 |
| ndt-training-academy | 0 | 358 | 1 |
| power-generation-ndt | 0 | 216 | 1 |
| ndt-careers-portal | 1 | 191 | 1 |
| ndt-software-solutions | 1 | 165 | 1 |
| asset-integrity-hub | 0 | 156 | 1 |

Total satellite 30d clicks: ~8. 30d impressions: ~3,000+. CTR <0.3%.

## Why low click yield, not indexing

1. **Low domain authority** — vercel.app sub-domains lack independent backlink profiles
2. **Thin content vs main domain** — satellite articles 1,500-2,500 words but atlantisndt.com competes against richer pages
3. **No internal linking from atlantisndt.com TO satellites** — Google does not see atlantisndt.com endorsing them
4. **GSC sitemap counter lag** — display "indexed=0" is GSC UI lag, not actual

## What was fixed today

1. Built 35-satellite GSC audit script — `scripts/satellite-gsc-audit.mjs`
2. Discovered 24 satellites with sitemap missing from GSC
3. Iterated 11 SAs to find proper owners; submitted all 24 missing sitemaps
4. Confirmed all 35 satellites now have sitemap registered

## Recommended next actions

### Short-term (improve satellite click yield)
1. **Backlink injection** — add cross-domain backlinks FROM atlantisndt.com TO satellite articles
2. **Refresh satellite content** — round 3 enrichment via `scripts/satellite-enrich.mjs --round3`
3. **Mass-submit 350 satellite article URLs** to GSC across owning SAs

### Long-term (satellite authority climb)
1. Get satellites linked from neutral authority NDT sites (ASNT, API, NACE/AMPP)
2. Migrate top-performing satellites to dedicated domains
3. Cross-domain WebSite schema linkage

## Files

- `scripts/satellite-gsc-audit.mjs` — full audit script
- `scripts/satellite-gsc-audit-2026-06-14.json` — full data dump
- `scripts/satellite-fix-sitemaps-and-verify.mjs` — owner detection + sitemap submission
- `scripts/satellite-fix-sitemaps-report-2026-06-14.json` — fix log
