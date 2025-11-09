import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Camping Nigeria - Adventure Made Simple | Outdoor Adventures in Nigeria",
  description:
    "Experience unforgettable outdoor adventures in Nigeria without the planning stress. From weekend escapes to corporate retreats in Lagos, Abuja, and beyond. We handle everything - camping gear, guides, meals, and safety.",
  keywords:
    "camping Nigeria, outdoor adventures Nigeria, camping in Lagos, camping in Abuja, corporate retreats Nigeria, team building Nigeria, camping gear rental Nigeria, weekend getaways Nigeria, outdoor activities Nigeria, adventure tourism Nigeria, camping packages Nigeria, resort partnerships Nigeria",
  authors: [{ name: "Camping Nigeria" }],
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Camping Nigeria - Adventure Made Simple",
    description:
      "Experience unforgettable outdoor adventures in Nigeria without the planning stress. Weekend escapes, corporate retreats, and resort partnerships across Nigeria.",
    url: "https://your-domain.com",
    siteName: "Camping Nigeria",
    images: [
      {
        url: "/images/camping-nigeria-og-image.png",
        width: 1200,
        height: 1200,
        alt: "Camping Nigeria Logo - Adventure Made Simple",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camping Nigeria - Adventure Made Simple",
    description: "Experience unforgettable outdoor adventures in Nigeria without the planning stress.",
    images: ["/images/camping-nigeria-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://your-domain.com/#organization",
        name: "Camping Nigeria",
        alternateName: "Camping Nigeria - Adventure Made Simple",
        url: "https://your-domain.com",
        logo: {
          "@type": "ImageObject",
          url: "https://your-domain.com/images/camping-nigeria-logo.png",
        },
        description: "Making outdoor recreation accessible and stress-free for everyone in Nigeria",
        telephone: ["+234 704 053 8528", "+234 813 312 1484"],
        email: "campinggearsng@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abuja",
          addressCountry: "Nigeria",
        },
        sameAs: ["https://www.instagram.com/camping_ng/"],
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://your-domain.com/#localbusiness",
        name: "Camping Nigeria",
        image: "https://your-domain.com/images/camping-nigeria-logo.png",
        telephone: "+234 704 053 8528",
        email: "campinggearsng@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abuja",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 9.0765,
          longitude: 7.3986,
        },
        url: "https://your-domain.com",
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
      {
        "@type": "Service",
        "@id": "https://your-domain.com/#individual-adventures",
        serviceType: "Individual Weekend Adventure Packages",
        provider: {
          "@id": "https://your-domain.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        description:
          "Weekend escape packages perfect for individuals and young adults seeking adventure in Nigeria. Includes all camping gear, professional guides, meals, transportation, and professional photography.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://your-domain.com/#corporate-retreats",
        serviceType: "Corporate Team-Building Retreats",
        provider: {
          "@id": "https://your-domain.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        description:
          "Corporate team-building retreats in Nigeria with custom activities, leadership development workshops, complete logistics management, and branded gear for employees.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/LimitedAvailability",
        },
      },
      {
        "@type": "Service",
        "@id": "https://your-domain.com/#resort-partnerships",
        serviceType: "Resort Partnership Programs",
        provider: {
          "@id": "https://your-domain.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        description:
          "Resort partnership programs to enhance guest experiences with premium outdoor adventures. Includes co-branded experiences, gear leasing, and custom event design.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        itemReviewed: {
          "@id": "https://your-domain.com/#organization",
        },
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
