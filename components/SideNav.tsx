"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Можливості", href: "/#features", sectionId: "features" },
  { name: "Допомога ЗСУ", href: "/#ukraine-support", sectionId: "ukraine-support" },
  { name: "Про нас", href: "/#about", sectionId: "about" },
  { name: "Результати", href: "/#testimonials", sectionId: "testimonials" },
  { name: "Блог", href: "/blog", sectionId: null },
  { name: "Контакти", href: "/#contact", sectionId: "contact" },
];

const RAIL_WIDTH = 12;
const CONTENT_WIDTH = 180;
const TOTAL_OPEN = RAIL_WIDTH + CONTENT_WIDTH;

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome || typeof document === "undefined") return;
    const sectionIds = navLinks.map((l) => l.sectionId).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          if (id) setActiveSectionId(id);
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () =>
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
  }, [isHome]);

  return (
    <motion.div
      className="fixed right-0 top-0 bottom-0 z-40 hidden lg:flex flex-row items-center"
      initial={false}
      animate={{ width: isOpen ? TOTAL_OPEN : RAIL_WIDTH }}
      transition={{ duration: 0.22, ease: [0.33, 1, 0.68, 1] }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Зона з посиланнями — без коробки, лише м’який градієнт для читабельності */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: CONTENT_WIDTH, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="flex-shrink-0 h-full flex flex-col justify-center py-12"
          >
            <div
              className="h-full min-h-[280px] flex flex-col justify-center gap-1 pl-4 pr-2"
            >
              <nav aria-label="Навігація" className="flex flex-col gap-0.5">
                {navLinks.map((link, i) => {
                  const isActive =
                    isHome && link.sectionId && activeSectionId === link.sectionId;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 4 }}
                      whileHover={{ x: -15 }}
                      transition={{
                        opacity: { duration: 0.2, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] },
                        x: { duration: 0.28, ease: [0.33, 1, 0.68, 1] },
                      }}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      {/* Коннектор: коротка лінія від рейки до тексту */}
                      <span
                        className="flex-shrink-0 h-px transition-all duration-200"
                        style={{
                          width: 12,
                          backgroundColor: isActive
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,255,255,0.25)",
                        }}
                      />
                      <Link
                        href={link.href}
                        className={`
                          py-2 text-[13px] font-medium whitespace-nowrap
                          transition-colors duration-200
                          ${isActive
                            ? "text-white"
                            : "text-white/50 hover:text-white/90"
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Рейка: одна вертикальна лінія по правому краю */}
      <div
        className="flex-shrink-0 h-full flex justify-center items-center"
        style={{ width: RAIL_WIDTH }}
        aria-label="Наведіть для відкриття навігації"
      >
        <div
          className="w-px h-full min-h-[200px]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}
