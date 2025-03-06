import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import FeaturedBtn from "@/components/UI/FeaturedBtn";
import Image from "next/image";

const SEODevSection = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32 px-5 xl:px-0">
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
      <Container>
        <div className=" lg:flex lg:space-x-12 justify-between lg:py-12 lg:px-12 bg-white rounded-2xl px-5 py-12 lg:folder-shape">
          <div className="xl:space-y-6 lg:pt-6 space-y-4">
            <SubTitle>SEO OPTIMIZATION</SubTitle>
            <PageTitle className="text-zinc-700 lg">
            SEO Optimization for Maximum Online Visibility
            </PageTitle>

            <p className="text-zinc-500">
            We create high-performing, user-friendly mobile applications tailored for both iOS and Android platforms. From initial concept to deployment, Osmaxin ensures your app is built to deliver exceptional functionality, scalability, and user engagement.
            </p>

            <h4 className="text-lg lg:text-xl xl:text-2xl font-medium text-zinc-700">
            Whether you are looking to grow your audience or dominate your niche, Osmaxin has the expertise to make it happen.
            </h4>

            <div className="w-full flex items-center flex-wrap lg:pt-5 gap-4">
              <FeaturedBtn title="Keyword Research and Analysis" />
              <FeaturedBtn title="On-Page SEO Optimization" />
              <FeaturedBtn title="Technical SEO Enhancements" />
              <FeaturedBtn title="Content Strategy & Optimization" />
              <FeaturedBtn title="Link Building & Backlink Management" />
            </div>
          </div>

          <Image
            src="/images/seo.png"
            alt="Osmaxin web development"
            width={600}
            height={600}
            className="lg:w-[500px] lg:mt-12 xl:mt-32 lg:h-[400px] mt-12"
            />
            </div>
      </Container>
      </ScrollReveal>
    </div>
  );
};

export default SEODevSection;
