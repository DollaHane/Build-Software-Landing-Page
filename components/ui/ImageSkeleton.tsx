import React from "react"
import { Image } from "lucide-react"

export default function ImageSkeleton() {
  return (
    <div className="flex h-[200px] w-full animate-pulse justify-center rounded-lg bg-slate-300 shadow-lg">
      <Image
        className="my-auto h-1/2 w-1/2 text-slate-400"
        alt="image-skeleton"
      />
    </div>
  )
}
