"use client";
import { IProjectData } from "@/base/interface/IProject";
import { PROJECT_QUERY } from "@/base/query/project";
import BookSection from "@/components/Modules/Homepage/BookSection";
import OurClientTypeSection from "@/components/Modules/ProjectPage/OurClientTypeSection";
import ProjectHeroSection from "@/components/Modules/ProjectPage/ProjectHeroSection";
import ProjectSection from "@/components/Modules/ProjectPage/ProjectSection";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function ProjectPage() {
  const { data:projectData } = useSuspenseQuery<IProjectData>(PROJECT_QUERY);
  const projects = projectData.projects;

    return (
      <div>
        <ProjectHeroSection />
        <OurClientTypeSection />
        <ProjectSection projects={projects} />
        <BookSection />
      </div>
    );
  }