/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Using standard <img> tags throughout; unoptimized keeps behaviour consistent
  images: { unoptimized: true },
};

module.exports = nextConfig;
