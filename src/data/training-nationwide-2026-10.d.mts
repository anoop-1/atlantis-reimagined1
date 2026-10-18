export type NationwideHubEntry = { path: string; label: string; group: "usCity" | "usState" | "canada" };
export function nationwideHubEntries(
  geoHubs: Array<{ path: string; family: string; name: string; region: string; country: string }>,
  existingPaths: Set<string>,
): NationwideHubEntry[];
export const NATIONWIDE_INTRO: string;
