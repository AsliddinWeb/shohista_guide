<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Instagram, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()

const activeFilter = ref('all')
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const galleryItems = [
  { id: 1, category: 'registan', alt: 'Регистан — площадь' },
  { id: 2, category: 'shahizinda', alt: 'Шахи-Зинда — мозаика' },
  { id: 3, category: 'tours', alt: 'Туристы с гидом' },
  { id: 4, category: 'registan', alt: 'Регистан ночью' },
  { id: 5, category: 'shahrisabz', alt: 'Шахрисабз — Ак-Сарай' },
  { id: 6, category: 'shahizinda', alt: 'Шахи-Зинда — купола' },
  { id: 7, category: 'tours', alt: 'Мастер-класс плов' },
  { id: 8, category: 'registan', alt: 'Регистан — деталь' },
  { id: 9, category: 'tours', alt: 'Мастер-класс самса' },
  { id: 10, category: 'shahrisabz', alt: 'Шахрисабз — мечеть' },
  { id: 11, category: 'shahizinda', alt: 'Шахи-Зинда — вход' },
  { id: 12, category: 'registan', alt: 'Регистан — закат' },
]

const unsplashIds = [
  'photo-1558618666-fcd25c85cd64',
  'photo-1571402748-9cfe24f8b0bb',
  'photo-1565117831766-4e9bc0d13b30',
  'photo-1558618047-f64b2f2e21bb',
  'photo-1540575467063-178a50c2df87',
  'photo-1571402748-9cfe24f8b0bb',
  'photo-1522202176988-66273c2fd55f',
  'photo-1558618666-fcd25c85cd64',
  'photo-1529156069898-49953e39b3ac',
  'photo-1540575467063-178a50c2df87',
  'photo-1571402748-9cfe24f8b0bb',
  'photo-1558618047-f64b2f2e21bb',
]

const filters = ['all', 'registan', 'shahizinda', 'shahrisabz', 'tours']

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

function getImgUrl(id) {
  return `https://images.unsplash.com/${unsplashIds[(id - 1) % unsplashIds.length]}?w=600&q=75&auto=format`
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

      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" data-aos="fade-up">
        <div
          v-for="(item, i) in filtered"
          :key="item.id"
          class="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group relative bg-gray-100 dark:bg-gray-800"
          @click="openLightbox(i)"
        >
          <img
            :src="getImgUrl(item.id)"
            :alt="item.alt"
            class="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-samarkand-950/0 group-hover:bg-samarkand-950/40 transition-all duration-300 flex items-center justify-center">
            <ZoomIn class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" :size="32" />
          </div>
          <div class="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {{ item.alt }}
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
      <div v-if="lightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90" @click.self="closeLightbox">
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
          :src="getImgUrl(filtered[lightboxIndex].id)"
          :alt="filtered[lightboxIndex].alt"
          class="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
        />
        <div class="absolute bottom-4 text-white/60 text-sm">
          {{ lightboxIndex + 1 }} / {{ filtered.length }} — {{ filtered[lightboxIndex].alt }}
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>
