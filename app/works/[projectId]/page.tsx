"use client";

import { PROJECT_DETAIL_QUERY } from "@/base/query/project";
import ContactSection from "@/components/Modules/DevHubPage/ContactSection";
import { ProjectDetails } from "@/components/Modules/WorkDetailPage/ProjectDetails";
import WorkHeroSection from "@/components/Modules/WorkDetailPage/WorkHeroSection";
import WorkIntroSection from "@/components/Modules/WorkDetailPage/WorkIntroSection";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Head from "next/head";
import { use } from 'react';

export default function ProjectDetailPage({params}: any) {
  const resolvedParams: any = use(params);
  const projectId = resolvedParams.projectId;
  const { data:projectData } = useSuspenseQuery<{projects: any}>(PROJECT_DETAIL_QUERY,{variables: {slug: projectId}});
  const project = projectData.projects[0];

  return (
    <div>
      <Head>
        <title>Osmaxin | Works | </title>
      </Head>

      <WorkHeroSection title={project.title} description={project.description} image={project.coverimage.url} livesite={project.livesite} slug={project.slug}   />
      <WorkIntroSection industry={project.industry} platform={project.platform} services={project.services} timeline={project.timeline} year={project.year} />
      <ProjectDetails details={project.content} />
      <ContactSection />
    </div>
  );
}
