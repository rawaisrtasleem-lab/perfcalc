import "./globals.css"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import Script from "next/script"
import { Inter, Orbitron } from "next/font/google"

import {
  getMetadata,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/seo"


/* =========================================================
   FONTS
   Next.js downloads and self-hosts these at build time.
========================================================= */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})


/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = getMetadata({
  title: "PerfCalcPro - Gaming Performance Calculators",

  description:
    "Professional gaming calculators for FPS, DPS, bottleneck analysis, and XP calculations. Free tools for competitive gamers and esports professionals.",

  path: "/",
})


/* =========================================================
   VIEWPORT
========================================================= */

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0B0F19",
})


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({ children }) {
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebsiteSchema()

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >

      <head>

        {/* =================================================
            BASIC META
        ================================================= */}

        <meta
          name="keywords"
          content="FPS calculator, DPS calculator, bottleneck calculator, XP calculator, gaming tools, performance calculator, gaming performance"
        />

        <meta
          name="author"
          content="PerfCalcPro Team"
        />

        <meta
          name="copyright"
          content="© 2024 PerfCalcPro. All rights reserved."
        />

        <meta
          name="language"
          content="English"
        />


        {/* =================================================
            GOOGLE SITE VERIFICATION
        ================================================= */}

        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />


        {/* =================================================
            FAVICONS
        ================================================= */}

        <link
          rel="icon"
          href="/favicon.ico"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />


        {/* =================================================
            STRUCTURED DATA
        ================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

      </head>


      <body
        className={`
          ${inter.variable}
          ${orbitron.variable}
          bg-[#0B0F19]
          text-gray-200
          antialiased
        `}
      >

        {/* =================================================
            GOOGLE TAG MANAGER NOSCRIPT
        ================================================= */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3JVR2S3"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <Navbar />


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main className="w-full p-16 min-h-screen flex flex-col items-center justify-start">
          {children}
        </main>


        {/* =================================================
            FOOTER
        ================================================= */}

        <Footer />


        {/* =================================================
            GOOGLE TAG MANAGER

            lazyOnload keeps GTM away from the critical
            FCP/LCP loading path.
        ================================================= */}

        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];

                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                f.parentNode.insertBefore(j,f);

              })(window,document,'script','dataLayer','GTM-K3JVR2S3');
            `,
          }}
        />


        {/* =================================================
            GOOGLE ANALYTICS GA4

            Loaded only after the important page content.

            Measurement ID:
            G-NL3W1KDQ9N
        ================================================= */}

        <Script
          id="google-analytics-library"
          src="https://www.googletagmanager.com/gtag/js?id=G-NL3W1KDQ9N"
          strategy="lazyOnload"
        />

        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag(){
                dataLayer.push(arguments);
              }

              gtag('js', new Date());

              gtag('config', 'G-NL3W1KDQ9N', {
                send_page_view: true
              });
            `,
          }}
        />


        {/* =================================================
            MICROSOFT CLARITY

            Intentionally removed for performance.
        ================================================= */}

      </body>

    </html>
  )
}