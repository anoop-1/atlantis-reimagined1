/**
 * DecompositionTable — the mechanism that beat the salary aggregators. 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY A TABLE, SPECIFICALLY
 *
 * /blog/ndt-salary-guide-2026-global is cited by AI answer engines against
 * Salary.com, Indeed, ZipRecruiter and Glassdoor — sites with vastly greater
 * authority. It wins for one reason: the aggregators publish ONE undifferentiated
 * national average, and the Atlantis page decomposes pay along the axis the
 * asker actually cares about (certification level, then region). When a
 * retrieval system needs a segmented answer, an undifferentiated number cannot
 * supply it at any authority level.
 *
 * That is reproducible, and this component reproduces it. Every page in the
 * 90-day plan carries at least one table whose ROWS segment the answer along
 * the axis the high-authority incumbent flattens.
 *
 * IT MUST BE A REAL <table>. Not an image, not a CSS grid of divs, not an
 * SVG. Retrieval parses table semantics — <caption>, <thead>, <th scope> — and
 * a visually identical grid of divs carries none of it. The competitor audit
 * found this is where the whole category fails: across every NDT software and
 * Level III consulting competitor fetched, almost none published a real table,
 * and the one that did was winning the most commercial query in its segment.
 *
 * ACCESSIBILITY AND LAYOUT: wrapped in an overflow-x container so a wide table
 * never makes the page body scroll sideways on mobile, with scope attributes on
 * header cells so screen readers announce row/column relationships correctly.
 */
import { ReactNode } from "react";

export interface DecompositionTableProps {
  /**
   * Describes what the table segments and along which axis. Rendered as a real
   * <caption>, which is both an accessibility requirement and a retrieval cue.
   */
  caption: string;
  /** Column headers. The first is treated as the row-label column. */
  columns: string[];
  /**
   * Rows. First cell is the row header (rendered <th scope="row">), the rest
   * are data cells. ReactNode so a cell can carry a link or emphasis.
   */
  rows: (string | ReactNode)[][];
  /**
   * Optional note under the table — where the figures came from, and when.
   * Third-party figures (ASNT, AWS, API fee schedules) and industry salary
   * bands are permitted; Atlantis prices are not, under the standing rule.
   */
  note?: string;
  /** Optional id so the table can be linked to directly from an answer block. */
  id?: string;
}

export default function DecompositionTable({
  caption,
  columns,
  rows,
  note,
  id,
}: DecompositionTableProps) {
  if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
    if (rows.length < 3) {
      console.warn(`[DecompositionTable] "${caption}" has ${rows.length} rows. A table with fewer than 3 rows is not a decomposition — it is a sentence.`);
    }
    if (columns.length < 3) {
      console.warn(`[DecompositionTable] "${caption}" has ${columns.length} columns. Segment along at least two dimensions beyond the row label.`);
    }
  }

  return (
    <figure id={id} data-citation-block="table" className="my-8">
      <div className="overflow-x-auto rounded-lg border border-slate-300 dark:border-slate-700">
        <table className="w-full border-collapse text-sm">
          <caption className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 border-b border-slate-300 dark:border-slate-700">
            {caption}
          </caption>
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              {columns.map((c, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-4 py-2.5 text-left font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 ? "bg-slate-50/60 dark:bg-slate-900/40" : ""}>
                {row.map((cell, ci) =>
                  ci === 0 ? (
                    <th
                      key={ci}
                      scope="row"
                      className="px-4 py-2.5 text-left font-medium text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 align-top"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td
                      key={ci}
                      className="px-4 py-2.5 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 align-top"
                    >
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <figcaption className="mt-2 text-xs text-slate-600 dark:text-slate-400">{note}</figcaption>
      )}
    </figure>
  );
}
