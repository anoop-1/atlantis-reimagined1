# Drop-In Checklist — ERP Expansion (feat/erp-expansion-2026-04)

Everything in `/outputs/` was staged offline because the repo wasn't mounted in the session where it was produced. When you next open Cowork with `E:\software\Atlantis\atlantis-reimagined1` fully mounted, follow this sheet to land the work.

**Prerequisite — do these in order:**
1. Open Cowork with the Atlantis repo fully mounted (not just `plans/` + `.claude/`).
2. Re-read `E:\software\Atlantis\atlantis-reimagined1\.claude\skills\seo-atlantis\SKILL.md` — it was rewritten on 2026-04-24 to be universal across E:\software apps and to include mandatory CONTACT-FORM PROTECTION.
3. Verify the Atlantis contact form + destination email end-to-end BEFORE any SEO work lands (submit a test, confirm it arrives). If it's already broken, fix that first.
4. Update `CLAUDE.md` with the contact-form protection block (see patch in `outputs/CLAUDE-md-contact-form-patch.md`).

## Stage 0 — Branch

```bash
cd E:\software\Atlantis\atlantis-reimagined1
git fetch origin
git checkout main
git pull
git checkout -b feat/erp-expansion-2026-04
```

## Stage 1 — Drop in the data file and new components

Copy from `outputs/` to the repo:

| Source (outputs/) | Destination | Notes |
|---|---|---|
| `erp-cities.json` | `src/data/erp-cities.json` | 60 Tier-1 cities, alphabetically sorted, UTF-8 |
| `data/language-map.ts` | `src/data/language-map.ts` | `LANGUAGES` registry + `TRANSLATED_PAGES` gating set |
| `lib/hreflang.ts` | `src/lib/hreflang.ts` | `buildLocalizedUrl`, `buildAlternates`, `erpCityRoutes` |
| `components/LanguageDropdown.tsx` | `src/components/LanguageDropdown.tsx` | globe-icon dropdown, grays out untranslated langs |

```bash
# from repo root
cp /path/to/outputs/erp-cities.json                 src/data/erp-cities.json
cp /path/to/outputs/data/language-map.ts            src/data/language-map.ts
cp /path/to/outputs/lib/hreflang.ts                 src/lib/hreflang.ts
cp /path/to/outputs/components/LanguageDropdown.tsx src/components/LanguageDropdown.tsx
```

## Stage 2 — Drop in the 5 industry vertical pages

| Source (outputs/pages/) | Destination | Route |
|---|---|---|
| `NdtErpForRefineries.tsx` | `src/pages/NdtErpForRefineries.tsx` | `/ndt-erp-for-refineries` |
| `NdtErpForAerospaceMro.tsx` | `src/pages/NdtErpForAerospaceMro.tsx` | `/ndt-erp-for-aerospace-mro` |
| `NdtErpForShipyards.tsx` | `src/pages/NdtErpForShipyards.tsx` | `/ndt-erp-for-shipyards` |
| `NdtErpForPowerGeneration.tsx` | `src/pages/NdtErpForPowerGeneration.tsx` | `/ndt-erp-for-power-generation` |
| `NdtErpForNdeServiceProviders.tsx` | `src/pages/NdtErpForNdeServiceProviders.tsx` | `/ndt-erp-for-nde-service-providers` |

## Stage 3 — Wire routes in `src/App.tsx`

Add near the existing `// pillar clusters` block (import then Route):

