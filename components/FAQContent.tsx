"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle, ArrowLeft } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
  // Реєстрація та доступ
  {
    id: "1",
    category: "Реєстрація та доступ",
    question: "Чи справді Flamingo CRM повністю безкоштовна?",
    answer: "Так, абсолютно. Flamingo CRM на 100% безкоштовна без прихованих платежів, обмежень функцій або триальних періодів. Ми будемо вдячні, якщо ви вирішите підтримати ЗСУ донатом, але це цілком добровільно. Система була створена ветеранами, які розуміють потреби українського бізнесу в важкі часи.",
  },
  {
    id: "2",
    category: "Реєстрація та доступ",
    question: "Скільки користувачів можна додати безкоштовно?",
    answer: "Ви можете додавати стільки користувачів, стільки вам потрібно для роботи вашого бізнесу. Немає обмежень на кількість працівників, які матимуть доступ до системи. Кожен користувач отримує повний доступ до всіх функцій без обмежень.",
  },
  {
    id: "3",
    category: "Реєстрація та доступ",
    question: "Як зареєструватися / відновити пароль?",
    answer: "Реєстрація займає менше хвилини — перейдіть на сторінку реєстрації, введіть email та створіть пароль. Якщо забули пароль, натисніть «Забули пароль?» на сторінці входу та слідуйте інструкціям, які надійдуть на ваш email. Якщо виникли проблеми, напишіть нам на support@flamingo-crm.com.ua",
  },
  {
    id: "4",
    category: "Реєстрація та доступ",
    question: "Чи є обмеження за кількістю клієнтів/угод?",
    answer: "Ні, обмежень немає. Ви можете додавати необмежену кількість клієнтів, контактів, угод та завдань. Система розроблена так, щоб масштабуватися разом з вашим бізнесом, незалежно від його розміру.",
  },

  // Функціонал
  {
    id: "5",
    category: "Функціонал",
    question: "Як імпортувати базу клієнтів з Excel?",
    answer: "У розділі «Налаштування» → «Імпорт» виберіть файл Excel з вашою базою контактів. Система підтримує стандартні формати з колонками: ПІБ, телефон, email, компанія. Після завантаження вам буде запропоновано зіставити колони, а потім система імпортує всі дані. Детальна інструкція доступна в документації: docs.flamingo-crm.com/import",
  },
  {
    id: "6",
    category: "Функціонал",
    question: "Чи можна інтегрувати Telegram/Viber/Email?",
    answer: "Так, Flamingo CRM інтегрується з основними каналами комунікації. Ви можете отримувати сповіщення в Telegram, посилати повідомлення через Viber та автоматично обробляти письма. Розроблювач постійно додає нові канали інтеграції на основі запитів користувачів.",
  },
  {
    id: "7",
    category: "Функціонал",
    question: "Як налаштувати воронку продажів під свій бізнес?",
    answer: "Перейдіть в «Налаштування» → «Воронки» та створіть нову воронку з вашими етапами (наприклад: Лід → Переговори → Пропозиція → Угода). Кожен етап можна налаштувати з різними статусами та автоматичними діями. Детальний гайд: docs.flamingo-crm.com/sales-funnel",
  },
  {
    id: "8",
    category: "Функціонал",
    question: "Чи є мобільна версія / додаток?",
    answer: "Flamingo CRM повністю оптимізована для мобільних пристроїв та працює в будь-якому браузері. Нативні додатки для iOS та Android знаходяться в розробці. Поки що ви можете встановити веб-версію як PWA на домашній екран смартфона.",
  },
  {
    id: "9",
    category: "Функціонал",
    question: "Як створювати завдання та нагадування?",
    answer: "На сторінці клієнта або угоди натисніть «+ Додати завдання», задайте теку, дату та пріоритет. Ви отримаєте сповіщення у вибраному каналі (email, Telegram, Viber) в потрібний час. Завдання можна призначати колегам та відстежувати прогрес у календарі.",
  },

  // Донати та підтримка ЗСУ
  {
    id: "10",
    category: "Донати та підтримка ЗСУ",
    question: "Куди саме йдуть донати?",
    answer: "Всі донати надходять на потреби 1-го батальйону безпілотних систем «Хижаки висот» 59-ї окремої штурмової бригади. Кошти використовуються на закупівлю дронів, FPV-системи, термальні камери, Starlink та інше обладнання для більш ефективної роботи на фронті. Детальна звітність доступна в розділі «Про проект».",
  },
  {
    id: "11",
    category: "Донати та підтримка ЗСУ",
    question: "Чи обов'язково донатити, щоб користуватися системою?",
    answer: "Ні, абсолютно ні. Flamingo CRM повністю безкоштовна і не потребує жодних платежів або донатів для використання. Ми просто просимо підтримати ЗСУ, якщо система принесла вам користь. Це цілком добровільний внесок, коли ви готові.",
  },
  {
    id: "12",
    category: "Донати та підтримка ЗСУ",
    question: "Як зробити регулярний донат (наприклад, 100 грн/місяць)?",
    answer: "На сторінці підтримки вибачте опцію «Регулярний донат» та встановіть суму та частоту (щомісячно, щотижня чи щодня). Ми рекомендуємо користуватися мобільним банкінгом (Monobank, ПриватБанк), який припиняє повторні платежі у будь-який момент. Ви завжди можете змінити або скасувати регулярний донат.",
  },
  {
    id: "13",
    category: "Донати та підтримка ЗСУ",
    question: "Чи можна анонімно допомогти «Хижакам висот»?",
    answer: "Так, ви можете зробити анонімний донат. Названня донатора не збирається і не розповсюджується. Для вас важливе лише те, що ваш донат допоміг забезпечити більш ефективну роботу захисників України на полі бою.",
  },

  // Технічні питання
  {
    id: "14",
    category: "Технічні питання",
    question: "Чому не приходять сповіщення?",
    answer: "Спочатку перевірте налаштування сповіщень в «Профіль» → «Сповіщення» та переконайтеся, що каналі увімкнені. Якщо сповіщення через Telegram, перевірте, що ви підписані на бота. У разі проблем очистіть кеш браузера або спробуйте інший браузер. Якщо проблема залишається, напишіть support@flamingo-crm.com.ua",
  },
  {
    id: "15",
    category: "Технічні питання",
    question: "Як видалити/змінити картку клієнта?",
    answer: "Відкрийте картку клієнта, натисніть іконку редагування (олівець) та відредагуйте потрібні поля. Для видалення клієнта натисніть «Видалити» внизу сторінки та підтвердіть дію. Видалені записи зберігаються в архіві 30 днів, потім видаляються остаточно.",
  },
  {
    id: "16",
    category: "Технічні питання",
    question: "Чи зберігаються дані, якщо я видалю акаунт?",
    answer: "Якщо ви видалили акаунт, всі дані видаляються остаточно протягом 30 днів. Ми рекомендуємо завантажити резервну копію ваших даних перед видаленням акаунту. Дані не можуть бути відновлені після тривалого видалення.",
  },
  {
    id: "17",
    category: "Технічні питання",
    question: "Які браузери підтримуються?",
    answer: "Flamingo CRM працює в усіх сучасних браузерах: Chrome, Firefox, Safari, Edge та Opera. Рекомендуємо використовувати останні версії браузерів для найкращої продуктивності та безпеки. Якщо ви зіткнулися з проблемою в конкретному браузері, напишіть нам.",
  },

  // Інше
  {
    id: "18",
    category: "Інше",
    question: "Чи плануються платні тарифи в майбутньому?",
    answer: "Основна версія Flamingo CRM залишатиметься безкоштовною. Можливо в майбутньому з'являться додаткові розширені функції за окрему плату, але ядро системи завжди буде вільним для всіх.",
  },
  {
    id: "19",
    category: "Інше",
    question: "Як запропонувати нову функцію?",
    answer: "Ми активно слухаємо ваші ідеї! Напишіть про бажану функцію на support@flamingo-crm.com.ua або залийте issue на GitHub. Всі популярні пропозиції розглядаються в першу чергу команди розробників.",
  },
  {
    id: "20",
    category: "Інше",
    question: "Чи є API для інтеграцій?",
    answer: "API знаходиться в розробці. На даний момент доступні базові вебгуки для автоматизації. Повна документація API буде опублікована найближчими місяцями. Якщо вам потрібна певна інтеграція, напишіть на support@flamingo-crm.com.ua та ми розглянемо вашу заявку.",
  },
];

