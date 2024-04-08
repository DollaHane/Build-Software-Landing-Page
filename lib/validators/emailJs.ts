import { z } from "zod"

import { serviceId, templateId, userId } from "./formValidators"

export const FormValidator = z.object({
  service_id: serviceId,
  template_id: templateId,
  user_id: userId,
  template_params: z.object({
    from_name: z.string(),
    from_surname: z.string(),
    user_email: z.string(),
    subject: z.string(),
    message: z.string(),
  }),
})

export type FormCreationRequest = z.infer<typeof FormValidator>
