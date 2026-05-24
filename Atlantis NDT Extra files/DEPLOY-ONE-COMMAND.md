# Deploy from terminal — single command sequence

Everything you need to fix the 404s + SPA fallbacks and ship 187 live URLs.

## Step 1 — Drop in files (PowerShell, ~30 sec)

```powershell
$ATLANTIS = "E:\software\Atlantis\atlantis-reimagined1"
$NEWPR    = "C:\Users\anuan\Downloads\Canada\New PR"

# Data
copy "$NEWPR\erp-cities-all-tiers.json"        "$ATLANTIS\src\data\"

# Translation JSONs
robocopy "$NEWPR\translations" "$ATLANTIS\src\data\translations" /E

# Page components (replace existing if present)
copy "$NEWPR\pages\ERPSoftwareCityPage.tsx"             "$ATLANTIS\src\pages\"
copy "$NEWPR\pages\ERPSoftwareHubPage.tsx"              "$ATLANTIS\src\pages\"
copy "$NEWPR\pages\NdtErpForRefineries.tsx"             "$ATLANTIS\src\pages\"
copy "$NEWPR\pages\NdtErpForAerospaceMro.tsx"           "$ATLANTIS\src\pages\"
copy "$NEWPR\pages\NdtErpForShipyards.tsx"              "$ATLANTIS\src\pages\"
copy "$NEWPR\pages\NdtErpForPowerGeneration.tsx"        "$ATLANTIS\src\pages\"
copy "$NEWPR\pages\NdtErpForNdeServiceProviders.tsx"    "$ATLANTIS\src\pages\"

# Library + components
copy "$NEWPR\lib\hreflang.ts"          "$ATLANTIS\src\lib\"
copy "$NEWPR\components\LanguageDropdown.tsx" "$ATLANTIS\src\components\"
copy "$NEWPR\data\language-map.ts"     "$ATLANTIS\src\data\"

# Build pipeline
copy "$NEWPR\prerender.mjs"            "$ATLANTIS\scripts\"
copy "$NEWPR\build-sitemap.mjs"        "$ATLANTIS\scripts\"
copy "$NEWPR\indexing-url-list.json"   "$ATLANTIS\scripts\"
copy "$NEWPR\gsc-submit-multi-account.mjs" "$ATLANTIS\scripts\"
copy "$NEWPR\urls.txt"                 "$ATLANTIS\"
copy "$NEWPR\urls-flat.txt"            "$ATLANTIS\"

# Vercel config
copy "$NEWPR\vercel.json.patch"        "$ATLANTIS\vercel.json"
```

## Step 2 — Wire routes into App.tsx (manual, ~2 min)

Open `E:\software\Atlantis\atlantis-reimagined1\src\App.tsx` and add the routes from `outputs\app-routes-patch.tsx`. Critical: include the `<Route path="*" element={<NotFound />} />` catch-all at the END so non-matching URLs return a real 404 page (not the homepage shell).

## Step 3 — Build + verify locally (terminal, ~2 min)

```bash
cd E:\software\Atlantis\atlantis-reimagined1

# Install puppeteer if not already (prerender uses it)
npm i -D puppeteer

# Full build pipeline
npm run build
node scripts/prerender.mjs    # Renders all 187 URLs to dist/*.html
node scripts/build-sitemap.mjs # Emits public/sitemap.xml with hreflang

# Local sanity check — should return 200 + unique titles
npx vite preview --port 4173 &
sleep 3
curl -s http://localhost:4173/ndt-erp-houston      | grep -oE "<title>[^<]+"
curl -s http://localhost:4173/es/ndt-erp-houston   | grep -oE "<title>[^<]+"
curl -s http://localhost:4173/ar/ndt-erp-dubai     | grep -oE "<title>[^<]+"
curl -s http://localhost:4173/ndt-erp-totally-fake | grep -oE "<title>[^<]+"  # should be 404 page
kill %1
```

## Step 4 — Contact-form regression check (mandatory, ~30 sec)

```bash
# Required by CLAUDE-md-contact-form-patch.md before any merge
npm run test:contact-form   # if you have one
# OR manual: visit /contact, submit a test message, confirm email arrives
```

## Step 5 — Push + deploy (terminal, ~3 min)

