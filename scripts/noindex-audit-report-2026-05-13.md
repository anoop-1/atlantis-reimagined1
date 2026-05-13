# Noindex Audit Report — 2026-05-13

**Audit:** robots meta tag scan across `dist/**/index.html`
**Goal:** verify ERP-cluster pages are `index, follow` (commit 412ca97b fix verification)

## Summary

| Metric | Count |
|---|---|
| Total dist/index.html files | 3089 |
| ERP-cluster pages scanned | 679 |
| ERP-cluster pages with noindex (CRITICAL) | 0 |
| Other dist pages with noindex (info — expected for non-curated cities) | 196 |

## ERP-Cluster Noindex Offenders

No noindex tags found on ERP-cluster pages. Commit 412ca97b fix is intact.

## Other Dist Noindex Pages (out of scope but informational)

These pages are correctly noindexed because they are non-curated city template variants. No action required unless a specific city should be promoted to the curated allowlist.

| City slug | Page count | Example URL |
|---|---|---|
| boston | 10 | https://atlantisndt.com/industry/aerospace-ndt-boston |
| pittsburgh | 10 | https://atlantisndt.com/industry/aerospace-ndt-pittsburgh |
| san-francisco | 10 | https://atlantisndt.com/industry/construction-ndt-san-francisco |
| baton-rouge | 10 | https://atlantisndt.com/industry/marine-ndt-baton-rouge |
| atlanta | 10 | https://atlantisndt.com/industry/oil-gas-ndt-atlanta |
| dallas | 9 | https://atlantisndt.com/industry/aerospace-ndt-dallas |
| corpus-christi | 9 | https://atlantisndt.com/industry/marine-ndt-corpus-christi |
| denver | 8 | https://atlantisndt.com/industry/aerospace-ndt-denver |
| seattle | 8 | https://atlantisndt.com/industry/aerospace-ndt-seattle |
| philadelphia | 8 | https://atlantisndt.com/industry/marine-ndt-philadelphia |
| tampa | 7 | https://atlantisndt.com/industry/marine-ndt-tampa |
| new-orleans | 7 | https://atlantisndt.com/industry/petrochemical-ndt-new-orleans |
| los-angeles | 6 | https://atlantisndt.com/industry/aerospace-ndt-los-angeles |
| miami | 6 | https://atlantisndt.com/industry/aerospace-ndt-miami |
| detroit | 6 | https://atlantisndt.com/industry/marine-ndt-detroit |
| new-york | 6 | https://atlantisndt.com/industry/marine-ndt-new-york |
| chennai | 6 | https://atlantisndt.com/inspection/corrosion-inspection-services-chennai |
| houston | 5 | https://atlantisndt.com/industry/manufacturing-ndt-houston |
| dubai | 5 | https://atlantisndt.com/industry/marine-ndt-dubai |
| phoenix | 4 | https://atlantisndt.com/industry/aerospace-ndt-phoenix |
| nashville | 4 | https://atlantisndt.com/industry/marine-ndt-nashville |
| salt-lake-city | 3 | https://atlantisndt.com/industry/construction-ndt-salt-lake-city |
| chicago | 3 | https://atlantisndt.com/services/acoustic-emission-inspection-chicago |
| indianapolis | 2 | https://atlantisndt.com/industry/aerospace-ndt-indianapolis |
| portland | 2 | https://atlantisndt.com/industry/marine-ndt-portland |
| jacksonville | 2 | https://atlantisndt.com/industry/pipeline-ndt-jacksonville |
| st-louis | 2 | https://atlantisndt.com/industry/power-generation-ndt-st-louis |
| abu-dhabi | 2 | https://atlantisndt.com/services/acoustic-emission-inspection-abu-dhabi |
| milwaukee | 2 | https://atlantisndt.com/services/guided-wave-inspection-milwaukee |
| (no-slug) | 1 | https://atlantisndt.com/embed/ndt-reference |
| charlotte | 1 | https://atlantisndt.com/industry/marine-ndt-charlotte |
| kuwait | 1 | https://atlantisndt.com/industry/marine-ndt-kuwait |
| beaumont | 1 | https://atlantisndt.com/industry/oil-gas-ndt-beaumont |
| cincinnati | 1 | https://atlantisndt.com/industry/power-generation-ndt-cincinnati |
| minneapolis | 1 | https://atlantisndt.com/industry/power-generation-ndt-minneapolis |
| cleveland | 1 | https://atlantisndt.com/inspection/corrosion-inspection-services-cleveland |
| delhi | 1 | https://atlantisndt.com/inspection/pipeline-inspection-services-delhi |
| jamnagar | 1 | https://atlantisndt.com/services/acoustic-emission-inspection-jamnagar |
| nigeria | 1 | https://atlantisndt.com/services/acoustic-emission-inspection-nigeria |
| spain | 1 | https://atlantisndt.com/services/acoustic-emission-inspection-spain |
| colombia | 1 | https://atlantisndt.com/services/guided-wave-inspection-colombia |
| indonesia | 1 | https://atlantisndt.com/services/guided-wave-inspection-indonesia |
| sydney | 1 | https://atlantisndt.com/services/guided-wave-inspection-sydney |
| brazil | 1 | https://atlantisndt.com/services/paut-inspection-brazil |
| perth | 1 | https://atlantisndt.com/services/paut-inspection-perth |
| beijing | 1 | https://atlantisndt.com/services/tofd-inspection-beijing |
| edmonton | 1 | https://atlantisndt.com/services/tofd-inspection-edmonton |
| lima | 1 | https://atlantisndt.com/services/tofd-inspection-lima |
| mumbai | 1 | https://atlantisndt.com/services/tofd-inspection-mumbai |
| south-korea | 1 | https://atlantisndt.com/services/tofd-inspection-south-korea |
| taiwan | 1 | https://atlantisndt.com/services/tofd-inspection-taiwan |
| trinidad | 1 | https://atlantisndt.com/services/tofd-inspection-trinidad |
| baltimore | 1 | https://atlantisndt.com/training/api-653-training-baltimore |

## How to Fix

For any ERP-cluster URL that incorrectly has noindex:

1. Extract the city slug from the URL (e.g. `ndt-erp-baytown` → `baytown`).
2. Add the slug to `CURATED_CITY_SLUGS` in `src/data/curated-cities.ts`.
3. Add the same slug to `CURATED_CITY_SLUGS` in `scripts/gsc-multi-account-submit.mjs`.
4. Run `npm run build` (or `pnpm build`) to regenerate dist/.
5. Re-run this audit to confirm.

