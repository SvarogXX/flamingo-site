# 🔧 TROUBLESHOOTING & MONITORING GUIDE

## Flamingo CRM - Повний посібник проблем та рішень

---

## 📋 ЧАСТТІ ПРОБЛЕМИ & РІШЕННЯ

### 1️⃣ ІНДЕКСАЦІЯ

#### ❌ Проблема: "URL not indexed"

```
Симптом:
- Сайт в GSC показує "Coverage: Not indexed"
- Google не показує сайт у пошуку
- Zero impressions in Search Analytics

Діагностика:
□ Перевірте robots.txt: allow /
□ Перевірте .robots meta: index, follow
□ Перевірте SSL certificate (HTTPS)
□ Дождіться 48-72 часи від запущення
□ Перевіріте GSC за crawl errors
```

**Рішення:**

```bash
# Крок 1: Перевірте robots.txt локально
curl https://flamingo-crm.com/robots.txt

# Крок 2: Перевірте мета-теги
curl -I https://flamingo-crm.com | grep -i robots

# Крок 3: Подайте manually в GSC
# Дви сторінку → URL Inspection → Request Indexing

# Крок 4: Очистіть шкешх Google
# Приблизно Google Cache → Request Indexation
```

**Очікуваний результат:**

- День 1-2: Surface under review
- День 3-7: Indexed (зазвичай)
- Після: Видно у пошуку

---

#### ❌ Проблема: "Crawl error: 404"

```
Симптом:
- GSC показує errors в Coverage
- Google не може знайти деякі URL

Діагностика:
□ Перевірте чи сторінки існують
□ Перевірте 404 page
□ Дивіться на error log в GSC
□ Перевірте redirects у next.config.ts
```

**Рішення:**

```typescript
// next.config.ts - Додайте redirects
const config = {
  async redirects() {
    return [
      // Старі URL → Нові
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true, // 301 redirect
      },
    ];
  },
};
```

---

#### ❌ Проблема: "Soft 404"

```
Симптом:
- Google вважає сторінку як 404
- Але вона насправді існує
- Content is valid but Google confused

Діагностика:
□ Перевірте структуру контенту
□ Додайте більше текстового контенту (400+ слів)
□ Покращите internal linking
□ Добавьте clear H1 заголовок
□ Додайте schema.org markup
```

**Рішення:**

```tsx
// Приклад: Додайте schema.org для сторінки
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Page Title",
      description: "Page description",
      // ... інша schema інформація
    }),
  }}
/>
```

---

### 2️⃣ ВИДИМІСТЬ В ПОШУКУ

#### ❌ Проблема: "Zero impressions"

```
Симптом:
- Сайт в GSC але 0 impressions
- Не видно в результатах пошуку
- CTR = 0%

Причини:
□ Сайт занадто новий (чекайте 1-4 тиж)
□ Контент низької якості
□ Ключові слова занадто конкурентні
□ Нема authority/backlinks
□ Не оптимізовано для SERPs
```

**Рішення (за 3-4 тижні):**

```
Тиждень 1-2:
  ✓ Додайте більше контенту (300+ слів на сторінку)
  ✓ Оптимізуйте title/description для SERPs
  ✓ Додайте internal links
  ✓ Покращите page speed

Тиждень 3-4:
  ✓ Будуйте backlinks (guest posts, citations)
  ✓ Оптимізуйте long-tail keywords
  ✓ Додайте FAQ section
  ✓ Поліпшите user experience
```

**Очікуваний результат:**

- Дні 5-7: Перші impressions
- Неділя 2-3: Перші клік
- Місяць 1: Стабільна видимість

---

#### ❌ Проблема: "Низькі позиції (10+)"

```
Симптом:
- Сайт видно але на позиціях 10+
- Чи на другій сторінці результатів
- Low CTR

Причини:
□ Слабкий контент (< 300 слів)
□ Неправильна оптимізація
□ Недостатньо backlinks
□ High competition keywords
□ Погана user experience
```

**Рішення:**

