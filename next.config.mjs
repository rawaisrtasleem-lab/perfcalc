/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactCompiler: true,

  // Turbopack configuration
  turbopack: {},

  // Static export mein Next.js image optimization nahi chalta
  images: {
    unoptimized: true,
  },

  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;