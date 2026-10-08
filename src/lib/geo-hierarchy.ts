// Geo hierarchy breadcrumbs — React side of scripts/geo-hierarchy-links.mjs.
// Both layers run the same chain logic (src/data/geo-hierarchy.mjs) over the
// same data (src/data/geo-hierarchy.json), so the visible breadcrumb and the
// BreadcrumbList here match the prerendered HTML crawlers see:
//   Home › NDT Training › USA › Texas › Houston
// Prerender checks hub existence against the live routes; this layer uses the
// hubPaths list in the JSON (refresh: node scripts/geo-hierarchy-links.mjs --refresh-hubs).
import geoData from "@/data/geo-hierarchy.json";
import * as geo from "@/data/geo-hierarchy.mjs";

interface GeoChainCrumb { name: string; path: string }
interface GeoChain { crumbs: GeoChainCrumb[] }
type ChainFn = (data: unknown, path: string, ok: (p: string) => boolean) => GeoChain | null;
type ListItemsFn = (chain: GeoChain) => { "@type": "ListItem"; position: number; name: string; item: string }[];

const geoChain = (geo as unknown as { geoChain: ChainFn }).geoChain;
const breadcrumbListItems = (geo as unknown as { breadcrumbListItems: ListItemsFn }).breadcrumbListItems;
const HUBS = new Set<string>((geoData as unknown as { hubPaths?: string[] }).hubPaths || []);
const SITE = "https://atlantisndt.com";

export interface GeoCrumb { label: string; href: string }

function chainFor(pathOrUrl: string): GeoChain | null {
  const path = (String(pathOrUrl || "").replace(SITE, "").split(/[?#]/)[0].replace(/\/+$/, "")) || "/";
  try {
    return geoChain(geoData, path, (p) => p === path || HUBS.has(p));
  } catch {
    return null;
  }
}

/** Visible breadcrumb items for a location page, or null outside the hierarchy. */
export function geoBreadcrumbItems(pathOrUrl: string): GeoCrumb[] | null {
  const chain = chainFor(pathOrUrl);
  return chain ? chain.crumbs.map((c) => ({ label: c.name, href: c.path })) : null;
}

/** schema.org ListItems for the same chain, or null outside the hierarchy. */
export function geoBreadcrumbListItems(pathOrUrl: string) {
  const chain = chainFor(pathOrUrl);
  return chain ? breadcrumbListItems(chain) : null;
}
