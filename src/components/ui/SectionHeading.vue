<script setup>
defineProps({
  title: String,
  subtitle: String,
  light: { type: Boolean, default: false },
  center: { type: Boolean, default: true },
})
</script>

<template>
  <div :class="['mb-12', center ? 'text-center' : 'text-left']" data-aos="fade-up">
    <h2 :class="['section-heading mb-3', light ? 'text-white' : 'text-samarkand-900 dark:text-white']">
      {{ title }}
    </h2>
    <!-- Gold ornament -->
    <div :class="['gold-divider', center ? 'justify-center' : 'justify-start']">
      <div :class="['h-px w-12', light ? 'bg-gold-300' : 'bg-gold-400']" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-gold-400">
        <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" fill="currentColor"/>
      </svg>
      <div :class="['h-px w-12', light ? 'bg-gold-300' : 'bg-gold-400']" />
    </div>
    <p v-if="subtitle" :class="['text-lg max-w-2xl', center ? 'mx-auto' : '', light ? 'text-white/80' : 'text-gray-500 dark:text-gray-400']">
      {{ subtitle }}
    </p>
  </div>
</template>
