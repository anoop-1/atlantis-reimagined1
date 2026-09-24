/**
 * Generate the nginx site config for atlantisndt.com from vercel.json.
 * ─────────────────────────────────────────────────────────────────────────────
 * Written 2026-08-02 when the site moved off Vercel (deployment disabled) back
 * onto the Hostinger VPS. Every redirect and cache header that Vercel was
 * applying is declared in vercel.json; hand-copying ~60 rules into nginx is how
 * redirects silently get lost, so this derives them mechanically instead.
 *
 * 2026-09-24: now also reads vercel.json's `headers` array (previously only
 * `redirects` was read — the security-header snippet was a hand-maintained
 * file outside the repo, free to drift) and `trailingSlash: false`, as part
 * of the Vercel -> VPS primary-hosting migration. See scripts/generated/.
 *
 * Run:  node scripts/gen-nginx-config.mjs > /tmp/atlantisndt.conf
 *       (also writes scripts/generated/atlantisndt-headers.conf as a side effect —
 *       install that at /etc/nginx/snippets/atlantisndt-headers.conf on the VPS)
 *
 * Notes on the target box (148.230.122.172):
 *   - nginx has a `stream` block on :443 that SNI-routes everything except
 *     mongo.* to 127.0.0.1:4443, where the HTTP vhosts terminate TLS. A new
 *     vhost therefore listens on 127.0.0.1:4443 + [::1]:4443, NOT on :443.
 *   - /etc/nginx/conf-enabled/headers.conf sets security headers at http level.
 *     nginx `add_header` does not merge across levels: declaring one add_header
 *     in a server/location drops every inherited one. So the full header set is
 *     re-declared through a snippet included wherever headers are set.
 *   - The site is prerendered to ~5,300 dist/<route>/index.html directories.
 *     try_files serves those directly so /route does NOT 301 to /route/ —
 *     canonical tags are non-slash (CLAUDE.md 20.11). A URL that DOES arrive
 *     with a trailing slash still needs the 308-to-no-slash redirect Vercel's
 *     trailingSlash:false was providing — that's what the generated
 *     `location ~ ^(?<notrail>/.+)/$` rule (last regex location) is for.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const vercel = JSON.parse(readFileSync(resolve(__dirname, '..', 'vercel.json'), 'utf8'));

const SITE = 'https://atlantisndt.com';
const DOCROOT = '/var/www/atlantisndt.com';
const CERT = '/etc/letsencrypt/live/atlantisndt.com';
const API_PORT = 3021; // 3001 is ndt-connect's Next.js server on this box

/* ── redirect translation ─────────────────────────────────────────────────── */

const rxEscape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Translate one Vercel redirect into nginx directives.
 * Returns { kind, key, block } or null when the rule is host-scoped (handled
 * separately by the www vhost) or cannot be expressed.
 */
function translate(r) {
  const { source, destination, statusCode = 307 } = r;
  const code = statusCode;

  // Host-conditional rules (www -> apex) are emitted as their own server block.
  if (Array.isArray(r.has) && r.has.some((h) => h.type === 'host')) return null;

  const abs = (d) => (/^https?:\/\//.test(d) ? d : SITE + d);

  // 1. Enum parameter:  /ndt-consulting-:city(a|b|c)  ->  /consulting/ndt-consulting-:city
  const enumMatch = /^(.*?):([a-zA-Z]+)\(([^)]+)\)$/.exec(source);
  if (enumMatch) {
    const [, prefix, param, alts] = enumMatch;
    const rx = `^${rxEscape(prefix)}(${alts})/?$`;
    const dest = abs(destination).replace(new RegExp(`:${param}\\b`), '$1');
    return { kind: 'regex', key: rx, block: `location ~ ${rx} { return ${code} ${dest}; }` };
  }

  // 2. Email-in-path junk:  /:path*/info@:email*  and  /info@:email*
  if (source.includes('info@')) {
    if (source.startsWith('/:path*/')) {
      return {
        kind: 'regex',
        key: '^(/.+?)/info@',
        block: `location ~ ^(/.+?)/info@ { return ${code} ${SITE}$1; }`,
      };
    }
    return {
      kind: 'regex',
      key: '^/info@',
      block: `location ~ ^/info@ { return ${code} ${abs(destination)}; }`,
    };
  }

  // 3. Wildcard suffix:  /wp-admin/:path*  ->  /
  const wildMatch = /^(.*?)\/:path\*$/.exec(source);
  if (wildMatch) {
    const prefix = wildMatch[1] || '';
    const dest = abs(destination).replace('/:path*', '');
    // Cover both the bare prefix and anything beneath it.
    return {
      kind: 'regex',
      key: `^${rxEscape(prefix)}(/|$)`,
      block: `location ~ ^${rxEscape(prefix)}(/|$) { return ${code} ${dest}; }`,
    };
  }

  // 4. Plain exact path. Vercel treats /x and /x/ as distinct entries; nginx can
  //    take both with one optional-slash regex, but exact `location =` is faster
  //    and keeps the generated file readable.
  if (!source.includes(':') && !source.includes('*')) {
    return {
      kind: 'exact',
      key: source,
      block: `location = ${source} { return ${code} ${abs(destination)}; }`,
    };
  }

  return { kind: 'skip', key: source, block: `# UNTRANSLATED: ${source} -> ${destination}` };
}

