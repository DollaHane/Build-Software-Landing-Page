import { Resend } from "resend"

import { buidlMail } from "@/components/emailTemplates/buidlMail"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("body:", body)
    const { name, email, website, source, service } = body

    try {
      const { data } = await resend.emails.send({
        from: "Ground Control To Major Tom.. <shane@buidl.co.za>",
        to: "shane@buidl.co.za",
        subject: "Message from the Buidl site!",
        react: buidlMail({
          name: name,
          email: email,
          website: website,
          source: source,
          service: service,
        }) as React.ReactElement,
      })

      console.log("Successfully sent email:", data)
    } catch (error) {
      console.error("Failed to send email:", error)
    }

    return new Response("Successfully sent email:", { status: 200 })
  } catch (error) {
    return new Response("Failed to send email:", { status: 500 })
  }
}
