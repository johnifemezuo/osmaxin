import { Container } from "@/components/Container/Container";
import Image from "next/image";

const TeamGalary = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center space-x-8 py-9 lg:py-12 overflow-hidden">
            <Image src="/images/teamg-1.png" alt="Osmain team" width={500} height={400} className="w-full rounded-xl h-[400px] object-cover"/>
            <Image src="/images/teamg-2.png" alt="Osmain team" width={500} height={400} className="w-full rounded-xl h-[400px] object-cover"/>
            <Image src="/images/teamg-2.png" alt="Osmain team" width={500} height={400} className="w-full rounded-xl h-[400px] object-cover"/>
        </div>
      </Container>
    </div>
  );
};

export default TeamGalary;
