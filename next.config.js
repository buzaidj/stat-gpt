/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer, dev }) {
    // Enable webassembly
    config.experiments = { asyncWebAssembly: true, layers: true };

    return config;
  },
  output: 'export',
  distDir: 'dist',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  target: 'serverless'
};
