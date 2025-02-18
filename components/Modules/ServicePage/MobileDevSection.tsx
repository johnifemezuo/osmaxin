import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import FeaturedBtn from "@/components/UI/FeaturedBtn";
import Image from "next/image";

const MobileDevSection = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32 px-5 xl:px-0">
      <Container>
        <div className=" lg:flex justify-between lg:py-12 lg:px-12 bg-white rounded-2xl px-5 py-12 lg:folder-shape">
          <div className="xl:space-y-6 lg:pt-6 space-y-4">
            <SubTitle>MOBILE DEVELOPMENT</SubTitle>
            <PageTitle className="text-zinc-700 lg">
            Mobile App Development for Seamless User Experiences
            </PageTitle>

            <p className="text-zinc-500">
            We create high-performing, user-friendly mobile applications tailored for both iOS and Android platforms. From initial concept to deployment, Osmaxin ensures your app is built to deliver exceptional functionality, scalability, and user engagement.
            </p>

            <h4 className="text-lg lg:text-xl xl:text-2xl font-medium text-zinc-700">
            Whether you are launching a new app or enhancing an existing one, Osmaxin will help you achieve your mobile development goals.
            </h4>

            <div className="w-full flex items-center flex-wrap lg:pt-5 gap-4">
              <FeaturedBtn title="App Maintenance and Updates" />
              <FeaturedBtn title="Custom Mobile App Development" />
              <FeaturedBtn title="Cross-Platform Solutions" />
              <FeaturedBtn title="Native iOS and Android Development" />
              <FeaturedBtn title="App UI/UX Design" />
            </div>
          </div>

          <Image
            src="/images/mobile-mock.png"
            alt="Osmaxin web development"
            width={600}
            height={600}
            className="lg:w-[500px] lg:mt-12 xl:mt-32 lg:h-[400px] mt-12"
            />
            </div>
      </Container>
    </div>
  );
};

export default MobileDevSection;
