import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Clique Boost | BoostConnect - Integrated Marketing System for Agents",
  description:
    "Transform your marketing with BoostConnect: AI-powered system that integrates positioning, irresistible offers, qualified traffic, and automated sales 24/7 for life insurance agents and realtors.",
  keywords: [
    "digital marketing",
    "life insurance marketing",
    "realtor marketing",
    "AI sales automation",
    "lead generation",
    "marketing agency USA",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Clique Boost | BoostConnect - Integrated Marketing System",
    description: "From 0 to 150 qualified leads in 30 days with AI-powered automation",
    type: "website",
    url: "https://cliqueboost.io",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#151515",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uje2ve9r7o");
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
