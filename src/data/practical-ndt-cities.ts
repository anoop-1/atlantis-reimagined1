/**
 * Practical NDT City/Region Profiles — GENERATED, do not hand-edit.
 * Produced by scripts/build-practical-ndt-routes.mjs from the merged
 * content-agent batch output. Same content as scripts/practical-ndt-routes.mjs
 * (single source of truth — see project rule on keeping the two render
 * layers aligned).
 */
export interface PracticalNdtCityProfile {
  slug: string;
  city: string;
  region: string;
  title: string;
  metaDescription: string;
  contentHtml: string;
}

// 2026-09-30: the profiles (~4.6 MB with wave 2) are NOT bundled any more.
// Full data lives in src/data/practical-ndt-cities.json; the build emits one
// file per city to public/data/practical/<slug>.json (scripts/emit-content-json.mjs)
// and each city page fetches only its own (src/components/PracticalNdtCityRoute.tsx).
export const practicalNdtJsonUrl = (slug: string) => `/data/practical/${slug}.json`;
