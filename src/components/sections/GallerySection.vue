<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Instagram, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'

import r1 from '@/assets/images/registan/1.jpg'
import r2 from '@/assets/images/registan/2.jpg'
import r3 from '@/assets/images/registan/3.jpg'
import r4 from '@/assets/images/registan/4.jpg'
import r5 from '@/assets/images/registan/5.jpg'
import r6 from '@/assets/images/registan/6.jpg'
import r7 from '@/assets/images/registan/7.jpg'
import r8 from '@/assets/images/registan/8.jpg'

const { t } = useI18n()

const activeFilter = ref('all')
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const galleryItems = [
  { src: r1, category: 'day',   alt: 'Регистан — kunduz 1' },
  { src: r2, category: 'day',   alt: 'Регистан — kunduz 2' },
  { src: r3, category: 'day',   alt: 'Регистан — kunduz 3' },
  { src: r4, category: 'day',   alt: 'Регистан — kunduz 4' },
  { src: r5, category: 'night', alt: 'Регистан — kechki 1' },
  { src: r6, category: 'night', alt: 'Регистан — kechki 2' },
  { src: r7, category: 'night', alt: 'Регистан — kechki 3' },
  { src: r8, category: 'night', alt: 'Регистан — kechki 4' },
]

const filters = ['all', 'day', 'night']

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter.value)
)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  lightboxIndex.value = (lightboxIndex.value - 1 + filtered.value.length) % filtered.value.length
}

function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % filtered.value.length
}
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

      <!-- Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" data-aos="fade-up">
        <div
          v-for="(item, i) in filtered"
          :key="i"
          class="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group relative bg-gray-100 dark:bg-gray-800"
          @click="openLightbox(i)"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-samarkand-950/0 group-hover:bg-samarkand-950/40 transition-all duration-300 flex items-center justify-center">
            <ZoomIn class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" :size="32" />
          </div>
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

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/95" @click.self="closeLightbox">
        <button @click="closeLightbox" class="absolute top-4 right-4 text-white/70 hover:text-white z-10">
          <X :size="28" />
        </button>
        <button @click="prevImage" class="absolute left-4 text-white/70 hover:text-white z-10 w-12 h-12 flex items-center justify-center">
          <ChevronLeft :size="36" />
        </button>
        <button @click="nextImage" class="absolute right-4 text-white/70 hover:text-white z-10 w-12 h-12 flex items-center justify-center">
          <ChevronRight :size="36" />
        </button>
        <img
          :src="filtered[lightboxIndex].src"
          :alt="filtered[lightboxIndex].alt"
          class="max-h-[90vh] max-w-[92vw] rounded-xl object-contain"
        />
        <div class="absolute bottom-4 text-white/50 text-sm">
          {{ lightboxIndex + 1 }} / {{ filtered.length }}
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>
