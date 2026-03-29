<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  end: { type: Number, required: true },
  label: { type: String, required: true },
  suffix: { type: String, default: '+' },
  icon: { type: [Object, Function], default: null },
})

const el = ref(null)
const count = ref(0)
const started = ref(false)

const { stop } = useIntersectionObserver(el, ([entry]) => {
  if (entry.isIntersecting && !started.value) {
    started.value = true
    animateCount()
    stop()
  }
})

function animateCount() {
  const duration = 2000
  const steps = 60
  const increment = props.end / steps
  let current = 0
  const interval = setInterval(() => {
    current += increment
    if (current >= props.end) {
      count.value = props.end
      clearInterval(interval)
    } else {
      count.value = Math.floor(current)
    }
  }, duration / steps)
}
</script>

<template>
  <div ref="el" class="flex flex-col items-center gap-2 p-6">
    <div v-if="icon" class="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center mb-2">
      <component :is="icon" :size="24" class="text-gold-300" :stroke-width="1.5" />
    </div>
    <div class="flex items-end gap-1">
      <span class="text-5xl font-heading font-bold text-white">{{ count }}</span>
      <span class="text-3xl font-bold text-gold-300 mb-1">{{ suffix }}</span>
    </div>
    <p class="text-white/70 text-sm text-center uppercase tracking-wider">{{ label }}</p>
  </div>
</template>
