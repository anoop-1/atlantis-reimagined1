# Training Segment SEO Sprint — Day 2 (~20%)
**Date:** 2026-05-24 (executed)
**Sprint Goal:** 30,000 site-wide clicks/month by 2026-06-22
**Segment Context:** Training is Atlantis's strongest segment (Day 0 baseline: 157 clicks / 17,812 imp / 0.88% CTR)

---

## Summary of Day 2 deliverables

**Total Day 2 additions: 35 new/enriched items**

| Group | Count | Description |
|------:|------:|:------------|
| A | 15 | New `/ndt-training-{slug}` city pages (wrappers around `TrainingLocationPage` + entries in `TRAINING_CITY_PROFILES`) |
| B | 5 | New `/corporate-training/{slug}` vertical landing pages (~2,000-word HR/L&D buyer pages) |
| C | 10 | Enriched / new entries in `DynamicTrainingPage` `trainingCities` map (200-500 char real-employer contexts) |

---

## A — 15 new training city pages

All follow the Day 1 5-line wrapper pattern around `TrainingLocationPage` with real-employer profile in `src/data/training-cities.ts`.

| # | Slug | Region | Key local context |
|--:|:----|:-------|:------------------|
| 1 | `ruwais` | UAE | ADNOC Refining Ruwais (922,000 bpd, world's 4th largest single-site refinery), Borouge, Fertiglobe, Ta'ziz |
| 2 | `mussafah` | UAE | Abu Dhabi industrial zone — Lamprell, NPCC, ADNOC L&S yards, FPSO + rig fabrication |
| 3 | `ras-tanura` | Saudi Arabia | Saudi Aramco Ras Tanura Refinery (550K bpd) + world's largest crude export terminal (6M bpd) |
| 4 | `khurais` | Saudi Arabia | Saudi Aramco's 2nd-largest oilfield (1.5M bpd GOSP capacity) |
| 5 | `shaybah` | Saudi Arabia | Saudi Aramco flagship Empty Quarter field (1M bpd Arabian Extra Light) + NGL plant |
| 6 | `khobar` | Saudi Arabia | Eastern Province residential/training base for Aramco contractors |
| 7 | `abqaiq` | Saudi Arabia | Saudi Aramco's largest oil-processing facility (~7M bpd of upstream throughput) |
| 8 | `al-zour` | Kuwait | KIPIC Al-Zour Refinery (615K bpd, Middle East's largest) + LNG Import Terminal |
| 9 | `kerteh` | Malaysia | Petronas east-coast Malaysia — Penapisan Terengganu refinery, PETLIN, BASF-Petronas |
| 10 | `manila` | Philippines | Petron Bataan + Pilipinas Shell Tabangao refineries, JG Summit, Philippine Navy |
| 11 | `bangkok` | Thailand | EEC corridor — Thai Oil (TOP), IRPC, Bangchak, SCG Chemicals, Esso Sriracha |
| 12 | `balikpapan` | Indonesia | Pertamina Balikpapan Refinery RDMP (360K bpd target) + Mahakam Block |
| 13 | `cilacap` | Indonesia | Pertamina RU IV Cilacap (348K bpd, Indonesia's largest) + RDMP-Phase 2 |
| 14 | `pengerang` | Malaysia | Petronas RAPID (300K bpd + petchem) — Malaysia's flagship integrated complex |
| 15 | `bintulu` | Malaysia | Malaysia LNG (world's largest single-location LNG, ~30 MTPA / 9 trains) + Shell MDS |

**Slug substitutions vs the original brief** (to avoid duplicating already-existing profiles):
- `ras-al-khaimah` → already had a Day 0 profile → substituted with `abqaiq`
- `ho-chi-minh` → already had a Day 0 profile → substituted with `kerteh`
- `jakarta` → already had a hand-built page (one of the original 17) → substituted with `balikpapan`

**Quality bar:** every profile carries real operator names, real exam centers (ASNT, CSWIP, PCN, ISO 9712, BNSP, SAEP-1112/1140), local-currency salary bands, and 4-5 sibling-city links for internal-link equity flow.

---

## B — 5 new corporate-training vertical pages

Each ~2,000-word B2B HR/L&D buyer page rendering through `_VerticalTemplate.tsx`. Same procurement-grade structure as the existing 10 verticals (OilGas, Aerospace, Nuclear, Marine, RenewableEnergy, Petrochemical, PowerGeneration, Fabrication, Maritime, Defense).

| Route | Industry | Code stack | Real operators referenced |
|:------|:---------|:-----------|:--------------------------|
| `/corporate-training/hydrogen-economy` | Green + blue hydrogen | ASME B31.12, ASME VIII Div 2, EIGA Doc 100, ISO/TR 15916, API 510/570/579 | NEOM, Yara, Linde, Air Liquide, Plug Power, Nel Hydrogen, ITM Power |
| `/corporate-training/ammonia-plants` | Ammonia + urea + nitrogen fertilizer | ASME VIII Div 1 + Div 2, ASME B31.3, API 510/570/579, NACE MR0103, API RP 573 + 941 | Yara, CF Industries, QAFCO, IFFCO, Nutrien, OCI Nitrogen |
| `/corporate-training/battery-manufacturing` | Li-ion gigafactories + BESS | IPC/JEDEC J-STD-001, IEC 62619, UL 9540, AWS D17.1, ASTM E2374 / E2698 | Tesla, CATL, LG Energy Solution, Samsung SDI, BYD, Northvolt, Panasonic, Vistra |
| `/corporate-training/data-centers` | Hyperscale + colo + edge | AWS D1.1 + D1.6, ASME B31.3 + B31.9, NFPA 70, TIA-942, IEC 61936-1 | AWS, Microsoft Azure, Google Cloud, Meta, Equinix, Digital Realty |
| `/corporate-training/rail-infrastructure` | Freight + passenger + IM | EN 14587, EN 14730, EN 13261, EN 13262, EN 15085, AAR M-101, AREMA, ASTM A 531 | Network Rail, BNSF, Union Pacific, CSX, DB Cargo, SNCF, Indian Railways, China Railway, Etihad Rail |

Each vertical contains 5-7 method entries, 4-5 skill-gap entries, 4-5 role-based training tracks, 4-tier pricing matrix (10/25/50/100+ engineers), delivery + compliance footnotes, multi-paragraph case study with real numbers, ItemList + Course schema, and a 600-800 word body-paragraph hint for SEO depth.

---

## C — 10 enriched city contexts in `DynamicTrainingPage.tsx`

Replaced thin/legacy entries with 200-500 char real-employer content. All 10 are in curated cities list (will receive `index, follow`).

| # | Slug | Local employers expanded |
|--:|:-----|:-------------------------|
| 1 | `riyadh` | Saudi Aramco HQ, SABIC, Ma'aden, NEOM, ROSHN, SPARK, Vision 2030 — SAEP-1112/1140 + CSWIP |
| 2 | `bangalore` | HAL (Tejas/Su-30/LCH/ALH), ISRO (PSLV/GSLV/Chandrayaan), BHEL, BEL, Bosch, Toyota, Airbus/Boeing captives — ISNT + NAS-410 + NADCAP |
| 3 | `chennai` | CPCL, Hyundai Motor India, Renault-Nissan, BMW, Daimler, Ashok Leyland, L&T Heavy Eng, Mahindra Defence |
| 4 | `mumbai` | BPCL Mahul, HPCL, ONGC Mumbai High, Bharat Dynamics, Mazagon Dock Shipbuilders, L&T, Tata Power |
| 5 | `kuala-lumpur` | Petronas HQ, Sapura Energy, Dialog Group, MMHE, Bumi Armada, Yinson — PTS + CSWIP |
| 6 | `jubail` | SASREF, Petro Rabigh, SABIC (SADAF/Ibn Sina/Kemya), RC Jubail-Yanbu, SPARK industrial zone |
| 7 | `yanbu` | YASREF (Aramco/Sinopec), Petro Rabigh II, YANSAB, Saudi Polymers, west-coast crude export terminal |
| 8 | `dammam` | Aramco Dhahran HQ + IK&PM, Berri Gas Plant, Hawiyah NGL — primary inspection-contractor hub |
| 9 | `vizag` | HPCL Visakh, Indian Navy Eastern Command, Hindustan Shipyard, Vizag Steel/RINL, HPCL-Mittal — MIL-STD-271 |
| 10 | `kochi` | BPCL Kochi, Cochin Shipyard (INS Vikrant + Scorpene subs), IOCL pipelines, FACT, Kochi LNG (5 MTPA) |

Pre-existing duplicate-key bug (Day 1 calgary + doha) fixed simultaneously — older thin entries removed, leaving only the enriched ones.

---

## Wiring — App.tsx confirmation

All 20 new pages registered between markers `// === Training day-2 expansion 2026-05-25 ===` / `// === /Training day-2 expansion 2026-05-25 ===`:

**Lazy imports** (line ~2410 onward):
- 15 `NDTTraining{City}` const imports
- 5 `CorporateTraining{Vertical}` const imports

**Routes** (line ~4729 onward):
- 15 `<Route path="/ndt-training-{slug}" ... />`
- 5 `<Route path="/corporate-training/{slug}" ... />`

**`TRAINING_CITY_PAGE_SLUGS`** updated with the 15 new training slugs + 5 new enrichment slugs (vizag, kochi, jubail, yanbu, dammam) so they pass the curated-city check inside `DynamicTrainingPage` and avoid `noindex`.

All 15 new training cities + 5 new enrichment slugs are already members of `CURATED_CITY_SLUGS` from prior ERP / consulting expansions, so they will receive `index, follow` at deploy.

---

## TypeScript check

```
npx tsc --noEmit -p tsconfig.app.json
```

**Day 2 files (15 wrappers + 5 verticals + training-cities.ts + DynamicTrainingPage.tsx + App.tsx + curated-cities.ts): 0 new errors.**

The one remaining App.tsx error (`Cannot find module './pages/consulting/ndt-technical-procedure-development'`) is a pre-existing Day 0 import issue, unrelated to Day 2. All other repository errors (sitemap generator, tool-page BreadcrumbItem props, erp-modules faqs tuple typing, ultimate-guide DollarSign import) are pre-existing and unrelated.

The pre-existing Day 1 duplicate-key issue (calgary + doha in `DynamicTrainingPage.tsx`) was also fixed as a clean-up bonus during Day 2.

---

## Expected SEO impact (4-6 week horizon)

| Lever | Day 1 (prior sprint) | Day 2 (this sprint) |
|------:|:-----|:----|
| New indexed training city pages | +15 | +15 |
| New corporate-training vertical landing pages | 0 | +5 |
| City contexts enriched for index quality | +10 | +10 |
| Total Training-segment URLs added | ~25 | ~30 |

Day 2 expands the Training footprint into:
1. **Saudi Aramco upstream hubs** (Ras Tanura / Khurais / Shaybah / Abqaiq / Khobar) — direct ranking targets for "NDT training Saudi Aramco contractors"
2. **UAE alt-ports** (Ruwais / Mussafah) beyond Dubai + Abu Dhabi
3. **Southeast Asia petrochem corridor** (Pengerang / Bintulu / Kerteh / Cilacap / Balikpapan / Manila / Bangkok)
4. **Five emerging-economy verticals** (hydrogen / ammonia / batteries / data centers / rail) targeting the next wave of capital-deployment buyer searches

These mature-energy upstream slugs in particular should pick up high-CTR specialist queries that the generic country pages (saudi-arabia / uae) cannot rank for.

---

## Next steps (Day 3 candidates)

- Pre-render the 15 new training city pages + 5 vertical pages (add to `scripts/prerender.mjs` trainingExpansionCities + corporateVerticals lists)
- Submit the 20 new URLs to GSC via `scripts/gsc-submit-priority.mjs` Tier-1
- Build `RelatedCorporateVerticals` sibling-link cluster across the 15 verticals (was 10, now 15) for tighter internal-link equity flow
- Consider 10-12 more training cities (suggested: Duqm, Salalah, Ras Laffan, Mesaieed, Miri, Kemaman, Karratha-expansion, Bontang, Port Hedland, Sohar-expansion, Map Ta Phut, Visakhapatnam-aliasfix)
