<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { MapPin, Clock, Mail, Instagram, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { useEmailJS } from '@/composables/useEmailJS.js'
import { useTelegramBot } from '@/composables/useTelegramBot.js'

const { t } = useI18n()
const { sendEmail } = useEmailJS()
const { sendNotification } = useTelegramBot()

const isLoading = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errors = reactive({})

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  tour: '',
  date: '',
  message: '',
})

const tourOptions = [
  'Мавзолей «Гур-Эмир»',
  'Площадь «Регистан»',
  'Мечеть «Биби-Ханым»',
  'Некрополь «Шахи-Зинда»',
  'Деревня ремесленников «Конигил»',
  'Рынок Сиёб',
  'Ковровая мастерская «Худжум»',
  'Мавзолей Святого Даниила',
  'Обсерватория Мирзо Улугбека',
  'Мечеть «Хазрат-Хызр»',
  '«Вечный город»',
  'Город Шахрисабз (полный день)',
  'Заамин — Узбекская Швейцария',
  'Заамин + Семь озёр',
  'Мастер-класс: Плов',
  'Мастер-класс: Самса и Лепёшка',
  'Индивидуальный тур',
  'Групповой тур',
]

function validate() {
  errors.name = !formData.name.trim() ? t('contact.required') : ''
  errors.email = !formData.email.trim()
    ? t('contact.required')
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ? t('contact.email_invalid')
    : ''
  errors.message = !formData.message.trim() ? t('contact.required') : ''
  return !errors.name && !errors.email && !errors.message
}

async function handleSubmit() {
  if (!validate()) return
  isLoading.value = true
  showSuccess.value = false
  showError.value = false
  try {
    await Promise.allSettled([
      sendEmail(formData),
      sendNotification(formData),
    ])
    showSuccess.value = true
    resetForm()
  } catch {
    showError.value = true
  } finally {
    isLoading.value = false
  }
}

function resetForm() {
  Object.keys(formData).forEach(k => (formData[k] = ''))
  Object.keys(errors).forEach(k => (errors[k] = ''))
}

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400
   bg-white dark:bg-gray-900 dark:text-white placeholder:text-gray-400
   ${hasError
     ? 'border-red-400 bg-red-50 dark:bg-red-900/20'
     : 'border-gray-200 dark:border-gray-700 hover:border-gold-400 focus:border-gold-400'}`
</script>

<template>
  <section id="contact" class="py-20 bg-samarkand-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        :title="t('contact.title')"
        :subtitle="t('contact.subtitle')"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Form -->
        <div class="bg-white dark:bg-gray-950 rounded-3xl shadow-lg dark:shadow-gray-900/50 p-8" data-aos="fade-right">

          <Transition name="slide-up">
            <div v-if="showSuccess" class="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl flex items-start gap-3">
              <CheckCircle :size="20" class="text-green-500 flex-shrink-0 mt-0.5" />
              <p class="text-green-700 dark:text-green-400 text-sm">{{ t('contact.success') }}</p>
            </div>
          </Transition>

          <Transition name="slide-up">
            <div v-if="showError" class="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl flex items-start gap-3">
              <AlertCircle :size="20" class="text-red-500 flex-shrink-0 mt-0.5" />
              <p class="text-red-700 dark:text-red-400 text-sm">{{ t('contact.error') }}</p>
            </div>
          </Transition>

          <div class="space-y-5">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                {{ t('contact.name') }} <span class="text-red-400">*</span>
              </label>
              <input v-model="formData.name" type="text" :placeholder="t('contact.name')" :class="inputClass(errors.name)" />
              <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
            </div>

            <!-- Email + Phone -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {{ t('contact.email') }} <span class="text-red-400">*</span>
                </label>
                <input v-model="formData.email" type="email" :placeholder="t('contact.email')" :class="inputClass(errors.email)" />
                <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t('contact.phone') }}</label>
                <input v-model="formData.phone" type="tel" placeholder="WhatsApp / Telegram" :class="inputClass(false)" />
              </div>
            </div>

            <!-- Tour + Date -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t('contact.tour') }}</label>
                <select v-model="formData.tour" :class="inputClass(false)">
                  <option value="">{{ t('contact.tour_placeholder') }}</option>
                  <option v-for="o in tourOptions" :key="o" :value="o">{{ o }}</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t('contact.date') }}</label>
                <input v-model="formData.date" type="date" :class="inputClass(false)" />
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                {{ t('contact.message') }} <span class="text-red-400">*</span>
              </label>
              <textarea
                v-model="formData.message"
                rows="4"
                :placeholder="t('contact.message_placeholder')"
                :class="inputClass(errors.message) + ' resize-none'"
              />
              <p v-if="errors.message" class="mt-1 text-xs text-red-500">{{ errors.message }}</p>
            </div>

            <!-- Submit -->
            <div
              @click="handleSubmit"
              :class="[
                'btn-primary w-full justify-center cursor-pointer select-none',
                isLoading ? 'opacity-70 pointer-events-none' : ''
              ]"
            >
              <Loader2 v-if="isLoading" :size="18" class="animate-spin" />
              <Send v-else :size="18" />
              {{ isLoading ? t('contact.submitting') : t('contact.submit') }}
            </div>
          </div>
        </div>

        <!-- Map + Info -->
        <div class="space-y-6" data-aos="fade-left">
          <div class="rounded-3xl overflow-hidden shadow-lg h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11908.77!2d66.9597!3d39.6542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19f4be37ede9%3A0xd07ef4f9f8b51c4b!2sSamarkand%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%" height="100%" style="border:0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" title="Самарканд на карте"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                <MapPin :size="20" class="text-gold-500" />
              </div>
              <div>
                <div class="font-semibold text-samarkand-900 dark:text-white text-sm mb-1">{{ t('contact.address') }}</div>
                <div class="text-gray-400 text-xs">Uzbekistan, UZ</div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                <Clock :size="20" class="text-gold-500" />
              </div>
              <div>
                <div class="font-semibold text-samarkand-900 dark:text-white text-sm mb-1">{{ t('contact.schedule_label') }}</div>
                <div class="text-gray-400 text-xs">{{ t('contact.schedule') }}</div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                <Mail :size="20" class="text-gold-500" />
              </div>
              <div>
                <div class="font-semibold text-samarkand-900 dark:text-white text-sm mb-1">Email</div>
                <a href="mailto:mukhtarova.shokhista@mail.ru" class="text-gray-400 dark:text-gray-400 text-xs hover:text-gold-500 transition-colors break-all">
                  mukhtarova.shokhista@mail.ru
                </a>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                <Phone :size="20" class="text-gold-500" />
              </div>
              <div>
                <div class="font-semibold text-samarkand-900 dark:text-white text-sm mb-1">Телефон</div>
                <a href="tel:+998883954141" class="text-gray-400 text-xs hover:text-gold-500 transition-colors">
                  +998 88 395 41 41
                </a>
              </div>
            </div>

            <a
              href="https://www.instagram.com/shohista_guide/"
              target="_blank"
              rel="noopener"
              class="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-5 flex items-start gap-4 hover:opacity-90 transition-opacity sm:col-span-2"
            >
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Instagram :size="20" class="text-white" />
              </div>
              <div>
                <div class="font-semibold text-white text-sm mb-1">Instagram</div>
                <div class="text-white/70 text-xs">@shohista_guide</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.3s ease }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(-10px) }
</style>
