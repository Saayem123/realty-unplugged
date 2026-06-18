/** @type {import('next').NextConfig} */

// GitHub Pages serves a project site under /<repo>. In production we set
// basePath/assetPrefix so all routes and assets resolve correctly; in dev
// the site is served from the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "realty-unplugged";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