```bash
cd E:\software\Atlantis\atlantis-reimagined1
git checkout -b feat/erp-expansion-tiers-1-4-2026-04-24
git add -A
git commit -m "feat(erp): tiers 1-4 city expansion + hreflang alternates + prerender

- 120 city pages (Tier 1 US, Tier 2 EU/Canada/LatAm, Tier 3 MENA/APAC, Tier 4 specialty)
- Dynamic ERPSoftwareCityPage component renders all cities + lang alternates
- 5 industry vertical pages
- ES translations for hub + 10 Tier-1 cities (with proper diacritics restored)
- PT/DE/KO/AR hub translations
- New prerender + sitemap pipeline (187 URLs, hreflang)
- Multi-account GSC indexing pipeline (10 SAs, 2K URL/day capacity)
- Catch-all 404 added — eliminates SPA fallback on invalid URLs
"
git push -u origin feat/erp-expansion-tiers-1-4-2026-04-24
```

Vercel auto-deploys the preview branch. Verify the preview URL shows live pages with unique titles before merging to main.

```bash
# Merge after preview is green
gh pr create --fill --base main
gh pr merge --squash --auto
```

## Step 6 — Post-deploy verification (terminal, ~1 min)

```bash
# Should return 200 for all 187 URLs
while read u; do
  printf "%-70s " "$u"
  curl -s -o /dev/null -w "%{http_code}\n" "$u"
done < urls-flat.txt | grep -v " 200$"   # only print non-200s
```

If any non-200 results appear, check the prerender log for that route. Re-render and re-deploy before moving to Step 7.

## Step 7 — Submit to GSC Indexing API (terminal, ~1 min for 187 URLs)

```bash
cd E:\software\Atlantis\atlantis-reimagined1

# Dry-run — no quota spent. Pre-flight gate prints which URLs pass/fail.
node scripts/gsc-submit-multi-account.mjs --dry-run

# Live — rotates 10 SAs at 200/day each (2K cap)
node scripts/gsc-submit-multi-account.mjs

# Optional: tier by tier instead of all-at-once
node scripts/gsc-submit-multi-account.mjs --tier=S
node scripts/gsc-submit-multi-account.mjs --tier=B
node scripts/gsc-submit-multi-account.mjs --tier=C
```

Ledger lands at `.gsc-submission-ledger.jsonl`. State persists at `.gsc-quota-state.json`.

## Step 8 — Monitor (GSC, day 3-7)

- Day 3: search.google.com/search-console → Coverage → most submitted URLs in queue
- Day 5: ≥80% should flip to indexed
- Day 7: identify bottom-decile via Performance report → expand body content for those cities

---

## What this fixes

- **404s** — none of the 47 new EN cities (atyrau, gladstone, durban, sao-paulo, etc.) existed; now all do.
- **SPA fallbacks** — 61 language alternates were returning the homepage shell; now they prerender unique content with proper `<html lang>` and `dir="rtl"` for Arabic.
- **Thin existing pages** — 73 already-live cities had no schema, no hreflang, no named facilities; now they ship the full SoftwareApplication+LocalBusiness+FAQPage+BreadcrumbList combo with named operators and 8 PAA each.
- **Catch-all 404** — `/ndt-erp-totally-fake` was returning the homepage with 200 status (looks like soft 404 to Google); now returns the real 404 page.

## Files in `C:\Users\anuan\Downloads\Canada\New PR\`

```
DATA
  erp-cities-all-tiers.json          120 cities, ship file
  translations/{es,pt,de,ko,ar}/...  15 translation files

CODE
  pages/ERPSoftwareCityPage.tsx      dynamic — 120 cities × N langs
  pages/ERPSoftwareHubPage.tsx       hub + 5 lang variants
  pages/NdtErpFor*.tsx (5 files)     industry verticals
  components/LanguageDropdown.tsx
  lib/hreflang.ts
  data/language-map.ts
  app-routes-patch.tsx               drop into App.tsx

BUILD PIPELINE
  prerender.mjs                      drop at scripts/prerender.mjs
  build-sitemap.mjs                  drop at scripts/build-sitemap.mjs
  vercel.json.patch                  replace existing vercel.json

INDEXING
  gsc-submit-multi-account.mjs       drop at scripts/
  indexing-url-list.json             drop at scripts/
  urls.txt                           commented, tier-grouped
  urls-flat.txt                      one URL per line, for xargs/curl

DOCS
  DEPLOY-ONE-COMMAND.md              this file
  INDEXING-RUNBOOK.md                indexing safety + sequence
  VERIFICATION-ALL-TIERS.md          120-city schema audit
  DROP-IN-CHECKLIST.md               legacy 10-stage execution sheet
  CLAUDE-md-contact-form-patch.md    mandatory contact-form regression
```
