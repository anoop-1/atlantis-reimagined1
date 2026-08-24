/**
 * Content normalisation for generated copy — 2026-08-19.
 * ─────────────────────────────────────────────────────────────────────────────
 * Agents writing prose sometimes reach for Markdown out of habit. That is fine
 * in a chat reply and wrong here: every field in a citation layer or depth page
 * is HTML-ESCAPED before it reaches the page, so `[text](/url)` renders to the
 * reader as the literal characters `[text](/url)`.
 *
 * Caught on 2026-08-19 in the industry consulting batch — 17 Markdown links
 * across three pages, including inside an answer block, which is the single
 * passage most likely to be lifted into an AI answer. Shipping that would have
 * put raw Markdown syntax in front of both readers and retrievers.
 *
 * WHY STRIP RATHER THAN CONVERT TO <a>
 *
 * Converting would mean un-escaping part of the field, which reopens the
 * injection surface the escaping exists to close, for a link the reader already
 * has: every one of these pages carries a cluster-link block with descriptive
 * anchor text pointing at the same destinations. So the link text stays as
 * prose and navigation stays in the block built for it.
 *
 * Also normalises the other Markdown that leaks in — bold, italic and inline
 * code — for the same reason: it renders as punctuation rather than emphasis.
 */

/** `[label](/href)` -> `label` */
const MD_LINK = /\[([^\]]+)\]\((?:[^)]*)\)/g;
/** `**bold**` / `__bold__` -> bold */
const MD_BOLD = /(\*\*|__)(.+?)\1/g;
/** `*italic*` / `_italic_` -> italic, without eating mid-word underscores */
const MD_ITALIC = /(^|\s)([*_])(?!\s)([^*_]+?)(?<!\s)\2(?=\s|$|[.,;:!?)])/g;
/** `` `code` `` -> code */
const MD_CODE = /`([^`]+)`/g;

export function sanitiseText(value) {
  if (typeof value !== 'string') return value;
  return value
    // MD_LINK is deliberately NOT stripped here any more.
    //
    // It used to collapse to '$1' — anchor text kept, destination discarded. That
    // silently deleted every internal link the content agents were briefed to
    // write: 148 depth pages shipped with ZERO in-body anchors, roughly 700 links
    // thrown away, on a site where internal linking is a stated priority.
    //
    // Stripping the OTHER markdown forms is still right, because bold and italic
    // render as literal asterisks once the field is HTML-escaped. A link is
    // different: it carries information the page needs. It is preserved here and
    // converted to a real anchor by the renderers, which escape the text and emit
    // the markup — see renderInline() in build-depth-pages.mjs and the same
    // treatment in DepthPage.tsx.
    .replace(MD_BOLD, '$2')
    .replace(MD_BOLD, '$2')
    .replace(MD_ITALIC, '$1$3')
    .replace(MD_CODE, '$1')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

/**
 * Walks any nested object/array and normalises every string in place.
 * Returns the number of fields actually changed, so callers can report a real
 * count rather than claiming success blindly.
 */
export function sanitiseDeep(node) {
  let changed = 0;
  const walk = (obj) => {
    if (Array.isArray(obj)) {
      obj.forEach((v, i) => {
        if (typeof v === 'string') {
          const s = sanitiseText(v);
          if (s !== v) { obj[i] = s; changed++; }
        } else if (v && typeof v === 'object') walk(v);
      });
      return;
    }
    if (!obj || typeof obj !== 'object') return;
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (typeof v === 'string') {
        const s = sanitiseText(v);
        if (s !== v) { obj[k] = s; changed++; }
      } else if (v && typeof v === 'object') walk(v);
    }
  };
  walk(node);
  return changed;
}

/** True if any Markdown link survives — used as a post-check assertion. */
/**
 * Post-check for markdown that should NOT have survived sanitising.
 *
 * Links are excluded deliberately: they are now preserved on purpose and turned
 * into anchors by the renderers. Testing for them here would reject every page
 * that carries the internal linking the content briefs ask for — which is the
 * opposite of what this check is for. What it still catches is bold, italic and
 * code spans, which render as literal asterisks and backticks once the field is
 * HTML-escaped.
 */
export function hasMarkdown(node) {
  const s = JSON.stringify(node);
  return /(\*\*|__)[^*_]+\1/.test(s) || /`[^`]+`/.test(s);
}
