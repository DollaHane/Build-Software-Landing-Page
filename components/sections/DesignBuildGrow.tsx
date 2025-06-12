import React from "react"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { howPage } from "@/lib/JSON Files/SiteContent"

import Graph from "../sections-components/Graph"
import UserInterface from "../sections-components/UserInterface"
import UserInterfaceCode from "../sections-components/UserInterfaceCode"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function DesignBuildGrow({ setSelectedPage }: Props) {
  return (
    <section
      id="how-we-work"
      className="z-40 px-10 md:px-20 min-h-screen mx-auto bg-transparent w-full mt-10"
      role="region"
      aria-labelledby="how-we-work-heading"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      ></motion.div>

      <div className="grid h-auto grid-cols-1 gap-5">
        <div className="flex flex-col w-full items-start justify-center h-auto mt-5">
          <div className="flex w-full lg:w-1/2 relative flex-col pl-8 lg:pl-12 text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              1
            </h3>
            <h3
              id="software-design"
              className="text-[50px] w-full font-semibold z-30"
            >
              Design:
            </h3>
            <p className="z-30">{howPage.paragraphOne}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center justify-center h-auto">
          <div className="relative h-[300px] sm:h-[350px] lg:pr-10 flex items-start justify-center w-full">
            <div className="w-3/4 h-[500px] absolute flex bg-gradient-to-l from-background to-background/0 top-0 right-0 lg:right-8 z-30" />
            <UserInterface />
            <UserInterfaceCode />
          </div>
          <div className="flex w-full relative flex-col pl-8 lg:pl-12  text-left gap-5 mt-16 lg:mt-0">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              2
            </h3>
            <h3
              id="software-development"
              className="text-[50px] w-full font-semibold z-30"
            >
              Build:
            </h3>
            <p className="z-30">{howPage.paragraphTwo}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-start justify-center h-auto mt-16">
          <div className="flex w-full relative flex-col pl-8 lg:pl-12 text-left gap-5">
            <h3 className="absolute text-zinc-100 dark:text-zinc-700 text-[150px] font-bold z-20 -top-[95px] -left-5">
              3
            </h3>
            <h3
              id="software-deployment"
              className="text-[50px] w-full font-semibold z-30"
            >
              Grow:
            </h3>
            <p className="z-30">{howPage.paragraphThree}</p>
          </div>
          <div className=" pt-10 md:p-10 flex justify-center size-full">
            <Graph />
          </div>
        </div>
      </div>
    </section>
  )
}
