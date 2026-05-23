# Plan Execution Audit — 2026-05-23 End-of-Day

Status of each line item from master plan + 30-day plan + FINAL-REPORT backlog.

Legend: ✅ done · ⚠️ partial · ❌ pending · 🕐 in flight (waiting on time/Google)

---

## Master plan (docs/seo/2026-05-23-erp-dt-seo-audit-plan.md)

### Phase 1 — Quick CTR Wins
| Item | Status | Note |
|---|---|---|
| Top 30 page titles/descs rewritten | ✅ | 26 files + 4 blog JSON entries. Cascade via ErpLocationPage formula → all 100+ /ndt-erp-{city} pages |
| Backup of SEOHead props before edit | ⚠️ | Git history is the backup |
| Weekly CTR tracking | ❌ | Tracker script exists but no Windows Scheduled Task yet — user must wire `node scripts/gsc-30day-tracker.mjs` to a daily cron |

### Phase 2 — Affordable ERP positioning
| Item | Status | Note |
|---|---|---|
| /erp + /ndt-erp-solution hero rewritten | ✅ | Done |
| Explicit $18K vs SAP/Oracle/NetSuite comparison | ⚠️ | Lives in 2 new blog posts (`odoo-vs-sap-vs-netsuite-erp-comparison-2026`, `affordable-erp-alternative-sap-oracle-netsuite-comparison`). Not yet a dedicated `/erp/compare/...` page tree |
| Cross-link every city page to /erp | ✅ | ErpDtCrossPromoBlock on 250+ pages + RelatedProducts component already wired |
| Dedicated comparison pages: /odoo-vs-sap-ndt-companies, /odoo-vs-netsuite-ndt-companies, /odoo-vs-oracle-ndt-companies | ❌ | NOT built as standalone product pages. Blog form only. **Pending.** |

### Phase 3 — Odoo Apps as Primary Keywords
| Item | Status | Note |
|---|---|---|
| 25 Odoo-app pillar pages | ✅ | All 25 created at /erp/{app}-for-ndt-companies. Live + indexed-queued |
| Schema.org SoftwareApplication markup | ⚠️ | Each pillar uses `<SEOHead faq={...}>` for FAQPage schema. No explicit SoftwareApplication schema — **pending** add later |
| 3-5 city variants per app for high-demand cities | ✅ | 100 Odoo-app × city combo pages created |

### Phase 4 — 200+ New ERP city/sub-city pages
| Item | Target | Actual | Status |
|---|---:|---:|---|
| Sub-cities of existing major hubs | 50 | 75 | ✅ exceeded |
| New countries / regions | 60 | 32 | ⚠️ partial (skipped sanctioned territories + some lower-priority countries) |
| Odoo-app × city combinations | 90+ | 100 | ✅ |
| **Total new pages** | **200+** | **232** | ✅ |
| Additional state/region pages (India states, US states) | ❌ | — | **Pending.** Texas/Louisiana/California done. India states Maharashtra/Gujarat/TN/KA missing |

### Phase 5 — Content depth for 125 thin city pages
| Item | Target | Actual | Status |
|---|---:|---:|---|
| Cities enriched | 125 | 29 | ⚠️ 23% — **Pending: 96 more cities** still using generic ErpLocationPage fallback |

### Phase 6 — Indexing + monitoring
| Item | Status | Note |
|---|---|---|
| Submit new URLs via gsc-submit-priority.mjs | ✅ | 232 + 1532 + 15 = 1,779 URLs to GSC today across 10 SAs |
| Sitemap entries regenerated | ✅ | 232 new `<url>` appended to public/sitemap.xml |
| Internal linking from /erp, /digital-twins, homepage | ⚠️ | Cross-promo block deployed on 250+ pages. **Pending: link blocks on /erp + /digital-twins + homepage pointing to new pillars** |
| Weekly GSC report cron | ❌ | Script exists (gsc-weekly-report.mjs). **Pending: Windows scheduled task** |
| 232 URLs to Bing IndexNow | ✅ | + 15 blog posts = 247 to Bing |

---

## 30-day execution plan (docs/seo/2026-05-23-30day-execution-plan.md)

### Week 1 (Days 1-7) — Index + Crawl
| Item | Status |
|---|---|
| Submit 232 new URLs to Google + Bing | ✅ Day 0 |
| Submit 1,532 unindexed sitemap URLs | ✅ Day 0 |
| Daily gsc-submit-priority.mjs at 6 AM | ✅ Pre-existing Windows scheduled task |
| Day 1: Vercel deploy stable, spot-check 10 new pages | 🕐 Auto-deployed; user should spot-check tomorrow |
| Day 4: First GSC re-crawl check via tracker | 🕐 |
| Week 1 milestone: 50-80 new pages with first impressions | 🕐 (currently 0 — < 24 hrs since submit) |

### Week 2 (Days 8-14) — CTR Lift
| Item | Status |
|---|---|
| 35 vercel.app satellite refresh + backlinks | ❌ **Pending** |
| G2 / Capterra / SoftwareSuggest / GetApp listings | ❌ **Pending** |
| Top-5 winning pages identification | 🕐 Day 8+ |
| 2 supporting articles per winning page | ❌ **Pending** (Day 12) |
| Week 2 milestone: 400-800 ERP/DT clicks cumulative | 🕐 |

