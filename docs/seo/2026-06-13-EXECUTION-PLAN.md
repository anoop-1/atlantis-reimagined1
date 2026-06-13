# 2026-06-13 Execution Plan — All 10 OFIs + Pricing Strip + Odoo App Expansion

## NEW BRAND RULES (effective 2026-06-13)

1. **No pricing anywhere.** Strip every `$18,000/yr`, `$18K`, `$200K`, `$250K+` mention from site, blog, marketing assets, schemas.
2. **New positioning words:** **Affordable. Accessible. Fully Customizable.** Lead with these three on every ERP page.
3. **CTR floor target:** 6%+ across top 30 high-impression pages.
4. **Proportional segment effort** (most need first): ERP > Digital Twins > Consulting (regressed) > Training (already best).

---

## Phase order

### Phase 1 — Pricing strip (sequential, BEFORE any other agent runs)
Why first: every other agent may regenerate page content. Pricing must be removed everywhere FIRST so new content doesn't reintroduce it.

Targets (grep + global edit):
- `src/components/ErpLocationPage.tsx` — title formula + city case studies + currencyExample blocks
- `src/components/ErpIndustryAppPage.tsx` — hero, pricing block
- `src/components/ErpTripleCrossPage.tsx` — title field, desc field
- All `src/pages/erp/*.tsx` — 270+ pages
- All `src/pages/ndt-erp-*.tsx` wrappers — usually stubs
- Comparison pages `src/pages/erp/odoo-vs-*` — pricing tables
- All Day-2 blog posts `src/pages/blog/affordable-*` + `odoo-vs-*` + others
- Day-0 ERP blog posts
- `src/pages/Erp.tsx` + `src/pages/ndt-erp-solution.tsx` hero blocks
- All `src/data/blogs.json` entries mentioning prices
- `src/components/ErpDtCrossPromoBlock.tsx` ("$18K/yr" CTA)
- `CLAUDE.md` (positioning summary)

Replacement formulas (drop the `$18K/yr` token):
- Old: "Affordable NDT ERP in {City} — $18,000/yr All Odoo Apps Included"
- New: "Affordable NDT ERP in {City} — Fully Customizable, All 30+ Odoo Apps Included"

- Old: "$18,000/yr flat. 30+ Odoo apps included…"
- New: "Affordable, accessible NDT ERP. Fully customizable. All 30+ Odoo apps included…"

- Old comparison page: "$18K vs $250K SAP"
- New: "Affordable vs enterprise SAP / Oracle / NetSuite — same capability without the enterprise license bill"

### Phase 2 — Re-submit 384 sprint URLs (OFI #1, ~30 min after phase 1 commit + Vercel deploy)
Force Google recrawl on:
- 232 Day-0 ERP pages (`scripts/indexing-url-list.json`)
- 15 Day-0 blog posts (`indexing-url-list-blogs.json`)
- 26 Day-0 phase-3 (`indexing-url-list-phase3.json`)
- 106 Day-1 pages (`indexing-url-list-day1.json`)
- 97 Day-2 main pages (`indexing-url-list-day2-full.json`)

Plus: clear `.gsc-multi-state.json` for these URLs so GSC accepts URL_UPDATED submission.
Plus: IndexNow ping all.

### Phase 3 — Parallel agent dispatch (after phase 1 push)

#### Agent CTR — CTR v2 titles + meta for top 30 high-impression pages
Target: 6%+ CTR. Rewrite formulas:
- Lead with EXACT search term (per GSC query)
- Add a power word (Free, Pass-Rate, ASNT-Approved, In-Demand, 2026)
- Add specific outcome ("3-day pass rate 94%", "ASNT Level III-led")
- 55-60 char titles (avoid truncation)
- Descriptions 145-160 chars with CTA

30 pages with impressions > 400 / CTR < 3%:
1. /blog/ndt-salary-guide-2026-global (13,370 imp / 0.8% CTR)
2. /asnt-certification (7,125 / 0.8%)
3. /blog/api-653-tank-inspection-guide (4,311 / 0.6%)
4. /api-570-certification (3,366 / 1.0%)
5. /api-510-certification (3,293 / 0.8%)
6. /api-653-certification (2,748 / 0.7%)
7. /blog/asnt-snt-tc-1a-certification-requirements (2,498 / 1.3%)
8. /blog/api-510-570-653-exam-schedule-2026 (2,452 / 1.5%)
9. /blog/asme-section-v-article-4-ut-requirements-explained (2,119 / 2.0%)
10. /blog/rt-vs-ut-complete-comparison (2,009 / 1.3%)
11. /blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison (1,832 / 1.6%)
12. /blog/eddy-current-testing-complete-guide (1,765 / 0.7%)
13. /blog/visual-testing (1,594 / 1.5%)
14. /blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide (1,455 / 1.3%)
15. /blog/asnt-snt-tc-1a-vs-cp-189-comparison (1,366 / 1.5%)
16. /digital-twins (1,266 / 0.3%)
17. /ndt-industry-statistics (981 / 0.6%)
18. /blog/cwi-certification-requirements-cost-career-impact (868 / 0.0%)
19. /blog/asme-section-viii-division-1-pressure-vessel-ndt (694 / 2.3%)
20. /blog/ut-vs-rt-comparison (636 / 0.5%)
21. /blog/magnetic-particle-testing-complete-guide (599 / 0.8%)
22. /blog/asme-b31-3-process-piping-requirements (595 / 1.0%)
23. /blog/ndt-level-iii-certification-requirements-guide (518 / 0.6%)
24. /blog/mfl-pipeline-inspection-cost-vendors (502 / 1.0%)
25. /ndt-technician-salary (484 / 1.0%)
26. /blog/forging-defect-detection-and-assessment (480 / 0.8%)
27. /api-inspector-guide (440 / 0.2%)
28. /blog/eddy-current-testing (429 / 0.5%)
29. /magnetic-particle-testing (410 / 0.0%)
30. /blog/ndt-technician-salary-guide-2026-industry-report (385 / 0.3%)

