import { Navigation } from "@/components/Navigation";
import { PracticalNdtLocationPage } from "@/components/PracticalNdtLocationPage";
import { practicalNdtJsonUrl, type PracticalNdtCityProfile } from "@/data/practical-ndt-cities";
import { useContentJson, isSplashLifted } from "@/lib/contentJson";

/**
 * Loads one Practical NDT city profile from /data/practical/<slug>.json
 * (emitted at build time) instead of bundling all ~266 profiles. Same
 * splash-aware loading pattern as DepthPage: nothing renders under the splash
 * on first load, the header stays up during client-side navigation.
 */
export default function PracticalNdtCityRoute({ slug }: { slug: string }) {
  const { data: profile, loading } = useContentJson<PracticalNdtCityProfile>(practicalNdtJsonUrl(slug));

  if (loading) {
    if (!isSplashLifted()) return <div className="min-h-screen bg-white dark:bg-slate-950" />;
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 py-10" aria-busy="true" />
      </div>
    );
  }
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
