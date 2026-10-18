import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
// 2026-10-18: the seven 3D-scanning industry pages (/3d-scanning-tank etc.) are not cities;
// they fall through to NotFound, which shows their prerendered page (PrerenderedFallback).
import SCAN_INDUSTRY_SLUGS from "@/data/scan-industry-slugs.json";

const MethodLocationPage = lazy(() => import("@/components/MethodLocationPage"));
const DynamicTrainingPage = lazy(() => import("@/components/DynamicTrainingPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ThreeDScanningLocationPage = lazy(() => import("@/components/ThreeDScanningLocationPage"));

// NDT methods that map to MethodLocationPage
const METHOD_SLUGS = [
  "ultrasonic-testing",
  "radiographic-testing",
  "magnetic-particle-testing",
  "penetrant-testing",
  "eddy-current-testing",
  "visual-testing",
];

const Loader = () => (
  <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

/**
 * Dynamic catch-all route for pre-rendered pages that don't have explicit routes.
 * Handles:
 *   /{method}-{city}         → MethodLocationPage
 *   /ndt-training-{city}     → DynamicTrainingPage
 * Everything else → NotFound
 */
export default function DynamicCityRoute() {
  const { pathname } = useLocation();
  const path = pathname.replace(/^\//, "").replace(/\/$/, "");

  // Match {method-slug}-{city-slug}
  for (const method of METHOD_SLUGS) {
    if (path.startsWith(method + "-")) {
      const city = path.slice(method.length + 1);
      if (city) {
        return (
          <Suspense fallback={<Loader />}>
            <MethodLocationPage methodSlug={method} locationSlug={city} />
          </Suspense>
        );
      }
    }
  }

  // Match 3d-scanning-{city}
  if (path.startsWith("3d-scanning-") && path !== "3d-scanning-services" && !(SCAN_INDUSTRY_SLUGS as string[]).includes(path.slice("3d-scanning-".length))) {
    const city = path.slice("3d-scanning-".length);
    if (city) {
      return (
        <Suspense fallback={<Loader />}>
          <ThreeDScanningLocationPage citySlug={city} />
        </Suspense>
      );
    }
  }

  // Match ndt-training-{city}
  if (path.startsWith("ndt-training-")) {
    const city = path.slice("ndt-training-".length);
    if (city) {
      return (
        <Suspense fallback={<Loader />}>
          <DynamicTrainingPage citySlug={city} />
        </Suspense>
      );
    }
  }

  // Not a recognized pattern — render NotFound
  return (
    <Suspense fallback={<Loader />}>
      <NotFound />
    </Suspense>
  );
}
