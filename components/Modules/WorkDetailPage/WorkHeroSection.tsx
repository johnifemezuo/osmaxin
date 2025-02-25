import { Container } from "@/components/Container/Container";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import Image from "next/image";

const WorkHeroSection = () => {
  return (
    <div className="bg-[#0E1846] px-5  lg:h-fit ">
      <Container>
        <div className="h-full relative py-20 lg:pt-36 ">
          <h4 className="uppercase lg:text-lg text-white pb-3">about us</h4>
          <div className="flex lg:space-x-6 py-6 lg:py-9 border-white relative  lg:h-auto flex-col justify-between lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
            <div className="flex flex-col  z-30 justify-center h-auto lg:w-[600px]  w-full space-y-8">
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl capitalize text-white ">
                RUSHBILL : simplify your bill payment
              </h1>

              <p className="text-white text-lg lg:text-xl">
                A result-driven platform bringing all the tools you need to
                learn a new language efficiently and enthusiastically
              </p>

              <div className="flex items-center ">
                <ButtonOutline text="Visit Site" link="/contact-us" />
              </div>
            </div>

            <div className="lg:w-[450px] rounded-xl bg-white overflow-hidden relative mt-12  xl:w-[700px]">
              <Image
                src="/images/proj-1.png"
                alt="osmaxin video"
                width={800}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkHeroSection;
