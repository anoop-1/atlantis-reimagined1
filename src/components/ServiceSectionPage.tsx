/**
 * Shared page for the service sections (2026-10-19): /inspection and the NDT Level III consulting
 * section. One model per section (src/data/service-section/core.mjs → createServiceSection); the
 * crawler renders the same pages with the same classes, so the prerendered paint and the React
 * page look the same.
 *
 * Owner 2026-10-19: "maintain UI UX consistency as rest of the website" — Navigation, gradient hero
 * with the primary + dark buttons, Card grids with an icon tile, alternating bg-muted/30 sections,
 * the themed Accordion for FAQs, the section's own form, the blue call-to-action band and
 * ContactDetails as the footer — the same pieces as InspectionServices.tsx and the training pages.
 */
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Award, BadgeCheck, BookOpen, Building2, CheckCircle2, ClipboardCheck, ClipboardList, Eye, FileCheck,
  FileText, Gauge, GraduationCap, Handshake, Landmark, Layers, MapPin, Radar, Scale, ScanSearch, ShieldCheck,
  Users, Wrench, type LucideIcon,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GRID_COLS, SITE, UI, type ServiceSectionModel, type SvcPage } from "@/data/service-section/core.mjs";

const ICONS: Record<string, LucideIcon> = {
  ScanSearch, Radar, Eye, ShieldCheck, Gauge, Users, ClipboardCheck, Wrench, Award, FileCheck, Layers,
  ClipboardList, Handshake, GraduationCap, FileText, Scale, BadgeCheck, BookOpen, Building2, Landmark,
};
const Icon = ({ name, className }: { name?: string; className: string }) => {
  const C = name ? ICONS[name] : undefined;
  return C ? <C className={className} aria-hidden="true" /> : null;
};

/** Hash links ("#rfq") stay plain anchors so the browser scrolls to the form. */
const Go = ({ to, className, children }: { to: string; className: string; children: ReactNode }) =>
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

function Body({ section, page, form }: { section: ServiceSectionModel; page: SvcPage; form: ReactNode }) {
  const { cfg } = section;
  const crumbs = section.breadcrumbs(page);
  const list = section.listFor(page);
  const kids = section.childPages(page);
  const cta = cfg.cta;
  // Same alternation as the crawler HTML: every content section after the hero flips the background.
  let alt = false;
  const next = () => { const c = alt ? UI.sectionAlt : UI.section; alt = !alt; return c; };
  const triple = ([
    ["codes", "Governing codes and standards", page.codes],
    ["deliverables", "What you receive", page.deliverables],
    ["industries", "Industries served", page.industries],
  ] as [string, string, string[] | undefined][]).filter(([, , v]) => v?.length) as [string, string, string[]][];
  const R = cfg.regions;

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
            <p className={UI.eyebrow}>{page.eyebrow || cfg.defaultEyebrow}</p>
            <h1 className={UI.h1}>{page.h1}</h1>
            <p className={UI.lede}>{page.intro}</p>
            <div className={UI.ctaRow}>
              <Go to={cta.primaryHref} className={UI.btnPrimary}>{cta.primaryLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" /></Go>
              <Go to={cta.secondaryHref} className={UI.btnDark}>{cta.secondaryLabel}</Go>
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
                  <div className={UI.iconTile}><Icon name={(cfg.highlightIcons || ["Award"])[i % (cfg.highlightIcons || ["Award"]).length]} className={UI.icon} /></div>
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
            <h2 className={UI.h2Center}>{section.cardsTitle(page)}</h2>
            {section.cardsSub(page) ? <p className={UI.sub}>{section.cardsSub(page)}</p> : <div className="mb-10" />}
            <div className={UI.cardGrid}>
              {page.cards.map((c) => (
                <Link key={c.href} to={c.href} className={UI.linkCard}>
                  {cfg.iconFor?.[c.href] && <div className={UI.iconTile}><Icon name={cfg.iconFor[c.href]} className={UI.icon} /></div>}
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
            <h2 className={UI.h2}>{page.listTitle || "Methods"}</h2>
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
            <div className={s.table || s.links ? UI.wide : UI.narrow}>
              <h2 className={UI.h2}>{s.h}</h2>
              {paras.map((t, i) => <p key={i} className={UI.p}>{t}</p>)}
              {s.list && <Checks items={s.list} />}
              {s.links && <Pills items={s.links} />}
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

      {R && page.kind === "landing" && (
        <section id="regions" className={next()}>
          <div className={UI.wide}>
            <h2 className={UI.h2Center}>{R.h2}</h2>
            <p className={UI.sub}>{R.intro}</p>
            <div className={UI.cardGrid}>
              {R.groups.map((g) => (
                <div key={g.name} className={UI.regionCard}>
                  <h3 className={UI.regionTitle}><MapPin className="w-4 h-4" aria-hidden="true" />{g.name}</h3>
                  <ul className={UI.regionList}>
                    {g.links.map(([href, label]) => <li key={href}><Link to={href} className={UI.regionLink}>{label}</Link></li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className={UI.regionFoot}>
              {R.footnote.map(([href, label]) => (
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
            <h2 className={UI.bandH2}>{cta.bandTitle}</h2>
            <p className={UI.bandP}>{cta.bandText}</p>
            <Go to={cta.primaryHref} className={UI.btnWhite}>{cta.primaryLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" /></Go>
          </div>
        </div>
      </section>

      <section id="enquire" className={UI.sectionAlt}>
        <div className={UI.formWrap}>
          <div id={cta.formId === "rfq" ? undefined : cta.formId} className="scroll-mt-28">{form}</div>
        </div>
      </section>
    </>
  );
}

export default function ServiceSectionPage({ section, path, form }: { section: ServiceSectionModel; path: string; form: ReactNode }) {
  const page = section.page(path) || section.page(section.cfg.rootPath)!;
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={`${SITE}${page.path}`}
        structuredData={section.schema(page)}
      />
      <Navigation />
      <main>
        <Body section={section} page={page} form={form} />
      </main>
      <ContactDetails />
    </div>
  );
}
