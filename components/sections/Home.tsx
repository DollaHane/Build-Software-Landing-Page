import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/types/types"

import Background from "../sections-components/Background"
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
      className="container min-h-screen grid gap-6 pt-5 md:p-16 z-40"
    >
      <motion.div
        className="w-full z-40"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        style={{ y, opacity: o, scale: s }}
      >
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <div className="flex relative">
            <h1 className="z-40 text-[10vw] md:text-[6vw] font-extrabold leading-tight tracking-tighter">
              <span className="p-1 bg-gradient-to-r from-violet-500 via-pink-600 to-rose-500 inline-block text-transparent bg-clip-text">
                BUILD
              </span>{" "}
              software with a differance.
            </h1>
            <p className="text-[10vw] absolute blur-sm dark:blur-none md:text-[6vw] text-zinc-400 font-extrabold leading-tight tracking-tighter">
              <span className="bg-zinc-400 p-1 inline-block text-transparent bg-clip-text">
                BUILD
              </span>{" "}
              software with a differance.
            </p>
          </div>
          <h2 className="max-w-[700px] md:text-xl text-primary">
            &quot;Experience a redefined web experience that blends cutting-edge
            technology with artistic flair. We&apos;re a web application
            development studio with a mission to bring you a meaningful
            experience in the digital world.&quot;
          </h2>
        </div>
        <div className="flex gap-4">
          <AnchorLink
            className="mt-10 md:mt-16"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <Button className=" font-bold shadow-lg">DEPLOY WITH US</Button>
          </AnchorLink>
        </div>
        <div className="flex w-full text-sm md:text-base flex-wrap items-center justify-center space-x-8 mx-auto mt-10 md:mt-16">
          <h3 className="mb-5 flex h-8 md:h-10 w-auto items-center text-green-500 border border-green-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Landing Pages
          </h3>
          <h3 className="mb-5 flex h-8 md:h-10 w-auto items-center text-cyan-500 border border-cyan-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Web Applications
          </h3>
          <h3 className="mb-5 flex h-8 md:h-10 w-auto items-center text-fuchsia-500 border border-fuchsia-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Mobile Applications
          </h3>
          <h3 className="mb-5 flex h-8 md:h-10 w-auto items-center text-red-500 border border-red-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Ecommerce
          </h3>
          <h3 className="mb-5 flex h-8 md:h-10 w-auto items-center text-orange-500 border border-orange-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            SaaS
          </h3>
        </div>
      </motion.div>
      <Background />
    </section>
  )
}
