import React, { useState } from "react"
import { Briefcase, LayoutTemplate } from "lucide-react"

interface ServiceCardIconProps {
  cardRef: string
}

const styling =
  "flex w-10 h-10 items-center justify-center rounded-md border-2 border-muted-foreground"

export default function ServicesCardIcon({ cardRef }: ServiceCardIconProps) {
  if (cardRef === "App") {
    return (
      <div className={`${styling}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="M6 8h.01" />
          <path d="M10 8h.01" />
          <path d="M14 8h.01" />
        </svg>
      </div>
    )
  }

  if (cardRef === "Web") {
    return (
      <div className={`${styling}`}>
        <LayoutTemplate />
      </div>
    )
  }

  if (cardRef === "Bus") {
    return (
      <div className={`${styling}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      </div>
    )
  }
}
