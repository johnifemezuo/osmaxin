import { Container } from "@/components/Container/Container";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import ServiceCard from "@/components/UI/Cards/ServicesCard";

const OurService = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32">
      <Container>
        <div>
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-4 text-left">
              <SubTitle>Our service</SubTitle>

              <h1 className="text-3xl font-bold  text-zinc-800 lg:text-4xl">
                Excellent digital services that help businesses succeed.
              </h1>
            </div>

            <p className="text-zinc-800 lg:text-lg">
              We are the best web development company in Nigeria. We believe
              that the highest standard makes the happiest customers, which is
              why we work hard to perfect our services. Our state-of-the-art
              digital approach allows you to achieve outstanding results for
              your business.
            </p>
          </div>

          <div className="mt-12">
            <div className="overflow-hidden w-full">
            <div className="flex space-x-8 w-[2000px] overflow-x-auto py-12">
              <ServiceCard title="Mobile & Web Application Development" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />

              <ServiceCard title="Web Design" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />

              <ServiceCard title="Branding Services" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />
            </div>
            </div>


            <div className="flex items-center  mt-20">
                <button className="bg-transparent font-medium lg:text-lg  border-primary text-primary border-2 py-2 px-4 rounded-full h-12 ">
                Sell all services
                </button>
                <div className="bg-primary  place-content-center rounded-full w-12 h-12 grid place- text-white content-center">
                  <ArrowRight />
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurService;
