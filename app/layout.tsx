import type React from "react"
import type { Metadata } from "next"
import { Syne, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-space" })
const syne = Syne({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-syne" })

export const metadata: Metadata = {
  title: "Madhav Vij | Growth Marketing Strategist",
  description:
    "Growth Marketing Strategist & Performance Marketer. ₹2Cr+ ad spend managed, 81,400+ leads generated, 45M+ organic views.",
  keywords:
    "marketing strategist, performance marketer, meta ads, google ads, social media manager, content creator, lead generation, madhav vij",
  authors: [{ name: "Madhav Vij" }],
  openGraph: {
    title: "Madhav Vij | Marketing Strategist & Performance Marketer",
    description: "I build brands people notice, and ads that deliver leads.",
    url: "https://madhavvij.com",
    siteName: "Madhav Vij Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madhav Vij - Marketing Strategist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhav Vij | Marketing Strategist & Performance Marketer",
    description: "I build brands people notice, and ads that deliver leads.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${syne.variable} ${spaceGrotesk.className} bg-[#030712]`}>{children}</body>
    </html>
  )
}
