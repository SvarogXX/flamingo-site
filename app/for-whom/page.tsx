"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Scissors, Wrench, Code, Home, FileText, ShieldCheck, Dumbbell, ArrowUp, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AUDIENCES = [
  {
    slug: "online-store",
    icon: ShoppingCart,
    title: "Онлайн-магазин / Роздрібна торгівля",
    shortTitle: "Магазин",
    subtitle: "Керуйте клієнтами, замовленнями, поверненнями та повторними продажами з одного місця.",
    image: "/images/voronka.png",
    bullets: [
      "Кастомні поля для товару та клієнта (розмір, модель, преференції).",
      "Інтеграції з маркетплейсами й чат-ботами — ліди автоматично у CRM.",
      "Автоматичні тригери: брошені кошики, серії листів, сегментація за поведінкою.",
    ],
  },
  {
    slug: "beauty-salon",
    icon: Scissors,
    title: "Салон краси / Перукарня / Нігтьовий сервіс",
    shortTitle: "Салон",
    subtitle: "Записи клієнтів, історія послуг, нагадування в Telegram/SMS, управління персоналом.",
    image: "/images/contact_card.png",
    bullets: [
      "Календар записів з індивідуальними послугами та слотами.",
      "Кастомні поля: вподобання, алергії, попередні роботи.",
      "Автоматичні нагадування і бонуси для лояльності.",
    ],
  },
  {
    slug: "autoservice",
    icon: Wrench,
    title: "Автосервіс / Шиномонтаж / СТО",
    shortTitle: "Автосервіс",
    subtitle: "Картка авто, історія ремонтів, нагадування про ТО, VIN-пошук і планування робіт.",
    image: "/images/create_task.png",
    bullets: [
      "Автомобіль як сутність у картці клієнта з історією ремонтів.",
      "Тригери: нагадування про ТО, ланцюжки комунікації після ремонту.",
      "Шаблони замовлення робіт та звітності по запчастинах.",
    ],
  },
  {
    slug: "it-team",
    icon: Code,
    title: "IT-фріланс / Невелика IT-команда",
    shortTitle: "IT",
    subtitle: "Ліди, завдання, дедлайни та комунікація з клієнтом — все в одній системі.",
    image: "/images/dedlain.png",
    bullets: [
      "Користувацькі поля для проєктів і тасків.",
      "Прив’язка тасків до клієнта і відстеження прогресу.",
      "Інтеграції з таск-трекерами та репозиторіями.",
    ],
  },
  {
    slug: "real-estate",
    icon: Home,
    title: "Агентство нерухомості",
    shortTitle: "Нерухомість",
    subtitle: "Клієнти, об’єкти, перегляди та угоди — все під контролем.",
    image: "/images/stat.png",
    bullets: [
      "Об’єкти як сутності з прив’язками до клієнтів.",
      "Трекінг стадій угоди і нагадування агентам.",
      "Гнучкі шаблони договорів і кастомні поля.",
    ],
  },
  {
    slug: "medical",
    icon: FileText,
    title: "Медичний кабінет / Клініка / Психолог",
    shortTitle: "Медичний",
    subtitle: "Картки пацієнтів, записи, історія візитів з увагою до конфіденційності.",
    image: "/images/statistic.png",
    bullets: [
      "Контроль доступу до чутливих даних і безпечні поля.",
      "Календар прийомів з автоматичними нагадуваннями.",
      "Шаблони медичних записів і нотаток.",
    ],
  },
  {
    slug: "insurance",
    icon: ShieldCheck,
    title: "Страхові компанії / Агенти",
    shortTitle: "Страхування",
    subtitle: "Клієнти, поліси, дати закінчення та автоматичні нагадування про продовження.",
    image: "/images/hero.png",
    bullets: [
      "Поліси як сутності з датами і преміями.",
      "Тригери для нагадувань і автоматичні листи/смс.",
      "Звіти по ризиках і втратам без продовжень.",
    ],
  },
  {
    slug: "fitness",
    icon: Dumbbell,
    title: "Спортзали / Фітнес-клуби / Тренери",
    shortTitle: "Фітнес",
    subtitle: "Абонементи, відвідування, персональні тренування та нагадування про оновлення.",
    image: "/images/calendar.png",
    bullets: [
      "Управління абонементами з автоматичними нагадуваннями.",
      "Історія відвідувань і керування груповими заняттями.",
      "Сегментація клієнтів для маркетингових кампаній.",
    ],
  },
];

