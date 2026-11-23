// Today's report validation pages: the first N queue rows not yet in list.json.
// Usage: node scripts/report-validation-refine/next.mjs [--count 5]
import { readFileSync } from 'node:fs';
const q = JSON.parse(readFileSync(new URL('./queue.json', import.meta.url), 'utf8')).queue;
const list = JSON.parse(readFileSync(new URL('../../src/data/report-validation-section/list.json', import.meta.url), 'utf8')).pages;
const have = new Set(list.map((r) => r.slug));
const i = process.argv.indexOf('--count');
const n = i > 0 ? Number(process.argv[i + 1]) || 5 : 5;
const todo = q.filter((r) => !have.has(r.slug));
console.log(JSON.stringify({ today: todo.slice(0, n), remaining: todo.length - Math.min(n, todo.length) }, null, 1));
