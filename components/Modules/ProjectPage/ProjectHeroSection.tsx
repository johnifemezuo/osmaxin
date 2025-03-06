import Reveal from "@/components/Animations/Reveal";
import { Container } from "@/components/Container/Container";
import Image from "next/image";

const ProjectHeroSection = () => {
  return (
    <div className="bg-[#0E1846] px-5  lg:h-fit ">
      <Container>
        <div className="h-full relative py-36 lg:pt-36 ">
          <h4 className="uppercase lg:text-lg text-white pb-3">about us</h4>
          <div className="flex justify-between border-y lg:space-x-6 py-6 lg:py-20 border-white relative  lg:h-auto flex-col lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
            <Reveal >

            <div className="flex flex-col lg:max-w-3xl  z-30 justify-center h-auto   w-full relative space-y-8">
              <Image src="/images/cube.png" alt="" width={200} height={200} className="absolute top-0 right-0 z-0" />
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-8xl capitalize text-white relative z-10 ">
                OUR <br /> BEST WORKS
              </h1>

              <div className="py-5 sm:flex items-center sm:space-x-3 lg:space-x-5 lg:space-y-0 space-y-4">
                <button className="bg-[#3B4369] max-w-md rounded-xl py-5 lg:py-6 px-6 w-full">
                  <div className="items-center flex space-x-5">
                    <h3 className="text-white text-4xl lg:text-4xl xl:text-6xl font-medium">
                      500+
                    </h3>
                    <p className="text-white uppercase lg:text-2xl xl:text-2xl text-left">
                      Product <br /> completed
                    </p>
                  </div>
                </button>

                <button className="bg-white rounded-xl md:py-5 lg:py-6 px-6 w-full lg:w-[200px]">
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
            </Reveal>

            <Reveal delay={0.5}>
            <div className="lg:w-[450px] overflow-hidden relative rounded-xl mt-8 lg:mt-0 h-[220px] lg:h-[400px]">
              <div className="absolute inset-0 bg-black/40 z-40 w-full h-full"></div>
              <Image
                src="/images/vid.png"
                alt="osmaxin video"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />

              <button className="w-16 absolute inset-0 mx-auto mt-20 md:mt-36 z-50 h-16 rounded-full grid place-content-center bg-white">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7612 11.6911C27.3616 12.0104 27.8638 12.487 28.214 13.0699C28.5642 13.6527 28.7492 14.3199 28.7492 14.9999C28.7492 15.6799 28.5642 16.347 28.214 16.9299C27.8638 17.5128 27.3616 17.9894 26.7612 18.3086L10.7463 27.0174C8.1675 28.4211 5 26.5961 5 23.7099V6.29115C5 3.40365 8.1675 1.5799 10.7463 2.98115L26.7612 11.6911Z"
                    fill="#1D33A2"
                  />
                </svg>
              </button>
            </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectHeroSection;
