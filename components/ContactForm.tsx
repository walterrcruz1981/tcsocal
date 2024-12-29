'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { sendEmail } from '@/app/actions/sendEmail'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>


export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ title: string; message: string; type: 'success' | 'error' } | null>(null)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await sendEmail(data)
      setToast({ title: 'Success', message: 'Your message has been sent!', type: 'success' })
      reset()
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      setToast({ 
        title: 'Error', 
        message: errorMessage, 
        type: 'error' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Your Name"
            className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : 'focus:border-blue-500'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('email')}
            placeholder="Your Email"
            className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'focus:border-blue-500'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register('message')}
            placeholder="Your Message"
            rows={4}
            className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${errors.message ? 'border-red-500' : 'focus:border-blue-500'}`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.div>
      </form>
      {toast && (
        <div className={`mt-4 p-3 rounded-lg ${toast.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          <h3 className="font-bold">{toast.title}</h3>
          <p>{toast.message}</p>
        </div>
      )}
    </motion.div>
  )
}

