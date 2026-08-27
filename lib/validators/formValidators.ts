import { z } from "zod"

export const onChangeAsyncDebounceMs = 500

export const name = z
  .string()
  .min(2, { message: "Please enter your name" })
  .max(50, { message: "Name must be less than 50 characters" })

export const email = z
  .string()
  .min(1, { message: "Please enter your email address" })
  .email({ message: "That doesn't look like a valid email address" })

export const service = z.string().min(1, { message: "Please choose a service" })

export const budget = z.string().min(1, { message: "Please choose a budget" })

export const timeline = z
  .string()
  .min(1, { message: "Please choose a timeline" })

export const brief = z
  .string()
  .max(2000, { message: "Please keep the brief under 2000 characters" })
