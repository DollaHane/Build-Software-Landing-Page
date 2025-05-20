import nodemailer from "nodemailer"

interface NodemailProps {
  sender: string
  recipient: string
  subject: string
  template: any
}

export async function Nodemail({
  sender,
  recipient,
  subject,
  template,
}: NodemailProps) {
  console.log("Mail Sender: ", sender)
  console.log("Mail Recipient: ", recipient)

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    // secureConnection: false, // TLS requires secureConnection to be false
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  console.log("Sending mail to: ", recipient)

  const info = await transporter.sendMail({
    from: sender,
    to: recipient,
    subject: subject,
    html: template,
  })

  console.log(`Email sent to ${recipient}`, info.messageId)
}
