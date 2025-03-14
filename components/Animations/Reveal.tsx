import { motion } from "framer-motion";
import { ReactNode } from "react";

function Reveal({
  children,
  delay,
  duration,
  className
}: Readonly<{
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}>) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
      }}
      animate={{
        opacity: 1,
        y: 0,
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
}

export default Reveal;
