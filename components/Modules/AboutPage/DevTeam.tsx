import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import { ButtonOutlinePrimary } from "@/components/UI/Button/ButtonOutlinePrimary";
import TeamCard from "@/components/UI/Cards/TeamCard";
import Image from "next/image";

const DevTeam = () => {
  return (
    <div className=" bg-[#DBE0E9] py-20 lg:py-32 px-5 xl:px-0">
      <Container>
        <div className="space-y-8 lg:py-12 lg:px-12 bg-white rounded-2xl px-5 py-12 lg:folder-shape">
          <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-baseline w-full justify-between">
            <div className="xl:space-y-6 lg:pt-6 space-y-4 max-w-5xl">
              <Image
                src="/images/logoicon.png"
                width={40}
                height={40}
                alt="Osmaxin"
                className="mb-4"
              />
              <PageTitle className="text-zinc-700 lg">
                Products of Osmaxin
              </PageTitle>

              <p className="text-zinc-500">
                @Osmaxin we have trained and grouped people from newbie to
                senior devs, Helping up to about 20 plus developers in becoming
                engineers and landing their first job
              </p>
            </div>

            <ButtonOutlinePrimary text="JOIN US" link="" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 ">
            <TeamCard
              image="/images/team1.png"
              title="Founder & Software Engineer"
              name="Stanley Okechukwu"
              link="/"
            />
            <TeamCard
              image="/images/team1.png"
              title="Founder & Software Engineer"
              name="Stanley Okechukwu"
              link="/"
            />
            <TeamCard
              image="/images/team1.png"
              title="Founder & Software Engineer"
              name="Stanley Okechukwu"
              link="/"
            />
            <TeamCard
              image="/images/team1.png"
              title="Founder & Software Engineer"
              name="Stanley Okechukwu"
              link="/"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DevTeam;
