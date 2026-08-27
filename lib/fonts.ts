import { JetBrains_Mono as FontMono } from "next/font/google"

// Geist (loaded in app/layout.tsx) is the sans face; Tailwind maps
// font-sans -> --font-geist-sans. Only the mono face is loaded here.
export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
