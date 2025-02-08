import FeaturedProject from "@/components/Modules/Homepage/FeaturedProject";
import HeroSection from "@/components/Modules/Homepage/HeroSection";
import OurProcess from "@/components/Modules/Homepage/OurProcess";
import OurService from "@/components/Modules/Homepage/OurService";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurService />
      <FeaturedProject />
      <OurProcess />
    </div>
  );
}
