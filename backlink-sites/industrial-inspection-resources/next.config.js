/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
