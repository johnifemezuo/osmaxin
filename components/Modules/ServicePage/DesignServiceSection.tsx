import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import FeaturedBtn from "@/components/UI/FeaturedBtn";
import Image from "next/image";

const DesignServiceSection = () => {
  return (
    <div className="px-5 lg:px-0 bg-gradient-to-b from-[#000000] overflow-hidden relative to-[#00008B] to-purple-5000 pt-20 pb-44 lg:pt-32 lg:pb-48">
      <Container>
        <div className=" px-5 py-12 lg:flex justify-between lg:px-12 bg-[#25255E] rounded-2xl lg:folder-shape xl:py-20">
          <div className="xl:space-y-6 lg:pt-6 space-y-4">
            <SubTitle>Website development</SubTitle>
            <PageTitle className="text-white lg">
            UI/UX Design & Prototyping for High-Impact Web Solutions
            </PageTitle>

            <p className="text-white/70">
            We specialize in designing and developing high-quality web applications for businesses of all sizes. From concept and strategy to design and implementation, Osmaxin expert team ensures your vision comes to life with precision and creativity.
            </p>

            <h4 className="text-lg lg:text-xl xl:text-2xl font-semibold text-white">
            Whatever your web design or application goal, Osmaxin is your trusted partner for success.
            </h4>

            <div className="w-full flex items-center flex-wrap lg:pt-5 gap-4">
              <FeaturedBtn title="Branding and Visual Identity" />
              <FeaturedBtn title="Mobile app Design" />
              <FeaturedBtn title="Product design" />
              <FeaturedBtn title="Website prototype" />
              <FeaturedBtn title="Prototyping and Wireframes" />
            </div>
          </div>

          <Image
            src="/images/schedule-image.png"
            alt="Osmaxin web development"
            width={600}
            height={600}
            className="lg:w-[650px] lg:mt-12 xl:mt-28 lg:h-[350px] mt-12"
          />
        </div>
      </Container>
    </div>
  );
};

export default DesignServiceSection;
