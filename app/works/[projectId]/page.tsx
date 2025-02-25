import BookSection from "@/components/Modules/Homepage/BookSection";
import ProjectSection from "@/components/Modules/ProjectPage/ProjectSection";
import WorkHeroSection from "@/components/Modules/WorkDetailPage/WorkHeroSection";
import WorkIntroSection from "@/components/Modules/WorkDetailPage/WorkIntroSection";
import Head from "next/head";

export default function ProjectDetailPage() {
  return (
    <>
      <Head>
        <title>Osmaxin | Works | </title>
      </Head>

      <WorkHeroSection />
      <WorkIntroSection />
      <ProjectSection />
      <BookSection />
    </>
  );
}
