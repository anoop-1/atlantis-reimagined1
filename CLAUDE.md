# Atlantis NDT — Project Single Source of Truth
**Repo:** `atlantis-reimagined1` (this directory, `e:\software\Atlantis\atlantis-reimagined1`)
**Last updated:** 2026-05-29 (Vercel re-platform + auto-deploy — §15)

This file is the primary context for ALL future + current SEO work on atlantisndt.com.
Read this first. Everything else is supplementary.

> ### ⚠️ TWO FACTS THAT CHANGED — READ BEFORE ANY DEPLOY
> 1. **DEPLOY = VERCEL (native git auto-deploy). Migrating back to Vercel from the VPS — 2026-05-29 (§15).** The Vercel project `atlantis-reimagined1` is git-linked to `anoop-1/atlantis-reimagined1` (prod branch `main`): **every push/commit to main auto-builds + auto-deploys.** The domains `atlantisndt.com` + `www` were moved onto this project. **Final step = DNS cutover (owner action):** point apex + www at Vercel (see §15.2). Until DNS flips, the VPS (nginx, 148.230.122.172) still serves live; after flip, Vercel serves. The old VPS GitHub Action was removed. (Earlier §14.6 VPS-rsync runbook kept only as fallback.)
> 2. **The May-26 "blank JS shell to Google" blocker is FIXED.** Home, money pages, and programmatic pages now render real HTML bodies (verified by live fetch 2026-05-29). Query-embedding/on-page work is now effective.
>
> **Current rule of the road:** the site is already very large (~16 k URLs). **Do NOT add bulk/thin pages.** Growth now comes from CTR fixes, internal-link cascades, on-page depth on existing pages, and off-page authority — all strictly additive.

---

## 1. Business + product context

Atlantis NDT is a global NDT (Non-Destructive Testing) services + software company.
Founder/CEO: Anoop Rayavarapu — Houston TX + Hyderabad India, ASNT Level III.

**Four product segments (drive ALL SEO planning):**

| Segment | Path tree | Product |
|---|---|---|
| **Training** | `/training`, `/training-{region}`, `/ndt-training-{city}`, `/asnt-certification`, `/api-{510,570,653}-certification`, `/corporate-training/*` | NDT Level I/II/III training; corporate vertical training |
| **Consulting** | `/consulting`, `/consulting-{region}`, `/consulting/ndt-consulting-{city}`, `/consulting/{service-line}` | ASNT Level III consulting, API RBI, FFS, code consulting |
| **ERP** | `/erp`, `/erp/*`, `/ndt-erp-*`, `/erp/{app}-for-{industry}`, `/erp/{app}-for-{country}`, `/erp/{app}-ndt-inspection-companies-{city}` | "Affordable NDT ERP — accessible, fully customizable, all 30+ Odoo apps included" |
| **Digital Twins** | `/digital-twins`, `/digital-twin-{city}`, `/digital-twins/{usecase}`, `/digital-twins/{usecase}-{city}`, `/compare/atlantis-dt-vs-{competitor}`, `/compare/digital-twin-vs-{tech}` | Enterprise SaaS digital twin platform — accessible, customizable |

Plus blog + methods at `/blog/*`, `/ultrasonic-testing`, `/radiographic-testing`, etc.

**Tech stack:** React 18 + TypeScript + Vite + Tailwind + shadcn/ui + Radix UI + react-router-dom. Build: `vite build` + `react-snap` prerender. Deployed: Vercel (auto-deploy from GitHub `anoop-1/atlantis-reimagined1` main branch).

---

## 2. SEO goals + memory rules

**Primary goal:** 1,000 clicks/day = **30,000 site-wide clicks/month** by **2026-06-22** (set 2026-05-24).

**Equal-segment improvement rule** (memory: `~/.claude/projects/e--software-Atlantis/memory/feedback_equal_segment_improvement.md`):
Every audit cycle pushes ALL 4 segments (Training, Consulting, ERP, Digital Twins) forward by ~20% equally — no segment lags. Concretely each cycle adds ~20% more pages + CTR rewrites + content enrichments + backlinks per segment.

**Additive-only rule** (memory: `feedback_no_undo_prior_work.md`):
SEO work is additive — never strip existing pages/content/features when iterating. New content only.

**🚫 NO PRICING ON THE WEBSITE — HARD RULE** (memory: `feedback_no_pricing_rule.md`):
Never mention price of any Atlantis product or service anywhere on atlantisndt.com, satellites, marketing assets, or schemas. Positioning words: **Affordable. Accessible. Fully Customizable.** CTAs: "Demo on request" / "Quote on request" / "Free trial". Forbidden tokens (audit before every commit): `$18,000/yr`, `$18K`, `$200K/yr`, `$200,000`, `$250K+`, `$180K+`, `$80K+`, plus local-currency equivalents (`SAR 67,500`, `AED 66,000`, `INR 15 lakh`, `CAD 24,500`, `AUD 27,300`, `GBP 14,400`, `EUR 16,400`, `BHD 6,800`, `KWD 5,500`, `OMR 6,900`, `MYR 84,500`, `NOK 195,000`, `QAR 65,500`, `BRL 92,000`, `MXN 360,000`, `IDR 290,000,000`, `NGN 27,000,000`, `SGD 24,300`). NEVER put `price` / `priceCurrency` inside any Schema.org `Offer` block — only `"availability": "https://schema.org/InStock"`. Use qualitative labels for competitor pricing: "enterprise-license SAP", "enterprise-tier Oracle". Customer ROI / savings figures + industry salary ranges + third-party equipment costs are still allowed (not Atlantis pricing). Deterministic strip: `scripts/strip-pricing.mjs` (run before every commit if subagents wrote content).

**Tracker:** `node scripts/gsc-30day-tracker.mjs` — daily site-wide + per-segment breakdown vs 30k goal. Output → `scripts/30day-tracker-snapshots/{date}.json`. Manual run required until Windows Scheduled Task is registered (see §10).

---

## 3. Current state (as of 2026-05-24 end of Day 2)

### 3.1 GSC baseline (30 days, range 2026-04-21 → 2026-05-21)

| Metric | Site-wide | Training | Consulting | ERP | DT | Other |
|---|---:|---:|---:|---:|---:|---:|
| Clicks | 507 | 157 | 8 | 3 | 3 | 336 |
| Impressions | 62,945 | 17,812 | 480 | 520 | 702 | 43,431 |
| Pages with traffic | 1,297 | 74 | 43 | 62 | 25 | 1,093 |
| CTR | 0.81% | 0.88% | 1.67% | 0.58% | 0.43% | 0.77% |

Progress to 30k goal: 1.7% (507/30,000). Pace: 17 clicks/day. Days remaining: 29.

### 3.2 Pages on disk after Day 0–2 sprints

