'use client';
import { useEffect, useRef, useState } from 'react';
import { site, offers, contactUrl, productUrl } from './_satellite-data';
import { regions, industries, offerPlanning } from './_planning-data';

export default function ProjectPlanner() {
  const [key, setKey] = useState(offers[0].key);
  const [country, setCountry] = useState('United States');
  const [city, setCity] = useState('');
  const [industry, setIndustry] = useState('');
  const planner = useRef<HTMLElement>(null);
  // Browser Back may restore native form controls after React has mounted.
  // Synchronise the visible selections so the CTA never uses stale defaults.
  useEffect(() => {
    let frame = 0;
    const restore = () => { frame = requestAnimationFrame(() => {
      const controls = planner.current;
      if (!controls) return;
      setKey(controls.querySelector<HTMLSelectElement>('[name="offer"]')?.value || offers[0].key);
      setCountry(controls.querySelector<HTMLSelectElement>('[name="country"]')?.value || 'United States');
      setCity(controls.querySelector<HTMLInputElement>('[name="city"]')?.value || '');
      setIndustry(controls.querySelector<HTMLSelectElement>('[name="industry"]')?.value || '');
    }); };
    restore(); window.addEventListener('pageshow', restore);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('pageshow', restore); };
  }, []);
  const offer = offers.find(item => item.key === key) || offers[0];
  const contact = new URL(contactUrl(offer, 'project-planner'));
  const location = [city.trim(), country].filter(Boolean).join(', ');
  contact.searchParams.set('subject', `${site.name}: ${offer.name}; ${location}${industry ? '; '+industry : ''}`.slice(0, 240));
  return <section ref={planner} className="sat-planner" aria-labelledby="planner-title">
    <h2 id="planner-title">Prepare a location-specific enquiry</h2>
    <p>Choose the requirement first. No form is submitted here; continue to Atlantis to add your contact details and send the enquiry.</p>
    <div className="sat-grid">
      <label>Product or service<select name="offer" value={key} onChange={event => setKey(event.target.value)}>{offers.map(item => <option key={item.key} value={item.key}>{item.name}</option>)}</select></label>
      <label>Country or region<select name="country" value={country} onChange={event => setCountry(event.target.value)}>{regions.map(region => <optgroup key={region.name} label={region.priority+' · '+region.name}>{region.countries.map(name => <option key={name}>{name}</option>)}</optgroup>)}<option>Other country — specify in your enquiry</option></select></label>
      <label>Project city (optional)<input name="city" value={city} onChange={event => setCity(event.target.value)} maxLength={60} autoComplete="off" placeholder="City only, not a private address" /></label>
      <label>Industry or application<select name="industry" value={industry} onChange={event => setIndustry(event.target.value)}><option value="">Select if relevant</option>{industries.map(item => <option key={item.id}>{item.name}</option>)}<option>Other application</option></select></label>
    </div>
    <div className="sat-brief-preview" aria-live="polite"><h3>{offerPlanning[key][0]}</h3><p>{offerPlanning[key][1]}</p><p><strong>Enquiry context:</strong> {offer.name} · {location}{industry ? ' · '+industry : ''}</p></div>
    <div className="sat-actions"><a className="sat-button" href={contact.toString()}>Continue to Atlantis contact page</a><a className="sat-button sat-button-secondary" href={productUrl(offer)}>Review {offer.name}</a></div>
    <p className="sat-note">Your selections travel in the contact URL. Do not enter confidential information or a private address. Availability, credentials, fees and delivery format require confirmation.</p>
  </section>;
}
