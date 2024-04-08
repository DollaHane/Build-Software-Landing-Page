import * as React from "react"
import Link from "next/link"
import Buidl from "@/components/assets/Buidl.png"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={Buidl} alt="logo" width={100}/>
      </Link>
      {/* {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "items-center  inline-block text-transparent bg-clip-text text-sm font-medium",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <p className="bg-transparent backdrop-filter backdrop-invert inline-block text-transparent bg-clip-text">
                    {item.title}
                  </p>
                </Link>
              )
          )}
        </nav>
      ) : null} */}
    </div>
  )
}
