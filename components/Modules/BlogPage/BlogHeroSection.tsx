"use client";
import { Appear } from "@/components/Animations/Appear";
import { Container } from "@/components/Container/Container";

export const BlogHeroSection = () => {
  return (
    <div className="bg-[#0E1846] px-5  lg:h-fit pb-8 lg:pb-12">
      <Container>
        <div className="h-full relative pt-36 pb-3 lg:pb-12 lg:pt-36 ">
          <h4 className="uppercase lg:text-lg text-white pb-3">about us</h4>
          <div className="flex border-y lg:space-x-6 py-6 lg:py-9 border-white relative  lg:h-auto flex-col lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
            <Appear>
              <div className="flex flex-col  z-30 justify-center h-auto   w-full space-y-8 lg:py-12">
                <h1 className="text-4xl max-w-3xl font-bold lg:text-5xl xl:text-8xl capitalize text-white ">
                  Digest content from us
                </h1>
              </div>
            </Appear>
          </div>
        </div>
      </Container>
    </div>
  );
};
