import AboutInvestment from "@/components/AboutInvestment";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <div className="h-full w-full bg-color3 overflow-hidden">
      <Header />
      <HomeSection />
      <AboutInvestment />
    </div>
  );
}
