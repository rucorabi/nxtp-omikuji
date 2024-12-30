const isProduction = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/nxtp-omikuji" : "",
};

module.exports = nextConfig;
