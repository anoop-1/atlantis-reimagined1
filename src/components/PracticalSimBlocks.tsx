/**
 * Practical NDT hub sections and the shared city link block (2026-10-17, p17 practical).
 * Same data and wording as the crawler HTML from scripts/practical-ndt-simulators-2026-10.mjs
 * (hubSectionsHtml, practiseNowHtml, cityBlockHtml): src/data/practical-ndt-simulators-2026-10.mjs.
 */
import { Link } from "react-router-dom";
import { Boxes, Factory, CheckCircle, XCircle } from "lucide-react";
import {
  HUB,
  CITY_BLOCK,
  METHOD_FAMILIES,
  WORKPLACES,
  tokens,
} from "@/data/practical-ndt-simulators-2026-10.mjs";

const LINK = "text-primary underline underline-offset-2 hover:no-underline";

/** Text with [label](/path) links, rendered the same way as the crawler's inline(). */
export function SimInline({ text }: { text: string }) {
  return (
    <>
      {tokens(text).map((t, i) =>
        t.t === "link" ? (
          <Link key={i} to={t.href} className={LINK}>
            {t.label}
          </Link>
        ) : (
          <span key={i}>{t.v}</span>
        ),
      )}
    </>
  );
}

/** "Practise now" line under the hub hero (the crawler puts the same sentence after the A-scan callout). */
export function PractiseNowLine() {
  const n = HUB.practiseNow;
  return (
    <p className="mt-3 text-base" data-practical-sim="2026-10">
      <strong>{n.lead}:</strong>{" "}
      <Link to={n.href} className="font-semibold text-primary underline underline-offset-4">
        {n.label}
      </Link>
      , {n.tail}.
    </p>
  );
}

/** Method grid, workplace grid and "what an NDT simulator can and cannot do", for /practical-ndt. */
export function PracticalSimHubSections() {
  const cc = HUB.canCannot;
  return (
    <>
      <section id="by-method" className="py-16" data-practical-sim="2026-10" aria-label={HUB.methodGrid.h2}>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-3 text-center">{HUB.methodGrid.h2}</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">{HUB.methodGrid.intro}</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {METHOD_FAMILIES.map((f) => (
              <li key={f.code}>
                <Link
                  to={f.href}
                  className="flex h-full flex-col rounded-xl border border-border bg-card p-5 hover:border-primary transition"
                >
                  <span className="font-semibold text-primary">
                    {f.code}: {f.name}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1">
                    ({f.jobs} jobs): {f.note}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="by-workplace" className="py-16 bg-muted/30" data-practical-sim="2026-10" aria-label={HUB.workplaceGrid.h2}>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-3 text-center">{HUB.workplaceGrid.h2}</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">{HUB.workplaceGrid.intro}</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKPLACES.filter((w) => w.slug).map((w) => (
              <li key={w.slug}>
                <Link
                  to={`/practical-ndt/${w.slug}`}
                  className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary transition"
                >
                  <Factory className="w-6 h-6 text-primary shrink-0" />
                  <span>
                    <span className="block font-semibold text-primary">{w.name}</span>
                    <span className="block text-sm text-muted-foreground">: {w.note}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-center text-muted-foreground max-w-3xl mx-auto">
            <Boxes className="inline w-4 h-4 mr-1 -mt-0.5" />
            {HUB.workplaceGrid.others}
          </p>
        </div>
      </section>

      <section id="simulator-limits" className="py-16" data-practical-sim="2026-10" aria-label={cc.h2}>
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-center">{cc.h2}</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">{cc.intro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">{cc.canHeading}</h3>
              <ul className="space-y-2">
                {cc.can.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">{cc.cannotHeading}</h3>
              <ul className="space-y-2">
                {cc.cannot.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** 2026-10-18 (traffic): evidence and attempt-checking sections, same data as the crawler's hubEvidenceHtml(). */
export function PracticalSimEvidence() {
  const ev = HUB.evidence;
  const ck = HUB.checked;
  return (
    <>
      <section id="evidence" className="py-16" data-practical-sim="2026-10" aria-label={ev.h2}>
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center">{ev.h2}</h2>
          {ev.paras.map((x) => (
            <p key={x} className="text-muted-foreground text-lg leading-relaxed mb-4">
              <SimInline text={x} />
            </p>
          ))}
        </div>
      </section>
      <section id="attempt-check" className="py-16 bg-muted/30" data-practical-sim="2026-10" aria-label={ck.h2}>
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center">{ck.h2}</h2>
          {ck.paras.map((x) => (
            <p key={x} className="text-muted-foreground text-lg leading-relaxed mb-4">
              <SimInline text={x} />
            </p>
          ))}
          <p className="text-muted-foreground text-lg leading-relaxed mb-3">{ck.levelsIntro}</p>
          <ul className="space-y-2">
            {ck.levels.map(([k, v]) => (
              <li key={k} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">{k}:</strong> {v}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/** The one shared link block on every /practical-ndt-{city} page and practical geo hub. */
export function PracticalSimCityLinks() {
  const b = CITY_BLOCK;
  const list = (xs: [string, string][]) =>
    xs.map(([href, label], i) => (
      <span key={href}>
        {i > 0 && " · "}
        <Link to={href} className={LINK}>
          {label}
        </Link>
      </span>
    ));
  return (
    <section className="container mx-auto px-6 pb-10 max-w-4xl" data-practical-sim="2026-10" aria-label={b.h2}>
      <div className="rounded-xl border border-primary/20 bg-card p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{b.h2}</h2>
        <p className="text-muted-foreground mb-3">{b.p}</p>
        <p className="mb-2">
          <strong>Methods:</strong> {list(b.methods)}
        </p>
        <p className="mb-2">
          <strong>Workplaces:</strong> {list(b.workplaces)}
        </p>
        <p>
          <strong>Practise now:</strong>{" "}
          <Link to={b.practiseNow[0]} className={LINK}>
            {b.practiseNow[1]}
          </Link>
        </p>
      </div>
    </section>
  );
}
