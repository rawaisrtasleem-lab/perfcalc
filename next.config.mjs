/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // Turbopack configuration
  turbopack: {},
  
  // Image optimization
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ]
  },

  // Redirects for common variations
  async redirects() {
    return [
      {
        source: "/fps",
        destination: "/tools/fps-calculator",
        permanent: true,
      },
      {
        source: "/dps",
        destination: "/tools/dps-calculator",
        permanent: true,
      },
      {
        source: "/bottleneck",
        destination: "/tools/bottleneck-calculator",
        permanent: true,
      },
      {
        source: "/xp",
        destination: "/tools/xp-calculator",
        permanent: true,
      },
    ]
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
