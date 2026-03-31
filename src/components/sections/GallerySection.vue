<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Instagram } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()

const activeFilter = ref('all')
const galleryItems = [
  { src: '', category: 'registan',   alt: 'Регистан ночью' },
  { src: '', category: 'registan',   alt: 'Регистан — закат' },
  { src: '', category: 'shahizinda', alt: 'Шахи-Зинда — мозаика' },
  { src: '', category: 'shahizinda', alt: 'Шахи-Зинда — купола' },
  { src: '', category: 'registan',   alt: 'Регистан — величие' },
  { src: '', category: 'shahrisabz', alt: 'Шахрисабз — Ак-Сарай' },
  { src: '', category: 'shahizinda', alt: 'Купола — синева' },
  { src: '', category: 'registan',   alt: 'Регистан — детали' },
  { src: '', category: 'shahrisabz', alt: 'Шахрисабз — мечеть' },
  { src: '', category: 'shahizinda', alt: 'Шахи-Зинда — вход' },
  { src: '', category: 'registan',   alt: 'Регистан — рассвет' },
  { src: '', category: 'shahizinda', alt: 'Купола — узор' },
]

const filters = ['all', 'registan', 'shahizinda', 'shahrisabz']

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter.value)
)


</script>

<template>
  <section id="gallery" class="py-20 bg-white dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        :title="t('gallery.title')"
        :subtitle="t('gallery.subtitle')"
      />

      <!-- Filter buttons -->
      <div class="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up">
        <button
          v-for="f in filters"
          :key="f"
          @click="activeFilter = f"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            activeFilter === f
              ? 'bg-gold-400 text-samarkand-950 shadow-md'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gold-50 dark:hover:bg-gray-700 hover:text-gold-600'
          ]"
        >
          {{ t(`gallery.categories.${f}`) }}
        </button>
      </div>

      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" data-aos="fade-up">
        <div
          v-for="(item, i) in filtered"
          :key="i"
          class="break-inside-avoid overflow-hidden rounded-2xl relative bg-gray-100 dark:bg-gray-800"
        >
          <div class="shimmer w-full h-52" />
        </div>
      </div>

      <div class="text-center mt-10" data-aos="fade-up">
        <a
          href="https://www.instagram.com/shohista_guide/"
          target="_blank"
          rel="noopener"
          class="btn-primary inline-flex"
        >
          <Instagram :size="18" />
          {{ t('gallery.instagram_btn') }}
        </a>
      </div>
    </div>

  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>
