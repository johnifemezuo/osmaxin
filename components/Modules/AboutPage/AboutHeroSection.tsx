import { Container } from "@/components/Container/Container";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <div className="bg-[#0E1846] px-5  lg:h-fit ">
      <Container>
        <div className="h-full relative py-36 lg:pt-36 ">
          <h4 className="uppercase lg:text-lg text-white pb-3">about us</h4>
          <div className="flex border-y lg:space-x-6 py-6 lg:py-9 border-white relative  lg:h-auto flex-col lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
            <div className="flex flex-col  z-30 justify-center h-auto   w-full space-y-8">
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-8xl capitalize text-white ">
                A result-driven, fun-loving digital agency
              </h1>

              <div className="flex items-center ">
                <ButtonOutline text="Contact us" link="/contact-us" />
              </div>
            </div>

            <div className="lg:w-[450px] overflow-hidden relative mt-12  ">
              <Image
                src="/images/spores.png"
                alt="osmaxin video"
                width={600}
                height={500}
                className="w-[300px] mx-auto lg:w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="py-5 lg:flex items-center lg:space-x-5 lg:space-y-0 space-y-4">
            <button className="bg-[#3B4369] rounded-xl py-5 lg:py-6 px-6 w-full">
              <div className="items-center flex space-x-5">
                <h3 className="text-white text-4xl lg:text-4xl xl:text-6xl font-medium">
                  10+
                </h3>
                <p className="text-white uppercase lg:text-2xl xl:text-2xl text-left">
                  Product <br /> designers
                </p>
              </div>
            </button>
            <button className="bg-[#3B4369] rounded-xl py-5 lg:py-6 px-6 w-full">
              <div className="items-center flex space-x-5">
                <h3 className="text-white text-4xl lg:text-4xl xl:text-6xl font-medium">
                  20+
                </h3>
                <p className="text-white uppercase lg:text-2xl xl:text-2xl text-left">
                  Product <br /> Developers
                </p>
              </div>
            </button>
            <button className="bg-[#3B4369] rounded-xl py-5 lg:py-6 px-6 w-full">
              <div className="items-center flex space-x-5">
                <h3 className="text-white text-4xl lg:text-4xl xl:text-6xl font-medium">
                  10+
                </h3>
                <p className="text-white uppercase lg:text-2xl xl:text-2xl text-left">
                  Product <br /> Managers
                </p>
              </div>
            </button>
            <button className="bg-white rounded-xl py-5 lg:py-6 px-6 w-full lg:w-[200px]">
              <svg
                width="76"
                height="76"
                className="text-center w-16 mx-auto"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8551 48.7381L20.5778 44.7434L44.5461 31.0799L27.2982 26.3568L28.5176 21.9038L53.3546 28.7049L46.5534 53.5419L42.1003 52.3225L46.8233 35.0746L22.8551 48.7381Z"
                  fill="#1D33A2"
                />
              </svg>
            </button>
          </div>

          
        </div>
      </Container>
    </div>
  );
};

export default AboutHeroSection;
