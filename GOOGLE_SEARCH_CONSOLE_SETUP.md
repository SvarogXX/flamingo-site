# GOOGLE SEARCH CONSOLE & SEO SETUP GUIDE

## 🚀 ШВИДКИЙ СТАРТ

Цей гайд покаже як налаштувати сайт для максимальної видимості в Google та інших пошукових системах.

---

## 1️⃣ **GOOGLE SEARCH CONSOLE SETUP** (5 хвилин)

### Крок 1: Перейти на Google Search Console

1. Зайти на https://search.google.com/search-console
2. Нажати "Додати об'єкт" або "Go to Search Console"
3. Вибрати "Domain" (рекомендується) або "URL prefix"

### Крок 2: Підтвердження власності

**Варіант A: DNS Запис (Найкраще)**

- Скопіюйте DNS запис з GSC
- Додайте в DNS провайдера (Namecheap, Cloudflare, тощо)
- Чекайте 24-48 годин для поширення

**Варіант B: HTML Файл**

- Завантажте HTML файл з GSC
- Додайте його у папку `/public`
- Deploy сайту
- Підтвердіть

**Варіант C: Google Tag Manager**

- Використовуйте существуючий GTM тег
- Найшвидший метод

### Крок 3: Подати Sitemap

1. У GSC перейти в "Sitemaps"
2. Нажати "Додати sitemap"
3. Ввести: `sitemap.xml`
4. Чекати статус "Успішно обробки"

---

## 2️⃣ **GOOGLE ANALYTICS 4 (GA4)** (10 хвилин)

### Налаштування GA4

1. Перейти на https://analytics.google.com
2. Нажати "Нова властивість"
3. Назвати: "Flamingo CRM Website"
4. Вибрати як цільову Web

### Встановити GA4 на сайт

1. Скопіюйте `G-XXXXXXXXXX` ID
2. Додайте у `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Розгорніть сайт

### Встановити Google Tag Manager (GTM) (Опційно)

1. Перейти на https://tagmanager.google.com
2. Нажати "Створити контейнер"
3. Назвати: "Flamingo CRM"
4. Добавить GA4 тег

---

## 3️⃣ **BING WEBMASTER TOOLS** (5 хвилин)

1. Перейти на https://www.bing.com/webmasters
2. Нажати "Add a site"
3. Ввести домен: `flamingo-crm.com`
4. Підтвердити власність (як в GSC)
5. Додати sitemap URL

---

## 4️⃣ **ENVIRONMENT VARIABLES (.env.local)**

```bash
# SEO & Site Configuration
NEXT_PUBLIC_SITE_URL=https://flamingo-crm.com
NEXT_PUBLIC_LEADS_API_URL=https://crm.flamingo-crm.com.ua/api/leads

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXXX

# Contact Info
NEXT_PUBLIC_SUPPORT_EMAIL=support@flamingo-crm.com.ua
NEXT_PUBLIC_SUPPORT_PHONE=+380XXXXXXXXX

