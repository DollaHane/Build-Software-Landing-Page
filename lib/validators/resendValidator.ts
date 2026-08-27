import { z } from "zod"

import { brief, budget, email, name, service, timeline } from "./formValidators"

export const EmailValidator = z.object({
  name,
  email,
  service,
  budget,
  timeline,
  brief,
})

export type EmailCreationRequest = z.infer<typeof EmailValidator>
