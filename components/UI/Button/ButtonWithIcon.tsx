"use client";

import RightIcon from "@/components/Icons/RightIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ButtonWithIcon = ({
  link,
  text,
  className,
}: {
  link: string;
  text: string;
  className?: string;
}) => {
  return (
    <Link href={link} className="flex items-center space-x-3 s">
      <motion.button
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className={`${className} space-x-2 py-3 px-3 flex  items-center rounded-full justify-center bg-white  text-zinc-800 font-medium`}
      >
        <Image
          src="/images/logoicon.png"
          width={40}
          height={40}
          alt="Osmaxin"
          className=""
        />
        <span className="px-1 lg:text-lg uppercase font-medium">{text}</span>{" "}
        <span className="rounded-full w-9 h-9 place-content-center grid bg-primary ">
          <RightIcon className="text-white" />
        </span>
      </motion.button>
    </Link>
  );
};
