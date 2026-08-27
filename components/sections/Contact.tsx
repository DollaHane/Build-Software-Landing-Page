"use client"

import React, { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { useMutation } from "@tanstack/react-query"
import { zodValidator } from "@tanstack/zod-form-adapter"
import axios from "axios"
import { AtSign, Check, Loader2, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import {
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/content"
import { cn } from "@/lib/utils"
import {
  brief as briefV,
  budget as budgetV,
  email as emailV,
  name as nameV,
  service as serviceV,
  timeline as timelineV,
} from "@/lib/validators/formValidators"
import type { EmailCreationRequest } from "@/lib/validators/resendValidator"
import { toast } from "@/hooks/use-toast"
import { Reveal } from "@/components/motion/Reveal"

import { Section } from "../layout/Section"
import { Button } from "../ui/button"

const rowLabel = "w-24 shrink-0 text-brand-1"
const fieldBase =
  "w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground/60 focus:outline-none"

function Err({ messages }: { messages: unknown }) {
  const text = Array.isArray(messages) ? messages.join(", ") : String(messages)
  if (!messages || text === "" || text === "undefined") return null
  return <p className="pl-24 text-xs italic text-destructive">{text}</p>
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const { mutate: createEmail, isPending } = useMutation({
    mutationFn: async (payload: EmailCreationRequest) => {
      await axios.post("/api/contactUs", payload)
    },
    onError: () =>
      toast({
        title: "Something went wrong.",
        description: "Your enquiry could not be sent. Please try again.",
        variant: "destructive",
      }),
    onSuccess: () => {
      setSubmitted(true)
      form.reset()
      toast({
        title: "Enquiry sent",
        description: "Thanks — we'll come back to you shortly.",
      })
    },
  })

  const form = useForm({
    validatorAdapter: zodValidator,
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      timeline: "",
      brief: "",
    },
    onSubmit: async ({ value }) => createEmail(value),
  })

  return (
    <Section
      id="contact"
      surface="contrast"
      labelledBy="contact-heading"
      width="wide"
      className="overflow-hidden"
      innerClassName="py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-grad opacity-20 blur-[130px]"
      />

      <h2
        id="contact-heading"
        className="text-center text-[9vw] font-semibold leading-tight tracking-tighter lg:text-[5vw]"
      >
        Start <span className="text-gradient-brand">shipping</span> today
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-center text-muted-foreground">
        Tell us roughly what you need. We&apos;ll come back with questions, a
        schematic and a fixed price — not a sales call.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <Reveal x={-24} y={0}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              void form.handleSubmit()
            }}
            className="overflow-hidden rounded-xl border border-border bg-card/60 font-mono shadow-2xl backdrop-blur"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FC605B]" />
              <span className="h-3 w-3 rounded-full bg-[#FCBB40]" />
              <span className="h-3 w-3 rounded-full bg-[#34C749]" />
              <p className="ml-3 text-xs text-muted-foreground">
                user@buildsoftware ~ %
              </p>
            </div>

            <div className="flex flex-col gap-4 p-5 text-sm">
              <form.Field name="name" validators={{ onChange: nameV }}>
                {(field) => (
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2">
                      <span className={rowLabel}>name:</span>
                      <input
                        className={fieldBase}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </label>
                    <Err messages={field.state.meta.touchedErrors} />
                  </div>
                )}
              </form.Field>

              <form.Field name="email" validators={{ onChange: emailV }}>
                {(field) => (
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2">
                      <span className={rowLabel}>email:</span>
                      <input
                        type="email"
                        className={fieldBase}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="you@company.co.za"
                        autoComplete="email"
                      />
                    </label>
                    <Err messages={field.state.meta.touchedErrors} />
                  </div>
                )}
              </form.Field>

              <form.Field name="service" validators={{ onChange: serviceV }}>
                {(field) => (
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2">
                      <span className={rowLabel}>service:</span>
                      <select
                        className={cn(fieldBase, "cursor-pointer")}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      >
                        <option value="">select one…</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                    <Err messages={field.state.meta.touchedErrors} />
                  </div>
                )}
              </form.Field>

              <form.Field name="budget" validators={{ onChange: budgetV }}>
                {(field) => (
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2">
                      <span className={rowLabel}>budget:</span>
                      <select
                        className={cn(fieldBase, "cursor-pointer")}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      >
                        <option value="">select one…</option>
                        {BUDGET_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                    <Err messages={field.state.meta.touchedErrors} />
                  </div>
                )}
              </form.Field>

              <form.Field name="timeline" validators={{ onChange: timelineV }}>
                {(field) => (
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2">
                      <span className={rowLabel}>timeline:</span>
                      <select
                        className={cn(fieldBase, "cursor-pointer")}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      >
                        <option value="">select one…</option>
                        {TIMELINE_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                    <Err messages={field.state.meta.touchedErrors} />
                  </div>
                )}
              </form.Field>

              <form.Field name="brief" validators={{ onChange: briefV }}>
                {(field) => (
                  <div className="flex flex-col gap-1">
                    <label className="flex items-start gap-2">
                      <span className={cn(rowLabel, "pt-0.5")}>brief:</span>
                      <textarea
                        rows={4}
                        className={cn(fieldBase, "resize-none")}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="What are you trying to fix or build?"
                      />
                    </label>
                    <Err messages={field.state.meta.touchedErrors} />
                  </div>
                )}
              </form.Field>

              <div className="flex items-center justify-end gap-3 border-t border-border pt-4">
                {submitted && (
                  <span className="flex items-center gap-1.5 text-xs text-brand-1">
                    <Check className="h-4 w-4" /> Sent
                  </span>
                )}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="gap-2 font-bold"
                >
                  {isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isPending ? "Sending" : "Send enquiry"}
                </Button>
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal x={24} y={0} delay={0.1}>
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-card/60 p-7 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Speak to someone
              </p>
              <p className="mt-2 text-lg font-semibold">Shane Hübsch</p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=27604607122&text=Hey%20there%20Shane!"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaWhatsapp className="h-5 w-5 text-brand-1" />
              +27 (0) 60 460 7122
            </a>
            <a
              href="mailto:shane@buildsoftware.co.za?subject=Enquiry%20from%20buildsoftware.co.za"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <AtSign className="h-5 w-5 text-brand-1" />
              shane@buildsoftware.co.za
            </a>
            <p className="border-t border-border pt-5 text-sm text-muted-foreground">
              Every build includes a six-month bug-fix warranty, and we&apos;ll
              help you choose and set up the infrastructure to run it.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
