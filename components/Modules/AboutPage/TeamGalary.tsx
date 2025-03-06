import { useCarouselFunctions } from "@/base/hooks/useCarouselfunctions";
import { Container } from "@/components/Container/Container";
import Image from "next/image";
import { useEffect } from "react";

const TeamGalary = ({ data }: { data: any }) => {
  const team = data.teamPics[0].image;

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    emblaRef,
    toggleAutoplay,
  } = useCarouselFunctions();

  useEffect(() => {
    toggleAutoplay();
  }, [toggleAutoplay]);

  return (
    <div>
      <Container>
        <div ref={emblaRef} className=" overflow-hidden mt-12 lg:mt-20">
          <div className="flex items-center space-x-8 py-9 lg:py-12 ">
            {team.map((team: any, index: number) => (
              <Image
                key={index}
                src={team.url}
                alt="Osmain team"
                width={500}
                height={400}
                className="w-full rounded-xl h-[400px] object-cover"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeamGalary;
