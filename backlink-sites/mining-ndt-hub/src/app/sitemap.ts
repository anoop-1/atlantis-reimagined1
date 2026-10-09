import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/equipment",
  "/guides/component-replacement-relocation-inspection-history",
  "/mining",
  "/mining/conveyor-pulley-inspection-mt-ut-vt",
  "/mining/crusher-and-mill-liner-bolt-inspection-strategies",
  "/mining/dragline-boom-and-bucket-inspection-program",
  "/mining/haul-truck-frame-crack-inspection-program",
  "/mining/haul-truck-tray-and-tub-crack-mapping",
  "/mining/mill-shell-girth-weld-inspection-sag-ball",
  "/mining/mine-conveyor-belt-splice-inspection",
  "/mining/mine-thickener-and-tank-inspection-mining-tailings",
  "/mining/tailings-dam-instrumentation-and-ndt-overlap",
  "/mining/underground-mining-shaft-rope-inspection",
  "/safety"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://mining-ndt-hub.vercel.app" + route }));
}
