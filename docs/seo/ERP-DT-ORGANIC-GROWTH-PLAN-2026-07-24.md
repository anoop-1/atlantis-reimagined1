# ERP + Digital Twins — Organic Growth Plan (2026-07-24)

**Owner directive:** ERP + Digital Twins are the least-enquiry products. Drive aggressive
organic growth. **No Google Ads** — high-quality content + on-page + off-page SEO only.
Consolidate + noindex thin pages, upgrade thin content, keep URLs. Cluster-first.

## 0. Data baseline (live pull 2026-07-24, GSC 28d + GA4 28d)

Site-wide organic: **1,857 clicks / 28d = 66/day** (up 3.6× from 18/day in May). CTR 1.37%.

| Segment | Organic cl/day | Impr/28d | CTR | Avg pos | Pages | GA4 sess/28d | GA4 paid(cpc) | Paid engage |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Blog | 34.5 | 72,894 | 1.32% | 8.0 | 393 | 2,343 | — | — |
| Training | 10.5 | 20,772 | 1.41% | 12.9 | 111 | 1,054 | — | — |
| Consulting | 3.2 | 5,875 | 1.55% | 14.1 | 59 | 342 | — | — |
| **ERP** | **1.4** | 2,508 | 1.52% | 13.8 | **560** | 7,010 | **6,701** | **21.4%** |
| **Digital Twins** | **0.3** | 1,366 | **0.66%** | 12.2 | 42 | 966 | **799** | **27.5%** |

**Root cause of low enquiries:** ERP+DT get ~7,500 paid (Google Ads) sessions/28d bouncing
at ~78%. Organic to the same pages engages at 79–81% — so product/offer is fine; the paid
landing/targeting is broken AND organic can't rank (560 thin pages dilute authority).
Decision: pause paid separately; grow qualified organic + fix on-site conversion.

**Reality check on "1000 clicks/day/page":** not reachable organically for a single niche
NDT-ERP/DT URL (global demand is a few hundred/mo, not the ~1M impr/mo a page needs at 3%
CTR). Reachable only as a **cluster total** fed by blog/TOFU + off-page authority. Target
reframed to cluster-level clicks + enquiry conversion.

## 1. Digital Twins — winnable clusters (already ranking, near-miss)

Grounded in GSC query demand (90d). All already pos 2–27 = fast wins.

### 1A. Competitor-replacement cluster (HIGHEST value — active buyers)
Queries + current best position:
- `predix` (2), `predix digital twin` (22), `predix alternatives` (15), `ge predix apm` (16),
  `ge predix alternatives` (18), `mindsphere alternative` (27), `alternatives to legacy apm suites`,
  `cognite data fusion vs ge digital predix` (1.6).
Action:
- Build/strengthen dedicated pages: `/compare/atlantis-dt-vs-ge-predix`, `-mindsphere`,
  `-cognite`, plus a pillar `/digital-twins/legacy-apm-alternatives` (Predix EOL angle — GE
  sunset of Predix is a live migration trigger).
- Structure for featured snippet: "X alternative" H2 + comparison table + migration section +
  FAQ schema. Internal-link all into `/digital-twins` pillar.
- Off-page: answer Predix-migration questions on Reddit/LinkedIn/industry forums linking to the
  alternatives pillar.

### 1B. ROI-calculator cluster (page-1, 0 clicks = CTR + interactivity)
Queries pos 1–10: `digital twin platform roi calculator` (2.8), `roi calculator examples` (6–9),
`estimate roi for a digital twin project` (11.8), `typical payback` (14).
Action:
- Ship an **interactive** DT ROI calculator page (`/digital-twins/roi-calculator`) — inputs:
  assets, inspection frequency, downtime cost → payback estimate. Interactive pages win these.
- CTR rewrite titles/meta on the 5 existing ROI blog posts (currently 0 clicks at pos 6–10).
- No pricing numbers (hard rule) — output ROI/payback ranges + "get tailored quote".

### 1C. API / data-integration cluster (technical buyers)
`digital twin platform with api access` (6.9), `tools that integrate with historian data` (9.8),
`integrate with historian data (PI/OSIsoft)`.
Action: strengthen `/digital-twin-vendor-comparison` + add `/digital-twins/api-integrations`
(REST API, historian/PI connectors, data-fusion) — high technical intent.

