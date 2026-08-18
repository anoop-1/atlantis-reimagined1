/**
 * FacetSection + AuthorByline — fan-out coverage and the credential signal.
 * 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * FACET SECTIONS
 *
 * A search query is not retrieved as one unit. AI answer engines decompose it
 * into 8-15 synthetic sub-queries — equivalents, follow-ups, generalisations,
 * specifications, canonicalisations — and run retrieval on each independently.
 * Passages that surface across several sub-queries are boosted by rank fusion.
 *
 * The consequence is arithmetic: a page answering only the head query competes
 * for 1 of ~12 retrieval slots. A page answering the head query plus its
 * predictable follow-ups competes for 5 of 12. So every page in the 90-day plan
 * carries at least SIX headings written as the literal interrogative sub-questions
 * a searcher would ask next — not noun-phrase section labels.
 *
 *   Bad:  "Certification Requirements"
 *   Good: "Can an outside agency certify my NDT employees?"
 *
 * Each facet carries its own self-contained answer, because each is scored as
 * its own passage and inherits nothing from the section above it.
 *
 * AUTHOR BYLINE
 *
 * The competitor audit found this is the largest unexploited asset Atlantis
 * holds. Across ten Level III consulting competitors, only two named a human
 * being at all; across the training segment, proof is testimonial-grade — BBB
 * badges and staff photos. Atlantis can put a named ASNT Level III with listed
 * methods against every technical page, and nobody in the category can match it
 * quickly. The direct citation lift from credentials is modest on its own; the
 * value is that it is durable and uncopyable.
 */
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface FacetSectionProps {
  /**
   * The heading, written as a question a person would actually type or say.
   * Dev builds warn if it does not read as one.
   */
  question: string;
  /**
   * Self-contained answer. Must resolve the question without the reader having
   * seen anything above it — retrieval will lift it in isolation.
   */
  answer: string;
  /** Optional supporting content: a table, a list, a worked example. */
  children?: ReactNode;
  /** Heading level. Defaults to h2; use h3 for nested facets. */
  as?: "h2" | "h3";
  /** Optional anchor id for direct linking. */
  id?: string;
}

const INTERROGATIVES = ["what", "who", "when", "where", "why", "how", "can", "do", "does", "is", "are", "should", "which", "will", "must"];

export function FacetSection({ question, answer, children, as = "h2", id }: FacetSectionProps) {
  if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
    const first = question.trim().toLowerCase().split(/\s+/)[0];
    if (!INTERROGATIVES.includes(first) && !question.includes("?")) {
      console.warn(`[FacetSection] "${question}" is not phrased as a question. Fan-out matches interrogative sub-queries; noun-phrase headings match nothing.`);
    }
  }

  const Heading = as;
  const slug = id ?? question.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

  return (
    <section data-citation-block="facet" id={slug} className="my-8 scroll-mt-24">
      <Heading className={as === "h2" ? "text-xl sm:text-2xl font-bold mb-3" : "text-lg font-bold mb-2"}>
        {question}
      </Heading>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{answer}</p>
      {children}
    </section>
  );
}

export interface AuthorBylineProps {
  /** Defaults to the founder; pass another reviewer when one exists. */
  name?: string;
  credentials?: string;
  /** ISO date the page was last technically reviewed. */
  reviewedOn?: string;
}

export function AuthorByline({
  name = "Anoop Rayavarapu",
  credentials = "ASNT NDT Level III (UT, RT, MT, PT, VT, ET) · API 653 · ISO 9001:2015 Lead Auditor",
  reviewedOn,
}: AuthorBylineProps) {
  return (
    <div
      data-citation-block="byline"
      className="my-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-slate-600 dark:text-slate-400 border-t border-b border-slate-200 dark:border-slate-800 py-3"
    >
      <span>Technically reviewed by</span>
      <Link to="/authors/anoop-rayavarapu" className="font-semibold text-slate-900 dark:text-slate-100 underline underline-offset-2">
        {name}
      </Link>
      <span className="text-slate-500 dark:text-slate-500">— {credentials}</span>
      {reviewedOn && <span className="text-slate-500 dark:text-slate-500">· Reviewed {reviewedOn}</span>}
    </div>
  );
}

export default FacetSection;
