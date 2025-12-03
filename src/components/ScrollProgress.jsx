import { useScroll, useSpring, motion } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left"
      style={{ scaleX }}
    >
      <div className="h-full w-full bg-gradient-to-r from-black/20 via-black/40 to-black/20 dark:from-white/20 dark:via-white/40 dark:to-white/20" />
    </motion.div>
  );
};

export default ScrollProgress;

