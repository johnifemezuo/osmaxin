"use client";

import ContactHeroSection from "@/components/Modules/ContactUsPage/ContactHeroSection";
import FaqSection from "@/components/Modules/DevHubPage/FaqSection";
import BookSection from "@/components/Modules/Homepage/BookSection";
import DeveloperHubSection from "@/components/Modules/Homepage/DeveloperHubSection";
import Testimonials from "@/components/Modules/Homepage/Testimonials";
import ClientLogoSection from "@/components/Modules/ServicePage/ClientLogoSection";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { FAQ_QUERY } from "@/base/query/faq";
import { TESTIMONIAL_QUERY } from "@/base/query/testimonial";

export const dynamic = "force-dynamic";



export default function ContactUsPage() {
  const { data } = useSuspenseQuery(FAQ_QUERY);

  const { data:testimonialData } = useSuspenseQuery(TESTIMONIAL_QUERY);
  
  return (
    <div>
      <ContactHeroSection />
      <FaqSection data={data} />
      <ClientLogoSection />
      <Testimonials data={testimonialData} />
      <DeveloperHubSection />
      <BookSection />
    </div>
  );
}
