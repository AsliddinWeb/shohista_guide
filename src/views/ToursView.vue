<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/composables/useSEO.js'
import { useRouter } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TourCard from '@/components/ui/TourCard.vue'

import img1  from '@/assets/images/tours/guremir.jpg'
import img2  from '@/assets/images/tours/registan.jpg'
import img3  from '@/assets/images/tours/bibikhanym.jpg'
import img4  from '@/assets/images/tours/shahizinda.jpg'
import img5  from '@/assets/images/tours/konigil.jpg'
import img6  from '@/assets/images/tours/siyob-bazaar.jpg'
import img7  from '@/assets/images/tours/khujum.jpg'
import img8  from '@/assets/images/tours/st-daniel.jpg'
import img9  from '@/assets/images/tours/ulugbek.jpg'
import img10 from '@/assets/images/tours/khazrat-khyzr.jpg'
import img11 from '@/assets/images/tours/eternal-city.jpg'
import img12 from '@/assets/images/tours/shahrisabz.jpg'
import img13 from '@/assets/images/tours/zamin.png'
import img14 from '@/assets/images/tours/zamin-7lakes.png'

const { t, tm, rt } = useI18n()
const router = useRouter()
const tourImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

useSEO({
  title: 'Туры по Самарканду | Shohista Guide',
  description: 'Все экскурсии по Самарканду и Шахрисабзу. Регистан, Шахи-Зинда, Биби-Ханым, Гур-Эмир, Сиёб базар, Конигил, Заамин. Индивидуальные и групповые туры.',
  keywords: 'туры Самарканд, Регистан, Шахи-Зинда, Шахрисабз, Заамин тур, Сиёб базар',
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
            :tag="rt(tour.tag)"
            :duration="rt(tour.duration)"
            :group-size="rt(tour.groupSize)"
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
