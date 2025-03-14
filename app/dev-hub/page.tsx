"use client";

import { COURSE_OFFERS_QUERY } from "@/base/query/courseOffers";
import { TESTIMONIAL_QUERY } from "@/base/query/testimonial";
import AboutDevHubPage from "@/components/Modules/DevHubPage/AboutDevHubPage";
import ContactSection from "@/components/Modules/DevHubPage/ContactSection";
import DevHubCourses, {
  ICourses,
} from "@/components/Modules/DevHubPage/DevHubCourses";
import DevHubHeroSection from "@/components/Modules/DevHubPage/DevHubHeroSection";
import Testimonials from "@/components/Modules/Homepage/Testimonials";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

interface ICoursesData {
  courseOffers: ICourses[];
}

export default function DevHubPage() {
  const { data: testimonialData } = useSuspenseQuery(TESTIMONIAL_QUERY);

  const { data: coursesOffer } =
    useSuspenseQuery<ICoursesData>(COURSE_OFFERS_QUERY);

  const allCourses = coursesOffer.courseOffers || {};

  return (
    <div>
      <DevHubHeroSection />
      <AboutDevHubPage />
      <DevHubCourses courses={allCourses} />
      <Testimonials data={testimonialData} />
      <ContactSection />
    </div>
  );
}
