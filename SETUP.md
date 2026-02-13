# Налаштування CRM Landing Page

## Швидкий старт

1. **Встановіть залежності:**
```bash
npm install
```

2. **Налаштуйте environment variables:**
Створіть файл `.env.local` на основі `.env.example`:
```bash
cp .env.example .env.local
```

Відредагуйте `.env.local` та вкажіть ваш домен:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. **Запустіть сервер розробки:**
```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## Структура проекту

### Компоненти

- **Header** - Навігаційна панель з адаптивним меню
- **Hero** - Головна секція з анімаціями та CTA
- **Features** - Секція можливостей системи
- **Benefits** - Переваги та статистика
- **Pricing** - Тарифи та ціни
- **Testimonials** - Відгуки клієнтів
- **CTA** - Call-to-action секція
- **Footer** - Підвал з посиланнями

### SEO Оптимізація

✅ **Meta Tags** - Повна підтримка Open Graph та Twitter Cards
✅ **Sitemap** - Автоматична генерація `/sitemap.xml`
✅ **Robots.txt** - Автоматична генерація `/robots.txt`
✅ **Structured Data** - Готово для додавання JSON-LD
✅ **Semantic HTML** - Правильна структура для пошукових систем

### Адаптивність

Сайт повністю адаптивний з breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### Анімації

Використовується **Framer Motion** для:
- Плавних появи компонентів
- Scroll-triggered анімацій
- Інтерактивних ефектів
- Blob анімацій у Hero секції

## Кастомізація

### Зміна кольорів

Редагуйте `app/globals.css`:
```css
:root {
  --primary: #ec4899;
  --secondary: #f97316;
  --accent: #ef4444;
}
```

### Зміна контенту

Всі тексти знаходяться у відповідних компонентах:
- `components/Hero.tsx` - головний заголовок
- `components/Features.tsx` - список можливостей
- `components/Pricing.tsx` - тарифи
- `components/Testimonials.tsx` - відгуки

### Додавання зображень

1. Додайте зображення в `public/`
2. Використовуйте Next.js Image компонент:
```tsx
import Image from 'next/image';
<Image src="/your-image.jpg" alt="Description" width={800} height={600} />
```

## Production Deployment

### Vercel (Рекомендовано)

1. Підключіть репозиторій до Vercel
2. Додайте environment variables
3. Deploy автоматично відбудеться

### Інші платформи

```bash
# Build для production
npm run build

# Запуск production сервера
npm start
```

## Оптимізація продуктивності

✅ **Image Optimization** - Використовуйте Next.js Image
✅ **Code Splitting** - Автоматично через Next.js
✅ **Font Optimization** - Inter font оптимізовано
✅ **CSS Optimization** - Tailwind CSS з purge
✅ **Lazy Loading** - Компоненти завантажуються при скролі

## Додаткові інтеграції

### Google Analytics

Додайте в `app/layout.tsx`:
```tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Meta Pixel

Додайте в `app/layout.tsx`:
```tsx
<Script id="fb-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
    fbq('track', 'PageView');
  `}
</Script>
```

## Підтримка

Для питань та підтримки звертайтесь до команди розробки.
