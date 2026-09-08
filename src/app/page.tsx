import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import PricingSection from "@/components/PricingSection";
import PromotionsSection from "@/components/PromotionsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
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
