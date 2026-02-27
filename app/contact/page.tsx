import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Контакти | Flamingo CRM - Зв'яжіться з нами",
  description: "Зв'яжіться з Flamingo CRM. Питання про CRM систему для бізнесу. Підтримка, консультація, реєстрація на пробний період.",
  keywords: ["контакти CRM", "підтримка CRM", "Flamingo CRM"],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
          
          {/* Page H1 */}
          <section className="py-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Зв'яжіться з <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">нами</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Маєте питання про Flamingo CRM? Ми готові допомогти!
            </p>
          </section>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
