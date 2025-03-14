import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Appear = ({
  children,
  delay,
  duration,
  className
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: duration ?? 0.8,
        delay: delay ?? 0.8,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
