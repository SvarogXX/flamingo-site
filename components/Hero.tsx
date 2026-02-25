"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Wallet, Layers } from "lucide-react";

export default function Hero() {
  const [heroImageError, setHeroImageError] = useState(false);
  const reducedMotion = useReducedMotion();
  const [decorationsReady, setDecorationsReady] = useState(false);

  // Запускаємо декоративні анімації після завантаження — не блокуємо LCP
  useEffect(() => {
    const start = () => setDecorationsReady(true);
    if (typeof window !== "undefined" && document.readyState === "complete") start();
    else window.addEventListener("load", start);
    const t = setTimeout(start, 600);
    return () => {
      window.removeEventListener("load", start);
      clearTimeout(t);
    };
  }, []);

  return (
    <section
      className={`relative min-h-screen bg-[#0a0a0f] overflow-hidden ${decorationsReady ? "hero-decorations-ready" : ""}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Орби в CSS — менше навантаження на JS, анімація після завантаження */}
        <div
          className="hero-orb-1 absolute w-[600px] h-[600px] rounded-full opacity-[0.14] blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(147,51,234,0.5) 0%, transparent 70%)", left: "10%", top: "20%" }}
        />
        <div
          className="hero-orb-2 absolute w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)", right: "5%", bottom: "15%" }}
        />
        {/* Тонкий шум для преміум-текстури */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Контент: текст і CTA зверху, одне широке зображення знизу (як Workly) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16">
        <div className="w-full">
          {/* Текст і CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400/80 text-sm tracking-wider mb-6"
            >
              ★ Онлайн CRM з безкоштовним пробним періодом ★
            </motion.p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {reducedMotion ? (
                <>
                  <span className="text-white">CRM система для ефективного </span>
                  <span className="gradient-text">управління клієнтами</span>
                  <span className="text-white"> та </span>
                  <span className="gradient-text">базою даних</span>
                  <span className="text-white"> – просто, доступно, потужно</span>
                </>
              ) : (
                <>
                  <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }} className="text-white">CRM система для ефективного </motion.span>
                  <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="gradient-text">управління клієнтами</motion.span>
                  <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-white"> та </motion.span>
                  <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="gradient-text">базою даних</motion.span>
                  <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="text-white"> – просто, доступно, потужно</motion.span>
                </>
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-purple-300/90 text-sm sm:text-base font-medium mb-6 max-w-2xl mx-auto"
            >
              Нова сучасна CRM 2026 року — спеціально створена для малого та середнього бізнесу
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Не переплачуйте за зайві функції. Проста, швидка та доступна CRM для управління клієнтами та базою даних — від маленького магазину до компанії на 50+ людей.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
            >
              {reducedMotion ? (
                <a
                  href="https://flamingo-crm-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-10 py-4 bg-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/40 transition-colors hover:bg-purple-500"
                >
                  <span>Спробувати безкоштовно</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <motion.a
                  href="https://flamingo-crm-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-10 py-4 bg-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/40 transition-all duration-300 hover:bg-purple-500 hover:shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/40"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Спробувати безкоштовно</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-purple-400 text-sm"
            >
              Безкоштовний пробний період 14 днів
            </motion.p>
          </motion.div>

          {/* Одне широке зображення знизу: ширше, з поступовою прозорістю від середини донизу */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 sm:mt-14 w-full max-w-[95%] sm:max-w-[92%] lg:max-w-7xl mx-auto px-0 relative"
          >
            {/* Плаваюча картка «14 днів» — анімація в CSS, запуск після завантаження */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className={`absolute -right-2 -bottom-6 sm:right-4 sm:bottom-4 lg:right-8 lg:bottom-6 z-20 w-32 sm:w-36 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/80 to-[#0c0c10] p-4 shadow-xl shadow-black/40 backdrop-blur-md ${!reducedMotion ? "hero-card-float" : ""}`}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">14</div>
                <div className="text-xs text-purple-400/90 font-medium">днів безкоштовно</div>
              </div>
            </motion.div>
            <div
              className="relative rounded-2xl border border-white/[0.1] bg-[#0c0c10] p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.6) 85%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.6) 85%, transparent 100%)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(147,51,234,0.12),transparent)] pointer-events-none z-[1]" />
              {/* Поступова прозорість від середини донизу — на весь блок включно з рамкою */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-[5]"
                style={{
                  background: "linear-gradient(to top, #0a0a0f 0%, #0a0a0f 25%, rgba(10,10,15,0.85) 45%, rgba(10,10,15,0.4) 65%, transparent 100%)",
                }}
              />
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-t-xl bg-white/[0.03] border-b border-white/[0.06] relative z-[2]">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 max-w-[60%] mx-auto h-6 rounded-full bg-white/[0.05] border border-white/[0.06]" />
              </div>
              {/* Зображення знизу: контейнер фіксованої висоти + анімація «прокрутки» CRM */}
              <div className="relative h-[53vh] min-h-[312px] max-h-[432px] sm:h-[48vh] sm:max-h-[408px] lg:h-[456px] overflow-hidden rounded-b-xl bg-white/[0.02]">
                {heroImageError ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">Додайте hero.png у public/images/</div>
                ) : reducedMotion ? (
                  <img
                    src="/images/hero.png"
                    alt="Інтерфейс Flamingo CRM — головний екран системи управління клієнтами та базою даних"
                    width={1200}
                    height={630}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto block"
                    onError={() => setHeroImageError(true)}
                  />
                ) : (
                  <div className="w-full hero-scroll-inner">
                    <img
                      src="/images/hero.png"
                      alt="Інтерфейс Flamingo CRM — головний екран системи управління клієнтами та базою даних"
                      width={1200}
                      height={630}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto block"
                      onError={() => setHeroImageError(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Блок «Чому Flamingo CRM» — окремо під сіткою */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Чому Flamingo CRM — преміум-блок */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-purple-950/30 via-[#0a0a0f] to-[#0a0a0f] p-6 sm:p-8 shadow-[0_0_60px_-20px_rgba(147,51,234,0.15)] overflow-hidden">
              {/* Верхня градієнтна лінія */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
              {/* М'яке свічення зверху */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-500/10 blur-3xl pointer-events-none" />

              <div className="relative">
                <p className="text-purple-400/90 text-xs font-semibold tracking-[0.25em] uppercase text-center mb-3">
                  Чому обирають нас
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
                  Чому <span className="gradient-text">Flamingo CRM</span>?
                </h2>
                <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-8">
                  Простий старт. Зрозуміла ціна. Один інструмент для всього.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    {
                      icon: Sparkles,
                      title: "Зручність на першому місці",
                      desc: "Інтуїтивний інтерфейс — від клієнтів до звітів без підручників.",
                      delay: 0.8,
                    },
                    {
                      icon: Wallet,
                      title: "Доступна ціна",
                      desc: "Від 450 грн/міс. Без прихованих платежів та зобов'язань.",
                      badge: "від 450 грн",
                      delay: 0.9,
                    },
                    {
                      icon: Layers,
                      title: "Універсальність",
                      desc: "Торгівля, послуги, IT — масштабуйте разом з бізнесом.",
                      delay: 1,
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.delay, duration: 0.45 }}
                        className="group relative flex flex-col items-center text-center rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:border-purple-500/25 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-10px_rgba(147,51,234,0.2)]"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/15 to-pink-500/10 border border-purple-500/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-purple-500/30 group-hover:from-purple-500/20 group-hover:to-pink-500/15">
                          <Icon className="w-7 h-7 text-purple-400" />
                        </div>
                        {item.badge && (
                          <span className="absolute top-2 right-2 text-[10px] font-semibold uppercase tracking-wider text-purple-400/90 bg-purple-500/15 px-2.5 py-1 rounded-md">
                            {item.badge}
                          </span>
                        )}
                        <h3 className="text-white font-semibold text-base mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
