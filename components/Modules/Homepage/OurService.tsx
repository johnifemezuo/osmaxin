import { Container } from "@/components/Container/Container";
import ServiceCard from "@/components/UI/Cards/ServicesCard";

const OurService = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32">
      <Container>
        <div>
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-4 text-left">
              <div className="text-secondary text-md font-semibold grid">
                <h5>
                OUR SERVICES
                </h5>
                <div className="bg-secondary h-1 w-12 p-"></div>
              </div>
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
            <div className="flex space-x-8 w-[2000px] overflow-x-auto py-7">
              <ServiceCard title="Mobile & Web Application Development" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />

              <ServiceCard title="Web Design" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />

              <ServiceCard title="Branding Services" description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers," imageSrc="/images/mobile.png" />
            </div>
            </div>


            <div className="flex items-center  mt-20">
                <button className="bg-transparent border text-primary py-2 px-4 rounded-full h-12 ">
                Sell all services
                </button>
                <div className="bg-primary rounded-full w-12 h-12 grid place-content-center">
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                    color="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.33335 18.9583L6.33335 16.0417L23.8333 16.0417L15.8125 8.02085L17.8833 5.95001L29.4333 17.5L17.8833 29.05L15.8125 26.9792L23.8333 18.9583L6.33335 18.9583Z"
                      fill="black"
                    />
                  </svg>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurService;
