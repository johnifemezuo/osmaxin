import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import { ButtonOutlinePrimary } from "@/components/UI/Button/ButtonOutlinePrimary";
import Image from "next/image";

const OfferingCard = ({ image, title }: { image?: string; title?: string }) => {
  return (
    <div className="flex border flex-col  items-center space-y-4 relative  bg-[#F0F2F9] rounded-xl py-4 px-6">
      <Image
        src={image || "/images/logo.png"}
        alt=""
        width={50}
        height={50}
        className=" w-[50px] h-[50px]"
      />
      <h4 className="text-base font-medium text-center text-zinc-700">
        {title}
      </h4>
    </div>
  );
};

const DeveloperHubSection = () => {
  return (
    <div className="py-28 bg-[#DBE0E9] w-full">
      <Container>
        <div className="w-full relative h-[900px] overflow-hidden">
          <Image
            src="/images/com-layout.png"
            alt=""
            width={1500}
            height={1500}
            className="absolute z-0 inset-0   w-full"
          />

          <div className="relative z-30">
            <div>
              <SubTitle>Testimonials</SubTitle>
              <div className="mt-4 lg:flex items-center justify-between w-full">
                <PageTitle className=" text-zinc-700">
                  We teach and build community of Engineers
                </PageTitle>
              </div>
            </div>

            <div className="mt-20">
              <p className="text-lg lg:text-lg max-w-3xl text-zinc-600 pl-9 ">
                Developer Hub empowers aspiring engineers through expert-led
                mentorship and hands-on learning. Join a community where
                creativity meets technology, and transform your passion into a
                thriving career.
              </p>

              <div className="bg-primary pl-8 text-base lg:text-xl pr-4 inline-block py-4 rounded-tr-full rounded-br-full text-white  mt-4">
                Key Offering
              </div>

              <div className="grid lg:grid-cols-2 p-8 gap-6 lg:max-w-[700px]">
                <OfferingCard
                  title="Live mentorship from industry experts."
                  image="/images/live-mem.png"
                />
                <OfferingCard
                  title="Hands-on projects with certification to showcase your skills."
                  image="/images/certi.png"
                />
                <OfferingCard
                  title="Hands-on projects and practical learning."
                  image="/images/practi.png"
                />
                <OfferingCard
                  title="Job placement assistance upon completion."
                  image="/images/job-plac.png"
                />
              </div>

              <div className="px-8">
                <ButtonOutlinePrimary text="GO TO DEV HUB" link="/dev-hub" />
              </div>
            </div>


          <Image
            src="/images/dev-learn.png"
            alt=""
            width={600}
            height={600}
            className=" absolute z-0 bottom-0 right-0 w-[760px] -mb-8"
          />

          <div className="absolute top-9 right-9 z-20 max-w-sm">
            <h2 className="lg:text-xl text-zinc-700">¬John Ifem</h2>
            <p className="text-sm italic font-light text-zinc-600">“ Joining Developer Hub was the best decision I made. The mentorship and projects gave me real-world experience, and now I’m confidently working as a software engineer! “</p>
          </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default DeveloperHubSection;
