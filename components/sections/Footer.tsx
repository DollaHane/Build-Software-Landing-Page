import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

import { NAV_SECTIONS, sectionHref } from "@/config/sections"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-contrast w-full border-t border-border">
      <div className="container flex flex-col gap-12 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Custom cloud software for small and medium businesses across South
              Africa.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={sectionHref(s.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="mailto:shane@buildsoftware.co.za"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  shane@buildsoftware.co.za
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=27604607122"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  +27 (0) 60 460 7122
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Link
                href="https://api.whatsapp.com/send?phone=27604607122"
                target="_blank"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
              >
                <FaWhatsapp className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
              >
                <Icons.facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>Copyright © {year} — buildsoftware.co.za. All rights reserved.</p>
          <a
            href="/termsandconditions"
            className="transition-colors hover:text-foreground"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
