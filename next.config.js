/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
      domains: ['rb.gy'],
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};
