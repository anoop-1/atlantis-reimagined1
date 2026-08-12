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

### 20.8 FAQ coverage + off-page for the money pages — 2026-07-28 (commits `828fc0664`, `cfd271e04`)

**FAQ schema: 857 pages now emit FAQPage (was ~580).** Pages with 150+ impr/90d and no FAQ schema: 69 → 18 (remainder are /contact, /about, hub indexes and glossary entries carrying DefinedTerm instead — FAQ is not the right format there).
Two causes, both fixed. **Schema is only ever derived from Q&A the page actually renders** — never fabricated.
1. **Extraction.** Three visible Q&A conventions exist on this site; only one was parsed. All three now are:
   `<h3>Q?</h3><p>A</p>` · `<p><strong>1. Q?</strong> A</p>` · `<p><strong>Q1: Q?</strong></p><p>A: A</p>`
   Missing the latter two left `/blog/aerospace-composite-inspection-ndt-methods-guide` (1,234 impr) and `/blog/heat-exchanger-tube-inspection-methods-procedures` (1,066) rendering full Q&A with no schema.
2. **Authored content** — `scripts/faq-content.mjs`. 14 hand-written sets (visual testing 6,012 impr; PAUT guide; ship hull inspection — "ship hull inspection" 550 impr at pos 52; API 579; CUI; forging defects; ASME Section V; procedure writing; Level III; /ndt-for-oil-gas) plus parameterised families for 3D-scanning city, training city and method×city. Questions taken from each page's actual top GSC queries.

**Off-page — `scripts/satellite-money-page-articles.mjs` + `scripts/satellite-blog-index.mjs`.** One substantive article on each of the 8 git-linked satellites, linking contextually to the money pages. Anti-footprint: own angle, author, date and anchor phrasing per article; links inside the argument not in a footer; 2–3 links max; each piece stands on its own.
Also fixed: 7 of the 8 satellites published `/blog/{slug}` articles and sitemapped them but had **no `/blog` index page** — those articles were orphans inside their own sites. Each now has a real index built from the articles' own metadata.
**Satellites are git-linked with `git diff --quiet HEAD^ HEAD -- backlink-sites/<name>` as the ignore-build command (§17.1), so they rebuild only when their own folder changes.**

### 20.9 Noindex audit + recovery, and thin content across the WHOLE corpus — 2026-07-28 (commit `654960109`)

**Why 349 pages were noindexed.** 275 from `scripts/pseo-noindex-list.json` (generated **2026-05-16** as a doorway-page defence when those pages were thin permutations); 74 from the reconciler's uniqueness gate + curated-city list.

**Two defects in that state:**
1. **The list was stale.** It noindexed `/ndt-erp-india` (1,443 words, 15 impr + 2 clicks/90d) and `/ndt-erp-malaysia`, `/ndt-erp-oman`, `/ndt-erp-nigeria` — **the region hubs built 2026-07-27**. Excluded by a decision made two months before their content existed. **455 impressions/90d were landing on noindexed pages.**
2. **The thin ones stayed thin.** Every thin-page generator skipped `noindex` routes, so 146 noindexed pages under 400 words were never upgraded — crawl budget spent on 322-word permutations.

**Fix — `scripts/noindex-recovery.mjs`:**
- Real content for `/industry/{sector}-ndt-{city}` (8 sectors: aerospace, construction, manufacturing, marine, oil-gas, petrochemical, pipeline, power-generation — assets, damage mechanisms, methods, codes, what makes the sector different), `/inspection/{type}-services-{city}` (4 types) and `/training/{cert}-training-{city}` (4 certs).
- **Hard-coded list replaced by a measurement on shipped content.** Re-index only if ≥650 words AND word-shingle Jaccard vs family siblings < 0.55. **Threshold is calibrated, not arbitrary:** median intra-family similarity is 0.02–0.20 where real per-city research exists, 0.41–0.54 where it does not.
- **A city-permutation page with no city-specific research keeps noindex whatever its length** — a template with a name swapped in is still a doorway page.
- All thin-page generators now run on noindex routes too (they are crawled regardless).

**Result:** noindex 349 → **223**. Re-indexed 126; kept 223 with recorded reasons (near-duplicate 193, no city research 29, thin 1). Sitemap 4,972 → **5,098**.
**Across all 5,321 prerendered pages: 1 page under 400 words** (`/embed/ndt-reference`, a 141-word embed widget, correctly noindexed). Average **884 words**.
980 recovered/upgraded URLs sent to IndexNow; **GSC daily quota was exhausted (2,000/day across 10 SAs) — resubmit `scripts/indexing-url-list-2026-07-28-noindex-recovery.json` on the next day.**

**Rule:** do not hand-maintain a noindex list. `reindexQualifiedPages()` decides from the content that actually ships, every build.

### 20.10 ERP repositioning + lead-funnel fix — 2026-07-29 (commit `c6fe16a73`)
Full assessment: `E:\software\Atlantis\Atlantis-ERP-CRO-and-SEO-Assessment-2026-07-29.md`.

**THE FUNNEL LEAK (GA4 property 517088706, 28d).** `/erp` is the **largest landing page on the site — 7,638 sessions**, 79% bounce. Site-wide funnel: **392 `erp_demo_request_click` → 66 `form_start` → 34 `generate_lead`.** Five of six who clicked a CTA never started a form.
**Cause:** every ERP CTA sent visitors to `/contact?subject=ERP%20Demo%20Request`, which rendered a **blank form that never read the query string**, and **ERP was not even in the Service Interest dropdown**.
**Fixed:** `/contact` honours `?service=` and `?subject=` (preselect + seed message) · dropdown gains ERP, 3D Scanning and "Something else" · **inline enquiry form directly under the `/erp` hero** · three CTA bands, each led by **"Reach Us Now"** anchored on-page (`#erp-enquiry`), demo booking secondary.

**REPOSITIONING (owner direction).** ERP pages now read as a **business management platform**, not an NDT product — the market for "run my business on one system" dwarfs "NDT ERP", and paid traffic was already being bought against that wider audience.
- `scripts/erp-generic-positioning.mjs` — hub metas + a generic positioning section appended to **every** ERP-family page.
- City pages keep the term they earn impressions on; they are broadened by the added framing, **not** by discarding their targeting.
- Inspection/testing named as the sector we go deepest in, not the whole product.

**NO NUMBERS — HARD RULE, wider than the pricing rule.** No app counts, percentages, hour claims or timelines anywhere in ERP copy. `assertNoNumbersInErpHubMeta()` **fails the build** if a numeral returns to hub copy. ERP city title template de-numbered at source (`prerender.mjs` ~line 10618). Also removed a per-weld price pair from `/ut-vs-rt-comparison` (outright pricing-policy breach).

**GA4 read:** Paid Search 10,108 sessions @ 22% engaged vs Organic 3,671 @ **52%** (organic +78% PoP). India 10,956 @ 25% and Singapore 2,388 @ 14% dominate; US 1,299 @ **45%**, Canada 58%, Brazil 57%. Mobile 64% of sessions @ 25%. **Judge paid on `generate_lead`, not sessions, and re-weight geography.**

**GSC read:** site **+67% clicks / +40% impressions** PoP. Declines are localised: two anomalous impression collapses predating this week (`/blog/asnt-snt-tc-1a-vs-cp-189-comparison`, `/blog/api-653-tank-inspection-guide` — both verified 200 + self-canonical, so Google-side); two expected (intentional 301 sources); one genuine competitive slide on the **API certification cluster**, second cycle running — needs attention next.

### 20.11 URL Inspection results + correction — 2026-07-29
**CORRECTION.** The "two catastrophic impression collapses" reported earlier this session (`/blog/asnt-snt-tc-1a-vs-cp-189-comparison` 2,052→2, `/blog/api-653-tank-inspection-guide` 3,368→22) were **an artefact of the analysis script, not a real event.** The script stripped trailing slashes when keying pages into a Map, so `/page/` and `/page` collided and the tiny slashed row overwrote the real one. Actual figures:
- `/blog/asnt-snt-tc-1a-vs-cp-189-comparison`: 2,052→**2,710 impr**, 23→**35 clicks**, pos 6.7→**5.8** — improved on every measure.
- `/blog/api-653-tank-inspection-guide`: 3,368→3,144 impr — broadly flat.
**Lesson for future analysis scripts: never collapse trailing-slash variants into one Map key. Sum them, or keep them separate and inspect both.**

**URL Inspection (targeted, 5 URLs):** every one returns *Submitted and indexed* · PASS · robots ALLOWED · fetch SUCCESSFUL · Google canonical == user canonical · crawled within the week. `/api-510-certification`, `/api-653-certification` and `/magnetic-particle-testing` are therefore **genuine competitive ranking losses, not technical faults** — second cycle running; this cluster needs content/authority work, not another audit.

**INDEX COVERAGE IS THE REAL CEILING.** Deep sweep of 496 URLs: **166 indexed, 313 not indexed, 17 errors = 33% index rate**, with **6,886 URLs still queued (~35 days at daily quota)**. Publishing more pages does not help until this moves. Prioritise submission of pages with measured demand over breadth.

**Trailing-slash duplicates:** 19 URLs earn impressions with a trailing slash, 10 have a non-slash twin also earning (278 impr, 1 click on the duplicate form). Both forms 200, **but the slashed form already canonicals to the non-slash form**, so Google consolidates on its own. Do **not** touch the SPA catch-all rewrite to force redirects (see §13) — monitor instead.

---

## 21. Full audit + ERP growth plan — 2026-07-29 (commit `bbbd99773`)
Full document: `E:\software\Atlantis\Atlantis-SEO-Audit-and-ERP-Growth-Plan-2026-07-29.md`.

### 21.1 CRITICAL BUG — CTR overrides were never applying
**32 of 36 wave-1 CTR overrides shipped 2026-07-28 never reached the page.** The wave map was merged only inside the `if (r7 …)` Round-7 branch, and `override` was nulled whenever a wave entry existed — so any path with a wave override and **no** Round-7 entry silently kept its old title. Affected `/asnt-certification` (14,963 impr/90d), `/api-570-certification`, `/api-510-certification`, `/api-653-certification`, `/consulting`, the 3D-scanning city pages and 26 more. **Part of why the API cert cluster kept sliding while apparently being fixed.** Now applied directly in the render loop.
**Rule: after adding any override layer, verify the built HTML — do not trust the "applied: N" counter, which counted merges that were then discarded.**

### 21.2 Fresh numbers (28d to 2026-07-26 vs prior 28d)
Site **clicks 1,176 → 1,996 (+70%)**, impressions 99,276 → 141,587 (+43%), CTR 1.18% → 1.41%.
Segments (clicks): Blog 977 · Training/Cert 598 · Other 292 · DT+Scan 58 (down from 69) · **ERP 34** (up from 23, from **578 pages**) · **Glossary 21 (from 0 — the canonical fix working, 6,266 impr from zero)** · Consulting 16.

### 21.3 THE ERP DIAGNOSIS — read before commissioning any more ERP pages
90 days: **875 ERP pages → 7,256 impressions → 75 clicks.** Only **180 distinct queries** reach any ERP page, and the single largest is **`site:atlantisndt.com` at 267 impressions — us**.
**Business-software demand reaching the site: 38 queries, 374 impressions, 1 click per quarter.** We are not losing ERP traffic — **we are absent from the category.** Positions where we do appear: "erp system oil and gas malaysia" p39, "construction erp software singapore" p34, "erp software london" p87, "cmms software uae" p66.
**DO NOT add more ERP city/module/industry permutations, and do not chase "erp software" head terms from this link profile.** Three ways ERP grows, in order of certainty: **(A) harvest the 141k impressions/month we already have** — that audience *is* the ERP buying committee; **(B) win the winnable intersection** (Malaysia oil & gas, Singapore construction, Aberdeen, UAE — already at p20–40); **(C) build category authority slowly** with non-NDT content that earns links.

