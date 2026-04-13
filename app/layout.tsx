
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"


export const metadata: Metadata = {
  title: "Daniel Kurhinen - Photography & Videography Portfolio",
  description: "Cinematic videography and photography portfolio. Highlighting videos for footballers and sports.",
  keywords: ["photography", "videography", "highlight reel", "cinematic video", "filmmaker", "football", "sports editing"],
  authors: [{ name: "Daniel Kurhinen, v0.app, ChatGPT" }],
  creator: "Daniel Kurhinen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.danielkurhinen.com",
    siteName: "Daniel Kurhinen Portfolio",
    title: "Daniel Kurhinen - Photography & Videography Portfolio",
    description: "Cinematic videography and photography portfolio. Highlighting videos for footballers and sports.",
    images: [
      {
        url: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1765831828/Min%C3%A4.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Kurhinen",
      },
    ],
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JB9X58GBN0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JB9X58GBN0');
            `,
          }}
        />
  {/* Canonical URL for SEO */}
  <link rel="canonical" href="https://www.danielkurhinen.com/" />
  {/* Web App Manifest */}
  <link rel="manifest" href="/manifest.json" />
  {/* Structured Data for Schema.org */}
  <StructuredData />
  {/* Favicon for Google search */}
  <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}> 
        <Suspense fallback={null}>
            {children}
            <Analytics />
            <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
