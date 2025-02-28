"use client"; 
import { EXECUTIVES_QUERY, TEAM_QUERY } from "@/base/query/team";
import { TEAM_GALARY_QUERY } from "@/base/query/teamGalary";
import { TESTIMONIAL_QUERY } from "@/base/query/testimonial";
import AboutHeroSection from "@/components/Modules/AboutPage/AboutHeroSection";
import AboutSection from "@/components/Modules/AboutPage/AboutSection";
import DevTeam from "@/components/Modules/AboutPage/DevTeam";
import MeetOurTeam from "@/components/Modules/AboutPage/MeetOurTeam";
import TeamGalary from "@/components/Modules/AboutPage/TeamGalary";
import BookSection from "@/components/Modules/Homepage/BookSection";
import DeveloperHubSection from "@/components/Modules/Homepage/DeveloperHubSection";
import Testimonials from "@/components/Modules/Homepage/Testimonials";
import ClientLogoSection from "@/components/Modules/ServicePage/ClientLogoSection";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function AboutPage() {
  const { data:testimonialData } = useSuspenseQuery(TESTIMONIAL_QUERY);
  const { data:teamData } = useSuspenseQuery(TEAM_QUERY);
  const { data:executivesData } = useSuspenseQuery(EXECUTIVES_QUERY);
  const { data:teamGalaryData } = useSuspenseQuery(TEAM_GALARY_QUERY);
  
  return (
    <div>
      <AboutHeroSection />
      <AboutSection />
      <MeetOurTeam data={executivesData} />
      <DevTeam data={teamData} />
      <TeamGalary data={teamGalaryData} />
      <ClientLogoSection />
      <Testimonials data={testimonialData} />
      <DeveloperHubSection />
      <BookSection />
    </div>
  );
}
