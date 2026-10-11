import type { Metadata } from 'next';
import { site } from '../../_satellite-data';
import { growth } from '../../_growth-data';
import WorkingBrief from '../../_working-brief';
export const metadata: Metadata = {
  title: { absolute: growth.title + ' — Working brief' },
  description: 'Create a private, downloadable working brief: ' + growth.description,
  alternates: { canonical: site.domain + '/tools/' + growth.slug },
  robots: { index: false, follow: true },
};
export default function Page() { return <WorkingBrief />; }
