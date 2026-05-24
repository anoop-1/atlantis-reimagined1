# Manual App.tsx patch — fallback if DEPLOY-DIGITAL-TWIN-NOW.ps1 cannot auto-patch

If the PowerShell script reports "Could not find <Route path='*' /> or </Routes> tag in App.tsx", do this manually.

## 1. Open `E:\software\Atlantis\atlantis-reimagined1\src\App.tsx`

## 2. At the TOP of the file (after the existing imports, before the component), paste:

```tsx
// ─── Digital Twin pivot ─────────────────────────────────────────────────────
import DigitalTwinsPillar     from "@/pages-digital-twins/DigitalTwinsPillar";
import DigitalTwinsLidar      from "@/pages-digital-twins/DigitalTwinsLidar";
import DigitalTwinsIot        from "@/pages-digital-twins/DigitalTwinsIot";
import DigitalTwinsAi         from "@/pages-digital-twins/DigitalTwinsAi";
import DigitalTwinsNdtOverlay from "@/pages-digital-twins/DigitalTwinsNdtOverlay";
import DigitalTwinsOilGas     from "@/pages-digital-twins/DigitalTwinsOilGas";
import DigitalTwinsMaritime   from "@/pages-digital-twins/DigitalTwinsMaritime";
import DigitalTwinsDefense    from "@/pages-digital-twins/DigitalTwinsDefense";
import DigitalTwinsAerospace  from "@/pages-digital-twins/DigitalTwinsAerospace";

// ─── ERP hub + verticals (only if these page files exist in src/pages/) ────
import ERPSoftwareHubPage          from "@/pages/ERPSoftwareHubPage";
import NdtErpForRefineries         from "@/pages/NdtErpForRefineries";
import NdtErpForAerospaceMro       from "@/pages/NdtErpForAerospaceMro";
import NdtErpForShipyards          from "@/pages/NdtErpForShipyards";
import NdtErpForPowerGeneration    from "@/pages/NdtErpForPowerGeneration";
import NdtErpForNdeServiceProviders from "@/pages/NdtErpForNdeServiceProviders";
```

## 3. Inside `<Routes>`, BEFORE any existing `<Route path="*" />` (or before `</Routes>` if no catch-all yet), paste:

```tsx
        {/* ─── ERP hub + 5 industry verticals ─── */}
        <Route path="/ndt-erp-software" element={<ERPSoftwareHubPage />} />
        <Route path="/:lang/ndt-erp-software" element={<ERPSoftwareHubPage />} />
        <Route path="/ndt-erp-for-refineries" element={<NdtErpForRefineries />} />
        <Route path="/ndt-erp-for-aerospace-mro" element={<NdtErpForAerospaceMro />} />
        <Route path="/ndt-erp-for-shipyards" element={<NdtErpForShipyards />} />
        <Route path="/ndt-erp-for-power-generation" element={<NdtErpForPowerGeneration />} />
        <Route path="/ndt-erp-for-nde-service-providers" element={<NdtErpForNdeServiceProviders />} />

        {/* ─── Digital Twin pillar + 4 clusters + 4 vertical hubs ─── */}
        <Route path="/digital-twins" element={<DigitalTwinsPillar />} />
        <Route path="/:lang/digital-twins" element={<DigitalTwinsPillar />} />
        <Route path="/digital-twins/lidar-scan-to-twin" element={<DigitalTwinsLidar />} />
        <Route path="/digital-twins/iot-sensor-integration" element={<DigitalTwinsIot />} />
        <Route path="/digital-twins/ai-predictive-analytics" element={<DigitalTwinsAi />} />
        <Route path="/digital-twins/ndt-data-overlay" element={<DigitalTwinsNdtOverlay />} />
        <Route path="/digital-twins/oil-and-gas" element={<DigitalTwinsOilGas />} />
        <Route path="/digital-twins/maritime" element={<DigitalTwinsMaritime />} />
        <Route path="/digital-twins/defense" element={<DigitalTwinsDefense />} />
        <Route path="/digital-twins/aerospace" element={<DigitalTwinsAerospace />} />
```

## 4. If there is NO `<Route path="*" element={<NotFound />} />` already, add one as the LAST route inside `<Routes>`:

```tsx
        <Route path="*" element={<NotFound />} />
```

(You'll also need `import NotFound from "@/pages/NotFound";` at the top if not already there.)

## 5. Save. Resume the deploy script with `Step 6` onward, OR run manually:

```bash
cd E:\software\Atlantis\atlantis-reimagined1
npm run build
node scripts/prerender.mjs
node scripts/build-sitemap.mjs
git checkout -b feat/digital-twin-pivot-2026-04-25
git add -A
git commit -m "feat(seo): digital-twin pivot — pillar rewrite + 4 clusters + 4 vertical hubs"
git push -u origin feat/digital-twin-pivot-2026-04-25
gh pr create --fill --base main
gh pr merge --squash --auto
```

## CRITICAL: do NOT touch the homepage `<Route path="/" element={<Home />} />` line. Homepage H1 + headline are locked.
