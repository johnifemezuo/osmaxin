import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import Image from "next/image";
import Link from "next/link";

const TeamCard = ({
  title,
  link,
  image,
  name,
}: {
  title: string;
  link: string;
  image: string;
  name: string;
}) => {
  return (
    <Link
      href={link}
      className="group-hover:scale-105 transition-transform duration-300">
      <div className="flex hover flex-col max-w-full rounded-lg bg-white/50 relative h-[300px] lg:h-[360px] overflow-hidden ">
        <div className="bg-gradient-to-b from-[#00000034] px-5 to-[#00008bcb] to-purple-5000 absolute inset-0 z-10 w-full h-full"></div>
        <Image
          src={image}
          alt="team"
          className="w-full h-full object-cover absolute inset-0 z-0 hover:scale-105 transition-transform duration-300"
          width={300}
          height={300}
        />

        <div className="rounded-full grid place-content-center w-10 h-10 z-30 bg-white absolute top-3 right-3">
          <LinkedinIcon className="text-primary"/>
        </div>

        <div className="space-y-2 absolute bottom-0 z-20 p-4">
          <h3 className="text-white text-2xl font-semibold">{name}</h3>
          <p className="text-white/70">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
