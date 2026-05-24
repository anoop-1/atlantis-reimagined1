# Consulting Segment +20% Expansion — Day 1 — 2026-05-24

Sprint: 30,000 clicks/month by 2026-06-22.
Segment baseline (30d): Consulting = **8 clicks / 480 impressions / 43 pages**.
This sprint targets the consulting segment because (a) it is the weakest by clicks and (b) `/consulting/ndt-consulting-accra` proves consulting city pages can hit **9.3% CTR** when content is good.

---

## A) 20 NEW Consulting City Pages

All created as 5-line wrappers around `ConsultingLocationPage` in `src/pages/`:

| # | Slug | City | Country | Industries (driver) |
|---|------|------|---------|---------------------|
| 1 | `ndt-consulting-riyadh` | Riyadh | Saudi Arabia | Aramco/SABIC/Ma'aden HQ, Vision 2030 |
| 2 | `ndt-consulting-khobar` | Al Khobar | Saudi Arabia | Eastern Province services hub (SLB/HAL/BHGE) |
| 3 | `ndt-consulting-ras-tanura` | Ras Tanura | Saudi Arabia | World's largest crude export terminal |
| 4 | `ndt-consulting-jebel-ali` | Jebel Ali | UAE | JAFZA port + ENOC + EGA smelter |
| 5 | `ndt-consulting-mussafah` | Mussafah | UAE | Abu Dhabi heavy-fab and ADNOC contractor hub |
| 6 | `ndt-consulting-ruwais` | Ruwais | UAE | ADNOC refining + Borouge + Ta'ziz |
| 7 | `ndt-consulting-sharjah` | Sharjah | UAE | SNOC, Crescent Petroleum, Dana Gas |
| 8 | `ndt-consulting-fujairah` | Fujairah | UAE | Bunkering + oil storage |
| 9 | `ndt-consulting-manama` | Manama | Bahrain | BAPCO Modernization Program, Alba |
| 10 | `ndt-consulting-muscat` | Muscat | Oman | PDO / Oman LNG / OQ HQ |
| 11 | `ndt-consulting-sohar` | Sohar | Oman | OQ Refineries + Jindal Shadeed steel |
| 12 | `ndt-consulting-duqm` | Duqm | Oman | Duqm Refinery (OQ8) + SEZAD |
| 13 | `ndt-consulting-pune` | Pune | India | Tata/Bajaj/Bharat Forge automotive + aerospace |
| 14 | `ndt-consulting-vadodara` | Vadodara | India | IOCL Gujarat Refinery + Gujarat PCPIR |
| 15 | `ndt-consulting-hyderabad` | Hyderabad | India | BHEL, TASL, DRDO defence cluster |
| 16 | `ndt-consulting-surat` | Surat | India | ONGC Hazira, Shell Hazira LNG |
| 17 | `ndt-consulting-baytown` | Baytown | USA | ExxonMobil Baytown + CP Chem + Covestro |
| 18 | `ndt-consulting-port-arthur` | Port Arthur | USA | Motiva + Valero + Total |
| 19 | `ndt-consulting-balikpapan` | Balikpapan | Indonesia | Pertamina Balikpapan Refinery |
| 20 | `ndt-consulting-fort-mcmurray` | Fort McMurray | Canada | Suncor / Syncrude / CNRL oil sands |

**Notes on slug selection:**
- The task brief listed dammam, delhi, jubail, mumbai, vizag, yanbu, lake-charles, corpus-christi, ahmedabad, midland — but all of these already had consulting city pages, so we picked the highest-priority *truly missing* slugs from the GCC / India / US-Gulf-Coast / Canadian-oilsands axes that map to Atlantis NDT's actual industrial customer base.
- All 20 pages use the existing `ConsultingLocationPage` component pattern: `<ConsultingLocationPage locationSlug="<slug>" />`.
- Component reads `keyLocations` from `src/data/programmatic-seo.ts`. We added 20 matching entries there with real industry/operator data — no fabricated companies.

---

## B) CTR Title/Description Rewrites

Component-level `titleMap` + `descMap` in `src/components/ConsultingLocationPage.tsx` rewritten using the API-codes-first formula:

> **Title:** `NDT Consulting in {City} — ASNT Level III, API 510/570/580/653 RBI, FFS Audits | Atlantis NDT`
> **Desc:**  `Atlantis NDT consulting in {City}: ASNT Level III SME support, API RBI program design, fitness-for-service per API 579, code consulting. Trusted by {sector}. Quote: info@atlantisndt.com`

Explicit entries (highest impression pages): **Houston, Dubai, Saudi Arabia, Singapore, Abu Dhabi, Dallas, Nigeria** (7 hub cities with custom variants).

**Cascade effect:** the fallback `pageTitle` / `pageDesc` formula in `ConsultingLocationPage.tsx` now drives **every consulting city page that does not have an explicit entry** — so all 97 existing + 20 new = 117 consulting city pages immediately get the new CTR-optimised title pattern. This is the multiplier that converts the 4-clicks-on-accra signal into segment-wide lift.

Hub pages (`/consulting`, `/consulting-usa`, `/consulting-me`, `/consulting-india`) were inspected; current titles already lead with "NDT Consulting + Level III" so left in place this sprint (separate rewrite recommended once segment data confirms which hub gets the most consolidated clicks).

---

## C) 15 Rich City Context Enrichments

