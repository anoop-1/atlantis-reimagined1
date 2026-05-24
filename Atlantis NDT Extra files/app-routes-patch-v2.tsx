/**
 * HOMEPAGE H1 + HEADLINE MUST NOT BE CHANGED.
 * ────────────────────────────────────────────
 * This patch ONLY touches the /digital-twins tree and the /ndt-erp tree.
 * Do not edit /, /about, /contact, or any existing homepage copy.
 *
 * App.tsx route registration patch — v2
 * ─────────────────────────────────────
 * Drop ERP_AND_DIGITAL_TWIN_ROUTES into the existing <Routes> tree in
 * src/App.tsx. Order matters — keep vertical/cluster pages BEFORE the dynamic
 * `:slug` patterns, and keep the catch-all 404 route LAST.
 *
 * React Router v6 (no <Switch>). Parallel URL families:
 *   /ndt-erp-*         — 120 city ERP pages + hub + 5 verticals
 *   /digital-twins/*   — pillar + 4 clusters + 4 vertical hubs
 *   /digital-twin-*    — 120 city digital-twin pages
 *
 * Every /digital-twin-{slug} page cross-links to /ndt-erp-{slug} so the two
 * URL families reinforce each other in Google's eyes.
 */

import { Routes, Route, Navigate } from "react-router-dom";

// ─── Existing ERP tree ──────────────────────────────────────────────────────
import ERPSoftwareHubPage from "@/pages/ERPSoftwareHubPage";
import ERPSoftwareCityPage from "@/pages/ERPSoftwareCityPage";
import NdtErpForRefineries from "@/pages/NdtErpForRefineries";
import NdtErpForAerospaceMro from "@/pages/NdtErpForAerospaceMro";
import NdtErpForShipyards from "@/pages/NdtErpForShipyards";
import NdtErpForPowerGeneration from "@/pages/NdtErpForPowerGeneration";
import NdtErpForNdeServiceProviders from "@/pages/NdtErpForNdeServiceProviders";

// ─── Digital Twins pillar + clusters ───────────────────────────────────────
import DigitalTwinsPillar from "@/pages-digital-twins/DigitalTwinsPillar";
import DigitalTwinsLidar from "@/pages-digital-twins/DigitalTwinsLidar";
import DigitalTwinsIot from "@/pages-digital-twins/DigitalTwinsIot";
import DigitalTwinsAi from "@/pages-digital-twins/DigitalTwinsAi";
import DigitalTwinsNdtOverlay from "@/pages-digital-twins/DigitalTwinsNdtOverlay";

// ─── Digital Twins vertical hubs ───────────────────────────────────────────
import DigitalTwinsOilGas from "@/pages-digital-twins/DigitalTwinsOilGas";
import DigitalTwinsMaritime from "@/pages-digital-twins/DigitalTwinsMaritime";
import DigitalTwinsDefense from "@/pages-digital-twins/DigitalTwinsDefense";
import DigitalTwinsAerospace from "@/pages-digital-twins/DigitalTwinsAerospace";

// ─── Digital Twins city page (single dynamic component, 120 slugs) ────────
import DigitalTwinCityPage from "@/pages-digital-twins/DigitalTwinCityPage";

// ─── 404 ───────────────────────────────────────────────────────────────────
import NotFound from "@/pages/NotFound";

export const ERP_AND_DIGITAL_TWIN_ROUTES = (
  <>
    {/* ═══════════════════════════════════════════════════════════════════ */}
    {/* ERP tree (existing — preserved verbatim)                              */}
    {/* ═══════════════════════════════════════════════════════════════════ */}

    {/* Hub: EN canonical + language alternates */}
    <Route path="/ndt-erp-software" element={<ERPSoftwareHubPage />} />
    <Route path="/:lang/ndt-erp-software" element={<ERPSoftwareHubPage />} />

    {/* 5 industry vertical pages (EN only — alternates can be added later) */}
    <Route path="/ndt-erp-for-refineries" element={<NdtErpForRefineries />} />
    <Route path="/ndt-erp-for-aerospace-mro" element={<NdtErpForAerospaceMro />} />
    <Route path="/ndt-erp-for-shipyards" element={<NdtErpForShipyards />} />
    <Route path="/ndt-erp-for-power-generation" element={<NdtErpForPowerGeneration />} />
    <Route
      path="/ndt-erp-for-nde-service-providers"
      element={<NdtErpForNdeServiceProviders />}
    />

    {/* 120 ERP city pages — single dynamic component */}
    <Route path="/ndt-erp-:slug" element={<ERPSoftwareCityPage />} />
    <Route path="/:lang/ndt-erp-:slug" element={<ERPSoftwareCityPage />} />

    {/* Legacy redirect */}
    <Route path="/ndt-erp-solution" element={<Navigate to="/ndt-erp-software" replace />} />

    {/* ═══════════════════════════════════════════════════════════════════ */}
    {/* Digital Twins tree (new)                                              */}
    {/* ═══════════════════════════════════════════════════════════════════ */}

    {/* Pillar: EN canonical + language alternates */}
    <Route path="/digital-twins" element={<DigitalTwinsPillar />} />
    <Route path="/:lang/digital-twins" element={<DigitalTwinsPillar />} />

    {/* 4 cluster/capability pages */}
    <Route
      path="/digital-twins/lidar-scan-to-twin"
      element={<DigitalTwinsLidar />}
    />
    <Route
      path="/digital-twins/iot-sensor-integration"
      element={<DigitalTwinsIot />}
    />
    <Route
      path="/digital-twins/ai-predictive-analytics"
      element={<DigitalTwinsAi />}
    />
    <Route
      path="/digital-twins/ndt-data-overlay"
      element={<DigitalTwinsNdtOverlay />}
    />

    {/* 4 vertical hub pages */}
    <Route path="/digital-twins/oil-and-gas" element={<DigitalTwinsOilGas />} />
    <Route path="/digital-twins/maritime" element={<DigitalTwinsMaritime />} />
    <Route path="/digital-twins/defense" element={<DigitalTwinsDefense />} />
    <Route path="/digital-twins/aerospace" element={<DigitalTwinsAerospace />} />

    {/* 120 digital-twin city pages — single dynamic component */}
    <Route path="/digital-twin-:slug" element={<DigitalTwinCityPage />} />
    <Route path="/:lang/digital-twin-:slug" element={<DigitalTwinCityPage />} />

    {/* ═══════════════════════════════════════════════════════════════════ */}
    {/* Catch-all 404 — must stay LAST                                        */}
    {/* ═══════════════════════════════════════════════════════════════════ */}
    <Route path="*" element={<NotFound />} />
  </>
);

/**
 * Drop the fragment inside the main <Routes> in App.tsx like:
 *
 *   <Routes>
 *     <Route path="/" element={<Home />} />         // ← DO NOT TOUCH HOMEPAGE
 *     ...other existing app routes...
 *     {ERP_AND_DIGITAL_TWIN_ROUTES.props.children}
 *   </Routes>
 *
 * Important:
 *   • Keep <Route path="/" element={<Home />} /> above this block — the
 *     homepage H1 and headline are locked per user policy.
 *   • The catch-all <Route path="*" element={<NotFound />} /> at the end is
 *     what makes invalid URLs (e.g. /digital-twin-totally-fake) return a real
 *     404 instead of falling back to the SPA shell. NotFound must render
 *     <SEOHead noindex /> and the prerender fallback HTML should set
 *     <meta name="robots" content="noindex" />.
 *   • Do NOT add any /digital-twin-* or /ndt-erp-* routes outside this block.
 */
