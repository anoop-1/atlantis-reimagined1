import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/equipment",
  "/guides",
  "/guides/bog-compressor-inspection-and-monitoring",
  "/guides/cryogenic-tank-inspection-9-percent-nickel-steel",
  "/guides/fabrication-in-service-evidence-lng-handover",
  "/guides/gravity-base-structure-gbs-lng-inspection-considerations",
  "/guides/lng-inspection-package-boundaries",
  "/guides/lng-loading-arm-inspection-program",
  "/guides/lng-piping-weld-acceptance-criteria",
  "/guides/lng-spill-protection-systems-inspection-and-test",
  "/guides/lng-storage-tank-roof-inspection-from-inside-and-outside",
  "/guides/lng-trailer-and-isotainer-inspection-checklist",
  "/guides/lng-vaporizer-and-srv-inspection-program",
  "/guides/small-scale-lng-asset-integrity-program",
  "/resource-library",
  "/safety",
  "/terminals"
];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: "https://lng-inspection-hub.vercel.app" + route })); }
