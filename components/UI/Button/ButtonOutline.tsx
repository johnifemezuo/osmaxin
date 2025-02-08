import { ArrowRight } from "../../Icons/ArrowRight";
import Link from "next/link";

export const ButtonOutline = ({
  link,
  text,
}: {
  link: string;
  text: string;
}) => {
  return (
    <Link href={link} className="flex items-center space-x-3 s">
      <div className="flex items-center ">
              <button className="bg-transparent font-medium lg:text-lg  border-white text-white border-2 py-2 px-4 rounded-full h-12 ">
                {text}
              </button>
              <div className="bg-white  place-content-center rounded-full w-12 h-12 grid place- text-white content-center">
                <ArrowRight className="text-primary" />
              </div>
            </div>
    </Link>
  );
};