### 21.4 THE BIGGEST OPPORTUNITY IS NOT ERP
**71 pages rank top-10 with ≥200 impressions and <3% CTR — worth ≈7,156 clicks/90d at a 5% CTR**, against a site earning ~2,000 clicks/28d. Worst: `/blog/cwi-certification-requirements-cost-career-impact` 2,399i @ **0.17%**, `/blog/ndt-technician-salary-guide-2026-industry-report` 1,017i @ **0.10%**, `/blog/aerospace-composite-inspection-ndt-methods-guide` 1,181i @ **0.08%**, `/compare/atlantis-dt-vs-ge-predix` 675i @ **0.00%**.
`scripts/ctr-wave2-overrides.mjs` — 26 query-matched rewrites shipped this cycle.

### 21.5 Still declining
`/api-570-certification` 39→20 clicks (p9.3→12.4), `/api-510-certification` 22→7 (p13.4→18.8), `/blog/eddy-current-testing-complete-guide` 28→19. URL Inspection: all *Submitted and indexed*, PASS — **genuine competitive losses, third cycle.** This cluster funds the site; defending it is Priority 2.

### 21.6 Next cycle order
1. Finish CTR harvest (remaining ~45 of the 71) + route that traffic to ERP/DT.
2. Defend the API certification cluster.
3. ERP Track B — deepen Malaysia / Singapore / Aberdeen / UAE intersection pages, **not** more cities.
4. ERP Track A — buyer-facing assets linked from the highest-traffic blog posts; measure via `template_download` / `generate_lead`.
5. Indexing backlog (33% index rate, 6,886 queued, ~35 days).

### 21.7 Strategy executed — 2026-07-29 (commit `ae443b158`)

**Priority 1 — CTR harvest complete.** `scripts/ctr-wave3-overrides.mjs` adds 33 query-matched rewrites, finishing the 71 top-10 / sub-3%-CTR pages (≈7,156 clicks/90d at 5% CTR vs a site earning ~2,000/28d). Includes the zero-click pages `/blog/weld-inspection-acceptance-criteria-aws-vs-asme` (443i, 0c) and `/blog/ai-in-ndt-machine-learning-for-defect-detection` (356i, 0c). Wave 3 also **de-cannibalises** siblings competing on the same term (ASME Section V articles, the two B31.3 pages, API salary/cost pages) by differentiating on angle.
**Override precedence is now: wave 3 → wave 2 → wave 1 → Round-7 → legacy CTR map.**

**Priority 2 — cert cluster defence.** `scripts/cert-cluster-defence.mjs`. The 4 hubs were NOT thin (~2,000w) and NOT link-poor (500–700 inbound) and are indexed and healthy — the loss is competitive. What is gaining is question-shaped content (exam schedule 27→63 clicks, BOK changes 7→31, pass rates, study guides), so each hub now answers those operational questions directly and routes to the detail pages, becoming the centre of the cluster that is winning.

**Priority 3 — ERP Track B.** `scripts/erp-intersection-boost.mjs`. **No new pages.** 11 feeder pages holding the impressions now point at the destination; both destinations (`/erp-oil-gas-malaysia`, `/erp-construction-singapore`) gained local specificity — licensing/competency evidence, multi-site and multi-currency reality, the quality record Singapore projects are audited on, migration sequence. Both now ~2,700 words.

### 21.8 BUG — the committed demand snapshot had the same slash defect
`scripts/seo-demand-90d.json` was built by stripping the trailing slash when keying and letting the last row win, so a tiny `/page/` row could overwrite the real one. **16 entries were materially wrong**, including `/api-570-certification` recorded at **1 impression instead of 8,669** and `/blog/api-653-tank-inspection-guide` at **22 instead of 10,374**.
That snapshot gates **sitemap priority AND the FAQ / authored-content thresholds**, so those pages were demoted in the sitemap and skipped for FAQ schema — `/api-570-certification` had none while its three siblings did. Regenerated with variants **summed**; it now carries FAQ schema and 3,339 words.
**Rule: when regenerating seo-demand-90d.json, SUM trailing-slash variants. Never collapse them into one key.** Third defect from this single pattern — see also §20.11.

### 21.9 Remaining, in order
1. **ERP Track A** — buyer-facing downloadable assets linked from the highest-traffic blog posts; measurable immediately via `template_download` / `generate_lead`.
2. **Indexing backlog** — 33% index rate, 6,886 URLs queued (~35 days at quota). Prioritise by measured demand.
3. **Aggregator listings** for the money pages — owner action.
4. **ERP thank-you page URL** so Google Ads can optimise on leads rather than clicks — owner action.
5. Re-pull GSC ~2026-08-12 and measure against §21 targets: site clicks 2,600+, top-10 sub-3%-CTR pages under 45, ERP clicks 70+, `generate_lead` 60+.

### 21.10 ERP Track A + indexing backlog — 2026-07-30 (commit `c821c92c5`)

**ERP Track A shipped.** `src/data/business-resources.ts` + `src/components/BusinessResourcePage.tsx` — five buyer-facing resources at `/resources/*`, 1,345–1,545 words each, FAQ schema, all live:
`business-software-evaluation-checklist` · `spreadsheet-to-system-migration-plan` · `qualification-and-calibration-register` · `contract-margin-worksheet` · `client-audit-evidence-pack-checklist`

**Why this vehicle:** the `/resources` cluster converts at roughly **5% CTR** (`/resources` 75 clicks from 1,490 impr; calibration certificate template 53 from 973) and already fires `template_download`, so the ERP funnel is **measurable from day one** rather than inferred. Each resource is useful whether or not the reader buys — that is what earns the download — and each **qualifies** the reader by what they chose to download.

**Routing:** the topic-matched blog block now points at the relevant resource as well as the money page — **112 blog pages link to the qualification/calibration register, 14 to the evaluation checklist**. Every resource CTA goes to `/contact?service=erp`, which preselects ERP.

**Indexing backlog.** 5,103 sitemap URLs · 2,099 confirmed indexed · **3,703 queued, of which 1,898 already have measured impressions**. Submitted a **demand-prioritised** batch of 2,000 (highest measured impressions first, not breadth) to the Indexing API and IndexNow. **Repeat this daily until the queue clears — the list generator is in the commit; regenerate rather than reusing the file, since `alreadyIndexed` grows.**

**Indexing run result 2026-07-30:** full daily quota used — **2,000 / 2,000 submitted, 0 failed** across 10 service accounts (batch A 1,444 + batch B 536). Batch A's 556 shortfall was **dedup against `submittedUrls`, not quota**; check `.gsc-multi-state.json` `perAccount` before assuming quota is gone.
**Carry-over for the next run (submit these FIRST):** the five ERP Track A resources were below the demand cut and are still pending in GSC (they are in IndexNow):
`/resources/business-software-evaluation-checklist` · `/resources/spreadsheet-to-system-migration-plan` · `/resources/qualification-and-calibration-register` · `/resources/contract-margin-worksheet` · `/resources/client-audit-evidence-pack-checklist`
List saved at `scripts/indexing-url-list-2026-07-30-new-resources.json`.
**Queue state after this run:** 5,103 sitemap URLs · 2,099 confirmed indexed · ~229 never-submitted remaining (all zero-impression tail) · 5,927 URLs tracked as submitted. **New pages are ranked last by the demand sort, so submit them explicitly before running the demand-prioritised batch.**

**Watch next (re-pull ~2026-08-12):** site clicks 2,600+ · top-10 sub-3%-CTR pages under 45 · ERP clicks 70+ · `generate_lead` 60+ · `template_download` trend on the five new resources · API certification cluster flat or recovering.

---

## 22. Vercel account migration + satellite rescue — 2026-08-02

### 22.1 What happened
The Vercel account hosting atlantisndt.com began returning **HTTP 402
`DEPLOYMENT_DISABLED`** and the site went down. Everything moved to a **new
Vercel account**: user `anuanoop485-7876` (anu.anoop485@gmail.com), team
**`atlantis15`** (`team_Q8oRvd5bzGEOuy0W5CleWy5m`), **hobby** plan.

| Thing | Value |
|---|---|
| Main project | `atlantis-reimagined1` = `prj_OXCYeYbDgSY1q5VL5li9DXs1bVo4` |
| Git link | `anoop-1/atlantis-reimagined1`, branch `main` → **push = auto-deploy** |
| Build | framework vite · install `bun install` · output `dist` |
| Old account (still administrable via its token) | `anoop-4270`, team `anoops-projects-776b2b4a` |

**Domain move needed no A-record change.** Apex A = 76.76.21.21 and `www` CNAME
to apex are still valid Vercel targets. Moving a domain between Vercel accounts
required only two TXT records at `_vercel.atlantisndt.com` (one per hostname),
then `POST /v9/projects/{id}/domains/{name}/verify`.

### 22.2 THE SATELLITE RESCUE — read before ever moving accounts again
Every satellite hardcodes `https://<name>.vercel.app` as its canonical, in
sitemaps, JSON-LD and internal links (~54 occurrences per site). Losing those
hostnames would have meant a codemod across all 35 sites and restarting each
one's authority from zero.

**A `.vercel.app` hostname can be released without deleting the project holding
it:**
1. OLD account: `DELETE /v9/projects/{name}/domains/{name}.vercel.app` → 200.
   The old project survives — reversible, deployments intact.
2. NEW account: create a project with the **same name**; Vercel auto-assigns
   `<name>.vercel.app` because the name is now free. A subsequent explicit
   domain-add returns 409 `duplicate-team-registration`, which means *already
   attached*, not failure.

Skip step 1 and the claim fails with 409 `owned-on-other-team`.
**All 35 satellites kept their exact URLs. No backlink was broken.**

### 22.3 Per-repo git-link cap is 24, not 10 (§5.2 was wrong)
`400 repo_links_exceeded_limit` fires at 24 projects linked to one repo.
`atlantis-reimagined1` holds the main site + 23 satellites. The remaining **11
satellites live in `anoop-1/atlantis-satellites-b`** purely for link slots:
oil-gas-inspection-guide, petrochemical-ndt-hub, pipeline-integrity-guide,
power-generation-ndt, pressure-vessel-ndt, rail-ndt-resource,
renewable-energy-ndt, subsea-inspection-guide, tank-inspection-resource,
weld-quality-resource, welding-inspection-hub.

**Source of truth stays `backlink-sites/<name>` here.**
`.github/workflows/mirror-satellites-b.yml` copies those folders across on push
(secret `SATELLITE_REPO_TOKEN`); that mirror push triggers their builds. **Never
edit `atlantis-satellites-b` directly.**

Each satellite keeps `commandForIgnoringBuildStep = git diff --quiet HEAD^ HEAD
-- <path>` so a push rebuilds only what changed. **That rule also skips the
first build** — clear it, deploy, restore it. Hobby builds run one at a time, so
deploying all 35 is sequential.

