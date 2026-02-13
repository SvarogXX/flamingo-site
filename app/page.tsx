import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedIcons from "@/components/FeaturedIcons";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <Hero />
      <FeaturedIcons />
      <Features />
      <Benefits />
      {/* <Partners /> */}
      <Pricing />
      <Testimonials />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
