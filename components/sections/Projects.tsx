import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import Degens from "@/components/assets/degen_mockup.png"
import Mobile from "@/components/assets/mobile_mockup.png"
import Silan from "@/components/assets/silan_mockup.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Projects({ setSelectedPage }: Props) {
  const style =
    "size-16 text-primary p-1 border-2 border-primary rounded-md bg-white shadow-lg items-center justify-center"

  return (
    <section
      id="projects"
      className="z-40 md:px-10 md:min-h-screen mx-auto bg-transparent w-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        className="flex relative mx-auto h-auto w-full p-5 md:p-10"
      >
        <h1 className="relative z-40 text-[10vw] md:text-[5vw] font-extrabold leading-tight tracking-tighter">
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500 inline-block text-transparent bg-clip-text">
            PROJECTS
          </span>
        </h1>
        <h1 className="absolute text-[10vw] md:text-[5vw] text-zinc-400 font-extrabold leading-tight tracking-tighter blur-sm dark:blur-none">
          Our <span className="inline-block">PROJECTS</span>
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10 ">
        <div className="flex flex-col w-full items-center gap-5">
          <div className="w-full">
            <Link href="https://www.silan.co.za" target="_blank">
              <Image
                src={Silan}
                alt="silan"
                className="h-full w-full rounded-2xl object-cover shadow-lg transform duration-75 hover:scale-[0.99]"
              />
            </Link>
          </div>
          <div className="w-full h-full">
            <Link href="https://www.deardegens.com" target="_blank">
              <Image
                src={Degens}
                alt="degens"
                className="h-full w-full rounded-2xl object-cover shadow-lg transform duration-75 hover:scale-[0.99]"
              />
            </Link>
          </div>
        </div>
        <div className="w-full object-cover">
          <Image
            src={Mobile}
            alt="mobile"
            className="h-full w-full rounded-2xl object-cover shadow-lg transform duration-75 hover:scale-[0.99]"
          />
        </div>
      </div>
    </section>
  )
}
