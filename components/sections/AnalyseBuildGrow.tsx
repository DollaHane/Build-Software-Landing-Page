import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { howPage } from "@/lib/JSON Files/SiteContent"
import Wireframe from "@/components/assets/wireframe.svg"

import AnalysisAnime from "../sections-components/AnalysisAnime"
import BuildAnime from "../sections-components/BuildAnime"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function AnalyseBuildGrow({ setSelectedPage }: Props) {
  return (
    <section
      id="services"
      className="z-40 px-10 md:px-20 min-h-screen mx-auto bg-transparent w-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="flex relative mx-auto h-auto w-full p-5 md:p-10"
      ></motion.div>

      <div className="grid h-auto grid-cols-1 gap-28">
        <div className="flex flex-col w-full items-start justify-center h-auto mt-5">
          <div className="flex w-full md:w-1/2 relative flex-col pl-8 md:pl-12 text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              1
            </h3>
            <h3 className="text-[50px] w-full font-semibold z-30">Analyse:</h3>
            <p className="z-30 text-xl">{howPage.paragraphOne}</p>
          </div>
          <div className="w-1/2 relative md:h-[300px] flex items-center justify-center ">
            <div className="w-1/2 p-2 hidden md:block">
              <AnalysisAnime />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center h-auto mt-5">
          <div className="flex w-full md:w-1/2 relative flex-col pl-8 md:pl-12  text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              2
            </h3>
            <h3 className="text-[50px] w-full font-semibold z-30">Build:</h3>
            <p className="z-30 text-xl">{howPage.paragraphTwo}</p>
          </div>
          <div className="w-1/2 relative flex items-center justify-center pt-10 md:p-10">
            <div className="w-1/2 p-2">
              <BuildAnime />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-end justify-center h-auto mt-5">
          <div className="flex w-full md:w-1/2 relative flex-col pl-8 md:pl-12 text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              3
            </h3>
            <h3 className="text-[50px] w-full font-semibold z-30">Grow:</h3>
            <p className="z-30 text-xl">{howPage.paragraphThree}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
