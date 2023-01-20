/** @type {import('next').NextConfig} */
const withCSS = require("@zeit/next-css");

module.exports = withCSS({});

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
