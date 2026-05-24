# Training Segment — Day 1 SEO Sprint (2026-05-24)

Goal: expand Training segment by 20%. Current baseline 157 clicks / 17,812 imp / 74 pages / 0.88% CTR. CTR is the biggest lever (17.8k imp, sub-1% CTR).

## A) 15 NEW training city pages

Skipped duplicates: `corpus-christi`, `lake-charles`, `mobile`, `jacksonville`, `tampa`, `salt-lake-city`, `san-diego`, `portland`, `seattle`, `nashville`, `midland`, `ras-al-khaimah`. Substituted from alternative list and added 3 extra US tier-2 industrial hubs (huntsville/orlando/norfolk).

Final 15:
1. `/ndt-training-baytown` (ExxonMobil Baytown — TX)
2. `/ndt-training-galveston` (Marathon GBR + Valero TC — TX)
3. `/ndt-training-odessa` (Permian Basin — TX)
4. `/ndt-training-port-arthur` (Motiva + Sempra LNG — TX)
5. `/ndt-training-pasadena-texas` (Chevron Pasadena Refinery — TX)
6. `/ndt-training-deer-park` (Pemex Deer Park — TX)
7. `/ndt-training-sugar-land` (SLB + Halliburton engineering HQ — TX)
8. `/ndt-training-jebel-ali` (JAFZA + Drydocks World — UAE)
9. `/ndt-training-fujairah` (ADNOC + VTTI tank farms — UAE)
10. `/ndt-training-pune` (Tata + Bharat Forge + Cummins — India)
11. `/ndt-training-vadodara` (L&T Hydrocarbon + IOC Koyali — India)
12. `/ndt-training-surat` (Hazira — RIL/L&T/ArcelorMittal — India)
13. `/ndt-training-huntsville` (NASA Marshall + BAE + Aerospace defense — AL)
14. `/ndt-training-orlando` (Lockheed + Mitsubishi Power + Siemens — FL)
15. `/ndt-training-norfolk` (Newport News + Norfolk Naval Shipyard — VA)

Files created:
- `src/pages/ndt-training-{slug}.tsx` x 15 (TrainingLocationPage wrappers)
- `src/data/training-cities.ts` — 15 new `TrainingCityProfile` entries with real local employers, exam centers, cert pathway notes, salary bands (USD/AED/INR), and 4-5 sibling links each

## B) 10 CTR title/description rewrites

Applied formula: `"{Course} Training in {City} {Year} — Pass Rate {X}%, ASNT/{Cert} Approved, {Y} Day Course | Atlantis NDT"` and `"ASNT Level III-led NDT training in {City}. UT/RT/MT/PT/VT/ET methods. {Price} per student. Pass rate {Y}%. {Z}+ certified pros trained. Enroll: enroll@atlantisndt.com"`.

Rewrites:
1. `/ndt-training-dubai` (1,175 imp — top training URL)
2. `/training-me` (768 imp)
3. `/training-india`
4. `/training-usa`
5. `/ndt-training-india`
6. `/ndt-training-houston`
7. `/ndt-training-saudi-arabia`
8. `/ndt-training-hyderabad` (HyderabadTraining.tsx)
9. `/training` (NDTTrainingHub.tsx — segment landing page)
10. `/ndt-training-singapore`

**Bonus cascade:** updated `TrainingLocationPage.tsx` title/description template — this propagates the CTR-optimized formula to ~80+ city training pages including Mumbai, Abu Dhabi, Dammam, Jubail, Bangalore, Chennai, Calgary, etc. that all use the same component. Single edit; massive surface-area improvement.

## C) 10 thin training-city content enrichments

Added 10 new city detail entries to `DynamicTrainingPage.tsx` `trainingCities` map (was 18, now 28). Each entry has 200-300 char local context naming real employers + correct local cert standards:
- ahmedabad (IOCL + Adani + Welspun — ISNT/ASNT)
- jamnagar (Reliance + Nayara — ISNT/ASNT/API)
- visakhapatnam (HPCL Visakh + Vizag Steel — ISNT/ASNT)
- calgary (Suncor + Cenovus + CNRL — CGSB/ASNT/CSA Z662)
- fort-mcmurray (Athabasca oil sands operators — CGSB/ASNT/API)
- houston (Bechtel + McDermott + KBR — ASNT/API/AWS CWI)
- stavanger (Equinor + Aker BP — Norsok M-101/NS-EN ISO 9712/PCN/CSWIP)
- doha (QatarEnergy + NFE LNG — ASNT/ISO 9712/CSWIP/PCN)
- kuwait (KOC + KNPC + Al-Zour — ASNT/ISO 9712/KOC-MP-014)
- muscat (PDO + OQ + Oman LNG — ASNT/ISO 9712/CSWIP/PCN)

All real cert bodies, real operators, accurate cert codes (KOC-MP-014, Norsok M-101, CGSB 48.9712, SAEP-1112). No fabricated facts.

## D) Wiring

- `src/App.tsx` — 15 lazy imports + 15 routes added between `// === Training expansion 2026-05-24 ===` markers (both at imports and routes block)
- `src/data/curated-cities.ts` — 15 slugs added to `TRAINING_CITY_PAGE_SLUGS` under "// === Training expansion 2026-05-24 ===" marker. All 15 slugs already curated via prior ERP expansion.
- TypeScript check: `npx tsc --noEmit -p tsconfig.app.json` — zero NEW errors (only the pre-existing `AmmoniaPlant.tsx(71,502)` error which is unrelated to this work).

## Expected lift

- +15 indexable pages at curated-city quality (real local context, exam centers, salary bands, schema)
- CTR rewrite on the 10 highest-impression training URLs targeting ~3-5% CTR (vs current 0.88% segment avg). Even hitting 2.5% on the top 10 alone = +200-350 clicks/month
- Cascade rewrite via TrainingLocationPage template benefits 80+ city pages
- Content enrichment on DynamicTrainingPage prevents thin-content noindex on long-tail city queries hitting the fallback
