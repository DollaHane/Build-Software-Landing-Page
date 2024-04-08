"use client"

import React from "react"
import Image from "next/image"
import { useForm, type FieldApi } from "@tanstack/react-form"
import { useMutation } from "@tanstack/react-query"
import { zodValidator } from "@tanstack/zod-form-adapter"
import axios from "axios"
import { motion } from "framer-motion"
import { AtSign, Contact, Phone, Send } from "lucide-react"

import { SelectedPage } from "@/types/types"
import { checkbox } from "@/lib/JSON Files/ContactCheckbox"
import { FormCreationRequest } from "@/lib/validators/emailJs"
import {
  fromName,
  fromSurname,
  message,
  onChangeAsync,
  onChangeAsyncDebounceMs,
  subject,
  userEmail,
} from "@/lib/validators/formValidators"
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
        <em className="absolute top-10 text-xs italic text-yellow-300">
          {field.state.meta.touchedErrors}
        </em>
      ) : null}
    </>
  )
}

function TextAreaInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="absolute top-[135px] text-xs italic text-yellow-300">
          {field.state.meta.touchedErrors}
        </em>
      ) : null}
    </>
  )
}

export default function ContactUs({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)")

  // TANSTACK-HOOK-FORM
  const form = useForm({
    validatorAdapter: zodValidator,
    defaultValues: {
      from_name: "",
      from_surname: "",
      user_email: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      const payload: FormCreationRequest = {
        service_id: "service_nwxafir",
        template_id: "template_rmsb1fd",
        user_id: "MFnqY65qneeSi6YL0",
        template_params: {
          from_name: value.from_name,
          from_surname: value.from_surname,
          user_email: value.user_email,
          subject: value.subject,
          message: value.message,
        },
      }
      createEmail(payload)
      console.log("Submit Payload:", payload)
    },
  })

  const { mutate: createEmail } = useMutation({
    mutationFn: async ({
      service_id,
      template_id,
      user_id,
      template_params,
    }: FormCreationRequest) => {
      const payload: FormCreationRequest = {
        service_id,
        template_id,
        user_id,
        template_params,
      }
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", payload)
    },
    onError: (error) => {
      return toast({
        title: "Something went wrong.",
        description: `Email could not be sent. Please try again.`,
        variant: "destructive",
      })
    },
    onSuccess: () => {
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
      className="z-30 mx-auto bg-background min-h-screen w-full p-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto mt-16 h-auto w-full bg-backgroundTwo text-zinc-100 p-5 md:p-10 rounded-[5vw] shadow-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
          LET&apos;S GET IN{" "}
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
          <p className="text-lg md:text-2xl mt-5">
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
            <form
              onSubmit={(event) => {
                event.preventDefault()
                event.stopPropagation()
                void form.handleSubmit()
              }}
              className="space-y-8 pt-5"
            >
              <div className="grid grid-cols-2 gap-5">
                <form.Field
                  name="from_name"
                  validators={{
                    onChange: fromName,
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
                  name="user_email"
                  validators={{
                    onChange: userEmail,
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

              <div className="grid grid-cols-2 gap-5">
                <form.Field
                  name="website"
                  validators={{
                    onChange: subject,
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
                        required
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="source"
                  validators={{
                    onChange: userEmail,
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
                        required
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
                      className={` border-2 border-${item.color}-400 data-[state=checked]:text-${item.color}-500`}
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

              <Button
                type="submit"
                variant="outline"
                className="w-28 font-bold bg-zinc-100 text-zinc-700 border-none transition duration-200 hover:scale-[0.95]"
              >
                <Send />
              </Button>
            </form>
          </motion.div>

          {/* CONTACT DETAILS */}
          <div className="mt-5 w-full px-20">
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
              <div className="mb-5 grid w-full grid-cols-1 gap-3">
                <div className="flex flex-wrap gap-5">
                  <Contact />
                  <p>Shane Hübsch</p>
                </div>
                <div className="flex flex-wrap gap-5">
                  <Phone />
                  <p>+27 (0) 60 460 7122</p>
                </div>
                <div className="flex flex-wrap gap-5">
                  <AtSign />
                  <p>shane@buidl.co.za</p>
                </div>
              </div>
              {isAboveMediumScreens && (
                <div className="flex w-full pl-16">
                  <div className="flex relative w-1/2 h-full">
                    <div className="w-[35vw] max-w-[300px]  flex absolute left-20 z-50">
                      <Image src={MacBook} alt="macbook" className="flex" />
                    </div>
                    <div className="w-[30vw] max-w-[300px] flex absolute top-10 -rotate-6">
                      <div className="w-full h-full overflow-hidden rounded-xl">
                        <Image src={Snippet} alt="snippet" className="flex" />
                      </div>
                      <div className="w-full h-full -bottom-1 absolute bg-gradient-to-bl from-backgroundTwo/0 via-backgroundTwo/0 to-backgroundTwo" />
                      <div className="w-full h-full -bottom-1 absolute bg-gradient-to-br from-backgroundTwo/0 via-backgroundTwo/0 to-backgroundTwo" />
                      <div className="w-full h-full absolute bg-gradient-to-b from-backgroundTwo/0 via-backgroundTwo/30 to-backgroundTwo" />
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
