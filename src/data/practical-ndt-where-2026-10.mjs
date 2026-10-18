/**
 * /practical-ndt "where we deliver" link list — 2026-10-18 (traffic workstream).
 * Replaces the 29 "Practical NDT in {State}" H3 groups (src/data/practical-ndt-directory.json) and
 * the separate country directory (geo-hubs.json, family "practical") with one compact section:
 * one H2 and three link lines. Every state, province, country and un-hubbed city page keeps its
 * inbound link from the hub; cities under a state hub are linked from that hub's own city list.
 * Both layers render from whereGroups(): src/components/PracticalNdtDirectory.tsx (React) and
 * scripts/practical-ndt-directory.mjs (crawler).
 */

export const WHERE = {
  h2: 'Practical NDT by state, province and country',
  intro: 'Practical NDT runs in a standard browser, so the simulator is available wherever your team works. Each regional page covers the local industries and the methods that match the work there.',
  labels: {
    regions: 'US states and Canadian provinces',
    cities: 'More North American cities',
    world: 'Other countries and regions',
  },
};

/**
 * @param {{ slug: string|null, name: string, cities: { slug: string, city: string }[] }[]} directory
 * @param {{ path: string, family: string, name: string, country: string }[]} geoHubs
 * @returns {{ label: string, links: [string, string][] }[]}
 */
export function whereGroups(directory, geoHubs) {
  const hubs = (geoHubs || []).filter((h) => h.family === 'practical');
  const regions = (directory || []).filter((g) => g.slug).map((g) => [`/practical-ndt-${g.slug}`, g.name]);
  const seen = new Set(regions.map(([h]) => h));
  for (const h of hubs.filter((x) => String(x.country).toUpperCase() === 'CA').sort((a, b) => a.name.localeCompare(b.name))) {
    if (!seen.has(h.path)) { regions.push([h.path, h.name]); seen.add(h.path); }
  }
  const cities = (directory || []).filter((g) => !g.slug).flatMap((g) => g.cities.map((c) => [`/practical-ndt-${c.slug}`, c.city]));
  const world = hubs.filter((x) => String(x.country).toUpperCase() !== 'CA' && !seen.has(x.path))
    .sort((a, b) => a.name.localeCompare(b.name)).map((h) => [h.path, h.name]);
  return [
    { label: WHERE.labels.regions, links: regions },
    { label: WHERE.labels.cities, links: cities },
    { label: WHERE.labels.world, links: world },
  ].filter((g) => g.links.length);
}
