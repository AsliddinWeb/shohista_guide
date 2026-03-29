<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/composables/useSEO.js'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import GallerySection from '@/components/sections/GallerySection.vue'

const { t } = useI18n()

useSEO({
  title: 'Галерея — Shohista Guide | Фотографии Самарканда',
  description: 'Фотографии туров по Самарканду — Регистан, Шахи-Зинда, Биби-Ханым и другие достопримечательности.',
  keywords: 'фото Самарканд, галерея Регистан, Шахи-Зинда фото, туры фотографии',
  image: 'https://shohista-guide.uz/og-image.jpg',
  url: 'https://shohista-guide.uz/#/gallery',
})
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <section class="pt-24 pb-12 bg-gradient-to-br from-samarkand-950 to-samarkand-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 80px 80px;" />
      <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
        <p class="text-gold-300 text-sm uppercase tracking-widest mb-3">Shohista Guide</p>
        <h1 class="font-heading font-bold text-4xl sm:text-5xl mb-4">{{ t('gallery.title') }}</h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">{{ t('gallery.subtitle') }}</p>
      </div>
    </section>
    <main>
      <GallerySection />
    </main>
    <Footer />
  </div>
</template>
