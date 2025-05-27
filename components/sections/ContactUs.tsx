"use client"

import React, { useState } from "react"
import { useForm, type FieldApi } from "@tanstack/react-form"
import { useMutation } from "@tanstack/react-query"
import { zodValidator } from "@tanstack/zod-form-adapter"
import axios from "axios"
import { motion } from "framer-motion"
import { AtSign, Contact, Loader2, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import { SelectedPage } from "@/types/types"
import {
  email,
  name,
  onChangeAsync,
  onChangeAsyncDebounceMs,
} from "@/lib/validators/formValidators"
import { EmailCreationRequest } from "@/lib/validators/resendValidator"
import { toast } from "@/hooks/use-toast"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Input } from "@/components/ui/Input"

import BackgroundBottom from "../sections-components/BackgroundBottom"
import { Button } from "../ui/button"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const dotenv = require("dotenv")
dotenv.config()

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="absolute text-xs italic text-purple-400">
          {field.state.meta.touchedErrors}
        </em>
      ) : null}
    </>
  )
}

export default function ContactUs({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)")
  const [service, setService] = useState<Array<string>>([])
  const [submitted, setSubmitted] = useState<boolean>(false)

  // TANSTACK-HOOK-FORM
  const form = useForm({
    validatorAdapter: zodValidator,
    defaultValues: {
      name: "",
      email: "",
    },
    onSubmit: async ({ value }) => {
      const payload: EmailCreationRequest = {
        name: value.name,
        email: value.email,
      }
      createEmail(payload)
      console.log("Submit Payload:", payload)
    },
  })

  const { mutate: createEmail } = useMutation({
    mutationFn: async ({ name, email }: EmailCreationRequest) => {
      const payload: EmailCreationRequest = {
        name,
        email,
      }
      await axios.post("/api/contactUs", payload)
    },
    onError: (error) => {
      form.reset()
      return toast({
        title: "Something went wrong.",
        description: `Email could not be sent. Please try again.`,
        variant: "destructive",
      })
    },
    onSuccess: () => {
      setSubmitted(true)
      form.reset()
      return toast({
        title: "Success!",
        description: "Your email has been sent successfully!",
      })
    },
  })

  //____________________________________________________________________________________________________
  // USER INTERFACE
  return (
    <section
      id="contactus"
      className="relative bg-background h-screen md:max-h-[800px] w-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto absolute top-0 w-full p-5 md:p-10 mt-32 z-40"
      >
        <h1 className="text-[8vw] lg:text-[5vw] text-center leading-tight tracking-tighter z-50">
          Start{" "}
          <span className="bg-gradient-to-br pr-2 font-semibold from-violet-400 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            shipping
          </span>{" "}
          today
        </h1>

        {/* ---------- FORM ---------- */}
        <div className="w-full flex flex-col items-center justify-center mt-10 px-2 md:px-10 lg:mt-16">
          <motion.div
            initial="hidden"
            className="w-full lg:w-1/2"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              onSubmit={(event) => {
                event.preventDefault()
                event.stopPropagation()
                void form.handleSubmit()
              }}
              className="bg-backgroundTwo/10 w-full border border-transparent dark:border-zinc-700 text-zinc-50 font-mono text-xl pt-0 p-2 rounded-xl shadow-md dark:shadow-lg"
            >
              <div className="flex gap-2 p-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="grid grid-cols-1 w-full text-sm gap-10 md:gap-5 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-600 p-3 rounded-md">
                <p>user@buildsoftware-MBP ~ %</p>
                <form.Field
                  name="name"
                  validators={{
                    onChange: name,
                    onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                    onChangeAsync: onChangeAsync,
                  }}
                >
                  {(field) => (
                    <div className="flex">
                      <p className="w-20 flex items-center">Name:</p>
                      <div className="relative w-full flex-col">
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="/"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full lg:text-lg"
                          required
                        />
                        <FieldInfo field={field} />
                      </div>
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="email"
                  validators={{
                    onChange: email,
                    onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                    onChangeAsync: onChangeAsync,
                  }}
                >
                  {(field) => (
                    <div className="flex">
                      <p className="w-20 flex items-center">Email:</p>
                      <div className="relative w-full flex-col">
                        <Input
                          type="email"
                          id={field.name}
                          name={field.name}
                          placeholder="/"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full lg:text-lg"
                          required
                        />
                        <FieldInfo field={field} />
                      </div>
                    </div>
                  )}
                </form.Field>
                <form.Subscribe
                  // @ts-ignore
                  selector={(state) => [
                    state.canSubmit,
                    state.isSubmitting,
                    state.isSubmitted,
                    state.errors,
                  ]}
                >
                  {/* @ts-ignore */}
                  {([canSubmit, isSubmitting]) => (
                    <Button
                      type="submit"
                      variant="outline"
                      disabled={!canSubmit}
                      className="flex w-10 h-10 relative font-bold items-center justify-center bg-zinc-100 text-zinc-800 border-none transition duration-200 hover:scale-[0.95]"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-6 w-6 animate-spin transition duration-200 hover:scale-[0.95]" />
                      ) : (
                        <Send className="flex absolute h-6 w-6 transition duration-200 hover:scale-[0.95]" />
                      )}
                    </Button>
                  )}
                </form.Subscribe>
              </div>
            </form>
          </motion.div>
          <div className="w-full lg:w-full max-w-[650px] grid grid-cols-1 lg:grid-cols-3 text-sm md:text-base mt-10 lg:mt-16 gap-3">
            <div className="flex gap-2 items-center">
              <div className="relative flex w-6 h-6 items-center justify-center">
                <Contact className="w-6 h-6" />
              </div>
              <p>Shane Hübsch</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative flex w-6 h-6 items-center justify-center">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=27604607122&text=Hey%20there%20Shane!"
                target="blank"
              >
                +27 (0) 60 460 7122
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative flex w-6 h-6 items-center justify-center">
                <AtSign className="w-6 h-6" />
              </div>
              <a href="mailto:shane@buidl.co.za?subject=Hello!">
                shane@buildsoftware.co.za
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex w-full h-full absolute top-40 items-center justify-center z-10 overflow-hidden">
        <BackgroundBottom />
      </div>
    </section>
  )
}
