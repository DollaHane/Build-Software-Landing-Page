import { z } from "zod"

export const onChangeAsyncDebounceMs = 500
export const onChangeAsync = z.string().refine(
  async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return !value.includes("error")
  },
  {
    message: "No 'error' allowed in message",
  }
)

export const serviceId = z.string()
export const templateId = z.string()
export const userId = z.string()
export const fromName = z
  .string()
  .min(3, {
    message: "Your first name must be at least 3 characters long",
  })
  .max(25, {
    message: "Your first name must be less than 25 characters long",
  })

export const fromSurname = z
  .string()
  .min(3, {
    message: "Your last name must be at least 3 characters long",
  })
  .max(25, {
    message: "Your last name must be less than 25 characters long",
  })

export const userEmail = z.string()

export const subject = z
  .string()
  .min(3, {
    message: "The subject must be at least 3 characters long",
  })
  .max(255, {
    message: "The subject must be less than 255 characters long",
  })
export const message = z
  .string()
  .min(3, {
    message: "Your message must be at least 3 characters long",
  })
  .max(500, {
    message: "Your message must be less than 500 characters long",
  })
