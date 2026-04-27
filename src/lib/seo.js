export const SITE_URL = "https://perfcalc.com"
export const SITE_NAME = "PerfCalc"
export const SITE_DESCRIPTION = "Professional gaming calculators for FPS, DPS, bottleneck analysis, and XP calculations. Perfect for competitive gamers and esports enthusiasts."

export const getMetadata = ({
  title,
  description,
  path = "/",
  image = `${SITE_URL}/og-image.png`,
  type = "website",
  author = "PerfCalc Team",
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Gaming Performance Calculators`
  const url = `${SITE_URL}${path}`

  return {
    title: fullTitle,
    description: description || SITE_DESCRIPTION,
    authors: [{ name: author }],
    openGraph: {
      title: fullTitle,
      description: description || SITE_DESCRIPTION,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || SITE_DESCRIPTION,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
    other: {
      "Content-Language": "en-US",
    },
  }
}

export const getStructuredData = (data) => {
  return {
    "@context": "https://schema.org",
    ...data,
  }
}

export const getOrganizationSchema = () => {
  return getStructuredData({
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://twitter.com/perfcalc",
      "https://facebook.com/perfcalc",
      "https://instagram.com/perfcalc",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Support",
      email: "support@perfcalc.com",
    },
  })
}

export const getWebsiteSchema = () => {
  return getStructuredData({
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  })
}

export const getToolSchema = (tool) => {
  return getStructuredData({
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: `${SITE_URL}${tool.path}`,
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
    },
  })
}
