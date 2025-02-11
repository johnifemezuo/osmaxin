import { ArrowRight } from "../../Icons/ArrowRight";
import Link from "next/link";

export const ButtonOutlinePrimary = ({
  link,
  text,
}: {
  link: string;
  text: string;
}) => {
  return (
    <Link href={link} className="flex items-center space-x-3 s">
      <div className="flex items-center ">
              <button className="bg-transparent font-medium lg:text-lg  border-primary text-primary border-2 py-2 px-4 rounded-full h-12 ">
                {text}
              </button>
              <div className="bg-primary  place-content-center rounded-full w-12 h-12 grid text-white ">
                <ArrowRight  />
              </div>
            </div>
    </Link>
  );
};
