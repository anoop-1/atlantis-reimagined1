import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
const read = p => readFileSync(p, 'utf8');
const html = p => read(`dist${p === '/' ? '' : p}/index.html`);
const routeTable = read('src/RouteTable.tsx').replace(/\s+/g, ' ');
const fast = read('src/PageRoutes.tsx');
const routes = [...fast.matchAll(/<Route path="([^"]+)" element=\{<([^ ]+) \/>\}/g)];
assert.equal(routes.length, 29);
for (const [,path,component] of routes) {
  assert.ok(routeTable.includes(`<Route path="${path}" element={<${component} />}`) || routeTable.includes(`<Route path="${path}" element={<LazyRoute Component={${component}} />}`), `Route mismatch: ${path}`);
  assert.ok(existsSync(`dist${path === '/' ? '' : path}/index.html`), `Missing published route: ${path}`);
}
const buyer = JSON.parse(read('src/data/buyer-evaluation.json'));
for (const [path,copy] of Object.entries(buyer).filter(([path]) => path.startsWith('/'))) {
  const page = html(path);
  assert.ok(page.includes(copy.h1), `${path}: heading`);
  assert.ok(page.replaceAll('&amp;','&').includes(`<title>${copy.title}</title>`), `${path}: title`);
  assert.ok(page.includes(`href="https://atlantisndt.com${path}"`), `${path}: canonical`);
  for (const section of copy.sections) {
    assert.ok(page.includes(section.heading), `${path}: section`);
    for (const [link] of section.links || []) {
      assert.ok(existsSync(`dist${link.split(/[?#]/)[0]}/index.html`), `Broken buyer link: ${link}`);
    }
  }
}
assert.ok(html('/free-trial').includes('id="erp-trial-enquiry"'));
assert.ok(html('/free-trial').includes('14-day'));
for (const path of ['/training','/training-usa','/ndt-training-online','/ut-level-2-training']) {
  assert.ok(html(path).includes('Start NDT training any time of year'), `${path}: availability`);
}
assert.ok(!html('/resources/training-requirements-matrix').includes('Level III hours are additional'));
assert.ok(html('/resources/training-requirements-matrix').includes('See Level III eligibility'));
const integration = html('/ndt-erp-integration-matrix');
assert.ok(!integration.includes('10 native integrations'));
assert.ok(!/"@type"\s*:\s*"Product"/.test(html('/ndt-erp-duqm')));
console.log('SEO completion: 29 core routes, buyer content and links, trial form, course availability, Level III eligibility and retired Product markup PASS');
