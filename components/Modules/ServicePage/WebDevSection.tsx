import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import FeaturedBtn from "@/components/UI/FeaturedBtn";
import Image from "next/image";

const WebDevSection = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32 px-5 xl:px-0">
      <Container>
        <div className=" lg:flex justify-between lg:py-12 lg:px-12 bg-white rounded-2xl  lg:folder-shape">
          <div className="xl:space-y-6 lg:pt-6 px-6 py-12 lg:py-0 lg:px-0 space-y-4">
            <SubTitle>Website development</SubTitle>
            <PageTitle className="text-zinc-700 lg">
              We develop/design high quality web apps for small and big
              bussiness.
            </PageTitle>

            <p className="text-zinc-600">
              From concept and strategy, to design and implementation, Osmaxin
              award-winning team will bring your new website vision to life.
            </p>

            <h4 className="text-lg lg:text-xl xl:text-2xl font-medium text-zinc-700">
              Whatever your goal is for your website, OSMAXIN will help
              you succeed.
            </h4>

            <div className="w-full flex items-center flex-wrap lg:pt-5 gap-4 mt-8 lg:mt-0">
              <FeaturedBtn title="Corporate website" />
              <FeaturedBtn title="E-commerce websites " />
              <FeaturedBtn title="Web application" />
              <FeaturedBtn title="Web application" />
            </div>
          </div>

          <Image
            src="/images/webdev.png"
            alt="Osmaxin web development"
            width={600}
            height={600}
            className="lg:w-[500px] lg:mt-12 lg:h-[450px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default WebDevSection;
