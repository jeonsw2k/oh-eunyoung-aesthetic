import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Programs from "@/components/Programs/Programs";
import Reviews from "@/components/Reviews/Reviews";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ConsultationFAB from "@/components/ConsultationFAB/ConsultationFAB";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Programs />
      <Reviews />
      <Contact />
      <Footer />
      <ConsultationFAB />
    </main>
  );
}
