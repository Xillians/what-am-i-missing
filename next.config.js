/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // other configurations...

  experimental: {
    // enable modern mode for smaller, faster, and more efficient production builds
    modern: true,
    // enable server components (experimental feature)
    serverComponents: true,
  },

  // export the site as static HTML
  output: 'export',
};

module.exports = nextConfig;