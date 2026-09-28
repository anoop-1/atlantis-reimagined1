// Deep content blocks (2026-09-28): long-form sections written for the pages
// that already rank for North American ERP / NDT-software head terms, and for
// the 60 North American ERP hub cities. Each file in src/data/deep-content/
// is keyed by page path ("/ndt-erp-houston" -> ndt-erp-houston.json,
// "/blog/x" -> blog__x.json) and holds { path, bodyHtml }.
// The same JSON is rendered by <DeepContent> in the React layer, so crawlers
// and visitors see the same text. Injected before the route's closing </main>.
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

export function deepContentKey(path) {
  return path.replace(/^\//, '').replace(/\//g, '__');
}

export function applyDeepContent(routes, root = process.cwd()) {
  const dir = join(root, 'src/data/deep-content');
  if (!existsSync(dir)) return 0;
  const byKey = new Map();
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.json'))) {
    const d = JSON.parse(readFileSync(join(dir, f), 'utf-8'));
    byKey.set(f.replace(/\.json$/, ''), d);
  }
  let n = 0;
  for (const r of routes) {
    if (!r || !r.path || typeof r.bodyContent !== 'string') continue;
    const d = byKey.get(deepContentKey(r.path));
    if (!d || !d.bodyHtml) continue;
    const block = `\n<section class="deep-content">\n${d.bodyHtml}\n</section>\n`;
    const i = r.bodyContent.lastIndexOf('</main>');
    r.bodyContent = i >= 0 ? r.bodyContent.slice(0, i) + block + r.bodyContent.slice(i) : r.bodyContent + block;
    n++;
  }
  return n;
}
