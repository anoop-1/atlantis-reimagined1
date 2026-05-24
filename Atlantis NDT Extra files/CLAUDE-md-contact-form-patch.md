# CLAUDE.md patch — add the contact-form protection block

The universal SEO skill (`.claude/skills/seo-atlantis/SKILL.md`, 2026-04-24) now requires every app's CLAUDE.md to carry a contact-form protection block. The current `E:\software\Atlantis\atlantis-reimagined1\CLAUDE.md` does not have one — add it as part of PR #1 of the ERP expansion.

## Where to add it

Insert a new top-level `## Contact Form Protection` section **above** `## GSC Indexing Pipeline`, so it's one of the first things any future session reads.

## Block to paste in (fill in the blanks with current wiring)

```markdown
## Contact Form Protection (mandatory pre-ship and post-ship check)

**Why this is here:** SEO is worthless if the contact form is broken. See `.claude/skills/seo-atlantis/SKILL.md` → "CONTACT-FORM PROTECTION" for the full policy. Hard rule: never refactor, rename, or delete any file on the contact-form path without explicit approval. Every SEO change requires a contact-form smoke test.

### Wiring (verify and fill in)

| Field | Value |
|---|---|
| Form route | `/contact` |
| Form component | `src/pages/Contact.tsx` *(verify — may be `src/pages/ContactUs.tsx` or similar)* |
| Submit handler | *(e.g. `/api/contact`, Resend client call, Formspree, SendGrid, Vercel Serverless Function — fill in from current code)* |
| Destination email | anu.anoop485@gmail.com *(verify this is still the current destination)* |
| Env vars (names only, never values) | *(e.g. `RESEND_API_KEY`, `SENDGRID_API_KEY`, `FORMSPREE_ID`, `SMTP_PASS`)* |
| Last end-to-end verified | *(YYYY-MM-DD — update every quarter or after any change)* |

### Pre-ship checklist for every SEO change

- [ ] Diff grep shows no unintended touches to the form component, submit handler, email template, or any env var the handler depends on.
- [ ] No new redirects in `vercel.json` / `_redirects` / `next.config.js` intercept `/contact`, the submit endpoint, or any env-loaded domain used by the mail service.
- [ ] No CSP / CORS header changes that could block the submit endpoint.
- [ ] `pnpm run prerender` still emits the form's distinctive copy in `dist/contact/index.html`.

### Post-ship checklist

- [ ] Real test submission through the live form.
- [ ] Confirmation received at destination inbox within 5 minutes.
- [ ] If not received: treat as regression, roll back the change, investigate before continuing any other SEO work.

### Quarterly audit

Every quarter, regardless of whether SEO work has touched the form path:
- [ ] Send test submission.
- [ ] Confirm receipt.
- [ ] Update "Last end-to-end verified" date above.
```

## Instructions for the next session

1. Open the repo with write access.
2. Read the current `CLAUDE.md` to confirm structure is still as documented.
3. Locate the actual contact form's wiring:
   - `grep -r "contact" src/pages/` → find the page component.
   - `grep -r "api/contact\|formspree\|resend\|sendgrid\|nodemailer" .` → find the submit handler.
   - `cat vercel.json` → look for env vars wired in.
4. Fill in the blanks in the block above with the real current values.
5. Paste the filled-in block into `CLAUDE.md` above `## GSC Indexing Pipeline`.
6. As the first action of the expansion branch, do a real contact-form smoke test and record the date as "Last end-to-end verified."
7. Commit as part of PR #1 (industry verticals).
