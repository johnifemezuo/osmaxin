import { Container } from "@/components/Container/Container";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import ScrowStar from "@/components/Icons/ScrowStar";
import ProjectCard from "@/components/UI/Cards/ProjectCard";

const FeaturedProject = () => {
  return (
    <div className=" bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000 py-20 lg:py-32">
      <Container>
        <div>
          <SubTitle>Feature project</SubTitle>

          <div className="mt-8 lg:flex justify-between items-center">
            <h1 className="text-3xl lg:text-4xl max-w-2xl font-semibold">
              Catch a Glimpse of Our Top Notch Portfolio Project
            </h1>

            <div className="flex items-center  mt-20">
              <button className="bg-transparent font-medium lg:text-lg  border-white text-white border-2 py-2 px-4 rounded-full h-12 ">
                Sell all services
              </button>
              <div className="bg-white  place-content-center rounded-full w-12 h-12 grid place- text-white content-center">
                <ArrowRight className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden w-full">
            <div className="flex space-x-8 w-[2000px] overflow-x-auto py-12">
              <ProjectCard
                title="Rushbill"
                image="/images/proj-1.png"
                projectType="App Development"
              />
              <ProjectCard
                title="Ventlio"
                image="/images/proj-2.png"
                projectType="App Development"
              />
              <ProjectCard
                title="Sqeam"
                image="/images/proj-1.png"
                projectType="App Development"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#F1606F] py-8  px-8 -mb-44 -ml-5 overflow-hidden -rotate-3">
        <div className="flex items-center space-x-5 w-[2000px]">
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
            We love to work with
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
          FINANCIAL
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
          HOSPITALS
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
          BUSINESSES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
