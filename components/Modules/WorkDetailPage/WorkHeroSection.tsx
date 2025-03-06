import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import RightIcon from "@/components/Icons/RightIcon";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import Image from "next/image";
import Link from "next/link";

const WorkHeroSection = ({
  title,
  description,
  image,
  livesite,
  slug,
}: {
  title: string;
  description: string;
  image: string;
  livesite: string;
  slug: string;
}) => {
  return (
    <div className="bg-[#0E1846] px-5 lg:pt-20 lg:h-fit ">
      <Container>
        <div className="h-full relative py-20  ">
          <div className="flex space-x-3 items-center">
            <Link href={"/works"} className="uppercase text-sm  text-white/50 ">
              Works
            </Link>
            <RightIcon className="text-white" />
            <h3 className="uppercase text-sm text-white ">{slug}</h3>
          </div>

          <div className="flex lg:space-x-6 py-6 lg:py-9 border-white relative  lg:h-auto flex-col justify-between lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
            <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
              <div className="flex flex-col  z-30 justify-center h-auto lg:w-[600px]  w-full space-y-8">
                <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl capitalize text-white ">
                  {title}
                </h1>

                <p className="text-white text-lg lg:text-xl">{description}</p>

                <div className="flex items-center ">
                  <ButtonOutline text="Visit Site" link={livesite} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5} hidden={{ y: 100 }} visible={{ y: 0 }}>
              <div className="lg:w-[450px] rounded-xl bg-white overflow-hidden relative mt-12  xl:w-[700px]">
                <Image
                  src={image}
                alt="osmaxin video"
                width={800}
                height={700}
                className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkHeroSection;
