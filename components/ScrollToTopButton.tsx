"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Прокрутити вгору"
        className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#0a0a0f]/90 px-5 py-3 text-sm font-medium text-slate-300 shadow-lg backdrop-blur-sm transition-colors hover:border-purple-400/40 hover:bg-purple-500/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
      >
        <ChevronUp className="h-5 w-5" />
        Вгору
      </button>
    </div>
  );
}
