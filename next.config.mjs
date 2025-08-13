/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  basePath: '/nafasy-ai.github.io', // Important!
  assetPrefix: '/nafasy-ai.github.io/', 
}

export default nextConfig
