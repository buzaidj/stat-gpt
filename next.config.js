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
};
