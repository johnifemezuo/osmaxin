import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import ProcessCard from "@/components/UI/Cards/ProcessCard";
import Image from "next/image";
import { processData } from "./ProcessData";
import { useEffect } from "react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useState } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/Carousel/EmblaCarouselButtons";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { useCarouselFunctions } from "@/base/hooks/useCarouselfunctions";
const OurProcess = () => {
  const options: EmblaOptionsType = {
    loop: true,
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const {
    toggleAutoplay
  } = useCarouselFunctions();

  useEffect(() => {
    toggleAutoplay();
  }, [toggleAutoplay]);
  
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32">
      <Container>
        <div>
          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
            <div className="mt-4 lg:flex items-center justify-between w-full px-5 space-y-5 xl:space-y-0 xl:px-0">
              <div className="space-y-5">
                <SubTitle>our process</SubTitle>
                <PageTitle className="text-zinc-700">
                  We begin projects following due process
                </PageTitle>
              </div>

              <div className="flex space-x-4">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="overflow-hidden w-full mt-8 lg:mt-12">
            <div className="flex space-x-8   py-12 px-5 xl:px-0">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
                  {processData.map((item, index) => (
                    <div
                      className="transform translate-3d-0 flex-[0_0_40%] lg:min-w-0 min-w-[300px] pl-4"
                      key={index}

                    >
                      <ProcessCard
                        title={item.title}
                        description={item.description}
                        iconImg={item.iconImg}
                        step={item.step}
                        stepColor={item.stepColor}
                        projectTimeline={item.projectTimeline}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="flex flex-col bg-primary rounded-lg max-w-[500px]  justify-between px-8 py-10 relative">
                <div className="w-14 h-14 mb-5 bg-[#DADCEB] rounded-full  items-center justify-center grid place-content-center ">
                  <Image
                    src="/images/pros-10.png"
                    width={40}
                    height={40}
                    alt="Osmaxin"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-[#DA21F1] text-sm font-medium">
                    Grownd zero
                  </p>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Start your journey
                  </h1>

                  <p className="text-white">
                    To get started, lets book a call and discuss your
                    requirements
                  </p>

                  <ButtonOutline link="" text="Book an Intro call" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProcess;
