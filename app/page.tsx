"use client"

import React, { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"

import { SelectedPage } from "@/types/types"
import ContactUs from "@/components/sections/ContactUs"
import DesignBuildGrow from "@/components/sections/DesignBuildGrow"
import Footer from "@/components/sections/Footer"
import { FreqAskedQuest } from "@/components/sections/FreqAskedQuest"
import Home from "@/components/sections/Home"
import Introduction from "@/components/sections/Introduction"

export default function IndexPage() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="items-center">
      <div className="grid w-full grid-cols-1">
        <Home setSelectedPage={setSelectedPage} />
        <Introduction setSelectedPage={setSelectedPage} />
        <DesignBuildGrow setSelectedPage={setSelectedPage} />
        <FreqAskedQuest setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </div>
  )
}
