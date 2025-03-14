import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  title,
  author,
  category,
  image,
  readTime,
  date,
  slug,
}: {
  title: string;
  author: string;
  category: string;
  image: string;
  readTime: number | string;
  date: string;
  slug: string;
}) => {

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4 items-center">
        <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 lg:w-[200px] lg:h-[150px]">
          <Image
            src={image}
            alt="title"
            width={112}
            height={112}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <div className="text-xs lg:text-sm text-gray-500 ">
            <span className="capitalize">{category}</span> ·{" "}
            <span>{readTime} mins read </span> · <span>{formattedDate}</span>
          </div>
          <Link
            href={slug}
            className="text-base lg:text-xl hover:text-primary text-zinc-700 font-semibold leading-tight"
          >
            {title}
          </Link>
          <div className="text-xs text-gray-500 lg:text-sm">By {author}</div>
        </div>
      </div>
    </div>
  );
};
