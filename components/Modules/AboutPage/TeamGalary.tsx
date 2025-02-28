import { Container } from "@/components/Container/Container";
import Image from "next/image";

const TeamGalary = ({data}: {data: any}) => {
  const team = data.teamPics[0].image;

  return (
    <div>
      <Container>
        <div className="flex items-center space-x-8 py-9 lg:py-12 overflow-hidden">
          {team.map((team: any, index: number) => (
            <Image key={index} src={team.url} alt="Osmain team" width={500} height={400} className="w-full rounded-xl h-[400px] object-cover"/>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TeamGalary;
