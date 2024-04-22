"use client"

import React, { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"

import { SelectedPage } from "@/types/types"
import ContactUs from "@/components/sections/ContactUs"
import Footer from "@/components/sections/Footer"
import Home from "@/components/sections/Home"
import Projects from "@/components/sections/Projects"
import Services from "@/components/sections/Services"

import Buidl from "../assets/Buidl.png"

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
        <Services setSelectedPage={setSelectedPage} />
        <Projects setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </div>
  )
}
