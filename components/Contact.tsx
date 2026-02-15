"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s\-()]{10,20}$/;

function validateForm(data: { name: string; email: string; phone: string; message: string; company: string }): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Введіть ваше ім'я";
  } else if (data.name.trim().length < 2) {
    errors.name = "Ім'я має містити мінімум 2 символи";
  }

  if (!data.email.trim()) {
    errors.email = "Введіть email";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Введіть коректний email";
  }

  if (data.phone.trim() && !PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Введіть коректний номер телефону (наприклад, +380501234567)";
  }

  if (!data.message.trim()) {
    errors.message = "Введіть повідомлення";
  } else if (data.message.trim().length < 10) {
    errors.message = "Повідомлення має містити мінімум 10 символів";
  }

  return errors;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    const formData = { name, email, phone, company, message };
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://flamingo-crm-xi.vercel.app/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          ...(formData.phone.trim() && { phone: formData.phone.trim() }),
          ...(formData.company.trim() && { company: formData.company.trim() }),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || `Помилка ${response.status}`);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Не вдалося надіслати. Спробуйте пізніше.");
    }
  };

  const inputBase =
    "w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors";
  const inputError = "border-red-500/50 focus:border-red-500/50";
  const inputNormal = "border-white/10 focus:border-purple-500/50";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center">
            Зв&apos;яжіться з нами
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Маєте питання про CRM? Напишіть нам – відповімо за 24 години.
            Email:{" "}
            <a href="mailto:support@flamingo-crm.com.ua" className="text-purple-400 hover:text-purple-300">
              support@flamingo-crm.com.ua
            </a>
            . Або зареєструйтеся на пробний період прямо зараз!{" "}
            <a
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Розпочати
            </a>
            .
          </p>

          {status === "success" && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <p className="text-green-400">
                Дякуємо! Ваше повідомлення надіслано. Ми зв&apos;яжемося з вами протягом 24 годин.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <p className="text-red-400">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Ім&apos;я <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                placeholder="Ваше ім'я"
                disabled={status === "loading"}
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                placeholder="your@email.com"
                disabled={status === "loading"}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                placeholder="+380501234567"
                disabled={status === "loading"}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                Назва компанії
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={`${inputBase} ${inputNormal}`}
                placeholder="Назва вашої компанії (необов'язково)"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Повідомлення <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                placeholder="Ваше повідомлення..."
                disabled={status === "loading"}
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Надсилання...</span>
                </>
              ) : (
                <>
                  <span>Надіслати</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
