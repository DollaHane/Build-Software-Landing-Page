import React from "react"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { servicesPage } from "@/lib/JSON Files/SiteContent"
import sql from "@/components/assets/mysql-1-logo-svg-vector.svg"
import next from "@/components/assets/nextjs_icon_132160.svg"
import node from "@/components/assets/node-js-svgrepo-com.svg"
import react from "@/components/assets/react_icon_196203.svg"
import StackSystem from "../sections-components/StackSystem"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Services({ setSelectedPage }: Props) {

  return (
    <section
      id="services"
      className="z-40 pt-40 md:px-10 min-h-screen mx-auto bg-transparent w-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="flex relative mx-auto h-auto w-full p-5 md:p-10"
      >
        <h1 className="relative z-40 text-[8vw] md:text-[5vw] font-extrabold leading-tight tracking-tighter">
          Services
        </h1>
      </motion.div>

      <div className="grid h-auto grid-cols-1">
        <div className="grid h-auto grid-cols-1 md:grid-cols-2 mt-5">
          <div className="flex flex-col pl-5 md:pl-10 w-full items-center gap-5">
            <p>{servicesPage.paragraphOne}</p>
            <p>{servicesPage.paragraphTwo}</p>
          </div>
          <div className="flex relative items-center justify-center gap-5 w-full min-h-[350px] p-5 md:p-0 md:px-5">
            <StackSystem image={next} alt="next" size="size-[310px]" duration={45} delay={5} repeatDelay={25} y="top-5" x="left-5" z="z-10"/>
            <StackSystem image={react} alt="react" size="size-[240px]" duration={25} delay={25} repeatDelay={10} y="top-3" x="right-3" z="z-20"/>
            <StackSystem image={node} alt="node" size="size-[170px]" duration={35} delay={15} repeatDelay={15} y="bottom-0" x="left-0" z="z-30"/>
            <StackSystem image={sql} alt="sql" size="size-[100px]" duration={40} delay={10} repeatDelay={30} y="-bottom-2" x="-right-2" z="z-40"/>
          </div>
        </div>
      </div>
    </section>
  )
}
