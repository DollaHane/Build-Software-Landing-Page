import Contact from "@/components/sections/Contact"
import { Faq } from "@/components/sections/Faq"
import Footer from "@/components/sections/Footer"
import Hero from "@/components/sections/Hero"
import Process from "@/components/sections/Process"
import Services from "@/components/sections/Services"
import Stack from "@/components/sections/Stack"
import Work from "@/components/sections/Work"

/**
 * Server component. Lenis and all scroll state live in ScrollProvider
 * (app/layout.tsx), which keeps this tree server-rendered.
 */
export default function IndexPage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Process />
      <Stack />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
