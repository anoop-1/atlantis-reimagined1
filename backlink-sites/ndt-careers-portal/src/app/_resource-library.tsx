'use client';
import { useState } from 'react';
import { resources } from './_resource-index';
export default function Library() {
  const [query, setQuery] = useState('');
  const matches = resources.filter(item => (item.title + ' ' + item.group).toLowerCase().includes(query.trim().toLowerCase()));
  const groups = Array.from(new Set(matches.map(item => item.group)));
  return <div className="sat-library-browser"><label htmlFor="resource-search">Find a topic in this library</label><input id="resource-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search guide titles" /><p role="status">{matches.length} {matches.length === 1 ? 'resource' : 'resources'}{query && ' matching your search'}</p>{!matches.length && <p>Try a shorter term, or <button type="button" className="sat-inline-button" onClick={() => setQuery('')}>show every resource</button>.</p>}{groups.map(group => <section className="sat-section" key={group}><h2>{group}</h2><ul className="sat-library-list">{matches.filter(item => item.group === group).map(item => <li key={item.href}><a href={item.href}>{item.title}<span aria-hidden="true">→</span></a></li>)}</ul></section>)}</div>;
}
