/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  // Disable server components for static export
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig
