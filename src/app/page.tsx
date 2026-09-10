import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import PricingSection from "@/components/PricingSection";
import PromotionsSection from "@/components/PromotionsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="flex min-w-0 flex-1 flex-col w-full overflow-x-clip">
      <Hero />
      <AboutSection />
      <RoomsSection />
      <PricingSection />
      <PromotionsSection />
      <FacilitiesSection />
      <BlogSection />
    </div>
  );
}