### 1D. Pillar CTR fix
`/digital-twins` pos 11.1, 424 impr, **0.66% CTR** (worst on site). Rewrite title/meta for
click, add comparison + ROI + use-case internal links, push toward pos <8.

## 2. ERP — consolidate, then grow the winnable few

Organic demand is genuinely thin. Stop chasing 560 long-tail combos.

### 2A. Thin-page consolidation (owner-approved: noindex + upgrade, keep URLs)
- Audit all 560 ERP pages: any page with <10 impressions/90d AND pos >20 → **noindex**
  (keep live, remove from sitemap, add canonical to relevant pillar). Est. ~450–500 pages.
- Keep + upgrade the ~40–60 pages that have real impressions or winnable position.
- Consolidate signal into pillars: `/erp`, `/ndt-erp-solution`, industry pillars.

### 2B. Winnable ERP terms (real demand from GSC)
`construction erp singapore` (21), `construction erp software singapore` (33.6),
`erp oil and gas malaysia` (48), `erp software for oil and gas malaysia` (10),
`erp provider aberdeen` (11.8), `ndt software` (59), `atlantis erp` (1, brand).
Action: 8–12 genuinely deep pages on these (geo + vertical ERP), not templated stubs.

### 2C. Blog-fed ERP
Blog is the engine (34.5 cl/day). Add ERP-intent TOFU posts ("best NDT inspection software
2026", "ERP for inspection companies", "Odoo for NDT") that rank informationally and
internal-link to `/erp` pillar. This is ERP's main realistic click source.

## 3. Cross-cutting levers

- **AEO/GEO:** AI-assistant sessions (copilot, chatgpt) already arriving; many pos-1 queries
  are AI prompts. Add concise Q&A/definition blocks + schema so ChatGPT/Perplexity cite
  Atlantis for DT/ERP questions. Use AI Citation Strategist agent.
- **Off-page authority:** the whole site's ceiling is authority-bound (avg pos 10–14). Real
  backlinks (not just the 35 satellites) — guest posts, industry directories, HARO/expert
  quotes, LinkedIn thought-leadership → DT alternatives + ERP pillars.
- **On-page depth:** every keeper page needs real bodyContent in prerender.mjs (recurring bug:
  empty-bodyContent entries ship blank shells and never rank — see CLAUDE.md §17.3).
- **Internal-link cascade:** blog (high traffic) → DT/ERP pillars (low traffic) passes equity.

## 4. 30-day execution sprints

**Sprint 1 (fastest wins, additive/safe):**
1. CTR title/meta rewrites: `/digital-twins`, 5 DT ROI blog posts, `/ndt-erp-solution`,
   DT competitor pages. (0-click page-1 pages → immediate clicks.)
2. Strengthen 3 DT competitor pages (Predix/MindSphere/Cognite) + build legacy-APM-alternatives
   pillar. Real bodyContent + comparison tables + FAQ schema.
3. Internal links from top blog posts → DT + ERP pillars.

**Sprint 2:**
4. Interactive DT ROI calculator page + API-integrations page.
5. ERP thin-page audit script → noindex list (~450–500) + sitemap regen. Review before firing.
6. Upgrade the ~40–60 ERP keeper pages with real depth.

**Sprint 3:**
7. 8–12 deep ERP geo/vertical pages (winnable terms) + 6–8 ERP/DT TOFU blog posts.
8. AEO/GEO Q&A + schema blocks on all DT/ERP pillars.
9. Off-page: directory submissions, 10 guest-post/forum links to DT alternatives + ERP pillars.

**Ongoing:** weekly GSC pull (this script), track DT + ERP cluster clicks, re-audit thin pages.

## 5. Success metrics (organic, realistic)
- DT: 0.3 → 8–15 cl/day in 8–12 wks (competitor + ROI clusters climbing to pos <5).
- ERP: 1.4 → 6–10 cl/day (consolidation + blog feed + winnable terms).
- Enquiry: fix on-page CTAs (demo/quote forms) on DT/ERP pillars; measure form submits in GA4.
- Note: the "1000/day/page" figure is a cluster+long-horizon aspiration, not an 8-week single-URL target.

## Data artifacts
- GSC fresh pull: `scratchpad/gsc-fresh-2026-07-24.json`
- GA4 fresh pull: `scripts/ga4-audit-2026-04.json` (regenerated 2026-07-24)
- Analysis: `scratchpad/analyze.py`
