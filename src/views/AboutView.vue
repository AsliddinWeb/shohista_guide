<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/composables/useSEO.js'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'

const { t, locale } = useI18n()

useSEO({ page: 'about', locale, url: 'https://shohista-guide.uz/about' })
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <!-- Page Hero -->
    <section class="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-samarkand-950 to-samarkand-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 80px 80px;" />
      <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
        <p class="text-gold-300 text-sm uppercase tracking-widest mb-3">Shohista Guide</p>
        <h1 class="font-heading font-bold text-4xl sm:text-5xl mb-4">{{ t('nav.about') }}</h1>
      </div>
    </section>
    <main>
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
    </main>
    <Footer />
  </div>
</template>
