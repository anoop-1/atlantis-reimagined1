/**
 * App.tsx route registration patch
 * ─────────────────────────────────
 * Drop these route entries into the existing <Routes> tree in src/App.tsx.
 * Order matters — put the more specific routes (vertical pages) BEFORE the
 * generic city slug pattern.
 *
 * Place after existing routes; React Router v6 syntax assumed (no <Switch>).
 */

import { Routes, Route, Navigate } from "react-router-dom";
import ERPSoftwareHubPage from "@/pages/ERPSoftwareHubPage";
import ERPSoftwareCityPage from "@/pages/ERPSoftwareCityPage";
import NdtErpForRefineries from "@/pages/NdtErpForRefineries";
import NdtErpForAerospaceMro from "@/pages/NdtErpForAerospaceMro";
import NdtErpForShipyards from "@/pages/NdtErpForShipyards";
import NdtErpForPowerGeneration from "@/pages/NdtErpForPowerGeneration";
import NdtErpForNdeServiceProviders from "@/pages/NdtErpForNdeServiceProviders";

export const ERP_ROUTES = (
  <>
    {/* ─── Hub: EN canonical + 5 language alternates ─── */}
    <Route path="/ndt-erp-software" element={<ERPSoftwareHubPage />} />
    <Route path="/:lang/ndt-erp-software" element={<ERPSoftwareHubPage />} />

    {/* ─── 5 Industry vertical pages (EN only — alternates can be added later) ─── */}
    <Route path="/ndt-erp-for-refineries" element={<NdtErpForRefineries />} />
    <Route path="/ndt-erp-for-aerospace-mro" element={<NdtErpForAerospaceMro />} />
    <Route path="/ndt-erp-for-shipyards" element={<NdtErpForShipyards />} />
    <Route path="/ndt-erp-for-power-generation" element={<NdtErpForPowerGeneration />} />
    <Route path="/ndt-erp-for-nde-service-providers" element={<NdtErpForNdeServiceProviders />} />

    {/* ─── 120 city pages — single dynamic component, EN canonical + alternates ─── */}
    <Route path="/ndt-erp-:slug" element={<ERPSoftwareCityPage />} />
    <Route path="/:lang/ndt-erp-:slug" element={<ERPSoftwareCityPage />} />

    {/* ─── Legacy redirect: /ndt-erp-solution → /ndt-erp-software ─── */}
    <Route path="/ndt-erp-solution" element={<Navigate to="/ndt-erp-software" replace />} />
  </>
);

/**
 * Drop ERP_ROUTES inside the main <Routes> in App.tsx like:
 *
 *   <Routes>
 *     <Route path="/" element={<Home />} />
 *     ...existing routes...
 *     {ERP_ROUTES.props.children}
 *     <Route path="/404" element={<NotFound />} />
 *     <Route path="*" element={<NotFound />} />     ← critical: catch-all 404
 *   </Routes>
 *
 * The `<Route path="*" element={<NotFound />} />` at the end is what makes
 * truly invalid URLs (like /ndt-erp-totally-fake) return a real 404 page
 * instead of falling back to the homepage SPA shell.  Make sure NotFound
 * sets <SEOHead noindex /> and the response status is 404 (the prerender
 * script's fallback HTML should set <meta name="robots" content="noindex" />
 * in the head).
 */
