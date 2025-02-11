import BookSection from "@/components/Modules/Homepage/BookSection";
import DeveloperHubSection from "@/components/Modules/Homepage/DeveloperHubSection";
import FeaturedProject from "@/components/Modules/Homepage/FeaturedProject";
import HeroSection from "@/components/Modules/Homepage/HeroSection";
import OurProcess from "@/components/Modules/Homepage/OurProcess";
import OurService from "@/components/Modules/Homepage/OurService";
import Testimonials from "@/components/Modules/Homepage/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurService />
      <FeaturedProject />
      <OurProcess />
      <Testimonials />
      <DeveloperHubSection />
      <BookSection />
    </div>
  );
}
