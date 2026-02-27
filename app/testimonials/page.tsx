import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Відгуки про CRM | Flamingo CRM - Що говорять користувачі",
  description: "Реальні відгуки користувачів про Flamingo CRM. Успіхи бізнесу з нашою системою управління клієнтами.",
  keywords: ["відгуки CRM", "рейтинги CRM", "Flamingo CRM відгуки", "користувачі CRM"],
  openGraph: {
    title: "Відгуки про CRM | Flamingo CRM",
    description: "Що думають користувачі про Flamingo CRM",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
          
          {/* Page H1 */}
          <section className="py-8 text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Що Кажуть <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Користувачі</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Реальні результати та досвід бізнесу з Flamingo CRM
            </p>
          </section>
        </div>
       <Testimonials/>
      </main>
      <Footer />
    </>
  );
}
