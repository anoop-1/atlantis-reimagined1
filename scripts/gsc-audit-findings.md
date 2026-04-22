# GSC Audit Findings — Atlantis NDT (2026-04-22)

Data source: `scripts/gsc-audit-2026-04.json`
Property: `https://atlantisndt.com` (28d/90d) + `https://ndt-connect.com` (28d)
28d totals: **252 clicks, 36,812 impressions, 0.68% CTR**, 977 pages, 1,502 queries, only **113 pages (11.6%) earned any click**.

Pillar targets: NDT consulting, NDT training, digital twin NDT, NDT reporting software, NDT ERP software.

---

## 1. Top 30 Queries by Impressions (28d)

Flag = target-page mismatch (currently ranking page is wrong/weak for the query).

All 30 queries below earned **0 clicks in 28d**. CTR column omitted (all 0%).

| # | Query | Impr | Pos | Landing Page | Flag |
|---|-------|-----:|----:|--------------|------|
| 1 | eddy current testing | 245 | 46.6 | /blog/eddy-current-testing | MISMATCH — need service hub |
| 2 | mfl pipeline inspection service | 220 | 41.3 | /services/mfl-inspection-yanbu | MISMATCH — generic on city page |
| 3 | asnt certification | 157 | 8.0 | /asnt-certification | OK — CTR issue |
| 4 | api 653 | 138 | 33.1 | /api-653-certification | position weak |
| 5 | api 570 certification | 137 | 2.8 | /api-570-certification | meta broken (pos 2.8, 0 clicks) |
| 6 | api 570 | 107 | 19.4 | /api-570-certification | OK |
| 7 | eddy current inspection | 106 | 45.2 | /blog/eddy-current-testing | MISMATCH |
| 8 | radiographic testing | 89 | 63.7 | /radiographic-testing-dallas | MISMATCH — city page on head term |
| 9 | ultrasonic testing level 1 training | 77 | 55.2 | /ultrasonic-testing-chicago | MISMATCH — need UT L1 training hub |
| 10 | magnetic particle testing | 74 | 68.9 | /blog/magnetic-particle-testing | MISMATCH — need service hub |
| 11 | api 653 certification | 69 | 11.4 | /api-653-certification | OK |
| 12 | ultrasonic testing | 69 | 63.1 | /blog/ultrasonic-testing | MISMATCH — need service hub |
| 13 | api 653 repairs | 66 | 41.4 | /blog/api-653-tank-inspection-guide | OK |
| 14 | rt vs ut | 66 | 9.4 | /blog/ut-vs-rt-comparison | striking distance |
| 15 | ndt consulting | 64 | 63.6 | /ndt-consulting-louisiana | **PILLAR MISMATCH** → should be /consulting |
| 16 | asnt | 62 | 20.7 | /asnt-certification | OK |
| 17 | api 653 tank inspection | 52 | 27.2 | /blog/api-653-tank-inspection-guide | OK |
| 18 | ndt software | 52 | 51.8 | /ndt-connect | pillar-adjacent (ERP/Reporting) |
| 19 | underwater inspection | 52 | 76.6 | /blog/underwater-infrastructure-inspection-techniques | WEAK, no service page |
| 20 | api 653 course | 48 | 44.9 | /api-653-certification | OK |
| 21 | api pressure vessel | 46 | 52.3 | /api-510-certification | OK |
| 22 | wfmt inspection | 45 | 2.7 | /blog/magnetic-particle-testing | meta broken |
| 23 | api 570 training | 44 | 43.9 | /api-570-certification | OK |
| 24 | api vessel inspection | 44 | 54.9 | /api-510-certification | OK |
| 25 | api 510 pressure vessel inspector | 42 | 42.1 | /api-510-certification | OK |
| 26 | miami ndt hazardous waste | 42 | 2.4 | /industry/oil-gas-ndt-miami | meta not compelling |
| 27 | 653 api | 41 | 28.7 | /api-653-certification | OK |
| 28 | ultrasonic corrosion | 41 | 54.7 | /blog/ultrasonic-thickness-measurement-corrosion-monitoring-guide | OK |
| 29 | api 653 exam fees | 39 | 2.4 | /api-653-certification | meta broken |
| 30 | asnt snt-tc-1a | 39 | 1.0 | /asnt-certification | meta fatally broken (pos 1.0) |

