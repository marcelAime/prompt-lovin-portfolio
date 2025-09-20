import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Formation from "@/components/Formation";
import Competences from "@/components/Competences";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Formation />
      <Competences />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
