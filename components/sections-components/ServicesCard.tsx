import React, { useState } from "react"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage, ServicesCardType } from "@/types/types"
import { servicesCards } from "@/lib/JSON Files/SiteContent"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card"
import ServicesCardIcon from "./ServicesCardIcon"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Animation({ setSelectedPage }: Props) {
  const [selectedCardId, setSelectedCardId] = useState<string>("")
  const [isMounted, setIsMounted] = useState<boolean>(false)

  return (
    <LayoutGroup>
      {/* CARD REF GROUP */}
      <div className="w-full md:h-4/5 mt-16 md:mt-0 flex flex-col gap-10 items-center">
        {servicesCards.map((item: ServicesCardType) => (
          <motion.div
            className="w-full pl-5 md:pl-20 flex flex-col gap-2"
            key={item.id}
            // onClick={() => {
            //   setSelectedCardId(item.id)
            //   setIsMounted(true)
            // }}
            layoutId={item.id}
          >
            <div className="flex items-center gap-6">
              {/* @ts-expect-error Server Component */}
              <ServicesCardIcon cardRef={item.ref} />
              <h1 className="text-2xl font-bold text-center cursor-pointer">
                {item.title}
              </h1>
            </div>
            <div className="flex flex-col gap-2 pl-16">
              <p className="text-sm">{item.content}</p>
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p className="text-xs top-8 text-muted-foreground z-40 cursor-pointer">
                  {"<Find out more/>"}
                </p>
              </AnchorLink>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CARD INFO ANIMATION */}
      <AnimatePresence>
        {/* {isMounted === true && (
          <motion.div
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setIsMounted(false)}
            className="absolute top-0 left-0 bottom-0 right-0 w-[100vw] h-auto bg-background/20 backdrop-blur-lg z-40"
          />
        )} */}

        {/* {servicesCards.map(
          (item: ServicesCardType, index) =>
            selectedCardId === item.id && (
              <div
                key={index}
                className="flex absolute w-4/5 md:w-1/2 mx-auto top-0 bottom-0 left-0 right-0 justify-center items-center z-50"
                onClick={() => {
                  setSelectedCardId("")
                  setIsMounted(false)
                }}
              >
                <motion.div layoutId={item.id}>
                  <Card className="relative p-0 w-full z-40 bg-background overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex z-40">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex">
                      <p className="flex z-40">{item.content}</p>
                    </CardContent>
                    <CardFooter></CardFooter>
                    <div className=" absolute bg-gradient-to-tr from-background via-background/50 to-background/0 w-full h-full top-0 left-0 z-30" />
                  </Card>
                </motion.div>
              </div>
            )
        )} */}
      </AnimatePresence>
    </LayoutGroup>
  )
}
