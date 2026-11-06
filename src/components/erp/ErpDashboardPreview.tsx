/**
 * Interactive ERP dashboard preview — 2026-11-06 (owner: "include dashboard models that we
 * have or similar … very interactive and extremely modern design while maintaining brand
 * theme").
 *
 * Modelled on the real portal's Business overview (navy bar, KPI cards with a coloured left
 * edge, tabbed panels). All records come from src/data/erp-dashboard-preview-2026-11.mjs and
 * are SAMPLE DATA, labelled on screen. The crawler gets dashboardStaticHtml() from the same
 * module. No digits anywhere (ERP copy rule, CLAUDE.md §20.10): quantities are bar lengths.
 */
import { useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { AlertTriangle, CalendarClock, Check, ChevronRight, ClipboardCheck, Gauge, LayoutGrid, Users } from "lucide-react";
import {
  DASH_TABS, CERT_METHODS, CERT_ROWS, CERT_STATUS, CAL_ITEMS, CAL_STATUS, REPORT_STAGES, REPORT_CARDS,
  JOB_DAYS, JOB_CREWS, JOB_CHIPS, SALES_KPIS, SALES_MONTHS, SALES_AGEING, SALES_LINES,
} from "@/data/erp-dashboard-preview-2026-11.mjs";
import type { DashTabId } from "@/data/erp-dashboard-preview-2026-11.mjs";

type CellKey = "v" | "s" | "x" | "n";

const CELL_STYLE: Record<CellKey, string> = {
  v: "bg-emerald-500/90 hover:bg-emerald-500",
  s: "bg-amber-400 hover:bg-amber-400/90",
  x: "bg-red-500 hover:bg-red-500/90",
  n: "bg-slate-200 hover:bg-slate-300",
};
const STRIPE: Record<string, string> = {
  green: "border-l-emerald-500",
  blue: "border-l-primary",
  amber: "border-l-amber-400",
  red: "border-l-red-500",
};
const SPARK: Record<string, string> = {
  green: "stroke-emerald-500",
  blue: "stroke-primary",
  amber: "stroke-amber-500",
  red: "stroke-red-500",
};

function Sparkline({ values, tone }: { values: number[]; tone: string }) {
  const w = 96, h = 28;
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * w},${h - v * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-24" aria-hidden="true">
      <polyline points={pts} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={SPARK[tone]} />
    </svg>
  );
}

