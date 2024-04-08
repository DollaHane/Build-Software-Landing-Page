import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { servicesPage } from "@/lib/JSON Files/SiteContent"
import framer from "@/components/assets/framer-motion-seeklogo.svg"
import tanstack from "@/components/assets/logo-color-100w-DXLbY8RY.png"
import sql from "@/components/assets/mysql-1-logo-svg-vector.svg"
import next from "@/components/assets/nextjs_icon_132160.svg"
import react from "@/components/assets/react_icon_196203.svg"
import tailwind from "@/components/assets/tailwind_icon_131947.svg"
import vercel from "@/components/assets/vercel_logo_icon_249276.svg"
import wordpress from "@/components/assets/wordpress-round-logo-svgrepo-com.svg"

import ServicesCard from "../sections-components/ServicesCard"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Services({ setSelectedPage }: Props) {
  const style =
    "w-20 h-20 text-primary p-1 border-2 border-primary rounded-md bg-white shadow-lg"

  return (
    <section
      id="services"
      className="z-40 px-10 min-h-screen mx-auto bg-transparent h-auto w-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="flex relative mx-auto h-auto w-full  p-5 md:p-10"
      >
        <div className="flex absolute -top-28 -left-10 w-[100vw] h-96 bg-gradient-to-b from-background/0 via-background/80 to-background" />
        <h1 className="relative z-40 mt-44 text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
          WHAT&apos;S ON{" "}
          <span className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-500 inline-block text-transparent bg-clip-text">
            OFFER
          </span>
        </h1>
        <h1 className="absolute text-5xl mt-44 text-zinc-400 blur-sm dark:blur-none md:text-6xl font-extrabold leading-tight tracking-tighter">
          WHAT&apos;S ON OFFER
        </h1>
      </motion.div>

      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col pl-5 md:pl-10 w-full items-center gap-5">
          <p>{servicesPage.paragraphOne}</p>
          <p>{servicesPage.paragraphTwo}</p>
          <div className="grid grid-cols-4 gap-5 w-full mt-10">
            <Image src={vercel} alt="vercel" className={`${style}`} />
            <Image src={next} alt="next" className={`${style}`} />
            <Image src={react} alt="react" className={`${style}`} />
            <Image src={tanstack} alt="tanstack" className={`${style}`} />
            <Image src={sql} alt="sql" className={`${style}`} />
            <Image src={tailwind} alt="tailwind" className={`${style}`} />
            <Image src={framer} alt="framer" className={`${style}`} />
            <Image src={wordpress} alt="wordpress" className={`${style}`} />
          </div>
        </div>
        <div>
          <ServicesCard />
        </div>
      </div>
    </section>
  )
}
