import axios from 'axios'
import { TELEGRAM_CONFIG } from '@/config/integrations.js'

export function useTelegramBot() {
  const sendNotification = async (formData) => {
    const text = `
🔔 *Новая заявка с сайта!*
━━━━━━━━━━━━━━━━━━━
👤 *Имя:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Телефон:* ${formData.phone || 'не указан'}
🗺 *Тур:* ${formData.tour || 'не выбран'}
📅 *Дата поездки:* ${formData.date || 'не указана'}
💬 *Сообщение:* ${formData.message}
━━━━━━━━━━━━━━━━━━━
🌐 Источник: shohista-guide.uz
    `.trim()

    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`
    await axios.post(url, {
      chat_id: TELEGRAM_CONFIG.chatId,
      text,
      parse_mode: 'Markdown',
    })
  }

  return { sendNotification }
}
