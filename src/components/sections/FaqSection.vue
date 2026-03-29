<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t, tm, rt } = useI18n()
const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="py-20 bg-white dark:bg-gray-950">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <SectionHeading
        :title="t('faq.title')"
        :subtitle="t('faq.subtitle')"
      />

      <div class="space-y-3">
        <div
          v-for="(item, i) in tm('faq.items')"
          :key="i"
          class="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gold-400/40 transition-colors bg-white dark:bg-gray-900"
          data-aos="fade-up"
          :data-aos-delay="(i % 4) * 50"
        >
          <button
            @click="toggle(i)"
            class="w-full flex items-center justify-between p-5 text-left hover:bg-samarkand-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span :class="['font-medium pr-4', openIndex === i ? 'text-gold-500' : 'text-samarkand-900 dark:text-white']">
              {{ rt(item.question) }}
            </span>
            <ChevronDown
              :size="20"
              :class="[
                'flex-shrink-0 text-gold-400 transition-transform duration-300',
                openIndex === i ? 'rotate-180' : ''
              ]"
            />
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openIndex === i" class="overflow-hidden">
              <div class="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-3">
                {{ rt(item.answer) }}
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
