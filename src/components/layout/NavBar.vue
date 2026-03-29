<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Menu, Sun, Moon } from 'lucide-vue-next'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import { useTheme } from '@/composables/useTheme.js'
import logoUrl from '@/assets/logo.png'

const { t } = useI18n()
const route = useRoute()
const { isDark, toggle } = useTheme()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/tours', key: 'nav.tours' },
  { to: '/about', key: 'nav.about' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/contact', key: 'nav.contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-900/50 py-2'
        : 'bg-white/10 backdrop-blur-md py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3">
        <img :src="logoUrl" alt="Shohista Guide" class="h-10 w-auto" />
        <div>
          <div :class="['font-heading font-bold text-lg leading-tight transition-colors',
            scrolled ? 'text-samarkand-900 dark:text-white' : 'text-white']">
            Shohista Guide
          </div>
          <div :class="['text-xs transition-colors', scrolled ? 'text-gold-500' : 'text-gold-300']">
            Samarkand
          </div>
        </div>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            route.path === link.to
              ? 'bg-gold-400 text-samarkand-950'
              : scrolled
                ? 'text-gray-600 dark:text-gray-300 hover:text-gold-500 hover:bg-gold-50 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/20'
          ]"
        >
          {{ t(link.key) }}
        </RouterLink>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-2">
        <LanguageSwitcher />

        <!-- Dark mode toggle -->
        <button
          @click="toggle"
          :class="[
            'w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200',
            scrolled
              ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              : 'text-white hover:bg-white/20'
          ]"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDark" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <!-- Mobile menu toggle -->
        <button
          @click="mobileOpen = true"
          class="lg:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          :class="scrolled ? 'text-samarkand-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'"
          aria-label="Open menu"
        >
          <Menu :size="22" />
        </button>

        <!-- Desktop CTA -->
        <RouterLink to="/contact" class="hidden lg:inline-flex btn-primary text-sm py-2">
          {{ t('hero.cta_contact') }}
        </RouterLink>
      </div>
    </div>
  </header>

  <MobileMenu
    :open="mobileOpen"
    :links="navLinks"
    @close="mobileOpen = false"
  />
</template>
