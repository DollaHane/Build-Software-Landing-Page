import React from "react"

import Figma from "../organisations/figma"
import Laravel from "../organisations/laravel"
import Mysql from "../organisations/mysql"
import Next from "../organisations/next"
import Node from "../organisations/node"
import ReactJS from "../organisations/react"
import Tailwind from "../organisations/tailwind"
import Wordpress from "../organisations/wordpress"
import { ProgressiveBlur } from "../ui/progressive-blur"
import { InfiniteSlider } from "../ui/progressive-blur-slide"

const logoHeight = "h-10"

export default function OrganisationSlide() {
  return (
    <div>
      <div className="relative h-[80px] w-full overflow-hidden mt-16">
        <div className="w-1/4 h-[90px] absolute flex bg-gradient-to-r from-background to-background/0 top-0 -left-2 z-20" />
        <div className="w-1/4 h-[90px] absolute flex bg-gradient-to-l from-background to-background/0 top-0 -right-2 z-20" />
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={60}
          gap={48}
        >
          <Figma height={logoHeight} />
          <Tailwind height={logoHeight} />
          <ReactJS height={logoHeight} />
          <Next height={logoHeight} />
          <Laravel height={logoHeight} />
          <Wordpress height={logoHeight} />
          <Node height={logoHeight} />
          <Mysql height={logoHeight} />
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>
      <div className="relative h-[80px] w-full overflow-hidden">
        <div className="w-1/4 h-[90px] absolute flex bg-gradient-to-r from-background to-background/0 top-0 -left-2 z-20" />
        <div className="w-1/4 h-[90px] absolute flex bg-gradient-to-l from-background to-background/0 top-0 -right-2 z-20" />
        <InfiniteSlider
          className="flex h-full w-full items-center"
          reverse={true}
          duration={60}
          gap={48}
        >
          <Mysql height={logoHeight} />
          <Node height={logoHeight} />
          <Wordpress height={logoHeight} />
          <Laravel height={logoHeight} />
          <Next height={logoHeight} />
          <ReactJS height={logoHeight} />
          <Tailwind height={logoHeight} />
          <Figma height={logoHeight} />
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </div>
  )
}