```tsx
import NdtErpForRefineries from "@/pages/NdtErpForRefineries";
import NdtErpForAerospaceMro from "@/pages/NdtErpForAerospaceMro";
import NdtErpForShipyards from "@/pages/NdtErpForShipyards";
import NdtErpForPowerGeneration from "@/pages/NdtErpForPowerGeneration";
import NdtErpForNdeServiceProviders from "@/pages/NdtErpForNdeServiceProviders";

// inside <Routes>:
<Route path="/ndt-erp-for-refineries"             element={<NdtErpForRefineries />} />
<Route path="/ndt-erp-for-aerospace-mro"          element={<NdtErpForAerospaceMro />} />
<Route path="/ndt-erp-for-shipyards"              element={<NdtErpForShipyards />} />
<Route path="/ndt-erp-for-power-generation"       element={<NdtErpForPowerGeneration />} />
<Route path="/ndt-erp-for-nde-service-providers"  element={<NdtErpForNdeServiceProviders />} />
```

Also wire the 60 ERP city routes. Since these should read from `erp-cities.json`, add a data-driven route:

```tsx
import erpCities from "@/data/erp-cities.json";
import ERPSoftwareCityPage from "@/components/ERPSoftwareCityPage"; // existing template — may need minor updates

// inside <Routes>:
{erpCities.map(c => (
  <Route
    key={c.slug}
    path={`/ndt-erp-${c.slug}`}
    element={<ERPSoftwareCityPage cityData={c} />}
  />
))}
```

**If `ERPSoftwareCityPage.tsx` doesn't currently accept a `cityData` prop**, update it to take the prop shape defined in `erp-cities.json` (see schema in each batch file for field list). Keep it backward-compatible if possible.

## Stage 4 — Register routes in `scripts/prerender.mjs`

Open `scripts/prerender.mjs`. Locate the arrays (`corePages`, `softwarePages`, `extraPages`).

- Add the 5 industry verticals to `corePages` or `softwarePages` (whichever pillar-hub cluster satellites normally sit in):
  ```js
  "/ndt-erp-for-refineries",
  "/ndt-erp-for-aerospace-mro",
  "/ndt-erp-for-shipyards",
  "/ndt-erp-for-power-generation",
  "/ndt-erp-for-nde-service-providers",
  ```
- Generate the 60 ERP city routes programmatically:
  ```js
  import erpCities from "../src/data/erp-cities.json" assert { type: "json" };
  const erpCityRoutes = erpCities.map(c => `/ndt-erp-${c.slug}`);
  // then concat into the master page list
  ```
- When translations ship later, also register `/<lang>/ndt-erp-<slug>` routes. Use `erpCityRoutes()` from `src/lib/hreflang.ts` — it gates off `TRANSLATED_PAGES` so untranslated routes don't end up in the sitemap.

## Stage 5 — Wire LanguageDropdown into the city template

In `ERPSoftwareCityPage.tsx` (or wherever the ERP city template renders):

```tsx
import LanguageDropdown from "@/components/LanguageDropdown";
import { buildAlternates } from "@/lib/hreflang";

// inside the component, at the top-right of the page hero
const routeKey = `ndt-erp-${cityData.slug}`;
const slug = `ndt-erp-${cityData.slug}`;
const currentLang = useLangFromPath() ?? "en"; // implement if not already present
const alternates = buildAlternates("https://atlantisndt.com", routeKey, slug, cityData.languages);

// pass alternates to SEOHead:
<SEOHead ... alternates={alternates} />

// render dropdown in the hero:
<div className="absolute top-4 right-4">
  <LanguageDropdown
    routeKey={routeKey}
    slug={slug}
    supportedLangs={cityData.languages}
    currentLang={currentLang}
  />
</div>
```

**`SEOHead.tsx` may need an `alternates` prop** if it doesn't already accept one. Add in its Helmet emission:

```tsx
{alternates && Object.entries(alternates).map(([lang, href]) => (
  <link key={lang} rel="alternate" hrefLang={lang} href={href} />
))}
```

See `outputs/lib/hreflang-USAGE.md` for the detailed integration guide.

## Stage 6 — Update `CLAUDE.md`

Apply the contact-form protection block from `outputs/CLAUDE-md-contact-form-patch.md`. This is required — the universal skill now mandates every app's CLAUDE.md carry it.

## Stage 7 — Pre-ship checks

