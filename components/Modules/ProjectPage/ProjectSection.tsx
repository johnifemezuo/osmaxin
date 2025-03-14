import { IProject } from "@/base/interface/IProject";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";

const ProjCard = ({
  image,
  title,
  link,
  projectType,
  category,
}: {
  image: string;
  title: string;
  link: string;
  projectType: string;
  category: string;
}) => {
  return (
    <Link href={link}>
      <div className="overflow-hidden space-y-5">
        <div className="rounded-xl relative h-[200px] lg:h-[300px] overflow-hidden">
          <Image
            src={image}
            alt="osmaxin project"
            width={200}
            height={300}
            className="w-full h-full object-cover  transform transition-transform duration-500 hover:scale-125"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase  xl:text-base">{category}</p>
          <p className="px-3 py-1 text-sm rounded-full border text-white">
            {projectType}
          </p>
        </div>
        <h1 className="md:text-xl font-semibold lg:text-2xl xl:text-2xl text-white">
          {title}
        </h1>
      </div>
    </Link>
  );
};

const ProjectSection = ({ projects }: { projects: any }) => {
  return (
    <div className='bg-gradient-to-b px-5 xl:px-0 from-[#0E1846] to-[#00008B] to-purple-5000'>
      <Container>
        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
          <div className="border-y grid border-white/20 lg:flex items-center py-12 justify-between lg:py-24 space-y-8 lg:space-y-0">
            <h1 className="text-3xl lg:text-3xl xl:text-5xl font-bold">
              Projects
            </h1>

            <p className=" max-w-2xl lg:max-w-xl lg:text-lg xl:text-2xl text-lg">
              We&apos;ve helped over 350 firms reach their full potential, and
              we&apos;re happy to do the same for you! Find out how our skills
              can contribute to your success.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
          <div className="gap-8 py-20 sm:py-32 lg:py-44 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
            {projects.map((project: IProject, id: number) => (
              <ProjCard
                image={project.coverimage.url}
                title={project.title}
                category={project.industry}
                projectType={project.platform}
                link={`/works/${project.slug}`}
                key={id}
              />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
};

export default ProjectSection;