# Social Media (Optional)
NEXT_PUBLIC_TWITTER_HANDLE=@FlamingoCRM
NEXT_PUBLIC_FACEBOOK_PAGE_ID=123456789
```

---

## 5️⃣ **FACEBOOK PIXEL & МЕТАДДАНІ** (Опційно)

### Додати Facebook Pixel

1. Перейти на https://facebook.com/business
2. Нажати "Pixels" → "Create Pixel"
3. Скопіюйте ID
4. Додате у `.env.local`: `NEXT_PUBLIC_FB_PIXEL_ID=123456789`

### Open Graph Tags на Facebook

- ✅ Вже налаштовані у `layout.tsx`
- Сайт автоматично буде позиціюватись красиво при діленні на Facebook

---

## 6️⃣ **CORE WEB VITALS OPTIMIZATION**

### Перевірити Core Web Vitals

1. Google PageSpeed Insights: https://pagespeed.web.dev
2. Введіть URL: https://flamingo-crm.com
3. Дивіться метрики
4. Підтримуйте Green для всіх параметрів

### Основні метрики:

- **LCP (Largest Contentful Paint)** < 2.5s ✓
- **FID (First Input Delay)** < 100ms ✓
- **CLS (Cumulative Layout Shift)** < 0.1 ✓

---

## 7️⃣ **РЕГУЛЯРНИЙ SEO МОНІТОРИНГ**

### Щотижневі завдання:

```
□ Перевірити GSC на помилки crawl
□ Перевірити Search Analytics (яких позицій достигли)
□ Перевірити GA4 для нових користувачів
□ Перевірити сайт в мобільному вигляді
```

### Щомісячні завдання:

```
□ Аналізувати найпопулярніші сторінки
□ Перевіряти backlinks (наприклад, в Ahrefs чи SEMrush)
□ Оновлювати контент на slow pages
□ Перевіряти позиції ключових слів
```

---

## 8️⃣ **СТРУКТУРОВАНИЙ ТЕСТЕР (РЕКОМЕНДУЄТЬСЯ)**

### Перевірити Schema.org

1. Перейти на https://schema.org/validate
2. Ввести URL: https://flamingo-crm.com
3. Перевірити, що Schema помічена як Valid

### Перевірити Open Graph

1. Перейти на https://metatags.io
2. Ввести URL: https://flamingo-crm.com
3. Перевірити Open Graph Preview

---

## 9️⃣ **НАДСИЛАННЯ НА РУЧНУ ІНДЕКСАЦІЮ**

Якщо сторінка не індексується:

1. Відкрити GSC
2. Нажати "Inspect URL"
3. Ввести URL сторінки
4. Нажати "Request Indexing"

---

## 🔟 **ROBOTS.TXT & CRAWL BUDGET**

Наш robots.txt налаштований для:

- ✅ Граф Google без delay
- ✅ Bing з малим delay
- ✅ Блокування /api та /admin

Перевірити: https://flamingo-crm.com/robots.txt

---

## 📊 **ІНСТРУМЕНТИ ДЛЯ МОНІТОРИНГУ**

### Безкоштовні:

- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Google Mobile-Friendly Test
- Schema.org Validator

### Платні (Опційно):

- Semrush
- Ahrefs
- Moz
- SE Ranking

---

## 🎯 **ЦІЛЬОВІ КЛЮЧОВІ СЛОВА**

```
🥇 Головні:
   - CRM система для бізнесу
   - Управління клієнтами
   - Базу даних клієнтів

🥈 Вторинні:
   - CRM для малого бізнесу
   - Онлайн CRM
   - Безкоштовна CRM

🥉 Довгі фрази:
   - CRM система для управління клієнтами
   - Безкоштовна база даних клієнтів
   - СРМ для е-комерції
```

---

## ⚠️ **ВАЖЛИВО**

### DO (Робіть):

✅ Оновлюйте контент регулярно  
✅ Слідкуйте за GSC помилками  
✅ Пишіть оригінальний контент  
✅ Оптимізуйте для мобільних  
✅ Будуйте backlinks якісно

### DON'T (Не робіть):

❌ Не клорруйте контент  
❌ Не куйте лінки  
❌ Не напхавайте keywords  
❌ Не дозволяйте 404 помилок  
❌ Не блокуйте CSS/JS у robots.txt

---

## 🚨 **ДЕБАГ ПРОБЛЕМ**

### Сайт не індексується

```
1. Перевірте robots.txt
2. Перевірте meta robots tag
3. Перевірте GSC errors
4. Запросіть re-crawl у GSC
```

### Низькі позиції в поісуку

```
1. Додайте більше контенту (300+ слів)
2. Оптимізуйте заголовки
3. Побільшуйте число backlinks
4. Поліпшуйте Core Web Vitals
```

### Bad Mobile Experience

```
1. Перевірте viewport meta tag ✓
2. Перевірте touch buttons
3. Перевірте шрифти
4. Перевірте viewport width
```

---

## 📞 **КОНТАКТИ ПІДТРИМКИ GOOGLE**

- Google Search Console Help: https://support.google.com/webmasters
- Google Analytics Help: https://support.google.com/analytics
- Google Business Help: https://support.google.com/business

---

**Остання оновлення:** 28 лютого 2026  
**Версія:** 1.0
