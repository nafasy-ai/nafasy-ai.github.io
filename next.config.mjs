// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   output: 'export',
//   distDir: 'out',
//   basePath: '/nafasy-ai.github.io', // Important!
//   assetPrefix: '/nafasy-ai.github.io/', 
// }

// export default nextConfig
// Detect if we're deploying to GitHub Pages
const isGithubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',
  distDir: 'out',
  basePath: isGithubPages ? '/nafasy-ai.github.io' : '',
  assetPrefix: isGithubPages ? '/nafasy-ai.github.io/' : '',
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/nafasy-ai.github.io/robots.txt', // where the file actually exists
      },
    ];
  },
};

export default nextConfig;
