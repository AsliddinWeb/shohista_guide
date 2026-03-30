<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Instagram, Mail, MapPin, Clock } from 'lucide-vue-next'
import logoUrl from '@/assets/logo.png'

const { t } = useI18n()

const tours = [
  'Ансамбль Регистан',
  'Шахи-Зинда',
  'Биби-Ханым',
  'Гур-Эмир',
  'Шахрисабз',
]
</script>

<template>
  <footer class="bg-samarkand-950 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <img :src="logoUrl" alt="Shohista Guide" class="h-12 w-auto brightness-110" />
            <div>
              <div class="font-heading font-bold text-xl">Shohista Guide</div>
              <div class="text-gold-400 text-xs">Samarkand</div>
            </div>
          </div>
          <p class="text-white/60 text-sm leading-relaxed">
            {{ t('footer.tagline') }}
          </p>
          <a
            href="https://www.instagram.com/shohista_guide/"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 mt-4 text-pink-400 hover:text-pink-300 transition-colors font-medium text-sm"
          >
            <Instagram :size="18" />
            @shohista_guide
          </a>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-heading font-semibold text-lg text-gold-400 mb-4">{{ t('footer.quick_links') }}</h4>
          <ul class="space-y-2">
            <li v-for="item in [
              { to: '/', key: 'nav.home' },
              { to: '/tours', key: 'nav.tours' },
              { to: '/about', key: 'nav.about' },
              { to: '/gallery', key: 'nav.gallery' },
              { to: '/contact', key: 'nav.contact' },
            ]" :key="item.to">
              <RouterLink :to="item.to" class="text-white/60 hover:text-gold-300 text-sm transition-colors">
                {{ t(item.key) }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Tours -->
        <div>
          <h4 class="font-heading font-semibold text-lg text-gold-400 mb-4">{{ t('footer.our_tours') }}</h4>
          <ul class="space-y-2">
            <li v-for="tour in tours" :key="tour">
              <RouterLink to="/tours" class="text-white/60 hover:text-gold-300 text-sm transition-colors">
                {{ tour }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-heading font-semibold text-lg text-gold-400 mb-4">{{ t('footer.social') }}</h4>
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-sm text-white/60">
              <MapPin :size="16" class="text-gold-400 flex-shrink-0" />
              {{ t('contact.address') }}
            </div>
            <div class="flex items-center gap-3 text-sm text-white/60">
              <Clock :size="16" class="text-gold-400 flex-shrink-0" />
              {{ t('contact.schedule') }}
            </div>
            <a href="mailto:mukhtarova.shokhista@mail.ru" class="flex items-center gap-3 text-sm text-white/60 hover:text-gold-300 transition-colors">
              <Mail :size="16" class="text-gold-400 flex-shrink-0" />
              mukhtarova.shokhista@mail.ru
            </a>
            <a href="tel:+998883954141" class="flex items-center gap-3 text-sm text-white/60 hover:text-gold-300 transition-colors">
              <span class="text-gold-400 text-base flex-shrink-0">📞</span>
              +998 88 395 41 41
            </a>
          </div>
          <!-- Languages -->
          <div class="mt-6">
            <h5 class="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2">
              {{ t('footer.languages_title') }}
            </h5>
            <div class="flex gap-2">
              <span class="px-2 py-1 rounded bg-white/10 text-xs text-white/70">RU</span>
              <span class="px-2 py-1 rounded bg-white/10 text-xs text-white/70">TR</span>
              <span class="px-2 py-1 rounded bg-white/10 text-xs text-white/70">EN</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
        <p>{{ t('footer.copyright') }}</p>
        <div class="flex items-center gap-4">
          <RouterLink to="/contact" class="hover:text-white/70 transition-colors">
            {{ t('footer.privacy') }}
          </RouterLink>
          <span>{{ t('footer.made_with') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
