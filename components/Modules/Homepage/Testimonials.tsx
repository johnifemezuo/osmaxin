import { Container } from "@/components/Container/Container";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import TestimonialCard from "@/components/UI/Cards/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000 py-20 lg:py-32">
      <Container>
        <div>
          <SubTitle>Testimonials</SubTitle>
          <div className="mt-4 lg:flex items-center justify-between w-full">
            <h1 className="text-xl lg:text-3xl font-semibold text-white">
              What our clients thinks of us
            </h1>

            <div className="flex space-x-4">
              <span className="w-12 h-12 border-white grid place-content-center rounded-full border">
                <ArrowRight className="text-white rotate-180" />
              </span>
              <span className="w-12 h-12 bg-white border-white grid place-content-center rounded-full border">
                <ArrowRight className="text-primary " />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:flex items-center space-x-16">
          <TestimonialCard
            title="CEO Evon"
            name="John Deo"
            testimonial="Osmaxin offers a high caliber of resources skilled in Microsoft
                Azure .NET, mobile and Quality Assurance. They became our true
                business partners over the past three years of our cooperation."
            image="/images/testimonial-1.png"
          />
          <TestimonialCard
            title="CEO Evon"
            name="John Deo"
            testimonial="Osmaxin offers a high caliber of resources skilled in Microsoft
                Azure .NET, mobile and Quality Assurance. They became our true
                business partners over the past three years of our cooperation."
            image="/images/testimonial-1.png"
          />
          <TestimonialCard
            title="CEO Evon"
            name="John Deo"
            testimonial="Osmaxin offers a high caliber of resources skilled in Microsoft
                Azure .NET, mobile and Quality Assurance. They became our true
                business partners over the past three years of our cooperation."
            image="/images/testimonial-1.png"
          />
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
