"use client";

import { useState } from "react";
import { Link2, Twitter, Linkedin, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-[#0077B5]/20 hover:text-[#0077B5] hover:border-[#0077B5]/50",
    },
    {
      name: "Telegram",
      icon: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      ),
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#0088cc]/20 hover:text-[#0088cc] hover:border-[#0088cc]/50",
    },
  ];

  return (
    <div className="flex flex-col gap-3 shrink-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Поділитися</span>
      <div className="flex gap-2">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all ${link.color}`}
              aria-label={`Share on ${link.name}`}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
        
        <button
          onClick={handleCopyLink}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-purple-400"
          aria-label="Копіювати посилання"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Check className="h-4 w-4 text-green-400" />
              </motion.div>
            ) : (
              <motion.div
                key="link"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link2 className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none whitespace-nowrap">
            {copied ? "Скопійовано!" : "Копіювати"}
          </div>
        </button>
      </div>
    </div>
  );
}
