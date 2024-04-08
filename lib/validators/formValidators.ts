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

export const name = z
  .string()
  .min(3, {
    message: "Your first name must be at least 3 character long",
  })
  .max(50, {
    message: "Your first name must be less than 50 characters long",
  })

export const email = z.string().min(1, {
  message: "Your email must be at least 3 character long",
})

export const website = z.string().max(255, {
  message: "The subject must be less than 255 characters long",
})
export const source = z.string().max(500, {
  message: "Your source must be less than 500 characters long",
})
export const service = z.string()