const seen = new Set();
const exact = [];
const regex = [];
const skipped = [];

for (const r of vercel.redirects || []) {
  const t = translate(r);
  if (!t) continue;
  if (seen.has(t.kind + t.key)) continue;
  seen.add(t.kind + t.key);
  if (t.kind === 'exact') exact.push(t.block);
  else if (t.kind === 'regex') regex.push(t.block);
  else skipped.push(t.block);
}

// trailingSlash:false (vercel.json) — Vercel 308s any trailing-slash URL to
// the no-slash form; this site's canonical tags are the non-slash form (see
// the file header note). Must be the LAST regex location so every more
// specific redirect above (several of which already resolve their own
// optional trailing slash) keeps winning as a single hop rather than
// round-tripping through this generic rule first.
if (vercel.trailingSlash === false) {
  regex.push(
    `location ~ ^(?<notrail>/.+)/$ { return 308 $notrail$is_args$args; }`,
  );
}

/* ── security headers snippet ─────────────────────────────────────────────── */
// vercel.json's generic header rule (source: "/(.*)") was never read by this
// generator before 2026-09-24 — the VPS's /etc/nginx/snippets/atlantisndt-
// headers.conf was a hand-maintained file outside the repo, undiffed against
// vercel.json, free to silently drift. It had in fact already drifted, but in
// a safe direction: it carries 3 extra hardening headers beyond vercel.json's
// 6 (Content-Security-Policy allowing the 3D viewer's blob: workers, plus
// X-Download-Options and X-Permitted-Cross-Domain-Policies). Preserved below
// rather than dropped — vercel.json is the floor, not a ceiling.
const vercelHeaderRule = (vercel.headers || []).find((h) => h.source === '/(.*)');
const vercelHeaderLines = (vercelHeaderRule?.headers || []).map(
  (kv) => `add_header ${kv.key.padEnd(29)} "${kv.value}" always;`,
);
const vpsOnlyHardeningLines = [
  `add_header X-Download-Options                noopen always;`,
  `add_header X-Permitted-Cross-Domain-Policies  none always;`,
  `add_header Content-Security-Policy            "default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval'; worker-src 'self' blob:; child-src 'self' blob: https:; frame-ancestors 'none'" always;`,
];

const headersSnippet = `# Security headers for atlantisndt.com.
# GENERATED by scripts/gen-nginx-config.mjs — do not hand-edit.
# Install at /etc/nginx/snippets/atlantisndt-headers.conf on the VPS.
#
# The first ${vercelHeaderLines.length} headers below are read directly from vercel.json's
# generic header rule (source: "/(.*)") — that stays the floor. The last 3 are
# VPS-only hardening additions (CSP allows blob: for the 3D viewer's workers/
# wasm — @splinetool/runtime, three.js — which the box default would block).
#
# nginx does not merge add_header across levels: any add_header in a server or
# location block drops every header inherited from a parent context. This
# snippet is therefore included in every context that sets a header, so the
# full set is always present.

${vercelHeaderLines.join('\n')}
${vpsOnlyHardeningLines.join('\n')}
`;

/* ── output ───────────────────────────────────────────────────────────────── */

const ind = (lines, pad = '    ') => lines.map((l) => pad + l).join('\n');

