import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Formation from "@/components/Formation";
import Competences from "@/components/Competences";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CalendlyWidget from "@/components/CalendlyWidget";
import Footer from "@/components/Footer";
import { lazy, Suspense } from "react";

const Chatbot = lazy(() => import("@/components/Chatbot"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Formation />
      <Competences />
      <Experience />
      <Contact />
      <CalendlyWidget />
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
};

export default Index;
