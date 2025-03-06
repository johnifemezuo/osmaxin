import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import FeatureIcon from "@/components/Icons/FeatureIcon";

export const ClientType = ({ title }: { title: string }) => {
  return (
    <div className="inline-flex  items-center space-x-3 lg:space-x-3 bg-[#1F2D60]  rounded-full py-1.5 lg:py-3 pl-1.5 lg:pl-3 lg:pr-6 pr-4">
      <FeatureIcon />
      <p className="text-white font-medium lg:text-base text-sm">{title}</p>
    </div>
  );
};

const OurClientTypeSection = () => {
  return (
    <div className="bg-[#0E1846] px-5 pb-28 lg:pb-28 xl:pb-44">
      <Container>
        <div className="md:flex items-center justify-between gap-20">
          <ScrollReveal className="w-full" hidden={{ y: 100 }} visible={{ y: 0 }}>
            <div className="max-w-2xl space-y-5 lg:space-y-12">
              <h1 className="text-2xl lg:text-xl xl:text-5xl font-bold max-w-xl">
                We are fueled by our clients’{" "}
                <span className="text-secondary"> success.</span>
              </h1>

              <p className="lg:text-lg">
                The beautiful website examples you see below are just a small
                sample of the websites we’ve created. We don’t specialize in any
                industry in particular, because frankly, that’d be boring! We do
                prefer to work with growth-driven companies—who have goals to
                crush!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="w-full" delay={0.5} hidden={{ y: 100 }} visible={{ y: 0 }}>

          <div className=" pt-12 lg:pt-0 ">
            <h3 className="text-lg xl:text-xl uppercase text-white">
              Industriew We`ve Served
            </h3>
            <div className="w-full flex lg:flex-wrap items-center flex-wrap lg:pt-5 gap-4 mt-8 lg:mt-0">
              <ClientType title="Finance" />
              <ClientType title="Hospitality" />
              <ClientType title="Oil & Gas" />
              <ClientType title="Healthcare" />
              <ClientType title="Logistics" />
              <ClientType title="Technology" />
              <ClientType title="E-commerce " />
              <ClientType title="Legal" />
              <ClientType title="Small Businesses" />
            </div>
          </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};

export default OurClientTypeSection;