**Headline**: 29 of top-30 queries earned 0 clicks. Five rank top-3 (pos 1.0, 2.4, 2.4, 2.7, 2.8) with zero clicks — title/meta failure, not a ranking problem. **OFI: rewrite meta for `/asnt-certification`, `/api-570-certification`, `/api-653-certification`, `/blog/magnetic-particle-testing`, `/industry/oil-gas-ndt-miami`.**

---

## 2. Striking-Distance Queries (pos 4.5–15, impr >50)

Strict bar (impr >50 AND pos 4.5–15) yields only 3 queries; impr ≥20 yields 9. Expanding to pos 2–20 and impr ≥20 yields 23 actionable rows below.

| Query | Impr | C | Pos | Page | Action |
|-------|-----:|--:|----:|------|--------|
| asnt certification | 157 | 0 | 8.0 | /asnt-certification | Add CTR hooks (cost, 2026, levels) |
| api 570 certification | 137 | 0 | 2.8 | /api-570-certification | Rewrite title+meta (pos 2.8, 0 clicks) |
| api 570 | 107 | 0 | 19.4 | /api-570-certification | Internal links + FAQ to push top-10 |
| api 653 certification | 69 | 0 | 11.4 | /api-653-certification | FAQ schema + topical links |
| rt vs ut | 66 | 0 | 9.4 | /blog/ut-vs-rt-comparison | Comparison-table schema + explicit H1 |
| wfmt inspection | 45 | 0 | 2.7 | /blog/magnetic-particle-testing | Add H2 "WFMT Inspection" |
| miami ndt hazardous waste | 42 | 0 | 2.4 | /industry/oil-gas-ndt-miami | Explicit "Hazardous Waste NDT Miami" section |
| api 653 exam fees | 39 | 0 | 2.4 | /api-653-certification | Pricing table in meta |
| ndt training in uae | 37 | 0 | 15.5 | /ndt-training-dubai | Retarget title to "UAE" |
| api 653 certification cost | 35 | 1 | 2.3 | /api-653-certification | Add "$X cost" to meta |
| api 510 exam pass rate | 34 | 2 | 4.4 | /api-510-certification | Stat up-front in description |
| cwi certification cost | 34 | 0 | 6.4 | /blog/cwi-certification-requirements-cost-career-impact | Move "cost" to H1, price in meta |
| offshore visual inspection | 33 | 0 | 17.9 | /visual-testing-norway | Retarget — VT Norway too specific |
| asnt level 3 exam fees | 31 | 0 | 4.2 | /asnt-certification | Fee table above fold |
| power generation ndt | 31 | 0 | 16.6 | /ndt-for-power-generation | Internal link juice from /services |
| rt vs ut weld inspection | 31 | 0 | 4.2 | /blog/ut-vs-rt-comparison | Add weld-specific H2 |
| ndt offshore salary | 26 | 1 | 5.4 | /blog/ndt-salary-guide-2026-global | Expand offshore section |
| api 510 certification | 23 | 0 | 10.0 | /api-510-certification | Internal links |
| ndt magnetic particles training | 22 | 0 | 7.8 | /magnetic-particle-testing-singapore | Retarget — training intent |
| ndt calculator | 21 | 0 | 7.8 | /tools | Add /ndt-calculator H1 + screenshots |
| ut and rt testing | 21 | 0 | 4.0 | /blog/ut-vs-rt-comparison | Meta issue |
| asnt ndt | 20 | 0 | 14.9 | /asnt-certification | — |
| ndt penetrant test training | 12 | 0 | 14.4 | /penetrant-testing-singapore | Retarget: training ≠ Singapore |

**39 queries rank pos ≤10 with ≥10 impr AND zero clicks.** Biggest single lever in the audit — ranking is there, CTR isn't.

---

## 3. Zero-Click High-Impression Pages (clicks=0, impr >100, 28d)

17 pages qualify (sorted by impressions desc):

| Page | Impr | Pos |
|------|-----:|----:|
| /blog/cwi-certification-requirements-cost-career-impact | 844 | 6.5 |
| /blog/aerospace-composite-inspection-ndt-methods-guide | 304 | 9.1 |
| /blog/ultrasonic-testing | 213 | 37.8 |
| /ultrasonic-testing-chicago | 199 | 44.2 |
| /blog/pipe-wall-thickness-inspection-ut-procedures | 191 | 11.5 |
| /blog/api-579-fitness-for-service-guide | 186 | 6.9 |
| /blog/phased-array-ultrasonic-testing-complete-technical-guide | 180 | 37.2 |
| /blog/risk-based-inspection-rbi-implementation-guide | 173 | 7.5 |
| /blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide | 169 | 6.5 |
| /blog/iso-9712-certification-process-step-by-step-guide | 165 | 24.4 |
| /blog/api-617-centrifugal-compressor-inspection | 147 | 6.9 |
| /blog/ndt-training-complete-guide-courses-certification-global | 140 | 33.5 |
| /blog/wind-turbine-blade-inspection-and-monitoring | 137 | 43.6 |
| /ndt-connect | 128 | 36.5 |
| /blog/weld-inspection-acceptance-criteria-aws-vs-asme | 125 | 6.9 |
| /consulting/ndt-consulting-level-iii | 122 | 5.6 |
| /blog/phased-array-ultrasonic-testing-paut-guide | 105 | 35.8 |

