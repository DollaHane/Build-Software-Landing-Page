import React, { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/types/types"
import Buidl from "@/components/assets/Buidl.png"

import Background from "../sections-components/Background"
import { Button, buttonVariants } from "../ui/button"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage }: Props) {
  const servicesScrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: servicesScrollRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000])

  return (
    <section
      id="home"
      className="container min-h-screen grid gap-6 pt-5 md:p-16 z-40"
    >
      <motion.div
        className="w-full z-40"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        style={{ y }}
      >
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <div className="flex relative">
            <h1 className="z-40 text-[10vw] md:text-[6vw] font-extrabold leading-tight tracking-tighter">
              <span className="p-1 bg-gradient-to-r from-violet-500 via-pink-600 to-rose-500 inline-block text-transparent bg-clip-text">
                BUILD
              </span>{" "}
              with a differance.
            </h1>
            <h1 className="text-[10vw] absolute blur-sm dark:blur-none md:text-[6vw] text-zinc-400 font-extrabold leading-tight tracking-tighter">
              <span className="bg-zinc-400 p-1 inline-block text-transparent bg-clip-text">
                BUILD
              </span>{" "}
              with a differance.
            </h1>
          </div>
          <p className="max-w-[700px] text-xl text-primary">
            "Experience a redefined web experience that blends cutting-edge
            technology with artistic flair. We&apos;re a web application
            development studio with a mission to bring you a meaningful
            experience in the digital world."
          </p>
        </div>
        <div className="flex gap-4">
          <AnchorLink
            className="mt-20"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <Button className=" font-bold shadow-lg">DEPLOY WITH US</Button>
          </AnchorLink>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center space-x-8 mx-auto mt-32">
          <h1 className="mb-5 flex h-10 w-auto items-center text-green-500 border border-green-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Landing Pages
          </h1>
          <h1 className="mb-5 flex h-10 w-auto items-center text-cyan-500 border border-cyan-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Web Applications
          </h1>
          <h1 className="mb-5 flex h-10 w-auto items-center text-fuchsia-500 border border-fuchsia-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Mobile Applications
          </h1>
          <h1 className="mb-5 flex h-10 w-auto items-center text-red-500 border border-red-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            Ecommerce
          </h1>
          <h1 className="mb-5 flex h-10 w-auto items-center text-orange-500 border border-orange-500 justify-center rounded-full bg-transparent px-5 font-semibold shadow-lg">
            SaaS
          </h1>
        </div>
      </motion.div>
      <Background />
    </section>
  )
}