const categories = [
  "Реєстрація та доступ",
  "Функціонал",
  "Донати та підтримка ЗСУ",
  "Технічні питання",
  "Інше",
];

export default function FAQContent() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQ = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqData;
    }
    const query = searchQuery.toLowerCase();
    return faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedFAQ = categories.reduce((acc, category) => {
    const categoryFAQs = filteredFAQ.filter((faq) => faq.category === category);
    if (categoryFAQs.length > 0) {
      acc[category] = categoryFAQs;
    }
    return acc;
  }, {} as Record<string, FAQ[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-purple-900/20 to-[#0a0a0f] border-b border-white/10">
        <motion.button
          onClick={() => router.back()}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-white/15 transition-all"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Назад</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/50 mb-6"
          >
            <HelpCircle className="w-8 h-8 text-purple-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Часті питання
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Знайди відповідь на питання про Flamingo CRM — від реєстрації до інтеграцій
          </motion.p>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className="relative py-12 bg-[#0a0a0f]/50 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Пошук питання..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </motion.div>

          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-400 mt-3"
            >
              Знайдено {filteredFAQ.length} результатів
            </motion.p>
          )}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-16 lg:py-24 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedFAQ).length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                За запитом "{searchQuery}" не знайдено питань
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {Object.entries(groupedFAQ).map(([category, faqs]) => (
                <motion.div key={category} variants={itemVariants}>
                  {/* Category Header */}
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-white mb-4 flex items-center gap-2"
                  >
                    <span className="inline-block w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    {category}
                  </motion.h2>

                  {/* Accordion Items */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3"
                  >
                    {faqs.map((faq) => (
                      <motion.div
                        key={faq.id}
                        variants={itemVariants}
                        className="group"
                      >
                        <motion.button
                          onClick={() =>
                            setExpandedId(
                              expandedId === faq.id ? null : faq.id
                            )
                          }
                          className="w-full text-left p-4 rounded-lg bg-white/10 border border-white/20 group-hover:border-white/30 group-hover:bg-white/[15%] transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-white font-semibold leading-tight pr-4">
                              {faq.question}
                            </h3>
                            <motion.div
                              animate={{
                                rotate:
                                  expandedId === faq.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </motion.div>
                          </div>
                        </motion.button>

                        <AnimatePresence>
                          {expandedId === faq.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 bg-white/5 border-x border-b border-white/20 rounded-b-lg text-gray-300 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-t from-purple-900/10 to-[#0a0a0f] border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Не знайшли відповіді?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Напишіть нам на{" "}
            <motion.a
              href="mailto:support@flamingo-crm.com.ua"
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              whileHover={{ x: 2 }}
            >
              support@flamingo-crm.com
            </motion.a>
            {" — "}відповімо за 24 години
          </p>
          <motion.a
            href="https://crm.flamingo-crm.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-600/50 transition-shadow"
          >
            Спробувати CRM безкоштовно
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
