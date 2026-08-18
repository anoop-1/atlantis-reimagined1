/**
 * AnswerBlock — the retrieval surface. 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * atlantisndt.com's click-through is suppressed 4-6x at EVERY position band
 * (5.68% at pos 1-3 where ~20% is normal; 1.43% at pos 6-8 where ~3.5% is).
 * Uniform suppression across the whole curve is not a titles defect — five CTR
 * waves have already shipped and the live HTML carries them. It is the
 * signature of being present-but-uncited on AI-answer SERPs, where the measured
 * gap is 2.07% CTR for a cited page against 0.94% for an uncited one on the
 * same result page. Citation roughly doubles clicks.
 *
 * The research that produced this component tested four live NDT queries and
 * found Atlantis already cited on two of them — so this is an optimisation
 * problem with a working in-house reference, not a rebuild.
 *
 * HOW RETRIEVAL ACTUALLY WORKS, AND WHAT FOLLOWS FROM IT
 *
 * One query is decomposed into 8-15 sub-queries, each retrieved separately, and
 * the retrieved unit is a PASSAGE of roughly 200-500 tokens — not a page. Page
 * authority is diluted; a single well-formed block can win on an ordinary page
 * while a 3,000-word page with no extractable block loses outright.
 *
 * So the block must be:
 *   - self-contained (resolves the query without the surrounding page)
 *   - 40-70 words for the lead, 130-165 for the expansion (measured peak)
 *   - declarative and hedge-free (pairwise LLM re-ranking drops hedged passages)
 *   - anchored to a named authority by document number (cited 2.1x more often)
 *   - US-first (fan-out incorporates location; region-ambiguous matches nothing)
 *   - present in the PRERENDERED HTML, not client-injected (URL accessibility
 *     is the highest-evidenced factor at 9.5/10)
 *
 * PLACEMENT: immediately below the <h1>, before any hero image, intro prose or
 * CTA. This component renders plain semantic HTML with no client-only logic
 * precisely so scripts/prerender.mjs emits it intact.
 *
 * This is deliberately NOT QuickAnswerBox. That component is featured-snippet
 * bait aimed at Google's classic SERP and is used across ~30 existing pages;
 * this one is aimed at passage retrieval and carries the source anchor and word
 * budgets that snippet bait does not. Both can coexist on a page.
 */
import { ReactNode } from "react";

export interface AnswerBlockProps {
  /**
   * The lead answer. 40-70 words, declarative, no hedging, resolves the head
   * query on its own. Dev builds warn when the budget is missed.
   */
  answer: string;
  /**
   * Optional 130-165 word expansion. Retrieval scores this as its own passage,
   * so it must also stand alone rather than continuing a thought from `answer`.
   */
  expansion?: string;
  /**
   * The named authority the answer rests on — a document number, edition or
   * organisation, e.g. "ASNT SNT-TC-1A (2024 edition)" or "API 653, Section 6".
   * Rendered inside the block, because inline named sources are the measured
   * 2.1x lift and a footnote elsewhere on the page does not earn it.
   */
  source?: string;
  /** Optional href for the named source. */
  sourceHref?: string;
  /** Extra content rendered inside the block, e.g. a short decomposition table. */
  children?: ReactNode;
}

const HEDGES = [
  "it depends", "varies", "generally speaking", "in most cases", "typically",
  "may vary", "could be", "might be", "roughly speaking", "more or less",
];

function wordCount(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Dev-only guardrails. These are warnings rather than thrown errors on purpose:
 * a copy problem must never take a production page down, and the CI lint
 * (scripts/lint-citation-spec.mjs) is what actually gates the build.
 */
function auditInDev({ answer, expansion, source }: AnswerBlockProps) {
  if (typeof process === "undefined" || process.env?.NODE_ENV === "production") return;
  const n = wordCount(answer);
  if (n < 40 || n > 70) {
    console.warn(`[AnswerBlock] lead answer is ${n} words; the measured citation band is 40-70. Text: "${answer.slice(0, 60)}…"`);
  }
  if (expansion) {
    const m = wordCount(expansion);
    if (m < 130 || m > 165) {
      console.warn(`[AnswerBlock] expansion is ${m} words; peak-citation passage length is 130-165.`);
    }
  }
  if (!source) {
    console.warn(`[AnswerBlock] no named source. Blocks naming an authority inline are cited ~2.1x more often.`);
  }
  const lower = `${answer} ${expansion ?? ""}`.toLowerCase();
  const found = HEDGES.filter((h) => lower.includes(h));
  if (found.length) {
    console.warn(`[AnswerBlock] hedging detected (${found.join(", ")}). Pairwise re-ranking drops hedged passages against declarative ones.`);
  }
}

export default function AnswerBlock({ answer, expansion, source, sourceHref, children }: AnswerBlockProps) {
  auditInDev({ answer, expansion, source });

  return (
    <section
      // data-attribute is how scripts/lint-citation-spec.mjs finds these blocks
      // in the built HTML without parsing React.
      data-citation-block="answer"
      aria-label="Direct answer"
      className="my-6 rounded-lg border-l-4 border-blue-700 bg-slate-50 dark:bg-slate-900/50 dark:border-blue-400 p-5 sm:p-6"
    >
      <p className="text-base sm:text-lg leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
        {answer}
      </p>

      {expansion && (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {expansion}
        </p>
      )}

      {children}

      {source && (
        <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <span className="font-semibold">Source: </span>
          {sourceHref ? (
            <a href={sourceHref} className="underline underline-offset-2" rel="noopener">
              {source}
            </a>
          ) : (
            source
          )}
        </p>
      )}
    </section>
  );
}
