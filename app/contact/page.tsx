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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#contact" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