### 22.4 Contact form
`/api/contact` returns 500 on any host without `SMTP_*` env vars, and the new
project has none — every submission would have been silently lost, the exact
failure §20.10 was written about. `src/pages/Contact.tsx` now falls back to
**EmailJS in the browser** (commit `a4a658eed`), the same path
`EnquiryCaptureForm` already used. Verified end-to-end on the live domain:
submitted through the real form, traced to `status=sent (delivered via dovecot)`
into the **info@atlantisndt.com** mailbox.
To restore the server path, set `SMTP_HOST/PORT/USER/PASS` on the Vercel project
— it takes priority again automatically.
NOTE: info@ does **not** forward to anoop@atlantisinspection.com (§ elsewhere in
this file says it does — that is stale). Mail sits in the mailbox.

### 22.5 VPS is now a warm standby
`.github/workflows/mirror-to-vps.yml` rebuilds and rsyncs `dist/` to
`/var/www/atlantisndt.com` on every push, and **refuses to ship a build with
under 4,000 prerendered pages** so a collapsed build cannot overwrite a good
standby. nginx config is **generated** from `vercel.json` by
`scripts/gen-nginx-config.mjs` (47 redirects + cache/security headers) — do not
hand-edit it. The contact API runs as `atlantis-contact.service` on **port 3021**
(3001 belongs to ndt-connect's Next.js server), relaying through local Postfix.
Verified 41/41 checks before cutover was even needed.

⚠️ The box terminates TLS behind an nginx **`stream` block on :443** that
SNI-routes to `127.0.0.1:4443`. A new vhost listens **there**, not on :443, and
uses `listen … ssl http2;` (this nginx predates `http2 on;`). Every HTTPS request
arrives with a **loopback client IP** — no PROXY protocol — so per-IP rate
limiting at that layer is meaningless.

**To fail over:** point the apex A record at **148.230.122.172**.
Cloudflare-based automatic failover was designed and **deliberately deferred** by
the owner.

### 22.6 Scope decisions (owner, 2026-08-02)
Only **atlantisndt.com and its 35 satellites** go on the new Vercel account.
**ndt-connect.com stays on the VPS** — do not deploy it to Vercel. **visapath and
its satellites: do not deploy at all.**

Note: the old account also holds 13 further satellite-looking projects whose
source is **not** in `backlink-sites/` (ndt-standards-reference,
offshore-ndt-guide, ndt-digital-technology, aerospace-ndt-center,
corrosion-engineering-guide, pressure-vessel-inspection, weld-inspection-pro,
pipeline-integrity-hub, ndt-career-portal, tank-inspection-guide,
industrial-coating-inspection, rt-testing-hub, ut-testing-academy). They were
left untouched — their source needs locating before they can be moved.

---

## 23. SEO audit + depth where the data says it is missing — 2026-08-02

### 23.1 The finding that contradicts the assumption
**ERP is not thin.** 1,271 indexable pages, average **1,084 words, zero under 650**.
Digital Twin averages 887. The thin mass is elsewhere. Measure before authoring.

Site baseline at audit: 5,103 indexable pages, average 965 words, 0 under 300.

| Segment | Pages | Avg words | Under 650 | No FAQ schema |
|---|---:|---:|---:|---:|
| ERP | 1,271 | 1,084 | **0** | 1,089 |
| Digital Twin | 389 | 887 | 80 | 83 |
| **Glossary** | 219 | **500** | **213** | 219 |
| **Methods** | 495 | **549** | **476** | 479 |
| Services | 881 | 906 | 0 | 880 |
| Training | 258 | 683 | 164 | 127 |

**Thin AND already earning: 642 pages · 22,335 impressions · 391 clicks.**
Ranked: Glossary 190 pages/7,924 impr · Methods 261/4,763 · Other 100/4,340 ·
Training 40/1,767.

### 23.2 ERP and DT: the constraint is demand, not depth
90d to 2026-07-30: **ERP 76 clicks / 6,960 impr; DT 22 clicks / 4,313 impr.**
- ERP: 437 of 1,271 pages earn zero impressions. `/ndt-erp-solution` (the top ERP
  page, 420 impr) returns **7 named queries totalling 14 impressions**, the
  largest being `site:atlantisndt.com` — us. Confirms 21.3: **absent from the
  category, not losing in it.**
- DT: **331 of 389 pages earn zero impressions.** `/digital-twins` shows 2,135
  impressions but only **201 across 30 named queries**, and those are brand
  (`atlantis platforms` p29) or `site:` operators; `asset integrity digital twin`
  sits at **p63**.
- **The exception is the comparison pages** — genuine third-party intent
  (`predix digital twin` 91i, `predix alternatives` 16i, `ge predix apm` 15i).
  Reconfirms 20.3. That is where DT investment belongs.

⚠️ **GSC query API does not sort by impressions when clicks are zero.** It
returned alphabetical rows, which reads as a head-of-demand list and is not one.
Always sort client-side — see `scratchpad/page-queries.mjs` pattern.

### 23.3 What shipped
- **`scripts/glossary-depth.mjs`** — authored depth for **60 terms covering 78%
  of glossary impressions**, avg +290 words: how it works · what it finds ·
  **what it will not find** · how it is actually done · governing codes · where
  it goes wrong. Terms without researched facts are **left short, not padded** —
  padding produced the p40–78 pages, and the similarity gate suppresses it anyway.
  Google's treatment splits exactly on substance: specific terms p6–17
  (flat-bottom-hole p6, cswip p8, astm-e165 p7), name-restating terms p40–78
  (ultrasonic-testing p64, eddy-current p72, hydrogen-embrittlement p78).
- **`scripts/dt-depth-2026-08-02.mjs`** — 6 competitor comparisons + FPSO +
  heat-exchanger + the ROI calculator (**position 4.7 on 388 words**, best DT
  position on the site → 1,107w). Comparison pages lead with what the rival is
  genuinely good at; a page that only flatters its owner is seen through by the
  buyer it targets. **The 331 silent city permutations are deliberately untouched
  (20.2).**
- **`scripts/erp-faq-2026-08-02.mjs`** — buyer Q&A on **1,015 ERP pages**
  (migration, spreadsheets, lock-in, unusual process, data exit), generic-first
  per 20.10. **No numerals at all**; `assertNoNumbersInErpFaq()` fails the build
  if one returns.

**Verified:** 5,326 pages · 5,104 sitemap URLs · drift guard PASS · 0 under 300w ·
site avg **965 → 1,075** · ERP avg **1,084 → 1,506** · glossary thin 213 → 158 ·
FAQ schema reached 309 more pages. FAQ injection stays demand-gated at 30
impressions, so low-demand pages gain visible Q&A without schema spam.

### 23.4 ⚠️ VERCEL HOBBY DEPLOY CEILING — 100 per 24 hours
Migrating 35 satellites consumed the quota. **Three pushes afterwards created no
deployment at all** — Vercel does not record a failed deployment, it simply makes
none, so the dashboard looks idle and the site silently serves an older build.
A manual API trigger returns `402 payment_required`,
`api-deployments-young-hobby-team-24h`, with `remaining: 0` and a reset epoch.
**Check `/v6/deployments` for the deployed commit SHA before claiming anything is
live.** Pro removes the limit.

### 23.5 Remaining, in order
1. **Methods cluster** — 495 pages, avg 549 words, 476 under 650, **4,763
   impressions**. Second-biggest thin cluster; needs the same per-method
   knowledge-map treatment the glossary got.
2. 158 glossary terms still unauthored (the 22% tail of demand).
3. Deploy the 2026-08-02 content when the Vercel window resets, then submit
   changed URLs to the Indexing API + IndexNow.
4. `oil-gas-inspection-guide.vercel.app` needs claiming in Bing Webmaster Tools
   (IndexNow 403 `UserForbiddedToAccessSite`; Google unaffected).

---

## 24. Training cluster audit + CTR wave 4 — 2026-08-04

### 24.1 THE BIGGEST LEVER ON THIS SITE IS SNIPPETS, NOT CONTENT
**66 page+query pairs rank at position <=15 with >=80 impressions and <=2
clicks: 9,627 impressions producing 30 clicks over 90 days.** At a CTR normal
for those positions that is roughly 700-800 clicks a quarter, against a site
earning about 4,200. The rankings already exist.

| Page | Query | Impr | Pos | Clicks |
|---|---|---:|---:|---:|
| /blog/ndt-salary-guide-2026-global | 15 queries incl. "ndt technician salary" p5.2 | 2,427 | 5–10 | ~0 |
| /asnt-certification | "asnt certification" | 776 | **7.4** | **0** |
| /blog/api-510-570-653-exam-schedule-2026 | 6 queries | 897 | 3.8–7.9 | 6 |
| /api-653-certification | "api 653 certification" | 322 | 10.9 | 0 |
| /api-570-certification | "api 570 certification" | 182 | 6.0 | 0 |
| /glossary/phased-array-ultrasonic-testing-paut | "paut" | 284 | 11.7 | 1 |

**Diagnosis:** titles led with the entity and the code.
`ASNT Certification 2026 — SNT-TC-1A + CP-189 Pathway` is accurate and reads
like a standards document; at position seven beneath asnt.org, accuracy is not
the differentiator. `scripts/ctr-wave4-overrides.mjs` rewrites 11 pages to lead
with what the searcher wants. **Wave 4 sits above waves 1–3.** Titles verified
in the built HTML, never from the counter (21.1).

⚠️ Some of these impressions are unwinnable regardless — `asnt sertifiointi`
(Finnish), `sbp.9712 pdf`, and the AI-assistant-style queries hitting `/` at
p1.6–3.2 with 0 clicks. Do not model the whole 9,627 as recoverable.

### 24.2 TRAINING CITY PAGES LOSE ON PROXIMITY INTENT, NOT CITY INTENT
Queries actually reaching `/ndt-training-*`:

| Query | Impr | Pos |
|---|---:|---:|
| ndt training near me | 156 | 49.8 |
| ndt certification near me | 123 | 57.6 |
| asnt training near me | 104 | 37.5 |
| ndt courses near me | 80 | 56.4 |
| **ndt training houston** | **18** | 41.8 |

**Near-me outweighs city-name roughly 8:1.** 47 US city pages, **29 earn zero
impressions**; the performers rank badly (Denver p45 on 1,015 words, Atlanta
p34.6, Houston p33.3) so more words alone has demonstrably not worked.

**"Near me" cannot be won on-page.** It resolves through Google's local pack,
populated from **Google Business Profile** entities with verified addresses. A
national page competes only for organic results below the pack. **One verified
GBP for Houston would likely outperform all 47 city pages for Gulf Coast
proximity queries.** Owner action — requires address verification.

`scripts/training-city-depth.mjs` localises 29 US focus cities with verifiable
substance (industrial base, asset types, level pathway). Denver 1,015 -> 1,918
words, Detroit 493 -> 1,375.

🚫 **NO fabricated local presence.** No claimed classroom, address or
LocalBusiness schema where Atlantis has none — only Houston is marked a genuine
base. Pages state plainly that delivery is on-site at the customer facility.
Fabricated location data is what Google spam policy targets and would not
survive the first phone call.

### 24.3 GA4 read (28d to 2026-08-03)
18,765 sessions · Paid Search 10,305 @ 22% engaged · Organic 4,150 @ **53%**.

- **Geography is commercially wrong.** India 11,149 sessions, Singapore 2,728,
  **US 1,522 (8%)** — for a US training and ERP business the paid spend is in
  the wrong market. Campaign setting, not an SEO problem.
- **`/training` is the best-converting page on the site and almost nobody sees
  it**: 254 views, **87% engagement, 155s**. `/erp` gets 10,053 views at 22%.
  Routing internal and paid traffic to `/training` likely beats any ranking
  change for qualified enquiries.

### 24.4 Methods cluster — DIFFERENT from ERP, do not apply 20.2 blindly
5 methods x ~98 cities = 487 permutations. **Unlike ERP and DT, these earn:
7,814 impressions, 115 clicks, 272 of 487 earning.** Two populations exist:
- **enriched ~860 words → earning** (the 180 enriched in 20.7)
- **un-enriched ~510 words → mostly silent** (~215)

**So the Methods cluster IS worth upgrading** — the enrichment that already
happened demonstrably correlates with earning. This is the largest remaining
thin block and the next content job.

⚠️ **Cannibalisation found:** `/radiographic-testing`, `/ultrasonic-testing` and
`/visual-testing` base pages earn **zero impressions** despite 750–870 words,
while `/glossary/ultrasonic-testing` takes 497. The glossary page is outranking
the money page for the method term. Resolve before enriching further.

### 24.5 Next
1. Methods cluster enrichment (~300 un-enriched permutations) + fix the
   base-page vs glossary cannibalisation.
2. Course schema on training city pages — did not attach because those routes
   already carry `structuredData`; needs emitting as an additional JSON-LD block.
3. Owner: Google Business Profile for Houston; re-weight paid to US/Canada/Gulf.
4. Re-pull GSC ~2026-08-18 and judge wave 4 on clicks for the 11 target pages.

---

## 25. Consolidation + CTR wave 5 + pricing auditor — 2026-08-04

### 25.1 🔴 DRIFT DEFECT — two hand-maintained redirect lists had diverged
`REDIRECT_SOURCE_PATHS` in `prerender.mjs` was a hard-coded Set of 9 paths next
to a `vercel.json` declaring 48 redirects. Three URLs were **301ing at the edge
while still shipping prerendered HTML with a SELF-canonical**, sitting in
`sitemap.xml` and `sitemap-blog.xml`, and receiving **35 internal links**:
`/blog/ndt-career-guide` · `/blog/digital-twins-oil-gas` · `/blog/digital-twins-ndt-guide`.

**Fixed permanently: the Set is now DERIVED from `vercel.json`** (literal sources
only; wildcards and enum rules are patterns, not retirements). The two can no
longer disagree.

**Retiring a URL takes FOUR coordinated edits** — verified, and missing any one
leaves a half-retired URL:
1. `vercel.json` redirects[] — `gen-nginx-config.mjs` reads it for the VPS too
2. `REDIRECT_SOURCE_PATHS` — now automatic
3. **`src/data/blogs.json`** — `RelatedArticles.tsx` builds its link index from
   every record, so a retired slug stays link-eligible until removed here
4. grep hardcoded `href=`/`to=` in scripts and `src/pages/**`

⚠️ **Orphan rescue links only from the live `routes` array**, so fixing (2)
removed 26 of the 35 bad links automatically.

⚠️ **Dead code:** `blogs.json.canonical` (3 records) is read by nothing.
Cross-canonicals only work through `ROUND7_BODY_OVERRIDES` (`prerender.mjs`
~12302).

### 25.2 Cannibalisation — 66 queries, 16,697 impressions, mostly NOT merges
Page-level inspection showed most groups needed **differentiation, not merging**.
Only two pages retired, both verified near-duplicates where the survivor is
longer and stronger:

| Retired | → Winner |
|---|---|
| `/ndt-technician-salary` (1,040w) | `/blog/ndt-salary-guide-2026-global` |
| `/blog/api-653-certification-complete-guide` (1,530w) | `/api-653-certification` |

**Level III cluster** — 4 pages on "asnt level iii consulting" (268 impr, 0
clicks), two of them **CITY pages ranking for a national service term** (San
Diego p81.5, Corpus Christi p62.1). Resolved by: title separation
(`/consulting` conceded the term), 665→1,570 words on the winner, and explicit
"this page covers {city}" framing on the two city pages.

**Already handled:** `/blog/eddy-current-testing-complete-beginner-guide` was
already 301'd — so "eddy current testing" at p71/77/78 is an **authority**
problem, not cannibalisation.

### 25.3 CTR wave 5 — 12 rewrites, above wave 4
De-cannibalisation by title (`/consulting` vs Level III; SNT-TC-1A document vs
ASNT pathway; PAUT glossary/blog/service), buyer-intent service queries, and
`/radiographic-testing` — the last page still carrying a keyword-stuffed
pipe-separated title while being outweighed 7:1 by its own blog.

### 25.4 Featured-snippet capture
Four pages at **position 2.4–3.4 with 0% CTR** — an AI Overview answers above
them. Each now **opens** with an `<h2>` restating the query verbatim plus a
40–55 word direct answer. A snippet answer below the fold is not what Google
lifts.
⚠️ **FAQ/HowTo rich results were withdrawn for most sites in 2023** — FAQ schema
is not a CTR lever. Do not model it as one.

### 25.5 ⚠️ PRICING AUDITOR — and why blanket-stripping is wrong
`scripts/pricing-audit.mjs` scans **built** titles/descriptions and
**classifies**: FORBIDDEN (Atlantis service price) vs permitted (§18 explicitly
allows industry salary data, third-party exam fees, customer ROI, market size).
A blanket strip would destroy the salary cluster, among the highest-impression
content on the site.

It found **3 genuine breaches an eyeball scan missed**, including
**`Atlantis NDT ERP £14.5K/yr` in a live meta description**. The first version of
the classifier missed it because the rate pattern lacked `/yr` — *a false
positive costs a manual look; a false negative publishes a price.* Competitor
figures replaced with the qualitative labels §18 asks for. Now **0 forbidden**.

Run `node scripts/pricing-audit.mjs --strict` to fail a build on any breach.

### 25.6 ⚠️ LESSON — never bulk-replace a bare quoted string in a config module
Rewriting internal links with a naive `'/old-path'` → `'/new-path'` replace also
rewrote **object keys and a route `path:`**, creating duplicate keys where the
last silently wins. It would have applied the old NDT Career Guide title
(carrying `$45K → $140K`) to the salary guide. Caught by diffing keys rather
than trusting the edit; all four lines restored.
**Scope such replacements to `to=`/`href=`/`path:` attributes, and diff the keys
afterwards.** Also write files with `newline=''` — rewriting CRLF as LF produced
1,600-line diffs that masked one-line changes.

### 25.7 Verified LIVE — 25 assertions
Drift 301s ✅3/3 · consolidation 301s ✅2/2 · wave 5 titles ✅8/8 · no price in
Level III title ✅ · content depth ✅5/5 (Level III 1,570w · RT 1,546w · ship hull
1,739w · crack detection 2,605w · **MFL 984→1,367w after the first pass failed
this check**) · snippet blocks ✅4/4 · city framing ✅2/2.
Build: 5,321 pages · 5,099 sitemap URLs · drift guard PASS · 0 forbidden prices ·
no redirect source prerendered or sitemapped (29 checked).

### 25.8 Next
1. **Methods cluster** — ~300 un-enriched permutations (§24.4); these DO earn.
2. Base method pages vs glossary cannibalisation (`/ultrasonic-testing` etc.
   earn zero while glossary ranks).
3. 90 "review" pricing hits — unclassified, worth a manual pass.
4. **Re-run `node scripts/ctr-opportunity-engine.mjs --days 28` ~2026-09-01**:
   total recoverable should fall from 751, and Tier A queries should show
   single-page ownership rather than 3–4 competing.

---

## 26. Method-city depth + UT/VT service split + contact-form fix — 2026-08-04

### 26.1 THE 22x FINDING — city research earns, generic method prose does not
485 /{method}-{city} pages, 90d: **12 pages with city-specific research earn
215 impr/page; 473 with only the generic method block earn 10.** The thin 473
ALREADY carried `enrichMethodCityPages` generic content — more of it is proven
not to work. Confirms 20.9 from the demand side.

**Shipped: `scripts/method-city-depth.mjs`** — 40 markets (89% of cluster
demand) with unique per-market prose (industrial base, assets, governing regime:
Aramco SAES, ADNOC AGES/ICV, NOPSEMA, ABSA/CSA B51, SAQCC-NDT, COFREND, KSNT,
JSNDI, TSSA, Migas, IBR/PESO…) × METHOD_IN_INDUSTRY matrix (5 methods × 13
industries). **188 pages localised**; the 12 already-researched pages are in
`ALREADY_ENRICHED` and skipped. Inter-city shingle similarity 0.18–0.49 vs the
0.55 gate. Honesty rule as 24.2: mobilised-teams model stated plainly, no fake
local presence. Judge on impressions at the ~2026-09-01 pull.

### 26.2 UT/VT base pages — same cure as RT (25.2)
`/ultrasonic-testing` (919→**1,446w**) and `/visual-testing` (806→**1,282w**)
earned zero impressions on keyword-stuffed pipe titles while glossary
counterparts ranked (glossary UT: 497 impr). Service-intent bodies in
`consolidation-2026-08.mjs`, wave-5 titles (now 14/14). Division of labour:
**service page = what a client receives · blog = explainer · glossary =
definition.**

### 26.3 🔴 CONTACT FORMS WERE LOSING LEAD IDENTITY — fixed and verified
A real lead (Victoria, Australia, 2026-08-04 01:33 UTC) arrived with a blank
sender, From/To both info@, and no name/email/company anywhere. **Root cause:
the EmailJS template renders {{name}} and {{message}} only; the code sent
from_name/from_email/company/usecase — silently discarded.** This predates all
2026-08 work; EnquiryCaptureForm has done this since it was built.

Fix (commit `ff1d50b61`, both forms): `reply_to` = client email (makes Reply
answerable — From/To being the connected account is inherent to EmailJS), all
fields written INTO `message`, every alias sent (name/from_name/user_name etc.),
subject carries name+company, source page included. **Verified live**: test
submission through the real form → mailbox shows `Reply-To: <client>` and full
details. Placeholder "Anoop Rayavarapu" → "John Doe".

**Lost-lead recovery: EmailJS dashboard → Email History retains all template
parameters even when unrendered.** The Victoria lead's email/name exist ONLY
there. Historic enquiries likely recoverable the same way — owner action.

### 26.4 Also this session
- VPS mirror workflow REMOVED (owner direction — Vercel auto-deploys; VPS now
  stale, failover = manual build+sync per 22.5 runbook).
- Site-wide price strip attempted twice and **REVERTED** — regex approach
  corrupted a salary range ("pricing on request–…$225,000") and could not
  converge without eating retained salary data. Real scale: **289 pages, 4,681
  non-salary figures.** Owner keeps salary figures. Next approach must be
  batched page-level rewrites with verification between batches, not a global
  regex. `strip-all-pricing.mjs` retained as scanner only.
- Submitted: 202 URLs IndexNow (0 failed), 120 Google (0 failed; rest deduped).

### 26.5 Next
1. ✅ **Pricing batch 1 DONE 2026-08-05** (commit `7263e7c16`): the seven
   price-built pages repurposed to the quote model — asnt-level-3-fees,
   ndt-inspection-cost matrix, mfl-cost, cwi-exam-cost, affordable-crm (carried
   an ATLANTIS price in a live table), cheapest-cmms, ndt-consulting-costs.
   ~340 figures removed, salary retained, live-verified 0 non-salary figures.
   Lessons: mechanical replacement mangles arithmetic-shaped sentences — always
   readability-spot-check and rewrite as prose; a segment replacement ate a JSX
   tag (stray `</Link>`) and broke the build — check tags after prose surgery.
   **Batch 2 remaining:** ~90-page technical-guide tail (incidental equipment
   costs) + erp-london / welding-fab comparison bodies. Scanner totals overstate
   — table-cell salary rows misclassify when the header is outside the context
   window; work the list page-by-page.
2. Glossary tail (158 unauthored terms), Course schema as extra JSON-LD block.
3. ~2026-09-01: ctr-opportunity-engine --days 28 (recoverable <751?), wave 4/5
   clicks, method-city impressions vs the 10/page baseline.

---

## 27. Pricing complete + intl training cities + glossary tail — 2026-08-05

### 27.1 Pricing removal FINISHED (batches 2–3, commits `5651298d9` + `d1b98dbd1`)
Owner decision stands: **strip every price/fee/cost figure (Atlantis,
competitor, third-party exam, equipment); KEEP industry salary/earnings.**
- Batch 2: blogs.json 2,651 → 397 money tokens; every survivor verified
  salary-context. Batches 2i/2j/2k caught what the context-window classifier
  missed: fee TABLES whose header sits >90 chars from the cell (ASNT exam-fee
  table incl. a bold "Total Per Method" row that didn't contain the word
  "Fee"), bulk-discount and tuition figures, a recert program fee, and an MT
  "Level III review fee ($120-$250/hr)". **Earnings kept by design:** consultant
  rates ($200-$400/hr income), lifetime-earnings comparisons, salary tables.
- Batch 3: 8 TSX guide pages (equipment guide, methods comparison, cert guide,
  rt-vs-ut, cwi pass-rate, UT ultimate, odoo-vs-netsuite, eddy guide). A
  blanket `M.sub` wiped 9 `salary:` fields in cert-guide — restored from
  `git show HEAD` by field position. **Lesson: never blanket-sub a file after a
  targeted pass; enumerate remaining matches first.**
- Escape-layer trap: a needle containing `\n` passed through Bash-tool JSON +
  heredoc mangles unpredictably — build needles with `chr(92)+'n'` in a Write-
  tool script, never inline in `python - <<'PY'` when backslashes matter.

### 27.2 International training cities — the biggest training page was thin
`/ndt-training-dubai` is the **largest training-city page on the site (1,435
impr/90d)** and the US-only pass (§24.2) left it generic. New
`scripts/training-city-intl.mjs` REUSES the method-city 40-market map:
training-priority advice composed from each market's industries (INDUSTRY_
METHODS matrix), scheme guidance from `city.scheme`, honest delivery model
(no walk-in centre claimed, no LocalBusiness schema). **28 intl pages
localised** after the map grew.

