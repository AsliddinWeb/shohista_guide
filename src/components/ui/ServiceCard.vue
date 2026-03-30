<script setup>
import { ArrowRight, Clock } from 'lucide-vue-next'

defineProps({
  icon:        { type: [Object, Function], required: true },
  title:       { type: String, required: true },
  description: { type: String, required: true },
  duration:    { type: String, default: '' },
  note:        { type: String, default: '' },
})

const emit = defineEmits(['book'])
</script>

<template>
  <div class="card p-6 group cursor-pointer" @click="emit('book', title)">
    <!-- Icon -->
    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-amber-400/10
                flex items-center justify-center mb-4
                group-hover:from-gold-400 group-hover:to-amber-400 transition-all duration-300">
      <component :is="icon" :size="28"
        class="text-gold-500 group-hover:text-samarkand-950 transition-colors duration-300"
        :stroke-width="1.5" />
    </div>

    <h3 class="font-heading font-bold text-lg text-samarkand-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
      {{ title }}
    </h3>
    <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{{ description }}</p>

    <div class="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
      <div v-if="duration" class="flex items-center gap-1.5 text-sm text-gray-400">
        <Clock :size="14" class="text-gold-400" />
        {{ duration }}
      </div>
      <div v-else />
      <button class="w-9 h-9 rounded-full bg-gold-400/10 group-hover:bg-gold-400
                     flex items-center justify-center transition-all duration-300">
        <ArrowRight :size="16" class="text-gold-500 group-hover:text-samarkand-950 transition-colors" />
      </button>
    </div>
  </div>
</template>
