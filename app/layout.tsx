
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"


export const metadata: Metadata = {
  title: "Daniel Kurhinen - Photography Portfolio",
  description: "Photography portfolio by Daniel Kurhinen",
  generator: "v0.app",
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
