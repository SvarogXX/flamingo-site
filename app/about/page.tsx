import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Про нас | Flamingo CRM - CRM для реального бізнесу",
  description: "Історія та місія Flamingo CRM. Команда, що створює зручну CRM систему для управління клієнтами за доступною ціною.",
  keywords: ["про CRM", "Flamingo CRM", "CRM система для бізнесу"],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Назад
          </Link>
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
