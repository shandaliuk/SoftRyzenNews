/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.bbci.co.uk',
      },
    ],
  },
};

module.exports = nextConfig;
