import React from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function AnalysisAnime() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative w-64 h-8 flex justify-center items-center">
        {/* BASE NODE */}
        <div className="w-8 h-8 rounded-full flex absolute top-0 left-0 border-b border-purple-500 bg-gradient-to-br  from-zinc-50 via-zinc-100 to-zinc-200 dark:bg-gradient-to-br dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 shadow-md dark:shadow-purple-500/60 z-50" />

        {/* ANIMATED LINE FULL */}
        <motion.div
          animate={{
            width: [0, 220],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 5,
            delay: 5,
          }}
          className="w-60 h-1 absolute z-40 top-[15px] left-5 rounded-full bg-purple-500 "
        />

        {/* ANIMATED LINE HALF ONE */}
        <motion.div
          animate={{
            width: [0, 110],
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 2.5,
            delay: 0,
          }}
          className="w-40 h-1 absolute z-40 top-[15px] left-5 rounded-full bg-purple-500 "
        />

        {/* MUTED LINE */}
        <div className="w-60 h-1 absolute top-[15px] z-40 left-5 rounded-full bg-gradient-to-r from-muted/10 to-muted dark:bg-gradient-to-r dark:from-zinc-600/10 dark:to-zinc-600" />

        {/* STATIC MUTED GREEN NODE */}
        <div className="w-8 h-8 absolute top-0 left-60 left z-50  rounded-full flex bg-muted dark:bg-zinc-500 shadow-md  justify-center items-center">
          {/* GREEN NODE */}
          <motion.div
            animate={{ scale: [0, 1.3], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5.5,
              delay: 6,
            }}
            className="w-full h-full flex items-center justify-center absolute rounded-full z-50"
          >
            <Check className="flex absolute text-green-500 top-[5px]" />
          </motion.div>
          {/* GREEN NODE */}
          <motion.div
            animate={{ scale: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5.5,
              delay: 6,
            }}
            className="w-full h-full absolute rounded-full bg-gradient-to-br from-green-300 via-green-400 to-lime-400 shadow-md"
          />

          {/* MUTED NODE */}
          <motion.div
            animate={{ scale: [0, 1.1], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5.5,
              delay: 6,
            }}
            className="w-full h-full absolute rounded-full bg-muted dark:bg-zinc-700"
          />
        </div>

        {/* STATIC MUTED NODE */}
        <div className="w-8 h-8 absolute top-0 left-32 left z-50 bg-transparent  rounded-full flex justify-center items-center">
          {/* GREEN NODE */}
          <motion.div
            animate={{ scale: [0, 1.3], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2.5,
              delay: 0.4,
            }}
            className="w-full h-full flex items-center justify-center absolute rounded-full"
          >
            <X className="flex absolute text-red-500 top-[5px]" />
          </motion.div>
        </div>

        <div className="w-[400px] h-[150px] flex absolute z-30">
          <div className="w-full h-1/2 absolute flex -bottom-0 left-0 z-10 shadow-md dark:shadow-lg dark:shadow-purple-500/60 rounded-2xl" />
          <div className="w-4/12 h-full absolute flex -bottom-5 -right-5 z-30 bg-background" />
        </div>
      </div>
    </div>
  )
}
