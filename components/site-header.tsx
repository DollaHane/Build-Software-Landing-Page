import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import Twitter from "@/components/assets/twitter-x.svg"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="bg-transparent backdrop-filter backdrop-grayscale sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-5">
            <Link
              className="flex w-10 h-10 bg-white text-zinc-800 rounded-full items-center justify-center"
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
                <Icons.facebook className="h-5 w-5" />
            </Link>
            <Link
              className="flex w-10 h-10 bg-white text-zinc-800 rounded-full items-center justify-center"
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
                <Image src={Twitter} alt="X" className="w-5 h-5"/>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
