// 2026-10-18 (training workstream, training.md §5.4 "remove the second city directory").
// /training used to carry two directories: "Nationwide: NDT training by city, state and region"
// (NA city/state/region pages) and "Find NDT Training by state, province or country" (the
// training state/province hubs in src/data/geo-hubs.json). They are now one: the hubs are
// merged into the Nationwide groups here, so no hub loses its link from the training owner
// pages. Used by the crawler (scripts/training-na.mjs nationwideBlockHtml) and React
// (src/components/NaTrainingNationwide.tsx); both pass their own copy of the data.

const US_STATES = {
  Alabama: 'AL', Alaska: 'AK', Arizona: 'AZ', Arkansas: 'AR', California: 'CA', Colorado: 'CO', Connecticut: 'CT',
  Delaware: 'DE', Florida: 'FL', Georgia: 'GA', Hawaii: 'HI', Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA',
  Kansas: 'KS', Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD', Massachusetts: 'MA', Michigan: 'MI',
  Minnesota: 'MN', Mississippi: 'MS', Missouri: 'MO', Montana: 'MT', Nebraska: 'NE', Nevada: 'NV', 'New Hampshire': 'NH',
  'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', Ohio: 'OH',
  Oklahoma: 'OK', Oregon: 'OR', Pennsylvania: 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD',
  Tennessee: 'TN', Texas: 'TX', Utah: 'UT', Vermont: 'VT', Virginia: 'VA', Washington: 'WA', 'West Virginia': 'WV',
  Wisconsin: 'WI', Wyoming: 'WY',
};

// Longest state name found in a geo-hub region string ("Charlotte, North Carolina, USA" -> NC).
function stateIn(region) {
  let best = null;
  for (const name of Object.keys(US_STATES)) {
    if (new RegExp(`\\b${name}\\b`).test(region || '') && (!best || name.length > best.length)) best = name;
  }
  return best ? US_STATES[best] : null;
}

/**
 * Training state/province hubs from geo-hubs.json that the Nationwide list does not already
 * carry, as { path, label, group } with group 'usCity' | 'usState' | 'canada'.
 * @param {Array<{path:string,family:string,name:string,region:string,country:string}>} geoHubs
 * @param {Set<string>} existingPaths paths already listed from na-training-cities.json
 */
export function nationwideHubEntries(geoHubs, existingPaths) {
  const out = [];
  for (const h of geoHubs || []) {
    if (!h || h.family !== 'training' || existingPaths.has(h.path)) continue;
    const country = String(h.country || '').toUpperCase();
    if (country === 'CA') { out.push({ path: h.path, label: h.name, group: 'canada' }); continue; }
    if (country !== 'US' && country !== 'USA') continue;
    if (US_STATES[h.name]) { out.push({ path: h.path, label: h.name, group: 'usState' }); continue; }
    const st = stateIn(h.region);
    out.push({ path: h.path, label: st ? `${h.name}, ${st}` : h.name, group: 'usCity' });
  }
  return out;
}

export const NATIONWIDE_INTRO = "Every programme below is delivered online or onsite at the employer's facility under ASNT Level III oversight. Atlantis does not run walk-in training centres. Pick your market for local industries, codes and employer requirements.";
