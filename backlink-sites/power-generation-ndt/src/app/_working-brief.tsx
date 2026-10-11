'use client';
import { useRef, useState } from 'react';
import { site, offers, contactUrl } from './_satellite-data';
import { growth } from './_growth-data';

export default function WorkingBrief() {
  const [values, setValues] = useState<string[]>(growth.fields.map(() => ''));
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState('');
  const completed = useRef(false);
  const downloaded = useRef(false);
  const offer = offers.find(item => item.key === growth.offer)!;
  const summary = [growth.title, 'Planning draft — not an approved procedure or technical assessment', '',
    ...growth.fields.flatMap((field, index) => [field.label, values[index].trim() || 'To confirm', '']),
    'Scope boundary', growth.boundary, '', 'Reference', site.domain + '/guides/' + growth.slug].join('\n');
  function track(event: string) {
    const analytics = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof analytics === 'function') analytics('event', event, { satellite_id: site.slug, service: offer.service, resource_id: growth.slug, source_path: location.pathname });
  }
  function download() {
    const url = URL.createObjectURL(new Blob([summary], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = growth.slug + '-brief.txt';
    document.body.appendChild(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Your text download has been requested. Nothing has been submitted.');
    if (!downloaded.current) { track('satellite_brief_download'); downloaded.current = true; }
  }
  return <div className="sat-home" data-growth-release="growth-v1">
    <header className="sat-hero"><div className="sat-wrap sat-reading"><p className="sat-eyebrow">Free working brief · No registration</p><h1>{growth.title}: working brief</h1><p className="sat-lead">Turn the guide into a practical discussion document. Enter what you know; use “to confirm” where evidence is missing.</p><p className="sat-note">Your answers stay in this page’s memory until you leave or reset it. They are not added to enquiry links, stored on this site or sent in analytics. Use anonymized information and keep confidential records in your approved system.</p><a className="sat-text-link" href={'/guides/' + growth.slug}>Read the guide before completing the brief →</a></div></header>
    <div className="sat-wrap sat-reading sat-section"><noscript><p>The interactive worksheet needs JavaScript. You can still use the questions and guidance below to prepare a brief in your own document.</p></noscript>
      <form className="sat-brief-form" onSubmit={event => { event.preventDefault(); if(values.some(value => !value.trim())) { setNotice('Complete each field, or enter “to confirm”.'); return; } setReady(true); setNotice('Your draft is ready below. Nothing has been submitted.'); if (!completed.current) { track('satellite_brief_complete'); completed.current = true; } }}>
        {growth.fields.map((field, index) => <div className="sat-field" key={field.label}><label htmlFor={'brief-' + index}>{index + 1}. {field.label}</label><p id={'hint-' + index}>{field.hint}</p><textarea id={'brief-' + index} aria-describedby={'hint-' + index} required maxLength={1500} rows={3} value={values[index]} onChange={event => { const next = [...values]; next[index] = event.target.value; setValues(next); setReady(false); setNotice(''); }} /></div>)}
        <div className="sat-actions"><button className="sat-button" type="submit">Generate my brief</button><button className="sat-button sat-button-secondary" type="button" onClick={() => { setValues(growth.fields.map(() => '')); setReady(false); setNotice('Answers cleared.'); }}>Reset answers</button></div>
      </form>
      <p className="sat-copy" role="status" aria-live="polite">{notice}</p>
      {ready && <section className="sat-brief-result" aria-labelledby="result-title"><h2 id="result-title">Your working draft</h2><p>No technical readiness score is assigned. Review the contents with the responsible person before relying on them.</p><pre>{summary}</pre><div className="sat-actions"><button className="sat-button" onClick={download}>Download text brief</button><button className="sat-button sat-button-secondary" onClick={() => window.print()}>Print brief</button></div><p className="sat-copy">If you want Atlantis to review the scope, download your draft and open the contact page. The draft is not transferred automatically; share only what is appropriate through the agreed enquiry channel.</p><a className="sat-text-link" href={contactUrl(offer, 'working-brief')}>{offer.cta} →</a></section>}
      <p className="sat-copy sat-boundary">{growth.boundary}</p><p className="sat-copy"><a className="sat-text-link" href="/resource-library">Back to the resource library</a></p>
    </div>
  </div>;
}