Expected at 5% CTR: +1,300 clicks/30d from these 30 alone.

#### Agent CON — Consulting hub rewrite + 4 new service pages
- Rewrite `/consulting` hero to lead with "ASNT Level III NDT Consulting" + add ProfessionalService schema
- Internal-link from `/api-{510,570,653}-certification` pages → consulting
- Add 4 new service-line pages under `/consulting/` targeting confirmed queries:
  - `/consulting/asnt-level-iii-consulting-services`
  - `/consulting/api-653-tank-inspector-services`
  - `/consulting/api-570-piping-inspector-services`
  - `/consulting/api-510-pressure-vessel-inspector-services`

#### Agent IL — Internal link injection across top traffic pages
Build `scripts/internal-link-injection.mjs` that adds 4-6 "Related guides" contextual links per page. Target pages: top 40 by clicks. Link to: position 11-30 climbers + consulting hub + ERP/DT pillars.

#### Agent OA — 7 new Odoo-app pages (filling the screenshot gaps)
Per user screenshot, build pages for missing Odoo apps that map to real product features (skip duplicates of existing):
- `/erp/ai-marketing-for-ndt-companies` — Atlantis AI Marketing app (huge SEO angle: AI + NDT)
- `/erp/ndt-reports-software-for-inspection-companies` — replaces "NDT Reports" Odoo app, dedicated landing
- `/erp/inspection-procedures-management-software` — Odoo Procedures app (NDT procedure writing/approval workflow)
- `/erp/ndt-certificates-management-software` — Odoo Certificates app (issue + track customer-facing certs)
- `/erp/elearning-platform-for-ndt-training` — Odoo eLearning (training providers angle)
- `/erp/surveys-software-for-ndt-companies` — Odoo Surveys (customer feedback / safety surveys)
- `/erp/dashboards-and-kpis-for-ndt-companies` — Odoo Dashboards (KPI tracking)
Plus rename/refresh existing:
- Rename Procurement → Purchase (per Odoo)
- Add Fleet, Time Off, Link Tracker, Business Cards, Team Assignments, Quotations, Asset Management as new pillar pages
- Each pillar 1,500+ words, Affordable/Accessible/Customizable positioning, no pricing

#### Agent EC — 5 long-form ERP demand-cluster hubs
- `/erp/construction-erp-singapore` — target "construction erp singapore" cluster (66 imp/30d, pos 26-33)
- `/erp/oil-gas-erp-malaysia` — target "erp oil and gas malaysia" cluster (47 imp, pos 18-37)
- `/erp/coating-industry-erp` — "coating industry erp" (7 imp, climbing)
- `/erp/ndt-inspection-software-comparison` — "ndt inspection software" (28 imp pos 59) — needs comparison angle + real depth
- `/erp/work-order-management-singapore` — "work order management system singapore" cluster (5 imp pos 22-9)

Each 2,000-3,000 words. Real local operators, real regulators, no pricing.

#### Agent DT — Digital Twin CTR rescue
Rewrite `/digital-twins` title from "Digital Twin Software for NDT 2026 — UT/PAUT in 3D, API 579" to A/B options:
- "Digital Twin for Asset Integrity — UT/PAUT 3D Overlay + API 579 FFS | Atlantis"
- "Digital Twin Platform Built by ASNT Level III Engineers"

Also rewrite `/digital-twin-roi-calculator` (80 imp, 2.5% CTR, pos 2.8 — push to top-1 with calc widget update).

#### Agent FOR — Seam-defect blog upgrade
`/blog/forging-defect-detection-and-assessment` ranks pos 8.8 / pos 3.3 / pos 5.6 for the seam-defect cluster but 0 clicks. Title rewrite + add CTA: "Forging Seam Defect Detection — ASNT Level III Methodology | Atlantis NDT"

### Phase 4 — Resubmit again (after parallel agents push)
After agents commit Phase 3 work:
- Build new URL list of all touched pages
- Resubmit to GSC + IndexNow

### Phase 5 — Measure
- Daily `node scripts/gsc-30day-tracker.mjs`
- Watch newPages.withImpressions rise above 0 within 5-7 days
- Watch top-30 CTR climb above 3% within 14 days (target 6%+)

---

## Constraints reminder

- **Strictly additive** per existing memory rule. Don't strip existing content quality.
- **No new pricing numbers anywhere.** Even when comparing to SAP/Oracle/NetSuite, say "enterprise license bill" not "$250k+".
- **Real facts only.** Real operators, real regulators, real codes. No fabrication.
- **TypeScript clean** for all new/edited files (`tsc --noEmit -p tsconfig.app.json`).
- **JSX entity escapes** — use `&gt;`/`&lt;` for raw `>`/`<` in text.
- **Push protection** — no tokens in committed files.
