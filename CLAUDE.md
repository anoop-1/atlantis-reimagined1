# Atlantis Reimagined — Project Instructions

## GSC Indexing Pipeline

### Overview
A daily automated pipeline submits URLs to the Google Indexing API via a Windows Scheduled Task (`GSC-Priority-Indexing`) that runs at **6:00 AM daily**.

**Script:** `scripts/gsc-submit-priority.mjs`
**Progress file:** `scripts/gsc-priority-progress.json`
**Audit results:** `scripts/gsc-index-audit-results.json`, `scripts/gsc-deep-check-results.json`
**Daily log:** `scripts/gsc-daily-submit.log`

### 6-Tier Priority System
URLs are submitted strictly in tier order — a tier must complete before the next begins.

| Tier | Site | Description |
|------|------|-------------|
| 1 | atlantisndt.com | Primary business site (~2,067 URLs) |
| 2 | atlantisndt.com satellites | 35 NDT vercel.app backlink sites (~329 URLs) |
| 3 | ndt-connect.com | Marketplace site (~3,691 URLs) |
| 4 | ndt-connect.com satellites | 15 vercel.app backlink sites (~560 URLs) |
| 5 | GoVisa primary | go-visa.vercel.app (~395 URLs) |
| 6 | GoVisa satellites | 5 travel vercel.app sites (~10 URLs) |

### Current Status (updated 2026-03-31)
- **Submitted:** 1,530 URLs (Tier 1 + Tier 2 complete, Tier 3 in progress)
- **GSC confirmed indexed:** 1,519 pages
- **GSC not indexed:** 1,598 pages (mostly "Discovered - currently not indexed" + "URL unknown" — NO more Soft 404s)
- **Pre-rendered pages:** 2,244 unique (was ~1,700 — expanded cities, removed 198 dupes)
- **Remaining to submit:** ~4,301 URLs (~22 days at 200/day)
- **Soft 404 fix:** Deployed 2026-03-24 — confirmed resolved via URL Inspection API spot-check (0 Soft 404s)
- **Noindex fix:** Deployed 2026-03-31 — DynamicCityRoute replaces NotFound catch-all, prevents 342 city pages from getting noindex on React hydration
- **Auto-reschedule:** GSC script now auto-reschedules Windows task to 24h+1min after each run (rolling quota)
- **Meta optimization:** Top 10 high-impression pages titles/descriptions rewritten for CTR
- **GA4 active:** atlantisndt.com (G-1EF92RXSVR), ndt-connect.com (deployed), visapath (deployed)
- **GA4 API:** NOT yet enabled — needs Analytics Data API + Admin API enabled in GCP project 139446864572, plus service account viewer access
- **GSC verified properties:** 58 of 58 (all verified)
- **Core Web Vitals:** No CrUX data yet (insufficient traffic — needs ~1,000+ visits/28 days)
- **Search performance (28-day):** 185 clicks, 19,522 impressions, 0.95% CTR, avg position 16.9 — week-over-week: clicks +22%, impressions +44%
- **Known issue (RESOLVED):** React SPA catch-all was rendering NotFound with noindex for 342 pre-rendered city pages. Fixed with DynamicCityRoute + DynamicTrainingPage components.

### How It Works
1. Script loads URLs from multiple source files + generates ndt-connect.com URLs programmatically
2. Seeds `gsc-priority-progress.json` from prior run files on first use
3. Checks URL Inspection API before submitting — **skips already-indexed URLs** (saves quota)
4. Submits via Google Indexing API (200/day limit)
5. Tracks everything in progress file — no duplicate submissions across runs
6. Stops on rate limit (HTTP 429)

### Key Files
- `scripts/gsc-submit-priority.mjs` — Main daily submission script (6-tier)
- `scripts/gsc-priority-progress.json` — Cumulative progress tracker (submitted + alreadyIndexed arrays)
- `scripts/gsc-deep-index-check.mjs` — Bulk URL Inspection API checker (~500/session before throttle)
- `scripts/gsc-verify-all.mjs` — Verify unverified GSC properties via META method
- `scripts/gsc-index-audit.mjs` — Search Analytics audit across all properties
- `scripts/gsc-daily-submit.bat` — Windows batch wrapper for scheduled task
- `scripts/gsc-service-account.json` — Google service account credentials (DO NOT commit)

### URL Source Files
- `scripts/all-new-urls-march-2026.txt` — atlantisndt.com URLs (Priority 1A-1C)
- `scripts/indexing-queue-smart.txt` — Combined queue (atlantisndt + satellites + ndt-connect)
- `scripts/ndtconnect-all-urls.txt` — ndt-connect.com full URL list (2,901 URLs)
- `scripts/ndtconnect-satellite-urls.txt` — 15 ndt-connect satellite sites (555 URLs)
- `scripts/govisa-urls.txt` — GoVisa + satellite URLs (405 URLs)
- `scripts/complete-satellite-urls.txt`, `scripts/us-eu-expansion-urls.txt` — Additional URL sources

### Satellite Domain Classification
**atlantisndt.com satellites** (Tier 2): Any `*.vercel.app` domain NOT matching ndt-connect or GoVisa patterns.
**ndt-connect.com satellites** (Tier 4): `aerospace-ndt-center`, `corrosion-engineering-guide`, `industrial-coating-inspection`, `ndt-career-portal`, `ndt-digital-technology`, `ndt-equipment-reviews`, `ndt-safety-compliance`, `ndt-standards-reference`, `offshore-ndt-guide`, `pipeline-integrity-hub`, `pressure-vessel-inspection`, `rt-testing-hub`, `tank-inspection-guide`, `ut-testing-academy`, `weld-inspection-pro`.
**GoVisa satellites** (Tier 6): `go-visa`, `passport-power`, `visa-free`, `evisa-guide`, `digital-nomad-visa`, `travel-docs`, `visapath`.

### Credentials & Auth
- **Service account:** `atlantismarketing@x-jigsaw-293515.iam.gserviceaccount.com`
- **Vercel token:** stored in `scripts/deploy-verify-index.mjs` (team: `team_RvIKW6PFuuliC77dktstAJmQ`)
- **Google verification token:** `dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE`

### Important Rules
- **Never re-submit already indexed URLs** — always check `gsc-priority-progress.json` first
- **Daily quota is 200** — the Indexing API rate limits at ~200 submissions/day
- **URL Inspection API throttles at ~500 checks/session** — run deep checks across multiple sessions
- **Update this file** when tiers complete, new URLs are added, or status changes significantly
- Vercel sites auto-deploy from GitHub — no manual `vercel deploy` needed for git-connected repos
- NDT Connect satellites were deployed via CLI (no GitHub repo) — need API redeploy for changes

### Running Manually
```bash
# Daily submission (normally runs via scheduled task at 6 AM)
node scripts/gsc-submit-priority.mjs

# Deep index check (run to update alreadyIndexed list)
node scripts/gsc-deep-index-check.mjs

# Verify unverified GSC properties
node scripts/gsc-verify-all.mjs

# Full Search Analytics audit
node scripts/gsc-index-audit.mjs
```