**Biggest bleed**: `/blog/cwi-certification-requirements-cost-career-impact` — 844 impr at pos 6.5, 0 clicks. At industry-average CTR (~3% at pos 6) that's ~25 clicks/mo from one page. The 17 pages total ~3,528 impr ≈ 80–120 lost clicks/mo.

**Action**: meta rewrite sprint on the 9 pages at pos ≤10. Add year, numbers, bracket-cues ("[2026 Guide]", "Cost: $X–$Y"). `/consulting/ndt-consulting-level-iii` (pos 5.6) is pillar-relevant — highest priority.

---

## 4. Per-Pillar Gap Analysis (28d)

### 4a. Digital Twin NDT — effectively zero presence
1 query, 0 clicks, **4 impr**, avg pos 75. Only match: "asset integrity digital twin" → /digital-twins (pos 75). No queries for "digital twin ndt", "predictive twin", etc. Topical authority nil. Need 6–10 cornerstone articles + /digital-twin hub restructured around BOFU intents (ROI, case studies, vendor comparisons).

### 4b. NDT ERP Software — zero presence
**0 queries, 0 impressions** containing "erp". Pillar requires greenfield content — "NDT ERP software", "inspection ERP", "NDT field operations ERP", "best NDT ERP 2026".

### 4c. NDT Reporting — weak
2 queries, 0 clicks, **14 impr**, avg pos 51.9. "ndt reporting software" → /ndt-connect (pos 53.1, 12 impr); "ndt reporting" → /ndt-reporting-software-comparison (pos 44.5, 2 impr). Content exists but ranks page 5+. Need backlinks + depth on `/ndt-reporting-software-comparison`.

### 4d. NDT Training — high impressions, zero clicks, wrong landing pages
79 queries, **0 clicks**, **467 impr**, avg pos 37.1. Top 10:

| # | Query | Impr | Pos | Landing | Flag |
|---|-------|-----:|----:|---------|------|
| 1 | ultrasonic testing level 1 training | 77 | 55.2 | /ultrasonic-testing-chicago | MISMATCH |
| 2 | api 570 training | 44 | 43.9 | /api-570-certification | — |
| 3 | ndt training in uae | 37 | 15.5 | /ndt-training-dubai | retargetable |
| 4 | ndt training | 26 | 62.4 | /ndt-training-chicago | MISMATCH (head term on city page) |
| 5 | ndt magnetic particles training | 22 | 7.8 | /magnetic-particle-testing-singapore | MISMATCH |
| 6 | ndt dye penetrant test training | 19 | 10.5 | /penetrant-testing-singapore | MISMATCH |
| 7 | api 653 training | 16 | 44.4 | /api-653-certification | — |
| 8 | magnetic particles testing training | 16 | 9.2 | /magnetic-particle-testing-singapore | MISMATCH |
| 9 | ndt penetrant test training | 12 | 14.4 | /penetrant-testing-singapore | MISMATCH |
| 10 | radiographic testing training | 12 | 7.2 | /radiographic-testing-singapore | MISMATCH |

Head term "ndt training" lands on Chicago page at pos 62. **Critical OFI**: build `/ndt-training` hub with method × level matrix; separate city pages from training pages.

### 4e. NDT Consulting — moderate presence, wrong pages
12 queries, **0 clicks**, **147 impr**, avg pos 46.9. Top: "ndt consulting" (64 impr, pos 63.6) → /ndt-consulting-louisiana **MISMATCH (head term on state page)**; "ndt level iii consulting" (36 impr, pos 41) → /consulting; "asnt level iii consulting" (16 impr, pos 22.6) → /consulting/ndt-consulting-level-iii; "non destructive testing level 3 consulting services" (10 impr, pos 17.9) → /blog/ndt-level-iii-consulting-services-guide. **Fix**: `/consulting` must own the head term via internal-link reinforcement from all city pages.

