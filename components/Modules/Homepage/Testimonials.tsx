import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import TestimonialCard from "@/components/UI/Cards/TestimonialCard";

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

const Testimonials = ({data}: {data: any}) => {
  const testimonials = data.testimonials;

  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000 py-20 lg:py-32">
      <Container>
        <div className="w-full overflow-hidden">
        <div className="px-5 xl:px-0 overflow-hidden">
          <SubTitle>Testimonials</SubTitle>
          <div className="mt-4 lg:flex items-center justify-between w-full space-y-4 xl:space-y-0">
            <PageTitle>
              What our clients thinks of us
            </PageTitle>

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

        <div className="mt-12 w-[1600px] overflow-scroll px-12  flex items-center space-x-16">
         
         {testimonials.map((testimonial: ITestimonial, index: number) => (
          <TestimonialCard
            key={index}
            title={testimonial.title}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            image={testimonial.profile?.url}
          />
         ))}
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
