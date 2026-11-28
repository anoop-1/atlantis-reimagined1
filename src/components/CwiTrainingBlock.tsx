// AWS CWI section on US NDT training pages and the training hubs (owner, 2026-11-20), with an API
// 510/570/580/653 exam-prep part (owner, 2026-11-28). Same rules, copy and
// markup as scripts/cwi-us-block-2026-11.mjs injects into the crawler <main>: src/data/cwi-us-block-2026-11.mjs.
// Mounted once in App.tsx outside <Routes>; stands down on published pages, whose prerendered <main> carries it.
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { cwiBlockFor, CWI_BLOCK_CLASS as C } from "@/data/cwi-us-block-2026-11.mjs";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

export default function CwiTrainingBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? null : cwiBlockFor(path);
  const slot = useMainSlot(`cwi:${path}`, Boolean(b));
  if (!b) return null;
  const block = (
    <section data-cwi-block="2026-11" className={C.section} aria-label={b.h}>
      <div className={C.box}>
        <h2 className={C.h2}>{b.h}</h2>
        <p className={C.p}>{b.p}</p>
        <ul className={C.ul}>
          {b.links.map(([href, label]) => (
            <li key={href}>
              <Link to={href} data-cwi-link={b.kind} className={C.a}>{label}</Link>
            </li>
          ))}
        </ul>
        {b.api ? (
          <>
            <h3 className={C.h3}>{b.api.h}</h3>
            <p className={C.p}>{b.api.p}</p>
            <ul className={C.ul}>
              {b.api.links.map(([href, label]) => (
                <li key={href}>
                  <Link to={href} data-api-link={b.kind} className={C.a}>{label}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