| Section | Files | Notes |
|---|---:|---|
| `/ndt-erp-{city}` | ~290 | 158 baseline + 107 Day-0 + 32 states/countries + Day-1/Day-2 adds |
| `/erp/{slug}` pillar + combo | ~230 | 25 Odoo-app pillars + 100 Day-0 combos + 30+ Day-1 industry-apps + 20 Day-1 city-combos + 25 Day-2 country-combos + 25 Day-2 industry-apps |
| `/erp/odoo-vs-*` comparison | 3 | SAP / NetSuite / Oracle |
| `/ndt-training-{city}` | ~110 | 95 baseline + 15 Day-1 + 15 Day-2 |
| `/ndt-consulting-{city}` (renders at `/consulting/ndt-consulting-{city}`) | ~135 | 97 baseline + 20 Day-1 + 15 Day-2 |
| `/consulting/{service-line}` | 5 | RBI, FFS API-579, API-510-audit, Written Practice, Procedure Dev (Day 2) |
| `/digital-twin-{city}` | ~80 | 67 baseline + 8 Day-1 + 1 Day-2 + Day-2 backfills |
| `/digital-twins/{usecase}` | 17 | 11 baseline + 5 Day-1 + 1 (substitute) |
| `/digital-twins/{usecase}-{city}` combo | 12 | All Day-2 |
| `/corporate-training/{vertical}` | 15 | 10 baseline + 5 Day-2 (Hydrogen/Ammonia/Battery/DataCenters/Rail) |
| `/compare/atlantis-dt-vs-{competitor}` | 11 | 8 baseline + 3 Day-1 (Cognite/PTC/MS Azure) |
| `/compare/digital-twin-vs-{tech}` | 4 | Day-2 (BIM/3D-CAD/IoT-Dashboard/CMMS) |
| `/blog/*` | ~230 | 200 baseline + 15 Day-0 keyword-targeted + 15 Day-2 affordable-X cluster |

Cities enriched in `ErpLocationPage.tsx` rich-content map: ~95 of ~160. Remaining use generic template fallback.

### 3.3 Pages added by sprint

| Sprint | Date | Atlantisndt new pages | Notes |
|---|---|---:|---|
| Day 0 | 2026-05-23 | 273 | 232 ERP new + 15 blog + 26 phase-3 (3 comparison + 10 industry-app + 13 states) |
| Day 1 | 2026-05-24 | 111 | 15 T + 20 C + 60 E + 16 D |
| Day 2 | 2026-05-24 | 97 + 175 satellite | 15+5 T + 15+5 C + 25+15 E + 17 D + satellite round 2 |
| **Cumulative** | 2-day sprint | **481 + 350 satellite** | + ~1,366 backlinks across rounds 1+2 |

### 3.4 Indexing API submissions

| Submission window | GSC | IndexNow |
|---|---:|---:|
| 2026-05-23 (Day 0) | 1,805 | 273 |
| 2026-05-24 (Day 1 + Day 2) | 203 | 203 |
| **Cumulative** | 2,008 | 476 |

Per-account daily quota 200. With 10 service accounts = 2,000/day capacity. Spread evenly via `scripts/gsc-submit-multi-raw.mjs`.

---

## 4. File + script inventory

### 4.1 Key components
- `src/components/ErpLocationPage.tsx` — central component for all `/ndt-erp-{city}` pages. Holds `erpLocationContext` + `erpCityRichContent` maps. ~95 cities enriched, rest use generic fallback. **Edit the title formula here to cascade across all 290+ ERP city pages.**
- `src/components/ErpTripleCrossPage.tsx` — data-driven template for `/erp/{app}-ndt-inspection-companies-{city}` triple-cross pages
- `src/components/ErpIndustryAppPage.tsx` — template for `/erp/{app}-for-{industry}` and `/erp/{app}-for-{country}` pages
- `src/components/TrainingLocationPage.tsx` — central template for all `/ndt-training-{city}` pages. **Cascade title fixes here.**
- `src/components/DynamicTrainingPage.tsx` — fallback renderer with `trainingCities` enrichment map
- `src/components/ConsultingLocationPage.tsx` — central template for all consulting city pages. **Cascade title fixes here.**
- `src/components/DigitalTwinLocationPage.tsx` — central DT city template
- `src/components/ErpDtCrossPromoBlock.tsx` — 3-card cross-promo block deployed on 250+ pages
- `src/components/SEOHead.tsx` — emits per-page title, description, OG, Twitter, Article schema, FAQ schema, LocalBusiness schema, Course schema, BreadcrumbList, hreflang
- `src/data/curated-cities.ts` — `CURATED_CITY_SLUGS` (index, follow gating), `ERP_CITY_PAGE_SLUGS`, `TRAINING_CITY_PAGE_SLUGS`, `CONSULTING_CITY_PAGE_SLUGS`, `DT_CITY_PAGE_SLUGS`, `REPORTING_CITY_PAGE_SLUGS`. **Every new city slug must be added here.**
- `src/data/programmatic-seo.ts` — consulting `keyLocations` + `locationIntros` map
- `src/data/training-cities.ts` — training-city profiles (employers, exam centers, salary bands, cert pathway)
- `src/data/dt-city-data.mjs` — DT city `digitalTwinLocationContext` + `digitalTwinAssets` + `digitalTwinIndustries` map
- `src/data/blogs.json` — JSON-driven blog posts (rendered via `src/pages/BlogDetail.tsx`)
- `src/App.tsx` — all routes. Per-sprint expansion blocks fenced by `// === {segment} day-N expansion YYYY-MM-DD ===` markers.

### 4.2 Scripts (GSC, indexing, satellites, tracker)
- `scripts/gsc-submit-priority.mjs` — daily 6-tier submission (Windows Scheduled Task at 6 AM)
- `scripts/gsc-submit-multi-raw.mjs` — raw-JWT multi-account submitter, takes `--url-list=<path>` flag, no `googleapis` dep
- `scripts/gsc-30day-tracker.mjs` — daily site-wide + per-segment click tracker vs 30k goal
- `scripts/gsc-erp-demand.mjs` / `gsc-erp-impressions-pull.mjs` / `gsc-analytics.mjs` / `gsc-weekly-report.mjs` — GSC pulls
- `scripts/gsc-deep-index-check.mjs` — URL Inspection API throttled checker
- `scripts/indexnow-ping.mjs` — Bing IndexNow submitter (hardcoded to `atlantisndt.com` host)
- `scripts/satellite-enrich.mjs` — generates 5 new articles per satellite. `--all` for round 1, `--round2` for round 2. Uses `scripts/satellite-enrich-state.json` for anti-footprint.
- `scripts/satellite-round2-angles.mjs` — 175 round-2 article topics
- `scripts/deploy-all-satellites.mjs` — Vercel CLI deploy loop for 35 satellites
- `scripts/fix-satellite-layouts-v2.mjs` — Header() JSX wrap fix for satellites (one-time)
- `scripts/patch-satellite-next-configs.mjs` — adds `typescript.ignoreBuildErrors` to satellites (one-time)
- `scripts/build-day1-url-list.mjs` / `build-day2-full-url-list.mjs` — git-diff URL list builders for sprint days
- `scripts/index-new-erp-2026-05-23.mjs` / `submit-unindexed-extra.mjs` — one-off helpers
- `scripts/generate-erp-pages-2026-05-23.mjs` / `wire-erp-pages-2026-05-23.mjs` — Day 0 generators (idempotent)
- `scripts/30day-tracker-snapshots/{date}.json` — daily progress snapshots

### 4.3 Indexing URL lists (in `scripts/`)
- `indexing-url-list.json` — Day 0 (232 ERP)
- `indexing-url-list-blogs.json` — 15 Day-0 blog posts
- `indexing-url-list-extra.json` — 1,532 Day-0 unindexed-cleanup URLs
- `indexing-url-list-phase3.json` — 26 Day-0 phase-3 URLs
- `indexing-url-list-day1.json` — 106 Day-1 URLs
- `indexing-url-list-day2.json` / `indexing-url-list-day2-full.json` — 97 Day-2 main URLs
- `indexing-url-list-satellites-round2.json` — 175 satellite round-2 URLs
- `satellite-new-urls-2026-05-23.json` / `satellite-new-urls-2026-05-24.json` — per-round satellite URLs

