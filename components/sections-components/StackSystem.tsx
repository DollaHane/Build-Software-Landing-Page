import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface StackSystemProps {
  image: string
  alt: string
  size: string
  duration: number
  y: string
  x: string
  z: string
  delay: number
  repeatDelay: number
}

export default function StackSystem({
  image,
  alt,
  size,
  duration,
  y,
  x,
  z,
  delay,
  repeatDelay,
}: StackSystemProps) {
  const style = "size-[48px] absolute text-primary fill-red-500 p-1 border-2 rounded-full bg-white items-center justify-center z-50"
  

  const transitionRotation = {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatDelay: 0,
  }

  const imageRotation = [360, 0]
  const divRotation = [0, 360]

  return (
    <>
      <div
        className={`absolute ${size} bg-background shadow-md dark:shadow-purple-500 rounded-full border border-muted ${z}`}
      />
      <motion.div
        animate={{ rotate: divRotation }}
        transition={transitionRotation}
        className={`absolute ${size} bg-transparent rounded-full z-50`}
      >
        <motion.div
          animate={{ rotate: imageRotation }}
          transition={transitionRotation}
          className={`absolute flex ${y} ${x} size-[50px] bg-transparent overflow-hidden rounded-full items-center justify-center`}
        >
          <div className="flex relative w-full h-full z-30">
            <motion.div 
                animate={{rotate: [270, 630], opacity: [0, 1, 0]}}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: repeatDelay,
                  delay: delay
                }}
              className="flex relative bg-transparent size-full">
              <motion.div 
                className="absolute top-0 right-0 size-8 rounded-full bg-gradient-to-b from-violet-200/0 via-violet-500/70 to-purple-500"
              />
            </motion.div>
          </div>
          <Image src={image} alt={alt} className={`${style}`} />
        </motion.div>
      </motion.div>
    </>
  )
}
