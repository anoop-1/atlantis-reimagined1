import { Lightbulb } from "lucide-react";

interface QuickAnswerBoxProps {
  question?: string;
  answer: string;
  /** Optional bullet points after the answer paragraph */
  bullets?: string[];
}

/**
 * Featured-snippet-bait component.
 * Renders a 50-75 word direct answer at the top of a money page.
 * Google often extracts this as a featured snippet (position 0).
 */
export default function QuickAnswerBox({ question, answer, bullets }: QuickAnswerBoxProps) {
  return (
    <aside
      className="my-6 sm:my-8 rounded-xl border border-emerald-300/40 bg-emerald-50/60 dark:bg-emerald-950/30 dark:border-emerald-700/40 p-5 sm:p-6"
      aria-label="Quick answer"
    >
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
        <div className="flex-1">
          {question && (
            <h2 className="text-base sm:text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2 leading-snug">
              {question}
            </h2>
          )}
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed">
            {answer}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm sm:text-base text-slate-700 dark:text-slate-200">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
}
