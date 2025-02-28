import { Container } from "@/components/Container/Container";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import ProjectCard from "@/components/UI/Cards/ProjectCard";
import Maquee from "@/components/UI/Maquee";

const FeaturedProject = ({projects}: {projects: any}) => {
  console.log(projects)
  return (
    <div className=" bg-gradient-to-b from-[#000000] overflow-hidden relative to-[#00008B] to-purple-5000 pt-20 pb-44 lg:pt-32 lg:pb-48">
      <Container>
        <div>

          <div className="mt-8 lg:flex justify-between items-center px-5 xl:px-0">
          <div className="space-y-4">
          <SubTitle>Feature project</SubTitle>
            <h1 className="text-3xl lg:text-4xl max-w-2xl font-semibold">
              Catch a Glimpse of Our Top Notch Portfolio Project
            </h1>
          </div>

            <div className="flex items-center  mt-7 xl:mt-20">
              <button className="bg-transparent font-medium lg:text-lg  border-white text-white border-2 py-2 px-4 rounded-full h-12 ">
                Sell all services
              </button>
              <div className="bg-white  place-content-center rounded-full w-12 h-12 grid place- text-white content-center">
                <ArrowRight className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 xl:mt-12">
          <div className="overflow-hidden w-full">
            <div className="flex space-x-8 px-5 lg:px-0 w-[2000px] overflow-x-auto py-12">
             
              {projects.map((project: any) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.coverimage.url}
                  projectType={project.industry	}
                  slug={project.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

<div className="absolute bottom-0">
    <Maquee />
</div>
    </div>
  );
};

export default FeaturedProject;
