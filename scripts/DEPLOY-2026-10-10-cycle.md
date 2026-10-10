# Deploy runbook — 2026-10-10 cycle (CLAUDE.md §47 + §48)

Built and gated in a clean Linux clone of `main` (b6a6ff86): `npm run build` EXIT 0,
6,256 sitemap URLs / 0 failures, drift guard PASS, pricing gate PASS (src + --dist),
fabricated-claims gate PASS (src). Push from this session was refused (no GitHub write
access), so it ships as a bundle.

## 0. Order matters
The Phase C/D bundle (`phase-d-2026-10-09.bundle`, head d97cd8163) is also built on
b6a6ff86 and is not on GitHub yet. Push that first, then merge this one.

## 1. Apply (Windows checkout)
```powershell
cd E:\software\Atlantis\atlantis-reimagined1
git fetch origin
git fetch <path>\atlantis-seo-2026-10-10.bundle seo-cycle-2026-10-10:seo-cycle-2026-10-10
git checkout main && git pull
git merge --no-ff seo-cycle-2026-10-10      # after Phase D is merged
```
No bundle handy? `git am scripts\patches-2026-10-10\*.patch` (two patches: §47, §48).
Do NOT also apply the older `DEPLOY-2026-10-10.patch` — patch 0001 is the same change.

## 2. Verify before push
```powershell
node scripts\assert-no-atlantis-pricing.mjs
node scripts\assert-no-fabricated-claims.mjs
npm run build
```
Expect in the log: `CTR wave 13 ... 7/7 present`, `Cycle 2026-10-10: {"routes":2,"blocks":19}`,
`Route drift guard: PASS`. Spot-check `dist/`:
- `dist/tools/api-inspection-interval-calculator/index.html` and
  `dist/tools/snt-tc-1a-hours-planner/index.html` exist, self-canonical
- `dist/resources/ndt-software-buyer-checklist/index.html` exists
- `dist/consulting/ndt-consulting-level-iii/index.html` contains `data-next-steps`
- `dist/sitemap-index.xml` does not list `sitemap-methods.xml`

## 3. Ship and verify live
`git push origin main` → deploy-vps.yml. Check the live entry-chunk hash against
`dist/assets/` before calling it live (§40.1).

## 4. Discovery (sitemaps only — owner rule, no Indexing API)
Resubmit `https://atlantisndt.com/sitemap-index.xml` in Search Console. IndexNow is fine:
```
https://atlantisndt.com/tools/api-inspection-interval-calculator
https://atlantisndt.com/tools/snt-tc-1a-hours-planner
https://atlantisndt.com/resources/ndt-software-buyer-checklist
https://atlantisndt.com/ndt-training-online
https://atlantisndt.com/consulting/ndt-consulting-level-iii
https://atlantisndt.com/consulting/api-653-tank-inspector-services
https://atlantisndt.com/consulting/api-510-pressure-vessel-inspector-services
https://atlantisndt.com/consulting/api-570-piping-inspector-services
https://atlantisndt.com/inspection-services
https://atlantisndt.com/blog/api-653-tank-inspection-guide
https://atlantisndt.com/tools
https://atlantisndt.com/digital-twins
https://atlantisndt.com/erp
```
plus the §47 list in `scripts/indexing-queue-2026-10-10.txt`.

## 5. Owner decisions still open
Salary figure set (§47.1, §48.5) · API 653 in-house vs partner methods (§48.5) ·
/digital-twins "40 hours Level III included" and "Iron Mountain escrow" (§48.3) ·
secret rotation (§47.5).
