// EmailJS — https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

// Telegram Bot — @BotFather orqali olinadi
export const TELEGRAM_CONFIG = {
  botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN,
  chatId:   import.meta.env.VITE_TELEGRAM_CHAT_ID,
}
