import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/blog",
  "/blog/coating-inspection-records-that-survive-a-warranty-dispute",
  "/blog/corrosion-and-coating-in-a-digital-twin",
  "/blog/managing-coating-inspection-data-with-erp",
  "/defects",
  "/guides/coating-hold-point-evidence-and-open-observations",
  "/guides/coating-inspection-report-scope",
  "/inspections",
  "/inspections/coating-failure-modes-osmotic-blistering-cathodic-disbondment",
  "/inspections/dew-point-vs-substrate-temp-painting-decision-rule",
  "/inspections/fiber-glass-and-frp-coating-inspection-considerations",
  "/inspections/holiday-detection-low-voltage-vs-high-voltage",
  "/inspections/ndt-coating-inspector-day-one-jobsite-kit",
  "/inspections/pipe-coating-fbe-vs-3lpe-vs-3lpp-when-each-fits",
  "/inspections/ssp-sp10-vs-sp5-blast-profile-decisions",
  "/inspections/tank-internal-lining-inspection-acceptance-criteria",
  "/inspections/tsa-thermal-spray-aluminum-inspection-cui",
  "/inspections/wet-film-thickness-vs-dry-film-thickness-when-each-fails",
  "/methods",
  "/resource-library",
  "/standards"
];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: "https://coating-inspection-guide.vercel.app" + route })); }
