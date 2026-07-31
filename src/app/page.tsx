import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import PointsSystem from "@/components/PointsSystem";
import Pricing from "@/components/Pricing";
// ⛔ Depoimento fictício — ver aviso em src/components/Testimonial.tsx
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <PointsSystem />
        <Pricing />
        <Testimonial />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
