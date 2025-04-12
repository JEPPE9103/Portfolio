/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'your-portfolio-url.vercel.app'],
  },
}

module.exports = nextConfig 