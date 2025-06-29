import AboutInvestment from "@/components/AboutInvestment";
import AboutInvestor from "@/components/AboutInvestor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import HousesSection from "@/components/HousesSection";
import OurValues from "@/components/OurValues";

export default function Home() {
  return (
    <div className="h-full w-full bg-color3 overflow-hidden">
      <Header />
      <HomeSection />
      <AboutInvestment />
      <AboutInvestor />
      <OurValues />
      <HousesSection />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