```bash
pnpm run typecheck            # must exit 0
pnpm run build                # must succeed
pnpm run prerender            # must write dist/ndt-erp-for-refineries/index.html etc.

# Verify one of the new vertical pages prerendered
grep -c "Customizable for" dist/ndt-erp-for-refineries/index.html   # should be >0

# Verify one city page prerendered
grep -c "Houston NDT ERP" dist/ndt-erp-houston/index.html           # should be >0

# Verify schema made it in
grep -c "SoftwareApplication" dist/ndt-erp-for-refineries/index.html # should be >0

# CONTACT FORM CHECK — mandatory
grep -c "form" dist/contact/index.html                              # should be >0
# Then smoke-test the live form after deploy — submit a test, confirm inbox.
```

## Stage 8 — Ship in 7 PRs (one per batch, not one big PR)

Per the locked decision:

| PR | Batch | Contents |
|---|---|---|
| #1 | Verticals | 5 industry vertical pages + LanguageDropdown + hreflang lib + CLAUDE.md contact-form patch |
| #2 | Tier-1 cities 1–20 | first 20 slugs from erp-cities.json + routes + prerender registration |
| #3 | Tier-1 cities 21–40 | next 20 |
| #4 | Tier-1 cities 41–60 | last 20 |
| #5 | Tier 2 (30 international) | out of scope for this drop, but the shape's ready |
| #6 | Tier 3 (20 MENA + Asia) | " |
| #7 | Tier 4 (10 specialty) | " |
| #8 | ERP translations | ES/PT/DE/KO/AR hub + priority city translations |

Between each merge: wait for Vercel preview, verify 5 pillar hubs + 3 random existing city pages return 200, verify contact form still works, then merge. Submit **only the new URLs** to the Indexing API — no re-crawl pressure on existing ranked pages.

## Stage 9 — Indexing API submission

After each PR merges and Vercel deploys:

```bash
# The vertical PR
node scripts/gsc-submit-priority.mjs \
  https://atlantisndt.com/ndt-erp-for-refineries \
  https://atlantisndt.com/ndt-erp-for-aerospace-mro \
  https://atlantisndt.com/ndt-erp-for-shipyards \
  https://atlantisndt.com/ndt-erp-for-power-generation \
  https://atlantisndt.com/ndt-erp-for-nde-service-providers

# Each city batch — pull slugs from the JSON
node -e "const c=require('./src/data/erp-cities.json'); console.log(c.slice(0,20).map(x=>'https://atlantisndt.com/ndt-erp-'+x.slug).join('\n'))" | xargs node scripts/gsc-submit-priority.mjs
```

## Stage 10 — Post-ship monitoring (per SKILL.md)

- Vercel deploy green for every PR.
- Contact form test-submission lands in destination inbox within 5 min of each deploy.
- 14-day re-crawl window starts when URLs are submitted to Indexing API.
- Weekly GSC pull on /ndt-erp-* paths to catch Soft 404s or noindex regressions early.
- If any existing pillar page loses >15% impressions w/w in the first 14 days post-merge, pause further batches and diagnose.

## Known gotchas

- **ERPSoftwareCityPage prop signature**: the drop-in assumes it accepts `cityData`. If the current implementation is slug-string-driven, refactor carefully and keep existing slugs working during the transition — don't delete old city copy until the new data-driven page is validated.
- **`id` fields in JSON**: none were added. If the template or template test expects a unique `id`, generate from `slug`.
- **Slug collisions**: all 60 slugs verified unique. But check against existing city pages — if `/ndt-erp-houston` already exists under a different template, the new data-driven route will conflict. React Router takes first match; re-order routes if needed.
- **Write-test cruft**: `E:\software\Atlantis\atlantis-reimagined1\.claude\skills\seo-atlantis\write_test.txt` was created during the offline session and cannot be removed from sandbox. Delete it manually on first session with write access.
