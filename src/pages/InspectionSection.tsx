/**
 * /inspection section (2026-10-18, restyled 2026-10-19): landing, NDT hub, advanced/conventional
 * lists, service pages and method pages. One model for both layers:
 * src/data/inspection-section/index.mjs (copy, order, class names and icon choices). The crawler
 * HTML (scripts/inspection-section-2026-10.mjs) renders the same pages with the same classes, so
 * the prerendered paint and the React page look the same.
 *
 * Owner 2026-10-19: "maintain UI UX consistency as rest of the website" — this page uses the same
 * pieces as InspectionServices.tsx and the training pages: Navigation, gradient hero with the
 * primary + dark buttons, Card grids with an icon tile, alternating bg-muted/30 sections, the
 * themed Accordion for FAQs, the inspection RFQ wizard, the blue call-to-action band and
 * ContactDetails as the footer. No prices, no client names.
 */
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Award, CheckCircle2, ClipboardCheck, Eye, FileCheck, Gauge, Layers, MapPin, Radar, ScanSearch,
  ShieldCheck, Users, Wrench, type LucideIcon,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import InspectionRfqWizard from "@/components/InspectionRfqWizard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  GRID_COLS,
  HIGHLIGHT_ICONS,
  ICON_FOR,
  INSPECTION_REGIONS,
  QUOTE_ANCHOR,
  TALK,
  UI,
  childPages,
  inspectionBreadcrumbs,
  inspectionPage,
  inspectionSchema,
  listFor,
  type InspPage,
} from "@/data/inspection-section/index.mjs";

const ICONS: Record<string, LucideIcon> = { ScanSearch, Radar, Eye, ShieldCheck, Gauge, Users, ClipboardCheck, Wrench, Award, FileCheck, Layers };
const Icon = ({ name, className }: { name?: string; className: string }) => {
  const C = name ? ICONS[name] : undefined;
  return C ? <C className={className} aria-hidden="true" /> : null;
};

/** Hash links ("#rfq") stay plain anchors so the browser scrolls to the form. */
const Go = ({ to, className, children }: { to: string; className: string; children: React.ReactNode }) =>
  to.startsWith("#") ? <a href={to} className={className}>{children}</a> : <Link to={to} className={className}>{children}</Link>;

