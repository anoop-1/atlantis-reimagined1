import assert from 'node:assert/strict';
import { applyConsolidation } from './consolidation-2026-08.mjs';

const route = {path:'/blog/ndt-salary-guide-2026-global',bodyContent:'<main><h1>Salary guide</h1><p>Original article.</p></main>'};
applyConsolidation([route], (page, html) => { page.bodyContent += html; });
assert.equal((route.bodyContent.match(/<main\b/g) || []).length, 1);
assert.ok(route.bodyContent.includes('$120,000'), 'Preserve literal salary currency instead of inserting a regex capture');
assert.ok(route.bodyContent.includes('<p>Original article.</p>'));
console.log('Published content regression passed: literal currency, one main, original article retained.');
