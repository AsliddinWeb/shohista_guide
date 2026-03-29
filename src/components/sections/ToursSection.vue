<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
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
              :duration="rt(tour.duration)"
              :group-size="rt(tour.groupSize)"
              :price="rt(tour.price)"
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
