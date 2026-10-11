import type { Metadata } from 'next';
import { site } from '../_satellite-data';
import Library from '../_resource-library';
export const metadata: Metadata = {
  title: { absolute: site.name + ' — Guides and working tools' },
  description: 'Browse all ' + site.name + ' guides, practical examples and working tools. Find a subject and prepare a focused technical brief.',
  alternates: { canonical: site.domain + '/resource-library' },
};
export default function Page() { return <div className="sat-home"><header className="sat-hero"><div className="sat-wrap sat-reading"><p className="sat-eyebrow">{site.name}</p><h1>Guides and working tools</h1><p className="sat-lead">Choose a subject, explore the evidence and record the questions that need a project-specific answer.</p><p className="sat-note">Published by Atlantis NDT. Educational resources do not replace governing requirements or technical review. Examples are illustrative unless explicitly supported by evidence.</p></div></header><div className="sat-wrap sat-reading sat-section"><Library /></div></div>; }
