<script setup>
import { ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { ArrowUp } from 'lucide-vue-next'

const { y } = useWindowScroll()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition name="fade">
    <button
      v-if="y > 400"
      @click="scrollToTop"
      class="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full
             bg-gold-400 text-samarkand-950 shadow-lg
             hover:bg-gold-300 hover:scale-110 transition-all duration-300
             flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <ArrowUp :size="20" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
