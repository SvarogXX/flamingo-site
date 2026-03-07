"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function FloatingDonateButton() {
  const reducedMotion = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onClick={() => {
        const targetId = "ukraine-support";
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }

        if (pathname !== "/") {
          router.push(`/#${targetId}`);
          return;
        }

        window.location.hash = targetId;
      }}
      className={`fixed bottom-8 right-4 sm:bottom-12 sm:right-8 z-40 w-32 sm:w-36 glass-panel hover:border-white/30 bg-gradient-to-br from-purple-950/80 to-[#0c0c10] p-4 shadow-xl shadow-black/40 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 ${!reducedMotion ? "hero-card-float" : ""}`}
    >
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-0.5">Free</div>
        <div className="text-xs text-purple-400/90 font-medium">за донат для ЗСУ</div>
      </div>
    </motion.div>
  );
}
