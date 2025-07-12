import AboutInvestment from "@/components/AboutInvestment";
import AboutInvestor from "@/components/AboutInvestor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import HousesSection from "@/components/HousesSection";
import OurValues from "@/components/OurValues";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <div className="relative h-full w-full overflow-x-hidden">
      <ParallaxBackground />
      <div className="relative z-10 bg-color3 bg-opacity-85">
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
    </div>
  );
}