### 27.3 City map extended to 48 markets (commit `c4f5e967d`)
Demand-pull found 8 earning markets the first 40 missed: **doha 252i, jubail
196i, hyderabad 188i, surat 90i, ras-al-khaimah, dammam, vizag, kolkata**.
Hand-written entries (QatarEnergy/QCS, Aramco SAES + SABIC standards, NAS
410/EN 4179 Hyderabad aerospace, IBR/PESO + ISNT NCB India). Feeds method-city
(188→208) and training-intl (21→28) automatically. **Pattern: one map, many
generators — extend the map, never fork per-cluster city data.**

### 27.4 Glossary tail: 91 terms authored (was 60)
`scripts/glossary-depth-tail.mjs` (+30 by measured demand: aws-d1-1, iso-3452,
en-12668, shear-wave, penetrant-testing, api-510/579/581, level-ii/iii,
cp-189, impedance-plane, pitting, SDH, SFD…) ≈ half the remaining tail.
Merged via `Object.assign(TERM_FACTS, TERM_FACTS_TAIL)`.

### 27.5 Thin audit on the shipped build (5,098 sitemap URLs, avg 1,099w)
842 pages under 650w (site standard remains ≥400w; 650 is the stretch bar).
Demand-ranked leftovers for the NEXT cycle:
- `/blog/ut-vs-rt-comparison` 1,427i @ 556w — **already canonicals to
  rt-vs-ut-complete-comparison; do NOT upgrade a canonical donor.**
