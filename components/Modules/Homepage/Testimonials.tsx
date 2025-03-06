import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import TestimonialCard from "@/components/UI/Cards/TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect } from "react";
import { useSelectedSnapDisplay } from "@/base/hooks/useSelectedSnapDisplay";
import { useCarouselFunctions } from "@/base/hooks/useCarouselfunctions";
import { Button } from "@/components/UI/Button/Button";

interface ITestimonial {
  name: string;
  title: string;
  testimonial: string;
  id: string;
  clientProject: string;
  profile: {
    url: string;
  };
}

const Testimonials = ({ data }: { data: any }) => {
  const testimonials = data.testimonials;
  
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    emblaRef,
    toggleAutoplay
  } = useCarouselFunctions();

  useEffect(() => {
    toggleAutoplay();
  }, [toggleAutoplay]);

  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000 py-20 lg:py-32">
      <Container>
        <div className="w-full overflow-hidden">
          <div className="px-5 xl:px-0 overflow-hidden">
            <SubTitle>Testimonials</SubTitle>
            <div className="mt-4 lg:flex items-center justify-between w-full space-y-4 xl:space-y-0">
              <PageTitle>What our clients thinks of us</PageTitle>

              <div className="flex space-x-4">
                <button disabled={prevBtnDisabled} onClick={onPrevButtonClick} className={`${prevBtnDisabled ? 'opacity-50 cursor-not-allowed' : ' border-white bg-white text-black'} transition-all duration-300  w-12 h-12 grid place-content-center rounded-full border`	}>
                  <ArrowRight className=" rotate-180" />
                </button>

                <button disabled={nextBtnDisabled} onClick={onNextButtonClick} className={`${nextBtnDisabled ? 'opacity-50 cursor-not-allowed' : ' border-white bg-white text-black'} transition-all duration-300  w-12 h-12 grid place-content-center rounded-full border`	}>
                  <ArrowRight  />
                </button>
              </div>
            </div>
          </div>

          <div ref={emblaRef} className=" overflow-hidden mt-12 lg:mt-20">
            <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
              {testimonials.map((testimonial: ITestimonial, index: number) => (
               <div
               className="transform translate-3d-0 flex-[0_0_40%] lg:min-w-0 min-w-full lg:pl-16 pl-16"
               key={index}
             >
                <TestimonialCard
                  title={testimonial.title}
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  image={testimonial.profile?.url}
                />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
