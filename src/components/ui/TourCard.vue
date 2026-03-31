<script setup>
import { Clock, Users, Star } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

useI18n({ useScope: 'global' })

defineProps({
  image:       { type: String, default: '' },
  name:        { type: String, required: true },
  tag:         { type: String, default: '' },
  description: { type: String, default: '' },
  duration:    { type: String, required: true },
  groupSize:   { type: String, default: '1–15 чел' },
  highlights:  { type: Array, default: () => [] },
})

const emit = defineEmits(['book'])
</script>

<template>
  <div class="card overflow-hidden group h-full flex flex-col">
    <!-- Image -->
    <div class="relative h-52 overflow-hidden bg-samarkand-100 dark:bg-gray-800">
      <img
        v-if="image"
        :src="image"
        :alt="name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div v-else class="w-full h-full shimmer" />
      <!-- Day / category badge -->
      <div v-if="tag" class="absolute top-3 left-3 bg-samarkand-950/80 backdrop-blur-sm text-gold-300 text-xs font-semibold px-3 py-1 rounded-full">
        {{ tag }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-col flex-1">
      <h3 class="font-heading font-bold text-xl text-samarkand-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
        {{ name }}
      </h3>
      <p v-if="description" class="text-sm text-gray-500 dark:text-gray-400 italic mb-3 leading-snug">
        {{ description }}
      </p>

      <!-- Meta -->
      <div class="flex flex-wrap gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
        <span class="flex items-center gap-1">
          <Clock :size="14" class="text-gold-400" />
          {{ duration }}
        </span>
        <span class="flex items-center gap-1">
          <Users :size="14" class="text-gold-400" />
          {{ groupSize }}
        </span>
      </div>

      <!-- Highlights -->
      <ul v-if="highlights.length" class="space-y-1.5 mb-5 flex-1">
        <li
          v-for="h in highlights"
          :key="h"
          class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
        >
          <Star :size="12" class="text-gold-400 flex-shrink-0" fill="currentColor" />
          {{ h }}
        </li>
      </ul>

      <!-- CTA -->
      <button
        @click="emit('book', { name })"
        class="btn-primary w-full justify-center mt-auto"
      >
        {{ $t('tours.book_tour') }}
      </button>
    </div>
  </div>
</template>
