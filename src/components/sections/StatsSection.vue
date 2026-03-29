<script setup>
import { useI18n } from 'vue-i18n'
import { Users, Star, Globe, MapPin } from 'lucide-vue-next'
import StatCounter from '@/components/ui/StatCounter.vue'

const { t } = useI18n()

const stats = [
  { end: 500, label: () => t('stats.tourists'), suffix: '+', icon: Users },
  { end: 5, label: () => t('stats.experience'), suffix: '+', icon: Star },
  { end: 3, label: () => t('stats.languages'), suffix: '', icon: Globe },
  { end: 2, label: () => t('stats.cities'), suffix: '', icon: MapPin },
]
</script>

<template>
  <section id="stats" class="bg-gradient-to-r from-samarkand-950 via-samarkand-900 to-samarkand-950 py-16 relative overflow-hidden">
    <!-- Gold accent top border -->
    <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

    <!-- Decorative pattern -->
    <div class="absolute inset-0 opacity-5"
      style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 80px 80px;" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-1 divide-x divide-y sm:divide-y-0 divide-white/10">
        <StatCounter
          v-for="(stat, i) in stats"
          :key="i"
          :end="stat.end"
          :label="stat.label()"
          :suffix="stat.suffix"
          :icon="stat.icon"
          data-aos="zoom-in"
          :data-aos-delay="i * 100"
        />
      </div>
    </div>

    <!-- Gold accent bottom border -->
    <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
  </section>
</template>
