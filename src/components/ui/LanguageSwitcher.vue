<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const langs = [
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
  { code: 'en', label: 'EN' },
]

function setLocale(code) {
  locale.value = code
  localStorage.setItem('locale', code)
}

// Restore saved locale on mount
const saved = localStorage.getItem('locale')
if (saved && ['ru', 'uz', 'en'].includes(saved)) {
  locale.value = saved
}
</script>

<template>
  <div class="flex items-center gap-1 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm p-1">
    <button
      v-for="lang in langs"
      :key="lang.code"
      @click="setLocale(lang.code)"
      :class="[
        'px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200',
        locale === lang.code
          ? 'bg-gold-400 text-samarkand-950 shadow-sm'
          : 'text-gray-700 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/20'
      ]"
    >
      {{ lang.label }}
    </button>
  </div>
</template>
