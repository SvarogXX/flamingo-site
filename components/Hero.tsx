"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useTransform, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Layers } from "lucide-react";
import Audience from "./Audience";

type BlockableEvent = {
  preventDefault: () => void;
  stopPropagation: () => void;
};

export default function Hero() {
  const [heroImageError, setHeroImageError] = useState(false);
  const reducedMotion = useReducedMotion();
  const [decorationsReady, setDecorationsReady] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isHeroActiveRef = useRef(false);
  const [isHeroActive, setIsHeroActive] = useState(false);
  const imageScrollProgress = useMotionValue(0);
  const imageScrollY = useTransform(imageScrollProgress, [0, 1], ["0%", "-65%"]);

  const applyInnerScroll = (deltaY: number, e: BlockableEvent) => {
    const current = imageScrollProgress.get();
    const goingDown = deltaY > 0;
    const goingUp = deltaY < 0;
    const atStart = current <= 0;
    const atEnd = current >= 1;

    if ((goingDown && !atEnd) || (goingUp && !atStart)) {
      e.preventDefault();
      e.stopPropagation();

      const sensitivity = 0.0018;
      let next = current + deltaY * sensitivity;
      if (next < 0) next = 0;
      if (next > 1) next = 1;
      imageScrollProgress.set(next);
      return true;
    }

    return false;
  };

  const handleIconAction = (title: string) => {
    // Placeholder action for icon interaction — non-destructive and safe.
    // Can be replaced with modal open / navigation to detailed docs / analytics event.
    if (typeof window !== "undefined") console.info("Feature icon clicked:", title);
  };

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

  // Визначаємо, коли блок hero знаходиться в центрі екрана
  useEffect(() => {
    const handleScrollPosition = () => {
      if (!scrollContainerRef.current) return;
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const viewportCenter = viewportHeight / 2;
      const active = rect.top < viewportCenter && rect.bottom > viewportCenter;
      isHeroActiveRef.current = active;
      setIsHeroActive(active);
    };

    handleScrollPosition();
    window.addEventListener("scroll", handleScrollPosition);
    window.addEventListener("resize", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
      window.removeEventListener("resize", handleScrollPosition);
    };
  }, []);

  // Нативні wheel / touch події з passive: false — щоб можна було блокувати скрол сторінки
  useEffect(() => {
    if (reducedMotion) return;

    let lastTouchY: number | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (!isHeroActiveRef.current) return;

      const deltaY = e.deltaY;
      if (!deltaY) return;

      applyInnerScroll(deltaY, e as unknown as BlockableEvent);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!isHeroActiveRef.current) return;
      if (e.touches.length === 0) return;
      lastTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isHeroActiveRef.current) return;
      if (e.touches.length === 0) return;

      const currentY = e.touches[0].clientY;
      if (lastTouchY == null) {
        lastTouchY = currentY;
        return;
      }

      const deltaY = lastTouchY - currentY; // свайп вгору = скрол вниз
      if (!deltaY) return;

      const consumed = applyInnerScroll(deltaY, e as unknown as BlockableEvent);
      lastTouchY = currentY;

      if (consumed) {
        // якщо ми прокручуємо тільки картинку — сторінка не повинна скролитися
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleTouchEnd = () => {
      lastTouchY = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [reducedMotion]);

  type FeatureItem = {
    icon: any;
    title: string;
    desc: string;
    delay: number;
    badge?: string;
  };

  const features: FeatureItem[] = [
    {
      icon: Sparkles,
      title: "Зручність на першому місці",
      desc: "Інтуїтивний інтерфейс — від клієнтів до звітів без підручників.",
      delay: 0.8,
    },
    {
      icon: Zap,
      title: "Автоматизація продажів",
      desc: "Автоматизація лідів і процесів — швидші угоди та менше помилок. Контроль над продажами.",
      // badge: "Автоматизація",
      delay: 0.9,
    },
    {
      icon: Layers,
      title: "Універсальність",
      desc: "Торгівля, послуги, IT — масштабуйте разом з бізнесом.",
      delay: 1,
    },
  ];

  // Audience section moved to standalone component `Audience`

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-0">
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
              Сучасна CRM-платформа 2026 року, адаптована до різних бізнес-моделей — від сервісного бізнесу до e‑commerce
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Не переплачуйте за зайві функції. Зручна, швидка та доступна CRM для управління клієнтами та базою даних — від маленького магазину до компанії на 50+ людей.
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

            <motion.div
              className="relative inline-block mt-8 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Main button container */}
              <motion.a
                href="#ukraine-support"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  const element = document.getElementById('ukraine-support');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative inline-block backdrop-blur-xl bg-gradient-to-br from-purple-900/40 to-pink-900/30 text-white rounded-2xl
                  px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold
                  border border-white/20 hover:border-white/40
                  transition-all duration-300 group/btn
                  hover:from-purple-800/50 hover:to-pink-800/40
                  shadow-lg hover:shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20"
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  {/* Ukrainian flag SVG - small and elegant */}
                  <motion.svg
                    width="20"
                    height="14"
                    viewBox="0 0 36 24"
                    animate={{
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                    className="opacity-90"
                  >
                    <rect width="36" height="12" fill="#0066CC" />
                    <rect y="12" width="36" height="12" fill="#FFD700" />
                  </motion.svg>
                  
                  <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-bold tracking-wide">
                    Замість щомісячної плати, зроби донат на ЗСУ!
                  </span>
                </span>
                
                {/* Premium glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-40 transition-opacity duration-300 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 pointer-events-none" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Одне широке зображення знизу: ширше, з поступовою прозорістю від середини донизу */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 sm:mt-14 w-screen relative left-1/2 -translate-x-1/2"
          >
            <div
              className="w-full relative rounded-2xl border border-white/[0.1] bg-[#0c0c10] p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.6) 65%, transparent 85%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.6) 65%, transparent 85%)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(147,51,234,0.12),transparent)] pointer-events-none z-[1]" />
              {/* Поступова прозорість від середини донизу — на весь блок включно з рамкою */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-[5]"
                style={{
                  background: "linear-gradient(to top, #0a0a0f 0%, #0a0a0f 15%, rgba(10,10,15,0.85) 35%, rgba(10,10,15,0.4) 50%, transparent 65%)",
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
              {/* Зображення знизу: контейнер фіксованої висоти, прокрутка синхронна з рухом коліщатка */}
              <div
                ref={scrollContainerRef}
                className="relative h-[85vh] min-h-[500px] max-h-[800px] sm:h-[80vh] sm:max-h-[750px] lg:h-[200px] overflow-hidden rounded-b-xl bg-white/[0.02]"
              >
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
                  <motion.div
                    className="w-full will-change-transform"
                    style={{ y: imageScrollY }}
                  >
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
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Блок «Чому Flamingo CRM» — окремо під сіткою */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
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
            className="mt-10 max-w-5xl mx-auto"
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
                  Простий старт. Інтуїтивний та ергономічний інтерфейс. Один інструмент для всього.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {features.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.delay, duration: 0.45 }}
                        className="group relative flex flex-col items-center text-center rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:border-purple-500/25 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-10px_rgba(147,51,234,0.2)]"
                      >
                        <button
                          type="button"
                          onClick={() => handleIconAction(item.title)}
                          aria-label={`${item.title} — деталі`}
                          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/15 to-pink-500/10 border border-purple-500/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-purple-500/30 group-hover:from-purple-500/20 group-hover:to-pink-500/15"
                        >
                          <Icon className="w-7 h-7 text-purple-400" />
                        </button>
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
      {/* Audience section (standalone component) */}
      <Audience />
    </section>
  );
}
