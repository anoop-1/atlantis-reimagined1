import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/equipment",
  "/guides",
  "/guides/bog-compressor-inspection-and-monitoring",
  "/guides/cryogenic-tank-inspection-9-percent-nickel-steel",
  "/guides/gravity-base-structure-gbs-lng-inspection-considerations",
  "/guides/lng-loading-arm-inspection-program",
  "/guides/lng-piping-weld-acceptance-criteria",
  "/guides/lng-spill-protection-systems-inspection-and-test",
  "/guides/lng-storage-tank-roof-inspection-from-inside-and-outside",
  "/guides/lng-trailer-and-isotainer-inspection-checklist",
  "/guides/lng-vaporizer-and-srv-inspection-program",
  "/guides/small-scale-lng-asset-integrity-program",
  "/industries-and-applications",
  "/regions-and-project-planning",
  "/safety",
  "/terminals"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://lng-inspection-hub.vercel.app" + route }));
}
