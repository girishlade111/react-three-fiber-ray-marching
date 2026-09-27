/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. Remove basePath for root-domain deploys
  // (Vercel / Netlify / Cloudflare Pages).
  output: 'export',
  basePath: '/react-three-fiber-ray-marching',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig