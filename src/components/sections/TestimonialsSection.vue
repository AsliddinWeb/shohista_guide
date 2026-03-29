<script setup>
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { Quote } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t, tm, rt } = useI18n()
const modules = [Autoplay, Pagination]
</script>

<template>
  <section id="testimonials" class="py-20 bg-samarkand-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        :title="t('testimonials.title')"
        :subtitle="t('testimonials.subtitle')"
      />

      <div data-aos="fade-up">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }"
          class="pb-12"
        >
          <SwiperSlide
            v-for="(review, i) in tm('testimonials.items')"
            :key="i"
            class="h-auto"
          >
            <div class="card p-6 h-full flex flex-col dark:border dark:border-gray-700">
              <div class="flex items-center gap-1 mb-4">
                <span v-for="j in 5" :key="j" class="text-gold-400 text-lg">★</span>
              </div>
              <Quote :size="28" class="text-gold-400/40 mb-3" fill="currentColor" />
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-5 italic">
                "{{ rt(review.text) }}"
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-amber-500 flex items-center justify-center font-bold text-samarkand-950 text-sm">
                    {{ rt(review.name)[0] }}
                  </div>
                  <div>
                    <div class="font-semibold text-samarkand-900 dark:text-white text-sm">
                      {{ rt(review.name) }} {{ rt(review.flag) }}
                    </div>
                    <div class="text-gray-400 text-xs">{{ rt(review.city) }}</div>
                  </div>
                </div>
                <span class="text-xs text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-full border border-gray-100 dark:border-gray-600">
                  {{ rt(review.source) }}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
