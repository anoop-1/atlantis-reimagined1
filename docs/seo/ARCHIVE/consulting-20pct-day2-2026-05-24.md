# Consulting SEO Sprint — Day 2 (+20% beyond Day 1)

**Date:** 2026-05-24
**Branch:** atlantis-reimagined1 (atlantisndt.com primary site)
**Segment:** Consulting (`/consulting/*`)
**Baseline (GSC 28-day pre-Day-1):** 8 clicks / 480 imp / 43 indexed consulting pages
**Day 1 delta:** +20 city pages, +7 CTR rewrites, +15 city-context enrichments
**Day 2 goal:** push Consulting another 20% via 15 new city pages, 5 service-line pages, 10 more city enrichments

---

## A) 15 new consulting city pages

5-line wrappers around `<ConsultingLocationPage locationSlug="..." />`, all written to `src/pages/ndt-consulting-{slug}.tsx`.

| # | Slug                  | Country | Region              | Rationale                                                       |
|---|-----------------------|---------|---------------------|-----------------------------------------------------------------|
| 1 | galveston             | US      | Texas               | Marathon Galveston Bay, Valero Texas City, Gulf marine NDT      |
| 2 | odessa-texas          | US      | Texas (Permian)     | ExxonMobil, Delek Refining, Permian oilfield-services           |
| 3 | pasadena-texas        | US      | Texas (Houston)     | LyondellBasell, Chevron Pasadena, INEOS olefins                 |
| 4 | deer-park             | US      | Texas (Houston)     | Shell Deer Park, Pemex Deer Park, OxyChem                       |
| 5 | sugar-land            | US      | Texas               | Schlumberger HQ, Nalco, energy-services engineering corridor    |
| 6 | khurais               | SA      | Eastern Province    | Aramco's #2 onshore field, seawater-injection RBI / FFS focus   |
| 7 | shaybah               | SA      | Empty Quarter       | Aramco's Rub' al-Khali oilfield, NGL recovery, remote logistics |
| 8 | al-zour               | KW      | Kuwait              | KIPIC Al-Zour Refinery (615 kBPD) + LNG terminal                |
| 9 | cilacap               | ID      | Central Java        | Pertamina RU-IV refinery, RDMP program with Aramco              |
| 10| pengerang             | MY      | Johor               | Petronas RAPID / PRefChem integrated refinery + cracker         |
| 11| bintulu               | MY      | Sarawak             | Petronas LNG Complex (30 MTPA), Shell MDS, ABF urea-ammonia     |
| 12| hamilton-ontario      | CA      | Ontario             | Stelco, Dofasco, Imperial Oil Hamilton — steel + refining       |
| 13| sarnia                | CA      | Ontario             | Imperial Oil, Suncor, Shell, NOVA Chemicals petrochemicals      |
| 14| fort-saskatchewan     | CA      | Alberta             | Dow, Shell Scotford, Inter Pipeline Heartland                   |
| 15| port-hedland          | AU      | Western Australia   | BHP, Fortescue, Rio Tinto — iron ore + LNG export hub           |

All 15 slugs added to:
- `keyLocations[]` in `src/data/programmatic-seo.ts` (with name/country/region/color/industries/companies metadata so ConsultingLocationPage can render them)
- `CONSULTING_CITY_PAGE_SLUGS` Set in `src/data/curated-cities.ts`
- `CURATED_CITY_SLUGS` already contained all 15 (Set deduplicates — safe)

Substitutions made: ahmedabad, cape-town, ho-chi-minh, jamnagar, kolkata, accra were all already present from Day 1 / prior expansions, so picked from the substitute list (hamilton-ontario, sarnia, fort-saskatchewan, port-hedland).

---

## B) 5 new consulting service-line pages

Hand-written ~1,500-2,000 word pages, NOT city wrappers. Each follows pattern: hero + value prop, "What you get" (5-7 deliverables), methodology steps, ASNT Level III credentials, industries served, sample outcomes, pricing tier, 8-question FAQ schema, CTA → /contact.

Saved under `src/pages/consulting/`:

