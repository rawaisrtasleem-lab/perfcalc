import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Script from "next/script"
import { getMetadata, getOrganizationSchema, getWebsiteSchema } from "@/lib/seo"

import { Inter, Orbitron } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata = getMetadata({
  title: "PerfCalcPro - Gaming Performance Calculators",
  description: "Professional gaming calculators for FPS, DPS, bottleneck analysis, and XP calculations. Free tools for competitive gamers and esports professionals.",
  path: "/",
})

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0B0F19",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0B0F19" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="keywords" content="FPS calculator, DPS calculator, bottleneck calculator, XP calculator, gaming tools, performance calculator, gaming performance" />
        <meta name="author" content="PerfCalcPro Team" />
        <meta name="copyright" content="© 2024 PerfCalcPro. All rights reserved." />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        
        {/* Google Verification - Replace with your code */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
        
        {/* Google AdSense - Replace with your client ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics - Add your tracking ID */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NL3W1KDQ9N"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NL3W1KDQ9N');
            `,
          }}
        />
        
        {/* Microsoft Clarity - Analytics tracking */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wse10ocw54");
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} bg-[#0B0F19] text-gray-200 antialiased`}>

        <Navbar />

        <main className="w-full p-16 min-h-screen flex flex-col items-center justify-start">
          {children}
        </main>

          <Footer />

      </body>
    </html>
  )
}