**Pillar priority**: 1) NDT ERP (greenfield); 2) Digital Twin (greenfield, 6–10 articles); 3) NDT Training (restructure IA + hub); 4) NDT Consulting (route head term to /consulting); 5) NDT Reporting (links + depth).

---

## 5. Country Distribution (28d, top 20)

| Country | Impr | Clicks | CTR% | Pos | | Country | Impr | Clicks | CTR% | Pos |
|---------|-----:|-------:|-----:|----:|-|---------|-----:|-------:|-----:|----:|
| USA | 15,959 | 50 | 0.31 | 14.9 | | FRA | 385 | 9 | 2.34 | 8.8 |
| IND | 2,086 | 30 | 1.44 | 7.9 | | IDN | 358 | 1 | 0.28 | 14.3 |
| GBR | 1,341 | 15 | 1.12 | 30.0 | | MYS | 344 | 6 | 1.74 | 6.3 |
| CAN | 1,263 | 14 | 1.11 | 13.1 | | CHN | 334 | 0 | 0.00 | 9.7 |
| ARE | 910 | 20 | 2.20 | 12.5 | | MEX | 305 | 1 | 0.33 | 7.3 |
| SAU | 824 | 9 | 1.09 | 11.1 | | THA | 275 | 1 | 0.36 | 14.7 |
| SGP | 752 | 9 | 1.20 | 14.6 | | ZAF | 273 | 4 | 1.47 | 9.7 |
| BRA | 750 | 2 | 0.27 | 7.6 | | ESP | 263 | 0 | 0.00 | 12.9 |
| AUS | 576 | 8 | 1.39 | 22.4 | | PAK | 249 | 2 | 0.80 | 9.8 |
| DEU | 422 | 1 | 0.24 | 14.1 | | KOR | 248 | 0 | 0.00 | 7.2 |

**Weak-localization red flags (high impr, <0.5% CTR):**
- **USA**: 15,959 impr, **0.31% CTR**, pos 14.9 — biggest leak. 43% of impressions but 20% of clicks. Meta + backlinks.
- **BRA**: 750 impr, 0.27% CTR, pos 7.6 — ranks well, no Portuguese content.
- **DEU**: 422 impr, 0.24%; **IDN**: 358, 0.28%; **CHN**: 334, 0 clicks; **ESP**: 263, 0 clicks; **KOR**: 248, 0 clicks pos 7.2; **THA**: 275, 0.36%.

**Localization OFIs**: Spanish (ESP+MEX = 568 impr), Portuguese (BRA 750), German (DEU 422), Chinese (CHN 334), Korean (KOR 248). USA CTR is meta-driven, not localization-driven.

---

## 6. Device Split (28d)

| Device | Impr | Clicks | CTR | Pos |
|--------|-----:|-------:|----:|----:|
| DESKTOP | 27,074 | 149 | **0.55%** | 14.7 |
| MOBILE | 6,894 | 99 | **1.44%** | 7.7 |
| TABLET | 65 | 0 | 0.00% | 7.0 |

**Counterintuitive**: desktop drags the average, not mobile. Mobile CTR is 2.6× desktop and ranks ~7 positions higher. Desktop = 79% of impressions, 59% of clicks. Likely driver: desktop SERPs show more competing results, ads, and knowledge panels. **Action**: focus meta rewrites on desktop preview (60-char title, 155-char description). Bringing desktop to 1% CTR adds ~120 clicks/mo.

---

## 7. 90d Trend — 28d vs prior 62d (scaled)

| Metric | Current 28d | Prior 62d | Daily 28d | Daily prior | Change |
|--------|------------:|----------:|----------:|------------:|-------:|
| Clicks | 252 | 244 | 9.00 | 3.94 | **+128.7%** |
| Impressions | 36,812 | 26,350 | 1,314.7 | 425.0 | **+209.3%** |

**Traffic growing sharply.** Clicks and impressions both more than doubled on a daily basis. Aligns with indexing pipeline gains (1,530 URLs submitted by 2026-03-31) + 2026-03-24 Soft 404 fix + 2026-03-31 noindex fix.

