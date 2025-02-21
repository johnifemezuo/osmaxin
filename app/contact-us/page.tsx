import ContactHeroSection from "@/components/Modules/ContactUsPage/ContactHeroSection";
import FaqSection from "@/components/Modules/DevHubPage/FaqSection";
import BookSection from "@/components/Modules/Homepage/BookSection";
import DeveloperHubSection from "@/components/Modules/Homepage/DeveloperHubSection";
import Testimonials from "@/components/Modules/Homepage/Testimonials";
import ClientLogoSection from "@/components/Modules/ServicePage/ClientLogoSection";

export default function ContactUsPage() {
  return (
    <div>
      <ContactHeroSection />
      <FaqSection />
      <ClientLogoSection />
      <Testimonials />
      <DeveloperHubSection />
      <BookSection />
    </div>
  );
}
