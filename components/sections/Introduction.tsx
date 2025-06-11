"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { servicesPage } from "@/lib/JSON Files/SiteContent"
import FigmaLaunchPng from "@/components/assets/graphics/Figma-Launch.png"

import FigmaLaunch from "../sections-components/Figma-Launch"
import OrganisationSlide from "../sections-components/OrganisationSlide"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Introduction({ setSelectedPage }: Props) {
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    // This runs only on the client after mount
    const userAgent = navigator.userAgent
    let isSafariBrowser = userAgent.includes("Safari")
    let isChromeBrowser = userAgent.includes("Chrome")

    if (isChromeBrowser && isSafariBrowser) {
      isSafariBrowser = false
    }

    setIsSafari(isSafariBrowser)
  }, [])

  return (
    <section
      id="services"
      className="z-40 md:px-10 min-h-screen mx-auto bg-transparent w-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="flex relative mx-auto h-auto w-full p-5 md:p-10"
      ></motion.div>

      <div className="px-10">
        <div className="text-[5vw] md:text-[3vw]">
          <h3>helping you</h3>
          <h3>improve your business&apos;</h3>
        </div>
        <div className="text-[12vw] lg:text-[8vw]">
          <h3 className="h-[12vw] lg:h-[8vw]">Efficiency</h3>
          <div className="flex gap-5">
            <h3>&</h3>
            <h3>Growth</h3>
          </div>
        </div>
        <div className="text-[5vw] md:text-[3vw]">
          <h3>with tailored software that</h3>
          <h3 className="flex flex-wrap gap-3">
            <span>suites your needs.</span>
          </h3>
        </div>
      </div>
      <OrganisationSlide />
      <div className="grid h-auto grid-cols-1 py-16">
        <div className="flex flex-col lg:text-xl px-10 w-full items-center gap-5 font-mono">
          <p>{servicesPage.paragraphOne}</p>
          <p>{servicesPage.paragraphTwo}</p>
        </div>
      </div>
      {isSafari ? (
        <div className="w-10/12 lg:w-2/3 mx-auto">
          <Image src={FigmaLaunchPng} alt="design-developement-deployment" />
        </div>
      ) : (
        <FigmaLaunch />
      )}
    </section>
  )
}
