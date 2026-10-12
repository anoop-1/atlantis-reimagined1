import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import data from '@/data/training-availability.json';
import { showsTrainingAvailability } from '@/data/training-availability.mjs';
import { usesPublishedContent } from '@/lib/published-pages';
import { useMainSlot } from '@/lib/use-main-slot';
export default function TrainingAvailabilityBlock() {
  const {pathname} = useLocation();
  const path = pathname.replace(/\/$/,'') || '/';
  const active = showsTrainingAvailability(path) && (import.meta.env.DEV || !usesPublishedContent(path));
  const slot = useMainSlot(`availability:${path}`,active);
  if (!active) return null;
  const block = <section data-training-availability className="container mx-auto max-w-5xl px-6 py-10"><div className="rounded-xl border border-primary/20 bg-card p-6">
    <h2 className="text-2xl font-bold mb-4">{data.heading}</h2><p className="mb-6">{data.intro}</p>
    <dl className="grid md:grid-cols-3 gap-6">{data.items.map(([title,text])=><div key={title}><dt className="font-semibold mb-2">{title}</dt><dd className="text-muted-foreground">{text}</dd></div>)}</dl>
    <Link to={data.ctaHref} className="inline-block mt-6 text-primary underline font-semibold">{data.ctaLabel}</Link>
  </div></section>;
  return slot ? createPortal(block,slot) : block;
}
