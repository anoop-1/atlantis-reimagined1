# Verification — erp-cities.json (60 Tier-1 cities)

Final state after the verification pass on 2026-04-24. Read this before executing the DROP-IN-CHECKLIST in the next session with repo access.

## Hard-pass checks (all green)

| Check | Result |
|---|---|
| Total entries | 60 |
| Unique slugs | 60 / 60 |
| Required schema keys present on every entry | 17 / 17 |
| `title60` ≤ 60 chars | 60 / 60 |
| `meta155` ≤ 155 chars | 60 / 60 |
| 8 PAA questions per city | 60 / 60 |
| 6 `featureBullets` per city | 60 / 60 |
| Industries in kebab-case slug form (no prose) | 60 / 60 |
| Named facilities (3–5 real 2026-operating) | 60 / 60 |

## Industry taxonomy (post-normalization)

53 unique slugs after collapsing the 95 prose strings from Batches 4 + 5 into canonical kebab-case. Concentration is correct for Atlantis's ICP:

```
refining 26  defense 20  pipelines 19  port-ops 18  aerospace 16
aerospace-mro 14  petchem 14  power-generation 12  oil-gas 10
auto-manufacturing 9  steel 9  chemical 7  shipbuilding 6
aerospace-engines 5  nuclear-power 5  lng 4  semiconductor 4
(+ 37 long-tail slugs, mostly single-city distinctives like
 sugar-refining, submarines, missile-space, phosphate-mining, etc.)
```

## Issues auto-fixed during this pass

1. **95 prose industry strings → canonical kebab-case slugs** across 24 cities (all of Batch 4 + most of Batch 5). Mapping table embedded in the verification script; no data loss — every city kept 3–5 industries, alphabetically ordered within the 5-slot cap. Examples:
   - `"Aviation MRO"` → `aerospace-mro`
   - `"Automotive manufacturing"` → `auto-manufacturing`
   - `"Gas turbine manufacturing"` → `aerospace-engines`
   - `"Nuclear power generation"` → `nuclear-power`
   - `"Submarine construction"` → `submarines`
2. **Industries deduped + capped at 5** (was variable 3–7 across batches).

## Decisions applied this pass

### 1. Out-of-spec ES language entries stripped to EN-only

User spec: ES only for TX, CA, FL, NY, AZ, NM. Batch agents had extended ES into MD and LA on local-workforce reasoning. Stripped to match spec exactly — cleaner hreflang story, no 404-prone ES routes claimed on pages that won't ship ES:

- `baton-rouge` (LA): `["en","es"]` → `["en"]`
- `lake-charles` (LA): `["en","es"]` → `["en"]`
- `new-orleans` (LA): `["en","es"]` → `["en"]`
- `baltimore` (MD): `["en","es"]` → `["en"]`

**Final ES coverage: 20 cities** — all in AZ/CA/FL/NY/TX. (NM is in spec but has no cities in the 60-city Tier 1.) Easy to re-extend later once the TX-cluster ES pipeline is proven.

### 2. Body-content length gaps — shipping as-is

Every city has real named facilities, real codes, and specific integration pains. But word counts on three fields trail my original targets:

| Field | Target | Current avg | Cities below min |
|---|---|---|---|
| `localHook` | ~180w | 141w | 56 / 60 (<160w) |
| `integrationPainParagraph` | ~120w | 104w | 25 / 60 (<105w) |
| `remoteDeliveryPitch` | ~80w | 57w | 43 / 60 (<70w) |

Total visible body+PAA words across all 60 cities: **~44,800**. Still substantial content — each city averages ~750 body words before PAA.

**Decision: ship as-is.** Every city has real named facilities, real codes, and specific integration pains — the hard topical signals Google rewards. The 180/120/80 targets were my internal heuristic, not a skill or spec mandate. Blanket expansion risks filler; thin-but-honest + targeted post-launch thickening based on real GSC query data is higher leverage. Plan: monitor 14-day impression ramp, then expand bottom-decile underperformers with a precision agent pass anchored to their actual GSC query data.

## Files touched during verification pass

- `outputs/erp-cities.json` (481 KB → regenerated with industry normalization)

## What's ready to ship when repo is mounted next session

All 13 artifacts referenced in `DROP-IN-CHECKLIST.md`:
- `erp-cities.json` — 60 cities, clean schema, clean taxonomy
- `pages/NdtErpFor{Refineries,AerospaceMro,Shipyards,PowerGeneration,NdeServiceProviders}.tsx` — 5 industry vertical pages
- `data/language-map.ts` — LANGUAGES + TRANSLATED_PAGES
- `lib/hreflang.ts` — buildLocalizedUrl / buildAlternates / erpCityRoutes
- `components/LanguageDropdown.tsx`
- `lib/hreflang-USAGE.md` — integration guide
- `DROP-IN-CHECKLIST.md` — 10-stage execution sheet
- `CLAUDE-md-contact-form-patch.md` — mandatory per-app contact-form block

## Skill + memory updates landed this session

- `E:\software\Atlantis\atlantis-reimagined1\.claude\skills\seo-atlantis\SKILL.md` rewritten to be universal across `E:\software\` apps, with mandatory CONTACT-FORM PROTECTION section.
- 3 personal memory entries saved: `feedback_contact_form_protection.md`, `project_seo_skill_universal.md`, `reference_e_software_apps.md`.
- Known sandbox cruft: `write_test.txt` and `.WRITE_TEST_DELETEME` in the skill folder — remove manually next session (rm was blocked in sandbox).

## Next session first actions (in order)

1. Verify contact form + email delivery works end-to-end on atlantisndt.com.
2. Open `DROP-IN-CHECKLIST.md`, execute Stage 0 (branch) → Stage 10 (monitoring).
3. Apply `CLAUDE-md-contact-form-patch.md` as part of PR #1.
4. No open decisions — the LA/MD language-extension and body-content-thickness questions are resolved in the sections above.
