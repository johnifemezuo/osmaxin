import BookSection from "@/components/Modules/Homepage/BookSection";
import OurClientTypeSection from "@/components/Modules/ProjectPage/OurClientTypeSection";
import ProjectHeroSection from "@/components/Modules/ProjectPage/ProjectHeroSection";
import ProjectSection from "@/components/Modules/ProjectPage/ProjectSection";

export default function ProjectPage() {
    return (
      <div>
        <ProjectHeroSection />
        <OurClientTypeSection />
        <ProjectSection />
        <BookSection />
      </div>
    );
  }