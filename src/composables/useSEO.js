import { useHead } from '@unhead/vue'
import { computed, isRef } from 'vue'

const BASE_URL = 'https://shohista-guide.uz'
const OG_IMAGE = `${BASE_URL}/og-image.jpg`
const PHONE = '+998883954141'

const PAGES = {
  home: {
    ru: {
      title: 'Шохиста — Гид по Самарканду | Экскурсии по Шёлковому пути 24/7',
      description: 'Шохиста — сертифицированный гид по Самарканду и Шахрисабзу. Регистан, Шахи-Зинда, Биби-Ханым, Заамин. Индивидуальные и групповые туры на русском, турецком и английском. Работаем 24/7.',
      keywords: 'гид Самарканд, экскурсии Самарканд, тур Самарканд 2025, Регистан экскурсия, Шахи-Зинда тур, Биби-Ханым, Шахрисабз, Шёлковый путь тур, частный гид Узбекистан, Шохиста гид, туризм Самарканд, индивидуальный тур Узбекистан',
    },
    en: {
      title: 'Shohista — Certified Samarkand Tour Guide | Silk Road Tours 24/7',
      description: 'Shohista — certified tour guide in Samarkand & Shahrisabz. Registan, Shah-i-Zinda, Bibi-Khanym, Zaamin. Private & group tours in Russian, Turkish & English. Available 24/7.',
      keywords: 'Samarkand tour guide, Samarkand tours 2025, Silk Road tours, Uzbekistan tour guide, Registan tour, Shah-i-Zinda tour, private guide Samarkand, Shahrisabz tour, Zaamin nature tour, best guide Samarkand, Uzbekistan travel',
    },
    uz: {
      title: 'Shohista — Samarqand sertifikatlangan gidi | Ipak yo\'li turlari 24/7',
      description: 'Shohista — Samarqand va Shahrisabzning sertifikatlangan gidi. Registon, Shohizinda, Bibi-Xonim, Zaamin. Rus, turk va ingliz tillarida xususiy va guruhli turlar. 24/7 ishlaydi.',
      keywords: 'Samarqand gid, Samarqand tur 2025, Ipak yo\'li, Registon ekskursiya, Shohizinda, Shahrisabz tur, O\'zbekiston turizm, Shohista gid, Zaamin tur, xususiy gid O\'zbekiston',
    },
    tr: {
      title: 'Shohista — Sertifikalı Semerkand Rehberi | İpek Yolu Turları 7/24',
      description: 'Shohista — Semerkand ve Şehrisebz\'in sertifikalı rehberi. Registan, Şah-ı Zinde, Bibi Hanım, Zemin. Rusça, Türkçe ve İngilizce özel ve grup turları. 7/24 hizmet.',
      keywords: 'Semerkand rehberi, Semerkand turu 2025, İpek Yolu turu, Özbekistan rehberi, Registan turu, Şah-ı Zinde, özel rehber Semerkand, Şehrisebz turu, Özbekistan gezi, Türkçe rehber Semerkand',
    },
  },
  tours: {
    ru: {
      title: 'Туры по Самарканду — 14 маршрутов | AsiMir Tour & Guide',
      description: 'Экскурсии по Самарканду: Регистан, Шахи-Зинда, Биби-Ханым, Гур-Эмир, Улугбек, Даниял-Атто, Заамин. Индивидуальные и групповые туры. Цена обсуждается при бронировании.',
      keywords: 'туры Самарканд, Регистан тур, Шахи-Зинда, Биби-Ханым экскурсия, Гур-Эмир мавзолей, Шахрисабз экскурсия, Заамин тур, Улугбек обсерватория, Сиёб базар, маршруты Самарканд, экскурсии Узбекистан',
    },
    en: {
      title: 'Samarkand Tours & Excursions — 14 Destinations | AsiMir Tour & Guide',
      description: 'Tours of Samarkand: Registan, Shah-i-Zinda, Bibi-Khanym, Gur-e-Amir, Ulugbek Observatory, Shahrisabz, Zaamin nature. Private & group tours. Price agreed individually.',
      keywords: 'Samarkand tours, Registan tour, Shah-i-Zinda tour, Bibi-Khanym tour, Gur-e-Amir mausoleum, Shahrisabz tour, Zaamin tour, Ulugbek Observatory, Siyob Bazaar, Silk Road excursion, Uzbekistan excursions',
    },
    uz: {
      title: 'Samarqand turlari — 14 yo\'nalish | AsiMir Tour & Guide',
      description: 'Samarqand ekskursiyalari: Registon, Shohizinda, Bibi-Xonim, Guriamir, Ulug\'bek rasadxonasi, Shahrisabz, Zaamin tabiat. Xususiy va guruhli turlar.',
      keywords: 'Samarqand turlari, Registon ekskursiya, Shohizinda, Bibi-Xonim, Shahrisabz tur, Zaamin tur, Ulug\'bek rasadxona, Siyo\'b bozor, O\'zbekiston ekskursiyalari',
    },
    tr: {
      title: 'Semerkand Turları — 14 Güzergah | AsiMir Tour & Guide',
      description: 'Semerkand gezileri: Registan, Şah-ı Zinde, Bibi Hanım, Gur-i Emir, Uluğ Bey Rasathanesi, Şehrisebz, Zemin doğa turu. Özel ve grup turları.',
      keywords: 'Semerkand turları, Registan turu, Şah-ı Zinde, Bibi Hanım, Gur-i Emir türbesi, Şehrisebz turu, Zemin turu, İpek Yolu, Özbekistan turları',
    },
  },
  about: {
    ru: {
      title: 'О гиде Шохисте Мухтаровой | Сертифицированный гид Самарканд',
      description: 'Шохиста Мухтарова — сертифицированный гид по Самарканду и Шахрисабзу с 5-звёздочным рейтингом. Туры на русском, турецком и английском. Более 200 довольных туристов.',
      keywords: 'Шохиста Мухтарова гид, сертифицированный гид Самарканд, гид русский язык Самарканд, профессиональный гид Узбекистан, лучший гид Самарканд',
    },
    en: {
      title: 'About Guide Shohista Mukhtarova | Certified Samarkand Tour Guide',
      description: 'Shohista Mukhtarova — certified tour guide in Samarkand & Shahrisabz with 5-star rating. Tours in Russian, Turkish & English. Over 200 happy tourists.',
      keywords: 'Shohista Mukhtarova guide, certified guide Samarkand, English speaking guide Samarkand, professional tour guide Uzbekistan, best guide Samarkand',
    },
    uz: {
      title: 'Gid Shohista Muxrtorova haqida | Samarqand sertifikatlangan gidi',
      description: 'Shohista Muxrtorova — Samarqand va Shahrisabzning sertifikatlangan gidi, 5 yulduzli reyting. Rus, turk va ingliz tillarida turlar. 200 dan ortiq mamnun sayyohlar.',
      keywords: 'Shohista Muxrtorova gid, sertifikatlangan gid Samarqand, O\'zbekiston professional gid',
    },
    tr: {
      title: 'Rehber Shohista Mukhtarova Hakkında | Sertifikalı Semerkand Rehberi',
      description: 'Shohista Mukhtarova — Semerkand ve Şehrisebz\'in sertifikalı rehberi, 5 yıldızlı değerlendirme. Rusça, Türkçe ve İngilizce turlar.',
      keywords: 'Shohista Mukhtarova rehber, sertifikalı rehber Semerkand, Türkçe rehber Özbekistan, en iyi rehber Semerkand',
    },
  },
  gallery: {
    ru: {
      title: 'Фото Самарканда — Галерея туров | AsiMir Tour & Guide',
      description: 'Фотографии туров по Самарканду — Регистан, Шахи-Зинда, Биби-Ханым, Шахрисабз, Заамин. Красивые фото достопримечательностей Узбекистана.',
      keywords: 'фото Самарканд, галерея Регистан, Шахи-Зинда фото, Биби-Ханым фото, достопримечательности Самарканд, Узбекистан туризм фото, Шахрисабз фото',
    },
    en: {
      title: 'Samarkand Photo Gallery — Tour Moments | AsiMir Tour & Guide',
      description: 'Photos from tours of Samarkand — Registan, Shah-i-Zinda, Bibi-Khanym, Shahrisabz, Zaamin. Beautiful images of Uzbekistan\'s historic landmarks.',
      keywords: 'Samarkand photos, Registan gallery, Shah-i-Zinda photos, Bibi-Khanym photos, Uzbekistan landmarks photos, Samarkand travel photos, Shahrisabz photos',
    },
    uz: {
      title: 'Samarqand fotogalereyasi — Tur lahzalari | AsiMir Tour & Guide',
      description: 'Samarqand turlari fotolari — Registon, Shohizinda, Bibi-Xonim, Shahrisabz, Zaamin. O\'zbekiston diqqatga sazovor joylarining chiroyli rasmlari.',
      keywords: 'Samarqand fotolar, Registon galereya, Shohizinda rasmlari, O\'zbekiston turizm rasmlari, Shahrisabz rasmlari',
    },
    tr: {
      title: 'Semerkand Fotoğraf Galerisi — Tur Anları | AsiMir Tour & Guide',
      description: 'Semerkand turlarından fotoğraflar — Registan, Şah-ı Zinde, Bibi Hanım, Şehrisebz, Zemin. Özbekistan\'ın tarihi mekanlarının güzel görüntüleri.',
      keywords: 'Semerkand fotoğrafları, Registan galeri, Özbekistan tarihi yerler fotoğrafları, Şehrisebz fotoğrafları',
    },
  },
  contact: {
    ru: {
      title: 'Забронировать тур по Самарканду | AsiMir Tour & Guide — Контакты',
      description: 'Забронируйте экскурсию по Самарканду. WhatsApp/Telegram: +998 88 395 41 41. Ответим в течение 2 часов. Работаем 24/7. Индивидуальные и групповые туры.',
      keywords: 'забронировать тур Самарканд, контакты гид Самарканд, WhatsApp гид Самарканд, Telegram гид Самарканд, заявка тур Узбекистан, записаться экскурсия Самарканд',
    },
    en: {
      title: 'Book a Samarkand Tour | AsiMir Tour & Guide — Contact',
      description: 'Book a tour of Samarkand. WhatsApp/Telegram: +998 88 395 41 41. We reply within 2 hours. Available 24/7. Private and group excursions.',
      keywords: 'book Samarkand tour, contact guide Samarkand, WhatsApp guide Samarkand, Uzbekistan tour booking, Samarkand excursion booking',
    },
    uz: {
      title: 'Samarqandda tur bron qilish | AsiMir Tour & Guide — Aloqa',
      description: 'Samarqand bo\'yicha ekskursiyani bron qiling. WhatsApp/Telegram: +998 88 395 41 41. 2 soat ichida javob beramiz. 24/7 ishlaymiz.',
      keywords: 'Samarqand tur bron, Samarqand gid aloqa, WhatsApp gid Samarqand, O\'zbekiston tur buyurtma, Samarqand ekskursiya yozilish',
    },
    tr: {
      title: 'Semerkand Turu Rezervasyonu | AsiMir Tour & Guide — İletişim',
      description: 'Semerkand turu rezervasyonu yapın. WhatsApp/Telegram: +998 88 395 41 41. 2 saat içinde yanıt veriyoruz. 7/24 hizmet.',
      keywords: 'Semerkand turu rezervasyon, rehber Semerkand iletişim, WhatsApp rehber Semerkand, Özbekistan tur rezervasyon',
    },
  },
}

