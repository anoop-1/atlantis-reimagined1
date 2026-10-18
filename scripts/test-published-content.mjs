import assert from 'node:assert/strict';
import { applyConsolidation } from './consolidation-2026-08.mjs';

const route = {path:'/blog/ndt-salary-guide-2026-global',bodyContent:'<main><h1>Salary guide</h1><p>Original article.</p></main>'};
applyConsolidation([route], (page, html) => { page.bodyContent += html; });
assert.equal((route.bodyContent.match(/<main\b/g) || []).length, 1);
assert.ok(route.bodyContent.includes('$78,350'), 'Preserve literal salary currency instead of inserting a regex capture'); // 2026-10-18: the snippet now carries the sourced O*NET figure
assert.ok(route.bodyContent.includes('<p>Original article.</p>'));
console.log('Published content regression passed: literal currency, one main, original article retained.');
