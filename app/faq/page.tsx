import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQContent from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "Часті питання | Flamingo CRM - Питання та відповіді",
  description: "Відповіді на часті питання про Flamingo CRM. Реєстрація, функціонал, інтеграції, донати на підтримку ЗСУ.",
  keywords: ["FAQ CRM", "питання про CRM", "Flamingo CRM", "підтримка CRM"],
  openGraph: {
    title: "Часті питання | Flamingo CRM",
    description: "Онлайн Q&A про CRM систему для управління клієнтами",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f]">
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}

