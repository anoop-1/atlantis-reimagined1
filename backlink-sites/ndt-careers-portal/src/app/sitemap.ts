import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/careers",
  "/careers/level-iii-consultant",
  "/careers/ndt-inspector",
  "/consulting-guide",
  "/job-markets",
  "/job-markets/asia-pacific",
  "/job-markets/houston",
  "/job-markets/middle-east",
  "/paths",
  "/paths/building-a-level-iii-consulting-practice",
  "/paths/interviewing-for-an-ndt-supervisor-role",
  "/paths/mid-career-pivot-from-field-ndt-to-software",
  "/paths/ndt-resume-templates-that-actually-pass-screening",
  "/paths/ndt-salary-by-method-and-region-2026",
  "/paths/offshore-vs-onshore-ndt-careers-financial-and-lifestyle",
  "/paths/remote-ndt-jobs-are-they-real",
  "/paths/side-income-options-for-a-working-ndt-inspector",
  "/paths/transitioning-from-welder-to-ndt-inspector",
  "/paths/visa-and-relocation-for-international-ndt-work",
  "/resources",
  "/salary",
  "/salary/by-location",
  "/salary/by-method"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://ndt-careers-portal.vercel.app" + route }));
}