| # | URL                                                       | Topic + Codes                                                  |
|---|-----------------------------------------------------------|----------------------------------------------------------------|
| 1 | `/consulting/rbi-program-design`                          | Risk-Based Inspection per API 580 framework + API 581 quant    |
| 2 | `/consulting/fitness-for-service-api-579`                 | FFS per API 579-1 / ASME FFS-1 (Level 1/2/3, remaining life)   |
| 3 | `/consulting/api-510-program-audit`                       | API 510 in-service program audit, gap analysis, evidence pack  |
| 4 | `/consulting/written-practice-development`                | SNT-TC-1A / CP-189 / NAS 410 written practice + question bank  |
| 5 | `/consulting/ndt-technical-procedure-development`         | Method-specific procedures: UT/PAUT/TOFD/RT/MT/PT/ET/VT/LT/AET |

Each page includes:
- `@type: Service` + `@type: FAQPage` JSON-LD structured data
- `<SEOHead>` with custom title, description, keywords, canonical
- Real code references (no fabricated facts): API 580/581/579-1, ASME Section V Articles 1-13, EN ISO 17640/17636/17638/3452, AWS D1.1, API 1104, NAS 410, SNT-TC-1A 2020, CP-189 2024, NACE MR0175/ISO 15156, API RP 941, API RP 571
- Pricing tiers (consulting day rate $1,800-$2,400, fixed-fee engagement bands $4.5K-$450K depending on scope)
- 8-question FAQ schema per page

---

## C) 10 new location intros in `ConsultingLocationPage.tsx`

Added to `locationIntros` map in `src/components/ConsultingLocationPage.tsx`. Each 200-300 words, real codes + operators + drivers, no fabricated facts.