- Home 622w/1,682i · `/consulting` 616w/677i · `/ndt-connect` 441w/476i ·
  `/contact` 423i — hand-page work, not generator work.
- `/training/asnt-level-iii-training-{san-diego 330i, cincinnati 151i, tampa,
  dc}` — city-framed pages (§25.2); deepen WITH the city framing kept.
- Methods thin tail: 399 pages but only 1,982i total (~5i/page) — the
  demand-bearing ones are now mapped; the rest are the silent tail (§20.2:
  do not bulk-pad).
- `/regions:25`, resources templates (12 pages/488i), tools/case-studies.

### 27.6 Verified 2026-08-05
- 21/21 dist assertions PASS (intl blocks, glossary >600w, 0 fee-context
  tokens, salary intact, no redirect source shipped).
- d1b98dbd1 READY + live-verified (dubai/abu-dhabi blocks, glossary depth,
  career-path fee table gone, salary present).
- ⚠️ Deploy monitors: `.vt` scratchpad file holds `VERCEL_TOKEN=vcp_…` — parse
  with `grep -o 'vcp_[A-Za-z0-9]*'`, not `cat`, or the API silently 403s and a
  READY deploy looks like NO-DEPLOYMENT-YET.
- 93 changed URLs listed in
  `scripts/indexing-url-list-2026-08-05-batch23-intl-glossary.json`; submit
  after c4f5e967d is READY (IndexNow + Google, ≤2,000/day).

### 27.7 Next
1. Hand-deepen: home, /consulting, /ndt-connect, Level III city-framed pages,
   resources templates.
2. Course schema (extra JSON-LD block) on training city pages — still open.
3. ~2026-09-01 measurement (§25.8 / §26.5): ctr engine <751 recoverable?,
   wave 4/5 clicks, method-city + intl-training impressions vs baseline.

---

## 28. US ERP push — market depth + head-term boost — 2026-08-06 (owner-directed)

### 28.1 The keyword truth for US ERP (fresh GSC API pull, USA-only, 90d)
`scripts/gsc-usa-90d-2026-08-06.json` (country-filtered query + query-page
pulls; pattern in scratchpad gsc-usa-pull.mjs). USA total: ~26.7k impr, 85
clicks, 0.32% CTR. Segments: training 6,692i · codes 3,618i · methods 3,528i ·
services 1,091i · **software/ERP 1,069i** · salary 1,017i.

**There are NO city-level ERP queries in the US.** The software demand is
national head terms:
| Query | Impr | Pos | Owning page |
|---|---:|---:|---|
| ndt reporting software | 96 | **9** | /best-ndt-reporting-software-2026 |
| ndt inspection software | 128 | 19 | /blog/ndt-inspection-software-2026-… |
| ndt software | 128 | 62 | (authority gap) |
| ndt inspection management software | 20 | 45 | landing on /ndt-connect (wrong page) |
| api 653 tank inspection companies | 135 | 35 | /blog/api-653-tank-inspection-guide |
| asnt certification nationwide contracts | 94 | 18 | /asnt-certification |

City pages therefore serve LONG-TAIL + CONVERSION (visitors the head pages
send), not rankings — the head pages carry the ranking fight. Both were built.

### 28.2 What shipped
- **`scripts/erp-us-market-depth.mjs`** — 49 hand-written US NDT markets
  (base / work / anchor per market + ERP-fit prose per market TYPE ×7 +
  type-varied capability leads). Audience = NDT service-provider owners.
  Applied to /ndt-erp-{slug}; min 1,728w, avg 2,077w across the family.
  `assertErpUsNoNumbers()`: digits only inside standards designations
  (SNT-TC-1A, CP-189, ISO 17025, API 5xx, NAS 410, ISO 9712) — strip
  `<[^>]+>` BEFORE the digit scan or `<h2>` false-positives.
- **11 new city pages** (routes + wrappers + curated-cities): birmingham,
  portland, newark, billings, casper, williston, salt-lake-city, freeport,
  gary, tampa, jacksonville. NOTE: 'toledo' is slug `toledo-ohio`.
- **`scripts/us-headterm-boost-2026-08-06.mjs`** — additive sections on the 5
  OWNING pages (reporting-software snippet answer + buyer checklist;
  provider-first shortlist criteria on the blog comparison; US-providers
  section with city links on /ndt-erp-solution; "choose an API 653 tank
  inspection company" on the tank guide; "nationwide contracts" on
  /asnt-certification).

### 28.3 Similarity reality on the ERP city family
Whole-page shingle Jaccard between same-type siblings: 0.77–0.82 WITH the new
depth vs **0.84–0.86 family baseline without it** — the shared
ErpLocationPage template dominates the page mass. The depth blocks reduce
similarity; they cannot beat the template. If the family ever needs to pass a
0.55-style gate, the template itself must be varied, not the appended content.

### 28.4 Verified (build 5,112 URLs, drift PASS)
49/49 depth blocks · 5/5 head-term blocks · new pages canonical-clean,
indexable, sitemapped 11/11 · no pricing (strict audit: 0 forbidden) · no
numerals outside standards in ERP copy (the one flagged digit is a
pre-existing related-links nav, not new copy).

### 28.5 §20.2 note
"Do not add ERP city permutations" stands as the DEFAULT; this push is an
owner-directed exception executed as market research pages (the only city-page
form that has ever earned — §26.1), not name-swap permutations.

---

## 29. CTR engine interim + snippet round 2 + off-page round 2 — 2026-08-06

