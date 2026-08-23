# vercel.json — why each setting is there

## trailingSlash: false  (added 2026-08-17)

Added 2026-08-17. 23 URL pairs were indexed at both /path and /path/, splitting signals between them; /blog/api-653-tank-inspection-guide/ alone held 73 stranded impressions at position 38.6 while its canonical twin sat at 11.7. Both variants served 200 with a correct rel=canonical pointing at the non-slash form, but canonical is a hint and Google indexed them separately anyway. This makes it a 308 redirect instead, globally, so future routes cannot regress. The per-path slash redirects already in the redirects array below (/home/, /atlantis-ndt-contact-us/, ...) become redundant but are left in place.

## IMPORTANT: vercel.json rejects unknown keys

Vercel validates vercel.json against a strict schema and refuses any top-level property
it does not recognise. A `_comment_*` key is NOT valid and fails the deployment BEFORE the
build runs, which is why the failure shows as an immediate Error with no build log.

That is exactly what happened: the rationale above was originally stored as a
`_comment_trailingSlash` key inside vercel.json on 2026-08-17. Every deployment after it
failed, including one whose only change was regenerated sitemaps. Keep prose in this file
instead.

Valid top-level keys: buildCommand, devCommand, installCommand, ignoreCommand,
outputDirectory, framework, public, regions, functions, routes, rewrites, redirects,
headers, cleanUrls, trailingSlash, crons, images, git.
