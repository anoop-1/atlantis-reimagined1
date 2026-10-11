// 2026-10-11: redeploy trigger. The 2026-10-11 upgrade build (d21352ac) did not reach production for this site.
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
 output: 'export', images: { unoptimized: true } };
module.exports = nextConfig;