import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Camping Nigeria - Adventure Made Simple",
  description:
    "Experience unforgettable outdoor adventures in Nigeria without the planning stress. From weekend escapes to corporate retreats, we handle everything.",
  keywords: "camping, outdoor adventures, Nigeria, corporate retreats, gear rental, team building",
  authors: [{ name: "Camping Nigeria" }],
  openGraph: {
    title: "Camping Nigeria - Adventure Made Simple",
    description: "Experience unforgettable outdoor adventures in Nigeria without the planning stress.",
    url: "https://your-domain.com",
    siteName: "Camping Nigeria",
    images: [
      {
        url: "/images/hero-camping.jpg",
        width: 1200,
        height: 630,
        alt: "Camping Nigeria - Outdoor Adventures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camping Nigeria - Adventure Made Simple",
    description: "Experience unforgettable outdoor adventures in Nigeria without the planning stress.",
    images: ["/images/hero-camping.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
