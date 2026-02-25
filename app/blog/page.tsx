import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Блог | Flamingo CRM - Статті про управління бізнесом",
  description: "Корисні статті про CRM системи, управління клієнтами, автоматизацію бізнес-процесів та збільшення продажів.",
  keywords: ["CRM", "блог", "управління клієнтами", "автоматизація бізнесу", "продажі"],
};

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "yak-obrati-crm-systemu",
    title: "Як обрати CRM систему для вашого бізнесу",
    excerpt: "Детальний гайд з вибору CRM системи. Розглядаємо ключові критерії, порівнюємо популярні рішення та даємо практичні поради.",
    category: "Гайди",
    author: "Олександр Петренко",
    date: "2026-02-10",
    readTime: "8 хв",
    image: "📊",
  },
  {
    slug: "avtomatyzatsiya-prodazhiv",
    title: "10 способів автоматизувати продажі з CRM",
    excerpt: "Дізнайтеся, як автоматизація може збільшити ефективність вашого відділу продажів та скоротити час на рутинні задачі.",
    category: "Продажі",
    author: "Марія Коваленко",
    date: "2026-02-08",
    readTime: "6 хв",
    image: "🚀",
  },
  {
    slug: "analityka-v-crm",
    title: "Аналітика в CRM: як приймати рішення на основі даних",
    excerpt: "Розбираємо ключові метрики та звіти, які допоможуть вам краще розуміти своїх клієнтів та оптимізувати бізнес-процеси.",
    category: "Аналітика",
    author: "Дмитро Сидоренко",
    date: "2026-02-05",
    readTime: "10 хв",
    image: "📈",
  },
  {
    slug: "integratsiya-crm-z-inshymy-servisamy",
    title: "Інтеграція CRM з іншими сервісами: повний гайд",
    excerpt: "Як інтегрувати вашу CRM з email-маркетингом, соціальними мережами, месенджерами та іншими інструментами.",
    category: "Інтеграції",
    author: "Олена Шевченко",
    date: "2026-02-01",
    readTime: "12 хв",
    image: "🔗",
  },
  {
    slug: "upravlinnya-komandoyu-v-crm",
    title: "Ефективне управління командою через CRM",
    excerpt: "Практичні поради з організації роботи команди, розподілу задач та контролю виконання за допомогою CRM системи.",
    category: "Менеджмент",
    author: "Олександр Петренко",
    date: "2026-01-28",
    readTime: "7 хв",
    image: "👥",
  },
  {
    slug: "mobilnyy-crm",
    title: "Мобільний CRM: працюйте звідусіль",
    excerpt: "Переваги використання мобільних додатків CRM для польових продавців та менеджерів, які часто в дорозі.",
    category: "Мобільність",
    author: "Марія Коваленко",
    date: "2026-01-25",
    readTime: "5 хв",
    image: "📱",
  },
];

const categories = ["Всі", "Гайди", "Продажі", "Аналітика", "Інтеграції", "Менеджмент", "Мобільність"];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f]">
        {/* Hero section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-purple-400 text-sm font-medium tracking-wider uppercase mb-4">
                Блог
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Статті та <span className="gradient-text">гайди</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Корисні матеріали про CRM системи, управління клієнтами,
                автоматизацію бізнес-процесів та збільшення продажів.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-y border-white/5">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${index === 0
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog posts grid */}
        <section className="py-20 lg:py-28">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative rounded-2xl glass-card overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/20 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    {/* Category & meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("uk-UA")}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
                      >
                        Читати
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-16">
              <button className="px-8 py-4 text-white font-semibold rounded-xl transition-all hover:text-purple-300">
                Завантажити більше
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
