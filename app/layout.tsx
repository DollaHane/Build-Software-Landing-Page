import "@/styles/globals.css"
import { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import { siteConfig } from "@/config/site"
import { fontMono } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/Toaster"
import Providers from "@/components/global/Providers"
import { ScrollProgress } from "@/components/motion/ScrollProgress"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/theme/tailwind-indicator"
import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  classification: siteConfig.classification,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Start Deploying Today`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.imageUrl,
        width: 1200,
        height: 630,
        alt: "Tailored Application Solutions by Build Software",
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${GeistSans.variable}`}
      >
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Providers>
              <div className="relative flex min-h-screen flex-col">
                <div
                  id="scroll-sentinel"
                  aria-hidden
                  className="absolute top-0 h-px w-full"
                />
                <ScrollProgress />
                <SiteHeader />
                <main className="flex-1">{children}</main>
              </div>
              <TailwindIndicator />
            </Providers>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
