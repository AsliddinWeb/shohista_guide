<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { X, Instagram, Sun, Moon } from 'lucide-vue-next'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import { useTheme } from '@/composables/useTheme.js'
import logoUrl from '@/assets/logo.png'

const { t } = useI18n()
const { isDark, toggle } = useTheme()

const props = defineProps({
  open: Boolean,
  links: Array,
})

const emit = defineEmits(['close'])
</script>

<template>
  <Transition name="slide">
    <div v-if="open" class="fixed inset-0 z-[60] lg:hidden">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-samarkand-950/80 backdrop-blur-sm" @click="emit('close')" />

      <!-- Panel -->
      <div class="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
          <img :src="logoUrl" alt="AsiMir Tour & Guide" class="h-9 w-auto" />
          <button @click="emit('close')" class="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
            <X :size="18" />
          </button>
        </div>

        <!-- Nav links -->
        <nav class="flex-1 p-5 space-y-1">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            @click="emit('close')"
            class="flex items-center px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 font-medium hover:bg-samarkand-50 dark:hover:bg-gray-800 hover:text-gold-500 transition-all"
          >
            {{ t(link.key) }}
          </RouterLink>
        </nav>

        <!-- Bottom -->
        <div class="p-5 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <div class="flex items-center justify-between">
            <LanguageSwitcher />
            <!-- Dark mode toggle -->
            <button
              @click="toggle"
              class="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <Sun v-if="isDark" :size="17" />
              <Moon v-else :size="17" />
            </button>
          </div>
          <a
            href="https://www.instagram.com/shohista_guide/"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-pink-500 font-medium"
          >
            <Instagram :size="18" />
            @shohista_guide
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
}
.slide-enter-active .absolute.right-0,
.slide-leave-active .absolute.right-0 {
  transition: transform 0.3s ease;
}
.slide-enter-from .absolute.right-0 {
  transform: translateX(100%);
}
.slide-leave-to .absolute.right-0 {
  transform: translateX(100%);
}
</style>
