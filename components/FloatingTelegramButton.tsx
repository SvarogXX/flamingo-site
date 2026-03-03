"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";

const TELEGRAM_BOT_URL = "https://t.me/FLAMINGOCRM_BOT";

export default function FloatingTelegramButton() {
  const reducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number>(Date.now());
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [requestId, setRequestId] = useState("");

  const statusText = useMemo(() => {
    if (status === "success") return "Повідомлення надіслано ✅";
    if (status === "error") return errorMessage || "Не вдалося надіслати. Спробуйте ще раз.";
    return "";
  }, [status, errorMessage]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      setStatus("error");
      return;
    }

    setIsSending(true);
    setStatus("idle");
    setErrorMessage("");
    setRequestId("");

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          message: trimmedMessage,
          website,
          formStartedAt,
          source: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const backendMessage = payload?.message ? String(payload.message) : "Telegram API request failed";
        throw new Error(backendMessage);
      }

      if (payload?.requestId && typeof payload.requestId === "string") {
        setRequestId(payload.requestId);
      }

      setStatus("success");
      setMessage("");
      setName("");
      setWebsite("");
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Не вдалося надіслати. Спробуйте ще раз.";
      setErrorMessage(msg);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-4 sm:bottom-12 sm:left-8 z-40">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          className="mb-3 w-[280px] rounded-2xl border border-cyan-300/30 bg-[#0a1320]/95 p-4 shadow-2xl shadow-black/45 backdrop-blur-md sm:w-[320px]"
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-cyan-100">Напишіть нам</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-400 hover:text-white"
            >
              Закрити
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Ваше ім'я (необов'язково)"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#101a28] px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60"
            />

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            <textarea
              placeholder="Ваше повідомлення"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={4}
              required
              className="w-full resize-none rounded-lg border border-white/10 bg-[#101a28] px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60"
            />

            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={isSending}
                className="rounded-lg bg-[#229ED9] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1c89bd] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Надсилаємо..." : "Надіслати"}
              </button>

              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-200/90 underline underline-offset-2 hover:text-cyan-100"
              >
                Відкрити Telegram
              </a>
            </div>

            {statusText ? (
              <p className={`text-xs ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}>
                {statusText}
              </p>
            ) : null}

            {status === "success" && requestId ? (
              <a
                href={`${TELEGRAM_BOT_URL}?start=${encodeURIComponent(requestId)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg border border-cyan-300/30 bg-[#0f1f32] px-3 py-2 text-xs font-semibold text-cyan-100 transition-colors hover:border-cyan-300/50 hover:bg-[#13263d]"
              >
                Продовжити в Telegram
              </a>
            ) : null}
          </form>
        </motion.div>
      )}

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        type="button"
        aria-label="Написати в Telegram бот"
        title="Напишіть нам"
        onClick={() => {
          setIsOpen((prev) => {
            const next = !prev;
            if (next) {
              setFormStartedAt(Date.now());
              setStatus("idle");
              setErrorMessage("");
              setRequestId("");
            }
            return next;
          });
        }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] shadow-xl shadow-black/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 sm:h-16 sm:w-16 ${!reducedMotion ? "hero-card-float" : ""}`}
      >
        <span className="pointer-events-none absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-cyan-300/30 bg-[#081824]/90 px-3 py-1.5 text-xs font-medium text-cyan-100 opacity-0 shadow-lg shadow-black/35 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Напишіть нам
        </span>

        <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true">
          <path
            fill="#ffffff"
            d="M21.94 4.67c-.26-.22-.62-.28-.94-.16L3.69 11.24c-.5.19-.79.72-.7 1.25.09.53.53.94 1.07 1l4.4.55 1.12 4.18c.13.49.53.86 1.03.95.5.09 1-.12 1.29-.53l2.49-3.56 4.26 3.14c.35.26.81.31 1.21.13.4-.18.68-.56.73-1l1.77-11.58c.06-.43-.11-.85-.43-1.1Zm-3.06 3.01-7.22 6.65a.75.75 0 0 0-.2.36l-.57 2.73-.74-2.76a.75.75 0 0 0-.65-.55l-2.91-.36 12.29-4.92Z"
          />
        </svg>
      </motion.button>
    </div>
  );
}