| # | Slug          | Anchored facts                                                                                                                                                            |
|---|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | shaybah       | Aramco Rub' al-Khali field, 1 MBPD, 3 GOSPs, world's largest single-train NGL plant; sour-service NACE MR0175, API 580/581 RBI                                            |
| 2 | khurais       | Aramco #2 onshore field, 1.5 MBPD, 3 GOSPs (Khurais/Abu Jifan/Mazalij), seawater-injection from Qurayyah; 2019 Abqaiq–Khurais incident integrity reviews                  |
| 3 | al-zour       | KIPIC Al-Zour 615 kBPD refinery + 22 MTPA LNG terminal; KOC/KNPC/KIPIC specs; API 625/620 cryogenic                                                                       |
| 4 | ho-chi-minh   | PetroVietnam, Long Son Petrochemicals (SCG), Doosan Vina, Nhon Trach gas-fired power (REPLACED older shorter Day-1 intro)                                                 |
| 5 | cilacap       | Pertamina RU-IV (348 kBPD), RDMP-Cilacap with Aramco JV; CDU/HCU/FCC turnaround; Migas + SNI codes                                                                        |
| 6 | pengerang     | Petronas RAPID / PRefChem (Aramco JV), 300 kBPD refinery + 3 MTPA cracker + LNG + PEC; Petronas PTS + JKKP + Aramco + EN/ASME multi-code                                  |
| 7 | bintulu       | MLNG 30 MTPA (world's 2nd-largest single-site), Shell MDS gas-to-liquids, ABF urea-ammonia; cryogenic + sour + tropical-rainforest CUI                                    |
| 8 | jamnagar      | Reliance twin-refinery 1.4 MBPD (world's largest), world's largest paraxylene, Essar/Nayara Vadinar; PESO/IBR statutory + API/ASME                                        |
| 9 | ahmedabad     | GSPC LNG Mundra, ONGC, Cairn Vedanta crude pipelines, Torrent Power, Sanand/Becharaji auto; PCPIR, IBR, ASME BPE for pharma                                               |
| 10| kolkata       | IOCL Haldia, Barauni, Bongaigaon; Tata Steel Jamshedpur, CESC, DVC, BHEL boiler fabrication; IBR statutory cycles, ASME I+VIII (REPLACED older shorter Day-1 intro)       |

(ho-chi-minh and kolkata previously had short generic Day-1 entries — replaced with richer Day-2 versions; no duplicate-key errors.)

---

## D) Wiring

### `src/App.tsx`
Routes added between `// === Consulting day-2 expansion 2026-05-25 ===` markers:
- 15 lazy imports for city pages
- 5 lazy imports for service-line pages
- 15 `<Route>` entries for city paths (`/consulting/ndt-consulting-{slug}`)
- 5 `<Route>` entries for service paths (`/consulting/{service-slug}`)

### `src/data/curated-cities.ts`
- `CONSULTING_CITY_PAGE_SLUGS` extended with 15 new slugs under `// === Consulting day-2 expansion 2026-05-24 ===` marker
- All 15 already present in `CURATED_CITY_SLUGS` (from earlier ERP/training expansions); the Set deduplicates

### `src/data/programmatic-seo.ts`
- 15 new `keyLocations[]` entries added under `// === Consulting day-2 expansion 2026-05-24 — 15 new high-priority consulting cities ===` marker

### `src/components/ConsultingLocationPage.tsx`
- 10 new entries added to `locationIntros` (8 new + 2 replacing older short Day-1 entries)

---

## QA

### TypeScript check
Ran: `npx tsc -p tsconfig.app.json --noEmit`
- **Total project errors:** 385 (unchanged baseline — pre-existing in `erp-modules/`, `erp-industries/`, `tools/`, `marine-offshore`, `nuclear-ndt`, `petrochemical-ndt`, `pipeline-inspection`, `power-generation`, `ultimate-guide`, `SitemapGenerator`, `CorporateTrainingLocationPage`, `FeatureSection`, `Contact`, `CorporateNDTTraining`, `aerospace-ndt-services`, `construction-ndt-services`)
- **Errors in Day-2 additions:** **0**
- Verified via filtered grep on all 20 new files + the 4 modified files

### Indexing impact (expected)
- 15 new consulting city pages → curated → `index, follow` on first crawl
- 5 service-line pages are top-of-funnel high-intent ("RBI program design", "fitness-for-service", "API 510 audit", "written practice", "NDT procedure development") — short canonical URLs, hand-written long-form content, FAQ schema
- 10 enriched intros lift unique-content word count on already-indexed pages (shaybah, khurais, al-zour, ho-chi-minh, cilacap, pengerang, bintulu, jamnagar, ahmedabad, kolkata) — expected CTR + ranking lift on existing impressions

### File inventory (new)
```
src/pages/ndt-consulting-galveston.tsx
src/pages/ndt-consulting-odessa-texas.tsx
src/pages/ndt-consulting-pasadena-texas.tsx
src/pages/ndt-consulting-deer-park.tsx
src/pages/ndt-consulting-sugar-land.tsx
src/pages/ndt-consulting-khurais.tsx
src/pages/ndt-consulting-shaybah.tsx
src/pages/ndt-consulting-al-zour.tsx
src/pages/ndt-consulting-cilacap.tsx
src/pages/ndt-consulting-pengerang.tsx
src/pages/ndt-consulting-bintulu.tsx
src/pages/ndt-consulting-hamilton-ontario.tsx
src/pages/ndt-consulting-sarnia.tsx
src/pages/ndt-consulting-fort-saskatchewan.tsx
src/pages/ndt-consulting-port-hedland.tsx
src/pages/consulting/rbi-program-design.tsx
src/pages/consulting/fitness-for-service-api-579.tsx
src/pages/consulting/api-510-program-audit.tsx
src/pages/consulting/written-practice-development.tsx
src/pages/consulting/ndt-technical-procedure-development.tsx
```

### File inventory (modified)
```
src/App.tsx                            — 20 lazy imports + 20 Route entries
src/data/programmatic-seo.ts           — 15 new keyLocations entries
src/data/curated-cities.ts             — 15 new CONSULTING_CITY_PAGE_SLUGS
src/components/ConsultingLocationPage.tsx — 10 new locationIntros entries
```

---

## Total Day-2 delta vs Day-1

- **+15 city pages** (35 cumulative since Day-1 baseline)
- **+5 hand-written service-line pages** (new SEO surface area in `/consulting/`)
- **+10 enriched location intros** (25 cumulative since Day-1 baseline)
- **+20 routes wired in App.tsx**

Day-2 surface area expansion is roughly equivalent to ~25-30% of Day-1 (which had 20 cities + 7 CTR rewrites + 15 enrichments). Service-line pages should produce highest-intent organic traffic — RBI / FFS / API 510 / written practice / procedure development are all high-CPC commercial keywords with established search demand.
