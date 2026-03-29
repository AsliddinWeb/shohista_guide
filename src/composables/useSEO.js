import { useHead } from '@unhead/vue'

export function useSEO({ title, description, keywords, image, url }) {
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shohista Guide' },
      { name: 'geo.region', content: 'UZ-SA' },
      { name: 'geo.placename', content: 'Samarkand' },
      { name: 'geo.position', content: '39.6542;66.9597' },
      { name: 'ICBM', content: '39.6542, 66.9597' },
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:locale:alternate', content: 'uz_UZ' },
      { property: 'og:locale:alternate', content: 'en_US' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TouristInformationCenter',
          name: 'Shohista Guide',
          description,
          url,
          image,
          telephone: '+998XXXXXXXXX',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Samarkand',
            addressRegion: 'Samarkand Region',
            addressCountry: 'UZ',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 39.6542,
            longitude: 66.9597,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '08:00',
            closes: '20:00',
          },
          priceRange: '$$',
          currenciesAccepted: 'USD, UZS',
          paymentAccepted: 'Cash, Card',
          availableLanguage: ['Russian', 'Uzbek', 'English'],
          sameAs: ['https://www.instagram.com/shohista_guide/'],
        }),
      },
    ],
  })
}
