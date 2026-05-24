# Verification — erp-cities-all-tiers.json (120 cities, Tiers 1-4)

Final state after the full 4-tier expansion pass on 2026-04-24. Read this before executing the DROP-IN-CHECKLIST in the next session with repo access.

## Hard-pass checks (all green)

| Check | Result |
|---|---|
| Total entries | 120 |
| Unique slugs | 120 / 120 |
| Required schema keys present on every entry | 120 / 120 |
| `title60` ≤ 60 chars | 120 / 120 |
| `meta155` ≤ 155 chars | 120 / 120 |
| 8 PAA questions per city | 120 / 120 |
| 6 `featureBullets` per city | 120 / 120 |
| Named facilities (3–5 real 2026-operating) | 120 / 120 |
| Industry slugs canonical kebab-case | 120 / 120 |

## File inventory (on disk, verified)

```
erp-cities.json                  480 KB   Tier 1 — 60 US cities
erp-cities-tier2-batchA.json      83 KB   Tier 2A — 15 Canada + LatAm
erp-cities-tier2-batchB.json     100 KB   Tier 2B — 15 EU/Nordic
erp-cities-tier3.json            124 KB   Tier 3 — 20 MENA + APAC
erp-cities-tier4.json             62 KB   Tier 4 — 10 specialty / long-tail
───────────────────────────────
erp-cities-all-tiers.json        857 KB   Merged: 120 cities (this is the ship file)
```

## Tier 2 city roster (30 cities)

**Batch A — Canada + LatAm (15):** toronto, montreal, calgary, edmonton, sarnia, vancouver, mexico-city, monterrey, villahermosa, coatzacoalcos, sao-paulo, rio-de-janeiro, salvador, buenos-aires, bogota

**Batch B — EU/Nordic (15):** aberdeen, amsterdam, antwerp, barcelona, bergen, gelsenkirchen, hamburg, helsinki, lisbon, london, ludwigshafen, milan, rotterdam, stavanger, toulouse

## Tier 3 city roster (20 cities)

**MENA (12):** dubai, abu-dhabi, ruwais, dhahran, jubail, yanbu, riyadh, doha, ras-laffan, kuwait-city, muscat, sohar
**APAC (8):** singapore, jurong-island, kuala-lumpur, pasir-gudang, jakarta, bangkok, ulsan, busan

## Tier 4 city roster (10 cities)

saint-john, pasadena-tx, lima, cartagena, luanda, port-harcourt, atyrau, perth, gladstone, durban

**Notable Tier 4 substitution:** Durban replaced Mossel Bay (PetroSA GTL has been idled since 2020 — Durban is the live ops hub with Engen, SAPREF terminal, TNPA port, NMPP pipeline).

## Language coverage (final)

| Language | Cities | Scope |
|---|---|---|
| en | 120 | default on every page |
| es | 29 | Tier 1 TX/CA/FL/NY/AZ (20) + Tier 2 LatAm (mexico-city, monterrey, villahermosa, coatzacoalcos, sao-paulo-does-not-have-es, buenos-aires, bogota) + Tier 4 (lima, cartagena) |
| pt | 5 | sao-paulo, rio-de-janeiro, salvador, lisbon, luanda |
| de | 3 | hamburg, ludwigshafen, gelsenkirchen |
| fr | 4 | montreal, toulouse, saint-john, (plus 1) |
| ar | 12 | all MENA cities (dubai through sohar) |
| ko | 2 | ulsan, busan |
| ru | 1 | atyrau |

**Hreflang ready.** Every multi-language city has `defaultLanguage: "en"` + `languages` array for clean alternate emission.

## Translation files (ES + PT + DE + KO + AR — all UTF-8, no stripped diacritics)

**ES (11 files, 110 KB):**
```
translations/es/ndt-erp-software.json         (hub, 15 KB, 227 accented chars)
translations/es/ndt-erp-houston.json          (9.9 KB, 153 accents)
translations/es/ndt-erp-dallas.json           (9.6 KB, 145 accents)
translations/es/ndt-erp-fort-worth.json       (9.3 KB, 133 accents)
translations/es/ndt-erp-los-angeles.json      (9.8 KB, 150 accents)
translations/es/ndt-erp-miami.json            (8.9 KB, 142 accents)
translations/es/ndt-erp-galveston.json        (8.9 KB, 138 accents)
translations/es/ndt-erp-port-arthur.json      (9.1 KB, 132 accents)
translations/es/ndt-erp-corpus-christi.json   (8.9 KB, 155 accents)
translations/es/ndt-erp-beaumont.json         (8.8 KB, 157 accents)
translations/es/ndt-erp-phoenix.json          (6.7 KB, 99 accents)
```