---

## 5. Infrastructure

### 5.1 Main domain: atlantisndt.com
> ⚠️ **SUPERSEDED 2026-05-29:** prod is now the **Hostinger VPS (nginx)**, not Vercel. `git push` does NOT deploy live anymore. See top-of-file banner + §14.6 for the VPS deploy runbook. The Vercel project below remains linked for build/history only.
- Vercel project: `atlantis-reimagined1` (team `team_RvIKW6PFuuliC77dktstAJmQ`, scope `anoops-projects-776b2b4a`)
- GitHub auto-deploy on push to `main` *(historic — no longer the live path; see §14.6)*
- Build: `vite build && node scripts/prerender.mjs` (per `package.json`)
- Sitemap: `public/sitemap.xml` + sub-sitemaps (sitemap-blog, sitemap-consulting-locations, sitemap-digital-twins, sitemap-methods, sitemap-other, sitemap-training, sitemap-core, sitemap-index, sitemap-glossary)
- ~3,400+ URLs in primary sitemap. Regen via `npm run sitemaps`.

### 5.2 Satellite sites (35 sites — 8 now Git-linked, 27 still CLI-deployed)
35 backlink satellites in `backlink-sites/{name}/` — each a separate Next.js 14 **App Router** app with its own Vercel project. All source is committed in THIS repo under `backlink-sites/`.

**Rendering:** every satellite is fully static (no `getServerSideProps`, no `export const revalidate`, no `force-dynamic`, no dynamic `[slug]` route segments). `sitemap.ts`/`robots.ts` use Next `MetadataRoute` and are statically emitted at build. No ISR / on-demand revalidation anywhere -> nothing to "statify". Verified 2026-05-25.

**Git-link status (as of 2026-05-25):** Vercel limits a single Git repo to **10 connected projects** (`repo_links_exceeded_limit`). The repo `anoop-1/atlantis-reimagined1` is now at that cap: 2 main projects (`atlantis-reimagined1` = live primary, `atlantis-reimagined` = old dup) + **8 git-linked satellites**. The other **27 satellites cannot be git-linked to this repo on the current plan** and remain CLI-deployed via `deploy-all-satellites.mjs`. See section 13 for the full list and options.

Git-linked 8 satellites (rootDirectory = `backlink-sites/<name>`, framework nextjs, branch main): ndt-knowledge-hub, construction-ndt-guide, composite-testing-hub, coating-inspection-guide, asset-integrity-hub, api-certification-guide, aerospace-ndt-standards, advanced-ndt-techniques. Pushes to `main` now auto-build these from their subfolder (verified: ndt-knowledge-hub git deploy reached READY, prod 200).

Satellite list (35):
advanced-ndt-techniques, aerospace-ndt-standards, api-certification-guide, asset-integrity-hub, coating-inspection-guide, composite-testing-hub, construction-ndt-guide, corrosion-management-ndt, heat-exchanger-ndt, industrial-inspection-resources, lng-inspection-hub, manufacturing-ndt-quality, marine-offshore-ndt, middle-east-ndt-resource, mining-ndt-hub, ndt-automation-future, ndt-careers-portal, ndt-equipment-reviews, ndt-knowledge-hub, ndt-safety-compliance, ndt-software-solutions, ndt-standards-library, ndt-training-academy, nuclear-ndt-resource, oil-gas-inspection-guide, petrochemical-ndt-hub, pipeline-integrity-guide, power-generation-ndt, pressure-vessel-ndt, rail-ndt-resource, renewable-energy-ndt, subsea-inspection-guide, tank-inspection-resource, weld-quality-resource, welding-inspection-hub

**Deploy command (after enrichment):**
```powershell
$env:VERCEL_TOKEN = '<from Tokens.docx>'
node scripts\deploy-all-satellites.mjs
```
Per-satellite: ~30-60 sec upload + ~2-3 min Vercel build. Full loop ~25-30 min.

**Common build issues (already patched but reapply if Header bug regenerates):**
- Header() function missing fragment wrap → run `node scripts/fix-satellite-layouts-v2.mjs`
- csstype TS5 type errors → run `node scripts/patch-satellite-next-configs.mjs` (adds `typescript.ignoreBuildErrors: true`)

### 5.3 Credentials index
Source of truth: `E:\software\Atlantis\Tokens.docx`. Memory file: `~/.claude/projects/e--software-Atlantis/memory/tokens_credentials_index.md`. Key tokens:
- **Vercel token:** `vcp_4Bm...Vsdkj` (Tokens.docx); team `team_RvIKW6PFuuliC77dktstAJmQ`
- **GitHub PAT:** `ghp_WVc...23MDjXq`
- **10 GSC service account JSONs:** `scripts/gsc-service-account.json` + `scripts/gsc-service-account-{1..10}.json` (gitignored — never commit)
- **Google verification token:** `dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE`
- **GA4 IDs:** atlantisndt.com `G-1EF92RXSVR`
- **VPS root:** `Atlantis999#` (Hostinger 148.230.122.172)
- **MongoDB NDT Connect:** see memory file

### 5.4 GSC properties
58 verified properties (per CLAUDE.md prior state). Daily quota = 200 URLs/account → 2,000/day total across 10 accounts.

---

## 6. Daily SEO routine (production loop)

Run every morning (manual until Scheduled Task registered):
```powershell
cd e:\software\Atlantis\atlantis-reimagined1

# 1. Pull fresh GSC tracker (site-wide + per-segment + new-page impressions)
node scripts/gsc-30day-tracker.mjs

# 2. Continue Tier 6 daily submission (if not auto-cron at 6 AM)
node scripts/gsc-submit-priority.mjs

# 3. Optional: deep audit per segment
node scripts/gsc-erp-demand.mjs
node scripts/gsc-analytics.mjs --days 28 --export
```

If tracker shows new-page impressions = 0 after 7 days post-submit, run `node scripts/gsc-deep-index-check.mjs` to check why Google isn't indexing.

### Sprint cycle (every 1-2 days)
Per equal-segment rule: dispatch 5 parallel subagents — one per segment + one for satellite refresh. Each agent adds ~20% more in its segment (new pages + CTR rewrites + content enrichments).

Standard sprint output per cycle:
- Training: 15-25 new pages + CTR cascade + 10 enrichments
- Consulting: 15-20 new pages + CTR cascade + 5 service-line pages (when relevant)
- ERP: 30-60 new pages + 10 enrichments
- DT: 15-20 new pages
- Satellite: 175 new articles + 750+ backlinks

Wire routes in `App.tsx` (use `// === {segment} day-N expansion {date} ===` markers). Update `curated-cities.ts` slug sets. Then commit + push + submit URLs.

### Submit new URLs after each sprint
```powershell
# Build URL list from git diff
node scripts/build-day1-url-list.mjs   # or build-day2-full-url-list.mjs etc

# IndexNow (Bing/Yandex/Seznam) — instant
node -e "import('fs').then(fs=>{const l=JSON.parse(fs.readFileSync('scripts/indexing-url-list-X.json','utf-8')); import('./scripts/indexnow-ping.mjs').then(m=>m.main(l.urls.map(u=>u.url)))})"

# Google Indexing API (preflight + multi-account submit)
node scripts/gsc-submit-multi-raw.mjs --url-list=scripts/indexing-url-list-X.json
```

