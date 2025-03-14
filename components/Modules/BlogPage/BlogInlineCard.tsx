import Image from "next/image";
import Link from "next/link";

export const BlogInlineCard = ({
  title,
  author,
  category,
  image,
  readTime,
  date,
  link,
}: {
  title: string;
  author: string;
  category: string;
  image: string;
  readTime: number | string;
  date: string;
  link: string;
}) => {
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
      <div className="grid ">
        <div className="w-full h-[200px] flex-shrink-0 lg:w-full lg:h-[250px]">
          <Image
            src={image}
            alt="title"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-1 pt-6">
          <div className="text-xs md:text-sm text-gray-500">
            Case study · {readTime} min read, {formattedDate}
          </div>
          <Link
            href={link}
            className="text-lg lg:text-xl hover:text-primary text-zinc-700 font-semibold leading-tight"
          >
            {title}
          </Link>
          <div className="text-xs text-gray-500">By {author}</div>
        </div>
      </div>
  );
};
