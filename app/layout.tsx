import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "PLIMA4K | Premium IPTV Streaming Service",
  description:
    "Watch live TV, sports, movies, and series in HD & 4K. Instant activation. Worldwide access. Premium IPTV streaming made simple.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "X-UA-Compatible": "IE=edge",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' *.vercel.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https://fonts.googleapis.com https://fonts.gstatic.com; connect-src 'self' *.vercel.com"
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