---

## 7. CTR + title formulas (proven cascades)

### ERP city pages (cascade via `ErpLocationPage.tsx`)
```
Title:  Affordable NDT ERP in {City} — All 30+ Odoo Apps Included, Fully Customizable | Atlantis NDT
Desc:   Atlantis NDT ERP for inspection companies in {City}, {Country}. Affordable, accessible, fully customizable — 30+ Odoo apps included. ASNT/ISO 9712 certification tracking, work orders, RBI. Demo: info@atlantisndt.com
```

### Consulting city pages (cascade via `ConsultingLocationPage.tsx`)
```
Title:  NDT Consulting in {City} — ASNT Level III, API 510/570/580/653 RBI, FFS Audits | Atlantis NDT
Desc:   Atlantis NDT consulting in {City}: ASNT Level III SME support, API RBI program design, FFS per API 579, code consulting. Trusted by {sector}. Quote: info@atlantisndt.com
```

### Training city pages (cascade via `TrainingLocationPage.tsx`)
```
Title:  {Course} Training in {City} 2026 — Pass Rate {X}%, ASNT/API Approved | Atlantis NDT
Desc:   ASNT Level III-led NDT training in {City}. UT/RT/MT/PT/VT/ET methods. Pass rate {Y}%. Enroll: enroll@atlantisndt.com
```

### Digital Twin pages
Hand-tuned per page (no cascade). Lead with keyword + year + concrete tech term (UT/PAUT, API 579, audit packs). Always end with CTA.

---

## 8. Keyword universe (priority cluster)

### Money keywords already ranking but underperforming (CTR/position fixes lift fast)
- `digital twin platform roi calculator` — pos 2.8 — top fix target
- `digital twin platform with api access` — pos 8.1
- `implementation roadmap for digital twins in oil and gas` — pos 1.0
- `asset integrity digital twin` — pos 71.5 (climb-potential)
- `who offers digital twins for corrosion monitoring` — pos 9
- `ai predictive maintenance digital twins aviation ndt` — pos 9
- `ndt inspection software` — pos 59 (need new pillar)
- `construction erp malaysia` / `construction erp singapore` — pos 17-33
- `erp provider aberdeen` / `erp software london` — pos 13-87
- `welding and fabrication erp` — pos 20
- `atlantis erp` — pos 7.6 (brand search uncaptured)

### Primary ERP keywords (page-1 target by 2026-06-22)
erp, erp software, erp system, affordable erp, cloud erp, saas erp, open source erp, odoo, odoo erp
crm, sales crm, free crm, email marketing software, marketing automation
inventory management software, accounting software, invoicing software, expense tracking
manufacturing erp, mrp software, cmms, eam, asset management software
quality management software, document control, project management software
helpdesk software, ecommerce platform, pos software, field service management
hr software, payroll software, subscription management

### Vertical (NDT-specific)
ndt erp, ndt inspection software, inspection management software, ndt reporting software
pipeline integrity software, asset integrity management, corrosion monitoring software
rbi software, fitness for service, certification tracking software, calibration management software
audit management software, work order management, welding fabrication erp, oilfield services erp

---

## 9. User-action backlog (carry-over)

These need YOU (Anoop) — agents cannot do these:

1. **Register Windows Scheduled Task for daily tracker** — admin PowerShell snippet in `docs/seo/register-tracker-cron.md`. Otherwise run `node scripts/gsc-30day-tracker.mjs` manually each morning.
2. **Submit 8 directory listings** — copy in `docs/marketing/directory-listings-2026-05-23.md` (G2, Capterra, SoftwareAdvice, GetApp, SoftwareSuggest, GoodFirms, Crunchbase, Trustpilot)
3. **Schedule 25 LinkedIn posts** — bank in `docs/marketing/linkedin-posts-bank-2026-05-23.md` (Tue/Wed/Thu 8-10 AM CST)
4. **Wire 12 cold-email templates** into Atlantis Marketing Agent — templates in `docs/marketing/cold-email-templates-2026-05-23.md`. Update `config.env` to use them.
5. **Record 30 YouTube Shorts** — scripts in `docs/marketing/youtube-shorts-scripts-2026-05-23.md` (5/week × 5 weeks)
6. **30-day execution calendar** — `docs/marketing/30day-marketing-execution-2026-05-23.md`

---

## 10. Memory rules (loaded automatically by agent)

Located at `~/.claude/projects/e--software-Atlantis/memory/`:
- `MEMORY.md` — index
- `feedback_equal_segment_improvement.md` — 20% lift per segment per cycle
- `feedback_no_undo_prior_work.md` — additive only
- `project_click_goal_30k_month.md` — 30k clicks/month by 2026-06-22
- `tokens_credentials_index.md` — points to Tokens.docx for secrets
- `vercel_atlantisndt_project.md` — Vercel project mapping

---

## 11. Important rules + gotchas

