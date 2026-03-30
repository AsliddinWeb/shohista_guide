<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/composables/useSEO.js'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'

const { t } = useI18n()

useSEO({
  title: 'Контакты — Забронировать тур | Shohista Guide',
  description: 'Забронируйте тур по Самарканду. Оставьте заявку и мы свяжемся в течение 2 часов. Индивидуальные и групповые туры.',
  keywords: 'забронировать тур Самарканд, контакты гид Самарканд, заявка тур Узбекистан',
  image: 'https://shohista-guide.uz/og-image.jpg',
  url: 'https://shohista-guide.uz/#/contact',
})
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <section class="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-samarkand-950 to-samarkand-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 80px 80px;" />
      <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
        <p class="text-gold-300 text-sm uppercase tracking-widest mb-3">Shohista Guide</p>
        <h1 class="font-heading font-bold text-4xl sm:text-5xl mb-4">{{ t('contact.title') }}</h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">{{ t('contact.subtitle') }}</p>
      </div>
    </section>
    <main>
      <ContactSection />
      <FaqSection />
    </main>
    <Footer />
  </div>
</template>
