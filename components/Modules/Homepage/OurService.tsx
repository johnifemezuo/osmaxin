import { Container } from "@/components/Container/Container";
import SubTitle from "@/components/Elements/SubTitle";
import { ButtonOutlinePrimary } from "@/components/UI/Button/ButtonOutlinePrimary";
import ServiceCard from "@/components/UI/Cards/ServicesCard";

const OurService = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32">
      <Container>
        <div className="px-5 xl:px-0">
          <div className=" space-y-5 xl:space-y-0 xl:flex justify-between ">
            <div className="space-y-4 text-left">
              <SubTitle>Our service</SubTitle>

              <h1 className="text-3xl font-bold  text-zinc-800 lg:text-4xl">
                Excellent digital services that help businesses succeed.
              </h1>
            </div>

            <p className="text-zinc-800 lg:text-lg xl:max-w-xl">
              We are the best web development company in Nigeria. We believe
              that the highest standard makes the happiest customers, which is
              why we work hard to perfect our services. Our state-of-the-art
              digital approach allows you to achieve outstanding results for
              your business.
            </p>
          </div>

          <div className="mt-12">
            <div className="overflow-hidden w-full">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 w-full  py-12">
              <ServiceCard title="Mobile & Web Application Development" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />

              <ServiceCard title="Web Design" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />

              <ServiceCard title="Branding Services" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />
            </div>
            </div>


            <div className="flex items-center ">
                <ButtonOutlinePrimary text="See all Services" link="/" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurService;
