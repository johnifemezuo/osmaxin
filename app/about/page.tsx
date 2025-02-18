import AboutHeroSection from "@/components/Modules/AboutPage/AboutHeroSection";
import AboutSection from "@/components/Modules/AboutPage/AboutSection";
import DevTeam from "@/components/Modules/AboutPage/DevTeam";
import MeetOurTeam from "@/components/Modules/AboutPage/MeetOurTeam";
import TeamGalary from "@/components/Modules/AboutPage/TeamGalary";
import BookSection from "@/components/Modules/Homepage/BookSection";
import DeveloperHubSection from "@/components/Modules/Homepage/DeveloperHubSection";
import Testimonials from "@/components/Modules/Homepage/Testimonials";
import ClientLogoSection from "@/components/Modules/ServicePage/ClientLogoSection";

export default function AboutPage() {
  return (
    <div>
      <AboutHeroSection />
      <AboutSection />
      <MeetOurTeam />
      <DevTeam />
      <TeamGalary />
      <ClientLogoSection />
      <Testimonials />
      <DeveloperHubSection />
      <BookSection />
    </div>
  );
}
