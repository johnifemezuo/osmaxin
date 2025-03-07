import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import { ButtonOutlinePrimary } from "@/components/UI/Button/ButtonOutlinePrimary";
import Image from "next/image";

const BookSection = () => {
  return (
    <div className="py-32 bg-white w-full px-4 xl:px-0">
      <Container>
        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row items-center justify-between ">

          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} delay={0}>
          <div>
            <PageTitle className="text-zinc-700 mb-8 text-center lg:text-left">
              Tap into the potential of strategic  website design.
            </PageTitle>

            <div className="flex flex-col folder-shap bg-[#DBE0E9] rounded-lg relative max-w-[500px]  justify-between px-8 py-10 ">
              <h4 className="flex items-center lg:text-xl font-medium absolute top-6 right-6 z-50">
                <span className="text-zinc-500">Email:</span>
                <span className="text-[#F1606F]">hello@osmaxin.com</span>
              </h4>

              <div className="w-14 h-14 mb-5 bg-[#ecedf0] rounded-full  items-center justify-center grid place-content-center ">
                <Image
                  src="/images/pros-1.png"
                  width={40}
                  height={40}
                  alt="Osmaxin"
                />
              </div>

              <div className="space-y-4">
                <p className="text-zinc-500 uppercase text-sm font-medium">
                  Let &apos;s talk about your goals
                </p>
                <h1 className="text-2xl font-bold text-zinc-700 mb-2 ">
                  Schedule time to talk
                </h1>

                <p className="text-zinc-700">
                  Speak to an expert and hear for yourself how our digital
                  services can help your business grow and succeed. Ready? Grab
                  a block of time.
                </p>

                <ButtonOutlinePrimary link="/book" text="Book an Intro call" />
              </div>
            </div>
          </div>
          </ScrollReveal>


          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} delay={0.5}>
          <Image
            src="/images/schedule-image.png"
            width={560}
            height={560}
            alt="Osmaxin"
            className="w-full md:w-[600px]"
          />
          </ScrollReveal>

        </div>
      </Container>
    </div>
  );
};

export default BookSection;
