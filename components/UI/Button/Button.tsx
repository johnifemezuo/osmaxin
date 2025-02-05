import { ArrowRight } from "../../Icons/ArrowRight";
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      className={`${className} space-x-4 py-2 px-3 flex justify-items-center items-center rounded-full justify-center bg-primary hover:bg-primary/30 text-white`}
    >
      <span className="pl-2 lg:text-lg uppercase font-medium">{children}</span>{" "}
      <span className="rounded-full w-9 h-9 place-content-center grid bg-white ">
        <ArrowRight className="text-primary" />
      </span>
    </motion.button>
  );
};