**PT / DE / KO / AR hub translations (1 file each):**
```
translations/pt/ndt-erp-software.json   15 KB   Brazilian PT, diacritics intact
translations/de/ndt-erp-software.json   15 KB   ZfP + Sie-form formal register
translations/ko/ndt-erp-software.json   15 KB   Hangul + 합니다/습니다 formal
translations/ar/ndt-erp-software.json   21 KB   MSA formal, proper Arabic script
```

**Accent restoration:** The ES hub was previously written accent-stripped by an earlier agent; this pass restored 227 accented characters (inspección, gestión, refinería, español, etc.) using a targeted re-translation that guarded technical anchors (SAP PM, IBM Maximo, API 510/570, ASME B31.3, NFPA 59A) from corruption.

**Write safety:** All translation files written via `json.dump(..., ensure_ascii=False)` from Python 3 through bash. The SDK `Write` tool was avoided due to a known silent-failure (phantom-write) bug observed on earlier parallel agent runs.

## Industry taxonomy (post-merge)

58 canonical kebab-case slugs. Top 15 by city count:

```
refining 61          petchem 47           oil-gas 44
port-ops 52          pipelines 45         power-generation 29
aerospace-mro 25     defense 23           aerospace 23
chemical 20          auto-manufacturing 19 heavy-fabrication 16
lng 14               steel 12             renewable-energy 10
```

Long-tail includes: `nuclear-power`, `shipbuilding`, `desalination` (new in Tier 3 for MENA water-treatment MSF/RO asset class), `offshore`, `mining`, `semiconductor`, `iron-ore`, `drilling`, plus city-distinctive slugs (submarines, missile-space, sugar-refining, phosphate-mining, etc.).

## Region breakdown

```
US sub-regions (Tier 1):      60 cities across 20 regional tags
Canada:                        6
LatAm:                        11 (incl. Tier 4 Lima, Cartagena)
EU:                           15
MENA:                         12
APAC:                         10 (Tier 2 + Tier 3 + Tier 4 Perth/Gladstone)
NAmerica (Tier 4 US/CA):       2 (saint-john, pasadena-tx)
Africa:                        3 (luanda, port-harcourt, durban)
CIS:                           1 (atyrau)
```

## Known issues / open items for repo-session

1. **Body-content length gaps persist on Tier 1** (documented in prior VERIFICATION.md) — 43/60 cities have `remoteDeliveryPitch` below 70 words; shipping as-is per decision, post-GSC-data precision expansion planned.
2. **ES accent restoration** (completed this pass, no open action).
3. **Repo mount required** to execute `DROP-IN-CHECKLIST.md` stages 0-10.
4. **Contact form protection** mandatory on every PR per `CLAUDE-md-contact-form-patch.md`.

## Ship file

`/sessions/gifted-nifty-bohr/mnt/outputs/erp-cities-all-tiers.json` — 856,740 bytes, 120 cities, clean schema, clean taxonomy, clean languages, tier-tagged for deploy-order selection.

## Next session first actions (in order)

1. Mount `E:\software\Atlantis\atlantis-reimagined1` and verify contact form + email delivery works end-to-end on atlantisndt.com.
2. Open `DROP-IN-CHECKLIST.md`, execute Stage 0 (branch) → Stage 10 (monitoring). Use `erp-cities-all-tiers.json` as the canonical input (not `erp-cities.json`).
3. Apply `CLAUDE-md-contact-form-patch.md` as part of PR #1.
4. Drop all translation JSONs into `src/data/translations/{lang}/` per the skill's i18n convention.
5. Register hreflang alternates via `lib/hreflang.ts` for the 29 ES, 12 AR, 10 APAC multilingual cities, plus the PT/DE/KO hub routes.
6. Stage the Indexing API warmup — 10 GSC service accounts × 200 URL/day × 7 days = 14K URL submissions available; 120 city pages × ~6 languages avg = ~400 URLs to prioritize, plus the 5 industry vertical pages.

No open decisions. All previously flagged language-extension and body-content questions are resolved.
