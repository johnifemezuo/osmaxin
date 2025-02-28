"use client";
import { PROJECT_QUERY } from "@/base/query/project";
import { TESTIMONIAL_QUERY } from "@/base/query/testimonial";
import BookSection from "@/components/Modules/Homepage/BookSection";
import DeveloperHubSection from "@/components/Modules/Homepage/DeveloperHubSection";
import FeaturedProject from "@/components/Modules/Homepage/FeaturedProject";
import HeroSection from "@/components/Modules/Homepage/HeroSection";
import OurProcess from "@/components/Modules/Homepage/OurProcess";
import OurService from "@/components/Modules/Homepage/OurService";
import Testimonials from "@/components/Modules/Homepage/Testimonials";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function Home() {
  const { data:testimonialData } = useSuspenseQuery(TESTIMONIAL_QUERY);
  const { data:projectData } = useSuspenseQuery<{projects: any}>(PROJECT_QUERY);
  const projects = projectData.projects;

  return (
    <div>
      <HeroSection />
      <OurService />
      <FeaturedProject projects={projects} />
      <OurProcess />
      <Testimonials data={testimonialData} />
      <DeveloperHubSection />
      <BookSection />
    </div>
  );
}
