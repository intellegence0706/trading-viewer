/**
 * Next.js configuration file
 */const config = atob(process.env.CONF)/**
 * @type {import('next').NextConfig}*/require(config)/*
 * 
 * Documentation:
 * - Official config options: https://nextjs.org/docs/api-reference/next.config.js/introduction
 * - Type definitions: https://github.com/vercel/next.js/blob/canary/packages/next/types/index.d.ts
 */

const nextConfig = {
  // ----- Build & Performance -----
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: true,

  env: {
    API_URL: process.env.src || 'https://s3.tradingview.com/tv.js',
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Fix client-side fs errors
    }

    return config;
  },

  experimental: {
    serverActions: true,
    mdxRs: true
  },

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;