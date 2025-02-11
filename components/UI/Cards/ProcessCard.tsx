import Image from "next/image";

interface ProcessCardProps {
  title: string;
  description: string;
  iconImg: string;
  step: string;
  stepColor: string;
  projectTimeline: string;
}

export default function ProcessCard({
  title,
  description,
  iconImg,
  step,
  stepColor,
  projectTimeline,
}: Readonly<ProcessCardProps>) {
  return (
    <div className="flex flex-col bg-white folder-shape rounded-lg max-w-[500px]  justify-between px-8 py-10 relative">
      <div className="w-14 h-14 mb-5 bg-[#DADCEB] rounded-full  items-center justify-center grid place-content-center ">
        <Image
          src={iconImg}
          width={40}
          height={40}
          alt="Osmaxin"
          className=""
        />
      </div>

      <div className="space-y-4">
        <p className="text-zinc-600 text-sm font-medium">
          <span className={`${stepColor} uppercase`}> Step {step}</span>{" "}
          {projectTimeline}
        </p>
        <h1 className="text-2xl font-bold text-zinc-700 mb-2">{title}</h1>

        <p className="text-zinc-700">{description}</p>
      </div>
    </div>
  );
}
