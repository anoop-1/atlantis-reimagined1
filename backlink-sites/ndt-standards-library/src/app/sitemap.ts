import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/api",
  "/asme",
  "/guides/procedure-revision-impact-matrix-open-job-packs",
  "/international",
  "/library",
  "/library/api-vs-asme-vs-iso-pressure-equipment-rules-quick-map",
  "/library/asme-bpvc-section-ix-welding-requirements-walkthrough",
  "/library/asme-section-v-2025-edition-changes",
  "/library/asme-section-viii-div-2-vs-div-1-ndt-comparison",
  "/library/astm-e2375-bulk-ultrasonic-examination-of-pipe",
  "/library/aws-d1-1-vs-aws-d1-5-vs-aws-d1-6-pick-the-correct-code",
  "/library/choosing-the-right-pipe-code-asme-b31-1-vs-b31-3-vs-b31-8",
  "/library/european-pressure-equipment-directive-ped-ndt-rules",
  "/library/iso-17640-vs-en-iso-17640-piping-paut",
  "/library/iso-9712-vs-en-iso-vs-asnt-cross-recognition"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://ndt-standards-library.vercel.app" + route }));
}
