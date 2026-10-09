import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/future",
  "/future/ai-defect-detection-on-rt-films-state-of-art",
  "/future/auto-paut-data-interpretation-where-its-reliable",
  "/future/autonomous-drone-inspection-of-tanks-and-flares",
  "/future/cloud-vs-on-prem-ndt-data-the-2026-decision",
  "/future/crawler-localization-without-gps-underground",
  "/future/digital-twin-for-ndt-data-architecture-2026",
  "/future/edge-computing-for-real-time-paut-data-2026",
  "/future/human-in-the-loop-validation-of-automated-ndt-results",
  "/future/mlops-for-ndt-data-from-experiment-to-production",
  "/future/robotic-crawler-pipeline-inspection-trends",
  "/implementation",
  "/industries-and-applications",
  "/regions-and-project-planning",
  "/technologies",
  "/trends"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://ndt-automation-future.vercel.app" + route }));
}
