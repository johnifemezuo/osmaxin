"use client";


import { TESTIMONIAL_QUERY } from "@/base/query/testimonial";
import AboutDevHubPage from "@/components/Modules/DevHubPage/AboutDevHubPage";
import ContactSection from "@/components/Modules/DevHubPage/ContactSection";
import DevHubCourses from "@/components/Modules/DevHubPage/DevHubCourses";
import DevHubHeroSection from "@/components/Modules/DevHubPage/DevHubHeroSection";
import Testimonials from "@/components/Modules/Homepage/Testimonials";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function DevHubPage() {
  const { data:testimonialData } = useSuspenseQuery(TESTIMONIAL_QUERY);
  return (
    <div>
      <DevHubHeroSection />
      <AboutDevHubPage />
      <DevHubCourses />
      <Testimonials data={testimonialData} />
      <ContactSection />
    </div>
  );
}
