<script setup>
import { useI18n } from 'vue-i18n'
import { ChevronDown, Shield } from 'lucide-vue-next'
import logoUrl from '@/assets/logo.png'

const { t } = useI18n()

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background image -->
    <div class="absolute inset-0">
      <img
        src="@/assets/images/hero-bg.jpg"
        alt="Регистан Самарканд"
        class="w-full h-full object-cover scale-105"
        loading="eager"
        onerror="this.style.display='none'"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-samarkand-950 via-samarkand-900 to-samarkand-950" />
    </div>

    <!-- Islamic pattern overlay -->
    <div class="absolute inset-0 opacity-5"
      style="background-image: url('/src/assets/icons/islamic-pattern.svg'); background-size: 100px 100px;" />

    <!-- Gradient overlay — stronger at bottom on mobile -->
    <div class="absolute inset-0 bg-gradient-to-t from-samarkand-950/95 via-samarkand-950/50 to-transparent sm:bg-hero-gradient" />

    <!-- Certified badge (top-left) -->
    <div class="absolute top-20 sm:top-24 left-4 sm:left-8 z-10"
      data-aos="fade-right" data-aos-delay="400">
      <div class="flex items-center gap-2 bg-gold-400/20 backdrop-blur-sm border border-gold-400/40
                  text-gold-300 text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
        <Shield :size="14" fill="currentColor" />
        {{ t('hero.badge') }}
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 text-center px-4 w-full max-w-4xl mx-auto pt-24 pb-16 sm:pt-24 sm:pb-8">

      <!-- Logo (hero center) -->
      <div class="flex flex-col items-center mb-4 sm:mb-6" data-aos="fade-down" data-aos-delay="50">
        <img :src="logoUrl" alt="AsiMir" class="h-24 sm:h-28 w-auto drop-shadow-2xl" />
        <div class="mt-2 font-heading font-bold text-white text-2xl sm:text-3xl tracking-wide drop-shadow-lg">
          AsiMir
        </div>
        <div class="text-gold-300 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
          Tour &amp; Guide
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <p class="text-gold-300 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
          Samarkand · Shahrisabz · Uzbekistan
        </p>
      </div>

      <h1
        class="font-heading font-bold text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 sm:mb-6"
        data-aos="fade-up" data-aos-delay="200"
      >
        {{ t('hero.title') }}
      </h1>

      <p
        class="text-white/80 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-10"
        data-aos="fade-up" data-aos-delay="300"
      >
        {{ t('hero.subtitle') }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        data-aos="fade-up" data-aos-delay="400">
        <button @click="scrollToSection('tours')" class="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-xs">
          {{ t('hero.cta_tours') }}
        </button>
        <button @click="scrollToSection('contact')" class="btn-outline text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-xs">
          {{ t('hero.cta_contact') }}
        </button>
      </div>

      <!-- Trust indicators -->
      <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 sm:mt-12 text-white/60 text-xs sm:text-sm"
        data-aos="fade-up" data-aos-delay="500">
        <span class="flex items-center gap-1.5">
          <span class="text-gold-400">★★★★★</span>
          Google Reviews
        </span>
        <span class="hidden sm:block w-px h-4 bg-white/20" />
        <span>500+ туристов</span>
        <span class="hidden sm:block w-px h-4 bg-white/20" />
        <span>5+ лет опыта</span>
        <span class="hidden sm:block w-px h-4 bg-white/20" />
        <span>RU · TR · EN</span>
      </div>
    </div>

    <!-- Scroll arrow -->
    <div class="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
      <button @click="scrollToSection('stats')" class="text-white/60 hover:text-white transition-colors">
        <ChevronDown :size="28" />
      </button>
    </div>
  </section>
</template>