function Checks({ items, small }: { items: string[]; small?: boolean }) {
  return (
    <ul className={small ? "space-y-2" : UI.list}>
      {items.map((x) => (
        <li key={x} className={small ? UI.listCardItem : UI.li}>
          <CheckCircle2 className={small ? UI.checkSm : UI.check} aria-hidden="true" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

function Pills({ items }: { items: [string, string][] }) {
  return (
    <div className={UI.pillGrid}>
      {items.map(([href, label]) => (
        <Link key={href} to={href} className={UI.pill}>
          <span className={UI.pillText}>{label}</span>
          <ArrowRight className={UI.pillIcon} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

function PageBody({ page }: { page: InspPage }) {
  const crumbs = inspectionBreadcrumbs(page);
  const list = listFor(page);
  const kids = childPages(page);
  // Same alternation as the crawler HTML: every content section after the hero flips the background.
  let alt = false;
  const next = () => { const c = alt ? UI.sectionAlt : UI.section; alt = !alt; return c; };
  const triple = ([
    ["codes", "Governing codes and standards", page.codes],
    ["deliverables", "What you receive", page.deliverables],
    ["industries", "Industries served", page.industries],
  ] as [string, string, string[] | undefined][]).filter(([, , v]) => v?.length) as [string, string, string[]][];

  return (
    <>
      <motion.section className={UI.hero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className={UI.container}>
          <nav aria-label="Breadcrumb">
            <ol className={UI.crumbs}>
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === crumbs.length - 1 ? <span className="text-foreground">{c.label}</span> : <Link to={c.path} className={UI.crumbLink}>{c.label}</Link>}
                </li>
              ))}
            </ol>
          </nav>
          <motion.div className={UI.heroInner} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <p className={UI.eyebrow}>{page.eyebrow || "Inspection"}</p>
            <h1 className={UI.h1}>{page.h1}</h1>
            <p className={UI.lede}>{page.intro}</p>
            <div className={UI.ctaRow}>
              <a href={QUOTE_ANCHOR} className={UI.btnPrimary}>Request a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
              <Link to={TALK} className={UI.btnDark}>Talk to an Inspector</Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {page.highlights && (
        <section id="highlights" className={next()}>
          <div className={UI.wide}>
            <div className={UI.grid3}>
              {page.highlights.map((x, i) => (
                <div key={x.h} className={UI.card}>
                  <div className={UI.iconTile}><Icon name={HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length]} className={UI.icon} /></div>
                  <h2 className="text-lg font-semibold mb-2">{x.h}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{x.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.cards && (
        <section id="services" className={next()}>
          <div className={UI.wide}>
            <h2 className={UI.h2Center}>{page.kind === "landing" ? "Inspection services" : "Choose a service line"}</h2>
            <p className={UI.sub}>
              {page.kind === "landing"
                ? "Start with the service line, then go down to the method or scope you need."
                : "Each service line lists its methods, with a page for each one."}
            </p>
            <div className={UI.cardGrid}>
              {page.cards.map((c) => (
                <Link key={c.href} to={c.href} className={UI.linkCard}>
                  {ICON_FOR[c.href] && <div className={UI.iconTile}><Icon name={ICON_FOR[c.href]} className={UI.icon} /></div>}
                  <h3 className={UI.linkCardTitle}>{c.label}</h3>
                  <p className={UI.linkCardText}>{c.text}</p>
                  <span className={UI.linkCardMore}>Explore <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {list && (
        <section id="methods" className={next()}>
          <div className={UI.wide}>
            <h2 className={UI.h2}>{page.group === "advanced" ? "Advanced NDT methods" : "Conventional NDT methods"}</h2>
            <div className={UI.tableWrap}>
              <table className={UI.table}>
                <thead className={UI.thead}>
                  <tr><th className={UI.th}>Method</th><th className={UI.th}>What it is used for</th><th className={UI.th}>Key codes</th></tr>
                </thead>
                <tbody>
                  {list.map((m) => (
                    <tr key={m.href} className={UI.tr}>
                      <td className={UI.tdFirst}><Link to={m.href} className={UI.tdLink}>{m.label}</Link></td>
                      <td className={UI.td}>{m.text}</td>
                      <td className={UI.td}>{m.codes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {(page.sections || []).map((s) => {
        const paras = Array.isArray(s.p) ? s.p : s.p ? [s.p] : [];
        return (
          <section key={s.id} id={s.id} className={next()}>
            <div className={s.table ? UI.wide : UI.narrow}>
              <h2 className={UI.h2}>{s.h}</h2>
              {paras.map((t, i) => <p key={i} className={UI.p}>{t}</p>)}
              {s.list && <Checks items={s.list} />}
              {s.table && (
                <div className={UI.tableWrap}>
                  <table className={UI.table}>
                    <thead className={UI.thead}><tr>{s.table.head.map((c) => <th key={c} className={UI.th}>{c}</th>)}</tr></thead>
                    <tbody>
                      {s.table.rows.map((r) => (
                        <tr key={r[0]} className={UI.tr}>{r.map((c, i) => <td key={i} className={i ? UI.td : UI.tdFirst}>{c}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {triple.length > 0 && (
        <section id="scope" className={next()}>
          <div className={UI.wide}>
            <div className={`grid gap-6 ${GRID_COLS[triple.length]}`}>
              {triple.map(([id, h, items]) => (
                <div key={id} id={id} className={UI.card}>
                  <h2 className={UI.listCardTitle}>{h}</h2>
                  <Checks items={items} small />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.kind === "landing" && (
        <section id="regions" className={next()}>
          <div className={UI.wide}>
            <h2 className={UI.h2Center}>{INSPECTION_REGIONS.h2}</h2>
            <p className={UI.sub}>{INSPECTION_REGIONS.intro}</p>
            <div className={UI.cardGrid}>
              {INSPECTION_REGIONS.groups.map((g) => (
                <div key={g.name} className={UI.regionCard}>
                  <h3 className={UI.regionTitle}><MapPin className="w-4 h-4" aria-hidden="true" />{g.name}</h3>
                  <ul className={UI.regionList}>
                    {g.links.map(([href, label]) => <li key={href}><Link to={href} className={UI.regionLink}>{label}</Link></li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className={UI.regionFoot}>
              {INSPECTION_REGIONS.footnote.map(([href, label]) => (
                <Link key={href} to={href} className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                  {label} <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
                </Link>
              ))}
            </p>
          </div>
        </section>
      )}

      {page.faqs?.length ? (
        <section id="faq" className={next()}>
          <div className={UI.narrow}>
            <h2 className={UI.h2}>Frequently asked questions</h2>
            <Accordion type="single" collapsible>
              {page.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q${i + 1}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent><p className="text-muted-foreground leading-relaxed">{f.a}</p></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ) : null}

      {kids.length > 0 && (
        <section id="subpages" className={next()}>
          <div className={UI.wide}>
            <h2 className={UI.h2}>In this section</h2>
            <Pills items={kids.map((c) => [c.path, c.navLabel])} />
          </div>
        </section>
      )}

      {page.related?.length ? (
        <section id="related" className={next()}>
          <div className={UI.wide}>
            <h2 className={UI.h2}>Related</h2>
            <Pills items={page.related} />
          </div>
        </section>
      ) : null}

      <section className="py-14">
        <div className={UI.container}>
          <div className={UI.band}>
            <h2 className={UI.bandH2}>Talk to an inspection engineer</h2>
            <p className={UI.bandP}>
              Send the equipment list or drawings, the inspection you need and your timing. Quotes are prepared for each scope and region.
            </p>
            <Go to={QUOTE_ANCHOR} className={UI.btnWhite}>Request a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></Go>
          </div>
        </div>
      </section>

      <section id="enquire" className={UI.sectionAlt}>
        <div className={UI.rfqWrap}>
          <InspectionRfqWizard />
        </div>
      </section>
    </>
  );
}

export default function InspectionSection() {
  const { pathname } = useLocation();
  const page = inspectionPage(pathname) || inspectionPage("/inspection")!;
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={`https://atlantisndt.com${page.path}`}
        structuredData={inspectionSchema(page)}
      />
      <Navigation />
      <main>
        <PageBody page={page} />
      </main>
      <ContactDetails />
    </div>
  );
}
