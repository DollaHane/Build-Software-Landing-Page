import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { servicesPage } from "@/lib/JSON Files/SiteContent"
import java from "@/components/assets/java.svg"
import angular from "@/components/assets/logo-angular-svgrepo-com.svg"
import sql from "@/components/assets/mysql-1-logo-svg-vector.svg"
import next from "@/components/assets/nextjs_icon_132160.svg"
import node from "@/components/assets/node-js-svgrepo-com.svg"
import react from "@/components/assets/react_icon_196203.svg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Services({ setSelectedPage }: Props) {
  const style =
    "size-20 md:size-28 text-primary p-1 border-2 rounded-md bg-white shadow-lg items-center justify-center"
  return (
    <section
      id="services"
      className="z-40 md:px-10 md:min-h-screen mx-auto bg-transparent w-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="flex relative mx-auto h-auto w-full p-5 md:p-10"
      >
        <h1 className="relative z-40 text-[8vw] md:text-[5vw] font-extrabold leading-tight tracking-tighter">
          Services
        </h1>
        <h1 className="absolute text-[8vw] md:text-[5vw] text-zinc-400 font-extrabold leading-tight tracking-tighter blur-sm dark:blur-none">
          Services
        </h1>
      </motion.div>

      <div className="grid h-auto grid-cols-1">
        <div className="grid h-auto grid-cols-1 md:grid-cols-2 mt-5">
          <div className="flex flex-col pl-5 md:pl-10 w-full items-center gap-5">
            <p>{servicesPage.paragraphOne}</p>
            <p>{servicesPage.paragraphTwo}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 w-full p-5 md:p-0 md:px-5">
            <Image src={next} alt="next" className={`${style}`} />
            <Image src={react} alt="react" className={`${style}`} />
            <Image src={angular} alt="angular" className={`${style}`} />
            <Image src={java} alt="java" className={`${style}`} />
            <Image src={node} alt="node" className={`${style}`} />
            <Image src={sql} alt="sql" className={`${style}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
