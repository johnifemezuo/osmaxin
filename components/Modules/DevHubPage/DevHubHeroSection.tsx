import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import Image from "next/image";

const DevHubHeroSection = () => {
  return (
    <div className="bg-[#0E1846] py-36 lg:t-36 px-5 lg:px-0 relative">
      {/* <div className="rounded-xl absolute  bg-[#909bd6] max-w-[1400px] mx-auto h-screen mt-20 z-0"></div> */}
      <Container className="">
        <div className="h-full overflow-hidden lg:flex lg:space-x-12 relative bg-[#1C2B72] rounded-xl p-6 lg:p-12">
          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
            <div className="lg:w-[400px] xl:w-full">
              <h4 className="uppercase lg:text-lg text-white pb-3">
                developer hub
              </h4>
              <div className="flex justify-between border-t lg:space-x-6 py-6 lg:py-12 border-white relative  lg:h-auto flex-col lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
                <div className="flex flex-col lg:max-w-3xl  z-30 justify-center h-auto   w-full relative space-y-8">
                  <h1 className="text-3xl font-bold lg:text-4xl xl:text-6xl capitalize text-white relative z-10 ">
                    Learn to Build the Future with Osmaxin Dev Hub
                  </h1>

                  <p>
                    Empowering aspiring developers with the skills, knowledge,
                    and guidance needed to become world-class professionals
                  </p>

                  <ButtonOutline link="" text="REGISTER NOW" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} hidden={{ x: 100 }} visible={{ x: 0 }}>
            <Image
              src="/images/devs.png"
              alt="Osmaxin Dev"
              width={500}
              height={500}
              className="w-[500px] lg:w-[600px] -mb-20 relative z-10 hidden lg:block"
            />
          </ScrollReveal>

          <svg
            className="absolute bottom-0 right-0 z-0"
            width="500"
            height="581"
            viewBox="0 0 500 581"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="344"
              cy="344.693"
              r="344"
              fill="white"
              fillOpacity="0.1"
            />
            <circle
              cx="344"
              cy="344.693"
              r="287"
              fill="white"
              fillOpacity="0.08"
            />
          </svg>
        </div>
      </Container>
    </div>
  );
};

export default DevHubHeroSection;