const LANG_MAP = { ru: 'ru', en: 'en', uz: 'uz', tr: 'tr' }

export function useSEO({ page = 'home', locale, image, url }) {
  const getLocale = () => {
    const l = isRef(locale) ? locale.value : (locale || 'ru')
    return LANG_MAP[l] || 'ru'
  }

  const pageData = PAGES[page] || PAGES.home
  const canonicalUrl = url || BASE_URL

  const title     = computed(() => pageData[getLocale()]?.title       || pageData.ru.title)
  const desc      = computed(() => pageData[getLocale()]?.description || pageData.ru.description)
  const keywords  = computed(() => pageData[getLocale()]?.keywords    || pageData.ru.keywords)
  const htmlLang  = computed(() => getLocale())

  const ogImage = image || OG_IMAGE

  useHead({
    htmlAttrs: { lang: htmlLang },
    title,
    meta: [
      { name: 'description',    content: desc },
      { name: 'keywords',       content: keywords },
      { name: 'robots',         content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'author',         content: 'Shohista Mukhtarova — Certified Tour Guide Samarkand' },
      { name: 'revisit-after',  content: '7 days' },
      { name: 'geo.region',     content: 'UZ-SA' },
      { name: 'geo.placename',  content: 'Samarkand, Uzbekistan' },
      { name: 'geo.position',   content: '39.6542;66.9597' },
      { name: 'ICBM',           content: '39.6542, 66.9597' },
      // Open Graph
      { property: 'og:title',              content: title },
      { property: 'og:description',        content: desc },
      { property: 'og:image',              content: ogImage },
      { property: 'og:image:width',        content: '1200' },
      { property: 'og:image:height',       content: '630' },
      { property: 'og:image:alt',          content: 'AsiMir Tour & Guide — Samarkand Tour Guide' },
      { property: 'og:url',                content: canonicalUrl },
      { property: 'og:type',               content: 'website' },
      { property: 'og:site_name',          content: 'AsiMir Tour & Guide' },
      { property: 'og:locale',             content: 'ru_RU' },
      { property: 'og:locale:alternate',   content: 'uz_UZ' },
      { property: 'og:locale:alternate',   content: 'en_US' },
      { property: 'og:locale:alternate',   content: 'tr_TR' },
      // Twitter Card
      { name: 'twitter:card',        content: 'summary_large_image' },
      { name: 'twitter:title',       content: title },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image',       content: ogImage },
      { name: 'twitter:image:alt',   content: 'AsiMir Tour & Guide Samarkand' },
    ],
    link: [
      { rel: 'canonical',  href: canonicalUrl },
      { rel: 'alternate',  hreflang: 'ru',        href: canonicalUrl },
      { rel: 'alternate',  hreflang: 'en',        href: canonicalUrl },
      { rel: 'alternate',  hreflang: 'uz',        href: canonicalUrl },
      { rel: 'alternate',  hreflang: 'tr',        href: canonicalUrl },
      { rel: 'alternate',  hreflang: 'x-default', href: BASE_URL },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': ['TourOperator', 'LocalBusiness', 'TouristInformationCenter'],
              '@id': `${BASE_URL}/#business`,
              name: 'AsiMir',
              alternateName: ['Шохиста Гид', 'Shohista Mukhtarova', 'Semerkand Rehberi', 'Самарканд гид'],
              description: 'Certified professional tour guide in Samarkand, Uzbekistan. Private & group tours: Registan, Shah-i-Zinda, Bibi-Khanym, Gur-e-Amir, Shahrisabz, Zaamin. Silk Road history in Russian, Turkish & English.',
              url: BASE_URL,
              image: ogImage,
              telephone: PHONE,
              email: 'mukhtarova.shokhista@mail.ru',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Samarkand',
                addressRegion: 'Samarkand Region',
                addressCountry: 'UZ',
                postalCode: '140100',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 39.6542,
                longitude: 66.9597,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  opens: '00:00',
                  closes: '23:59',
                },
              ],
              priceRange: '$$',
              currenciesAccepted: 'USD, UZS',
              paymentAccepted: 'Cash, Bank Transfer',
              availableLanguage: [
                { '@type': 'Language', name: 'Russian',  alternateName: 'ru' },
                { '@type': 'Language', name: 'Turkish',  alternateName: 'tr' },
                { '@type': 'Language', name: 'English',  alternateName: 'en' },
              ],
              areaServed: [
                { '@type': 'City', name: 'Samarkand',  sameAs: 'https://en.wikipedia.org/wiki/Samarkand' },
                { '@type': 'City', name: 'Shahrisabz', sameAs: 'https://en.wikipedia.org/wiki/Shahrisabz' },
                { '@type': 'City', name: 'Zaamin' },
              ],
              hasMap: 'https://maps.google.com/?q=39.6542,66.9597',
              sameAs: [
                'https://www.instagram.com/shohista_guide/',
                'https://t.me/shohista_guide',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '200',
                reviewCount: '200',
              },
            },
            {
              '@type': 'Person',
              '@id': `${BASE_URL}/#guide`,
              name: 'Shohista Mukhtarova',
              alternateName: ['Шохиста Мухтарова', 'Шохиста', 'Shohista'],
              jobTitle: 'Certified Tour Guide',
              description: 'Certified tour guide in Samarkand and Shahrisabz, Uzbekistan. Expert in Silk Road history and Islamic architecture. Speaks Russian, Turkish, and English.',
              url: BASE_URL,
              image: ogImage,
              telephone: PHONE,
              email: 'mukhtarova.shokhista@mail.ru',
              worksFor: { '@id': `${BASE_URL}/#business` },
              knowsLanguage: [
                { '@type': 'Language', name: 'Russian' },
                { '@type': 'Language', name: 'Turkish' },
                { '@type': 'Language', name: 'English' },
              ],
              knowsAbout: [
                'Samarkand', 'Silk Road', 'Islamic Architecture', 'Uzbek History',
                'Registan', 'Tamerlane', 'Shah-i-Zinda', 'Bibi-Khanym', 'Shahrisabz',
              ],
              sameAs: ['https://www.instagram.com/shohista_guide/'],
            },
            {
              '@type': 'WebSite',
              '@id': `${BASE_URL}/#website`,
              url: BASE_URL,
              name: 'AsiMir',
              description: 'Certified tour guide in Samarkand — private & group tours of the Silk Road',
              publisher: { '@id': `${BASE_URL}/#business` },
              inLanguage: ['ru', 'en', 'uz', 'tr'],
            },
          ],
        }),
      },
    ],
  })
}
