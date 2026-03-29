<script setup>
import { useI18n } from 'vue-i18n'
import {
  BadgeCheck, Languages, UserCheck, Car, Calendar, Star
} from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t, tm, rt } = useI18n()
const icons = [BadgeCheck, Languages, UserCheck, Car, Calendar, Star]
</script>

<template>
  <section id="whyus" class="py-20 bg-samarkand-50 dark:bg-gray-900 relative overflow-hidden">
    <div class="absolute right-0 top-0 w-1/2 h-full opacity-5"
      style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 100px 100px;" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Features -->
        <div>
          <SectionHeading
            :title="t('whyus.title')"
            :subtitle="t('whyus.subtitle')"
            :center="false"
          />

          <div class="space-y-5">
            <div
              v-for="(item, i) in tm('whyus.items')"
              :key="i"
              class="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300"
              data-aos="fade-left"
              :data-aos-delay="i * 80"
            >
              <div class="w-12 h-12 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                <component :is="icons[i]" :size="22" class="text-gold-500" :stroke-width="1.5" />
              </div>
              <div>
                <h3 class="font-semibold text-samarkand-900 dark:text-white mb-1">{{ rt(item.title) }}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ rt(item.description) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Decorative card -->
        <div class="relative" data-aos="fade-right">
          <div class="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-samarkand-900 to-samarkand-950">
            <div class="absolute inset-0 opacity-10"
              style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 60px 60px;" />
            <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div class="w-20 h-20 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center mb-6">
                <BadgeCheck :size="36" class="text-gold-300" :stroke-width="1.5" />
              </div>
              <h3 class="font-heading text-3xl font-bold text-white mb-3">Shohista Guide</h3>
              <p class="text-gold-300 text-sm font-medium uppercase tracking-widest mb-8">
                Certified Tour Guide
              </p>
              <div class="grid grid-cols-2 gap-4 w-full">
                <div v-for="s in [
                  { n: '500+', l: 'Туристов' },
                  { n: '5+', l: 'Лет опыта' },
                  { n: '3', l: 'Языка' },
                  { n: '5★', l: 'Рейтинг' },
                ]" :key="s.l"
                class="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <div class="font-bold text-2xl text-gold-300">{{ s.n }}</div>
                  <div class="text-white/60 text-xs mt-1">{{ s.l }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl" />
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-samarkand-800/50 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  </section>
</template>