```
1. Контент оптимізація:
   □ Розширте контент до 1000+ слів
   □ Додайте h2/h3 підзаголовки
   □ Включіть семантичні варіанти keyword
   □ Додайте FAQ section
   □ Використовуйте natural language

2. SEO оптимізація:
   □ Оптимізуйте meta title (55-60 chars)
   □ Оптимізуйте meta description (155-160 chars)
   □ Включіть keyword в перший параграф
   □ Використовуйте bold/italic для keywords
   □ Оптимізуйте alt text на images

3. Authority building:
   □ Будуйте backlinks від релевантних сайтів
   □ Guest posts на авторитетних блогах
   □ Local citations if applicable
   □ Social signals
   □ User reviews/ratings

4. UX оптимізація:
   □ Покращите page speed (< 3s)
   □ Мобільна версія (100% responsive)
   □ Чітка CTA кнопка
   □ Інтерне links to related content
   □ Правильна heading hierarchy
```

---

### 3️⃣ PERFORMANCE

#### ❌ Проблема: "Slow page speed"

```
Симптом:
- PageSpeed Insights < 50
- Core Web Vitals: Poor
- Users leaving site quickly

Метрики:
❌ LCP (Largest Contentful Paint) > 2.5s
❌ FID (First Input Delay) > 100ms
❌ CLS (Cumulative Layout Shift) > 0.1
```

**Рішення:**

```typescript
// next.config.ts - Вже оптимізовано
const config = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Security headers already enabled
  asServers: ['strict-transport-security', ...],
}
```

```typescript
// Додайте це у pages/image
import Image from 'next/image'

// ✅ ДОБРЕ - Next.js optimization
<Image
  src="/og-image.jpg"
  alt="description"
  width={1200}
  height={630}
  priority // для LCP images
/>

// ❌ ПОГАНО - No optimization
<img src="/og-image.jpg" alt="description" />
```

**Чек-лист:**

```
Перевірка performance:
□ Запустіть PageSpeed Insights
□ LCP < 2.5s (Core Web Vital)
□ FID < 100ms (Core Web Vital)
□ CLS < 0.1 (Core Web Vital)
□ Mobile score > 80
□ Desktop score > 90

Якщо < 80:
□ Оптимізуйте зображення
□ Мінімізуйте JS/CSS
□ Використовуйте lazy loading
□ Активуйте caching
□ Гляньте на Lighthouse report untuk деталей
```

---

#### ❌ Проблема: "High bounce rate"

```
Симптом:
- Bounce rate > 70%
- Session duration < 15s
- Users leaving immediately

Причини:
□ Сайт завантажується повільно
□ Мобільна версія поганої якості
□ Контент не відповідає intent
□ Занадто багато реклами/popups
□ Темний UX або погана навігація
□ Layout shifts (CLS issue)
```

**Рішення:**

```
1. Швидше завантаження:
   □ Оптимізуйте зображення (WebP)
   □ Скоротіть JS/CSS bundles
   □ Активуйте browser caching
   □ Настройте CDN

2. Мобільна оптимізація:
   □ Тестуйте на реальних devices
   □ Ensure buttons are large enough
   □ No popup ads immediately
   □ Readable text (16px+ font)
   □ Sufficient tap targets (48x48px)

3. UX поліпшення:
   □ Clear headline/value proposition
   □ High quality images/videos
   □ Easy navigation
   □ Clear CTA buttons
   □ No distraction elements

4. Контент поліпшення:
   □ Match search intent
   □ Answer user questions
   □ Provide value immediately
   □ Use subheadings/bullets
   □ Add visual elements
```

---

### 4️⃣ ТЕХНІЧНІ ПРОБЛЕМИ

#### ❌ Проблема: "SSL/HTTPS error"

```
Симптом:
- Chrome показує "Not Secure"
- Mixed content warnings
- GSC showing security issues

Діагностика:
curl -v https://flamingo-crm.com
# Должно показати HTTP/1.1 200 OK
# Certificate: valid
```

**Рішення:**

