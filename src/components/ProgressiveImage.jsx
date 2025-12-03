import { useState } from "react";
import { motion } from "framer-motion";
import SkeletonLoader from "./SkeletonLoader";

const ProgressiveImage = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <SkeletonLoader className="absolute inset-0" />
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: loaded ? 1 : 0,
          filter: loaded ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full object-cover ${loaded ? "block" : "absolute inset-0"}`}
        {...props}
      />
    </div>
  );
};

export default ProgressiveImage;

