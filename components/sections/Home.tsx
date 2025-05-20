import React, { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/types/types"
import BuilDark from "@/components/assets/Build_Dark.png"
import BuildLight from "@/components/assets/Build_Light.png"

import BackgroundTwo from "../sections-components/BackgroundTwo"
import { Button } from "../ui/button"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage }: Props) {
  const servicesScrollRef = useRef(null)
  const { scrollYProgress }: any = useScroll({
    target: servicesScrollRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const o = useTransform(scrollYProgress, [0, 1], [1, -1])
  const s = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      id="home"
      className="container w-full min-h-screen grid gap-6 pt-5 md:p-16 z-40"
    >
      <motion.div
        className="w-full z-40"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        style={{ y, opacity: o, scale: s }}
      >
        <div className="flex w-full flex-col items-start gap-5 mt-5">
          <div className="flex w-full items-center justify-center md:justify-start ">
            <Image
              src={BuilDark}
              alt="build-dark"
              className="hidden dark:block"
              width={400}
            />
            <Image
              src={BuildLight}
              alt="build-light"
              className="dark:hidden"
              width={400}
            />
          </div>
          <div className="flex relative text-center md:text-left">
            <h1 className="z-40 text-[13vw] text-primary lg:text-[6vw] font-extrabold leading-tight tracking-tighter">
              <span className="p-1 bg-gradient-to-br from-violet-500 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
                software
              </span>{" "}
              solutions
            </h1>
            <p className="text-[13vw] absolute blur-sm dark:blur-md lg:text-[6vw] text-zinc-400 dark:text-zinc-800 font-extrabold leading-tight tracking-tighter">
              <span className="bg-zinc-400 dark:bg-zinc-800 p-1 inline-block text-transparent bg-clip-text">
                software
              </span>{" "}
              solutions
            </p>
          </div>
          <h2 className="max-w-[900px] min-h-16 text-xl md:text-2xl text-primary text-center md:text-left">
            Data-driven cloud solutions tailored to helping small to
            medium-sized businesses reach their full potential.
          </h2>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <AnchorLink
            className="mt-10 md:mt-16"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <Button className="font-bold shadow-lg hover:scale-[1.1]">
              DEPLOY WITH US
            </Button>
          </AnchorLink>
        </div>
      </motion.div>
      <BackgroundTwo />
    </section>
  )
}