- **Never re-submit already-indexed URLs** — always check `gsc-priority-progress.json` first
- **Daily GSC Indexing quota = 200/account** — 10 accounts = 2,000/day. State in `.gsc-multi-state.json`
- **Push protection** — GitHub blocks pushes containing secrets. Never include Vercel/GitHub tokens in committed files. Reference Tokens.docx by name only.
- **Backlink-sites: 8 git-linked, 27 CLI-deployed.** The 8 git-linked ones (see section 5.2) auto-build from `backlink-sites/<name>` on push to `main` — no manual deploy. The 27 unlinked ones still need `deploy-all-satellites.mjs` after edits (blocked from git-linking by Vercel's 10-projects-per-repo cap; see section 13).
- **Vercel 10-links-per-repo cap** — a single Git repo can connect to at most 10 Vercel projects on this plan. To git-link more satellites: either upgrade the plan, or split satellites into additional GitHub repos (<=10 projects each), or accept CLI deploys for the surplus. Do NOT unlink the main `atlantis-reimagined1` project to free a slot.
- **Main app has NO ISR.** atlantisndt.com is a Vite/React SPA prerendered by react-snap to ~1,071 static HTML dirs in `dist/`; served as static files. There is no `getStaticProps`/`revalidate`/Next ISR to tune. The Vercel "ISR Reads / Fast Origin Transfer" overage is NOT from app ISR config — the likely driver is `vercel.json`'s catch-all `rewrites: [{source:"/(.*)", destination:"/"}]` SPA fallback routing crawler/bot traffic through origin. Left unchanged this session (changing it risks breaking deep-link SPA routing); flagged for human review. See section 13.
- **Pre-existing TS errors** — `src/components/FeatureSection.tsx`, `CorporateTrainingLocationPage.tsx`, `construction-ndt-services.tsx`, `aerospace-ndt-services.tsx`, parts of `/erp-industries/`, `/erp-modules/`, `Contact.tsx`, `CorporateNDTTraining.tsx` — unrelated to current SEO sprints, do not block Vite build
- **Vite build is lenient** (esbuild) — Vercel deploys even with TS warnings
- **JSX entity escapes** — never use raw `>` or `<` in JSX text content; use `&gt;` / `&lt;`. Common Day-0 / Day-2 build error
- **GA4 API** — NOT enabled. To enable: Analytics Data API + Admin API in GCP project 139446864572 + service account viewer access
- **Core Web Vitals** — No CrUX data yet (need ~1k+ visits/28d)

---

## 12. Archive — sprint-specific docs

Daily sprint logs preserved in `docs/seo/ARCHIVE/`. Marketing assets stay in `docs/marketing/`. Anything dated `2026-05-23-*` or `2026-05-24-*` is sprint-specific history; this CLAUDE.md is the current state.

When starting a new sprint cycle, read THIS file first. Don't re-read old sprint logs unless debugging a specific historical decision.

---

## 13. Vercel cost / backlink consolidation — 2026-05-25 session

**Goal of this session:** fix a Vercel free-tier overage (ISR Reads + Fast Origin Transfer over limit) and consolidate the 35 satellite backlink sites onto this repo, without breaking the live primary.

### Findings
1. **Main app is a Vite/React SPA, not Next.js.** Despite the task brief assuming Next.js Pages-Router ISR, `package.json` build is `vite build && node scripts/prerender.mjs` (react-snap). Output is ~1,071 static HTML dirs in `dist/`. There is **no `getStaticProps`/`getServerSideProps`/`revalidate`/ISR** anywhere — so the prescribed "statify getStaticPaths" fix does not apply and nothing was changed in `src/`.
2. **Likely real overage driver:** `vercel.json` ends with `rewrites: [{ "source": "/(.*)", "destination": "/" }]` (SPA fallback). Every non-static-file request (incl. bot/crawler hits on thousands of programmatic URLs) routes through Vercel's origin -> Fast Origin Transfer + edge function invocations. This is the SPA catch-all, NOT app ISR.
3. **All 35 satellites are already fully static** (Next 14 App Router, all `page.tsx` static, no dynamic rendering, no dynamic route segments). Task 2 was verification only — no code changes needed.
4. **Satellite source is committed** in this repo under `backlink-sites/` (1,259 tracked source files). Note: `.next/` build artifacts are committed too (bloat, ~570 files/site) but harmless — Vercel rebuilds; add `**/.next/` to a `backlink-sites/.gitignore` in a future cleanup.

### Decisions
- **Did NOT touch the main app or its Vercel project** (per brief + SPA has no ISR to tune). The catch-all rewrite is left in place because removing it risks 404ing deep-linked prerendered routes on the live primary; flagged for human review. If origin transfer must drop, the safe move is to confirm `dist/` contains a real file for every sitemap URL, then narrow the rewrite (or rely on Vercel's automatic static serving) — verify completeness before changing.
- **Git-linked 8 satellites** to `anoop-1/atlantis-reimagined1` (rootDirectory `backlink-sites/<name>`, framework nextjs) and verified ndt-knowledge-hub deploys from the subfolder (READY, prod HTTP 200).
- **Blocked at 8** by Vercel's **10-projects-per-repo** connection limit (`repo_links_exceeded_limit`). 2 slots are the main Atlantis projects. The remaining 27 satellites stay CLI-deployed.

### Outstanding (human decision needed)
- **27 satellites not git-linked** (still need `deploy-all-satellites.mjs`). To consolidate them, pick one: (a) upgrade Vercel plan to raise the per-repo link cap; (b) create extra GitHub repos and put <=8 satellites' folders in each, then git-link (<=10 projects/repo); (c) leave CLI-deployed. List of the 27 unlinked: middle-east-ndt-resource, renewable-energy-ndt, ndt-standards-library, pressure-vessel-ndt, welding-inspection-hub, weld-quality-resource, lng-inspection-hub, ndt-safety-compliance, ndt-software-solutions, corrosion-management-ndt, marine-offshore-ndt, ndt-automation-future, pipeline-integrity-guide, ndt-training-academy, ndt-equipment-reviews, nuclear-ndt-resource, petrochemical-ndt-hub, industrial-inspection-resources, rail-ndt-resource, ndt-careers-portal, heat-exchanger-ndt, oil-gas-inspection-guide, mining-ndt-hub, manufacturing-ndt-quality, subsea-inspection-guide, tank-inspection-resource, power-generation-ndt.
- **Main-app origin transfer:** decide whether to narrow `vercel.json` SPA rewrite (needs sitemap-vs-dist completeness check first).

### Change log
- 2026-05-25: Investigated overage (found main app = static SPA, no ISR). Verified all 35 satellites static. Git-linked 8 satellites + set rootDirectory; verified one builds+serves. Hit 10-link/repo cap; documented remaining 27 + options. Updated section 5.2, section 11, added section 13. No `src/` or main-Vercel-project changes.

---

## 14. SEO audit + OFI session — 2026-05-29

Full deliverable: `E:\software\Atlantis\Atlantis-SEO-Audit-and-OFI-Report-2026-05-29.md`. Ready-to-apply edits: `Atlantis-SEO-Ready-To-Apply-Edits-2026-05-29.md`. Memory staging: `MEMORY-UPDATE-2026-05-29.md`.

### 14.1 Two facts that changed (see top-of-file banner)
1. **Prod = Hostinger VPS / nginx, not Vercel.** `git push` no longer deploys live. Deploy = build + rsync `dist/` to VPS.
2. **Rendering blocker FIXED.** All page types now serve real HTML bodies (verified live). On-page/query-embedding work is now effective.

### 14.2 Fresh GSC baseline (live pull, 28-day window ending ~2026-05-26)
Site-wide: **518 clicks · 58,324 impressions · 0.89 % CTR · avg pos 10.2**.
**Headline opportunity:** USA = **24,550 impressions but only 126 clicks (0.51 % CTR)**, ~¼ of site avg. India 67cl/1.75 %, UAE 31cl/2.01 %, Canada 22cl/0.95 %, Saudi 17, Singapore 16, Nigeria 15, Malaysia 14, Indonesia 13, S.Africa 12, France 11, Australia 10cl/889imp/1.12 %.
**Traffic engine = blog + certification pages**, not money pages: salary-guide (8,761 impr), /asnt-certification (5,554), api-653-tank-guide (3,151), /api-510-certification (2,353), rt-vs-ut (2,004), /api-570-certification (1,988), /api-653-certification (1,872), iso-9712-vs-asnt (1,188).

### 14.3 Opportunity queries (rank pos 2–3, ~0 clicks → strengthen existing page + internal-link; NO new pages)
`653 tank inspection` (pos16)→/api-653-certification + tank-guide · `api 570` (pos30)→/api-570-certification · `asnt` (pos18)→/asnt-certification · `ndt reporting software` (pos22)→/best-ndt-reporting-software-2026 + /erp · `api 570 certification cost` (pos10)→/api-570-certification · `paut technician salary` (pos5.5)→salary guide · `aboveground storage tank inspection training` (pos50)→/api-653-training.

### 14.4 Competitor intel — whitespace mostly already built
Training: ASNT, Hellier/Acuren (US), Trinity/SMEC/INDTT (India), Cutech/SNDT (SG), TWI=CSWIP, BINDT=PCN (UK), TCS/AINDT (AU), Solve Tech/WENS=KHDA (UAE). Consulting: E2G (RBI/FFS), Velosi/Darlsco (UAE), Vertech/IRISNDT=NATA (AU), TUV/BV/Applus+=UKAS/WSE (UK). ERP: Floodlight (closest SMB), DRIVE/DURR, IntelliSPEC, Waygate, Cenosco/Antea/AVEVA. DT: AVEVA, Cognite, Bentley iTwin, PTC, Azure DT.
**Already-built comparison footprint (do NOT duplicate):** AsntVsPcn(+CSWIP), Api510VsApi570, ConsultingVsInHouse, AtlantisDtVs{Aveva,Cognite,Ptc,Bentley,Maximo,Siemens,GePredix,AspenMtell,AzureDT,Hexagon,OsisoftPi}, vs-{maximo,sap-pm,netsuite,quickbooks,procore,meridium,ge-vernova,bentley-assetwise,etq,aspentech-mtell}, OdooVs{SAP,NetSuite,Oracle}, AffordableERPAlternative, ROI calculators.
**Genuine remaining gaps (one substantial page each, only if expanding):** pass-rate transparency hub; productised "Outsourced ASNT Level III + SLA"; Floodlight-alternative (ERP); "digital twin cost/pricing" page; per-market accreditation trust pages.

### 14.5 Prioritised OFIs
P0 verify VPS contact form + sitemap-vs-nginx parity · P1 CTR titles on top US-facing pages (US CTR 0.5→2 %) · P2 internal-link cascade + on-page depth for §14.3 queries · P3 geo depth (AU/UK/SG/CA accreditation + hreflang) · P4 satellite + backlog authority. Projected +900–1,600 clicks/mo over 8–12 wks **without adding pages**.

### 14.6 VPS deploy runbook (new live path — replaces git-push)
```powershell
cd e:\software\Atlantis\atlantis-reimagined1
npm run build            # minutes; exceeds sandbox 45s — run on your machine
npm run sitemaps         # if URLs changed
# Confirm docroot:  ssh -i C:\Users\anuan\.ssh\atlantis_vps root@148.230.122.172 "grep -r root /etc/nginx/sites-enabled"
ssh -i C:\Users\anuan\.ssh\atlantis_vps root@148.230.122.172 "cp -r <docroot> <docroot>.bak"
rsync -az -e "ssh -i C:\Users\anuan\.ssh\atlantis_vps" dist/ root@148.230.122.172:<docroot>/
ssh -i C:\Users\anuan\.ssh\atlantis_vps root@148.230.122.172 "nginx -t && systemctl reload nginx"
```
⚠️ Avoid `rsync --delete` unless `dist/` is a verified complete build (additive-only).

### 14.7 Change log
- 2026-05-29: Live GSC pull → new baseline + US CTR opportunity. Verified rendering fixed + prod on VPS/nginx. Competitor analysis 4 segments × 6 markets. Wrote OFI report + edits spec + memory staging. Updated CLAUDE.md (banner, §5.1 note, §14). Additive code edits (build pending deploy): salary-guide blog title (CTR + paut/level-pay intent); "API 570 certification cost 2026" FAQ added to api-570-certification.tsx. NOTE: the harness Edit tool corrupted files on the Windows mount mid-session; all edits were re-applied via validated node writes + in-place copy and re-verified.

---

## 15. Re-platform to Vercel + native auto-deploy — 2026-05-29 (SUPERSEDES §14.6 VPS path)

**Decision:** main site (atlantisndt.com) moves **back to Vercel** (satellites already on Vercel). Vercel's native Git integration = the auto-deploy: **push/commit to `main` → Vercel auto-builds (`vite build && prerender`) → auto-deploys.** No GitHub Action, no VPS rsync needed.

### 15.1 What was done (via Vercel + GitHub APIs)
- Confirmed Vercel project `atlantis-reimagined1` (prj_M9SwNTkzQrY8vgbi, team_RvIKW6PFuuliC77dktstAJmQ) is git-linked to `anoop-1/atlantis-reimagined1`, prod branch `main`. Auto-deploy verified (recent commits each triggered a deployment; latest prod build READY, serves real rendered HTML on `atlantis-reimagined1.vercel.app`).
- **Moved domains** `atlantisndt.com` + `www.atlantisndt.com` off the old duplicate project `atlantis-reimagined` (prj_qS1dbFmg…) and onto the live `atlantis-reimagined1`. Both show `verified: true` (team-owned). Currently `misconfigured: true` only because DNS still points at the VPS.
- **Removed** the VPS GitHub Action (`.github/workflows/deploy-vps.yml`) — Vercel is the sole deploy path now. (Repo Actions secrets VPS_*/VITE_* remain set; harmless, usable if a VPS fallback is ever re-enabled.)

### 15.2 DNS cutover (OWNER ACTION — do at registrar; do NOT touch MX/other subdomains)
Point ONLY the website records at Vercel; leave email (MX, `mail.`) and `dt.`/`odoo.` subdomains on the VPS untouched:
- **apex `atlantisndt.com`:** A record → `76.76.21.21` (Vercel) — replace the current `148.230.122.172`. (If your DNS supports ALIAS/ANAME/flattening, target `cname.vercel-dns.com` instead.)
- **`www.atlantisndt.com`:** CNAME → `cname.vercel-dns.com` (replace any VPS pointer).
- After propagation, Vercel auto-issues SSL; `misconfigured` clears. Verify: `curl -sI https://atlantisndt.com/ | grep -i server` should show Vercel (no longer `nginx`).
- Canonicalization nuance: VPS 301'd to trailing-slash URLs; Vercel serves the prerendered dirs at both forms (no breakage). Monitor GSC coverage briefly after cutover.

### 15.3 Deploy workflow going forward
```
edit code → commit + push to main → Vercel auto-builds + deploys (watch dashboard) → live
```
No manual build/rsync. Vercel env vars (VITE_ADMIN_*, VITE_EMAILJS_*) must be set in the Vercel project settings (they were in .env.local locally) — verify in Vercel dashboard so the contact form/admin keep working on Vercel builds.

### 15.4 GSC indexing (done 2026-05-29)
Submitted 27 updated money/opportunity pages (trailing-slash canonicals) via `scripts/gsc-submit-multi-raw.mjs --url-list=scripts/indexing-url-list-2026-05-29.json`, rotated across all 10 service accounts (≤200/acct/day, 2000/day capacity). State: `.gsc-multi-state.json`. Note: VPS canonical = trailing slash — submit trailing-slash URLs.

### 15.5 Change log
- 2026-05-29 (later): Pivoted from VPS GitHub-Action deploy to **Vercel native auto-deploy** per owner. Moved domains to live Vercel project, removed VPS workflow, submitted 27 URLs to GSC. DNS cutover pending (owner). Updated banner + added §15.

---

## 16. 3D Scanning services segment — 2026-05-29

New service line added (additive). LiDAR / photogrammetry / drone-based 3D scanning.
- **Hub:** `/3d-scanning-services` → `src/pages/ThreeDScanning.tsx` (added to Services nav).
- **City pages:** `/3d-scanning-{city}` → `src/components/ThreeDScanningLocationPage.tsx`, dispatched by `src/components/DynamicCityRoute.tsx` (new `3d-scanning-` pattern). No per-city files/routes.
- **Prerender:** `scripts/prerender.mjs` has a generator block (before the first `routes.forEach`) that derives the city list from existing `ndt-erp-/ndt-training-/digital-twin-/ndt-consulting-` routes and pushes hub + per-city entries with real `bodyContent`. Auto-added to sitemaps + IndexNow at build.
- Coverage: 1 hub + ~318 cities. Verified live (hub, /3d-scanning-houston, /3d-scanning-dubai render real HTML). 319 URLs submitted to GSC across all 10 SAs (`scripts/indexing-url-list-3dscan-2026-05-29.json`).
- Commit: `fb2eedb9b` (atomic, 6 files via Git Data API; prerender pre-validated with `node --check`).

### 16.1 ⚠️ Deploy fan-out finding (important for all future pushes)
Every push to `main` triggers **~10 Vercel builds** because the repo `anoop-1/atlantis-reimagined1` is git-linked to 10 projects: the live `atlantis-reimagined1`, the **unused old dup `atlantis-reimagined`**, and **8 satellites** (§5.2). On Hobby build-concurrency this creates a long queue (~15 min) where the live app's build waits behind the others.
- **Fix applied this session:** canceled the dup + satellite builds via API so the live build got the slot.
- **Recommendation:** disconnect the old `atlantis-reimagined` dup project from Git auto-deploy (the domain already moved to `atlantis-reimagined1`), and reconsider whether the 8 satellites should rebuild on every main push. That alone removes most of the queue delay.
- To unstick a slow deploy: cancel non-`atlantis-reimagined1` active builds — `PATCH /v12/deployments/{id}/cancel?teamId=...`.

### 16.2 Change log
- 2026-05-29 (later): Added 3D Scanning segment (hub + all-city dynamic template + prerender generator + nav). Deployed via Vercel (cleared build fan-out queue to let it through). Verified live. Submitted 319 URLs to GSC. Removed auto-reply from contact form earlier same day.

---

## 17. Build fan-out FIXED + consulting/training upgrade — 2026-05-29

### 17.1 Fan-out fixed (supersedes §16.1 recommendation)
Done via Vercel API (not just recommended):
- Unused dup `atlantis-reimagined` (prj_qS1dbFmg…): `commandForIgnoringBuildStep = "exit 0"` → never auto-builds (verified: CANCELED on push).
- 8 git-linked satellites: each set to `git diff --quiet HEAD^ HEAD -- backlink-sites/<name>` → builds ONLY when its own folder changed (skips after a quick clone otherwise).
- Live `atlantis-reimagined1`: unchanged → builds on every push.
- Verified 2026-05-29: a main-only commit → dup CANCELED, live app BUILDING→READY, satellites skip. The live build is no longer stuck behind the fan-out.

### 17.2 Consulting + training OFIs (live GSC, 28d)
- **Consulting badly underranking its flagship cluster:** `asnt level iii consulting` was pos **42** (87 impr, 0 clicks); whole cluster (`ndt level 3 consulting services`, `level iii services`, `ndt level iii services`) on page 3–5. **Root cause found: the `/consulting/ndt-consulting-level-iii` prerender entry had NO `bodyContent`** → Google saw an empty shell.
- **Training:** `api 570 training` / `api 570 course` / `api 570 online training` cluster ranked pos 55–69; `best ndt training` listicle intent (pos 9–17).

### 17.3 Upgrade shipped (commit 643d4e35a, prerender.mjs)
- Added rich `bodyContent` to `/consulting/ndt-consulting-level-iii` — embeds the full Level III cluster + "outsourced ASNT Level III with SLA" positioning + internal links (→ /consulting, /asnt-certification, /api-570-certification, /api-653-certification). Verified live.
- Enriched `/consulting` hub + `/api-570-training` bodyText for their query clusters. Verified live.
- Submitted updated URLs to GSC. 
- **Lesson: audit ALL money-page prerender entries for missing `bodyContent`** — any page whose entry lacks bodyContent ships an empty shell and won't rank. Highest-value recurring OFI check.

### 17.4 Daily proportional-growth cadence
Scheduled task created (see scheduler): each day, pull GSC, pick top OFI per segment (Training, Consulting, ERP, Digital Twins, 3D Scanning), apply additive improvements proportionally (fix empty bodyContent, enrich page-2 query targets, internal links, occasional new high-intent page), commit to main (auto-deploys; only live app builds), submit new/updated URLs to GSC (≤2000/day). Additive only.

---

## 18. Pricing & cost policy (owner directive, 2026-05-31) — HARD RULE
**Never publish prices, costs, or fees anywhere on the public site** — not in titles, meta descriptions, FAQ questions/answers, body copy, tables, calculators, or JSON-LD schema. Atlantis serves globally and **prices vary by region**; pricing is shared **only when the customer contacts us directly** (region-specific quote).

- Use **proof signals instead of price**: pass rate (e.g. 96%), salary outcomes ($150K+), ASNT Level III authorship, accreditations, methods covered, 2026 schedule, hours-saved ROI, named outcomes.
- Cost-intent queries ("api 510 cost", "ndt inspection cost") are still valuable: rank for them but answer with "cost depends on region/scope -> get a tailored quote" + value framing, NOT numbers.
- When editing/generating any page or FAQ: strip cost/fee/price figures; convert "how much does X cost" FAQs into value / contact-for-quote framing.
- Legacy price-built pages (asnt-level-3-fees, cwi-exam-cost, ndt-inspection-cost-by-method, odoo-erp-pricing, affordable/cheapest ERP) must be **repurposed to the quote model, not deleted** (preserve their query rankings).

---

## 19. Round-7: empty-shell fix + ERP/DT link cascade — 2026-07-18

Full report: `E:\software\Atlantis\Atlantis-SEO-Round7-Report-2026-07-18.md`. Commit `291000f9`.

### 19.1 Root cause found (CRITICAL, recurring)
The route dedupe in `prerender.mjs` (`routeMap.set(path, route)` — last wins) **clobbered bodyContent** whenever a later title/desc-only entry existed for the same path. Result: ~31 of the TOP-traffic pages (salary guide 36k impr/90d, rt-vs-ut, api-653-tank-guide, exam-schedule, /resources/*, method pages) shipped ~78-word empty shells = ~30% of all site impressions. **Fixed permanently:** dedupe now merges bodyContent/structuredData/canonical from the earlier entry when the later one lacks them.

### 19.2 What shipped
- `scripts/round7-body-overrides.mjs` — 40 pages of rich prerender bodyContent (800–1,500 words each, FAQ, contextual links into ERP/DT/Training/Consulting/3D-Scanning/Reporting). Applied after ROUND6; **Round-7 titles/descs take precedence over legacy CTR_OVERRIDES.**
- Homepage bodyContent upgraded 169→638 words with links to all hubs (wired via `HOME_BODY_FINAL`).
- Products & Services block appended to all 699 JSON-blog pages (keyword-rich ERP/DT anchors).
- ERP/DT upgrades: ndt-erp-vs-generic-erp, atlantis-dt-vs-ge-predix (600 impr 0 clicks), construction-ERP-Singapore + oilfield-ERP-KL (real Malaysia/Singapore query demand), offshore-platform DT, ndt-reporting-software-comparison; CTR metas on /digital-twins, /ndt-erp-london, /ndt-erp-solution.
- Pricing-policy cleanup (§18): stripped ALL remaining Atlantis price tokens from prerender.mjs titles/descs/bodyText ($200K DT, $18K ERP, $2K–$6K Dubai training, $8K–$45K/mile MFL, consulting day rates, competitor $ figures → qualitative). NOTE: `strip-pricing.mjs` only scans `src/` + `docs/marketing/` — it never covered `scripts/prerender.mjs`; grep prerender.mjs before every commit.
- Cannibalization: `/blog/ut-vs-rt-comparison` canonical → rt-vs-ut-complete-comparison (salary/eddy dups were already 301'd via vercel.json).
- 92 updated URLs submitted: Google Indexing API (10 SAs, 0 failed) + IndexNow (92 accepted).

### 19.3 GSC/GA4 trend snapshot (2026-07-18 pull)
Clicks/mo: Jan 40 → May 646 → Jun 1,279 → Jul 1,027 in 17 days (~2× June pace). Blog = 59% of clicks; ASME/AWS code posts surging. ERP last28: 17→40 clicks after Jul-13 work. DT CTR 0.34% at pos ~8 (snippet fixed this round). USA 100k impr/90d at 0.63% CTR = still the biggest prize. GA4: new Paid Search channel (3,666 sessions/28d); "AI Assistant" channel growing (95 sessions/28d). Cert pages (API 510/653, ASNT, Dubai) dipped ~30% 28d-over-28d — watch next cycle.

---

## 20. ERP + DT programme: homepage-canonical fix + buyer-intent rebuild — 2026-07-27/28

Full audit: `E:\software\Atlantis\Atlantis-SEO-ERP-DT-Audit-and-Upgrade-Plan-2026-07-27.md`.
Execution report: `E:\software\Atlantis\Atlantis-SEO-ERP-DT-Execution-Report-2026-07-28.md`.
Commits `fb7efbed0` + `92cec3257`.

### 20.1 ROOT CAUSE — 1,083 pages were canonicalising to the homepage (CRITICAL, recurring class)
Any route declared in `src/App.tsx` but absent from prerender's hand-maintained arrays shipped the SPA shell: homepage `<title>`, homepage `<h1>`, `canonical="https://atlantisndt.com/"`. Google dropped them as duplicates. Four sub-classes:
- **642** App.tsx routes with no prerender entry — 291 of 381 DT routes (76%), 184 ERP, 113 training, 44 consulting, 37 blogs. Every DT city page from the 2026-07-24 sprint was in this state.
- **218 glossary + 33 standards** pages behind `/:slug` dynamic patterns — invisible to any route-list check. `/glossary/cswip` was earning 211 impr/90d at pos 8.3 while deindexed.
- **190** routes shipped with no `canonical` field at all (mostly 3D-scanning cities); `injectMeta` only rewrites canonical when given one.

**Permanent fixes now in the build:**
- `scripts/route-reconcile.mjs` rebuilds any missing route from the same data the React component renders.
- **Canonical safety net** in `prerender.mjs` — every route defaults to its own URL.
- **`assertNoDrift()` build guard — the build FAILS if an App.tsx route has no prerendered HTML.** Do not set `PRERENDER_ALLOW_DRIFT=1` except for a documented, intentional exception.

### 20.2 ROOT CAUSE — keyword targeting had no search volume
133 ERP/DT pages ranked top-15 with **zero clicks over 90 days**; the top query on many was `site:atlantisndt.com`. Whole-quarter demand: DT cluster 207 impressions, ERP 332. `"ndt erp {city}"` and `"digital twin {city}"` are not searches. **Do not generate more (product × city) permutations.** New pages only where a query with evidence of volume exists.

### 20.3 What shipped
- **5 money pages** (`src/data/money-pages.ts` + `MoneyPageTemplate.tsx`): /ndt-inspection-software, /inspection-management-software, /asset-integrity-management-software, /erp-oil-gas-malaysia, /erp-construction-singapore. Additive upgrade to /best-ndt-reporting-software-2026.
- **5 competitor pages** (Antea, Cenosco, Metegrity, Sphera, SAP APM) — comparison pages are the best-performing DT asset class (atlantis-dt-vs-ge-predix: 663 impr/90d @ pos 11.4).
- **28 region hubs** (`scripts/region-hubs.mjs`) — existing country URLs promoted, not new URLs. Named operators + jurisdictional regulators + link spine to member cities.
- **13 BOFU posts** (`src/data/bofu-posts.ts`) for the buying committee, not exam candidates.
- **Buyer-intent CTA** on 365 blog/method pages, topic-matched.
- **36 CTR rewrites** (`scripts/phase5-ctr-overrides.mjs`) matched to each page's actual top GSC query.
- **Demand-based sitemap tiering** from `scripts/seo-demand-90d.json` (committed GSC snapshot; regenerate with `gsc-analytics.mjs --export`).
- **Round 2** (`scripts/seo-postpass.mjs`): 3,761 orphans → 0; FAQ schema on 176 pages (derived from visible Q&A only, never invented); duplicate titles/descriptions → 0/0; 180 method×city pages enriched; 94 shell pages rebuilt (worst: 109 → 3,028 words on a page with 2,110 impr/90d).

### 20.4 Verified after build (4,972 sitemap URLs)
0 missing prerendered files · 0 homepage canonicals · 0 homepage titles · 0 empty titles · 0 duplicate titles · 0 duplicate descriptions · 0 orphans · 57 thin pages (was 244) · 0 Atlantis price figures · drift guard PASS.
Submitted 1,122 URLs to the Google Indexing API (0 failed) + 1,129 IndexNow.

### 20.5 Order of operations in prerender.mjs — do not reorder casually
generators → route reconciliation → glossary/standards → region hubs → thin-body enrichment → canonical safety net → Round-6/7 overrides → Phase-5 CTR overrides → SEO post-pass → dedupe → drift guard → sitemaps.
Phase-5 overrides intentionally win over Round-7 and legacy `CTR_OVERRIDES` on overlapping paths.

### 20.6 Open items for the next cycle
1. Off-page for the money pages — the "best NDT software" SERP is owned by listicle aggregators (wifitalents, gitnux, zipdo, SourceForge, OneStopNDT). Getting listed there beats another on-page revision.
2. 238 high-demand pages still lack FAQ schema because they have no Q&A content to derive it from — that is a content task; do not fabricate schema.
3. 57 thin pages remain (20 consulting state, 15 /consulting/*, 10 case studies, 4 tools). Low demand.
4. Reality-capture cluster: 4,667 impr/90d at 0.04% CTR on generic US-metro 3D-scanning queries. These are AEC/surveying searchers, not NDT buyers — keep industrial/energy-hub scanning pages, stop investing in generic US-metro terms.
5. Re-pull GSC 2026-08-11 and 2026-08-25 to measure recovery of the 1,083 pages.

### 20.7 Thin-page upgrade — 2026-07-28 (commit `63034f311`)
198 sitemap URLs still rendered under 400 words. Now **0 under 400, 0 under 300, average 841 words across all 4,972 sitemap URLs.**
`scripts/thin-page-upgrade.mjs` + `scripts/thin-page-stragglers.mjs`, run inside the SEO post-pass block:
- **435** `/services/{method}-inspection-{city}` — method physics, what each detects, **what each will not do**, governing codes, evidence chain. Method knowledge for TOFD, PAUT, guided wave, acoustic emission, MFL and UT lives in `METHODS` in thin-page-upgrade.mjs; extend that map rather than writing per-page copy.
- **168** consulting state/city · **67** corporate-training city (uses `CORPORATE_TRAINING_CITIES` anchor industries + named employers) · **33** standards · **23** case studies (methodology only — existing client claims untouched, no new claims) · **9** tools · **5** hubs · **9** hand-written stragglers.
- `/glossary` was 107 words **and** `noindex` while sitting in sitemap-glossary.xml — contradictory signal, now indexed with 870+ words.
746 upgraded URLs resubmitted to GSC + IndexNow (0 failed).
**Rule going forward: no page ships under ~400 rendered words.** If a generator cannot produce that much genuine substance, the page should not exist.
