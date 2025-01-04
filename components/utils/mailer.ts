import nodemailer from 'nodemailer'

type EmailPayload = {
  to: string
  subject: string
  html: string
}

export async function sendMail(data: EmailPayload) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
}

