import { Container } from "@/components/Container/Container";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import { ButtonWithIcon } from "@/components/UI/Button/ButtonWithIcon";
import RateUi from "@/components/UI/RateUi";
import Image from "next/image";

const ServicePageHeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] px-5 to-[#00008B] to-purple-5000 lg:h-auto h-[240vh] ">
      <Container>
        <div className="h-[190vh] lg:h-[150vh] xl:h-[170vh] 2xl:h-[185vh] relative py-36 lg:pt-36 ">
          <h4 className="uppercase lg:text-lg text-white pb-3">our servces</h4>
          <div className="flex border-y lg:space-x-6 py-6 lg:py-12 border-white relative h-[100vh] lg:h-auto flex-col lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
            <div className="flex flex-col  z-30 justify-center h-auto   w-full space-y-8">
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-7xl text-white ">
                Partner with a{" "}
                <span className="text-secondary">Top-1% Team</span> to
                Accelerate Your Project Success—Delivering{" "}
                <span className="text-secondary">
                  2x Faster Results Without the Hassle!
                </span>
              </h1>

              <div className="flex-wrap  gap-4 hidden lg:flex">
                <ButtonWithIcon link="/" text="Website developement" />
                <ButtonWithIcon link="/" text="MOBILE APP DEVELOPEMENT" />
                <ButtonWithIcon link="/" text="UI/UX DESIGN" />
                <ButtonWithIcon link="/" text="seo optimization" />
                <ButtonWithIcon link="/" text="DESKTOP APP DEVELOPEMENT" />
                <ButtonWithIcon link="/" text="WEB APPLICATION" />
              </div>
            </div>

            <div className="lg:w-[450px] overflow-hidden relative rounded-xl mt-8 lg:mt-0 lg:h-[400px]">
              <div className="absolute inset-0 bg-black/40 z-40 w-full h-full"></div>
              <Image
                src="/images/vid.png"
                alt="osmaxin video"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />

              <button className="w-16 absolute inset-0 mx-auto mt-36 z-50 h-16 rounded-full grid place-content-center bg-white">
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
          </div>

          <div className="xl:flex space-y-8 items-center py-6 lg:py-12 justify-between xl:space-y-0">
            <div className="flex items-center ">
              <ButtonOutline text="Contact us" link="/contact-us" />
            </div>

            <div>
              <RateUi />
            </div>
          </div>

          <div className="flex rounded-xl lg:rounded-hidden lg:folder-shape bg-white/20 relative z-30 flex-col pb-8 pt-12 space-y-4 lg:pt-12 mt-36 xl:mt-52  xl:p-20 px-5 ">
            <h1 className="text-white text-lg lg:text-3xl xl:text-4xl xl:mt-20">
              At Osmaxin, we focus on building high quality, efficient and well
              documented applications that ranges from; static and dynamic
              websites, mobile phones applications. We also offer other services
              such as Linux server administration, wordpress management. Over
              the past 10 years, we’ve perfected our Design & Development game
              and are eager to help passionate Founders perfect theirs. Success
              is a team play, right? Let’s aim for the top together!
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePageHeroSection;
