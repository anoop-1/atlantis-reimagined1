/**
 * Product videos — crawler side (CLAUDE.md §52). Same data as src/components/ProductVideoBlock.tsx:
 * src/data/product-videos.json. Emits a facade (thumbnail + link to the YouTube watch page,
 * no iframe, no third-party script) and a VideoObject JSON-LD block, inserted before the
 * last </main> ahead of the §49 coverage block. Nothing is emitted until youtubeId is set.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VIDEOS = Object.values(JSON.parse(readFileSync(join(__dirname, '..', 'src/data/product-videos.json'), 'utf-8')).videos);
export const VIDEO_MARKER = 'data-product-video="2026-10"';
export const videoStats = { pages: 0 };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const videoFor = (p) => VIDEOS.find((v) => v.youtubeId && v.pages.includes(p));

export function applyVideoRoute(route) {
  const p = route?.path;
  const v = p && videoFor(p);
  if (!v || typeof route.bodyContent !== 'string' || route.bodyContent.includes(VIDEO_MARKER)) return route;
  const watch = `https://www.youtube.com/watch?v=${v.youtubeId}`;
  const ld = { '@context': 'https://schema.org', '@type': 'VideoObject', name: v.name, description: v.description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`], uploadDate: v.uploadDate, duration: v.duration,
    contentUrl: watch, embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
    publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: 'https://atlantisndt.com' } };
  const html = `
    <section ${VIDEO_MARKER} aria-label="${esc(v.heading)}">
      <h2>${esc(v.heading)}</h2>
      <p><a href="${watch}" rel="noopener"><img src="https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg" alt="${esc(v.name)}" width="480" height="360" loading="lazy"></a></p>
      <p>${esc(v.description)}</p>
      <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>
    </section>
`;
  const i = route.bodyContent.lastIndexOf('</main>');
  const body = i >= 0 ? route.bodyContent.slice(0, i) + html + route.bodyContent.slice(i) : route.bodyContent + html;
  videoStats.pages++;
  return { ...route, bodyContent: body };
}

export function assertVideosClean(knownPaths) {
  for (const v of VIDEOS) {
    if (v.youtubeId && !/^[A-Za-z0-9_-]{11}$/.test(v.youtubeId)) throw new Error(`product-videos: bad youtubeId ${v.youtubeId}`);
    if (knownPaths) for (const p of v.pages) if (!knownPaths.has(p)) throw new Error(`product-videos: ${p} is not a built page`);
  }
  return true;
}
