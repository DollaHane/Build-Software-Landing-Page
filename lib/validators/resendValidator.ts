import { z } from "zod"

import { email, name } from "./formValidators"

export const EmailValidator = z.object({
  name: name,
  email: email,
})

export type EmailCreationRequest = z.infer<typeof EmailValidator>
