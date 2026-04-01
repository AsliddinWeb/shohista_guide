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
        : 'bg-white/10 backdrop-blur-md py-3 sm:py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2">

      <!-- Logo (left) -->
      <RouterLink to="/" class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <img :src="logoUrl" alt="AsiMir Tour & Guide" class="h-10 sm:h-12 w-auto" />
        <div>
          <div :class="['font-heading font-bold text-base sm:text-xl leading-tight tracking-wide transition-colors',
            scrolled ? 'text-samarkand-900 dark:text-white' : 'text-white']">
            AsiMir
          </div>
          <div :class="['text-[10px] sm:text-xs font-medium tracking-widest uppercase transition-colors',
            scrolled ? 'text-gold-500' : 'text-gold-300']">
            Tour &amp; Guide
          </div>
        </div>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-1 flex-1 justify-center">
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
      <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        <!-- Language switcher: desktop only -->
        <div class="hidden sm:block">
          <LanguageSwitcher />
        </div>

        <!-- Dark mode toggle -->
        <button
          @click="toggle"
          :class="[
            'w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200',
            scrolled ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'
          ]"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDark" :size="17" />
          <Moon v-else :size="17" />
        </button>

        <!-- Mobile menu toggle -->
        <button
          @click="mobileOpen = true"
          class="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors"
          :class="scrolled ? 'text-samarkand-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'"
          aria-label="Open menu"
        >
          <Menu :size="20" />
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
