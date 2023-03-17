/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/1080/1440/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },

}

module.exports = nextConfig
