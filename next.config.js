/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.postimg.cc"],
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
