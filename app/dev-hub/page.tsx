import AboutDevHubPage from "@/components/Modules/DevHubPage/AboutDevHubPage";
import ContactSection from "@/components/Modules/DevHubPage/ContactSection";
import DevHubCourses from "@/components/Modules/DevHubPage/DevHubCourses";
import DevHubHeroSection from "@/components/Modules/DevHubPage/DevHubHeroSection";
import Testimonials from "@/components/Modules/Homepage/Testimonials";

export default function DevHubPage() {
  return (
    <div>
      <DevHubHeroSection />
      <AboutDevHubPage />
      <DevHubCourses />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
