import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroHighlight = () => {
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, -35, -65, -85]);
  const rotateY = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 20, 40, 60]);
  const translateY = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, -100, -250, -500]);
  const translateX = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 150, 350, 600]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.9, 1], [1, 1, 0.8, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [1, 1.1, 1.3, 1.5]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.1 && latest < 0.9) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen bg-white overflow-hidden"
      style={{
        rotateX,
        rotateY,
        translateY,
        translateX,
        opacity,
        scale,
        transformOrigin: "center center",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-8 md:px-16 lg:px-24 py-16">
        
        {/* Top Section - Main Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Pitch */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
            </h1>
          </motion.div>

          {/* Right Side - Supporting Text + CTA */}
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-black leading-relaxed max-w-md">
              The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
            </p>
            
            <motion.button
              className="w-32 h-32 bg-black rounded-full flex items-center justify-center text-white font-semibold text-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Know More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section - Social Proof */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Tagline */}
          <div className="text-center">
            <p className="text-lg text-black">
              Trusted by <em className="font-serif italic">people</em> worldwide
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-black mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                5,555+
              </motion.div>
              <p className="text-black">LinkedIn Connections</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-black mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                210+
              </motion.div>
              <p className="text-black">GitHub Stars</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-black mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                2
              </motion.div>
              <p className="text-black">Years of Experience</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default IntroHighlight;
