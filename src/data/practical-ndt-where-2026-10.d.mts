// Types for practical-ndt-where-2026-10.mjs (shared by React and scripts/practical-ndt-directory.mjs).
export const WHERE: { h2: string; intro: string; labels: { regions: string; cities: string; world: string } };
export function whereGroups(
  directory: { slug: string | null; name: string; cities: { slug: string; city: string }[] }[],
  geoHubs: { path: string; family: string; name: string; country: string }[],
): { label: string; links: [string, string][] }[];
