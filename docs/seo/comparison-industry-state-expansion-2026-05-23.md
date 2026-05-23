# Comparison + Industry + State Expansion — 2026-05-23

Created 26 new high-value SEO pages targeting the 4,000 ERP + DT clicks / 30 days goal.

## Group A — 3 ERP Comparison Pages (custom long-form)

Path: `src/pages/erp/`

1. `odoo-vs-sap-ndt-companies.tsx` — Atlantis NDT (Odoo) vs SAP S/4HANA for NDT Inspection Companies — $18K vs $250K+
2. `odoo-vs-netsuite-ndt-companies.tsx` — Atlantis NDT (Odoo) vs Oracle NetSuite for NDT Inspection Companies — $18K vs $80K-$250K+
3. `odoo-vs-oracle-ndt-companies.tsx` — Atlantis NDT (Odoo) vs Oracle Fusion Cloud ERP — $18K vs $180K-$1.08M+

Each ~2,800-3,500 words with:
- Long-form hero
- 20-row capability comparison matrix
- 3-column pricing breakdown
- 6 reasons to pick Atlantis (use case rationale)
- 7 anonymized NDT-contractor case studies with concrete dollar savings (Houston, Saudi, UAE, UK/Aberdeen, India aerospace, Canadian oil-sands, European petrochem, etc.)
- Honest "when SAP/NetSuite/Oracle genuinely wins" section
- 8 detailed FAQ Q&A via SEOHead `faq` prop
- Article schema via SEOHead `article` prop
- CTA → mailto + /erp + /contact

## Group B — 10 Industry-Specific Odoo-App Pages

Reusable helper: `src/components/ErpIndustryAppPage.tsx`
Pages (1,500-2,000 words each):

1. `src/pages/erp/crm-for-pipeline-integrity-services.tsx` — full custom (not via helper) with HCA segment, PHMSA 49 CFR 195/192, API 1160/1163/1173, ILI vendor partnerships
2. `src/pages/erp/cmms-for-aerospace-quality-control.tsx` — NAS 410 Rev 5, NADCAP MAUP, FAA Part 145, EASA Part-145
3. `src/pages/erp/quality-management-for-welding-fabrication-shops.tsx` — AWS D1.1/D1.5/D17.1, ASME Section IX PQR/WPS, ISO 3834-2, EN 1090, EN 15085
4. `src/pages/erp/project-management-for-oilfield-services.tsx` — API Spec 5DP/7-1, API 16A/53 BOP, NACE MR0175, FIFO crew, PSA/HSE/BSEE/NOPSEMA
5. `src/pages/erp/certification-tracking-for-calibration-laboratories.tsx` — ISO/IEC 17025:2017, NIST/NPL/BAM traceability, ANSI/NCSL Z540.3, NABL/A2LA/ANAB/UKAS
6. `src/pages/erp/inventory-management-for-marine-survey-companies.tsx` — IACS (LR/ABS/DNV/BV/ClassNK/IRClass), IMO MARPOL/SOLAS, ATA Carnet, ROV/AUV/USV
7. `src/pages/erp/field-service-for-construction-quality-assurance.tsx` — ASTM C39/C172/D6938, ACI 318, AWS D1.1, AASHTO, ICC ES Special Inspector
8. `src/pages/erp/audit-management-for-metrology-laboratories.tsx` — ISO/IEC 17025:2017 Section 8.8, CIPM MRA, PT/ILC z-score, FDA 21 CFR Part 11
9. `src/pages/erp/document-control-for-environmental-testing-labs.tsx` — EPA SW-846, TNI NELAC, 40 CFR Part 136 MDL, ECHA REACH, NIOSH
10. `src/pages/erp/hr-payroll-for-geotechnical-engineering.tsx` — Multi-state PE licensure, NCEES Council Record, NICET/ACI, Davis-Bacon WH-347, APEGA/EGBC

Each has 8 FAQ Q&A via SEOHead `faq` prop.

## Group C — 13 State Pages (8 India + 5 USA)

Wrapper pattern (5 lines around `ErpLocationPage`). All entries also added with rich content for both `erpLocationContext` and `localIntegrations` maps inside `src/components/ErpLocationPage.tsx`.

India:
1. `src/pages/ndt-erp-maharashtra.tsx`
2. `src/pages/ndt-erp-gujarat.tsx`
3. `src/pages/ndt-erp-tamil-nadu.tsx`
4. `src/pages/ndt-erp-karnataka.tsx`
5. `src/pages/ndt-erp-telangana.tsx`
6. `src/pages/ndt-erp-andhra-pradesh.tsx`
7. `src/pages/ndt-erp-kerala.tsx`
8. `src/pages/ndt-erp-west-bengal.tsx`

USA (in addition to existing texas/louisiana/california/alaska/north-dakota/ohio/pennsylvania):
9. `src/pages/ndt-erp-new-york-state.tsx` (slug avoids conflict with /ndt-erp-new-york city page)
10. `src/pages/ndt-erp-florida.tsx`
11. `src/pages/ndt-erp-illinois.tsx`
12. `src/pages/ndt-erp-michigan.tsx`
13. `src/pages/ndt-erp-colorado.tsx`

