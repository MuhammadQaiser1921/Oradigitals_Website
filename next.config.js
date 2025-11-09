/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Keep ESLint ignored during builds for now; fix lint issues later if needed.
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
