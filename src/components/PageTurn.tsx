import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTurnProps {
  children: ReactNode;
  pageKey: string;
  direction: number;
}

const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? -15 : 15,
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    rotateY: 0,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? 15 : -15,
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.95,
  }),
};

const pageTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

const PageTurn = ({ children, pageKey, direction }: PageTurnProps) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={pageKey}
        custom={direction}
        variants={pageVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={pageTransition}
        style={{ 
          transformOrigin: direction > 0 ? "left center" : "right center",
          perspective: 1200,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTurn;
