import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import SubTitle from "@/components/Elements/SubTitle";
import TeamCard from "@/components/UI/Cards/TeamCard";

const MeetOurTeam = () => {
  return (
    <div className="bg-gradient-to-b from-[#0E1846] px-5 xl:px-0 overflow-hidden relative to-[#00008B] to-purple-5000 py-20">
      <Container>
        <div className="space-y-9 grid lg:mt-20 pt-28 border-t border-white/30 ">
          <SubTitle>TEAM</SubTitle>
          <PageTitle className="text-white lg">Meet our team</PageTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:grid-cols-4 lg:gap-4 xl:gap-8">
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

export default MeetOurTeam;