function Legend({ items }: { items: [string, string][] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
      {items.map(([cls, label]) => (
        <li key={label} className="flex items-center gap-1.5">
          <span className={`inline-block h-2.5 w-2.5 rounded-sm ${cls}`} aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  );
}

/* ── Certifications ─────────────────────────────────────────────────────── */
function CertPanel() {
  const [sel, setSel] = useState<[number, number]>([1, 2]);
  const [onlyAction, setOnlyAction] = useState(false);
  const rows = onlyAction ? CERT_ROWS.filter((r) => r.cells.some((c) => c === "s" || c === "x")) : CERT_ROWS;
  const row = CERT_ROWS[sel[0]];
  const cell = (row?.cells[sel[1]] ?? "v") as CellKey;
  const share = (k: CellKey) => CERT_ROWS.flatMap((r) => r.cells).filter((c) => c === k).length / CERT_ROWS.flatMap((r) => r.cells).filter((c) => c !== "n").length;
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_15rem]">
      <div className="min-w-0 rounded-lg border border-slate-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
          <Legend items={[["bg-emerald-500", "Valid"], ["bg-amber-400", "Expiring soon"], ["bg-red-500", "Expired"], ["bg-slate-200", "Not held"]]} />
          <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-slate-700">
            <input type="checkbox" className="h-3.5 w-3.5 accent-[hsl(var(--primary))]" checked={onlyAction} onChange={(e) => setOnlyAction(e.target.checked)} />
            Needs action only
          </label>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-1 px-2 py-2 text-xs">
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 bg-white px-2 py-1 text-left font-medium text-slate-500">Technician</th>
                {CERT_METHODS.map((m) => (
                  <th key={m} scope="col" className="px-1 py-1 text-center font-medium text-slate-500">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const ri = CERT_ROWS.indexOf(r);
                return (
                  <tr key={r.name}>
                    <th scope="row" className="sticky left-0 whitespace-nowrap bg-white px-2 py-1 text-left font-normal">
                      <span className="block font-semibold text-slate-800">{r.name}</span>
                      <span className="block text-[11px] text-slate-500">{r.level}</span>
                    </th>
                    {r.cells.map((c, ci) => {
                      const active = sel[0] === ri && sel[1] === ci;
                      return (
                        <td key={ci} className="p-0">
                          <button
                            type="button"
                            onClick={() => setSel([ri, ci])}
                            aria-pressed={active}
                            aria-label={`${r.name}, ${CERT_METHODS[ci]}: ${CERT_STATUS[c as CellKey].label}`}
                            className={`block h-7 w-full min-w-[2.25rem] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${CELL_STYLE[c as CellKey]} ${active ? "ring-2 ring-slate-900 ring-offset-1" : ""}`}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <aside className="flex flex-col gap-3" aria-live="polite">
        <div className={`rounded-lg border border-slate-200 border-l-4 bg-white p-4 ${cell === "x" ? "border-l-red-500" : cell === "s" ? "border-l-amber-400" : cell === "n" ? "border-l-slate-300" : "border-l-emerald-500"}`}>
          <p className="text-xs text-slate-500">Selected</p>
          <p className="mt-0.5 font-semibold text-slate-900">{row?.name}, {CERT_METHODS[sel[1]]}</p>
          <p className="mt-1 text-sm font-medium text-slate-700">{CERT_STATUS[cell].label}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">{CERT_STATUS[cell].note}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="mb-2 text-xs text-slate-500">Team coverage</p>
          <div className="flex h-2.5 overflow-hidden rounded-full bg-slate-100" role="img" aria-label="Most certifications valid, a few expiring, a few expired">
            <span className="bg-emerald-500" style={{ width: `${share("v") * 100}%` }} />
            <span className="bg-amber-400" style={{ width: `${share("s") * 100}%` }} />
            <span className="bg-red-500" style={{ width: `${share("x") * 100}%` }} />
          </div>
          <p className="mt-2 text-xs text-slate-600">Expired methods are flagged wherever that technician is booked.</p>
        </div>
      </aside>
    </div>
  );
}

/* ── Calibration ────────────────────────────────────────────────────────── */
function CalPanel() {
  const [lock, setLock] = useState(true);
  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
        <Legend items={[["bg-emerald-500", "In calibration"], ["bg-amber-400", "Due soon"], ["bg-red-500", "Overdue"]]} />
        <button
          type="button"
          onClick={() => setLock((v) => !v)}
          aria-pressed={lock}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${lock ? "border-primary bg-primary text-white" : "border-slate-300 bg-white text-slate-700"}`}
        >
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
          {lock ? "Warning on assignment" : "Warn on assignment"}
        </button>
      </div>
      <ul className="divide-y divide-slate-100">
        {CAL_ITEMS.map((it) => {
          const pct = Math.min(it.pos, 1) * 100;
          const tone = it.status === "over" ? "bg-red-500" : it.status === "due" ? "bg-amber-400" : "bg-emerald-500";
          return (
            <li key={it.name} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 px-4 py-2.5 sm:grid-cols-[minmax(0,14rem)_1fr_auto]">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">{it.name}</p>
                <p className="text-[11px] text-slate-500">{it.where}</p>
              </div>
              <div className="relative order-3 col-span-2 h-2 rounded-full bg-slate-100 sm:order-none sm:col-span-1" role="img" aria-label={`${it.name}: ${CAL_STATUS[it.status].label}`}>
                <span className={`absolute inset-y-0 left-0 rounded-full ${tone}`} style={{ width: `${pct}%` }} />
                {it.status === "over" && <span className="absolute inset-y-[-3px] right-0 w-1 rounded bg-red-600" />}
              </div>
              <span className="justify-self-end">
                {it.status === "over" && lock ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-700"><AlertTriangle className="h-3 w-3" aria-hidden="true" />Warns if assigned</span>
                ) : (
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${it.status === "over" ? "bg-red-50 text-red-700" : it.status === "due" ? "bg-amber-50 text-amber-800" : "bg-emerald-50 text-emerald-700"}`}>{CAL_STATUS[it.status].label}</span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="border-t border-slate-100 px-4 py-2.5 text-xs text-slate-600">
        {lock ? "Assigning a flagged instrument raises a warning until the new calibration certificate is attached." : "With warnings off, an overdue instrument goes to site unnoticed. Switch them on to see the difference."}
      </p>
    </div>
  );
}

/* ── Reports ────────────────────────────────────────────────────────────── */
function ReportsPanel() {
  const [stages, setStages] = useState<Record<string, number>>(() => Object.fromEntries(REPORT_CARDS.map((c) => [c.id, c.stage])));
  const [sel, setSel] = useState<string>("r-a");
  const selStage = stages[sel];
  const card = REPORT_CARDS.find((c) => c.id === sel);
  const actionLabel = selStage === 2 ? "Approve and issue" : selStage === 1 ? "Send for Level III review" : selStage === 0 ? "Start Level II draft" : null;
  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {REPORT_STAGES.map((st, si) => (
          <section key={st} aria-label={st} className="flex min-h-[9rem] flex-col rounded-lg border border-slate-200 bg-slate-50/70 p-2">
            <h4 className="flex items-center justify-between px-1.5 pb-2 text-xs font-semibold text-slate-600">
              {st}
              {si === 3 && <span className="font-normal text-slate-500">client notified</span>}
            </h4>
            <div className="flex flex-col gap-2">
              {REPORT_CARDS.filter((c) => stages[c.id] === si).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSel(c.id)}
                  aria-pressed={sel === c.id}
                  className={`rounded-md border bg-white p-2.5 text-left shadow-sm transition-[border-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${sel === c.id ? "border-primary ring-1 ring-primary" : "border-slate-200 hover:border-slate-300"}`}
                >
                  <span className="block text-sm font-semibold text-slate-800">{c.title}</span>
                  <span className="mt-1 flex flex-wrap gap-1 text-[11px]">
                    <span className="rounded bg-primary/10 px-1.5 py-0.5 font-medium text-primary">{c.method}</span>
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-600">{c.code}</span>
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3" aria-live="polite">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">{card?.title}</span> is at <span className="font-semibold">{REPORT_STAGES[selStage]}</span>.
          {selStage === 3 ? " Issued against the approved procedure revision, with the technician's certification attached." : ""}
        </p>
        {actionLabel && (
          <button
            type="button"
            onClick={() => setStages((s) => ({ ...s, [sel]: Math.min(s[sel] + 1, 3) }))}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {actionLabel}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Jobs ───────────────────────────────────────────────────────────────── */
function JobsPanel() {
  const [check, setCheck] = useState(true);
  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
        <p className="text-xs text-slate-600">This week</p>
        <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-slate-700">
          <input type="checkbox" className="h-3.5 w-3.5 accent-[hsl(var(--primary))]" checked={check} onChange={(e) => setCheck(e.target.checked)} />
          Show conflicts
        </label>
      </div>
      <div className="overflow-x-auto p-3">
        <div className="grid min-w-[36rem] gap-1.5" style={{ gridTemplateColumns: `7rem repeat(${JOB_DAYS.length}, minmax(0, 1fr))` }}>
          <span />
          {JOB_DAYS.map((d) => (
            <span key={d} className="px-1 pb-1 text-center text-xs font-medium text-slate-500">{d}</span>
          ))}
          {JOB_CREWS.map((crew, ci) => (
            <div key={crew} className="contents">
              <span className="flex items-center gap-1.5 self-stretch rounded-md bg-slate-50 px-2 text-xs font-semibold text-slate-700" style={{ gridColumn: 1, gridRow: ci + 2 }}>
                <Users className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />{crew}
              </span>
              {JOB_CHIPS.filter((j) => j.crew === ci).map((j) => {
                const flagged = check && j.flag;
                return (
                  <div
                    key={j.title}
                    className={`min-h-[3.5rem] rounded-md border px-2 py-1.5 text-xs ${flagged ? (j.flag === "cert" ? "border-red-300 bg-red-50" : "border-amber-300 bg-amber-50") : "border-primary/20 bg-primary/5"}`}
                    style={{ gridColumn: `${j.day + 2} / span ${j.span}`, gridRow: ci + 2 }}
                  >
                    <p className="font-semibold text-slate-800">{j.title}</p>
                    <p className="text-[11px] text-slate-600">{j.who}</p>
                    {flagged && (
                      <p className={`mt-1 flex items-start gap-1 text-[11px] font-medium ${j.flag === "cert" ? "text-red-700" : "text-amber-800"}`}>
                        <AlertTriangle className="mt-px h-3 w-3 shrink-0" aria-hidden="true" />{j.flagText}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <p className="border-t border-slate-100 px-4 py-2.5 text-xs text-slate-600" aria-live="polite">
        {check ? "Two conflicts flagged before anyone is mobilised." : "Hidden conflicts get found on site. Turn the flags back on."}
      </p>
    </div>
  );
}

/* ── Sales & cash ───────────────────────────────────────────────────────── */
function SalesPanel() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {SALES_KPIS.map((k) => (
          <div key={k.label} className={`flex items-center justify-between gap-3 rounded-lg border border-slate-200 border-l-4 bg-white px-3.5 py-3 ${STRIPE[k.tone]}`}>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-500">{k.label}</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800">{k.trend}</p>
            </div>
            <Sparkline values={k.spark} tone={k.tone} />
          </div>
        ))}
      </div>
      <div className="grid gap-3 lg:grid-cols-[3fr_2fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-slate-800">Quotations issued and confirmed</p>
            <Legend items={[["bg-primary", "Issued"], ["bg-emerald-500", "Confirmed"]]} />
          </div>
          <div className="flex h-36 items-end gap-3 border-b border-slate-200 px-1">
            {SALES_MONTHS.map((m) => (
              <button
                key={m.m}
                type="button"
                onMouseEnter={() => setHover(m.m)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(m.m)}
                onBlur={() => setHover(null)}
                aria-label={`${m.m}: issued and confirmed quotations`}
                className={`flex h-full flex-1 items-end justify-center gap-1 rounded-t focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${hover === m.m ? "bg-slate-50" : ""}`}
              >
                <span className="w-1/3 max-w-[14px] rounded-t bg-primary" style={{ height: `${m.issued * 100}%` }} />
                <span className="w-1/3 max-w-[14px] rounded-t bg-emerald-500" style={{ height: `${m.confirmed * 100}%` }} />
              </button>
            ))}
          </div>
          <div className="mt-1.5 flex gap-3 px-1 text-center text-[11px] text-slate-500">
            {SALES_MONTHS.map((m) => <span key={m.m} className="flex-1">{m.m}</span>)}
          </div>
          <p className="mt-2 min-h-[1rem] text-xs text-slate-600" aria-live="polite">
            {hover ? `${hover}: open the month to see every quotation behind both bars.` : "Hover a month to drill into its quotations."}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="mb-2.5 text-sm font-semibold text-slate-800">Open quotation ageing</p>
            <ul className="space-y-2">
              {SALES_AGEING.map((a) => (
                <li key={a.label} className="grid grid-cols-[7.5rem_1fr] items-center gap-2 text-xs text-slate-600">
                  {a.label}
                  <span className="h-2.5 rounded-full bg-slate-100"><span className="block h-full rounded-full bg-amber-400" style={{ width: `${a.v * 100}%` }} /></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="mb-2.5 text-sm font-semibold text-slate-800">Confirmed work by service line</p>
            <ul className="space-y-2">
              {SALES_LINES.map((a) => (
                <li key={a.label} className="grid grid-cols-[7.5rem_1fr] items-center gap-2 text-xs text-slate-600">
                  {a.label}
                  <span className="h-2.5 rounded-full bg-slate-100"><span className="block h-full rounded-full bg-primary" style={{ width: `${a.v * 100}%` }} /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const ICONS: Record<DashTabId, typeof Gauge> = {
  certifications: ClipboardCheck,
  calibration: Gauge,
  reports: Check,
  jobs: CalendarClock,
  sales: LayoutGrid,
};

export default function ErpDashboardPreview({ initialTab = "certifications", className = "" }: { initialTab?: DashTabId; className?: string }) {
  const [tab, setTab] = useState<DashTabId>(initialTab);
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = useMemo(() => DASH_TABS.find((t) => t.id === tab) ?? DASH_TABS[0], [tab]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = DASH_TABS.findIndex((t) => t.id === tab);
    const next = e.key === "ArrowRight" ? (i + 1) % DASH_TABS.length : e.key === "ArrowLeft" ? (i - 1 + DASH_TABS.length) % DASH_TABS.length : e.key === "Home" ? 0 : e.key === "End" ? DASH_TABS.length - 1 : -1;
    if (next < 0) return;
    e.preventDefault();
    setTab(DASH_TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_24px_60px_-28px_hsl(215_100%_20%/0.45)] ${className}`} data-erp-dashboard-preview>
      <div className="flex items-center justify-between gap-3 bg-[hsl(215_100%_18%)] px-4 py-2.5 text-white">
        <div className="flex min-w-0 items-center gap-2.5">
          <LayoutGrid className="h-4 w-4 shrink-0 opacity-80" aria-hidden="true" />
          <p className="truncate text-sm font-semibold">Atlantis NDT <span className="font-normal opacity-70">/ Dashboards / {current.title}</span></p>
        </div>
        <span className="shrink-0 rounded-full border border-white/40 px-2.5 py-0.5 text-[11px] font-medium">Sample data</span>
      </div>
      <div role="tablist" aria-label="Dashboard panels" onKeyDown={onKey} className="flex gap-1.5 overflow-x-auto border-b border-slate-200 bg-white px-3 py-2">
        {DASH_TABS.map((t, i) => {
          const Icon = ICONS[t.id];
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              id={`${uid}-tab-${t.id}`}
              aria-selected={active}
              aria-controls={`${uid}-panel`}
              tabIndex={active ? 0 : -1}
              onClick={() => setTab(t.id)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active ? "bg-primary text-white" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {t.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${tab}`} className="p-3 sm:p-4">
        <p className="mb-3 text-xs leading-relaxed text-slate-600">{current.caption}</p>
        {tab === "certifications" && <CertPanel />}
        {tab === "calibration" && <CalPanel />}
        {tab === "reports" && <ReportsPanel />}
        {tab === "jobs" && <JobsPanel />}
        {tab === "sales" && <SalesPanel />}
      </div>
    </div>
  );
}