### 29.1 Engine reading (28d to 2026-08-04 — waves 4/5 mostly NOT in window yet)
`scripts/ctr-engine-snapshot-2026-08-06.txt`. **380 recoverable clicks/28d**
(the 751 baseline was a 90d window — compare same-window at ~2026-09-01).
Dominant pattern unchanged: position 2–8 at ~0% CTR = snippet/AI-overview
capture. Top offenders → all now carry §25.4-style direct-answer blocks:
salary guide (~77 recov.), exam schedule (~51), tank guide (~36), ASME V
Art.4 (Art.6 already had one), /asnt-certification ("ndt level 3 course
fees" p2.2 answered with quote framing, §18-compliant).
⚠️ The salary-guide snippet carries retained salary figures — it is the ONE
exemption in `assertNoPricesInConsolidation` (SALARY_EXEMPT set). Do not
widen that set casually.

### 29.2 Off-page round 2 — `scripts/satellite-erp-us-articles.mjs`
Five standalone technical articles on git-linked satellites, each 2–3
contextual links into the software head pages (+1 city page where natural):
offline-first field capture (ndt-knowledge-hub) · owner data demands
(asset-integrity-hub) · national-contract certification records
(api-certification-guide) · fab-shop report turnaround
(construction-ndt-guide) · PAUT data management (advanced-ndt-techniques).
Round-1 anti-footprint discipline maintained. Satellites auto-build on push
(folder-diff ignore command). NOTE: `indexnow-ping.mjs` is hardcoded to the
atlantisndt.com host — satellite articles are discovered via their own
sitemaps, do not try to push them through IndexNow.

### 29.3 Next measurement
~2026-09-01, same-window engine run: recoverable/28d should fall from 380;
watch the five snippet pages' CTR specifically, plus erp-us family
impressions (54-URL list) and the head terms (reporting software p9 → top 5?).

### 29.4 Also this cycle (pending same deploy)
- Early 7d wave read: exam-schedule page CTR 1.0%→2.2% (13→25 clicks) — first
  hard evidence wave 4 works. Method base pages (UT/RT/VT) still zero
  impressions post-cure — recrawl lag, re-check ~2026-08-20.
- §27.5 backlog depth shipped (`backlog-depth-2026-08-06.mjs`): /consulting
  985w, /ndt-connect 724w, 4 L3 city pages, 11 resources templates, Course
  JSON-LD (no offers) on all /ndt-training-* pages.
- Glossary tail round 3 (+25 → 116 authored). Remaining tail ~102 terms/~700i
  — diminishing returns; stop here unless demand shifts.
- Software head pages carry 1,500–5,300 internal links — internal linking is
  NOT their constraint; off-page is (satellite rounds 1+2 address it).
- ⚠️ FOUR commits pending deploy behind the 100/24h quota (resets 08-07 02:10
  UTC). Session cron 80f0f90b auto-deploys + verifies + submits; if the
  session dies first, the next push after reset carries everything — verify
  deployed SHA before claiming live (§23.4).

---

## 30. Thin-content sweep + PT-method bug — 2026-08-06

### 30.1 🔴 BUG — penetrant-testing was missing from the method-city METHODS map
The 48-market map covered UT/RT/MT/**ET**/VT — but the live route family is
UT/RT/MT/**PT**/VT/ET (both PT and ET exist). ~97 /penetrant-testing-{city}
pages never received market blocks, including the family's top thin earner
(/penetrant-testing-toronto, 103i). Fixed: PT added to METHODS + a PT line in
all 13 METHOD_IN_INDUSTRY industries. Method-city localised 208 → **252**.
**Lesson: when a generator keys off a method list, diff that list against the
actual route families in dist — a missing key fails silently.**

### 30.2 Thin sweep (`thin-sweep-2026-08-06.mjs`) — 31 pages, ~900i
- 12 /compare/* pages (~370i): each per the §23.3 rule — credit the rival
  honestly first (GE Vernova APM, SAP PM, ETQ, Maximo ×2, NetSuite, Procore,
  QuickBooks, Aspen Mtell, Bentley AssetWise, Floodlight, consulting-vs-in-house).
- 13 /corporate-training/* verticals (~340i): real per-vertical competency
  content + shared programme-mechanics closer (identical process is honest).
- Singles: /tofd-testing 764w · /api-570-training 837w · /consulting-me 684w
  (operator-regime framing: SAES/ADNOC/QE) · /contact 719w · /press 651w ·
  /faq 730w.
- Resources closer pushed all 11 templates ≥650w.

### 30.3 Thin state after sweep (build: 5,111 sitemap URLs, avg 1,113w)
787 → **~700**, and the remainder is deliberate:
- methods 338 / glossary 104 / dt 82 / training 102 — the SILENT tail
  (~2-6i/page). §20.2/§23.3 rules hold: no padding without demand or research.
- home (1,682i @ 622w) — deliberately untouched; homepage depth ≠ SEO text dump.
- /blog/ut-vs-rt-comparison — canonical donor, never upgrade.
All demand-bearing thin pages (>40i) are now ≥650w with authored content.

### 30.4 Pending deploy (quota)
FIVE commits queued behind the 100/24h ceiling; session cron 80f0f90b fires
after 2026-08-07 02:10 UTC reset → deploy HEAD, verify, submit. URL list for
this sweep: compare (12) + corporate-training (13) + singles (6) + resources
(11) + /penetrant-testing-{mapped-city} pages.

---

## 31. US audit + site-wide pricing gate + salary-cluster rebuild — 2026-08-09

### 31.1 THE NUMBER THAT SHOULD DRIVE THE NEXT SIX MONTHS
Fresh pull (`scripts/gsc-us-deepdive-2026-08-09.mjs`, summary committed at
`scripts/us-deepdive-summary-2026-08-09.json`). Impressions per page, 90d, by
family — computed against the 5,133-URL sitemap:

| Family | Pages | Impressions | **Per page** |
|---|---:|---:|---:|
| blog | 773 | 227,813 | **295** |
| resources | 23 | 5,642 | **245** |
| compare | 35 | 4,830 | **138** |
| glossary | 219 | 13,350 | 61 |
| 3d-scanning | 172 | 9,239 | 54 |
| ndt-training | 151 | 6,846 | 45 |
| method-city | 591 | 9,430 | 16 |
| digital-twin | 369 | 3,090 | 8 |
| ndt-erp | 293 | 2,022 | 7 |
| erp (all) | 653 | 4,222 | 6.5 |
| erp-modules | 348 | 1,928 | 5.5 |

**A blog page earns 45x what an ERP city page earns.** The ERP+DT families are
1,663 pages — 32% of the site — producing 2.5% of its impressions. §20.2 already
said "no more ERP city permutations"; this quantifies it. **44% of all built URLs
(2,277) earned zero impressions in 90 days.** Stop adding pages to the low-yield
families. Content effort belongs in blog/resources/compare shapes.

### 31.2 The US is a POSITION problem, not a CTR problem
USA: 886 clicks / 120,339 impressions / 0.74% CTR / **avg position 15.0**.
India: 746 clicks / 38,262 impressions / 1.95% CTR / **avg position 7.4**.
The US has 3x India's impressions and fewer clicks because we rank twice as deep.
Do not "fix US CTR" — at position 15 there is no CTR to fix. Either rank the
page or pick a query where we already rank.

⚠️ **GSC country-filtered pulls are anonymisation-limited.** The `country=usa`
page/query dimensions return only ~26% of the true US total (31,699 of 120,339
impressions). Use the country dimension for TOTALS and the filtered pulls for
SHAPE only. A previous session's "US baseline" numbers differ from this one for
exactly this reason — neither was wrong, they measured different things.

### 31.3 Three US clusters carry ~5,100 impressions at ~0% CTR
1. **Salary — 2,304 impr, 177 queries, 5 clicks (0.22%).** 1,928 of those land on
   ONE page, `/blog/ndt-salary-guide-2026-global`, at position ~8-9. A global
   overview answering "ndt level 3 salary" (207 impr, pos 9.4) can neither win
   the snippet nor beat the AI overview. **Shipped:** `/ndt-level-1-salary`,
   `/ndt-level-2-salary`, `/ndt-level-3-salary`, `/ndt-inspector-salary` —
   one page per query head, config in `src/data/salary-level-pages.ts`.
2. **"Near me" — 883 impr, pos 45-90.** Google was resolving national "ndt
   training near me" to `/ndt-training-denver` because no national hub existed.
   Counter-evidence that the cluster converts when the page fits: "ndt school
   near me" pos 6.6 with clicks; "ndt technician training near me" pos 2.5 with
   clicks. **Shipped:** `/ndt-training-near-me`, a US location index.
3. **Conversational / AI-style queries — 133 distinct, 1,915 impr.** Full-sentence
   queries are now a measurable demand shape ("should we mandate api 510, 570 and
   653 as the minimum certifications…" 126 impr). GA4 confirms the channel:
   **AI Assistant 239 sessions at 51% engagement.** Not yet addressed — next cycle.

### 31.4 🔴 PRICING — the recurring failure, now gated
Seven sweep rounds, ~145 fixes, in **eight layers**, every one previously
undetected despite four prior sweeps:
1. SERP overrides in `prerender.mjs` — 3 Singapore method page TITLES carried day
   rates (`$400/day`), plus the L3 consulting title and the training description.
2. Nine regional training pages with per-student prices in live meta descriptions.
3. 15 corporate-training verticals rendering a 60-cell per-head price TABLE,
   which also fed `Offer.description`.
4. Schema: `price: '15000'`, `price: "800"`, and `priceSpecification`
   min/maxPrice `INR 35,000-85,000 per participant` on 3 India pages.
5. Named forbidden tokens still live: `INR 15 lakh` (15 pages), `SAR 67,500` (5).
6. Four Atlantis DT platform licence figures in the ROI-examples blog.
7. A latent `SEOHead` code path that would emit a Course price if ever passed one.
8. **~20 CORRUPTED SENTENCES** from an earlier blanket strip — live, reader-visible
   nonsense on money pages: *"Average salary increase of affordable,
   accessible-$30,000"*, *"Maximo at enterprise tier-$1M"*, *"enterprise tier,
   enterprise tier-2M/year"*. This is §25.6 damage that shipped and sat there.

**→ `scripts/assert-no-atlantis-pricing.mjs` is now the standing gate.** Checks
all eight layers, carries a reviewed exception list (competitor prices, customer
ROI, salary data, grant caps), and currently **PASSES on 2,964 files**.
**Run it before every commit.** Ad-hoc greps have now failed five times running;
they miss because each layer expresses a price differently.

Note round 6→7: fixing `INR 15 lakh` by exact string left `SAR 67,500` alive,
because the same sentence is emitted per region with a per-region currency.
**Fix the pattern, not the instance.**

### 31.5 The 60 noindexed ERP pages — do NOT "unblock" them
All 60 are substantial (1,260–2,070w) and non-generic, failing purely on sibling
similarity. But a word-diff of the worst pair (ahmedabad vs bangalore) found
**1,395 of 1,423 words identical** — a 566-word shared leadership/links block.
Split:
* **49 never received per-city research.** They are name-swap permutations and
  earn **59 impressions between them in 90 days**. They stay noindexed. Varying
  boilerplate to slip them past the gate manufactures doorway pages for no
  traffic — precisely what the gate exists to prevent.
* **11 US metros DID get real research** (`erp-us-market-depth.mjs`) but collide
  on that script's shared per-market-TYPE block (chicago↔detroit 0.756).
  For these the similarity is an artefact masking real differences.
  **Shipped:** `scripts/erp-us-city-texture-2026-08-09.mjs` — ~320 words of
  hand-written per-metro operating texture each, sized from the actual Jaccard
  arithmetic (~440 unique words needed at 0.756 on ~685 shingles).

Family-wide median similarity is 0.031, not the "0.77–0.82" §28.3 implies — that
figure described the un-researched subset, not the family.

### 31.6 GA4 — a conversion leak larger than any SEO gain here
90d, property 517088706: 29,786 sessions. Organic 8,609 @ 55% engagement;
Paid Search 10,390 @ **22%** engagement, 68s, nearly all landing on `/erp`.
Events: **`erp_demo_request_click` 746 → `generate_lead` 61.** ~8% completion.
`/training` by contrast runs **91% engagement, 351s** — the highest-intent page
on the site. EmailJS keys ARE present in prod, so the form is not broken; this is
a funnel problem, not a bug. **Worth more than any ranking change in this cycle.**

### 31.7 What shipped, and what is owner-action
Shipped to disk and verified (pricing gate PASS, `tsc` clean on all new files,
all new/edited files carry no new type errors):
5 new pages + routes · 7 pricing sweep scripts · the standing gate · ERP city
texture module wired into `thin-page-upgrade.mjs` · GSC deep-dive tooling + a
44KB committed summary (5MB raw pull gitignored).

⚠️ **NOT deployed.** The analysis sandbox mounts this repo through FUSE without
unlink permission, so `git` cannot rewrite its index, and `node_modules` holds
Windows esbuild binaries so `vite build` cannot run there either. `node_modules`
was deliberately left untouched. **Runbook: `scripts/DEPLOY-2026-08-09.md`** —
commit, push, verify deployed SHA, then submit
`scripts/indexing-queue-2026-08-09.txt` (72 URLs, dry-run verified against all
10 service accounts, 67 submittable, well inside the 2,000/day cap).
An empty `.git/__probe` file was left behind and cannot be deleted from the
sandbox — `del .git\__probe`.

### 31.8 Next cycle, in order
1. Deploy + submit (§31.7 runbook) and confirm the noindex count moves 60 → ~49.
2. The `/erp` paid-traffic funnel (§31.6) — 746 → 61 is the biggest number here.
3. Answer blocks for the conversational cluster (§31.3.3); AI Assistant is a real
   channel at 51% engagement.
4. Re-measure **2026-09-06** against `us-deepdive-summary-2026-08-09.json`.

---

## 32. ⚠️ GEO PRIORITY RESET + US expansion mega-session + conversion fixes — 2026-08-11

### 32.1 🔴 NEW STANDING RULE — read before planning any future SEO cycle
Owner set an explicit geographic priority order for ALL future SEO work, backed
by a live GA4 screenshot (Singapore #1 city at 75-125 active users vs San
Jose, the top US city, at 8-10):

1. **North America — USA and Canada** (top priority, tied)
2. **Europe**
3. **Australia & New Zealand**
4. **Beyond priority, explicitly named** — India, Asia (including Singapore,
   the geo currently dominating raw traffic)

**This is a standing rule, not a one-cycle instruction.** Default every future
SEO push to this order unless the owner names a different region for a
specific task. Memory: `project_seo_geo_priority_order.md`. Related:
`project_training_usa_only_paying_market.md` — for Training specifically, USA
is the only market that has ever produced a paying customer; ~1 of ~100
leads/year. Do not treat India/Singapore/Asia traffic volume as a success
signal — it has not converted to revenue historically. Additive-only rule
(§ throughout this file) still applies: do not delete or deprioritize existing
India/Asia/ME content that already earns traffic; new investment prioritizes
the four tiers above.

**Immediate focus set the same day:** North American NDT Training built
around **SNT-TC-1A** specifically (not just ASNT generically), and **custom-
built ERP solutions** — the "fully customizable" positioning, US/Canada
audience. Work in progress; see the next cycle's log entry for what shipped.

### 32.2 What this session built (13+ commits, before the geo-priority reset)
A full US SEO expansion, executed as 6 phases matching the site's proven
one-phase-one-commit-one-verify discipline, followed by a separate USA-
Training-specific push once the owner revealed the USA-only-paying-market fact
mid-session:

**Phase 1** — Consulting pages for the 18 US states with zero Training/ERP/
Consulting presence (Arkansas, Connecticut, Delaware, Hawaii, Idaho, Iowa,
Kansas, Maine, Mississippi, Nebraska, Nevada, New Hampshire, New Mexico, Rhode
Island, South Carolina, South Dakota, Vermont, West Virginia) via the existing
`StateConsultingPage.tsx` pattern.

**Phase 2** — found and fixed a real bug affecting 232 ERP pages: the
`_day8StuckBackfill` array's shared template used a raw, un-extracted path
fragment as `city` for 125 of 232 entries, producing titles like "Affordable
NDT ERP in /erp/accounting Ndt Inspection Companies Houston". Fixed at the
source (real city + module names now extracted). Also de-duplicated 16
genuinely near-identical LA-basin/Bay-Area and Philly/Pittsburgh ERP suburb
pages (92% word-shingle similarity) with real per-city operating texture,
following the exact proven pattern from §31.5's `erp-us-city-texture` module.

**Phase 3** — Training pages for 8 major US industrial metros with zero
coverage: Wichita KS (Textron Aviation/Spirit AeroSystems — Boeing completed
its acquisition Dec 2025, was pending at time of writing), East Hartford CT
(Pratt & Whitney/Sikorsky/Collins), North Charleston SC (Boeing 787), Savannah
GA (Gulfstream — already had ERP), Aiken SC (Savannah River Site — chosen over
Augusta/Vogtle, ~12,000 workers vs Vogtle's ~2,000), Pascagoula MS (Ingalls
Shipbuilding), Groton CT (Electric Boat), Bath ME (Bath Iron Works).

**Phase 4** — matching ERP pages for 7 of those 8 metros (Savannah already had
one), same real employer facts reframed for an ERP-software buyer audience
instead of a training-candidate audience.

**Phase 5** — Training + ERP state pages for the 13 states still at zero
presence after Phase 1 (the other 5 got city coverage in Phases 3-4). Reused
each state's already-verified Consulting-page industrial anchors rather than
re-deriving facts. ERP state pages use the pre-existing proven pattern (12
already live pre-session); Training state pages were new for this site
(Training was 100% city-level before this) — confirmed `TrainingLocationPage`
reads naturally with a state name in the `city` field before using it.

**Phase 6** — GSC-grounded keyword-embedding pass: a "level 1/2/3" numeral-vs-
roman-numeral search gap (1,683 impressions, ~0% CTR), and a consulting-intent
wording gap, fixed on the highest-impression pages only (surgical, not a
blanket find-replace).

**Owner-directed layout changes to `/training`** mid-session: removed the Buy
Now CTA section entirely, moved the enquiry form and Level I/II/III course
cards up next to the hero (previously the form sat under a "Ready to Enroll?"
Buy Now band; the course-level cards sat much further down the page).

### 32.3 🔴 Compliance finding — fabricated presence + fake testimonials, found and fixed
Two live pages (`ndt-training-usa.tsx` at `/ndt-training-usa`, `Training-
USA.tsx` at `/training-usa`) violated the standing no-fabricated-presence rule
far more seriously than a routine audit had caught: `Training-USA.tsx`
contained **3 fabricated customer testimonials** — invented named people,
quotes, job titles, cities ("Michael R., NDT Level III, Houston Texas") — and
an unsourced "3,200+ US technicians trained" stat. `ndt-training-usa.tsx`
claimed "our Houston, TX training center" with invented lab/equipment detail,
a 4-location claim with no basis, and a Course schema.org block asserting a
physical `Place` in Houston. Fake testimonials are a genuine legal/compliance
exposure (FTC endorsement rules), not just a style violation — removed
entirely rather than reworded, since an invented quote cannot be "fixed."
Both pages' primary CTA also linked to an external, untracked Microsoft Form —
rerouted to the internal `/training#training-enquiry` form. Same violation
class found and fixed in three separate `prerender.mjs` static overrides
(`/training`, `/training-usa`, `/ndt-training-usa`) and two duplicate Course
JSON-LD blocks.

### 32.4 USA Training SEO push (owner-approved 6-phase plan, real GSC-grounded)
Full plan published as a Claude Artifact — see chat history if needed; summary
here. Real finding: **no national page existed for "how do I get NDT Level 1 /
Level 2 certified"** — pure candidate-path queries ("ndt level 1
certification" 13i pos 37.2, "how to get ndt level 1 certification" 10i pos
54.3, etc.) scattered across `/asnt-certification` and stray city pages,
never a purpose-built page. Level III existed (`/asnt-level-iii-training`) but
was nearly invisible (16 impr/90d, position 82.8).

**Shipped:**
- `/ndt-level-1-training`, `/ndt-level-2-training` (new), `/asnt-level-iii-
  training` (rebuilt in place, same route). Deliberately does NOT target
  "asnt level iii consulting" / "ndt level 3 consultant" query phrasing —
  that's buyer intent (hiring a Level III), already owned by
  `/consulting/ndt-consulting-level-iii`, confirmed untouched.
- 4 new blog posts (apprenticeship/OJT paths, veterans transitioning into NDT,
  no-experience-required, which-method-to-learn-first) — deliberately NOT
  covering "Level 1/2/3 complete path" since the new pages above already own
  that; would have cannibalized. Plus 1 enrichment (not duplication) of
  `best-ndt-training-providers-and-programs` with a US-specific vetting
  section.
- Internal-linking cluster: the 3 Level pages ↔ near-me hub ↔ online-training
  page now cross-link each other (none of the three previously linked to the
  other two at all). `TrainingLocationPage.tsx`'s existing generic Level I/II
  mention (renders on all ~152 US city pages) now hyperlinks into the 3 Level
  pages — one shared-template edit, applies site-wide, verified across 8
  spot-checked cities in different regions + a full 148/148 US-city sweep.
- **Bug found mid-task:** `/ndt-training-near-me` had no explicit prerender
  override and was falling through a generic `/ndt-training-{slug}` regex,
  rendering as a fake city page titled "NDT Training in Near ME" in the
  crawler-facing HTML while the live React page showed correct content —
  another instance of the two-layer-drift class this file has documented
  repeatedly. Fixed.
- Separate 26-page internal-linking audit (real 90-day worldwide GSC pull,
  `gsc-report.json`): `/erp` and `/consulting` hub pages plus 8 cert/exam-prep
  pages plus 14 method-city pages plus 2 training-city pages were missing a
  contextual link to `/training` despite discussing certification. Fixed.

### 32.5 🔴 Two more bugs found by a full QA sweep of all 13 commits
1. All **38** Consulting state pages (`/ndt-consulting-{state}`) — the
   original 20 plus the 18 built in Phase 1 — shipped a static `<title>` that
   didn't match their own React component's `metaTitle` (the `usStatePages`
   forEach in `prerender.mjs` auto-generated a generic title instead of
   reusing the real, state-specific one each page's `StateConsultingPage.tsx`
   `stateData` entry actually renders). Fixed: `usStatePages` entries now
   carry the real `metaTitle`/`metaDescription` extracted from `stateData`.
2. Consulting/ERP state-page family runs 0.69-0.73 word-shingle similarity —
   above this site's own 0.55 near-duplicate bar. **Not a new regression** —
   matches the pre-existing pattern from the original 20 states, which have
   been live and indexed without issue. Flagged for awareness, not fixed.
Also confirmed (unrelated to this session, pre-existing): a broken link at
`/consulting/api-579-fitness-for-service-services`, 21 occurrences — not
touched, outside scope.

### 32.6 🔴 Conversion-tracking assessment — the purchase flow was invisible to GA4
Deep GA4 (live pull, property 517088706) + GSC assessment, prompted by the
owner asking where CTR/conversion is lagging beyond ranking. Six real gaps
found and fixed:

1. **The Stripe purchase flow (`BuyNow.tsx` → `api/stripe-webhook.ts`) fired
   zero GA4 events anywhere** — the one channel that has ever produced revenue
   was completely invisible to analytics, both client- and server-side. Fixed:
   `begin_checkout` on the Buy Now buttons + new `/training/buy-now/thank-you`
   page firing `purchase`. **Owner action still needed:** set that thank-you
   URL as the Stripe Payment Link's post-payment redirect in the Stripe
   dashboard, or the page never receives traffic.
2. `BusinessResourcePage.tsx` (`/resources/*`, the highest-converting content
   per §26.1) fired `template_download` with no `page_location`/`page_path`
   since its creation — same bug class already fixed on `EnquiryCaptureForm`/
   `Contact.tsx` on 2026-08-07 (§26.3), just missed on this newer component.
   Same gap fixed in `GA4EventTracker.tsx` (6 event types) and `FreeTrial.tsx`.
3. **`generate_lead` fired 60 times in 90 days; the custom `form_submit` event
   fired only once**, despite both being called unconditionally together on
   every submission. Root cause: `form_submit` is a **reserved GA4 Enhanced-
   Measurement auto-collected event name** — this site's own forms already
   fire GA4's native `form_submit` from the real DOM submit event, and reusing
   that name for a custom event produces undefined dedup behavior. Renamed to
   `atlantis_form_submit` in both `EnquiryCaptureForm.tsx` and `Contact.tsx`.
4. `SalaryLevelPage.tsx` (powers the 3 new Level-salary pages) buried its only
   lead-capture form after 6 sections of content. Added a lightweight above-
   the-fold CTA right after the direct-answer block rather than moving the
   full form up — these pages are deliberately structured to win featured
   snippets on the direct answer (§25.4 pattern), and a form at the very top
   would compete with that.
5. **GA4 has zero Key Events configured** despite 60 real `generate_lead` and
   760 `erp_demo_request_click` events firing — every conversion report,
   including anything feeding Google Ads, currently shows flat zero. **Owner
   action:** GA4 Admin → Events → mark `generate_lead`,
   `erp_demo_request_click`, `template_download` as Key Events.
6. **US traffic that lands actually engages well** — 48% engagement rate,
   ~278s average session, beats India (27%, 92s) and Singapore (37%, **7s** —
   worth the owner's own skepticism, that duration reads more like bot/
   scraper traffic than real visitors) by a wide margin. This contradicts a
   "content doesn't match the market" theory: **the constraint is volume and
   ranking depth for the sessions that never arrive, not relevance for the
   ones that do.** Paid Search essentially does not reach the US at all — 10
   of 3,299 US sessions (90d) came from `google/cpc`. Confirms and sharpens
   §24.3/§31.6's "campaign geo-targeting, not an SEO problem" finding.
7. Also shipped: direct-answer/snippet blocks for 21 cost-intent US queries at
   position 2.5-28.7, ~0% CTR (`ndt inspection cost` pos 2.6, `api 510
   certification cost` pos 7.2, etc.) — same §25.4 pattern, zero dollar
   figures for Atlantis's own services anywhere (framed as "check
   api.org/asnt.org" for third-party fees + "tailored quote" for Atlantis).

### 32.7 Next cycle, in order
1. **North American Training (SNT-TC-1A) + custom-ERP SEO push** — the
   owner's explicit next focus (§32.1). Plan and execute against the new geo
   priority order.
2. Owner actions from §32.6: Stripe redirect URL, GA4 Key Events toggle,
   Google Ads US/Canada geo-targeting review.
3. Deferred CTR/snippet pass (§27's original Phase 5 for the USA Training
   plan) — was held pending live deploy confirmation + crawl time; proceed
   per owner instruction using best-available reasoning rather than waiting
   further.
4. Re-check the Singapore 7-second-average-session anomaly before investing
   further effort assuming it's real human traffic.
5. Fix `/consulting/api-579-fitness-for-service-services` (21-occurrence
   broken link, pre-existing, out of this session's scope).
5. Content effort into blog/resources/compare shapes ONLY (§31.1).

---

## 33. Geo interlinking + Forms lead endpoint + payment removal — 2026-08-12

### 33.1 The Mon/Tue traffic question, answered with data
Owner reported no significant Training/ERP traffic Mon 10 + Tue 11 Aug.
GSC daily by segment (Jul 23 – Aug 9, final data):
* **Training is FLAT, not falling** — 1,000–1,750 impr/day, 20–33 clicks/day
  every single day. Mon Aug 3 1,583i/30c vs Mon Jul 27 1,735i/30c.
* **ERP is the real problem** — 48–280 impr/day and **0–2 clicks on most days**.
* GA4 organic Mon+Tue: 317 sessions total — **Training landings 66 across 36
  pages, ERP landings 6 across 5 pages.** ERP is effectively invisible.

**USA 28d: Training 3,420 impr / 20 clicks / 611 queries. ERP 176 impr / ZERO
clicks / 26 queries**, largest being `site:atlantisndt.com`. Reconfirms §21.3
and §31.1 — ERP is absent from the category, and no city-level ERP query exists.

### 33.2 🔴 CITY PAGES WERE LINK-ISLANDS — the fix with the widest reach
A training city page emitted 32 unique internal links but only **FOUR** to
sibling city pages and ONE to `/training`. ~400 geo pages each sat alone, so
nothing circulated through the tree.
**`scripts/geo-interlink-2026-08-12.mjs`** builds three structures:
* **Regional sibling clusters** — 8 US regions + Canada, each with real
  adjacency and its own industrial note. Houston **4 → 15** sibling links,
  Chicago 12, Atlanta 8, Denver 6, ERP Houston 15. **118 sibling blocks.**
* **ERP routing block on 371 ERP pages** — pushes deep `/erp-modules/*` leaves
  UP to the money pages the head terms should own.
* **Near-me intent block on 44 US training city pages** — the US near-me
  cluster is 484 impressions at positions 42–87, all landing on
  `/ndt-training-atlanta` because nothing pointed at the near-me hub with
  proximity anchor text.

⚠️ **Build region lists from ACTUAL dist slugs, not assumed city names.** The
first pass gave Denver 1 sibling because half its region had no training page.
`southwest` still has zero training pages — the block degrades gracefully
(needs ≥2 siblings) rather than emitting a stub.

### 33.3 Lead cycle now ends at the Microsoft Form
Owner directive: no payment link, no Buy Now, no checkout — enquiries only,
converted by phone.
* `src/lib/enquiry-endpoint.ts` — single source of truth for the Forms URL
  (it was hard-coded across 19 pages).
* `EnquiryCaptureForm` success state now routes to the Form instead of a
  dead-end "we'll be in touch" message.
* ⚠️ **The React CTA only exists in a JS chunk** — it was in ZERO prerendered
  HTML files. The static blocks in geo-interlink carry the Forms CTA too, so
  it now ships in **1,414 crawlable pages**.
* **Payment flow deleted** (commit `59166260a`): `/training/buy-now` was still
  live at HTTP 200, in two sitemaps, with a hardcoded Stripe link — only its
  button had been removed earlier. Pages, routes, prerender entry and
  `api/stripe-webhook.ts` gone; both URLs 301 → `/contact?service=training`.

### 33.4 Verified
Build 5,237 URLs · drift guard PASS · pricing gate PASS on 3,036 files ·
118 sibling + 371 ERP-routing + 44 near-me blocks · 1,414 pages with the Forms
CTA in static HTML · buy-now absent from dist and every sitemap.

### 33.5 Next
1. Measure the interlinking at the ~2026-09-06 pull: sibling-linked city pages
   should show position movement before impression movement.
2. ERP remains a demand problem, not a page-count problem — §31.1 stands: put
   content effort into blog/resources/compare shapes only.
3. The near-me cluster still needs a Google Business Profile to win the local
   pack (§24.2) — on-page work can only take it so far.

### 33.6 🔴 THE CONVERSATIONAL CLUSTER — 2,778 impressions, ZERO clicks, 90 days
Measured 2026-08-12 (`scratchpad/convo-queries.mjs` pattern): **414
conversational query-page pairs, 2,778 impressions, 0 clicks, 0.00% CTR.**
These are not exam candidates — they are inspection managers setting policy:
* 98i p23 "should we mandate api 510, 570, and 653 as the minimum
  certifications for all enterprise in-service inspection roles…"
* 53i **p6** "what's the difference between pcn and asnt ndt courses?"
* 46i p37 "do we accept asnt ndt level iii in lieu of api qute for ut-related
  scopes on our turnaround contracts?"
* 37i p40 "one of my inspectors just failed api 570 a second time…"
* 51i **p1** "what are the advantages of using atlantis…" — position ONE, zero clicks.

**Position is not the problem.** Several sit at p1–6 and still earn nothing:
the answer is consumed inside the AI Overview or assistant. GA4 shows that
channel is real and high-quality — **AI Assistant 51% engagement** (§31.3).
The objective is therefore to be the SOURCE the answer is built from, not to
win a blue link.

**Shipped:** `scripts/decision-maker-answers-2026-08-12.mjs` — 11 decision-grade
answers in §25.4 form (question verbatim as `<h3>`, specific answer
immediately after) on the five pages already absorbing the demand
(api-510/570-certification, asnt-certification, api-inspector-guide,
api-653-tank-inspection-guide). Answers commit to a position — "mandate by
scope, not by job title" — because the reader is writing company policy, and a
hedge is worth nothing to them. FAQ schema fed from the rendered Q&A only
(§20.8). Where the certifying body owns the answer (fees, retake rules, exam
delivery) the page says so and points at api.org rather than inventing detail
that goes stale.

**Judge this cluster on assisted/AI-channel sessions and enquiries, not CTR.**

---

## 34. Blog expansion + GBP closed permanently — 2026-08-12

### 34.1 🔴 GOOGLE BUSINESS PROFILE IS PERMANENTLY IMPOSSIBLE
Owner confirmed: Atlantis is a **remote-office company** and Google will not
verify a business without a physical US location. **The near-me cluster (~484
US impressions at positions 42–87) is therefore UNWINNABLE** — those queries
resolve through the local pack, which is populated only from verified GBP
entities. `/ndt-training-near-me` plus the proximity blocks (§33.2) are the
ceiling. **Stop proposing GBP as an action item in future cycles.**
Memory: `gbp_not_possible_remote_office.md`. Supersedes the §24.2 owner-action.

### 34.2 Blogs are the only shape with proven yield — 8 new posts
§31.1 measured it: **blog 295 impressions/page vs ERP city 7.** Coverage was
checked against all 718 existing posts before writing a word:
* **AI in ERP — ZERO existing posts.** A real gap, and the owner named it.
* AI in digital twins — 5 posts, all tangential (trends / FFS / APM pieces).
* VR training — 3 posts, all technology-side; **none made the employer's case**.
* SNT-TC-1A — 6 posts, all candidate-side or authoring-side; none covered
  running the programme as an employer.

**Line-of-business (5):** `ai-in-inspection-erp-what-it-actually-does` (what AI
does, what is theatre, and the one place — acceptance — where letting it decide
breaks the evidence chain) · `ai-in-digital-twins-for-asset-integrity` (the data
precondition; why fixed-equipment failure prediction from sensors alone
overreaches the physics) · `vr-ndt-training-employer-business-case` (specimen
access, scheduling, repetition — and that **VR time is training hours, never the
experience hours certification requires**) · `snt-tc-1a-employer-programme-us-guide`
(the four findings auditors actually write) · `inspection-contractor-spreadsheets-to-system`.

**US query-answering (3), grounded in GSC deep positions:**
`paut equipment` 98i p18 → PAUT selection guide · `pipeline audit preparation
services` 97i p31 → audit-prep guide · `ndt inspection service market` 81i p62
(+ two sibling market queries) → US market-structure piece.

### 34.3 ⚠️ WHAT WAS DELIBERATELY NOT WRITTEN
`eddy current testing` (317i p75), `radiographic testing` (168i p45) and
`api 653` (215i p39) are the biggest deep US queries — and each **already has an
owning page**. A second page targeting them is cannibalisation, not a fix
(§25.2). Those are authority problems; the answer is off-page, not another post.

### 34.4 Verified
Build 5,245 URLs · drift PASS · pricing gate PASS · 8/8 posts 743–922 words with
correct self-canonicals · **37 internal links, 0 broken** (one bad target caught
by validating every href against `dist/` before build — do this every time; a
plausible-looking slug from memory does not exist).

### 34.5 🔴 THE ORPHAN CHECK — new posts shipped with ZERO inbound links
All eight posts of §34.2 built and deployed with **0 internal links pointing at
them**. An orphan post is crawled late, ranks poorly, and receives none of the
PageRank already circulating — the same failure class as §20.3's 3,761 orphans,
reintroduced by simply adding records to `blogs.json`.
**`scripts/new-blog-inbound-links-2026-08-12.mjs`** places contextual links from
19 pages chosen by MEASURED demand, not convenience (`/asnt-certification`
11,820i, the SNT-TC-1A requirements post, the salary guide, `/erp`,
`/digital-twins`, `/phased-array-ut`, the PAUT glossary entry, MFL services…).
Result: **3–7 inbound links per new post.**
Anchor text is varied per source deliberately — the same anchor repeated
site-wide reads as a footprint.

**STANDING RULE: after adding any record to `blogs.json`, count inbound links
before declaring the work done.** Creating the page is half the job.
