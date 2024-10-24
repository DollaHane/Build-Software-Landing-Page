"use client"

import React, {useRef} from "react"
import { cn } from "@/lib/utils"
import styles from "./TextMask.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"


export default function TextMask() {
  const servicesScrollRef = useRef(null)
  const { scrollYProgress }: any = useScroll({
    target: servicesScrollRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000])
  return (
    <div className="flex relative w-40 h-40 items-center justify-center overflow-hidden">

      <motion.div style={{x}} className="absolute flex top-5 left-[200px] w-32 h-32 bg-black dark:bg-white overflow-hidden z-0"></motion.div>

      <svg className="w-full h-full z-30 fill-black dark:fill-black rounded-lg">
        <mask id="mask" mask-type="luminance">
          <rect className="fill-white dark:fill-white " width="100%" height="100%"></rect>
          <text
            className={cn(styles.gtheading, "text-white")}
            dominant-baseline="central"
            x="50%"
            y="50%"
            text-anchor="middle"
          >
            1
          </text>
        </mask>

        <rect width="100%" height="100%" className={cn(styles.maskbg, "fill-black dark:fill-white ")}></rect>
      </svg>
    </div>
  )
}
