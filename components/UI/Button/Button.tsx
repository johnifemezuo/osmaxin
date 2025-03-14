import RightIcon from "@/components/Icons/RightIcon";
import { motion } from "framer-motion";
import React from "react";

export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 0.90 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      className={`${className} space-x-4 py-3 px-3 flex justify-items-center items-center rounded-full justify-center bg-[#E6E7F1] hover:bg-primary/30 text-zinc-800 font-medium`}
    >
      <span className="pl-2 lg:text-base uppercase font-medium">{children}</span>{" "}
      <span className="rounded-full w-9 h-9 place-content-center grid bg-primary ">
        <RightIcon className="text-white -rotate-12 " />
      </span>
    </motion.button>
  );
};
