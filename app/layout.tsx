import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-family",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-family",
  display: "swap",
})

export const metadata: Metadata = {
  title: "G-SPARK SUMMIT 1.0 — Nigeria's Premier Tech Summit",
  description:
    "Join 2,000+ innovators, students, and industry leaders at G-SPARK SUMMIT 1.0. Showcasing talents, scaling impact across Agritech, AI/ML, and African tech. May 16, 2026 at FUNAAB, Abeokuta.",
  keywords: [
    "G-SPARK",
    "tech summit",
    "Nigeria",
    "Agritech",
    "AI/ML",
    "African tech",
    "hackathon",
    "innovation",
    "FUNAAB",
    "Abeokuta",
  ],
  openGraph: {
    title: "G-SPARK SUMMIT 1.0 — Ignite Africa's Innovation Future",
    description:
      "Nigeria's Premier Tech Summit. Join 2,000+ innovators at FUNAAB, Abeokuta on May 16, 2026.",
    type: "website",
    locale: "en_NG",
    siteName: "G-SPARK SUMMIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "G-SPARK SUMMIT 1.0 — Nigeria's Premier Tech Summit",
    description:
      "Join 2,000+ innovators, students, and industry leaders. Agritech, AI/ML, and African tech.",
  },
  icons: {
    icon: "/g-spark-logo.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