export default function ForWhomPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Smooth scroll to anchor if hash present on load
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
    }

    // Observe sections to update active breadcrumb
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id || null);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.45 }
    );

    AUDIENCES.forEach((a) => {
      const el = document.getElementById(a.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlug = (slug: string) => {
    const el = document.getElementById(slug);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    try {
      history.replaceState(null, "", `#${slug}`);
    } catch (e) {
      // ignore
    }
    setActiveSlug(slug);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#05050a] via-[#070713] to-[#07060b] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 my-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад</span>
          </button>
        <nav className="mb-6">
          <div className="flex gap-6 px-2 sm:px-4 justify-center flex-wrap">
            {AUDIENCES.map((a) => {
              const Icon = a.icon;
              return (
                <button
                  key={a.slug}
                  onClick={() => scrollToSlug(a.slug)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSlug === a.slug
                      ? "text-purple-400 bg-purple-900/20 shadow-lg"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                  aria-current={activeSlug === a.slug ? "true" : undefined}
                >
                  <Icon className="w-4 h-4" />
                  <span>{a.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <header className="text-center my-12 ">
          <p className="text-purple-400/90 text-xs font-semibold uppercase tracking-wider my-8">Для кого Flamingo CRM</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 leading-tight">
            Проста, гнучка та настроювана CRM — створена для реальних бізнес-процесів
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4 text-lg">
            Налаштовуйте поля, автоматизації і форми під ваш процес. Ми надаємо інструменти — ви створюєте досвід.
          </p>
        </header>

        <section className="space-y-14">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon;
            const isEven = i % 2 === 0;
            return (
              <article
                id={a.slug}
                key={a.slug}
                className="relative rounded-3xl overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] border border-white/6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-transparent pointer-events-none" />
                <div className={`grid gap-6 items-center ${isEven ? "lg:grid-cols-2" : "lg:grid-cols-2"}`}>
                  <div className={`p-8 sm:p-12 ${isEven ? "order-1" : "order-2 lg:pl-20"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/15 to-pink-500/10 flex items-center justify-center border border-white/6">
                        {Icon ? <Icon className="w-6 h-6 text-purple-300" /> : null}
                      </div>
                      <h3 className="text-2xl font-bold">{a.title}</h3>
                    </div>

                    <p className="text-gray-300 text-lg mb-4">{a.subtitle}</p>

                    <ul className="grid gap-2 text-gray-300 mb-6">
                      {a.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-purple-400">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-400 max-w-prose">Flamingo CRM дозволяє створювати та змінювати поля, будувати кастомні форми, налаштовувати права доступу та автоматизації без розробника. Це дає змогу адаптувати систему під будь-який бізнес-процес та швидко масштабуватися.</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`${isEven ? "order-2" : "order-1 lg:pr-20"} p-4 sm:p-8 flex items-center justify-center`}
                  >
                    <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-white/6 shadow-[0_30px_80px_-20px_rgba(147,51,234,0.16)]">
                      <img src={a.image} alt={`${a.title} — приклад інтерфейсу`} className="w-full h-auto block" />
                      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-black/40 to-transparent px-3 py-1 rounded-md text-sm text-gray-200">Прев'ю інтерфейсу</div>
                    </div>
                  </motion.div>
                </div>
              </article>
            );
          })}
        </section>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/6 to-transparent border border-white/6">
          <h3 className="text-2xl font-bold mb-3">Гнучкість — наш ключовий фокус</h3>
          <p className="text-gray-300 mb-3">У Flamingo CRM ви отримуєте повний контроль: створюйте поля, будьте впевнені в безпеці даних, налаштовуйте автоматизації, інтегруйте сервіси. Немає шаблонних обмежень — лише інструменти.</p>
          <div className="text-gray-400">Типові сценарії налаштувань, які ми реалізуємо швидко: кастомні карточки клієнтів, складні воронки продажів, multi-entity зв’язки (наприклад: клієнт → авто → ремонт), webhook інтеграції та role-based доступ.</div>
        </div>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center z-50"
            aria-label="Прокрутити до верху"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}