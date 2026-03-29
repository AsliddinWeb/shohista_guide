import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/config/integrations.js'

export function useEmailJS() {
  const sendEmail = async (formData) => {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'не указан',
      tour: formData.tour || 'не выбран',
      travel_date: formData.date || 'не указана',
      message: formData.message,
      to_name: 'Shohista',
    }
    return await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )
  }

  return { sendEmail }
}
