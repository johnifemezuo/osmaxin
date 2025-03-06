import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import FeaturedBtn from "@/components/UI/FeaturedBtn";
import Image from "next/image";

const DesktopAppServiceSection = () => {
  return (
    <div className="px-5 lg:px-0 bg-gradient-to-b from-[#000000] overflow-hidden relative to-[#00008B] to-purple-5000 pt-20 pb-44 lg:pt-32 lg:pb-48">
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
      <Container>
        <div className=" px-5 py-12 lg:flex justify-between lg:px-12 bg-[#25255E] lg:space-x-12 rounded-2xl lg:folder-shape xl:py-20">
          <div className="xl:space-y-6 lg:pt-6 space-y-4">
            <SubTitle>DESKTOP APP DEVELOPEMENT</SubTitle>
            <PageTitle className="text-white lg">
            Desktop App Development for Powerful Business Solution
            </PageTitle>

            <p className="text-white/70">
            We deliver robust and efficient desktop applications designed to meet the unique needs of businesses across industries. Osmaxin combines innovative design and cutting-edge technology to create applications that are intuitive, reliable, and tailored to your goals.
            </p>

            <h4 className="text-lg lg:text-xl xl:text-2xl font-semibold text-white">
            Whether you are streamlining internal processes or building customer-facing software, Osmaxin is here to help you succeed.
            </h4>

            <div className="w-full flex items-center flex-wrap lg:pt-5 gap-4">
              <FeaturedBtn title="Custom Desktop App Development" />
              <FeaturedBtn title="Cross-Platform Desktop Solutions" />
              <FeaturedBtn title="Software Application Development" />
              <FeaturedBtn title="App UI/UX Design" />
              <FeaturedBtn title="Performance Optimization" />
            </div>
          </div>

          <Image
            src="/images/desktop-app.png"
            alt="Osmaxin web development"
            width={600}
            height={600}
            className="lg:w-[650px] lg:mt-12 xl:mt-28 lg:h-[350px] mt-12"
          />
        </div>
      </Container>
      </ScrollReveal>
    </div>
  );
};

export default DesktopAppServiceSection;
