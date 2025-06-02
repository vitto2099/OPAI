
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToHelp from "@/components/HowToHelp";
import Rescues from "@/components/Rescues";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DonationButton from "@/components/DonationButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-opai-darkGray text-white font-montserrat">
      <Header />
      <Hero />
      <About />
      <Rescues />
      <HowToHelp />
      <Contact />
      <Footer />
      <DonationButton />
    </div>
  );
};

export default Index;
