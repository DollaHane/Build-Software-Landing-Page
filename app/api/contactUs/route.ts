import { Nodemail } from "@/server/mail/mail"
import { render } from "@react-email/components"

import { EmailValidator } from "@/lib/validators/resendValidator"
import { buidlMail } from "@/components/emailTemplates/buidlMail"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate on the server too — the client schema can be bypassed.
    const parsed = EmailValidator.safeParse(body)
    if (!parsed.success) {
      return new Response(JSON.stringify({ errors: parsed.error.flatten() }), {
        status: 422,
        headers: { "content-type": "application/json" },
      })
    }

    const { name, email, service, budget, timeline, brief } = parsed.data

    try {
      const template = await render(
        buidlMail({
          name,
          email,
          service,
          budget,
          timeline,
          brief,
        }) as React.ReactElement
      )

      await Nodemail({
        recipient: process.env.MAIL_USER!,
        sender: process.env.MAIL_USER!,
        subject: `New enquiry from ${name} — buildsoftware.co.za`,
        template,
      })
    } catch (error) {
      console.error("Failed to send email", error)
      return new Response("Failed to send email", { status: 500 })
    }

    return new Response("Successfully sent email", { status: 200 })
  } catch (error) {
    return new Response("Failed to send email", { status: 500 })
  }
}
