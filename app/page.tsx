import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedIcons from "@/components/FeaturedIcons";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <Hero />
      <FeaturedIcons />
      <Features />
      <Benefits />
      <Partners />
      <CTA />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
