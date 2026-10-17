// Canadian training pages (2026-10-16; ASNT SNT-TC-1A offer added 2026-10-17).
// React side of scripts/canada-certification-2026-10.mjs; both read
// src/data/canada-certification-2026-10.json and the shared helpers in
// src/data/canada-certification-2026-10.mjs (one source per fact, CLAUDE.md §19.1).
// Renders the SNT-TC-1A offer first, then the compact CAN/CGSB-48.9712 note.
// Placed by TrainingLocationPage (after the Canada lead block), GeoHubRoute (in front
// of the hub's first <h2>) and CorporateTrainingLocationPage (after the hero).
import { Link } from "react-router-dom";
import data from "@/data/canada-certification-2026-10.json";
import { canadaPageMeta, isCanadaTrainingPath, type CanadaData, type CanadaPageMeta } from "@/data/canada-certification-2026-10.mjs";

type Tail = [string, string, string?, string?];
type Copy = CanadaData & {
  offer: {
    id: string; h2: string; intro: string;
    servicesH3: string; services: [string, string, string][];
    whoH3: string; who: [string, string][];
    forH3: string; forIntro: string; for: Tail[];
    howH3: string; how: string;
    ctaText: string; ctaHref: string; ctaAfter: string;
  };
  cert: {
    id: string; h2: string; intro: string;
    points: Tail[];
    sourcesLabel: string; sources: [string, string][];
  };
};

const C = data as unknown as Copy;

export function showsCanadaCertification(path: string) {
  return isCanadaTrainingPath(C, path);
}

/** Title, meta description and H1 for a Canadian training page (null elsewhere). */
export function canadaMeta(path: string): CanadaPageMeta | null {
  return canadaPageMeta(C, path);
}

function LinkTail({ text, href }: { text?: string; href?: string }) {
  if (!href || !text) return null;
  const external = /^https?:/.test(href);
  return (
    <>
      {" "}
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">{text}</a>
      ) : (
        <Link to={href} className="text-primary underline">{text}</Link>
      )}
      .
    </>
  );
}

export default function CanadaCertificationBlock() {
  const o = C.offer;
  const c = C.cert;
  return (
    <>
      <section
        id={o.id}
        data-canada-snt="2026-10"
        aria-labelledby={`${o.id}-h`}
        className="container mx-auto max-w-4xl px-6 py-10 scroll-mt-24"
      >
        <div className="rounded-xl border bg-card shadow-sm p-6">
          <h2 id={`${o.id}-h`} className="text-2xl md:text-3xl font-bold mb-3">{o.h2}</h2>
          <p className="text-muted-foreground mb-6">{o.intro}</p>
          <h3 className="text-xl font-semibold mb-3">{o.servicesH3}</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {o.services.map(([t, href, d]) => (
              <li key={t}>
                <strong>
                  <Link to={href} className="text-primary underline">{t}</Link>
                </strong>
                : {d}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-3">{o.whoH3}</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {o.who.map(([t, d]) => (
              <li key={t}>
                <strong>{t}.</strong> {d}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-3">{o.forH3}</h3>
          <p className="mb-3">{o.forIntro}</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {o.for.map(([t, d, lt, href]) => (
              <li key={t}>
                <strong>{t}.</strong> {d}
                <LinkTail text={lt} href={href} />
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-3">{o.howH3}</h3>
          <p className="text-muted-foreground mb-4">{o.how}</p>
          <p>
            <Link to={o.ctaHref} className="text-primary underline">
              <strong>{o.ctaText}</strong>
            </Link>
            {o.ctaAfter}
          </p>
        </div>
      </section>
      <section
        id={c.id}
        data-canada-certification="2026-10"
        aria-labelledby={`${c.id}-h`}
        className="container mx-auto max-w-4xl px-6 pb-10 scroll-mt-24"
      >
        <div className="rounded-xl border bg-card shadow-sm p-6">
          <h2 id={`${c.id}-h`} className="text-xl md:text-2xl font-bold mb-3">{c.h2}</h2>
          <p className="text-muted-foreground mb-4">{c.intro}</p>
          {c.points.map(([t, d, lt, href]) => (
            <p key={t} className="mb-4">
              <strong>{t}.</strong> {d}
              <LinkTail text={lt} href={href} />
            </p>
          ))}
          <p className="text-sm text-muted-foreground mb-2">{c.sourcesLabel}:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            {c.sources.map(([t, href]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">{t}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
