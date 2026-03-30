<script setup>
import { useI18n } from 'vue-i18n'
import { Award, Globe, Star, Instagram, CheckCircle2 } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Image side -->
        <div class="relative" data-aos="fade-right">
          <div class="relative">
            <div class="absolute -inset-4 rounded-3xl border-2 border-gold-400/30" />
            <div class="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold-400 rounded-tl-lg" />
            <div class="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold-400 rounded-tr-lg" />
            <div class="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold-400 rounded-bl-lg" />
            <div class="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold-400 rounded-br-lg" />
            <div class="rounded-2xl overflow-hidden aspect-[4/5] bg-samarkand-50 dark:bg-gray-800">
              <img
                src="@/assets/images/registon.jpg"
                alt="Shohista - Гид по Самарканду"
                class="w-full h-full object-cover"
                loading="lazy"
                onerror="this.parentElement.classList.add('shimmer')"
              />
            </div>
          </div>
          <div class="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 border border-gray-100 dark:border-gray-700 hidden sm:block"
            data-aos="fade-up" data-aos-delay="300">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center">
                <Star :size="20" class="text-gold-500" fill="currentColor" />
              </div>
              <div>
                <div class="font-bold text-samarkand-900 dark:text-white text-xl">5.0 ★</div>
                <div class="text-gray-400 text-xs">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text side -->
        <div data-aos="fade-left">
          <SectionHeading
            :title="t('about.title')"
            :subtitle="t('about.subtitle')"
            :center="false"
          />

          <h3 class="text-2xl font-heading text-gold-500 mb-4">{{ t('about.greeting') }}</h3>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
            {{ t('about.description') }}
          </p>

          <!-- Badges -->
          <div class="flex flex-wrap gap-3 mb-8">
            <div class="flex items-center gap-2 bg-gold-400/10 text-gold-600 dark:text-gold-400 px-4 py-2 rounded-full text-sm font-medium border border-gold-400/30">
              <Award :size="16" />
              {{ t('about.badge_cert') }}
            </div>
            <div class="flex items-center gap-2 bg-samarkand-50 dark:bg-samarkand-900/40 text-samarkand-800 dark:text-samarkand-200 px-4 py-2 rounded-full text-sm font-medium border border-samarkand-200 dark:border-samarkand-800">
              <Globe :size="16" />
              {{ t('about.badge_lang') }}
            </div>
            <div class="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-700">
              <Star :size="16" fill="currentColor" />
              {{ t('about.badge_rating') }}
            </div>
          </div>

          <!-- Feature list -->
          <ul class="space-y-3 mb-8">
            <li v-for="item in ['Регистан, Шахи-Зинда, Биби-Ханым', 'Шахрисабз — 1 день', 'Мастер-классы: плов, самса, лепёшка', 'Бизнес-класс авто, профессиональные водители']"
              :key="item"
              class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <CheckCircle2 :size="18" class="text-gold-400 flex-shrink-0" />
              {{ item }}
            </li>
          </ul>

          <!-- Instagram CTA -->
          <a
            href="https://www.instagram.com/shohista_guide/"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 btn-primary"
          >
            <Instagram :size="18" />
            {{ t('about.instagram') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
