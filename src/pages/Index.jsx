import { Button } from "@/components/ui/button";
import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import Features from "@/components/Features.jsx";
import HowItWorks from "@/components/HowItWorks.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
