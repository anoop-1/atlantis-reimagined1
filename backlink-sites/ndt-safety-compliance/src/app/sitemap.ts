import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/certifications",
  "/compliance",
  "/compliance/confined-space-entry-for-ndt-permits-and-rescue",
  "/compliance/crew-rotation-fatigue-and-fitness-for-duty-ndt",
  "/compliance/fume-control-during-magnetic-particle-and-penetrant",
  "/compliance/incident-investigation-after-ndt-source-loss",
  "/compliance/incident-reporting-near-miss-culture-for-ndt-teams",
  "/compliance/industrial-radiography-safety-program-essentials",
  "/compliance/inspector-fatigue-and-pod-the-data-no-one-shares",
  "/compliance/iso-45001-and-ndt-safety-program-alignment",
  "/compliance/lockout-tagout-for-ut-and-mt-on-rotating-equipment",
  "/compliance/transport-of-ndt-sources-iata-imdg",
  "/guides/shift-change-inspection-readiness-handoff-record",
  "/regulations"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://ndt-safety-compliance.vercel.app" + route }));
}
