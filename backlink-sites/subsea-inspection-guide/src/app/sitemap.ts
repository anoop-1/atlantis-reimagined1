import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/certification",
  "/deepwater",
  "/deepwater/cathodic-protection-survey-deepwater-cp-monitoring",
  "/deepwater/fpso-hull-inspection-program-class-survey-coordination",
  "/deepwater/mattress-and-stabilization-cover-inspection-pipelines",
  "/deepwater/rov-inspection-class-iii-vs-class-iv-which-tooling",
  "/deepwater/rov-pilot-handoff-from-vessel-to-onshore-team",
  "/deepwater/subsea-bolts-inspection-and-replacement-strategy",
  "/deepwater/subsea-jumper-and-spool-inspection-2026-workflow",
  "/deepwater/subsea-manifold-anode-program-design",
  "/deepwater/subsea-pipeline-fjellsiganger-inspection-flooded-member",
  "/deepwater/subsea-weld-flaw-sizing-with-paut-and-tofd",
  "/guides/video-annotation-location-confidence-handover",
  "/materials"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://subsea-inspection-guide.vercel.app" + route }));
}
