import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ForTheBar from "@/components/ForTheBar";
import PointsSystem from "@/components/PointsSystem";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ForTheBar />
        <PointsSystem />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