```bash
# Перевірте SSL status
openssl s_client -connect flamingo-crm.com:443 -showcerts

# Перевірте mixed content (inspect в Chrome)
# DevTools → Security tab → Check for warnings

# Зафіксіть http → https redirects
# next.config.ts вже налаштовано for this
```

---

#### ❌ Проблема: "Sitemap errors"

```
Симптом:
- GSC показує sitemap errors
- Some URLs in sitemap are 404
- Large sitemap file

Діагностика:
curl https://flamingo-crm.com/sitemap.xml
# Перевірте XML validity
# XML still valid
```

**Рішення:**

```typescript
// app/sitemap.ts
const sitemap: MetadataRoute.Sitemap = [
  // Усі URLs мають бути 200 OK
  // Не мають бути 404 або redirects

  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  // ... інші pages
];
```

---

#### ❌ Проблема: "Robots.txt blocking"

```
Симптом:
- GSC says robots.txt blocking indexing
- Crawl not allowed

Діагностика:
curl https://flamingo-crm.com/robots.txt
```

**Поточна конфігурація (OK):**

```
# Дозволити все
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Sitemap вказано
Sitemap: https://flamingo-crm.com/sitemap.xml
```

---

### 5️⃣ GOOGLE SEARCH CONSOLE

#### ❌ Проблема: "Verification failed"

```
Симптом:
- GSC не може підтвердити власність
- Property status: Verification required

Розв'язання:
□ DNS verification (рекомендовано)
  - Скопіюйте TXT запис
  - Додайте у DNS провайдера
  - Чекайте 10-15 хвилин

□ HTML file verification
  - Завантажіть HTML файл
  - Розмістіть в public/
  - Доступна по URL

□ Google Tag Manager
  - Створіть GTM container
  - Додайте GTM код в layout.tsx
```

**Для DNS verification:**

```bash
# У DNS провайдера (Namecheap, GoDaddy, CloudFlare etc)
# Додайте TXT запис:
google-site-verification=abc123xyz...

# Перевірте propagation
nslookup -type=TXT flamingo-crm.com
```

---

#### ❌ Проблема: "No data in Search Analytics"

```
Симптом:
- GSC показує verified
- Але нічого в Search Analytics
- Zero clicks, impressions

Причини:
□ Сайт занадто новий (чекайте 5-7 днів)
□ Сайт не в пошуку (Google не індексував)
□ Контент не релевантний користувачам

Рішення:
□ Чекайте 5-7 днів
□ Перевірте Coverage за errors
□ Request manual indexing для homepage
□ Перевірте Search Analytics на що-небудь > 0
```

---

### 6️⃣ ANALYTICS

#### ❌ Проблема: "No data in Google Analytics"

```
Симптом:
- GA4 property створений
- Але нічого не записується
- Realtime: No activity

Діагностика:
□ Перевірте GA4 measurement ID
□ Перевірте чи GA ID у .env.local
□ Перевірте чи GA script на сайті
□ Перевірте DevTools Console for errors
```

**Рішення:**

```bash
# Крок 1: Додайте GA ID у .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Крок 2: Перевірте чи ID у layout.tsx
grep -r "NEXT_PUBLIC_GA_ID" app/

# Крок 3: Збудуйте і розгорніть
npm run build
npm start

# Крок 4: Перевірте у GA4 Realtime
# visitіть сайт і чекайте реального часу активності
```

---

## 📊 МОНІТОРИНГ CHECKLIST

### Щоденно (перший тиждень)

```
День 1:
  ☑ Сайт доступный в браузері
  ☑ Немає console errors
  ☑ Форми працюють
  ☑ GSC: property created

День 2:
  ☑ GSC: verification passed
  ☑ GSC: sitemap submitted
  ☑ GSC: request indexing homepage
  ☑ GA4: property created & tracking

День 3-7:
  ☑ GSC: Coverage report checked
  ☑ GSC: Search Analytics (expecting 0 still)
  ☑ GA4: data coming in (Realtime)
  ☑ No crawl errors in GSC
```

### Щотижня (перші 4 тижні)

