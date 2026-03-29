import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import App from './App.vue'
import router from './router/index.js'
import ru from './locales/ru.json'
import uz from './locales/uz.json'
import en from './locales/en.json'
import './style.css'

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: { ru, uz, en },
})

const head = createHead()

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(head)

app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
})
