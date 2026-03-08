import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Блог Flamingo CRM — практичні розбори про CRM, продажі та автоматизацію",
  description:
    "Експертні статті про CRM для малого бізнесу: автоматизація продажів, аналітика, інтеграції та управління командою без хаосу.",
  keywords: [
    "блог CRM",
    "CRM для малого бізнесу",
    "автоматизація продажів",
    "аналітика в CRM",
    "інтеграції CRM",
    "управління продажами",
    "воронка продажів",
    "Flamingo CRM",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Блог Flamingo CRM — практичні розбори про CRM, продажі та автоматизацію",
    description:
      "Читайте практичні статті про CRM, автоматизацію продажів, аналітику, інтеграції та менеджмент команди.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог Flamingo CRM — практичні розбори про CRM, продажі та автоматизацію",
    description:
      "Практичні статті для малого бізнесу: CRM, продажі, аналітика, інтеграції, керування командою.",
  },
};

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "yak-obrati-crm-systemu",
    title: "Як обрати CRM для малого бізнесу у 2026: чекліст із 15 критеріїв",
    excerpt: "Практичний гайд для власників малого бізнесу: як вибрати CRM без переплат, швидко запустити процеси та не втрачати ліди.",
    category: "CRM для малого бізнесу",
    author: "Олександр Яремчук",
    date: "2026-03-03",
    image: "/images/crm_2026.png",
  },
  {
    slug: "avtomatyzatsiya-prodazhiv",
    title: "10 способів автоматизувати продажі з CRM",
    excerpt: "Дізнайтеся, як автоматизація може збільшити ефективність вашого відділу продажів та скоротити час на рутинні задачі.",
    category: "Продажі",
    author: "Олександр Яремчук",
    date: "2026-02-08",    image: "/images/automatozation.png",
  },
  {
    slug: "analityka-v-crm",
    title: "Аналітика в CRM: як приймати рішення на основі даних",
    excerpt: "Практичний розбір метрик CRM: які показники реально допомагають керувати продажами і збільшувати прибуток.",
    category: "Аналітика",
    author: "Олександр Яремчук",
    date: "2026-02-05",
    image: "/images/analitics.png",
  },
  {
    slug: "integratsiya-crm-z-inshymy-servisamy",
    title: "Інтеграція CRM з іншими сервісами: повний гайд",
    excerpt: "Як підключити сайт, email, месенджери та телефонію до CRM, щоб не втрачати звернення і прискорити продажі.",
    category: "Інтеграції",
    author: "Олександр Яремчук",
    date: "2026-02-01",
    image: "/images/contact_card.png",
  },
  {
    slug: "upravlinnya-komandoyu-v-crm",
    title: "Ефективне управління командою через CRM",
    excerpt: "Практичні підходи до керування відділом продажів у CRM: задачі, дисципліна, контроль етапів і прогноз результату.",
    category: "Менеджмент",
    author: "Олександр Яремчук",
    date: "2026-01-28",
    image: "/images/create_task.png",
  },
  {
    slug: "mobilnyy-crm",
    title: "Мобільний CRM: працюйте звідусіль",
    excerpt: "Як мобільний доступ до CRM допомагає менеджерам швидко реагувати на ліди і закривати угоди навіть у дорозі.",
    category: "Мобільність",
    author: "Олександр Яремчук",
    date: "2026-01-25",
    image: "/images/hero.png",
  },
];

const categories = ["Всі", "CRM", "Продажі", "Аналітика", "Інтеграції", "Менеджмент", "Мобільність"];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

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
                Статті та <span className="gradient-text">практичні розбори</span>
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

        {/* Featured Post */}
        <section className="py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="group relative rounded-3xl glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-white/5 to-white/[0.02]">
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-full w-full overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/20">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 lg:from-[#0a0a0f]/20 lg:bg-gradient-to-r lg:to-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold tracking-wide">
                    {featuredPost.category}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-purple-500/30 text-purple-200 text-xs font-medium uppercase tracking-wider bg-purple-500/10">
                    Новинка
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/10 gap-4">
                  <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString("uk-UA")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>7 хв читання</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="flex items-center gap-2 text-white font-semibold bg-white/10 hover:bg-white/15 border border-white/20 px-6 py-3 rounded-xl transition-all hover:scale-105"
                  >
                    Читати повну статтю
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Regular Blog posts grid */}
        <section className="py-12 lg:py-16 bg-[#0c0c12]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-10">Всі статті</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative rounded-3xl glass-card overflow-hidden flex flex-col border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30 bg-white/[0.02] hover:bg-white/[0.04]"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-900/10 to-pink-900/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    {/* Category */}
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2 leading-tight">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-auto">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("uk-UA")}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors"
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
