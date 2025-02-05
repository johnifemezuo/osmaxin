import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc
}: Readonly<ServiceCardProps>) {
  return (
    <div className="flex flex-col bg-white folder-shap rounded-xl max-w-[500px]  justify-between px-8 py-8 relative">
        <Image
          src="/images/logoicon.png"
          width={40}
          height={40}
          alt="Osmaxin"
          className="mb-4"
        />
        <h1 className="text-2xl font-bold text-zinc-700 mb-2">
          {title}
        </h1>

      <div>
        <p className="text-zinc-700">
          {description}
        </p>
      </div>

      <Image
        src={imageSrc}
        width={150}
        height={150}
        alt="Osmaxin service Mobile app developement"
        className="absolute -top-10 right-10"
      />
    </div>
  );
}
