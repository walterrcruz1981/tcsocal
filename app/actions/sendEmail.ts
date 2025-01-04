'use server'

import { z } from 'zod'
import { sendMail } from '@/components/utils/mailer'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    throw new Error('Invalid form data')
  }

  const { name, email, message } = result.data

  await sendMail({
    to: 'walterrcruz@yahoo.com', // Replace with your email
    subject: 'New Contact Form Submission',
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  })
}

