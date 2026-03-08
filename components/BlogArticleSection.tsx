"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

interface BlogArticleSectionProps {
  children: React.ReactNode;
}

export default function BlogArticleSection({ children }: BlogArticleSectionProps) {
  const [isReadingMode, setIsReadingMode] = useState(false);

  return (
    <div data-reading-mode={isReadingMode ? "true" : undefined} className="transition-colors duration-300">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsReadingMode((prev) => !prev)}
          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
            isReadingMode
              ? "border-purple-400/50 bg-purple-500/20 text-purple-200"
              : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-300"
          }`}
          aria-pressed={isReadingMode}
        >
          <BookOpen className="h-4 w-4" />
          <span>{isReadingMode ? "Режим читання увімкнено" : "Режим читання"}</span>
        </button>
      </div>
      {children}
    </div>
  );
}
