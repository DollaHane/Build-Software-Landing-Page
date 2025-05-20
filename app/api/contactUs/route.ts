import { Nodemail } from "@/server/mail/mail"
import { render } from "@react-email/components"

import { buidlMail } from "@/components/emailTemplates/buidlMail"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("body:", body)
    const { name, email, website, source, service } = body

    try {
      const template = await render(
        buidlMail({
          name: name,
          email: email,
          website: website,
          source: source,
          service: service,
        }) as React.ReactElement
      )

      await Nodemail({
        recipient: process.env.MAIL_USER!,
        sender: process.env.MAIL_USER!,
        subject: `Message from the BuildSoftware site!`,
        template: template,
      })
      console.log(`Successfully sent email`)
    } catch (error) {
      console.error(`Failed to send email`)
      return new Response(`Failed to send email`, { status: 500 })
    }

    return new Response("Successfully sent email:", { status: 200 })
  } catch (error) {
    return new Response("Failed to send email:", { status: 500 })
  }
}
