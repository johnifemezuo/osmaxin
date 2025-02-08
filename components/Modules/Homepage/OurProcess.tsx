import { Container } from "@/components/Container/Container";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import ProcessCard from "@/components/UI/Cards/ProcessCard";
import Image from "next/image";

const OurProcess = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32">
      <Container>
        <div>
          <SubTitle>our process</SubTitle>

          <div className="mt-4 lg:flex items-center justify-between w-full">
            <h1 className="text-xl lg:text-3xl font-semibold text-zinc-700">
              We begin projects following due process
            </h1>

            <div className="flex space-x-4">
              <span className="w-12 h-12 border-zinc-700 grid place-content-center rounded-full border">
                <ArrowRight className="text-zinc-700 rotate-180" />
              </span>
              <span className="w-12 h-12 border-zinc-700 grid place-content-center rounded-full border">
                <ArrowRight className="text-zinc-700 " />
              </span>
            </div>
          </div>

          <div className="overflow-hidden w-full mt-8 lg:mt-12">
            <div className="flex space-x-8 w-[6000px] overflow-x-scroll py-12">
               <ProcessCard
                title="Intro Call"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-1.png"
                step="1"
                stepColor="text-[#F58B13]"
                projectTimeline="2 Weeks"
              />
              <ProcessCard
                title="Discovery"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-2.png"
                step="2"
                stepColor="text-[#C820F5]"
                projectTimeline="3-10 days"
              />
              <ProcessCard
                title="Concept"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-3.png"
                step="3"
                stepColor="text-[#FA5E20]"
                projectTimeline="3-10 days"
              />

              <ProcessCard
                title="Homepage Signoff"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-4.png"
                step="3"
                stepColor="text-[#F58B13]"
                projectTimeline="3-10 days"
              />
              <ProcessCard
                title="Full Design"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-5.png"
                step="3"
                stepColor="text-[#0C3CFE]"
                projectTimeline="3-10 days"
              />
              <ProcessCard
                title="Refine"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-6.png"
                step="3"
                stepColor="text-[#B31CD4]"
                projectTimeline="3-10 days"
              />
              <ProcessCard
                title="Develop"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-7.png"
                step="3"
                stepColor="text-[#FA9F34]"
                projectTimeline="3-10 days"
              />
              <ProcessCard
                title="Optimize"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-8.png"
                step="3"
                stepColor="text-[#06BAFC]"
                projectTimeline="3-10 days"
              />
              <ProcessCard
                title="Launch"
                description="We are the best web development company in New York. We believe that the highest standard makes the happiest customers,"
                iconImg="/images/pros-9.png"
                step="3"
                stepColor="text-[#FB5221]"
                projectTimeline="3-10 days"
              /> 

              <div className="flex flex-col bg-primary rounded-lg max-w-[500px]  justify-between px-8 py-10 relative">
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProcess;
