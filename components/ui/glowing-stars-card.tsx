import React, { useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface GlowingStartsCardProps {
  children?: React.ReactNode
}

interface StarProps {
  isGlowing: boolean
  delay: number
}
interface GlowProps {
  delay: number
}

export default function GlowingStarsCard({ children }: GlowingStartsCardProps) {
  let arr = 10
  let gridItems: any = []
  let itmW: number
  let itmH: number
  let area: number

  const element = document.getElementById("element")
  const w = element?.getBoundingClientRect().width
  const h = element?.getBoundingClientRect().height

  if (w && h) {
    area = w * h
    itmW = w / 10 / 2
    itmH = h / 10

    const itmArea = itmW * itmH
    arr = Math.round(area / itmArea)
  }

  function create() {
    ;[...Array(arr)].map((itm, idx) => {
      const obj = {
        id: idx,
        factor: Math.floor(Math.random() * 100),
        active: false,
      }
      gridItems.push(obj)
    })

    for (let i = 0; i < gridItems.length; i++) {
      if (
        gridItems[i - 1] &&
        gridItems[i - 1].active === false &&
        gridItems[i + 1] &&
        gridItems[i + 1].active === false
      ) {
        gridItems[i].active = true
      }
    }
  }
  create()

  return (
    <div
      id="element"
      className="relative w-1/2 bg-[linear-gradient(110deg,#ffffff_0.6%,#f1f1f1)] dark:bg-[linear-gradient(110deg,#333_0.6%,#222)] flex flex-wrap h-28 items-center justify-center overflow-hidden rounded-xl border border-[#eaeaea] dark:border-neutral-600"
    >
      <div className="flex w-full h-28 z-30 flex-wrap bg-white/50 backdrop-blur-3xl dark:backdrop-blur-none dark:bg-transparent">
        {gridItems.map((item: any) => {
          const isGlowing = true
          const delay = Math.floor(Math.random() * 10) * 0.1
          return (
            <div
              key={item.id}
              style={{ width: itmW, height: itmH }}
              className="relative flex items-center justify-center"
            >
              {item.factor % 2 == 0 && item.active === true && (
                <>
                  <Star delay={delay} isGlowing={isGlowing} />
                  <AnimatePresence mode="wait">
                    {isGlowing && <Glow delay={delay} />}
                  </AnimatePresence>
                </>
              )}
            </div>
          )
        })}
        <div className="absolute top-0 left-0 size-full p-2">{children}</div>
      </div>
    </div>
  )
}

const Star = ({ isGlowing, delay }: StarProps) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [0, 1, 1.2, 2.5, 2.2, 1.5, 1] : 1,
        background: isGlowing ? "#de85ff" : "#666",
      }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
      className={cn(
        "absolute bg-[#c8c8c8] dark:bg-[#666] h-[1px] w-[1px] rounded-full z-20"
      )}
    ></motion.div>
  )
}

const Glow = ({ delay }: GlowProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
        repeatDelay: delay + 5,
      }}
      exit={{
        opacity: 0,
      }}
      className="z-10 absolute h-[4px] w-[4px] rounded-full bg-purple-400/40 dark:bg-purple-500 blur-[1px] shadow-xl shadow-violet-100"
    />
  )
}
