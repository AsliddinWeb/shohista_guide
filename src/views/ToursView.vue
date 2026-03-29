<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/composables/useSEO.js'
import { useRouter } from 'vue-router'
import { Clock, Users, Star } from 'lucide-vue-next'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TourCard from '@/components/ui/TourCard.vue'

import tour1 from '@/assets/images/tours/registan.jpg'
import tour2 from '@/assets/images/tours/shahizinda.jpg'
import tour3 from '@/assets/images/tours/bibikhanym.jpg'
import tour4 from '@/assets/images/tours/guremir.jpg'
import tour5 from '@/assets/images/tours/afrasiab.jpg'
import tour6 from '@/assets/images/tours/shahrisabz.jpg'

const { t, tm, rt } = useI18n()
const router = useRouter()
const tourImages = [tour1, tour2, tour3, tour4, tour5, tour6]

useSEO({
  title: 'Туры по Самарканду | Shohista Guide',
  description: 'Все экскурсии по Самарканду и Шахрисабзу. Регистан, Шахи-Зинда, Биби-Ханым, Гур-Эмир. Индивидуальные и групповые туры от $20.',
  keywords: 'туры Самарканд, экскурсии Регистан, Шахи-Зинда тур, Шахрисабз экскурсия',
  image: 'https://shohista-guide.uz/og-image.jpg',
  url: 'https://shohista-guide.uz/#/tours',
})
</script>

<template>
  <div class="min-h-screen">
    <NavBar />

    <!-- Page Hero -->
    <section class="pt-24 pb-12 bg-gradient-to-br from-samarkand-950 to-samarkand-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 80px 80px;" />
      <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
        <p class="text-gold-300 text-sm uppercase tracking-widest mb-3">Shohista Guide</p>
        <h1 class="font-heading font-bold text-4xl sm:text-5xl mb-4">{{ t('tours.title') }}</h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">{{ t('tours.subtitle') }}</p>
      </div>
    </section>

    <main class="py-16 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TourCard
            v-for="(tour, i) in tm('tours.items')"
            :key="i"
            :image="tourImages[i]"
            :name="rt(tour.name)"
            :duration="rt(tour.duration)"
            :group-size="rt(tour.groupSize)"
            :price="rt(tour.price)"
            :highlights="tour.highlights.map(h => rt(h))"
            @book="router.push('/contact')"
            data-aos="fade-up"
            :data-aos-delay="(i % 3) * 100"
          />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
