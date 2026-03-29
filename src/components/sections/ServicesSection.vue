<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import {
  Landmark, Users, Car, Camera, Building2, Moon, UtensilsCrossed, ChefHat
} from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'

const { t, tm, rt } = useI18n()
const router = useRouter()

const icons = [Landmark, Users, UtensilsCrossed, ChefHat, Building2, Car]

function getItems() {
  return tm('services.items')
}

function handleBook() {
  router.push({ path: '/contact' })
}
</script>

<template>
  <section id="services" class="py-20 bg-samarkand-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        :title="t('services.title')"
        :subtitle="t('services.subtitle')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          v-for="(service, i) in getItems()"
          :key="i"
          :icon="icons[i]"
          :title="rt(service.title)"
          :description="rt(service.description)"
          :price="rt(service.price)"
          :duration="rt(service.duration)"
          :note="service.note ? rt(service.note) : ''"
          @book="handleBook"
          data-aos="fade-up"
          :data-aos-delay="(i % 3) * 100"
        />
      </div>
    </div>
  </section>
</template>
