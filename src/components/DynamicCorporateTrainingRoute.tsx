import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { getCorporateCityBySlug } from "@/data/corporate-training-seo";

const CorporateTrainingLocationPage = lazy(
  () => import("@/components/CorporateTrainingLocationPage")
);
const NotFound = lazy(() => import("@/pages/NotFound"));

const Loader = () => (
  <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading corporate training page…</p>
    </div>
  </div>
);

/**
 * Dynamic route for /corporate-ndt-training/:slug.
 * Looks up the slug in CORPORATE_TRAINING_CITIES (composed from CITY_GEO
 * + country archetypes + 14 hand-written rich cities). Renders the shared
 * CorporateTrainingLocationPage with the resolved profile, or NotFound
 * if the slug is not a supported city.
 */
export default function DynamicCorporateTrainingRoute() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    );
  }

  const profile = getCorporateCityBySlug(slug);
  if (!profile) {
    return (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <CorporateTrainingLocationPage profile={profile} />
    </Suspense>
  );
}
