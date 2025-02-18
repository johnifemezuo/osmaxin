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
          <div className="rounded-xl relative">
            <Image
              src={image}
              alt="osmaxin project"
              width={200}
              height={300}
              className="w-full rounded-xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase  xl:text-base">{category}</p>
            <p className="px-3 py-1 text-sm rounded-full border text-white">
              {projectType}
            </p>
          </div>
          <h1 className="md:text-xl font-semibold lg:text-2xl xl:text-2xl text-white">{title}</h1>
        </div>
    </Link>
  );
};

const ProjectSection = () => {
  return (
    <div className="bg-gradient-to-b px-5 xl:px-0 from-[#0E1846] to-[#00008B] to-purple-5000">
      <Container>
        <div className="border-y grid border-white/20 lg:flex items-center py-12 justify-between lg:py-24 space-y-8 lg:space-y-0">
          <h1 className="text-3xl lg:text-3xl xl:text-5xl font-bold">
            Projects
          </h1>

          <p className=" max-w-2xl lg:max-w-xl lg:text-lg xl:text-2xl text-lg">
            We&apos;ve helped over 350 firms reach their full potential, and
            we&apos;re happy to do the same for you! Find out how our skills can
            contribute to your success.
          </p>
        </div>

        <div className="gap-8 py-20 sm:py-32 lg:py-44 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
          <ProjCard
            image="/images/work-1.png"
            title="Rushbill - Building a billing and payment app for people"
            category="FINTECH"
            projectType="App Developement"
            link="/"
          />
          <ProjCard
            image="/images/work-1.png"
            title="Rushbill - Building a billing and payment app for people"
            category="FINTECH"
            projectType="App Developement"
            link="/"
          />
          <ProjCard
            image="/images/work-1.png"
            title="Rushbill - Building a billing and payment app for people"
            category="FINTECH"
            projectType="App Developement"
            link="/"
          />
          <ProjCard
            image="/images/work-1.png"
            title="Rushbill - Building a billing and payment app for people"
            category="FINTECH"
            projectType="App Developement"
            link="/"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectSection;