const out = `# ═══════════════════════════════════════════════════════════════════════════
# atlantisndt.com — generated by scripts/gen-nginx-config.mjs
# Source of truth for redirects/headers is vercel.json. Regenerate, do not edit.
# Generated for docroot ${DOCROOT}
# ═══════════════════════════════════════════════════════════════════════════

# HTTP: ACME challenges stay local, everything else goes to canonical HTTPS apex.
server {
    listen 80;
    listen [::]:80;
    server_name atlantisndt.com www.atlantisndt.com;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }

    location / {
        return 301 ${SITE}$request_uri;
    }
}

# HTTPS www -> apex (replaces the host-conditional redirect in vercel.json).
server {
    listen 127.0.0.1:4443 ssl http2;
    listen [::1]:4443 ssl http2;
    server_name www.atlantisndt.com;

    ssl_certificate     ${CERT}/fullchain.pem;
    ssl_certificate_key ${CERT}/privkey.pem;

    return 301 ${SITE}$request_uri;
}

# HTTPS apex — the site.
server {
    listen 127.0.0.1:4443 ssl http2;
    listen [::1]:4443 ssl http2;
    server_name atlantisndt.com;

    ssl_certificate     ${CERT}/fullchain.pem;
    ssl_certificate_key ${CERT}/privkey.pem;

    root ${DOCROOT};

    access_log /var/log/nginx/atlantisndt.access.log;
    error_log  /var/log/nginx/atlantisndt.error.log warn;

    # The http-level cache map (conf-enabled/cache.conf) forces 1d on css/js/img.
    # Hashed build assets should be immutable instead; per-location rules below win.
    expires off;

    include /etc/nginx/snippets/atlantisndt-headers.conf;

    # ── contact form API (replaces the Vercel serverless function) ──────────
    location /api/ {
        include /etc/nginx/snippets/atlantisndt-headers.conf;
        proxy_pass http://127.0.0.1:${API_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_read_timeout 30s;
        proxy_connect_timeout 5s;
    }

    # ── redirects carried over from vercel.json ─────────────────────────────
${ind(exact)}

${ind(regex)}
${skipped.length ? '\n' + ind(skipped) + '\n' : ''}
    # ── caching ─────────────────────────────────────────────────────────────
    location ^~ /assets/ {
        include /etc/nginx/snippets/atlantisndt-headers.conf;
        add_header Cache-Control "public, max-age=31536000, immutable" always;
        try_files $uri =404;
    }

    location ~* \\.(?:js|css|woff2?|ttf|otf|eot|glb|gltf|bin|hdr|ktx2|draco)$ {
        include /etc/nginx/snippets/atlantisndt-headers.conf;
        add_header Cache-Control "public, max-age=31536000, immutable" always;
        try_files $uri =404;
    }

    location ~* \\.(?:png|jpe?g|gif|svg|webp|ico|avif)$ {
        include /etc/nginx/snippets/atlantisndt-headers.conf;
        add_header Cache-Control "public, max-age=2592000, stale-while-revalidate=86400" always;
        try_files $uri =404;
    }

    location ~* ^/sitemap.*\\.xml$ {
        include /etc/nginx/snippets/atlantisndt-headers.conf;
        add_header Cache-Control "public, max-age=3600, stale-while-revalidate=600" always;
        default_type application/xml;
        try_files $uri =404;
    }

    location = /robots.txt {
        include /etc/nginx/snippets/atlantisndt-headers.conf;
        add_header Cache-Control "public, max-age=3600" always;
        try_files $uri =404;
    }

    # ── prerendered pages + SPA fallback ────────────────────────────────────
    # dist/<route>/index.html is served directly for /route, with no 301 to
    # /route/ — the canonical tags on this site are the non-slash form.
    location / {
        include /etc/nginx/snippets/atlantisndt-headers.conf;
        add_header Cache-Control "public, max-age=0, must-revalidate" always;
        try_files $uri $uri/index.html $uri.html /index.html;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
        try_files /404/index.html /index.html;
    }
}
`;

process.stdout.write(out);

const outDir = resolve(__dirname, 'generated');
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'atlantisndt-headers.conf'), headersSnippet);

process.stderr.write(
  `redirects: ${exact.length} exact + ${regex.length} regex` +
    (skipped.length ? ` · ${skipped.length} UNTRANSLATED` : '') +
    (vercel.trailingSlash === false ? ' · trailing-slash redirect added' : '') +
    `\nheaders snippet written to scripts/generated/atlantisndt-headers.conf ` +
    `(${vercelHeaderLines.length} from vercel.json + ${vpsOnlyHardeningLines.length} VPS-only) ` +
    `— install at /etc/nginx/snippets/atlantisndt-headers.conf on the VPS\n`,
);