```
Тиждень 1:
  □ GSC Coverage: 50%+ indexed
  □ GA4: Regular traffic
  □ No errors in GSC
  □ Page speed: > 50 (PageSpeed Insights)

Тиждень 2:
  □ GSC Coverage: 80%+ indexed
  □ GSC Search Analytics: First impressions
  □ GA4: Traffic trend
  □ User engagement: Bounce rate, session duration

Тиждень 3:
  □ GSC Coverage: 95%+ indexed
  □ GSC Search Analytics: First clicks
  □ GA4: Conversion tracking (if applicable)
  □ Keyword rankings: Check via SEO tools

Тиждень 4:
  □ All pages indexed
  □ Regular traffic in GA4
  □ Some keyword impressions
  □ First results in positioning
```

### Щомісячно

```
Місяць 1:
  □ Indexation complete (100%)
  □ Organic traffic established
  □ Keyword positions identified
  □ Bounce rate < 60%
  □ Avg session > 30s
  □ Page speed > 70

Місяць 2-3:
  □ Traffic growth trend (month-over-month)
  □ Keyword positions improving
  □ Pages ranking for multiple keywords
  □ New backlinks acquired
  □ User engagement metrics improving
```

---

## 🔗 КОРИСНІ ІНСТРУМЕНТИ

```
SEO Monitoring:
  □ Google Search Console: https://search.google.com/search-console
  □ Google Analytics 4: https://analytics.google.com
  □ PageSpeed Insights: https://pagespeed.web.dev
  □ Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
  □ Schema Validator: https://validator.schema.org

Rank Tracking:
  □ Google Positions: Built into GSC
  □ Semrush: https://semrush.com (paid)
  □ Ahrefs: https://ahrefs.com (paid)
  □ Moz: https://moz.com (paid)
  □ SE Ranking: https://seranking.com (paid)

Backlink Monitoring:
  □ GSC Links: https://search.google.com/search-console
  □ Ahrefs: https://ahrefs.com
  □ Moz Link Explorer: https://moz.com
  □ SE Ranking: https://seranking.com
  □ Majestic: https://majestic.com

Technical:
  □ Lighthouse: Built into Chrome DevTools
  □ GTmetrix: https://gtmetrix.com
  □ WebPageTest: https://webpagetest.org
  □ Screaming Frog: https://screamingfrog.co.uk

Content:
  □ Surfer SEO: https://surferseo.com (paid)
  □ Clearscope: https://clearscope.io (paid)
  □ Google Trends: https://trends.google.com (free)
  □ AnswerThePublic: https://answerthepublic.com
```

---

## 📞 SUPPORT CONTACTS

```
Google Support:
  □ Search Central: https://support.google.com/webmasters/
  □ Analytics Help: https://support.google.com/analytics
  □ Google Product Forums: https://support.google.com/accounts/community

Hosting Support:
  □ Vercel: https://vercel.com/support (if using Vercel)
  □ Heroku: https://help.heroku.com (if using Heroku)
  □ Your provider: Check your hosting dashboard

Domain/DNS:
  □ Your registrar support (Namecheap, GoDaddy, etc.)
  □ Your DNS provider support (CloudFlare, etc.)
```

---

## ✅ ОСТАТОЧНА ПЕРЕВІРКА

```
Перед розгортанням:
  ☑ npm run build (success)
  ☑ npm start (localhost:3000 works)
  ☑ Всі сторінки доступні локально
  ☑ Форми функціонують
  ☑ Немає console errors
  ☑ .env.local налаштований

Після розгортання:
  ☑ Сайт доступный по доменом
  ☑ HTTPS works (green lock)
  ☑ Все функціонує на production
  ☑ Створена GSC property
  ☑ Створена GA4 property
  ☑ Sitemap знаходянізм на /sitemap.xml
  ☑ Robots.txt на /robots.txt

Упродовж першого тижня:
  ☑ GSC приємання перевірка власності
  ☑ GSC sitemap submitted
  ☑ GSC request indexing
  ☑ GA4 дані приходять
  ☑ Нема критичних помилок
```

---

**Дата:** 28 лютого 2026  
**Версія:** 1.0  
**Статус:** Production Troubleshooting Guide
