<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/composables/useSEO.js'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ToursSection from '@/components/sections/ToursSection.vue'
import WhyUsSection from '@/components/sections/WhyUsSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const { locale } = useI18n()

useSEO({
  title: 'Shohista Guide | Гид по Самарканду | Samarkand Tour Guide',
  description: 'Сертифицированный гид по Самарканду и Шахрисабзу. Регистан, Шахи-Зинда, Биби-Ханым — экскурсии на русском, узбекском и английском языках. Индивидуальные и групповые туры.',
  keywords: 'гид Самарканд, Samarkand tour guide, экскурсии Самарканд, Регистан тур, Шахрисабз экскурсия, гид Узбекистан, Shohista Guide, туризм Самарканд, Шёлковый путь тур',
  image: 'https://shohista-guide.uz/og-image.jpg',
  url: 'https://shohista-guide.uz',
})
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ToursSection />
      <WhyUsSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>