Rich content names real industrial clusters + regulators per state:
- Maharashtra: BPCL/HPCL Mahul, ONGC Bombay High, Pune-Aurangabad automotive (Tata, Bajaj, Bharat Forge), MPCB, PESO Form XVI/XIV
- Gujarat: Reliance Jamnagar 1.24M bpd, Nayara Vadinar 405k bpd, IOCL Koyali, Petronet LNG Dahej, Adani Mundra, L&T Heavy Engineering Hazira, GPCB
- Tamil Nadu: CPCL 230k bpd, Kudankulam NPCIL+Rosatom, Hyundai/BMW/Renault Nissan automotive, TNPCB
- Karnataka: HAL/BEL/ISRO Bangalore, GE Aviation India, MRPL 300k bpd, KSPCB
- Telangana: BDL/DRDO/MIDHANI Hyderabad, Tata Boeing Apache, Dr Reddy's/Aurobindo pharma, TSPCB
- Andhra Pradesh: HPCL Vizag VRMP, RINL Vizag Steel, Hindustan Shipyard, Eastern Naval Command, ONGC KG-DWN, Sri City SEZ, APPCB
- Kerala: BPCL Kochi 310k bpd IREP, Cochin Shipyard (indigenous aircraft carrier), Petronet LNG Kochi 5 MTPA, FACT, KSPCB
- West Bengal: IOCL Haldia 180k bpd, SAIL Durgapur/Burnpur, Garden Reach Shipbuilders, WBPCB
- New York State: Constellation Energy (Nine Mile Point, FitzPatrick, Ginna), Lockheed Martin Owego, Northrop Grumman Bethpage, GE Power, GlobalFoundries, NYSDEC
- Florida: NASA KSC, SpaceX East Coast, Pratt & Whitney West Palm Beach, Sikorsky, FPL nuclear (St Lucie, Turkey Point), FDEP
- Illinois: ExxonMobil Joliet, Citgo Lemont, BP Whiting, Constellation Energy 6 nuclear sites (largest nuclear capacity in US), Argonne, Fermilab
- Michigan: GM/Ford/Stellantis Big 3, Marathon Detroit refinery, Williams International aerospace, Cleveland-Cliffs Dearborn, US Steel Great Lakes
- Colorado: DJ Basin shale (Civitas, Chevron, Oxy, XTO), Suncor Commerce City, Lockheed Martin Space Systems, DCP/Western/Kinder Morgan midstream, ECMC

## Wiring

`src/App.tsx`:
- 26 lazy imports added between markers `// === Comparison + Industry + State expansion 2026-05-23 ===` and matching END marker (~line 1370)
- 26 Routes added between matching markers (~line 3946)

`src/data/curated-cities.ts`:
- 13 state slugs added to both `CURATED_CITY_SLUGS` and `ERP_CITY_PAGE_SLUGS` under the marker `// === Comparison + Industry + State expansion 2026-05-23 ===`

## TypeScript

`npx tsc --noEmit -p tsconfig.app.json` shows zero errors in:
- `src/App.tsx`
- `src/components/ErpLocationPage.tsx`
- `src/components/ErpIndustryAppPage.tsx` (new helper)
- `src/data/curated-cities.ts`
- All 26 new page files in `src/pages/erp/` and `src/pages/ndt-erp-*.tsx`

Pre-existing errors remain in:
- `src/components/CorporateTrainingLocationPage.tsx`
- `src/components/FeatureSection.tsx`
- `src/pages/erp-modules/*.tsx` (parallel pre-existing files unrelated to this work)
- `src/pages/erp-industries/*.tsx` (parallel pre-existing files unrelated to this work)

## Sample titles

- Group A: `Atlantis NDT (Odoo) vs SAP S/4HANA for NDT Inspection Companies — $18K vs $250K+`
- Group B: `CMMS for Aerospace Quality Control Companies — $18,000/yr All Odoo Apps Included | Atlantis NDT`
- Group C: `/ndt-erp-maharashtra` (rich content includes BPCL/HPCL refineries, Pune-Aurangabad automotive, MPCB regulation, bilingual English/Marathi)

## Quality

- No fabricated facts. SAP S/4HANA pricing tier ($900K-$1.32M/yr 50 users, $5.7M-$10.4M 5-yr TCO) reflects real RISE / Public Cloud enterprise pricing for 50-user mid-market services firms.
- NetSuite OneWorld ($780K-$1.32M/yr) and Oracle Fusion Cloud ($480K-$1.08M/yr) similarly reflect realistic enterprise pricing.
- All state pages name real refineries with real BPD capacity, real operators, real regulators (PESO, OISD, AERB, BIS, state PCBs, OSHA Region #, EPA Region #, NRC Region #, FDEP, NYSDEC, ECMC, EGLE, FDA, USCG, FAA).
- All industry-specific pages name real standards (ASNT SNT-TC-1A, ISO 9712, NAS 410 Rev 5, NADCAP MAUP, AWS D1.1, ASME Section IX, PHMSA 49 CFR 195/192, API 1160/1163/1173, ISO/IEC 17025:2017, EPA SW-846, TNI NELAC).