### Top Query Gainers (impr delta, 28d vs prior-62d scaled)
| Query | 28d impr | prior scaled | Δ impr |
|-------|--------:|-------------:|-------:|
| mfl pipeline inspection service | 220 | 10 | **+210** |
| asnt certification | 157 | 42 | **+115** |
| api 570 certification | 137 | 23 | **+114** |
| radiographic testing | 89 | 0 | **+89** |
| api 653 | 138 | 68 | +70 |
| magnetic particle testing | 74 | 8 | +66 |
| api 653 repairs | 66 | 1 | +65 |
| ndt consulting | 64 | 3 | **+61** |
| ultrasonic testing level 1 training | 77 | 16 | +61 |
| asnt | 62 | 4 | +58 |
| ndt software | 52 | 0 | +52 |
| underwater inspection | 52 | 0 | +52 |
| wfmt inspection | 45 | 0 | +45 |
| api 570 | 107 | 64 | +43 |
| miami ndt hazardous waste | 42 | 0 | +42 |

### Top Query Losers
| Query | 28d impr | prior scaled | Δ impr |
|-------|--------:|-------------:|-------:|
| ultrasonic testing | 69 | 134 | **−65** |
| eddy current ndt | 17 | 53 | −36 |
| ntd connect (brand typo) | 13 | 49 | −36 |
| eddy current testing | 245 | 280 | −35 |
| ndt measurement | 2 | 28 | −26 |
| ndt eddy current | 5 | 30 | −25 |
| api 653 certified tank inspector | 0 | 23 | −23 |
| ultrasonic inspection | 5 | 23 | −18 |
| asset integrity digital twin | 4 | 19 | −15 |

No dramatic losers at scale — biggest is 65 impr on "ultrasonic testing" (algo re-rank, not content loss). Growth vastly outpaces decline.

---

## 8. Near-Silent Pages (impr <5 AND clicks = 0, 28d)

**433 of 977 pages (44.3%) are effectively invisible.**

### Pattern breakdown (silent pages by path prefix)

| Pattern | Silent pages |
|---------|-------------:|
| /services/* | **76** |
| /industry/* | **61** |
| /inspection/* | 41 |
| /blog/* | 40 |
| /consulting/* | 39 |
| /penetrant-testing-[city] | 35 |
| /magnetic-particle-testing-[city] | 30 |
| /visual-testing-[city] | 27 |
| /radiographic-testing-[city] | 22 |
| /ultrasonic-testing-[city] | 20 |
| /eddy-current-testing-[city] | 15 |
| /training/* | 11 |
| /ndt-consulting-[city] | 4 |
| /ndt-training-[city] | 1 |
| other top-level (acoustic-emission-testing, ndt-methods, resources/*) | 11 |
| **TOTAL silent** | **433** |

### Findings & OFIs

- **Method × city pages are the worst offenders**: 149 silent city-method combos (penetrant 35 + MPT 30 + VT 27 + RT 22 + UT 20 + ECT 15). Thin content, internal cannibalization, no topical signal to method hubs. **Prune or consolidate** — keep high-traffic cities; 301 the rest to method hubs or regional pages (/penetrant-testing-usa, /penetrant-testing-europe). Target: 149 → ~30.
- **/services/* and /industry/* = 137 silent pages** (28% of silence). Likely copy-paste template duplication; run Levenshtein pass, merge near-duplicates.
- **39 silent /consulting/* pages** — hurt the NDT Consulting pillar. Link them all from the (to-be-built) /consulting hub.
- **40 silent blog posts** — orphans. Hub-and-spoke internal links from already-ranking guides (ndt-salary, ut-vs-rt-comparison, api-653-tank-inspection-guide).

---

## Executive Summary — Top 5 OFIs

1. **Meta rewrite sprint on 39 zero-click page-1 queries** (pos ≤10, impr ≥10, 0 clicks). Est. +100–150 clicks/mo. Effort: 1–2 days.
2. **Retarget head pillar terms to hub pages**: "ndt consulting" → /consulting (not /ndt-consulting-louisiana); "ndt training" → new /ndt-training hub (not /ndt-training-chicago); "ultrasonic testing" → new /ultrasonic-testing service page (not /blog/ultrasonic-testing).
3. **Greenfield content for NDT ERP + Digital Twin pillars** — 0 and 4 impressions respectively. Without content, top-3 global is impossible.
4. **Prune/consolidate 149 silent method-city pages** + dedupe /services/* and /industry/*. Fixes crawl budget + cannibalization.
5. **Desktop CTR crisis**: 0.55% at pos 14.7 on 27k impr. Mobile converts 2.6× better. Meta rewrites sized for desktop preview (60/155 chars) = biggest absolute click lift.

ndt-connect.com is distant second: 19 clicks / 1,991 impr in 28d, top queries ("phased array ndt", "paut") rank pos 50+. Needs backlinks + content depth before meta optimization matters.
