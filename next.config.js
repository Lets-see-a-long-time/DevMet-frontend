/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {},
  images: {
    domains: ["s3://devmet-images/devmet/.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
