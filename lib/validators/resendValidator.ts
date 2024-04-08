import { z } from "zod"

import { email, name, service, source, website } from "./formValidators"

export const EmailValidator = z.object({
  name: name,
  email: email,
  website: website,
  source: source,
  service: service,
})

export type EmailCreationRequest = z.infer<typeof EmailValidator>
