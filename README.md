# Shohista Guide — Samarkand Tour Guide Website

Production-ready Vue 3 + Tailwind CSS website for **Shohista Guide**, a certified tour guide company based in Samarkand, Uzbekistan.

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Tailwind CSS 3** (gold/emerald custom palette)
- **Vue Router 4** (hash mode — static hosting compatible)
- **Vue i18n 9** (RU default / UZ / EN)
- **@vueuse/core** (composables)
- **lucide-vue-next** (icons)
- **Swiper.js 11** (tours + testimonials carousel)
- **AOS** (scroll animations)
- **@emailjs/browser** (contact form)
- **axios** (Telegram Bot notifications)
- **@unhead/vue** (dynamic SEO meta)
- **Vite 5** (build tool)

---

## Quick Start

```bash
npm install
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview production build
```

---

## Project Structure

```
src/
├── assets/
│   ├── logo.png                ← Replace with real logo
│   ├── images/
│   │   ├── hero-bg.jpg         ← Registan panorama (required)
│   │   ├── about-shohista.jpg  ← Guide's professional photo
│   │   ├── tours/              ← 6 tour images (see below)
│   │   └── gallery/            ← 12 gallery images
│   └── icons/islamic-pattern.svg
├── components/
│   ├── layout/    NavBar, Footer, MobileMenu
│   ├── sections/  10 home page sections
│   └── ui/        TourCard, ServiceCard, StatCounter, etc.
├── views/         5 pages
├── locales/       ru.json (primary), uz.json, en.json
├── composables/   useSEO, useEmailJS, useTelegramBot
├── config/        integrations.js (EmailJS + Telegram tokens)
└── router/        index.js (hash mode)
```

---

## Required Images

Replace placeholder files with real images:

| File | Description |
|------|-------------|
| `src/assets/logo.png` | Company logo |
| `src/assets/images/hero-bg.jpg` | Hero background (Registan panorama) |
| `src/assets/images/about-shohista.jpg` | Guide's photo |
| `src/assets/images/tours/registan.jpg` | Registan ensemble |
| `src/assets/images/tours/shahizinda.jpg` | Shah-i-Zinda |
| `src/assets/images/tours/bibikhanym.jpg` | Bibi-Khanym mosque |
| `src/assets/images/tours/guremir.jpg` | Gur-e-Amir mausoleum |
| `src/assets/images/tours/afrasiab.jpg` | Afrasiab Museum |
| `src/assets/images/tours/shahrisabz.jpg` | Shahrisabz / Ak-Saray |

**Tip:** Use WebP format for best performance. Recommended sizes:
- Hero: 1920×1080px
- Tour cards: 800×600px
- About photo: 600×750px

---

## EmailJS Setup

1. Go to [emailjs.com](https://www.emailjs.com/) → create account
2. Add an **Email Service** (Gmail / custom SMTP)
3. Create an **Email Template** with variables:
   - `{{from_name}}`, `{{from_email}}`, `{{phone}}`
   - `{{tour}}`, `{{travel_date}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, **Public Key**
5. Paste into `src/config/integrations.js`:

```js
export const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx',
  templateId: 'template_xxxxxxx',
  publicKey: 'xxxxxxxxxxxxxxxxx',
}
```

---

## Telegram Bot Setup

1. Open Telegram → search **@BotFather**
2. Send `/newbot` → follow instructions → copy **BOT_TOKEN**
3. Start a chat with your new bot (send any message)
4. Open in browser:
   ```
   https://api.telegram.org/bot{BOT_TOKEN}/getUpdates
   ```
5. Find `"chat":{"id": XXXXXXXX}` → this is your **CHAT_ID**
6. Paste both into `src/config/integrations.js`:

```js
export const TELEGRAM_CONFIG = {
  botToken: '1234567890:ABCdefGHIjklMNOpqrSTUvwxYZ',
  chatId: '123456789',
}
```

7. **Test:** Submit the contact form → you should receive a Telegram notification instantly ✅

---

## Deployment

### Netlify (recommended)

```bash
npm run build
# Deploy the /dist folder to Netlify
```

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- The `public/_redirects` file handles SPA routing automatically

### Vercel

```bash
npm run build
# Deploy /dist — Vercel auto-detects Vite config
```

### Recommended Domain

`shohista-guide.uz` — Uzbekistan ccTLD boosts local Google ranking significantly.

---

## SEO Configuration

Each view calls `useSEO()` with page-specific metadata. The composable sets:
- `<title>` and meta description
- Open Graph tags (for social sharing)
- Twitter Card tags
- Geo meta tags (Samarkand coordinates)
- JSON-LD structured data (TouristInformationCenter schema)

---

## i18n

Default language: **Russian** (`ru`)

To change language programmatically:
```js
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
locale.value = 'uz' // or 'en'
```

Locale is persisted in `localStorage` across page reloads.

---

## Customization Checklist

- [ ] Replace `src/assets/logo.png` with real logo
- [ ] Add all real images (hero, about, 6 tour photos)
- [ ] Update email in `Footer.vue` and `ContactSection.vue`
- [ ] Configure EmailJS credentials in `src/config/integrations.js`
- [ ] Configure Telegram Bot in `src/config/integrations.js`
- [ ] Update phone number in `src/composables/useSEO.js`
- [ ] Update sitemap URLs with real domain
- [ ] Add Google Analytics / Meta Pixel if needed

---

## Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| SEO | 100 |
| Accessibility | 90+ |
| Best Practices | 95+ |
| LCP | < 2.5s |
| CLS | < 0.1 |

---

© 2024 Shohista Guide. Made with ❤️ in Samarkand, Uzbekistan.
