import { motion } from "framer-motion";

const SkeletonLoader = ({ className = "", width = "100%", height = "100%" }) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default SkeletonLoader;

