<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
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
const modules = [Navigation, Pagination, Autoplay]

function handleBook() {
  router.push({ path: '/contact' })
}
</script>

<template>
  <section id="tours" class="py-20 bg-white dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        :title="t('tours.title')"
        :subtitle="t('tours.subtitle')"
      />

      <div data-aos="fade-up">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :navigation="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          class="pb-12"
        >
          <SwiperSlide
            v-for="(tour, i) in tm('tours.items')"
            :key="i"
            class="h-auto"
          >
            <TourCard
              :image="tourImages[i]"
              :name="rt(tour.name)"
              :tag="rt(tour.tag)"
              :duration="rt(tour.duration)"
              :group-size="rt(tour.groupSize)"
              :highlights="tour.highlights.map(h => rt(h))"
              @book="handleBook"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="text-center mt-6" data-aos="fade-up">
        <router-link to="/tours" class="btn-outline-gold">
          {{ t('nav.tours') }} →
        </router-link>
      </div>
    </div>
  </section>
</template>