### Week 3 (Days 15-21) — Scale + Optimize
| Item | Status |
|---|---|
| Next 50 sub-city ERP pages | ❌ **Pending** (Day 15+) |
| 5 more Odoo-app × city combos | ❌ **Pending** (Day 17) |
| Refresh top 10 winning pages to 3,000 words | ❌ **Pending** (Day 18) |
| LinkedIn organic — 25 posts | ❌ **Pending** (Day 20) |
| Week 3 milestone: 1,500-2,500 clicks | 🕐 |

### Week 4 (Days 22-30) — Acceleration
| Item | Status |
|---|---|
| Crunchbase / Trustpilot / SoftwareSuggest / GoodFirms / Clutch | ❌ **Pending** |
| Outbound email campaign — Atlantis Marketing Agent → pillar pages | ❌ **Pending** (Day 25) |
| 5 more long-tail blog posts | ❌ **Pending** (Day 28) |
| Final measurement Day 30 | 🕐 |

---

## FINAL-REPORT backlog (docs/seo/2026-05-23-FINAL-REPORT.md §11)

| # | Item | Status |
|---|---|---|
| 1 | State pages for India (Maharashtra, Gujarat, Tamil Nadu, Karnataka) + Asian states | ❌ |
| 2 | Dedicated comparison pages `/odoo-vs-sap-ndt-companies`, `/odoo-vs-netsuite-ndt-companies`, `/odoo-vs-oracle-ndt-companies` | ❌ (blog form only) |
| 3 | Industry-specific Odoo-app pages (e.g. `/erp/crm-for-pipeline-integrity`, `/erp/cmms-for-aerospace`) | ❌ |
| 4 | NDT Connect cross-link per page | ❌ |
| 5 | 35 satellite vercel.app site backlinks to new pillar pages | ❌ |
| 6 | Bing Webmaster Tools sitemap submit (separate from IndexNow) | ❌ |
| 7 | YouTube videos per Odoo app | ❌ |
| 8 | G2 / Capterra / SoftwareAdvice listings | ❌ |
| 9 | Enrich remaining 75-96 thin city pages | ❌ |
| 10 | GA4 API access (Analytics Data API + Admin API in GCP project 139446864572) | ❌ |

---

## Done today — verified live

| Asset | Count | Verified |
|---|---:|---|
| Sub-city + country ERP stubs (`/ndt-erp-{slug}`) | 265 total (158 existing + 107 new) | ✅ disk count matches |
| ERP pillar + combo pages (`/erp/{slug}`) | 177 total (52 existing + 125 new) | ✅ disk count matches |
| New keyword-targeted blog posts | 15 | ✅ disk count matches |
| Cities enriched in ErpLocationPage | 29 + existing 31 = 60 | ✅ TypeScript clean |
| URLs to GSC Indexing API today | 1,779 | ✅ ledger logged |
| URLs to Bing IndexNow today | 247 | ✅ 200 OK |
| Day-0 tracker snapshot saved | 1 | ✅ scripts/30day-tracker-snapshots/2026-05-23.json |
| Git commits | 2 | ✅ pushed to origin/main |
| Vercel deploys | 2 (~5 min each) | ✅ preflight passed 100% |

---

## What's pending — short list, ranked by 30-day-goal impact

1. **Daily tracker cron** — user must wire `node scripts/gsc-30day-tracker.mjs` to a Windows Scheduled Task at 9 AM daily. Otherwise we won't catch lag early.
2. **Enrich remaining 96 thin city pages** — biggest content-quality risk
3. **35 satellite-site refresh + backlinks** — best low-effort backlink lever
4. **G2 / Capterra / SoftwareSuggest listings** — high-intent buyer traffic
5. **3 dedicated comparison pages** (`/odoo-vs-sap`, `/odoo-vs-oracle`, `/odoo-vs-netsuite`) — blog form is not enough for product-comparison search
6. **Industry-specific Odoo-app pages** (CRM-for-pipeline-integrity etc.) — 5-10 high-value
7. **India state pages** — Maharashtra/Gujarat/TN/KA missing
8. **LinkedIn organic + outbound email** — Week 3-4
9. **YouTube videos** — Week 3-4
10. **GA4 API enablement** — needed for conversion correlation, not click count

---

## Reality check on 4,000-clicks-in-30-days target

Tracker baseline: **6 ERP+DT clicks / 30 days**.

Day-0 status:
- 247 new pages submitted but **0 impressions yet** (< 24 hrs since submit; Google needs 2-7 days to recrawl + reindex + show impressions)
- 1,532 existing unindexed pages also submitted — bonus clicks come from these
- CTR rewrites NOT visible yet (Google recrawls high-imp pages typically 3-14 days)

Honest projection at day 30 *with* Phase-1+2 work done + the pending items above all executed:
- Realistic: **1,800–2,800 ERP+DT clicks**
- Stretch (if satellite refresh + directory listings + cold-email all hit): **3,500–4,500**

Without the pending Week 2-4 items, expected range collapses to **800–1,500**.

To clear 4,000 we need to execute the Week 2 + Week 3 levers, especially satellite refresh and directory listings. Those are the missing 2-3x multiplier.
