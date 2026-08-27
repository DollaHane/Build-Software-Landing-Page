"use client"

import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

import { surfaceClass } from "@/config/sections"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Twitter from "@/components/assets/twitter-x.svg"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { useScrollContext } from "@/components/providers/ScrollProvider"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function SiteHeader() {
  const { headerSurface, isTop } = useScrollContext()

  return (
    <header
      className={cn(
        // Adopt the surface of whatever section is currently under the header,
        // then style entirely in tokens — correct in both global themes with
        // no colour computation and no blend modes.
        surfaceClass(headerSurface),
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-200",
        isTop
          ? "!bg-transparent border-b border-transparent"
          : "border-b border-border bg-background/70 backdrop-blur-xl"
      )}
    >
      <div className="container flex h-16 items-center gap-4">
        <MainNav />
        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80"
            href="https://api.whatsapp.com/send?phone=27604607122&text=Hey%20there%20Shane!"
            target="_blank"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="h-6 w-6" />
          </Link>
          <Link
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 sm:flex"
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Icons.facebook className="h-5 w-5" />
          </Link>
          <Link
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 sm:flex"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <Image
              src={Twitter}
              alt=""
              className="h-5 w-5 invert dark:invert-0"
            />
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