Added 15 new entries to `locationIntros` map in `src/components/ConsultingLocationPage.tsx`. Each is **200-300 words** across `intro` + `marketInsight` + `regionalChallenge`, all citing **real operators, real codes, real local drivers** (no fabrication):

| # | Slug | Real-world content anchors |
|---|------|---------------------------|
| 1 | riyadh | Aramco/SABIC/Ma'aden HQ; Vision 2030; NEOM/Red Sea; IKTVA; SAES |
| 2 | jubail | RCJY; SADARA; SABIC plant-life-extension; HTHA per API RP 941; HIC per NACE TM0284 |
| 3 | yanbu | SAMREF; YANPET; YASREF; YANSAB; East-West pipeline; IKTVA |
| 4 | dammam | Aramco HQ; Jafurah unconventional gas; API Spec Q1; NACE MR0175 / ISO 15156 |
| 5 | khobar | SLB/HAL/BHGE/Weatherford ME offices; PAUT/TOFD/digital RT; CUI campaigns |
| 6 | ras-tanura | Crude export terminal; API 580/581 RBI; API 579 FFS; DNV marine codes |
| 7 | jebel-ali | JAFZA; ENOC condensate refinery; EGA smelter pots; DEWA M-Station; MoIAT |
| 8 | mussafah | ADNOC 30-04 / 30-99 NDT standards; CSWIP; ISO 9712; ADNOC AGES-SP-09-007 |
| 9 | ruwais | Ruwais 2030; Borouge 4; Ta'ziz; ASME IX welder qual; ADNOC AGES/AOSR |
| 10 | sharjah | SNOC Mahani/Moveyeid gas; Sharjah LNG import; Hamriyah Free Zone |
| 11 | manama | BAPCO Modernization Program; Alba Line 6; Tatweer EOR; API RP 941 |
| 12 | muscat | PDO; Oman LNG; OQ Liwa Plastics; ICV local-content; API 570 in-service |
| 13 | pune | NAS 410 aerospace; Tata Air India Airbus assembly; Bharat Forge; AWS D1.1 |
| 14 | vadodara | IOCL Gujarat Refinery BS-VI revamp; PCPIR; PESO/IBR statutory inspection |
| 15 | fort-mcmurray | Suncor/Syncrude/CNRL; ABSA; CSA W178.2; naphthenic acid corrosion; HTHA |

Cities that already had rich `locationIntros` (Houston, New Orleans, Singapore, Aberdeen, Dubai, Abu Dhabi, Mumbai, Delhi, etc.) were **not touched** per the "no undo of prior work" rule.

---

## D) Wiring

### `src/App.tsx`
- **Lazy imports**: added 20 new `lazy(() => import(...))` lines inside markers `// === Consulting expansion 2026-05-24 ===` ... `// === /Consulting expansion 2026-05-24 ===` (after `NDTConsultingCasablanca`, before Digital Twin imports).
- **Routes**: added 20 new `<Route path="/consulting/ndt-consulting-{slug}" ...>` lines inside JSX markers `{/* === Consulting expansion 2026-05-24 === */}` ... `{/* === /Consulting expansion 2026-05-24 === */}` (after `casablanca` route, before Resource Pages section).

### `src/data/curated-cities.ts`
- Added 20 new slugs to `CONSULTING_CITY_PAGE_SLUGS` under a `// === Consulting expansion 2026-05-24 ===` comment so the new pages get `index, follow` (curated) rather than `noindex` from the `isCuratedCity` gate inside `ConsultingLocationPage`.
- All 20 slugs were already present in `CURATED_CITY_SLUGS` from prior ERP / Training expansions — no further additions needed.

### `src/data/programmatic-seo.ts`
- Added 20 new entries to `keyLocations` array under the `// === Consulting expansion 2026-05-24 ===` block — each with real `industries`, real `companies`, accurate `region` / `country`.

---

## TypeScript Check

```bash
npx tsc --noEmit -p tsconfig.app.json
```

Filtered for files touched in this sprint:

```bash
npx tsc --noEmit -p tsconfig.app.json 2>&1 | grep -iE "consulting|programmatic-seo|curated-cities"
```

Result: **0 new errors** in any file touched by this sprint. Pre-existing project-wide errors (FeatureSection, erp-industries faqs, CorporateTrainingLocationPage BreadcrumbItem, etc.) are unchanged.

---

## Counts

- New consulting city pages: **20**
- Title rewrites: **7 explicit + 110+ via cascade** (the fallback formula in `ConsultingLocationPage.tsx`)
- New rich location-context enrichments (200-300 words each): **15**
- App.tsx new imports / routes: **20 / 20**
- `CONSULTING_CITY_PAGE_SLUGS` net delta: **+20**
- `keyLocations` net delta: **+20** real industrial-city entries
- TypeScript regressions: **0**

---

## Next Sprint Suggestions

1. **Section B v2** — rewrite hub page titles (`/consulting`, `/consulting-usa`, `/consulting-me`, `/consulting-india`) with the same API-codes-first formula once we see segment lift.
2. **Section C v2** — add rich `locationIntros` for the remaining ~80 consulting city pages currently falling back to `generateDynamicConsultingContent`.
3. **Programmatic enrichment** — port the GCC- and Aramco-specific code references into the `consultingServices` array so they appear on *every* consulting page (cross-segment lift).
4. **GSC submission** — push the 20 new URLs into `scripts/gsc-submit-priority.mjs` Tier 1 list so they are indexed within 24 hours.
