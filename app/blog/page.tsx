import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import BlogPostsGrid, { BlogPost } from "../../components/BlogPostsGrid";

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
const blogPosts: BlogPost[] = [
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
    date: "2026-02-08", image: "/images/automatozation.png",
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
    image: "/images/blog/integration.jpg",
  },
  {
    slug: "upravlinnya-komandoyu-v-crm",
    title: "Ефективне управління командою через CRM",
    excerpt: "Практичні підходи до керування відділом продажів у CRM: задачі, дисципліна, контроль етапів і прогноз результату.",
    category: "Менеджмент",
    author: "Олександр Яремчук",
    date: "2026-01-28",
    image: "/images/blog/team.png",
  },
  {
    slug: "mobilnyy-crm",
    title: "Мобільний CRM: працюйте звідусіль",
    excerpt: "Як мобільний доступ до CRM допомагає менеджерам швидко реагувати на ліди і закривати угоди навіть у дорозі.",
    category: "Мобільність",
    author: "Олександр Яремчук",
    date: "2026-01-25",
    image: "/images/blog/Mobile.png",
  },
  {
    slug: "voronka-prodazhiv-v-crm",
    title: "Воронка продажів в CRM: як налаштувати та аналізувати етапи",
    excerpt: "Практичний гайд: як побудувати воронку продажів у CRM-системі, налаштувати етапи під свій бізнес і відстежувати конверсію.",
    category: "Воронка продажів",
    author: "Олександр Яремчук",
    date: "2026-03-01",
    image: "/images/blog/voronka.jpg",
  },
  {
    slug: "vprovadzhennya-crm-z-nulya",
    title: "Впровадження CRM з нуля: покроковий план на перший місяць",
    excerpt: "Як запустити CRM у малому бізнесі без хаосу: підготовка, налаштування, навчання команди та перші результати за 4 тижні.",
    category: "Впровадження CRM",
    author: "Олександр Яремчук",
    date: "2026-02-25",
    image: "/images/blog/input.png",
  },
  {
    slug: "baza-kliyentiv-upravlinnya",
    title: "База клієнтів: як зберігати та використовувати дані в CRM",
    excerpt: "Як побудувати та підтримувати базу клієнтів у CRM: якість даних, пошук, сегментація та повторні продажі.",
    category: "Управління клієнтами",
    author: "Олександр Яремчук",
    date: "2026-02-20",
    image: "/images/contact_card.png",
  },
  {
    slug: "kpi-viddilu-prodazhiv",
    title: "KPI відділу продажів: що відстежувати в CRM для росту",
    excerpt: "Які KPI реально допомагають керувати відділом продажів і як їх відстежувати в CRM без Excel та ручних звітів.",
    category: "Продуктивність продажів",
    author: "Олександр Яремчук",
    date: "2026-02-15",
    image: "/images/analitics.png",
  },
  {
    slug: "chomu-vtrachayutsya-lidy",
    title: "Чому малий бізнес втрачає ліди: 5 причин та рішення в CRM",
    excerpt: "Типові причини втрати заявок у малого бізнесу та як CRM допомагає їх усунути: швидкість відповіді, дисципліна, нагадування.",
    category: "Управління клієнтами",
    author: "Олександр Яремчук",
    date: "2026-02-10",
    image: "/images/automatozation.png",
  },
  {
    slug: "yak-pidvishchiti-konversiyu-v-prodazhah",
    title: "Як підвищити конверсію в продажах за допомогою CRM",
    excerpt: "Практичні способи збільшити конверсію за допомогою CRM: швидкість відповіді, воронка, нагадування. Поради для малого бізнесу.",
    category: "Продажі",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/conv.jpg",
  },
  {
    slug: "upravlinnya-zavdannyamy-v-crm",
    title: "Управління завданнями в CRM: задачі та дедлайни",
    excerpt: "Як керувати задачами та дедлайнами в CRM. Призначення, нагадування, контроль. Поради для відділу продажів.",
    category: "Менеджмент",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/task.png",
  },
  {
    slug: "zvitnist-dashbordy-v-crm",
    title: "Звітність та дашборди в CRM для керівника",
    excerpt: "Як будувати звіти та дашборди в CRM. KPI, конверсія, прогноз. Поради для керівників відділу продажів.",
    category: "Аналітика",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/dashboard.png",
  },
  {
    slug: "vybir-crm-sistemu-porivnyannya",
    title: "Вибір CRM-системи: порівняння та критерії",
    excerpt: "Як вибрати CRM для бізнесу: критерії порівняння, типові помилки. Практичний гайд для малого бізнесу.",
    category: "CRM",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/change.png",
  },
  {
    slug: "avtomatyzatsiya-obrobky-lidiv",
    title: "Автоматизація обробки лідів: від заявки до угоди",
    excerpt: "Як автоматизувати обробку лідів: від заявки до угоди. Сповіщення, призначення, нагадування.",
    category: "Продажі",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/avtomatyzatsiya-obrobky-lidiv.png",
  },
  {
    slug: "crm-dlya-agenstv",
    title: "CRM для агентств та сервісних компаній",
    excerpt: "Як використовувати CRM в агентстві та сервісній компанії. Клієнти, проєкти, задачі.",
    category: "CRM",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/crm-dlya-agenstv.png",
  },
  {
    slug: "bezpeka-danikh-v-crm",
    title: "Безпека даних у CRM: доступ та конфіденційність",
    excerpt: "Як захистити дані клієнтів у CRM. Права доступу, ролі, конфіденційність. Поради для бізнесу.",
    category: "CRM",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/bezpeka-danikh-v-crm.png",
  },
  {
    slug: "crm-email-marketing",
    title: "CRM та email-маркетинг: інтеграція для продажів",
    excerpt: "Як поєднати CRM з email-маркетингом. Розсилки, сегменти, історія листів.",
    category: "Інтеграції",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/crm-email-marketing.png",
  },
  {
    slug: "shvidka-reaktsiya-na-zayavku",
    title: "Швидка реакція на заявку: чому важливо та як досягти",
    excerpt: "Чому швидкість відповіді на заявку збільшує конверсію. Як організувати реакцію в CRM.",
    category: "Продажі",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/shvidka-reaktsiya-na-zayavku.png",
  },
  {
    slug: "crm-malogo-biznesu-oglyad",
    title: "CRM для малого бізнесу: огляд можливостей та сценаріїв",
    excerpt: "Які можливості CRM потрібні малому бізнесу. Воронка, клієнти, задачі, звіти. Огляд сценаріїв.",
    category: "CRM",
    author: "Flamingo CRM Team",
    date: "2026-03-08",
    image: "/images/blog/crm-malogo-biznesu-oglyad.png",
  },
];

const categories = ["Всі", "CRM", "Продажі", "Аналітика", "Інтеграції", "Менеджмент", "Мобільність", "Воронка продажів", "Впровадження CRM", "Управління клієнтами", "Продуктивність продажів"];

export default function BlogPage() {
  const INITIAL_REGULAR_POSTS_COUNT = 6;
  const LOAD_MORE_STEP = 3;

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
            <BlogPostsGrid
              posts={regularPosts}
              initialVisibleCount={INITIAL_REGULAR_POSTS_COUNT}
              loadMoreStep={LOAD_MORE_STEP}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
