# 2026-06-13 Pricing Strip Log

Owner directive 2026-06-13: never publish Atlantis prices anywhere — public site, marketing docs, comparison data, blogs.json. New positioning: "Affordable. Accessible. Fully Customizable."

## Files touched (this agent's scope)

| File | Edits |
|------|------:|
| docs/marketing/youtube-shorts-scripts-2026-05-23.md | 48 |
| docs/marketing/directory-listings-2026-05-23.md | 33 |
| docs/marketing/cold-email-templates-2026-05-23.md | 14 |
| docs/marketing/linkedin-posts-bank-2026-05-23.md | 12 |
| docs/marketing/30day-marketing-execution-2026-05-23.md | 0 (already clean) |
| CLAUDE.md (repo, atlantis-reimagined1) | 2 |
| e:\software\CLAUDE.md (global user, §My Businesses) | 1 (3 product lines) |
| src/data/dt-city-data.mjs | 1 (replace_all, 21 occurrences) |
| src/data/corporate-training-seo.ts | 3 |
| src/data/blogs.json | 2 (replace_all, 8 occurrences across 4 footer paragraphs) |
| src/data/comparison-pages.json | 0 (no Atlantis pricing — only industry equipment/labor/training cost ranges; KEEP per directive) |
| src/data/training-cities.ts | 0 (only local-currency salary bands; KEEP per directive) |
| src/data/training-seo.ts | 0 (no matches) |
| src/data/city-profiles.ts | 0 (no matches) |

**Total files modified: 10**
**Total edit operations: 116** (counting replace_all expansions: 48+33+14+12+2+1+21+3+8 = 142 substring replacements)

## Patterns stripped

- `$18,000/yr`, `$18,000`, `$18K/yr`, `$18K`, `$18,000 per year`, `$18,000 flat`, `$18,000/year`, `$18,000 / YEAR`, `$18,000/YEAR FLAT`
- `$200,000/year`, `$200,000/yr`, `$200K/yr`, `$200K` (when Atlantis Digital Twin)
- `$50,000/year`, `$50K/yr` (when Atlantis Reporting Software)
- `INR 15 lakh per year`
- "billed annually in USD"
- `Pricing: $200,000 per year` / `Pricing: $50,000 per year` / `Pricing: $18,000 per year` (global CLAUDE.md product list)
- `USD 200,000/year for up to 500 assets` (dt-city-data.mjs DT FAQ template, 21 city entries)
- `priceRangeUSD: '$12,500 – $18,000 per 20-seat batch'` (corporate training prices)

## Patterns preserved (per KEEP directive)

- `$250K`, `$180K`/`$180,000` — competitor SAP/Oracle/SAP B1 pricing references (used for contrast)
- `$150,000+` — SAP/Oracle competitor cost
- `$80K-150K/year` Maximo/SAP — competitor cost
- `$200K/year` Bentley AssetWise — competitor cost
- `$80K` savings/downtime — customer outcome
- `$36K/yr bookkeeper`, `$50K consulting`, `$40K passive`, `$20K saved`, `$1.2M closed`, `$1.2M-$8M ROI` — customer outcomes
- `$90K ARR added` — internal target (30day-execution doc)
- All NDT industry salary bands (AED/SAR/QAR/INR/EUR/NGN/BRL/MYR/USD monthly + annual) in training-cities.ts
- All NDT equipment/training/exam cost ranges in blogs.json + comparison-pages.json (e.g. `$5,000-$25,000 conventional UT`, `$12,000-$18,000 training`, `$18,000-$32,500 labor hours`, `$45,000-$65,000 salary`)
- Industry-standard ASNT/API exam fees

## Sample before/after

### CLAUDE.md (repo) §1 product table

**Before:**
```
| **ERP** | ... | "Affordable NDT ERP — $18,000/yr, all 30+ Odoo apps included, fully customizable" |
| **Digital Twins** | ... | $200K/yr enterprise SaaS digital twin platform |
```

**After:**
```
| **ERP** | ... | "Affordable NDT ERP — accessible, fully customizable, all 30+ Odoo apps included" |
| **Digital Twins** | ... | Enterprise SaaS digital twin platform — accessible, customizable |
```

### CLAUDE.md (repo) §7 CTR title formulas

**Before:**
```
Title:  Affordable NDT ERP in {City} — $18,000/yr All Odoo Apps Included | Atlantis NDT
Desc:   Atlantis NDT ERP for inspection companies in {City}, {Country}. $18,000/yr flat — 30+ Odoo apps included...
```

**After:**
```
Title:  Affordable NDT ERP in {City} — All 30+ Odoo Apps Included, Fully Customizable | Atlantis NDT
Desc:   Atlantis NDT ERP for inspection companies in {City}, {Country}. Affordable, accessible, fully customizable — 30+ Odoo apps included...
```

### dt-city-data.mjs (21 city FAQs)

**Before:**
```
"Atlantis Digital Twin starts at USD 200,000/year for up to 500 assets, with ASNT Level III consulting and unlimited NDT data ingest included."
```

**After:**
```
"Atlantis Digital Twin is an affordable, accessible, fully customizable enterprise SaaS platform sized for up to 500 assets, with ASNT Level III consulting and unlimited NDT data ingest included."
```

### Global e:\software\CLAUDE.md §My Businesses

**Before:**
```
- **Digital Twins Platform** ... Pricing: $200,000 per year.
- **NDT Reporting Software** ... Pricing: $50,000 per year.
- **Odoo ERP for NDT Companies** ... Pricing: $18,000 per year.
```

**After:**
```
- **Digital Twins Platform** ... Affordable, accessible, fully customizable enterprise SaaS — quote on request.
- **NDT Reporting Software** ... Affordable, accessible, fully customizable — quote on request.
- **Odoo ERP for NDT Companies** ... Affordable, accessible, fully customizable — quote on request.
```

## Verification

Final grep across all in-scope files for `\$18[K0-9]|\$200K/yr|\$200,000 per year|\$50,000 per year|18,000 per year|200,000 per year|50,000 per year|SAR 67|AED 66|INR 15 lakh|billed annually`:

- docs/marketing/* — 2 remaining matches (lines 87, 112 of youtube-shorts-scripts) = SAP B1 competitor pricing `$180,000/yr` and `$180K`; KEEP per directive
- CLAUDE.md (both repo + global) — clean
- src/data/* — remaining matches in blogs.json + comparison-pages.json verified as industry equipment/labor/training/salary cost ranges (KEEP); training-cities.ts retains local-currency salary bands (KEEP); dt-city-data.mjs clean of Atlantis pricing; corporate-training-seo.ts clean; training-seo.ts, city-profiles.ts clean

blogs.json JSON validity confirmed via `node -e "JSON.parse(...)"`.

## Notes

- e:\software\CLAUDE.md is loaded as project instructions on every session — change propagates everywhere.
- No .backup files were modified.
- Personal memory files in C:\Users\anuan\.claude\projects\... were not inspected (no Atlantis pricing per scope rules).
