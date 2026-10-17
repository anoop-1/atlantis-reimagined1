// Slugs of the Practical NDT method and workplace pages (/practical-ndt/{slug}), 2026-10-17.
// Kept apart from the page data so src/RouteTable.tsx can declare the routes without pulling the
// copy into the entry chunk. src/data/practical-ndt-simulators-2026-10.mjs throws if its PAGES
// differ from this list, so the two cannot drift.
export const PRACTICAL_SIM_SLUGS = [
  'ultrasonic-testing-simulator', 'phased-array-ut-simulator', 'tofd-simulator', 'radiography-simulator',
  'magnetic-particle-simulator', 'penetrant-testing-simulator', 'visual-testing-simulator', 'eddy-current-simulator',
  'ndt-lab', 'welding-workshop', 'process-plant', 'storage-tank', 'heat-exchanger', 'aviation',
];
