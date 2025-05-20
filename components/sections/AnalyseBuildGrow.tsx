import React from "react"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { howPage } from "@/lib/JSON Files/SiteContent"

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
      ></motion.div>

      {/* <div className="w-full pb-10 flex items-center justify-center ">
      </div> */}

      <div className="grid h-auto grid-cols-1 gap-28">
        <div className="flex flex-col w-full items-start justify-center h-auto mt-5">
          <div className="flex w-full lg:w-1/2 relative flex-col pl-8 lg:pl-12 text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              1
            </h3>
            <h3 className="text-[50px] w-full font-semibold z-30">Analyse:</h3>
            <p className="z-30 lg:text-xl">{howPage.paragraphOne}</p>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center h-auto mt-5">
          <div className="flex w-full lg:w-1/2 relative flex-col pl-8 lg:pl-12  text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              2
            </h3>
            <h3 className="text-[50px] w-full font-semibold z-30">Build:</h3>
            <p className="z-30 lg:text-xl">{howPage.paragraphTwo}</p>
          </div>
        </div>

        <div className="flex flex-col w-full items-end justify-center h-auto mt-5">
          <div className="flex w-full lg:w-1/2 relative flex-col pl-8 lg:pl-12 text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              3
            </h3>
            <h3 className="text-[50px] w-full font-semibold z-30">Grow:</h3>
            <p className="z-30 lg:text-xl">{howPage.paragraphThree}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
