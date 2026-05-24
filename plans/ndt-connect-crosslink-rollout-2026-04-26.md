# NDT Connect Cross-link Rollout — 2026-04-26

## What was added

A new server-renderable React component `NdtConnectCrosslink` that displays a
contextual card on Atlantis city/method pages linking out to the matching
`ndt-connect.com/free-tools/[feature]/[citySlug-state]` page. The block lists
three free-tool features with the messaging:

- "Free equipment management software for NDT in [cityName]"
- "Free calibration tracking for NDT companies in [cityName]"
- "Free certificate management — manpower & company certs in [cityName]"

It also carries a small disclosure: "NDT Connect is part of the Atlantis NDT
family. Free tier — user ID only." External links use `rel="noopener"`.

Path: `src/components/NdtConnectCrosslink.tsx`

## Which city templates were modified

The component is now rendered just above the contact / enrollment CTA in:

- `src/components/ERPSoftwareCityPage.tsx`
- `src/components/DigitalTwinCityPage.tsx`
- `src/components/TrainingLevelIICityPage.tsx`

No layout, hero, SEO components, prerender pipeline, or city data files were
touched. No new dependencies were added.

## Slug mapping (Atlantis -> NDT Connect)

Atlantis cities use a state-less kebab slug (e.g. `houston`). NDT Connect's
free-tools URLs use `[city]-[state-abbr]` (e.g. `houston-tx`).

The component constructs the NDT Connect slug as:

```
ndtConnectSlug = state ? `${citySlug}-${state.toLowerCase()}` : citySlug
```

The Atlantis `keyLocations` / `expandedLocations` data sets store the full
state name (e.g. `"Texas"`) in the `region` field. The component's
`normaliseState()` helper accepts EITHER a 2-letter code (`"TX"`) or a full
state name (`"Texas"`) and emits the lowercase abbreviation (`"tx"`). All
US states are mapped via `FULL_STATE_TO_ABBR` inside the component.

Non-US locations (`country` not in `["us","usa","united states"]`) cause the
component to render `null` — NDT Connect's free-tools city pages are
US-keyed at this stage.

Verified examples:

| Atlantis (Vite route)              | NDT Connect target                                                |
|------------------------------------|-------------------------------------------------------------------|
| `/erp-houston`                     | `https://ndt-connect.com/free-tools/equipment-management/houston-tx` |
| `/digital-twins-los-angeles`       | `https://ndt-connect.com/free-tools/calibration-tracking/los-angeles-ca` |
| `/training-method-level-ii-denver` | `https://ndt-connect.com/free-tools/certificate-management/denver-co` |

## Per-page templates still needing a sweep

Files in `src/pages/*-testing-[city].tsx` (e.g. `ultrasonic-testing-houston.tsx`,
`radiographic-testing-dubai.tsx`, etc.) are individually-curated and do NOT
flow through a shared template. They must be swept manually to add
`<NdtConnectCrosslink ... />` near the bottom of the article. Skip non-US
pages (Dubai, Saudi Arabia, Singapore, Norway, UK, India cities, Calgary, etc.)
until ndt-connect city slugs include those.

US per-method city pages that DO need the sweep (today):
`*-houston`, `*-los-angeles`, `*-new-orleans`, `*-denver`, `*-chicago` —
across the six method prefixes.

A `TODO` comment lives at the top of `NdtConnectCrosslink.tsx` reminding the
next developer of this sweep.

## Build verification

```
cd atlantis-reimagined1
npm run build
# (vite build && node scripts/prerender.mjs)
```

Then confirm the cross-link is in the prerendered HTML (not just hydrated
client-side):

```
# Should match many files inside dist/
grep -r "ndt-connect.com/free-tools" dist/
```

Any city HTML built from one of the three modified templates should contain
three `https://ndt-connect.com/free-tools/...` anchors.

## Deployment / re-indexing

1. `npm run build:full` — rebuild + prerender + regenerate sitemaps.
2. Deploy `dist/` to the existing host (Vercel / static target).
3. Submit the affected URLs for re-indexing via the existing helper:
   `node scripts/gsc-multi-account-submit.mjs` — this hits the
   atlantismarketing@x-jigsaw-293515.iam.gserviceaccount.com service account
   which has GSC access for both atlantisndt.com and ndt-connect.com.
4. Spot-check 2–3 affected pages in GSC URL Inspection after ~24h to confirm
   the new outbound anchors are seen.

## Rollback

Single-file revert: delete `src/components/NdtConnectCrosslink.tsx` and remove
the `import` + `<NdtConnectCrosslink ... />` block from each of the three
templates listed above. No data, route, or pipeline changes to undo.
