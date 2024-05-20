"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useForm, type FieldApi } from "@tanstack/react-form"
import { useMutation } from "@tanstack/react-query"
import { zodValidator } from "@tanstack/zod-form-adapter"
import axios from "axios"
import { motion } from "framer-motion"
import { AtSign, Contact, Loader2, Phone, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import { SelectedPage } from "@/types/types"
import { checkbox } from "@/lib/JSON Files/ContactCheckbox"
import {
  email,
  name,
  onChangeAsync,
  onChangeAsyncDebounceMs,
  source,
  website,
} from "@/lib/validators/formValidators"
import { EmailCreationRequest } from "@/lib/validators/resendValidator"
import { toast } from "@/hooks/use-toast"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Input } from "@/components/ui/Input"
import MacBook from "@/components/assets/Macbook.png"
import Snippet from "@/components/assets/Snippet.png"

import { Checkbox } from "../ui/Checkbox"
import { FieldLabel } from "../ui/FieldLabel"
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
        <em className="absolute text-xs italic text-yellow-500">
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

  const handleCheckboxChange = (value: string) => {
    // Check if value is already in service array
    const index = service.indexOf(value)

    if (index !== -1) {
      // Value is already in the array, remove it
      const newArray = service.slice() // Create a copy of the array
      newArray.splice(index, 1) // Remove the value at index
      setService(newArray)
    } else {
      // Value is not in the array, add it
      setService([...service, value]) // Add value to the end of the array
    }
  }

  // TANSTACK-HOOK-FORM
  const form = useForm({
    validatorAdapter: zodValidator,
    defaultValues: {
      name: "",
      email: "",
      website: "",
      source: "",
      service: "",
    },
    onSubmit: async ({ value }) => {
      const payload: EmailCreationRequest = {
        name: value.name,
        email: value.email,
        website: value.website,
        source: value.source,
        service: JSON.stringify(service),
      }
      createEmail(payload)
      console.log("Submit Payload:", payload)
    },
  })

  const { mutate: createEmail } = useMutation({
    mutationFn: async ({
      name,
      email,
      website,
      source,
      service,
    }: EmailCreationRequest) => {
      const payload: EmailCreationRequest = {
        name,
        email,
        website,
        source,
        service,
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
      className="z-30 mx-auto bg-background min-h-screen w-full p-2 md:p-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto mt-16 h-auto w-full bg-backgroundTwo text-zinc-100 p-5 md:p-10 rounded-[5vw] shadow-2xl"
      >
        <h1 className="text-[10vw] md:text-[5vw] font-extrabold leading-tight tracking-tighter">
          Let&apos;s get in{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-500 inline-block text-transparent bg-clip-text">
            TOUCH
          </span>{" "}
        </h1>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="md:text-xl mt-5">
            For any inquiries or to schedule a consultation, don&apos;t hesitate
            to reach out. Let&apos;s start your journey today!
          </p>
        </motion.div>

        {/* ---------- FORM ---------- */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* @ts-ignore */}
            {/* <form.Provider> */}
            <form
              onSubmit={(event) => {
                event.preventDefault()
                event.stopPropagation()
                void form.handleSubmit()
              }}
              className="space-y-8 pt-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <form.Field
                  name="name"
                  validators={{
                    onChange: name,
                    onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                    onChangeAsync: onChangeAsync,
                  }}
                >
                  {(field) => (
                    <div className="relative w-full flex-col">
                      <FieldLabel className="font-bold text-zinc-100">
                        Name:
                      </FieldLabel>
                      <Input
                        id={field.name}
                        placeholder="Thomas Anderson"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                        required
                      />
                      <FieldInfo field={field} />
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
                    <div className="relative w-full flex-col">
                      <FieldLabel className="font-bold text-zinc-100">
                        Email:
                      </FieldLabel>
                      <Input
                        type="email"
                        placeholder="name@domain.com"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                        required
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                </form.Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <form.Field
                  name="website"
                  validators={{
                    onChange: website,
                    onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                    onChangeAsync: onChangeAsync,
                  }}
                >
                  {(field) => (
                    <div className="relative w-full flex-col">
                      <FieldLabel className="font-bold text-zinc-100">
                        Existing Website (Optional):
                      </FieldLabel>
                      <Input
                        id={field.name}
                        placeholder="www.domain.com"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="source"
                  validators={{
                    onChange: source,
                    onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                    onChangeAsync: onChangeAsync,
                  }}
                >
                  {(field) => (
                    <div className="relative w-full flex-col">
                      <FieldLabel className="font-bold text-zinc-100">
                        How did you hear about us?:
                      </FieldLabel>
                      <Input
                        type="text"
                        placeholder="Eg. Source"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                </form.Field>
              </div>

              {/* CHECKBOX */}
              <FieldLabel className="font-bold text-zinc-100">
                Interested services:
              </FieldLabel>
              <div className="relative grid grid-cols-1 md:grid-cols-2">
                {checkbox.map((item: any) => (
                  <div className="items-top flex space-x-2 mb-2">
                    <Checkbox
                      id={item.id}
                      value={item.name}
                      onCheckedChange={() => handleCheckboxChange(item.name)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor={item.id}
                        className={`flex justify-center items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                      >
                        {item.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>

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
                {([canSubmit, isSubmitting]) =>
                  !submitted ? (
                    <Button
                      type="submit"
                      variant="outline"
                      disabled={!canSubmit}
                      className="w-28 font-bold bg-zinc-100 text-zinc-700 border-none transition duration-200 hover:scale-[0.95]"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Send />
                      )}
                    </Button>
                  ) : (
                    <p className="font-bold bg-gradient-to-r from-violet-300 via-pink-300 to-rose-200 animate-pulse italic text-transparent bg-clip-text">
                      Your new adventure awaits!
                    </p>
                  )
                }
              </form.Subscribe>
            </form>
            {/* @ts-ignore */}
            {/* </form.Provider> */}
          </motion.div>

          {/* CONTACT DETAILS */}
          <div className="mt-10 w-full md:mt-5 md:px-20">
            {/* RIGHT */}
            <motion.div
              className="grid grid-cols-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-full grid grid-cols-1 text-sm md:text-base mb-5 gap-3">
                <div className="flex gap-5 items-center">
                  <Contact />
                  <p>Shane Hübsch</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaWhatsapp className="w-6 h-6" />
                  <a
                    href="https://api.whatsapp.com/send?phone=27604607122&text=Hey%20there%20Shane!"
                    target="blank"
                  >
                    +27 (0) 60 460 7122
                  </a>
                </div>
                <div className="flex gap-5 items-center">
                  <AtSign />
                  <a href="mailto:shane@buidl.co.za?subject=Hello!">
                    shane@buidl.co.za
                  </a>
                </div>
              </div>
              {isAboveMediumScreens && (
                <div className="flex w-full">
                  <div className="flex relative size-full">
                    <div className="w-full min-w-[250px] max-w-[300px] flex absolute left-20 z-50">
                      <Image src={MacBook} alt="macbook" className="flex" />
                    </div>
                    <div className="w-full min-w-[250px] max-w-[300px] flex absolute top-10 -rotate-6">
                      <div className="size-full overflow-hidden rounded-xl">
                        <Image src={Snippet} alt="snippet" className="flex" />
                      </div>
                      <div className="size-full -bottom-1 absolute bg-gradient-to-bl from-backgroundTwo/0 via-backgroundTwo/0 to-backgroundTwo" />
                      <div className="size-full -bottom-1 absolute bg-gradient-to-br from-backgroundTwo/0 via-backgroundTwo/0 to-backgroundTwo" />
                      <div className="size-full absolute bg-gradient-to-b from-backgroundTwo/0 via-backgroundTwo/30 to-backgroundTwo" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
