/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/your-repo-name" : "",
  images: {
    unoptimized: true,
  },
};
