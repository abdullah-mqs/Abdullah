import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Goals from "@/components/sections/Goals";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <Goals />
      <Contact />
      <Footer />
    </main>
  );
}
