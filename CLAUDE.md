# Atlantis NDT — Project Single Source of Truth
**Repo:** `atlantis-reimagined1` (this directory, `e:\software\Atlantis\atlantis-reimagined1`)
**Last updated:** 2026-05-24 (Day 2 of 30-day click goal)

This file is the primary context for ALL future + current SEO work on atlantisndt.com.
Read this first. Everything else is supplementary.

---

## 1. Business + product context

Atlantis NDT is a global NDT (Non-Destructive Testing) services + software company.
Founder/CEO: Anoop Rayavarapu — Houston TX + Hyderabad India, ASNT Level III.

**Four product segments (drive ALL SEO planning):**

| Segment | Path tree | Product |
|---|---|---|
| **Training** | `/training`, `/training-{region}`, `/ndt-training-{city}`, `/asnt-certification`, `/api-{510,570,653}-certification`, `/corporate-training/*` | NDT Level I/II/III training; corporate vertical training |
| **Consulting** | `/consulting`, `/consulting-{region}`, `/consulting/ndt-consulting-{city}`, `/consulting/{service-line}` | ASNT Level III consulting, API RBI, FFS, code consulting |
| **ERP** | `/erp`, `/erp/*`, `/ndt-erp-*`, `/erp/{app}-for-{industry}`, `/erp/{app}-for-{country}`, `/erp/{app}-ndt-inspection-companies-{city}` | "Affordable NDT ERP — $18,000/yr, all 30+ Odoo apps included, fully customizable" |
| **Digital Twins** | `/digital-twins`, `/digital-twin-{city}`, `/digital-twins/{usecase}`, `/digital-twins/{usecase}-{city}`, `/compare/atlantis-dt-vs-{competitor}`, `/compare/digital-twin-vs-{tech}` | $200K/yr enterprise SaaS digital twin platform |

Plus blog + methods at `/blog/*`, `/ultrasonic-testing`, `/radiographic-testing`, etc.

**Tech stack:** React 18 + TypeScript + Vite + Tailwind + shadcn/ui + Radix UI + react-router-dom. Build: `vite build` + `react-snap` prerender. Deployed: Vercel (auto-deploy from GitHub `anoop-1/atlantis-reimagined1` main branch).

---

## 2. SEO goals + memory rules

**Primary goal:** 1,000 clicks/day = **30,000 site-wide clicks/month** by **2026-06-22** (set 2026-05-24).

**Equal-segment improvement rule** (memory: `~/.claude/projects/e--software-Atlantis/memory/feedback_equal_segment_improvement.md`):
Every audit cycle pushes ALL 4 segments (Training, Consulting, ERP, Digital Twins) forward by ~20% equally — no segment lags. Concretely each cycle adds ~20% more pages + CTR rewrites + content enrichments + backlinks per segment.

**Additive-only rule** (memory: `feedback_no_undo_prior_work.md`):
SEO work is additive — never strip existing pages/content/features when iterating. New content only.

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
- Vercel project: `atlantis-reimagined1` (team `team_RvIKW6PFuuliC77dktstAJmQ`, scope `anoops-projects-776b2b4a`)
- GitHub auto-deploy on push to `main`
- Build: `vite build && node scripts/prerender.mjs` (per `package.json`)
- Sitemap: `public/sitemap.xml` + sub-sitemaps (sitemap-blog, sitemap-consulting-locations, sitemap-digital-twins, sitemap-methods, sitemap-other, sitemap-training, sitemap-core, sitemap-index, sitemap-glossary)
- ~3,400+ URLs in primary sitemap. Regen via `npm run sitemaps`.

### 5.2 Satellite sites (35 sites, all Vercel-CLI deployed, no Git link)
35 backlink satellites in `backlink-sites/{name}/` — each a separate Next.js 14 app with its own Vercel project (`Link: {}` empty in Vercel = CLI-deployed). Each has `.vercel/project.json` linking to its `prj_*` id.

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
Title:  Affordable NDT ERP in {City} — $18,000/yr All Odoo Apps Included | Atlantis NDT
Desc:   Atlantis NDT ERP for inspection companies in {City}, {Country}. $18,000/yr flat — 30+ Odoo apps included. ASNT/ISO 9712 certification tracking, work orders, RBI. Demo: info@atlantisndt.com
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
- **Backlink-sites are CLI-deployed** — not GitHub-linked. Must run `deploy-all-satellites.mjs` after edits.
- **Pre-existing TS errors** — `src/components/FeatureSection.tsx`, `CorporateTrainingLocationPage.tsx`, `construction-ndt-services.tsx`, `aerospace-ndt-services.tsx`, parts of `/erp-industries/`, `/erp-modules/`, `Contact.tsx`, `CorporateNDTTraining.tsx` — unrelated to current SEO sprints, do not block Vite build
- **Vite build is lenient** (esbuild) — Vercel deploys even with TS warnings
- **JSX entity escapes** — never use raw `>` or `<` in JSX text content; use `&gt;` / `&lt;`. Common Day-0 / Day-2 build error
- **GA4 API** — NOT enabled. To enable: Analytics Data API + Admin API in GCP project 139446864572 + service account viewer access
- **Core Web Vitals** — No CrUX data yet (need ~1k+ visits/28d)

---

## 12. Archive — sprint-specific docs

Daily sprint logs preserved in `docs/seo/ARCHIVE/`. Marketing assets stay in `docs/marketing/`. Anything dated `2026-05-23-*` or `2026-05-24-*` is sprint-specific history; this CLAUDE.md is the current state.

When starting a new sprint cycle, read THIS file first. Don't re-read old sprint logs unless debugging a specific historical decision.
