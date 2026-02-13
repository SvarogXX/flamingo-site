import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User } from "lucide-react";

// This would typically come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
}> = {
  "yak-obrati-crm-systemu": {
    title: "Як обрати CRM систему для вашого бізнесу",
    excerpt: "Детальний гайд з вибору CRM системи. Розглядаємо ключові критерії, порівнюємо популярні рішення та даємо практичні поради.",
    content: `
## Вступ

Вибір правильної CRM системи може стати ключовим фактором успіху вашого бізнесу. У цій статті ми розглянемо основні критерії, на які варто звернути увагу при виборі CRM.

## Ключові критерії вибору

### 1. Функціональність

Перш за все, визначте, які функції вам потрібні:
- Управління контактами та лідами
- Автоматизація продажів
- Email-маркетинг
- Аналітика та звітність
- Інтеграції з іншими сервісами

### 2. Простота використання

CRM система повинна бути інтуїтивно зрозумілою для всіх членів вашої команди. Складний інтерфейс може знизити продуктивність та збільшити час на навчання.

### 3. Масштабованість

Обирайте систему, яка зможе рости разом з вашим бізнесом. Важливо, щоб CRM підтримувала збільшення кількості користувачів та даних без втрати продуктивності.

### 4. Інтеграції

Перевірте, чи інтегрується CRM з інструментами, які ви вже використовуєте:
- Поштові сервіси (Gmail, Outlook)
- Месенджери (Telegram, Viber)
- Бухгалтерські програми
- Соціальні мережі

### 5. Ціна та модель оплати

Порівняйте вартість різних рішень:
- Безкоштовні плани та їх обмеження
- Вартість за користувача
- Додаткові витрати на інтеграції та підтримку

## Порівняння популярних CRM

| CRM | Переваги | Недоліки |
|-----|----------|----------|
| Наша CRM | Локалізація, підтримка 24/7 | - |
| Salesforce | Потужна функціональність | Висока ціна |
| HubSpot | Безкоштовний план | Обмежені можливості |

## Висновок

Вибір CRM - це інвестиція у майбутнє вашого бізнесу. Не поспішайте, протестуйте кілька варіантів і оберіть той, який найкраще відповідає вашим потребам.

**Готові спробувати нашу CRM?** Зареєструйтеся безкоштовно та оцініть всі можливості!
    `,
    category: "Гайди",
    author: "Олександр Петренко",
    authorRole: "CEO, Flamingo CRM",
    date: "2026-02-10",
    readTime: "8 хв",
    image: "📊",
  },
  "avtomatyzatsiya-prodazhiv": {
    title: "10 способів автоматизувати продажі з CRM",
    excerpt: "Дізнайтеся, як автоматизація може збільшити ефективність вашого відділу продажів та скоротити час на рутинні задачі.",
    content: `
## Чому автоматизація важлива?

Автоматизація продажів дозволяє вашій команді зосередитися на тому, що дійсно важливо - побудові відносин з клієнтами та закритті угод.

## 10 способів автоматизації

### 1. Автоматичне введення даних
Забудьте про ручне введення контактів. CRM автоматично збирає інформацію з форм, email та соціальних мереж.

### 2. Автоматичні нагадування
Система сама нагадає про заплановані дзвінки, зустрічі та follow-up.

### 3. Шаблони листів
Використовуйте готові шаблони для типових ситуацій, персоналізуючи їх автоматично.

### 4. Lead scoring
Автоматично оцінюйте потенціал лідів на основі їх дій та характеристик.

### 5. Воронка продажів
Автоматичне переміщення угод по етапах воронки за певними тригерами.

### 6. Звіти та аналітика
Автоматичне формування звітів без ручної роботи з даними.

### 7. Синхронізація календаря
Автоматична синхронізація з Google Calendar та Outlook.

### 8. Email-кампанії
Налаштуйте автоматичні серії листів для різних сегментів клієнтів.

### 9. Інтеграція з телефонією
Автоматичне логування дзвінків та запис розмов.

### 10. Документообіг
Автоматичне створення документів з даних CRM.

## Результати автоматизації

Компанії, які впровадили автоматизацію продажів, відзначають:
- Збільшення продуктивності на 30%
- Скорочення часу на адміністративні задачі на 50%
- Зростання конверсії на 20%

## Як почати?

Почніть з автоматизації найбільш рутинних процесів і поступово розширюйте функціонал.
    `,
    category: "Продажі",
    author: "Марія Коваленко",
    authorRole: "Директор з продажів",
    date: "2026-02-08",
    readTime: "6 хв",
    image: "🚀",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Стаття не знайдена | Flamingo CRM",
    };
  }

  return {
    title: `${post.title} | Блог Flamingo CRM`,
    description: post.excerpt,
    keywords: [post.category, "CRM", "управління клієнтами", "бізнес"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Стаття не знайдена</h1>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300">
              Повернутися до блогу
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f]">
        {/* Hero section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до блогу</span>
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white max-w-4xl leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString("uk-UA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} читання</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main content */}
              <article className="lg:col-span-8">
                {/* Featured image */}
                <div className="h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/20 flex items-center justify-center text-8xl mb-12">
                  {post.image}
                </div>

                {/* Article content */}
                <div className="prose prose-invert prose-purple max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                  prose-strong:text-white
                  prose-ul:text-gray-300 prose-ol:text-gray-300
                  prose-li:my-2
                  prose-table:border-white/10
                  prose-th:text-white prose-th:bg-white/5 prose-th:p-3
                  prose-td:p-3 prose-td:border-white/10
                ">
                  <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/##\s(.+)/g, '<h2>$1</h2>').replace(/###\s(.+)/g, '<h3>$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/- (.+)/g, '<li>$1</li>') }} />
                </div>

                {/* Share & actions */}
                <div className="flex items-center justify-between pt-8 mt-12 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                      <Share2 className="w-4 h-4" />
                      <span>Поділитися</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                      <Bookmark className="w-4 h-4" />
                      <span>Зберегти</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  {/* Author card */}
                  <div className="p-6 rounded-2xl glass-card">
                    <h3 className="text-sm font-medium text-gray-400 mb-4">Автор</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.authorRole}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-purple-500/20">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Готові спробувати?
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Зареєструйтеся безкоштовно та оцініть всі можливості нашої CRM системи.
                    </p>
                    <Link
                      href="/#signup"
                      className="block text-center py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      Почати безкоштовно
                    </Link>
                  </div>

                  {/* Table of contents placeholder */}
                  <div className="p-6 rounded-2xl glass-card">
                    <h3 className="text-sm font-medium text-gray-400 mb-4">Зміст</h3>
                    <nav className="space-y-3">
                      <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                        Вступ
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                        Ключові критерії
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                        Порівняння CRM
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                        Висновок
                      </a>
                    </nav>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
